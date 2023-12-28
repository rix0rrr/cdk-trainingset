import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface nestedstacksmultirefsNested1Nested2Nested34EDB63C2.nestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetonestedstacksmultirefsLevel19Fb2466dTopicName: string;
  /**
   */
  readonly referencetonestedstacksmultirefsNested1Nested2Level2ReferencesLevel1B9551936TopicName: string;
}

export class nestedstacksmultirefsNested1Nested2Nested34EDB63C2.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksmultirefsNested1Nested2Nested34EDB63C2.nestedProps) {
    super(scope, id, props);

    // Resources
    const level3ReferencesLevel13289Ad09 = new sns.CfnTopic(this, 'Level3ReferencesLevel13289AD09', {
      displayName: cdk.Fn.select(1, cdk.Fn.split('-', props.referencetonestedstacksmultirefsLevel19Fb2466dTopicName!)),
    });

    const level3ReferencesLevel2717B87db = new sns.CfnTopic(this, 'Level3ReferencesLevel2717B87DB', {
      displayName: cdk.Fn.select(1, cdk.Fn.split('-', props.referencetonestedstacksmultirefsNested1Nested2Level2ReferencesLevel1B9551936TopicName!)),
    });
  }
}

