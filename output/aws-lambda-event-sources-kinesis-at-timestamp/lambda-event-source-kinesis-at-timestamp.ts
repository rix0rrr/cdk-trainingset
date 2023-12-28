import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface lambda-event-source-kinesis-at-timestampProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class lambda-event-source-kinesis-at-timestamp extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: lambda-event-source-kinesis-at-timestampProps = {}) {
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
    const fServiceRole3Ac82ee1 = new iam.CfnRole(this, 'FServiceRole3AC82EE1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const s509448a1 = new kinesis.CfnStream(this, 'S509448A1', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (s509448a1 == null) { throw new Error(`A combination of conditions caused 's509448a1' to be undefined. Fixit.`); }
    const fServiceRoleDefaultPolicy17A19bfa = new iam.CfnPolicy(this, 'FServiceRoleDefaultPolicy17A19BFA', {
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
            Resource: s509448a1.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FServiceRoleDefaultPolicy17A19BFA',
      roles: [
        fServiceRole3Ac82ee1.ref,
      ],
    });

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (fServiceRoleDefaultPolicy17A19bfa == null) { throw new Error(`A combination of conditions caused 'fServiceRoleDefaultPolicy17A19bfa' to be undefined. Fixit.`); }
    const fc4345940 = new lambda.CfnFunction(this, 'FC4345940', {
      code: {
        zipFile: 'exports.handler = async function handler(event) {\n    console.log(\'event:\', JSON.stringify(event, undefined, 2));\n    return { event };\n}',
      },
      handler: 'index.handler',
      role: fServiceRole3Ac82ee1.attrArn,
      runtime: 'nodejs18.x',
    });
    fc4345940.addDependency(fServiceRoleDefaultPolicy17A19bfa);
    fc4345940.addDependency(fServiceRole3Ac82ee1);

    if (fc4345940 == null) { throw new Error(`A combination of conditions caused 'fc4345940' to be undefined. Fixit.`); }
    if (s509448a1 == null) { throw new Error(`A combination of conditions caused 's509448a1' to be undefined. Fixit.`); }
    const fKinesisEventSourcelambdaeventsourcekinesisattimestampSc3a1ffa33781e60d = new lambda.CfnEventSourceMapping(this, 'FKinesisEventSourcelambdaeventsourcekinesisattimestampSC3A1FFA33781E60D', {
      batchSize: 100,
      eventSourceArn: s509448a1.attrArn,
      functionName: fc4345940.ref,
      startingPosition: 'AT_TIMESTAMP',
      startingPositionTimestamp: 1655237653,
    });
  }
}

