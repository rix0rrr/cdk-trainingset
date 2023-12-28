import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface aws-cdk-kinesis-event-targetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-kinesis-event-target extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-kinesis-event-targetProps = {}) {
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
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    const myStreamEventsRole5B6cc6af = new iam.CfnRole(this, 'MyStreamEventsRole5B6CC6AF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (myStreamEventsRole5B6cc6af == null) { throw new Error(`A combination of conditions caused 'myStreamEventsRole5B6cc6af' to be undefined. Fixit.`); }
    const everyMinute2Bbcea8f = new events.CfnRule(this, 'EveryMinute2BBCEA8F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myStream5C050e93.attrArn,
          id: 'Target0',
          kinesisParameters: {
            partitionKeyPath: '$.id',
          },
          roleArn: myStreamEventsRole5B6cc6af.attrArn,
        },
      ],
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (myStreamEventsRole5B6cc6af == null) { throw new Error(`A combination of conditions caused 'myStreamEventsRole5B6cc6af' to be undefined. Fixit.`); }
    const myStreamEventsRoleDefaultPolicy2089B49e = new iam.CfnPolicy(this, 'MyStreamEventsRoleDefaultPolicy2089B49E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kinesis:PutRecord',
              'kinesis:PutRecords',
            ],
            Effect: 'Allow',
            Resource: myStream5C050e93.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyStreamEventsRoleDefaultPolicy2089B49E',
      roles: [
        myStreamEventsRole5B6cc6af.ref,
      ],
    });
  }
}

