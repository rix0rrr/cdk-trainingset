import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integservicecatalogproductSNSTopicProduct24C7C16DA.productProps extends cdk.StackProps {
}

export class integservicecatalogproductSNSTopicProduct24C7C16DA.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductSNSTopicProduct24C7C16DA.productProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

