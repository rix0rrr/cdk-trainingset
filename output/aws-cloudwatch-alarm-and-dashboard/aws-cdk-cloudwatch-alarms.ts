import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkCloudwatchAlarmsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCloudwatchAlarms extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCloudwatchAlarmsProps = {}) {
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
    const queue = new sqs.CfnQueue(this, 'queue', {
    });

    if (queue == null) { throw new Error(`A combination of conditions caused 'queue' to be undefined. Fixit.`); }
    const alarm7103F465 = new cloudwatch.CfnAlarm(this, 'Alarm7103F465', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      dimensions: [
        {
          name: 'QueueName',
          value: queue.attrQueueName,
        },
      ],
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Average',
      threshold: 100,
    });

    if (alarm7103F465 == null) { throw new Error(`A combination of conditions caused 'alarm7103F465' to be undefined. Fixit.`); }
    if (queue == null) { throw new Error(`A combination of conditions caused 'queue' to be undefined. Fixit.`); }
    const dashCcd7f836 = new cloudwatch.CfnDashboard(this, 'DashCCD7F836', {
      dashboardBody: [
        '{\"start\":\"-9H\",\"end\":\"2018-12-17T06:00:00.000Z\",\"periodOverride\":\"inherit\",\"widgets\":[{\"type\":\"text\",\"width\":6,\"height\":2,\"x\":0,\"y\":0,\"properties\":{\"markdown\":\"# This is my dashboard\"}},{\"type\":\"text\",\"width\":6,\"height\":2,\"x\":6,\"y\":0,\"properties\":{\"markdown\":\"you like?\"}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":2,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Messages in queue\",\"region\":\"',
        this.region,
        '\",\"annotations\":{\"alarms\":[\"',
        alarm7103F465.attrArn,
        '\"]},\"yAxis\":{}}},{\"type\":\"alarm\",\"width\":6,\"height\":3,\"x\":0,\"y\":8,\"properties\":{\"title\":\"Firing alarms\",\"alarms\":[\"',
        alarm7103F465.attrArn,
        '\"]}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":11,\"properties\":{\"view\":\"timeSeries\",\"title\":\"More messages in queue with alarm annotation\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\"]],\"annotations\":{\"horizontal\":[{\"label\":\"ApproximateNumberOfMessagesVisible >= 100 for 2 datapoints within 15 minutes\",\"value\":100,\"yAxis\":\"left\"}]},\"yAxis\":{}}},{\"type\":\"metric\",\"width\":6,\"height\":3,\"x\":0,\"y\":17,\"properties\":{\"view\":\"singleValue\",\"title\":\"Current messages in queue\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\"]]}},{\"type\":\"log\",\"width\":6,\"height\":6,\"x\":0,\"y\":20,\"properties\":{\"view\":\"table\",\"title\":\"Errors in my log group\",\"region\":\"',
        this.region,
        '\",\"query\":\"SOURCE \'my-log-group\' | fields @message\\n                | filter @message like /Error/\"}},{\"type\":\"log\",\"width\":6,\"height\":6,\"x\":0,\"y\":26,\"properties\":{\"view\":\"bar\",\"title\":\"Errors in my log group - bar\",\"region\":\"',
        this.region,
        '\",\"query\":\"SOURCE \'my-log-group\' | fields @message\\n                | filter @message like /Error/\"}},{\"type\":\"log\",\"width\":6,\"height\":6,\"x\":0,\"y\":32,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Errors in my log group - line\",\"region\":\"',
        this.region,
        '\",\"query\":\"SOURCE \'my-log-group\' | fields @message\\n                | filter @message like /Error/\",\"stacked\":false}},{\"type\":\"log\",\"width\":6,\"height\":6,\"x\":0,\"y\":38,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Errors in my log group - stacked\",\"region\":\"',
        this.region,
        '\",\"query\":\"SOURCE \'my-log-group\' | fields @message\\n                | filter @message like /Error/\",\"stacked\":true}},{\"type\":\"log\",\"width\":6,\"height\":6,\"x\":0,\"y\":44,\"properties\":{\"view\":\"pie\",\"title\":\"Errors in my log group - pie\",\"region\":\"',
        this.region,
        '\",\"query\":\"SOURCE \'my-log-group\' | fields @message\\n                | filter @message like /Error/\"}},{\"type\":\"metric\",\"width\":6,\"height\":3,\"x\":0,\"y\":50,\"properties\":{\"view\":\"singleValue\",\"title\":\"Sent message size\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"SentMessageSize\",\"QueueName\",\"',
        queue.attrQueueName,
        '\"]],\"singleValueFullPrecision\":false}},{\"type\":\"metric\",\"width\":6,\"height\":3,\"x\":0,\"y\":53,\"properties\":{\"view\":\"singleValue\",\"title\":\"Sent message size with full precision\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"SentMessageSize\",\"QueueName\",\"',
        queue.attrQueueName,
        '\"]],\"singleValueFullPrecision\":true}},{\"type\":\"custom\",\"width\":6,\"height\":6,\"x\":0,\"y\":56,\"properties\":{\"endpoint\":\"arn:aws:lambda:us-west-2:123456789012:function:my-function\",\"title\":\"My custom alarm\",\"updateOn\":{\"refresh\":true,\"resize\":true,\"timeRange\":true}}}]}',
      ].join(''),
      dashboardName: 'MyCustomDashboardName',
    });
  }
}

