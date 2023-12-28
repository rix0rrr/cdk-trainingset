import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface AlarmwithlabelintegrationtestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Alarmwithlabelintegrationtest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AlarmwithlabelintegrationtestProps = {}) {
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
    const alarm1F9009d71 = new cloudwatch.CfnAlarm(this, 'Alarm1F9009D71', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      metrics: [
        {
          id: 'm1',
          label: 'Metric [AVG: ${AVG}]',
          metricStat: {
            metric: {
              metricName: 'Metric',
              namespace: 'CDK/Test',
            },
            period: 300,
            stat: 'Average',
          },
          returnData: true,
        },
      ],
      threshold: 100,
    });

    const alarm2A7122e13 = new cloudwatch.CfnAlarm(this, 'Alarm2A7122E13', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      metrics: [
        {
          id: 'm1',
          label: 'Metric [AVG: ${AVG}]',
          metricStat: {
            metric: {
              metricName: 'Metric',
              namespace: 'CDK/Test',
            },
            period: 300,
            stat: 'Average',
          },
          returnData: true,
        },
      ],
      threshold: 100,
    });
  }
}

