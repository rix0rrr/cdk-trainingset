import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstacksrefs1Parentwithconsumernested151B8A692NestedProps extends cdk.StackProps {
}

export class Nestedstacksrefs1Parentwithconsumernested151B8A692Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Nestedstacksrefs1Parentwithconsumernested151B8A692NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const consumerTopic6F402371 = new sns.CfnTopic(this, 'ConsumerTopic6F402371', {
      displayName: [
        'Consumer of ',
        cdk.Fn.importValue('nest-stacks-refs1-producer:ExportsOutputFnGetAttMyTopic86869434TopicNameFCC96FA2'),
      ].join(''),
    });
  }
}

