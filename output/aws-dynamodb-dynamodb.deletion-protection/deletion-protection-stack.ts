import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface deletion-protection-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class deletion-protection-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: deletion-protection-stackProps = {}) {
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
          attributeName: 'pk',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'pk',
          attributeType: 'S',
        },
      ],
      deletionProtectionEnabled: true,
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      tableName: 'deletion-protection-test',
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

