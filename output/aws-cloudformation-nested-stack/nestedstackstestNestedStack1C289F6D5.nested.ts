import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface Nestedstackstestnestedstack1C289F6D5NestedProps extends cdk.StackProps {
  /**
   */
  readonly topicNamePrefix: string;
  /**
   */
  readonly referencetonestedstackstestSubscriberQueue39409787Ref: string;
}

export class Nestedstackstestnestedstack1C289F6D5Nested extends cdk.Stack {
  public readonly nestedstackstestNestedStack1topic02C2d1254Ref;
  public readonly nestedstackstestNestedStack1topic1474E5389Ref;
  public readonly nestedstackstestNestedStack1topic22C710dc4Ref;

  public constructor(scope: cdk.App, id: string, props: Nestedstackstestnestedstack1C289F6D5NestedProps) {
    super(scope, id, props);

    // Resources
    const fnServiceRole5D180afd = new iam.CfnRole(this, 'fnServiceRole5D180AFD', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

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

    const topic2Ee13c5a5 = new sns.CfnTopic(this, 'topic2EE13C5A5', {
      displayName: [
        props.topicNamePrefix!,
        '-2',
      ].join(''),
    });

    if (fnServiceRole5D180afd == null) { throw new Error(`A combination of conditions caused 'fnServiceRole5D180afd' to be undefined. Fixit.`); }
    const fn5Ff616e3 = new lambda.CfnFunction(this, 'fn5FF616E3', {
      code: {
        zipFile: 'console.error(\"hi\")',
      },
      environment: {
        variables: {
          'TOPIC_ARN': '',
          'QUEUE_URL': props.referencetonestedstackstestSubscriberQueue39409787Ref!,
        },
      },
      handler: 'index.handler',
      role: fnServiceRole5D180afd.attrArn,
      runtime: 'nodejs18.x',
    });
    fn5Ff616e3.addDependency(fnServiceRole5D180afd);

    // Outputs
    this.nestedstackstestNestedStack1topic02C2d1254Ref = topic096865Afd.ref;
    new cdk.CfnOutput(this, 'CfnOutputnestedstackstestNestedStack1topic02C2D1254Ref', {
      key: 'nestedstackstestNestedStack1topic02C2D1254Ref',
      value: this.nestedstackstestNestedStack1topic02C2d1254Ref!.toString(),
    });
    this.nestedstackstestNestedStack1topic1474E5389Ref = topic119487C5c.ref;
    new cdk.CfnOutput(this, 'CfnOutputnestedstackstestNestedStack1topic1474E5389Ref', {
      key: 'nestedstackstestNestedStack1topic1474E5389Ref',
      value: this.nestedstackstestNestedStack1topic1474E5389Ref!.toString(),
    });
    this.nestedstackstestNestedStack1topic22C710dc4Ref = topic2Ee13c5a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputnestedstackstestNestedStack1topic22C710DC4Ref', {
      key: 'nestedstackstestNestedStack1topic22C710DC4Ref',
      value: this.nestedstackstestNestedStack1topic22C710dc4Ref!.toString(),
    });
  }
}

