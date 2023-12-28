import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface nestedstacksrefs1parentwithconsumerNested151B8A692.nestedProps extends cdk.StackProps {
}

export class nestedstacksrefs1parentwithconsumerNested151B8A692.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksrefs1parentwithconsumerNested151B8A692.nestedProps = {}) {
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

