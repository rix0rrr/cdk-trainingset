import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface DashboardVariablesIntegrationTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class DashboardVariablesIntegrationTest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: DashboardVariablesIntegrationTestProps = {}) {
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
        '{\"widgets\":[{\"type\":\"text\",\"width\":6,\"height\":2,\"x\":0,\"y\":0,\"properties\":{\"markdown\":\"The dashboard is showing RegionPlaceholder region\",\"background\":\"transparent\"}},{\"type\":\"metric\",\"width\":6,\"height\":6,\"x\":0,\"y\":2,\"properties\":{\"view\":\"timeSeries\",\"title\":\"My fancy graph\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/S3\",\"BucketSizeBytes\",\"BucketName\",\"my-bucket\",\"StorageType\",\"StandardStorage\",{\"label\":\"[BucketName: ${PROP(\'Dim.BucketName\')}] BucketSizeBytes\",\"stat\":\"Maximum\"}]],\"yAxis\":{}}}],\"variables\":[{\"pattern\":\"RegionPlaceholder\",\"type\":\"pattern\",\"inputType\":\"radio\",\"id\":\"region3\",\"defaultValue\":\"us-east-1\",\"visible\":true,\"label\":\"RegionPatternWithValues\",\"values\":[{\"label\":\"IAD\",\"value\":\"us-east-1\"},{\"label\":\"DUB\",\"value\":\"us-west-2\"}]},{\"property\":\"BucketName\",\"type\":\"property\",\"inputType\":\"select\",\"id\":\"BucketName\",\"defaultValue\":\"__FIRST\",\"visible\":true,\"label\":\"BucketName\",\"search\":\"{AWS/S3,BucketName,StorageType} MetricName=\\\"BucketSizeBytes\\\"\",\"populateFrom\":\"BucketName\"}]}',
      ].join(''),
    });
  }
}

