import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as kinesisfirehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-firehose-delivery-stream-source-streamProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-firehose-delivery-stream-source-stream extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-firehose-delivery-stream-source-streamProps = {}) {
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

    // Conditions
    const awsCdkKinesisEncryptedStreamsUnsupportedRegions = (this.region === 'cn-north-1' || this.region === 'cn-northwest-1');

    // Resources
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const deliveryStreamServiceRole964Eebcc = new iam.CfnRole(this, 'DeliveryStreamServiceRole964EEBCC', {
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

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
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

    const sourceStream95Ff52be = new kinesis.CfnStream(this, 'SourceStream95FF52BE', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    if (deliveryStreamServiceRole964Eebcc == null) { throw new Error(`A combination of conditions caused 'deliveryStreamServiceRole964Eebcc' to be undefined. Fixit.`); }
    if (sourceStream95Ff52be == null) { throw new Error(`A combination of conditions caused 'sourceStream95Ff52be' to be undefined. Fixit.`); }
    const deliveryStreamServiceRoleDefaultPolicyB87d9acf = new iam.CfnPolicy(this, 'DeliveryStreamServiceRoleDefaultPolicyB87D9ACF', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kinesis:DescribeStream',
              'kinesis:DescribeStreamConsumer',
              'kinesis:DescribeStreamSummary',
              'kinesis:GetRecords',
              'kinesis:GetShardIterator',
              'kinesis:ListShards',
              'kinesis:ListStreams',
              'kinesis:SubscribeToShard',
            ],
            Effect: 'Allow',
            Resource: sourceStream95Ff52be.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'DeliveryStreamServiceRoleDefaultPolicyB87D9ACF',
      roles: [
        deliveryStreamServiceRole964Eebcc.ref,
      ],
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const roleDefaultPolicy5Ffb7dab = new iam.CfnPolicy(this, 'RoleDefaultPolicy5FFB7DAB', {
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
              bucket83908E77.attrArn,
              [
                bucket83908E77.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'RoleDefaultPolicy5FFB7DAB',
      roles: [
        role1Abcc5f0.ref,
      ],
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (deliveryStreamServiceRole964Eebcc == null) { throw new Error(`A combination of conditions caused 'deliveryStreamServiceRole964Eebcc' to be undefined. Fixit.`); }
    if (deliveryStreamServiceRoleDefaultPolicyB87d9acf == null) { throw new Error(`A combination of conditions caused 'deliveryStreamServiceRoleDefaultPolicyB87d9acf' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (roleDefaultPolicy5Ffb7dab == null) { throw new Error(`A combination of conditions caused 'roleDefaultPolicy5Ffb7dab' to be undefined. Fixit.`); }
    if (sourceStream95Ff52be == null) { throw new Error(`A combination of conditions caused 'sourceStream95Ff52be' to be undefined. Fixit.`); }
    const deliveryStreamF6d5572d = new kinesisfirehose.CfnDeliveryStream(this, 'DeliveryStreamF6D5572D', {
      deliveryStreamType: 'KinesisStreamAsSource',
      extendedS3DestinationConfiguration: {
        bucketArn: bucket83908E77.attrArn,
        roleArn: role1Abcc5f0.attrArn,
      },
      kinesisStreamSourceConfiguration: {
        kinesisStreamArn: sourceStream95Ff52be.attrArn,
        roleArn: deliveryStreamServiceRole964Eebcc.attrArn,
      },
    });
    deliveryStreamF6d5572d.addDependency(deliveryStreamServiceRoleDefaultPolicyB87d9acf);
    deliveryStreamF6d5572d.addDependency(roleDefaultPolicy5Ffb7dab);

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (roleDefaultPolicy5Ffb7dab == null) { throw new Error(`A combination of conditions caused 'roleDefaultPolicy5Ffb7dab' to be undefined. Fixit.`); }
    const deliveryStreamNoSourceOrEncryptionKey0E4aab82 = new kinesisfirehose.CfnDeliveryStream(this, 'DeliveryStreamNoSourceOrEncryptionKey0E4AAB82', {
      deliveryStreamType: 'DirectPut',
      extendedS3DestinationConfiguration: {
        bucketArn: bucket83908E77.attrArn,
        roleArn: role1Abcc5f0.attrArn,
      },
    });
    deliveryStreamNoSourceOrEncryptionKey0E4aab82.addDependency(roleDefaultPolicy5Ffb7dab);
  }
}

