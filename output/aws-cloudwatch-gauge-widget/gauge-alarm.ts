import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface GaugeAlarmProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class GaugeAlarm extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: GaugeAlarmProps = {}) {
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
        '{\"widgets\":[{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":0,\"properties\":{\"view\":\"gauge\",\"title\":\"My gauge widget\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/VPN\",\"TunnelState\",\"TunnelIpAddress\",\"123.123.123.123\",{\"stat\":\"Minimum\"}]],\"annotations\":{\"horizontal\":[{\"color\":\"#b2df8d\",\"label\":\"Up\",\"value\":5,\"fill\":\"above\"}]},\"yAxis\":{\"left\":{\"min\":0,\"max\":10}},\"period\":60,\"stat\":\"Minimum\"}}]}',
      ].join(''),
    });
  }
}

