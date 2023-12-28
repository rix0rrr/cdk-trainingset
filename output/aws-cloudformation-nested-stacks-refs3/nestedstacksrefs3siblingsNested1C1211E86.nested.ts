import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface nestedstacksrefs3siblingsNested1C1211E86.nestedProps extends cdk.StackProps {
}

export class nestedstacksrefs3siblingsNested1C1211E86.nested extends cdk.Stack {
  public readonly nestedstacksrefs3siblingsNested1MyTopic12458558TopicName;

  public constructor(scope: cdk.App, id: string, props: nestedstacksrefs3siblingsNested1C1211E86.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    // Outputs
    this.nestedstacksrefs3siblingsNested1MyTopic12458558TopicName = myTopic86869434.attrTopicName;
    new cdk.CfnOutput(this, 'CfnOutputnestedstacksrefs3siblingsNested1MyTopic12458558TopicName', {
      key: 'nestedstacksrefs3siblingsNested1MyTopic12458558TopicName',
      value: this.nestedstacksrefs3siblingsNested1MyTopic12458558TopicName!.toString(),
    });
  }
}

