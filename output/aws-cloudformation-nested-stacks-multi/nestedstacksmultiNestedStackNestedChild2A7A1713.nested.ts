import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstacksmultinestedstacknestedchild2A7A1713NestedProps extends cdk.StackProps {
}

export class Nestedstacksmultinestedstacknestedchild2A7A1713Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Nestedstacksmultinestedstacknestedchild2A7A1713NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const yourResource3Ce78317 = new sns.CfnTopic(this, 'YourResource3CE78317', {
    });
  }
}

