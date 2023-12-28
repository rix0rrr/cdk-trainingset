import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface DashboardandwidgetwithstartandendProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Dashboardandwidgetwithstartandend extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: DashboardandwidgetwithstartandendProps = {}) {
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
    const dashboard9E4231ed = new cloudwatch.CfnDashboard(this, 'Dashboard9E4231ED', {
      dashboardBody: [
        '{\"widgets\":[{\"type\":\"metric\",\"width\":6,\"height\":3,\"x\":0,\"y\":0,\"properties\":{\"view\":\"singleValue\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"CDK/Test\",\"Metric\"]],\"start\":\"-P7D\",\"end\":\"2018-12-17T06:00:00.000Z\"}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":3,\"properties\":{\"view\":\"timeSeries\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"CDK/Test\",\"Metric\"]],\"yAxis\":{},\"start\":\"-P7D\",\"end\":\"2018-12-17T06:00:00.000Z\"}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":9,\"properties\":{\"view\":\"gauge\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"CDK/Test\",\"Metric\"]],\"yAxis\":{\"left\":{\"min\":0,\"max\":100}},\"start\":\"-P7D\",\"end\":\"2018-12-17T06:00:00.000Z\"}}]}',
      ].join(''),
    });
  }
}

