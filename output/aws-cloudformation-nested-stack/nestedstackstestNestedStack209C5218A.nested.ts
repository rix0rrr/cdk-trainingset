import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstackstestnestedstack209C5218ANestedProps extends cdk.StackProps {
  /**
   */
  readonly topicNamePrefix: string;
}

/**
 * This is secound nested stack.
 */
export class Nestedstackstestnestedstack209C5218ANested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Nestedstackstestnestedstack209C5218ANestedProps) {
    super(scope, id, props);

    // Resources
    const topic096865Afd = new sns.CfnTopic(this, 'topic096865AFD', {
      displayName: [
        props.topicNamePrefix!,
        '-0',
      ].join(''),
    });

    const topic119487C5c = new sns.CfnTopic(this, 'topic119487C5C', {
      displayName: [
        props.topicNamePrefix!,
        '-1',
      ].join(''),
    });
  }
}

