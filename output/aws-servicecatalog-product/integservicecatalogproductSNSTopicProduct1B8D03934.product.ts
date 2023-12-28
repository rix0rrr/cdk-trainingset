import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductsnstopicproduct1B8D03934ProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductsnstopicproduct1B8D03934Product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductsnstopicproduct1B8D03934ProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

