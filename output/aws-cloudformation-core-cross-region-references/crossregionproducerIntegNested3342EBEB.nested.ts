import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface Crossregionproducerintegnested3342EbebNestedProps extends cdk.StackProps {
}

export class Crossregionproducerintegnested3342EbebNested extends cdk.Stack {
  public readonly crossregionproducerIntegNestedNestedIntegQueueD686db69QueueName;

  public constructor(scope: cdk.App, id: string, props: Crossregionproducerintegnested3342EbebNestedProps = {}) {
    super(scope, id, props);

    // Resources
    const nestedIntegQueue0Dff7c28 = new sqs.CfnQueue(this, 'NestedIntegQueue0DFF7C28', {
    });
    nestedIntegQueue0Dff7c28.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.crossregionproducerIntegNestedNestedIntegQueueD686db69QueueName = nestedIntegQueue0Dff7c28.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputcrossregionproducerIntegNestedNestedIntegQueueD686DB69QueueName', {
      key: 'crossregionproducerIntegNestedNestedIntegQueueD686DB69QueueName',
      value: this.crossregionproducerIntegNestedNestedIntegQueueD686db69QueueName!.toString(),
    });
  }
}

