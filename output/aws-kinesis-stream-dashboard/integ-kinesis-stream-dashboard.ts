import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface IntegKinesisStreamDashboardProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegKinesisStreamDashboard extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegKinesisStreamDashboardProps = {}) {
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

    // Conditions
    const awsCdkKinesisEncryptedStreamsUnsupportedRegions = (this.region === 'cn-north-1' || this.region === 'cn-northwest-1');

    // Resources
    const myStream547Fad7f = new kinesis.CfnStream(this, 'myStream547FAD7F', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    if (myStream547Fad7f == null) { throw new Error(`A combination of conditions caused 'myStream547Fad7f' to be undefined. Fixit.`); }
    const streamDashboardAaf4fcf8 = new cloudwatch.CfnDashboard(this, 'StreamDashboardAAF4FCF8', {
      dashboardBody: [
        '{\"widgets\":[{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":0,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Get records - sum (Bytes)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"GetRecords.Bytes\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":0,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Get records iterator age - maximum (Milliseconds)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"GetRecords.IteratorAgeMilliseconds\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Maximum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":5,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Get records latency - average (Milliseconds)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"GetRecords.Latency\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":5,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Get records - sum (Count)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"GetRecords.Records\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":10,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Get records success - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"GetRecords.Success\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":10,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Incoming data - sum (Bytes)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"IncomingBytes\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":15,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Incoming records - sum (Count)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"IncomingRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":15,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put record - sum (Bytes)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"PutRecord.Bytes\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":20,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put record latency - average (Milliseconds)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"PutRecord.Latency\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":20,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put record success - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"PutRecord.Success\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":25,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put records - sum (Bytes)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"PutRecords.Bytes\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"stat\":\"Sum\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":25,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put records latency - average (Milliseconds)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"PutRecords.Latency\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":30,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Read throughput exceeded - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"ReadProvisionedThroughputExceeded\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":30,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Write throughput exceeded - average (Count)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[\"AWS/Kinesis\",\"WriteProvisionedThroughputExceeded\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\"]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":35,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put records successful records - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[{\"label\":\"( count / total ) * 100\",\"expression\":\"( count / total ) * 100\"}],[\"AWS/Kinesis\",\"PutRecords.SuccessfulRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"count\"}],[\"AWS/Kinesis\",\"PutRecords.TotalRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"total\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":12,\"y\":35,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put records failed records - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[{\"label\":\"( count / total ) * 100\",\"expression\":\"( count / total ) * 100\"}],[\"AWS/Kinesis\",\"PutRecords.FailedRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"count\"}],[\"AWS/Kinesis\",\"PutRecords.TotalRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"total\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":5,\"x\":0,\"y\":40,\"properties\":{\"view\":\"timeSeries\",\"title\":\"Put records throttled records - average (Percent)\",\"region\":\"',
        this.region,
        '\",\"metrics\":[[{\"label\":\"( count / total ) * 100\",\"expression\":\"( count / total ) * 100\"}],[\"AWS/Kinesis\",\"PutRecords.ThrottledRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"count\"}],[\"AWS/Kinesis\",\"PutRecords.TotalRecords\",\"StreamName\",\"',
        myStream547Fad7f.ref,
        '\",{\"visible\":false,\"id\":\"total\"}]],\"yAxis\":{}}}]}',
      ].join(''),
    });
  }
}

