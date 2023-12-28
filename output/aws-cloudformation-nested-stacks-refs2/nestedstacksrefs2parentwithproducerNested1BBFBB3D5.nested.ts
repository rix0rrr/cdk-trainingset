import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstacksrefs2Parentwithproducernested1Bbfbb3D5NestedProps extends cdk.StackProps {
}

export class Nestedstacksrefs2Parentwithproducernested1Bbfbb3D5Nested extends cdk.Stack {
  public readonly nestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicName;

  public constructor(scope: cdk.App, id: string, props: Nestedstacksrefs2Parentwithproducernested1Bbfbb3D5NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    // Outputs
    this.nestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicName = myTopic86869434.attrTopicName;
    new cdk.CfnOutput(this, 'CfnOutputnestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicName', {
      key: 'nestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicName',
      value: this.nestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicName!.toString(),
    });
  }
}

