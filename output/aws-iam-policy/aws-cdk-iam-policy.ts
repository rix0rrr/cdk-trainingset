import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkIamPolicyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkIamPolicy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkIamPolicyProps = {}) {
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
    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
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

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const goodbyePolicy739B8974 = new iam.CfnPolicy(this, 'GoodbyePolicy739B8974', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:*',
            Effect: 'Allow',
            Resource: role1Abcc5f0.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'GoodbyePolicy739B8974',
      users: [
        myUserDc45028b.ref,
      ],
    });

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const helloPolicyD59007df = new iam.CfnPolicy(this, 'HelloPolicyD59007DF', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: role1Abcc5f0.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Default',
      users: [
        myUserDc45028b.ref,
      ],
    });
  }
}

