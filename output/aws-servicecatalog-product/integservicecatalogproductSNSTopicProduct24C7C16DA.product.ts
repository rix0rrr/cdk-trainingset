import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductsnstopicproduct24C7C16DaProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductsnstopicproduct24C7C16DaProduct extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductsnstopicproduct24C7C16DaProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

