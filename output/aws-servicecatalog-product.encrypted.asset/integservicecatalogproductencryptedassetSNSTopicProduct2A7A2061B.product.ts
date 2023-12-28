import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductencryptedassetsnstopicproduct2A7A2061BProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductencryptedassetsnstopicproduct2A7A2061BProduct extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductencryptedassetsnstopicproduct2A7A2061BProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

