import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface CompositealarmintegrationtestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Compositealarmintegrationtest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CompositealarmintegrationtestProps = {}) {
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
      metricName: 'Metric',
      namespace: 'CDK/Test',
      period: 300,
      statistic: 'Average',
      threshold: 100,
    });

    const alarm2A7122e13 = new cloudwatch.CfnAlarm(this, 'Alarm2A7122E13', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      metricName: 'Metric',
      namespace: 'CDK/Test',
      period: 300,
      statistic: 'Average',
      threshold: 1000,
    });

    const alarm32341D8d9 = new cloudwatch.CfnAlarm(this, 'Alarm32341D8D9', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      metricName: 'Metric',
      namespace: 'CDK/Test',
      period: 300,
      statistic: 'Average',
      threshold: 10000,
    });

    const alarm4671832C8 = new cloudwatch.CfnAlarm(this, 'Alarm4671832C8', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      metricName: 'Metric',
      namespace: 'CDK/Test',
      period: 300,
      statistic: 'Average',
      threshold: 100000,
    });

    const alarm548383B2f = new cloudwatch.CfnAlarm(this, 'Alarm548383B2F', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      alarmName: 'Alarm with space in name',
      metricName: 'Metric',
      namespace: 'CDK/Test',
      period: 300,
      statistic: 'Average',
      threshold: 100000,
    });

    if (alarm1F9009d71 == null) { throw new Error(`A combination of conditions caused 'alarm1F9009d71' to be undefined. Fixit.`); }
    if (alarm2A7122e13 == null) { throw new Error(`A combination of conditions caused 'alarm2A7122e13' to be undefined. Fixit.`); }
    if (alarm32341D8d9 == null) { throw new Error(`A combination of conditions caused 'alarm32341D8d9' to be undefined. Fixit.`); }
    if (alarm4671832C8 == null) { throw new Error(`A combination of conditions caused 'alarm4671832C8' to be undefined. Fixit.`); }
    if (alarm548383B2f == null) { throw new Error(`A combination of conditions caused 'alarm548383B2f' to be undefined. Fixit.`); }
    const compositeAlarmF4c3d082 = new cloudwatch.CfnCompositeAlarm(this, 'CompositeAlarmF4C3D082', {
      alarmRule: [
        '(((ALARM(\"',
        alarm1F9009d71.attrArn,
        '\") OR OK(\"',
        alarm2A7122e13.attrArn,
        '\") OR ALARM(\"',
        alarm32341D8d9.attrArn,
        '\") OR ALARM(\"',
        alarm548383B2f.attrArn,
        '\")) AND (NOT (INSUFFICIENT_DATA(\"',
        alarm4671832C8.attrArn,
        '\")))) OR FALSE)',
      ].join(''),
      actionsSuppressor: alarm548383B2f.attrArn,
      actionsSuppressorExtensionPeriod: 60,
      actionsSuppressorWaitPeriod: 60,
      alarmName: 'CompositeAlarmIntegrationTestCompositeAlarm742D2FBA',
    });
  }
}

