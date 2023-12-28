import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface TestKinesisStreamActionStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestKinesisStreamActionStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestKinesisStreamActionStackProps = {}) {
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

    // Conditions
    const awsCdkKinesisEncryptedStreamsUnsupportedRegions = (this.region === 'cn-north-1' || this.region === 'cn-northwest-1');

    // Resources
    const myStream5C050e93 = new kinesis.CfnStream(this, 'MyStream5C050E93', {
      retentionPeriodHours: 24,
      shardCount: 3,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

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

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            kinesis: {
              partitionKey: '${timestamp()}',
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
              streamName: myStream5C050e93.ref,
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT * FROM \'device/+/data\'',
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: 'kinesis:PutRecord',
            Effect: 'Allow',
            Resource: myStream5C050e93.attrArn,
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

