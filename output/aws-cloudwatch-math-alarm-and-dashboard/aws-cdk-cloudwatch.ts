import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-cdk-cloudwatchProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-cloudwatch extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-cloudwatchProps = {}) {
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
      metrics: [
        {
          expression: 'm1+m2',
          id: 'expr_1',
          label: 'Total Messages',
        },
        {
          id: 'm1',
          label: 'Visible Messages',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'QueueName',
                  value: queue.attrQueueName,
                },
              ],
              metricName: 'ApproximateNumberOfMessagesVisible',
              namespace: 'AWS/SQS',
            },
            period: 60,
            stat: 'Average',
          },
          returnData: false,
        },
        {
          id: 'm2',
          label: 'NotVisible Messages',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'QueueName',
                  value: queue.attrQueueName,
                },
              ],
              metricName: 'ApproximateNumberOfMessagesNotVisible',
              namespace: 'AWS/SQS',
            },
            period: 60,
            stat: 'Average',
          },
          returnData: false,
        },
      ],
      threshold: 100,
    });

    if (alarm7103F465 == null) { throw new Error(`A combination of conditions caused 'alarm7103F465' to be undefined. Fixit.`); }
    if (queue == null) { throw new Error(`A combination of conditions caused 'queue' to be undefined. Fixit.`); }
    const dashCcd7f836 = new cloudwatch.CfnDashboard(this, 'DashCCD7F836', {
      dashboardBody: [
        '{\"widgets\":[{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":0,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Total messages in queue\",\"region\":\"',
        this.region,
        '\",\"annotations\":{\"alarms\":[\"',
        alarm7103F465.attrArn,
        '\"]},\"yAxis\":{}}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":6,\"properties\":{\"view\":\"timeSeries\",\"title\":\"More total messages in queue with alarm annotation\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[{\"label\":\"Total Messages\",\"expression\":\"m1+m2\",\"period\":60}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"Visible Messages\",\"period\":60,\"visible\":false,\"id\":\"m1\"}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesNotVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"NotVisible Messages\",\"period\":60,\"visible\":false,\"id\":\"m2\"}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"Visible Messages\",\"period\":10,\"yAxis\":\"right\"}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesNotVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"NotVisible Messages\",\"period\":30,\"yAxis\":\"right\"}]],\"annotations\":{\"horizontal\":[{\"label\":\"Total Messages >= 100 for 3 datapoints within 3 minutes\",\"value\":100,\"yAxis\":\"left\"}]},\"yAxis\":{}}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":12,\"properties\":{\"view\":\"pie\",\"title\":\"Percentage of messages in each queue as pie chart\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"Visible Messages\",\"period\":10}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesNotVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"NotVisible Messages\",\"period\":30}]],\"yAxis\":{},\"setPeriodToTimeRange\":true}},{\"type\":\"metric\",\"width\":6,\"height\":3,\"x\":0,\"y\":18,\"properties\":{\"view\":\"singleValue\",\"title\":\"Current total messages in queue\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[{\"label\":\"Total Messages\",\"expression\":\"m1+m2\",\"period\":60}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"Visible Messages\",\"period\":60,\"visible\":false,\"id\":\"m1\"}],[\"AWS/SQS\",\"ApproximateNumberOfMessagesNotVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\",{\"label\":\"NotVisible Messages\",\"period\":60,\"visible\":false,\"id\":\"m2\"}]]}}]}',
      ].join(''),
      dashboardName: 'MyMathExpressionDashboardName',
    });
  }
}

