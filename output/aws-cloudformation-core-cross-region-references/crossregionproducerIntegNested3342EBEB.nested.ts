import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface crossregionproducerIntegNested3342EBEB.nestedProps extends cdk.StackProps {
}

export class crossregionproducerIntegNested3342EBEB.nested extends cdk.Stack {
  public readonly crossregionproducerIntegNestedNestedIntegQueueD686db69QueueName;

  public constructor(scope: cdk.App, id: string, props: crossregionproducerIntegNested3342EBEB.nestedProps = {}) {
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

