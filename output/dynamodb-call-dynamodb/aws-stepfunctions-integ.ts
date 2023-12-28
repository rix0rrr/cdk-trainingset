import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-stepfunctions-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-stepfunctions-integ extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: aws-stepfunctions-integProps = {}) {
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
    const messages804Fa4eb = new dynamodb.CfnTable(this, 'Messages804FA4EB', {
      keySchema: [
        {
          attributeName: 'MessageId',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'MessageId',
          attributeType: 'S',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 10,
        writeCapacityUnits: 5,
      },
      tableName: 'Messages',
    });
    messages804Fa4eb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
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

    if (messages804Fa4eb == null) { throw new Error(`A combination of conditions caused 'messages804Fa4eb' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'dynamodb:DeleteItem',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':dynamodb:',
              this.region,
              ':',
              this.account,
              ':table/',
              messages804Fa4eb.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (messages804Fa4eb == null) { throw new Error(`A combination of conditions caused 'messages804Fa4eb' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"bar\":\"SomeValue\"},\"Next\":\"PutItem\"},\"PutItem\":{\"Next\":\"GetItemAfterPut\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:putItem\",\"Parameters\":{\"Item\":{\"MessageId\":{\"S\":\"1234\"},\"Text\":{\"S.$\":\"$.bar\"},\"TotalCount\":{\"N\":\"18\"},\"Activated\":{\"BOOL.$\":\"$.foo\"},\"List\":{\"L.$\":\"$.list\"}},\"TableName\":\"',
        messages804Fa4eb.ref,
        '\"}},\"GetItemAfterPut\":{\"Next\":\"UpdateItem\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:getItem\",\"Parameters\":{\"Key\":{\"MessageId\":{\"S\":\"1234\"}},\"TableName\":\"',
        messages804Fa4eb.ref,
        '\",\"ConsistentRead\":false}},\"UpdateItem\":{\"Next\":\"GetItemAfterUpdate\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:updateItem\",\"Parameters\":{\"Key\":{\"MessageId\":{\"S\":\"1234\"}},\"TableName\":\"',
        messages804Fa4eb.ref,
        '\",\"ExpressionAttributeValues\":{\":val\":{\"N.$\":\"$.Item.TotalCount.N\"},\":rand\":{\"N\":\"24\"}},\"UpdateExpression\":\"SET TotalCount = :val + :rand\"}},\"GetItemAfterUpdate\":{\"Next\":\"DeleteItem\",\"Type\":\"Task\",\"OutputPath\":\"$.Item.TotalCount.N\",\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:getItem\",\"Parameters\":{\"Key\":{\"MessageId\":{\"S\":\"1234\"}},\"TableName\":\"',
        messages804Fa4eb.ref,
        '\",\"ConsistentRead\":false}},\"DeleteItem\":{\"End\":true,\"Type\":\"Task\",\"ResultPath\":null,\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:deleteItem\",\"Parameters\":{\"Key\":{\"MessageId\":{\"S\":\"1234\"}},\"TableName\":\"',
        messages804Fa4eb.ref,
        '\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineArn', {
      key: 'StateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

