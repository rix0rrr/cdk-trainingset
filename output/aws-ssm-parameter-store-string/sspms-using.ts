import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface sspms-usingProps extends cdk.StackProps {
  /**
   * @default 1
   */
  readonly myParameterVersion?: string;
  /**
   * @default '/My/Public/Parameter'
   */
  readonly myValueParameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class sspms-using extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: sspms-usingProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      myParameterVersion: props.myParameterVersion ?? 1,
      myValueParameter: new cdk.CfnParameter(this, 'MyValueParameter', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.myValueParameter?.toString() ?? '/My/Public/Parameter',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const dummyResourceUsingStringParameters = new iam.CfnUser(this, 'DummyResourceUsingStringParameters', {
      loginProfile: {
        password: [
          props.myValueParameter!,
          [
            '{{resolve:ssm:/My/Public/Parameter:',
            props.myParameterVersion!,
            '}}',
          ].join(''),
          '{{resolve:ssm-secure:/My/Secret/Parameter}}-{{resolve:ssm-secure:/My/Secret/Parameter:1}}',
          [
            '{{resolve:ssm-secure:/My/Secret/Parameter:',
            props.myParameterVersion!,
            '}}',
          ].join(''),
        ].join('-'),
      },
    });
    dummyResourceUsingStringParameters.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

