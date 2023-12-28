import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface NestStacksRefs1ProducerProps extends cdk.StackProps {
}

export class NestStacksRefs1Producer extends cdk.Stack {
  public readonly exportsOutputFnGetAttMyTopic86869434TopicNameFcc96fa2;

  public constructor(scope: cdk.App, id: string, props: NestStacksRefs1ProducerProps = {}) {
    super(scope, id, props);

    // Resources
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    // Outputs
    this.exportsOutputFnGetAttMyTopic86869434TopicNameFcc96fa2 = myTopic86869434.attrTopicName;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttMyTopic86869434TopicNameFCC96FA2', {
      key: 'ExportsOutputFnGetAttMyTopic86869434TopicNameFCC96FA2',
      exportName: 'nest-stacks-refs1-producer:ExportsOutputFnGetAttMyTopic86869434TopicNameFCC96FA2',
      value: this.exportsOutputFnGetAttMyTopic86869434TopicNameFcc96fa2!.toString(),
    });
  }
}

