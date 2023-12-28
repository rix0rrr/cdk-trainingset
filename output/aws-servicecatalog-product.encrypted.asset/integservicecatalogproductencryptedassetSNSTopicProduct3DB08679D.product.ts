import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductencryptedassetsnstopicproduct3Db08679DProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductencryptedassetsnstopicproduct3Db08679DProduct extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductencryptedassetsnstopicproduct3Db08679DProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

