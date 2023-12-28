import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductencryptedassetSNSTopicProduct1D32F2021.productProps extends cdk.StackProps {
}

export class integservicecatalogproductencryptedassetSNSTopicProduct1D32F2021.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductencryptedassetSNSTopicProduct1D32F2021.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

