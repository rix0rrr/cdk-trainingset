import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstacksrefs3Siblingsnested22C7C46E6NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetonestedstacksrefs3siblingsNested1NestedStackNested1NestedStackResourceE58b6825Outputsnestedstacksrefs3siblingsNested1MyTopic12458558TopicName: string;
}

export class Nestedstacksrefs3Siblingsnested22C7C46E6Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Nestedstacksrefs3Siblingsnested22C7C46E6NestedProps) {
    super(scope, id, props);

    // Resources
    const consumerTopic6F402371 = new sns.CfnTopic(this, 'ConsumerTopic6F402371', {
      displayName: [
        'Consuming ',
        cdk.Fn.select(2, cdk.Fn.split('-', props.referencetonestedstacksrefs3siblingsNested1NestedStackNested1NestedStackResourceE58b6825Outputsnestedstacksrefs3siblingsNested1MyTopic12458558TopicName!)),
      ].join(''),
    });
  }
}

