import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstacksmultirefsnested1Nested2B1544Ec7NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetonestedstacksmultirefsLevel19Fb2466dTopicName: string;
}

export class Nestedstacksmultirefsnested1Nested2B1544Ec7Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Nestedstacksmultirefsnested1Nested2B1544Ec7NestedProps) {
    super(scope, id, props);

    // Resources
    const level2ReferencesLevel124228B1a = new sns.CfnTopic(this, 'Level2ReferencesLevel124228B1A', {
      displayName: cdk.Fn.select(1, cdk.Fn.split('-', props.referencetonestedstacksmultirefsLevel19Fb2466dTopicName!)),
    });

    if (level2ReferencesLevel124228B1a == null) { throw new Error(`A combination of conditions caused 'level2ReferencesLevel124228B1a' to be undefined. Fixit.`); }
    const nested3NestedStackNested3NestedStackResource4Cfc9f55 = new cloudformation.CfnStack(this, 'Nested3NestedStackNested3NestedStackResource4CFC9F55', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/495a6bc36c13a0adeb3778c921d18ac4a8205f5471108fcc199a291d14855c3a.json',
      ].join(''),
      parameters: {
        referencetonestedstacksmultirefsLevel19FB2466DTopicName: props.referencetonestedstacksmultirefsLevel19Fb2466dTopicName!,
        referencetonestedstacksmultirefsNested1Nested2Level2ReferencesLevel1B9551936TopicName: level2ReferencesLevel124228B1a.attrTopicName,
      },
    });
    nested3NestedStackNested3NestedStackResource4Cfc9f55.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

