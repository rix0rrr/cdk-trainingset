import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductencryptedassetSNSTopicProduct3DB08679D.productProps extends cdk.StackProps {
}

export class integservicecatalogproductencryptedassetSNSTopicProduct3DB08679D.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductencryptedassetSNSTopicProduct3DB08679D.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

