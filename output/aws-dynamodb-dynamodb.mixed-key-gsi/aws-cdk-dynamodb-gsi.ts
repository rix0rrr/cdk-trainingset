import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface AwsCdkDynamodbGsiProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkDynamodbGsi extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkDynamodbGsiProps = {}) {
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
          attributeName: 'pkey',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'pkey',
          attributeType: 'N',
        },
        {
          attributeName: 'foo',
          attributeType: 'S',
        },
        {
          attributeName: 'baz',
          attributeType: 'S',
        },
        {
          attributeName: 'bar',
          attributeType: 'S',
        },
      ],
      globalSecondaryIndexes: [
        {
          indexName: 'IndexA',
          keySchema: [
            {
              attributeName: 'foo',
              keyType: 'HASH',
            },
          ],
          projection: {
            nonKeyAttributes: [
              'bar',
            ],
            projectionType: 'INCLUDE',
          },
          provisionedThroughput: {
            readCapacityUnits: 5,
            writeCapacityUnits: 5,
          },
        },
        {
          indexName: 'IndexB',
          keySchema: [
            {
              attributeName: 'baz',
              keyType: 'HASH',
            },
            {
              attributeName: 'bar',
              keyType: 'RANGE',
            },
          ],
          projection: {
            nonKeyAttributes: [
              'blah',
            ],
            projectionType: 'INCLUDE',
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
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

