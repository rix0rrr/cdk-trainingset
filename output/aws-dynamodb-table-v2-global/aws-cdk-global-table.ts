import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';

export interface aws-cdk-global-tableProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-global-table extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-global-tableProps = {}) {
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
    const stream790Bdee4 = new kinesis.CfnStream(this, 'Stream790BDEE4', {
      retentionPeriodHours: 24,
      shardCount: 1,
      streamEncryption: awsCdkKinesisEncryptedStreamsUnsupportedRegions ? undefined : {
        encryptionType: 'KMS',
        keyId: 'alias/aws/kinesis',
      },
    });

    if (stream790Bdee4 == null) { throw new Error(`A combination of conditions caused 'stream790Bdee4' to be undefined. Fixit.`); }
    const globalTable89F068b2 = new dynamodb.CfnGlobalTable(this, 'GlobalTable89F068B2', {
      attributeDefinitions: [
        {
          attributeName: 'pk',
          attributeType: 'S',
        },
        {
          attributeName: 'sk',
          attributeType: 'N',
        },
      ],
      billingMode: 'PROVISIONED',
      globalSecondaryIndexes: [
        {
          indexName: 'gsi1',
          keySchema: [
            {
              attributeName: 'pk',
              keyType: 'HASH',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
          writeProvisionedThroughputSettings: {
            writeCapacityAutoScalingSettings: {
              maxCapacity: 20,
              minCapacity: 1,
              seedCapacity: 10,
              targetTrackingScalingPolicyConfiguration: {
                targetValue: 60,
              },
            },
          },
        },
        {
          indexName: 'gsi2',
          keySchema: [
            {
              attributeName: 'pk',
              keyType: 'HASH',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
          writeProvisionedThroughputSettings: {
            writeCapacityAutoScalingSettings: {
              maxCapacity: 30,
              minCapacity: 1,
              targetTrackingScalingPolicyConfiguration: {
                targetValue: 70,
              },
            },
          },
        },
      ],
      keySchema: [
        {
          attributeName: 'pk',
          keyType: 'HASH',
        },
        {
          attributeName: 'sk',
          keyType: 'RANGE',
        },
      ],
      localSecondaryIndexes: [
        {
          indexName: 'lsi',
          keySchema: [
            {
              attributeName: 'pk',
              keyType: 'HASH',
            },
            {
              attributeName: 'sk',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
      ],
      replicas: [
        {
          contributorInsightsSpecification: {
            enabled: true,
          },
          globalSecondaryIndexes: [
            {
              contributorInsightsSpecification: {
                enabled: true,
              },
              indexName: 'gsi1',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 10,
              },
            },
            {
              contributorInsightsSpecification: {
                enabled: false,
              },
              indexName: 'gsi2',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 10,
              },
            },
          ],
          pointInTimeRecoverySpecification: {
            pointInTimeRecoveryEnabled: true,
          },
          readProvisionedThroughputSettings: {
            readCapacityAutoScalingSettings: {
              maxCapacity: 25,
              minCapacity: 5,
              targetTrackingScalingPolicyConfiguration: {
                targetValue: 70,
              },
            },
          },
          region: 'us-east-2',
          tableClass: 'STANDARD_INFREQUENT_ACCESS',
          tags: [
            {
              key: 'USE2ReplicaTagKey',
              value: 'USE2ReplicaTagValue',
            },
          ],
        },
        {
          contributorInsightsSpecification: {
            enabled: false,
          },
          globalSecondaryIndexes: [
            {
              indexName: 'gsi1',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 15,
              },
            },
            {
              contributorInsightsSpecification: {
                enabled: true,
              },
              indexName: 'gsi2',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 10,
              },
            },
          ],
          pointInTimeRecoverySpecification: {
            pointInTimeRecoveryEnabled: true,
          },
          readProvisionedThroughputSettings: {
            readCapacityUnits: 10,
          },
          region: 'us-west-2',
          tableClass: 'STANDARD',
          tags: [
            {
              key: 'USW2ReplicaTagKey',
              value: 'USW2ReplicaTagValue',
            },
          ],
        },
        {
          contributorInsightsSpecification: {
            enabled: true,
          },
          globalSecondaryIndexes: [
            {
              contributorInsightsSpecification: {
                enabled: true,
              },
              indexName: 'gsi1',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 10,
              },
            },
            {
              contributorInsightsSpecification: {
                enabled: true,
              },
              indexName: 'gsi2',
              readProvisionedThroughputSettings: {
                readCapacityUnits: 10,
              },
            },
          ],
          kinesisStreamSpecification: {
            streamArn: stream790Bdee4.attrArn,
          },
          pointInTimeRecoverySpecification: {
            pointInTimeRecoveryEnabled: true,
          },
          readProvisionedThroughputSettings: {
            readCapacityUnits: 10,
          },
          region: 'us-east-1',
          tableClass: 'STANDARD_INFREQUENT_ACCESS',
          tags: [
            {
              key: 'primaryTableTagKey',
              value: 'primaryTableTagValue',
            },
          ],
        },
      ],
      sseSpecification: {
        sseEnabled: true,
        sseType: 'KMS',
      },
      streamSpecification: {
        streamViewType: 'NEW_AND_OLD_IMAGES',
      },
      tableName: 'my-global-table',
      timeToLiveSpecification: {
        attributeName: 'attr',
        enabled: true,
      },
      writeProvisionedThroughputSettings: {
        writeCapacityAutoScalingSettings: {
          maxCapacity: 20,
          minCapacity: 1,
          seedCapacity: 10,
          targetTrackingScalingPolicyConfiguration: {
            targetValue: 60,
          },
        },
      },
    });
    globalTable89F068b2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

