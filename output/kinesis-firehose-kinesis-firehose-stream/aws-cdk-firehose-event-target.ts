import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesisfirehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-firehose-event-targetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-firehose-event-target extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-firehose-event-targetProps = {}) {
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

    const firehosebucket84C8ae0b = new s3.CfnBucket(this, 'firehosebucket84C8AE0B', {
    });
    firehosebucket84C8ae0b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const firehoseroleDdc4cf0e = new iam.CfnRole(this, 'firehoseroleDDC4CF0E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'firehose.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (firehosebucket84C8ae0b == null) { throw new Error(`A combination of conditions caused 'firehosebucket84C8ae0b' to be undefined. Fixit.`); }
    if (firehoseroleDdc4cf0e == null) { throw new Error(`A combination of conditions caused 'firehoseroleDdc4cf0e' to be undefined. Fixit.`); }
    const myStream = new kinesisfirehose.CfnDeliveryStream(this, 'MyStream', {
      extendedS3DestinationConfiguration: {
        bucketArn: firehosebucket84C8ae0b.attrArn,
        roleArn: firehoseroleDdc4cf0e.attrArn,
      },
    });

    if (firehosebucket84C8ae0b == null) { throw new Error(`A combination of conditions caused 'firehosebucket84C8ae0b' to be undefined. Fixit.`); }
    if (firehoseroleDdc4cf0e == null) { throw new Error(`A combination of conditions caused 'firehoseroleDdc4cf0e' to be undefined. Fixit.`); }
    const firehoseroleDefaultPolicy3F3f850d = new iam.CfnPolicy(this, 'firehoseroleDefaultPolicy3F3F850D', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              firehosebucket84C8ae0b.attrArn,
              [
                firehosebucket84C8ae0b.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'firehoseroleDefaultPolicy3F3F850D',
      roles: [
        firehoseroleDdc4cf0e.ref,
      ],
    });

    if (myStream == null) { throw new Error(`A combination of conditions caused 'myStream' to be undefined. Fixit.`); }
    if (myStreamEventsRole5B6cc6af == null) { throw new Error(`A combination of conditions caused 'myStreamEventsRole5B6cc6af' to be undefined. Fixit.`); }
    const everyMinute2Bbcea8f = new events.CfnRule(this, 'EveryMinute2BBCEA8F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myStream.attrArn,
          id: 'Target0',
          roleArn: myStreamEventsRole5B6cc6af.attrArn,
        },
      ],
    });

    if (myStream == null) { throw new Error(`A combination of conditions caused 'myStream' to be undefined. Fixit.`); }
    if (myStreamEventsRole5B6cc6af == null) { throw new Error(`A combination of conditions caused 'myStreamEventsRole5B6cc6af' to be undefined. Fixit.`); }
    const myStreamEventsRoleDefaultPolicy2089B49e = new iam.CfnPolicy(this, 'MyStreamEventsRoleDefaultPolicy2089B49E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'firehose:PutRecord',
              'firehose:PutRecordBatch',
            ],
            Effect: 'Allow',
            Resource: myStream.attrArn,
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

