import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface nestedstacksmultiNestedStackNestedChild2A7A1713.nestedProps extends cdk.StackProps {
}

export class nestedstacksmultiNestedStackNestedChild2A7A1713.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksmultiNestedStackNestedChild2A7A1713.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const yourResource3Ce78317 = new sns.CfnTopic(this, 'YourResource3CE78317', {
    });
  }
}

