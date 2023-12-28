import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIamImportedRoleRoleStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIamImportedRoleRoleStack extends cdk.Stack {
  public readonly exportsOutputRefTestRole6C9272df9dd89f08;

  public constructor(scope: cdk.App, id: string, props: IntegIamImportedRoleRoleStackProps = {}) {
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
    const testRole6C9272df = new iam.CfnRole(this, 'TestRole6C9272DF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sqs.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    // Outputs
    this.exportsOutputRefTestRole6C9272df9dd89f08 = testRole6C9272df.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefTestRole6C9272DF9DD89F08', {
      key: 'ExportsOutputRefTestRole6C9272DF9DD89F08',
      exportName: 'integ-iam-imported-role-role-stack:ExportsOutputRefTestRole6C9272DF9DD89F08',
      value: this.exportsOutputRefTestRole6C9272df9dd89f08!.toString(),
    });
  }
}

