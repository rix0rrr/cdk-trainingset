import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Stack1Nestedunderstack15F1F8640NestedProps extends cdk.StackProps {
}

export class Stack1Nestedunderstack15F1F8640Nested extends cdk.Stack {
  public readonly stack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicName;

  public constructor(scope: cdk.App, id: string, props: Stack1Nestedunderstack15F1F8640NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const topicInNestedUnderStack115E329c4 = new sns.CfnTopic(this, 'TopicInNestedUnderStack115E329C4', {
    });

    // Outputs
    this.stack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicName = topicInNestedUnderStack115E329c4.attrTopicName;
    new cdk.CfnOutput(this, 'CfnOutputStack1NestedUnderStack1TopicInNestedUnderStack136BDF841TopicName', {
      key: 'Stack1NestedUnderStack1TopicInNestedUnderStack136BDF841TopicName',
      value: this.stack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicName!.toString(),
    });
  }
}

