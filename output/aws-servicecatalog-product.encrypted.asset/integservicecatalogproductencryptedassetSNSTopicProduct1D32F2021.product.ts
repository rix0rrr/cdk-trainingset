import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Integservicecatalogproductencryptedassetsnstopicproduct1D32F2021ProductProps extends cdk.StackProps {
}

export class Integservicecatalogproductencryptedassetsnstopicproduct1D32F2021Product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integservicecatalogproductencryptedassetsnstopicproduct1D32F2021ProductProps = {}) {
    super(scope, id, props);

    // Resources
    const topicProductD757e287 = new sns.CfnTopic(this, 'TopicProductD757E287', {
    });
  }
}

