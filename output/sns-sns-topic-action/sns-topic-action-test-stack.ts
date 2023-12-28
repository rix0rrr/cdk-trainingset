import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface SnsTopicActionTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class SnsTopicActionTestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: SnsTopicActionTestStackProps = {}) {
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
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
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

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            sns: {
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
              targetArn: myTopic86869434.ref,
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT topic(2) as device_id, year, month, day FROM \'device/+/data\'',
      },
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: myTopic86869434.ref,
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

