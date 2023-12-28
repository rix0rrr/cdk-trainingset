import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';

export interface TestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestStackProps = {}) {
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
    const myAlarm696658B6 = new cloudwatch.CfnAlarm(this, 'MyAlarm696658B6', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      dimensions: [
        {
          name: 'MyDimension',
          value: 'MyDimensionValue',
        },
      ],
      metricName: 'MyMetric',
      namespace: 'MyNamespace',
      period: 300,
      statistic: 'Average',
      threshold: 100,
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

    if (myAlarm696658B6 == null) { throw new Error(`A combination of conditions caused 'myAlarm696658B6' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            cloudwatchAlarm: {
              alarmName: myAlarm696658B6.ref,
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
              stateReason: [
                'Set state of \'',
                myAlarm696658B6.ref,
                '\' to \'ALARM\'',
              ].join(''),
              stateValue: 'ALARM',
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT topic(2) as device_id FROM \'device/+/data\'',
      },
    });

    if (myAlarm696658B6 == null) { throw new Error(`A combination of conditions caused 'myAlarm696658B6' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: 'cloudwatch:SetAlarmState',
            Effect: 'Allow',
            Resource: myAlarm696658B6.attrArn,
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

