import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegPermissionsBoundaryProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegPermissionsBoundary extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegPermissionsBoundaryProps = {}) {
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
      permissionsBoundary: [
        'arn:',
        this.partition,
        ':iam::12345678:policy/cdk-hnb659fds-PermissionsBoundary-12345678-test-region',
      ].join(''),
    });
  }
}

