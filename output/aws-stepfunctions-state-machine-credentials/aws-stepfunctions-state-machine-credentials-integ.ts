import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-stepfunctions-state-machine-credentials-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-stepfunctions-state-machine-credentials-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-stepfunctions-state-machine-credentials-integProps = {}) {
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

    const stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc = new iam.CfnRole(this, 'StateMachineWithCrossAccountLiteralCredentialsRole4AA04DBC', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const stateMachineWithJsonPathCredentialsRole7Bde9fa6 = new iam.CfnRole(this, 'StateMachineWithJsonPathCredentialsRole7BDE9FA6', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const stateMachineWithLiteralCredentialsRole1F1deec1 = new iam.CfnRole(this, 'StateMachineWithLiteralCredentialsRole1F1DEEC1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc == null) { throw new Error(`A combination of conditions caused 'stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc' to be undefined. Fixit.`); }
    const stateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943bd = new iam.CfnPolicy(this, 'StateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943BD', {
      policyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: 'arn:aws:iam::123456789012:role/CrossAccountRole',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943BD',
      roles: [
        stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc.ref,
      ],
    });

    if (stateMachineWithJsonPathCredentialsRole7Bde9fa6 == null) { throw new Error(`A combination of conditions caused 'stateMachineWithJsonPathCredentialsRole7Bde9fa6' to be undefined. Fixit.`); }
    const stateMachineWithJsonPathCredentialsRoleDefaultPolicy1Da1c50b = new iam.CfnPolicy(this, 'StateMachineWithJsonPathCredentialsRoleDefaultPolicy1DA1C50B', {
      policyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineWithJsonPathCredentialsRoleDefaultPolicy1DA1C50B',
      roles: [
        stateMachineWithJsonPathCredentialsRole7Bde9fa6.ref,
      ],
    });

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (stateMachineWithLiteralCredentialsRole1F1deec1 == null) { throw new Error(`A combination of conditions caused 'stateMachineWithLiteralCredentialsRole1F1deec1' to be undefined. Fixit.`); }
    const stateMachineWithLiteralCredentialsRoleDefaultPolicy331008Ee = new iam.CfnPolicy(this, 'StateMachineWithLiteralCredentialsRoleDefaultPolicy331008EE', {
      policyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: role1Abcc5f0.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineWithLiteralCredentialsRoleDefaultPolicy331008EE',
      roles: [
        stateMachineWithLiteralCredentialsRole1F1deec1.ref,
      ],
    });

    if (stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc == null) { throw new Error(`A combination of conditions caused 'stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc' to be undefined. Fixit.`); }
    if (stateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943bd == null) { throw new Error(`A combination of conditions caused 'stateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943bd' to be undefined. Fixit.`); }
    const stateMachineWithCrossAccountLiteralCredentialsA2dd713d = new stepfunctions.CfnStateMachine(this, 'StateMachineWithCrossAccountLiteralCredentialsA2DD713D', {
      roleArn: stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc.attrArn,
      definitionString: '{\"StartAt\":\"FakeTaskWithCrossAccountLiteralCredentials\",\"States\":{\"FakeTaskWithCrossAccountLiteralCredentials\":{\"End\":true,\"Type\":\"Task\",\"Credentials\":{\"RoleArn\":\"arn:aws:iam::123456789012:role/CrossAccountRole\"},\"Resource\":\"arn:aws:states:::dynamodb:putItem\",\"Parameters\":{\"TableName\":\"my-cool-table\",\"Item\":{\"id\":{\"S\":\"my-entry\"}}}}},\"TimeoutSeconds\":30}',
    });
    stateMachineWithCrossAccountLiteralCredentialsA2dd713d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachineWithCrossAccountLiteralCredentialsA2dd713d.addDependency(stateMachineWithCrossAccountLiteralCredentialsRoleDefaultPolicy9B9943bd);
    stateMachineWithCrossAccountLiteralCredentialsA2dd713d.addDependency(stateMachineWithCrossAccountLiteralCredentialsRole4Aa04dbc);

    if (stateMachineWithJsonPathCredentialsRole7Bde9fa6 == null) { throw new Error(`A combination of conditions caused 'stateMachineWithJsonPathCredentialsRole7Bde9fa6' to be undefined. Fixit.`); }
    if (stateMachineWithJsonPathCredentialsRoleDefaultPolicy1Da1c50b == null) { throw new Error(`A combination of conditions caused 'stateMachineWithJsonPathCredentialsRoleDefaultPolicy1Da1c50b' to be undefined. Fixit.`); }
    const stateMachineWithJsonPathCredentials5786712E = new stepfunctions.CfnStateMachine(this, 'StateMachineWithJsonPathCredentials5786712E', {
      roleArn: stateMachineWithJsonPathCredentialsRole7Bde9fa6.attrArn,
      definitionString: '{\"StartAt\":\"FakeTaskWithJsonPathCredentials\",\"States\":{\"FakeTaskWithJsonPathCredentials\":{\"End\":true,\"Type\":\"Task\",\"Credentials\":{\"RoleArn.$\":\"$.RoleArn\"},\"Resource\":\"arn:aws:states:::dynamodb:putItem\",\"Parameters\":{\"TableName\":\"my-cool-table\",\"Item\":{\"id\":{\"S\":\"my-entry\"}}}}},\"TimeoutSeconds\":30}',
    });
    stateMachineWithJsonPathCredentials5786712E.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachineWithJsonPathCredentials5786712E.addDependency(stateMachineWithJsonPathCredentialsRoleDefaultPolicy1Da1c50b);
    stateMachineWithJsonPathCredentials5786712E.addDependency(stateMachineWithJsonPathCredentialsRole7Bde9fa6);

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (stateMachineWithLiteralCredentialsRole1F1deec1 == null) { throw new Error(`A combination of conditions caused 'stateMachineWithLiteralCredentialsRole1F1deec1' to be undefined. Fixit.`); }
    if (stateMachineWithLiteralCredentialsRoleDefaultPolicy331008Ee == null) { throw new Error(`A combination of conditions caused 'stateMachineWithLiteralCredentialsRoleDefaultPolicy331008Ee' to be undefined. Fixit.`); }
    const stateMachineWithLiteralCredentialsBf5a67ae = new stepfunctions.CfnStateMachine(this, 'StateMachineWithLiteralCredentialsBF5A67AE', {
      roleArn: stateMachineWithLiteralCredentialsRole1F1deec1.attrArn,
      definitionString: [
        '{\"StartAt\":\"FakeTaskWithLiteralCredentials\",\"States\":{\"FakeTaskWithLiteralCredentials\":{\"End\":true,\"Type\":\"Task\",\"Credentials\":{\"RoleArn\":\"',
        role1Abcc5f0.attrArn,
        '\"},\"Resource\":\"arn:aws:states:::dynamodb:putItem\",\"Parameters\":{\"TableName\":\"my-cool-table\",\"Item\":{\"id\":{\"S\":\"my-entry\"}}}}},\"TimeoutSeconds\":30}',
      ].join(''),
    });
    stateMachineWithLiteralCredentialsBf5a67ae.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachineWithLiteralCredentialsBf5a67ae.addDependency(stateMachineWithLiteralCredentialsRoleDefaultPolicy331008Ee);
    stateMachineWithLiteralCredentialsBf5a67ae.addDependency(stateMachineWithLiteralCredentialsRole1F1deec1);
  }
}

