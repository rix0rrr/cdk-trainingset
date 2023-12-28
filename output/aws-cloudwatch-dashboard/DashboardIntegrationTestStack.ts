import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface DashboardintegrationteststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Dashboardintegrationteststack extends cdk.Stack {
  public readonly dashboardArn;

  public constructor(scope: cdk.App, id: string, props: DashboardintegrationteststackProps = {}) {
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
      dashboardBody: '{\"start\":\"-P7D\",\"widgets\":[{\"type\":\"text\",\"width\":6,\"height\":2,\"x\":0,\"y\":0,\"properties\":{\"markdown\":\"I don\'t have a background\",\"background\":\"transparent\"}}]}',
    });

    // Outputs
    this.dashboardArn = [
      'arn:',
      this.partition,
      ':cloudwatch::',
      this.account,
      ':dashboard/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputDashboardArn', {
      key: 'DashboardArn',
      value: this.dashboardArn!.toString(),
    });
  }
}

