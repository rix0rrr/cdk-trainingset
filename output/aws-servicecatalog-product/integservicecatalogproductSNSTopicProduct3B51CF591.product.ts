import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductsnstopicproduct3B51Cf591ProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductsnstopicproduct3B51Cf591Product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductsnstopicproduct3B51Cf591ProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

