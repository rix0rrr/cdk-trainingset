import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-cdk-expose-metric-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-expose-metric-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-expose-metric-integProps = {}) {
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
    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const alarmfrommetricfilterF546d67d = new cloudwatch.CfnAlarm(this, 'alarmfrommetricfilterF546D67D', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 2,
      metricName: 'Latency',
      namespace: 'MyApp',
      period: 300,
      statistic: 'Average',
      threshold: 100,
    });

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const metricFilter1B93b6e5 = new logs.CfnMetricFilter(this, 'MetricFilter1B93B6E5', {
      filterPattern: '{ $.latency = \"*\" }',
      logGroupName: logGroupF5b46931.ref,
      metricTransformations: [
        {
          metricName: 'Latency',
          metricNamespace: 'MyApp',
          metricValue: '$.latency',
        },
      ],
    });
  }
}

