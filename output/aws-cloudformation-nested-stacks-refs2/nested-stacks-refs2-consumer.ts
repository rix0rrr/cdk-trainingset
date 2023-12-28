import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface NestedStacksRefs2ConsumerProps extends cdk.StackProps {
}

export class NestedStacksRefs2Consumer extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: NestedStacksRefs2ConsumerProps = {}) {
    super(scope, id, props);

    // Resources
    const consumerTopic6F402371 = new sns.CfnTopic(this, 'ConsumerTopic6F402371', {
      displayName: [
        'Consuming ',
        cdk.Fn.select(2, cdk.Fn.split('-', cdk.Fn.importValue('nested-stacks-refs2-parent-with-producer:ExportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCD0AD36BOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicNameF4BCEDAF'))),
      ].join(''),
    });
  }
}

