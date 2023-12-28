import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface aws-cdk-scheduler-targets-kinesis-stream-put-recordProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-scheduler-targets-kinesis-stream-put-record extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-scheduler-targets-kinesis-stream-put-recordProps = {}) {
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
    const myStream5C050e93 = new kinesis.CfnStream(this, 'MyStream5C050E93', {
      name: 'my-stream',
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    const schedulerRoleForTarget1441a743A31888 = new iam.CfnRole(this, 'SchedulerRoleForTarget1441a743A31888', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'scheduler.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(1 minute)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: myStream5C050e93.attrArn,
        input: '{\"Data\":\"record\"}',
        kinesisParameters: {
          partitionKey: 'key',
        },
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
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
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });
  }
}

