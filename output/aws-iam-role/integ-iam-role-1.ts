import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIamRole1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIamRole1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegIamRole1Props = {}) {
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
    const testRole25D98ab21 = new iam.CfnRole(this, 'TestRole25D98AB21', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'sts:ExternalId': 'supply-me',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const testRole3C1f30727 = new iam.CfnRole(this, 'TestRole3C1F30727', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'aws:PrincipalOrgID': 'o-1234',
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

    if (testRole6C9272df == null) { throw new Error(`A combination of conditions caused 'testRole6C9272df' to be undefined. Fixit.`); }
    const helloPolicyD59007df = new iam.CfnPolicy(this, 'HelloPolicyD59007DF', {
      policyDocument: {
        Statement: [
          {
            Action: 'ec2:*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Default',
      roles: [
        testRole6C9272df.ref,
      ],
    });

    if (testRole6C9272df == null) { throw new Error(`A combination of conditions caused 'testRole6C9272df' to be undefined. Fixit.`); }
    const testRoleDefaultPolicyD1c92014 = new iam.CfnPolicy(this, 'TestRoleDefaultPolicyD1C92014', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TestRoleDefaultPolicyD1C92014',
      roles: [
        testRole6C9272df.ref,
      ],
    });
  }
}

