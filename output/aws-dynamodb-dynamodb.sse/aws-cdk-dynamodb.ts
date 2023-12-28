import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface AwsCdkDynamodbProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkDynamodb extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkDynamodbProps = {}) {
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
    const key961B73fd = new kms.CfnKey(this, 'Key961B73FD', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
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
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      enableKeyRotation: true,
    });
    key961B73fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sqs.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const tableKey25666F95 = new kms.CfnKey(this, 'TableKey25666F95', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
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
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      description: 'Customer-managed key auto-created for encrypting DynamoDB table at aws-cdk-dynamodb/Table',
      enableKeyRotation: true,
    });
    tableKey25666F95.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
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
          provisionedThroughput: {
            readCapacityUnits: 10,
            writeCapacityUnits: 10,
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
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
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
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
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
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
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
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
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
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      sseSpecification: {
        sseEnabled: false,
      },
    });
    tableWithLocalSecondaryIndex4Da3d08f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (tableKey25666F95 == null) { throw new Error(`A combination of conditions caused 'tableKey25666F95' to be undefined. Fixit.`); }
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
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      sseSpecification: {
        kmsMasterKeyId: tableKey25666F95.attrArn,
        sseEnabled: true,
        sseType: 'KMS',
      },
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (key961B73fd == null) { throw new Error(`A combination of conditions caused 'key961B73fd' to be undefined. Fixit.`); }
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
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
          },
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      sseSpecification: {
        kmsMasterKeyId: key961B73fd.attrArn,
        sseEnabled: true,
        sseType: 'KMS',
      },
    });
    tableWithGlobalSecondaryIndexCc8e841e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    if (tableKey25666F95 == null) { throw new Error(`A combination of conditions caused 'tableKey25666F95' to be undefined. Fixit.`); }
    if (tableWithGlobalAndLocalSecondaryIndexBc540710 == null) { throw new Error(`A combination of conditions caused 'tableWithGlobalAndLocalSecondaryIndexBc540710' to be undefined. Fixit.`); }
    const roleDefaultPolicy5Ffb7dab = new iam.CfnPolicy(this, 'RoleDefaultPolicy5FFB7DAB', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
            ],
            Effect: 'Allow',
            Resource: tableKey25666F95.attrArn,
          },
          {
            Action: [
              'dynamodb:BatchGetItem',
              'dynamodb:ConditionCheckItem',
              'dynamodb:DescribeTable',
              'dynamodb:GetItem',
              'dynamodb:GetRecords',
              'dynamodb:GetShardIterator',
              'dynamodb:Query',
              'dynamodb:Scan',
            ],
            Effect: 'Allow',
            Resource: [
              tableCd117fa1.attrArn,
              tableWithGlobalAndLocalSecondaryIndexBc540710.attrArn,
              [
                tableWithGlobalAndLocalSecondaryIndexBc540710.attrArn,
                '/index/*',
              ].join(''),
              undefined,
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
  }
}

