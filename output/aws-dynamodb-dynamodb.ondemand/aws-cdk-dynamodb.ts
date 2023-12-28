import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface aws-cdk-dynamodbProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-dynamodb extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-dynamodbProps = {}) {
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
    const tableCd117fa1 = new dynamodb.CfnTable(this, 'TableCD117FA1', {
      keySchema: [
        {
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const tableWithGlobalAndLocalSecondaryIndexBc540710 = new dynamodb.CfnTable(this, 'TableWithGlobalAndLocalSecondaryIndexBC540710', {
      keySchema: [
        {
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
        {
          attributeName: 'sortKey',
          keyType: 'RANGE',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
        {
          attributeName: 'sortKey',
          attributeType: 'N',
        },
        {
          attributeName: 'gsiHashKey',
          attributeType: 'S',
        },
        {
          attributeName: 'gsiSortKey',
          attributeType: 'N',
        },
        {
          attributeName: 'lsiSortKey',
          attributeType: 'N',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      globalSecondaryIndexes: [
        {
          indexName: 'GSI-PartitionKeyOnly',
          keySchema: [
            {
              attributeName: 'gsiHashKey',
              keyType: 'HASH',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
        {
          indexName: 'GSI-PartitionAndSortKeyWithReadAndWriteCapacity',
          keySchema: [
            {
              attributeName: 'gsiHashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'gsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
        {
          indexName: 'GSI-ProjectionTypeKeysOnly',
          keySchema: [
            {
              attributeName: 'gsiHashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'gsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'KEYS_ONLY',
          },
        },
        {
          indexName: 'GSI-ProjectionTypeInclude',
          keySchema: [
            {
              attributeName: 'gsiHashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'gsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            nonKeyAttributes: [
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
            ],
            projectionType: 'INCLUDE',
          },
        },
        {
          indexName: 'GSI-InverseTableKeySchema',
          keySchema: [
            {
              attributeName: 'sortKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'hashKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
      ],
      localSecondaryIndexes: [
        {
          indexName: 'LSI-PartitionAndTableSortKey',
          keySchema: [
            {
              attributeName: 'hashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'lsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
        {
          indexName: 'LSI-PartitionAndSortKey',
          keySchema: [
            {
              attributeName: 'hashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'sortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
        {
          indexName: 'LSI-ProjectionTypeKeysOnly',
          keySchema: [
            {
              attributeName: 'hashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'lsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'KEYS_ONLY',
          },
        },
        {
          indexName: 'LSI-ProjectionTypeInclude',
          keySchema: [
            {
              attributeName: 'hashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'lsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            nonKeyAttributes: [
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
            ],
            projectionType: 'INCLUDE',
          },
        },
      ],
      pointInTimeRecoverySpecification: {
        pointInTimeRecoveryEnabled: true,
      },
      sseSpecification: {
        sseEnabled: true,
      },
      streamSpecification: {
        streamViewType: 'KEYS_ONLY',
      },
      tags: [
        {
          key: 'Environment',
          value: 'Production',
        },
      ],
      timeToLiveSpecification: {
        attributeName: 'timeToLive',
        enabled: true,
      },
    });
    tableWithGlobalAndLocalSecondaryIndexBc540710.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const tableWithGlobalSecondaryIndexCc8e841e = new dynamodb.CfnTable(this, 'TableWithGlobalSecondaryIndexCC8E841E', {
      keySchema: [
        {
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
        {
          attributeName: 'gsiHashKey',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      globalSecondaryIndexes: [
        {
          indexName: 'GSI-PartitionKeyOnly',
          keySchema: [
            {
              attributeName: 'gsiHashKey',
              keyType: 'HASH',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
      ],
    });
    tableWithGlobalSecondaryIndexCc8e841e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const tableWithLocalSecondaryIndex4Da3d08f = new dynamodb.CfnTable(this, 'TableWithLocalSecondaryIndex4DA3D08F', {
      keySchema: [
        {
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
        {
          attributeName: 'sortKey',
          keyType: 'RANGE',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
        {
          attributeName: 'sortKey',
          attributeType: 'N',
        },
        {
          attributeName: 'lsiSortKey',
          attributeType: 'N',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      localSecondaryIndexes: [
        {
          indexName: 'LSI-PartitionAndSortKey',
          keySchema: [
            {
              attributeName: 'hashKey',
              keyType: 'HASH',
            },
            {
              attributeName: 'lsiSortKey',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
      ],
    });
    tableWithLocalSecondaryIndex4Da3d08f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

