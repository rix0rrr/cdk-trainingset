import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface AssertionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Assertions extends cdk.Stack {
  public readonly exportsOutputRefUtf8Parameter528A4835;

  public constructor(scope: cdk.App, id: string, props: AssertionsProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const utf8Parameter = new ssm.CfnParameter(this, 'Utf8Parameter', {
      type: 'String',
      value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ!\"#¤%&/()=?`´^*+~_-.,:;<>|',
    });

    // Outputs
    this.exportsOutputRefUtf8Parameter528A4835 = utf8Parameter.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefUtf8Parameter528A4835', {
      key: 'ExportsOutputRefUtf8Parameter528A4835',
      exportName: 'Assertions:ExportsOutputRefUtf8Parameter528A4835',
      value: this.exportsOutputRefUtf8Parameter528A4835!.toString(),
    });
  }
}

