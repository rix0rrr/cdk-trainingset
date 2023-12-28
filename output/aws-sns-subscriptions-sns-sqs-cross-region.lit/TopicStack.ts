import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface TopicStackProps extends cdk.StackProps {
}

export class TopicStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TopicStackProps = {}) {
    super(scope, id, props);

    // Resources
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
      topicName: 'topicstackopicstackmytopicc43e67afb24f28bb94f9',
    });
  }
}

