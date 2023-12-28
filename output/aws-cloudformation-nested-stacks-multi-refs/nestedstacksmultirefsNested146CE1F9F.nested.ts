import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface nestedstacksmultirefsNested146CE1F9F.nestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetonestedstacksmultirefsLevel19Fb2466dTopicName: string;
}

export class nestedstacksmultirefsNested146CE1F9F.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksmultirefsNested146CE1F9F.nestedProps) {
    super(scope, id, props);

    // Resources
    const nested2NestedStackNested2NestedStackResource877A1112 = new cloudformation.CfnStack(this, 'Nested2NestedStackNested2NestedStackResource877A1112', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/3f13e5b641dc5e587f9205c95cfe6c5adb4f17c3635d8e199f8fc2aade38a2ff.json',
      ].join(''),
      parameters: {
        referencetonestedstacksmultirefsLevel19FB2466DTopicName: props.referencetonestedstacksmultirefsLevel19Fb2466dTopicName!,
      },
    });
    nested2NestedStackNested2NestedStackResource877A1112.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

