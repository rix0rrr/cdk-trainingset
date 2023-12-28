import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-iam-managed-policyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-iam-managed-policy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-iam-managed-policyProps = {}) {
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

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const twoManagedPolicy7E701864 = new iam.CfnManagedPolicy(this, 'TwoManagedPolicy7E701864', {
      description: '',
      path: '/',
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
    });

    if (twoManagedPolicy7E701864 == null) { throw new Error(`A combination of conditions caused 'twoManagedPolicy7E701864' to be undefined. Fixit.`); }
    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
      managedPolicyArns: [
        twoManagedPolicy7E701864.ref,
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/SecurityAudit',
        ].join(''),
      ],
    });

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const oneManagedPolicy77F9185f = new iam.CfnManagedPolicy(this, 'OneManagedPolicy77F9185F', {
      description: 'My Policy',
      managedPolicyName: 'Default',
      path: '/some/path/',
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
      roles: [
        role1Abcc5f0.ref,
      ],
      users: [
        myUserDc45028b.ref,
      ],
    });
  }
}

