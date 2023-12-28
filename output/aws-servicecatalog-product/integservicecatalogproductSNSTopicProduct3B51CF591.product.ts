import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductSNSTopicProduct3B51CF591.productProps extends cdk.StackProps {
}

export class integservicecatalogproductSNSTopicProduct3B51CF591.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductSNSTopicProduct3B51CF591.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

