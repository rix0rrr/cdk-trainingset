import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface kinesis-logsubscription-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class kinesis-logsubscription-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: kinesis-logsubscription-integProps = {}) {
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
    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myStream5C050e93 = new kinesis.CfnStream(this, 'MyStream5C050E93', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    const subscriptionCloudWatchLogsCanPutRecords9C1223ec = new iam.CfnRole(this, 'SubscriptionCloudWatchLogsCanPutRecords9C1223EC', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'logs.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (subscriptionCloudWatchLogsCanPutRecords9C1223ec == null) { throw new Error(`A combination of conditions caused 'subscriptionCloudWatchLogsCanPutRecords9C1223ec' to be undefined. Fixit.`); }
    const subscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970f = new iam.CfnPolicy(this, 'SubscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970F', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kinesis:ListShards',
              'kinesis:PutRecord',
              'kinesis:PutRecords',
            ],
            Effect: 'Allow',
            Resource: myStream5C050e93.attrArn,
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: subscriptionCloudWatchLogsCanPutRecords9C1223ec.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SubscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970F',
      roles: [
        subscriptionCloudWatchLogsCanPutRecords9C1223ec.ref,
      ],
    });

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (subscriptionCloudWatchLogsCanPutRecords9C1223ec == null) { throw new Error(`A combination of conditions caused 'subscriptionCloudWatchLogsCanPutRecords9C1223ec' to be undefined. Fixit.`); }
    if (subscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970f == null) { throw new Error(`A combination of conditions caused 'subscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970f' to be undefined. Fixit.`); }
    const subscription391C9821 = new logs.CfnSubscriptionFilter(this, 'Subscription391C9821', {
      destinationArn: myStream5C050e93.attrArn,
      filterPattern: '',
      logGroupName: logGroupF5b46931.ref,
      roleArn: subscriptionCloudWatchLogsCanPutRecords9C1223ec.attrArn,
    });
    subscription391C9821.addDependency(subscriptionCloudWatchLogsCanPutRecordsDefaultPolicy50D4970f);
  }
}

