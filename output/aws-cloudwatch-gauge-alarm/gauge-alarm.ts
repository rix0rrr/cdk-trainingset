import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface gauge-alarmProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class gauge-alarm extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: gauge-alarmProps = {}) {
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
    const dashCcd7f836 = new cloudwatch.CfnDashboard(this, 'DashCCD7F836', {
      dashboardBody: [
        '{\"widgets\":[{\"type\":\"metric\",\"width\":24,\"height\":6,\"x\":0,\"y\":0,\"properties\":{\"view\":\"gauge\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/SQS\",\"ApproximateNumberOfMessagesVisible\",\"QueueName\",\"',
        queue.attrQueueName,
        '\"]],\"yAxis\":{\"left\":{\"max\":500,\"min\":0}}}}]}',
      ].join(''),
      dashboardName: 'MyCustomGaugeAlarm',
    });
  }
}

