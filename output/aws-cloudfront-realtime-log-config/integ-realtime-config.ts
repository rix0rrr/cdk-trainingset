import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface IntegRealtimeConfigProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegRealtimeConfig extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegRealtimeConfigProps = {}) {
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
    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudfront.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const stream19075594 = new kinesis.CfnStream(this, 'stream19075594', {
      retentionPeriodHours: 24,
      streamEncryption: {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
      streamModeDetails: {
        streamMode: 'ON_DEMAND',
      },
    });

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (stream19075594 == null) { throw new Error(`A combination of conditions caused 'stream19075594' to be undefined. Fixit.`); }
    const realtimeLog31F8fa14 = new cloudfront.CfnRealtimeLogConfig(this, 'RealtimeLog31F8FA14', {
      endPoints: [
        {
          kinesisStreamConfig: {
            roleArn: role1Abcc5f0.attrArn,
            streamArn: stream19075594.attrArn,
          },
          streamType: 'Kinesis',
        },
      ],
      fields: [
        'timestamp',
      ],
      name: 'testing',
      samplingRate: 1,
    });

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (stream19075594 == null) { throw new Error(`A combination of conditions caused 'stream19075594' to be undefined. Fixit.`); }
    const roleDefaultPolicy5Ffb7dab = new iam.CfnPolicy(this, 'RoleDefaultPolicy5FFB7DAB', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kinesis:DescribeStream',
              'kinesis:DescribeStreamSummary',
              'kinesis:PutRecord',
              'kinesis:PutRecords',
            ],
            Effect: 'Allow',
            Resource: stream19075594.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'RoleDefaultPolicy5FFB7DAB',
      roles: [
        role1Abcc5f0.ref,
      ],
    });
  }
}

