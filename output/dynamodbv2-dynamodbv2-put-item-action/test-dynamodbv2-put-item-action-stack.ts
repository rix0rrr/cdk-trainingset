import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';

export interface test-dynamodbv2-put-item-action-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class test-dynamodbv2-put-item-action-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: test-dynamodbv2-put-item-action-stackProps = {}) {
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
    const myTable794Eded1 = new dynamodb.CfnTable(this, 'MyTable794EDED1', {
      keySchema: [
        {
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
        {
          attributeName: 'sortKey',
          keyType: 'RANGE',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
        {
          attributeName: 'sortKey',
          attributeType: 'N',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 1,
        writeCapacityUnits: 1,
      },
      tableName: 'MyTable',
    });
    myTable794Eded1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const topicRuleTopicRuleActionRole246C4f77 = new iam.CfnRole(this, 'TopicRuleTopicRuleActionRole246C4F77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iot.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myTable794Eded1 == null) { throw new Error(`A combination of conditions caused 'myTable794Eded1' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            dynamoDBv2: {
              putItem: {
                tableName: myTable794Eded1.ref,
              },
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT * FROM \'device/+/data\'',
      },
    });

    if (myTable794Eded1 == null) { throw new Error(`A combination of conditions caused 'myTable794Eded1' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: 'dynamodb:PutItem',
            Effect: 'Allow',
            Resource: myTable794Eded1.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687',
      roles: [
        topicRuleTopicRuleActionRole246C4f77.ref,
      ],
    });
  }
}

