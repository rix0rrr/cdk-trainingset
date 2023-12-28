import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface IntegKinesisStreamProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegKinesisStream extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegKinesisStreamProps = {}) {
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
    const userRoleB7c3739b = new iam.CfnRole(this, 'UserRoleB7C3739B', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myStream547Fad7f = new kinesis.CfnStream(this, 'myStream547FAD7F', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    if (userRoleB7c3739b == null) { throw new Error(`A combination of conditions caused 'userRoleB7c3739b' to be undefined. Fixit.`); }
    if (myStream547Fad7f == null) { throw new Error(`A combination of conditions caused 'myStream547Fad7f' to be undefined. Fixit.`); }
    const userRoleDefaultPolicyBc5e062b = new iam.CfnPolicy(this, 'UserRoleDefaultPolicyBC5E062B', {
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
              'kinesis:PutRecord',
              'kinesis:PutRecords',
              'kinesis:SubscribeToShard',
            ],
            Effect: 'Allow',
            Resource: myStream547Fad7f.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'UserRoleDefaultPolicyBC5E062B',
      roles: [
        userRoleB7c3739b.ref,
      ],
    });
  }
}

