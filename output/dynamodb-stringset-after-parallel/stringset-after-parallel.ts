import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface stringset-after-parallelProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stringset-after-parallel extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stringset-after-parallelProps = {}) {
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

    const tableCd117fa1 = new dynamodb.CfnTable(this, 'TableCD117FA1', {
      keySchema: [
        {
          attributeName: 'pk',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'pk',
          attributeType: 'S',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'dynamodb:PutItem',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':dynamodb:',
              this.region,
              ':',
              this.account,
              ':table/',
              tableCd117fa1.ref,
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Parallel\",\"States\":{\"Parallel\":{\"Type\":\"Parallel\",\"ResultPath\":\"$\",\"Next\":\"PutItem\",\"Branches\":[{\"StartAt\":\"passPK\",\"States\":{\"passPK\":{\"Type\":\"Pass\",\"Parameters\":{\"pk.$\":\"$.pk\"},\"End\":true}}},{\"StartAt\":\"PassStringSet\",\"States\":{\"PassStringSet\":{\"Type\":\"Pass\",\"Parameters\":{\"stringset.$\":\"$.stringset\"},\"End\":true}}}]},\"PutItem\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::dynamodb:putItem\",\"Parameters\":{\"Item\":{\"pk\":{\"S\":\"$[0].pk\"},\"stringset\":{\"SS.$\":\"$[1].stringset\"}},\"TableName\":\"',
        tableCd117fa1.ref,
        '\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);
  }
}

