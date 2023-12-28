import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductencryptedassetSNSTopicProduct2A7A2061B.productProps extends cdk.StackProps {
}

export class integservicecatalogproductencryptedassetSNSTopicProduct2A7A2061B.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductencryptedassetSNSTopicProduct2A7A2061B.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

