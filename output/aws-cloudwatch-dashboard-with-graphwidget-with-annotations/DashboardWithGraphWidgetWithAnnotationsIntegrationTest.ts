import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface DashboardWithGraphWidgetWithAnnotationsIntegrationTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class DashboardWithGraphWidgetWithAnnotationsIntegrationTest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: DashboardWithGraphWidgetWithAnnotationsIntegrationTestProps = {}) {
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
    const dashCcd7f836 = new cloudwatch.CfnDashboard(this, 'DashCCD7F836', {
      dashboardBody: [
        '{\"widgets\":[{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":0,\"properties\":{\"view\":\"timeSeries\",\"title\":\"My fancy graph\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"CDK/Test\",\"Metric\",{\"label\":\"Metric left 1 - p99\",\"stat\":\"p99\"}],[\"CDK/Test\",\"Metric\",{\"label\":\"Metric left 2 - TC_10P_90P\",\"stat\":\"TC(10%:90%)\"}],[\"CDK/Test\",\"Metric\",{\"label\":\"Metric left 3 - TS(5%:95%)\",\"stat\":\"TS(5%:95%)\"}],[\"CDK/Test\",\"Metric\",{\"label\":\"Metric right 1 - p90.1234\",\"stat\":\"p90.1234\",\"yAxis\":\"right\"}]],\"annotations\":{\"horizontal\":[{\"value\":10,\"label\":\"Left annotation\",\"color\":\"#00ff00\",\"fill\":\"above\",\"visible\":true,\"yAxis\":\"left\"},{\"value\":20,\"label\":\"Right annotation\",\"color\":\"#e30d0d\",\"fill\":\"below\",\"visible\":false,\"yAxis\":\"right\"}],\"vertical\":[{\"value\":\"2023-08-20T00:00:00.000Z\",\"label\":\"Vertical annotation\",\"color\":\"#2556f6\",\"fill\":\"after\",\"visible\":true}]},\"yAxis\":{}}}]}',
      ].join(''),
    });
  }
}

