import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsCdkMetricfilterIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkMetricfilterInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkMetricfilterIntegProps = {}) {
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
      filterName: 'MyFilterName',
    });
  }
}

