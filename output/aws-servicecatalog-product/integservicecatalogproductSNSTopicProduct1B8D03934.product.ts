import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductSNSTopicProduct1B8D03934.productProps extends cdk.StackProps {
}

export class integservicecatalogproductSNSTopicProduct1B8D03934.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductSNSTopicProduct1B8D03934.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

