import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegPrincipalWithConditionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegPrincipalWithConditions extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegPrincipalWithConditionsProps = {}) {
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
            Condition: {
              StringLike: {
                'aws:username': 'foo-*',
                'aws:PrincipalTag/owner': 'foo',
              },
              Bool: {
                'aws:MultiFactorAuthPresent': 'true',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });
  }
}

