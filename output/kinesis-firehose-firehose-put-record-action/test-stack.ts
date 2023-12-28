import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as kinesisfirehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface test-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class test-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: test-stackProps = {}) {
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

    // Mappings
    const awscdkawskinesisfirehoseCidrBlocks: Record<string, Record<string, string>> = {
      'af-south-1': {
        'FirehoseCidrBlock': '13.244.121.224/27',
      },
      'ap-east-1': {
        'FirehoseCidrBlock': '18.162.221.32/27',
      },
      'ap-northeast-1': {
        'FirehoseCidrBlock': '13.113.196.224/27',
      },
      'ap-northeast-2': {
        'FirehoseCidrBlock': '13.209.1.64/27',
      },
      'ap-northeast-3': {
        'FirehoseCidrBlock': '13.208.177.192/27',
      },
      'ap-south-1': {
        'FirehoseCidrBlock': '13.232.67.32/27',
      },
      'ap-south-2': {
        'FirehoseCidrBlock': '18.60.192.128/27',
      },
      'ap-southeast-1': {
        'FirehoseCidrBlock': '13.228.64.192/27',
      },
      'ap-southeast-2': {
        'FirehoseCidrBlock': '13.210.67.224/27',
      },
      'ap-southeast-3': {
        'FirehoseCidrBlock': '108.136.221.64/27',
      },
      'ap-southeast-4': {
        'FirehoseCidrBlock': '16.50.161.128/27',
      },
      'ca-central-1': {
        'FirehoseCidrBlock': '35.183.92.128/27',
      },
      'cn-north-1': {
        'FirehoseCidrBlock': '52.81.151.32/27',
      },
      'cn-northwest-1': {
        'FirehoseCidrBlock': '161.189.23.64/27',
      },
      'eu-central-1': {
        'FirehoseCidrBlock': '35.158.127.160/27',
      },
      'eu-central-2': {
        'FirehoseCidrBlock': '16.62.183.32/27',
      },
      'eu-north-1': {
        'FirehoseCidrBlock': '13.53.63.224/27',
      },
      'eu-south-1': {
        'FirehoseCidrBlock': '15.161.135.128/27',
      },
      'eu-south-2': {
        'FirehoseCidrBlock': '18.100.71.96/27',
      },
      'eu-west-1': {
        'FirehoseCidrBlock': '52.19.239.192/27',
      },
      'eu-west-2': {
        'FirehoseCidrBlock': '18.130.1.96/27',
      },
      'eu-west-3': {
        'FirehoseCidrBlock': '35.180.1.96/27',
      },
      'il-central-1': {
        'FirehoseCidrBlock': '51.16.102.0/27',
      },
      'me-central-1': {
        'FirehoseCidrBlock': '3.28.159.32/27',
      },
      'me-south-1': {
        'FirehoseCidrBlock': '15.185.91.0/27',
      },
      'sa-east-1': {
        'FirehoseCidrBlock': '18.228.1.128/27',
      },
      'us-east-1': {
        'FirehoseCidrBlock': '52.70.63.192/27',
      },
      'us-east-2': {
        'FirehoseCidrBlock': '13.58.135.96/27',
      },
      'us-gov-east-1': {
        'FirehoseCidrBlock': '18.253.138.96/27',
      },
      'us-gov-west-1': {
        'FirehoseCidrBlock': '52.61.204.160/27',
      },
      'us-west-1': {
        'FirehoseCidrBlock': '13.57.135.192/27',
      },
      'us-west-2': {
        'FirehoseCidrBlock': '52.89.255.224/27',
      },
    };

    // Resources
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myStreamLogGroupAb67ab09 = new logs.CfnLogGroup(this, 'MyStreamLogGroupAB67AB09', {
      retentionInDays: 731,
    });
    myStreamLogGroupAb67ab09.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myStreamS3DestinationRole5E0ba960 = new iam.CfnRole(this, 'MyStreamS3DestinationRole5E0BA960', {
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

    const topicRuleTopicRuleActionRole246C4f77 = new iam.CfnRole(this, 'TopicRuleTopicRuleActionRole246C4F77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iot.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myStreamLogGroupAb67ab09 == null) { throw new Error(`A combination of conditions caused 'myStreamLogGroupAb67ab09' to be undefined. Fixit.`); }
    const myStreamLogGroupS3Destination423E82a8 = new logs.CfnLogStream(this, 'MyStreamLogGroupS3Destination423E82A8', {
      logGroupName: myStreamLogGroupAb67ab09.ref,
    });
    myStreamLogGroupS3Destination423E82a8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myStreamLogGroupAb67ab09 == null) { throw new Error(`A combination of conditions caused 'myStreamLogGroupAb67ab09' to be undefined. Fixit.`); }
    if (myStreamS3DestinationRole5E0ba960 == null) { throw new Error(`A combination of conditions caused 'myStreamS3DestinationRole5E0ba960' to be undefined. Fixit.`); }
    const myStreamS3DestinationRoleDefaultPolicy401Ef6f2 = new iam.CfnPolicy(this, 'MyStreamS3DestinationRoleDefaultPolicy401EF6F2', {
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: myStreamLogGroupAb67ab09.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyStreamS3DestinationRoleDefaultPolicy401EF6F2',
      roles: [
        myStreamS3DestinationRole5E0ba960.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myStreamLogGroupAb67ab09 == null) { throw new Error(`A combination of conditions caused 'myStreamLogGroupAb67ab09' to be undefined. Fixit.`); }
    if (myStreamLogGroupS3Destination423E82a8 == null) { throw new Error(`A combination of conditions caused 'myStreamLogGroupS3Destination423E82a8' to be undefined. Fixit.`); }
    if (myStreamS3DestinationRole5E0ba960 == null) { throw new Error(`A combination of conditions caused 'myStreamS3DestinationRole5E0ba960' to be undefined. Fixit.`); }
    if (myStreamS3DestinationRoleDefaultPolicy401Ef6f2 == null) { throw new Error(`A combination of conditions caused 'myStreamS3DestinationRoleDefaultPolicy401Ef6f2' to be undefined. Fixit.`); }
    const myStream5C050e93 = new kinesisfirehose.CfnDeliveryStream(this, 'MyStream5C050E93', {
      deliveryStreamType: 'DirectPut',
      extendedS3DestinationConfiguration: {
        bucketArn: myBucketF68f3ff0.attrArn,
        cloudWatchLoggingOptions: {
          enabled: true,
          logGroupName: myStreamLogGroupAb67ab09.ref,
          logStreamName: myStreamLogGroupS3Destination423E82a8.ref,
        },
        roleArn: myStreamS3DestinationRole5E0ba960.attrArn,
      },
    });
    myStream5C050e93.addDependency(myStreamS3DestinationRoleDefaultPolicy401Ef6f2);

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            firehose: {
              batchMode: true,
              deliveryStreamName: myStream5C050e93.ref,
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
              separator: '\n',
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT * FROM \'device/+/data\'',
      },
    });

    if (myStream5C050e93 == null) { throw new Error(`A combination of conditions caused 'myStream5C050e93' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'firehose:PutRecord',
              'firehose:PutRecordBatch',
            ],
            Effect: 'Allow',
            Resource: myStream5C050e93.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687',
      roles: [
        topicRuleTopicRuleActionRole246C4f77.ref,
      ],
    });
  }
}

