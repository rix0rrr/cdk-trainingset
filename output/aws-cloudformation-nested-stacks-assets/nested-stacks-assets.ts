import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface nested-stacks-assetsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class nested-stacks-assets extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nested-stacks-assetsProps = {}) {
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
    const nestedNestedStackNestedNestedStackResourceDefdaa4d = new cloudformation.CfnStack(this, 'NestedNestedStackNestedNestedStackResourceDEFDAA4D', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/e3958b0a2118294d13d958ce7f502b4f181d2e77ff4e216b3f21c91905414db0.json',
      ].join(''),
    });
    nestedNestedStackNestedNestedStackResourceDefdaa4d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

