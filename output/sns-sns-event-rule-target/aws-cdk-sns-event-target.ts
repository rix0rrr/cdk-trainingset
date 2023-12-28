import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-cdk-sns-event-targetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-sns-event-target extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-sns-event-targetProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const myDeadLetterQueueD997968a = new sqs.CfnQueue(this, 'MyDeadLetterQueueD997968A', {
    });
    myDeadLetterQueueD997968a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const everyMinute2Bbcea8f = new events.CfnRule(this, 'EveryMinute2BBCEA8F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          deadLetterConfig: {
            arn: myDeadLetterQueueD997968a.attrArn,
          },
          id: 'Target0',
        },
      ],
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myQueuePolicy6Bbeddac = new sqs.CfnQueuePolicy(this, 'MyQueuePolicy6BBEDDAC', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myTopic86869434.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: myQueueE6ca6235.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myQueueE6ca6235.ref,
      ],
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myTopicPolicy12A5ec17 = new sns.CfnTopicPolicy(this, 'MyTopicPolicy12A5EC17', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myTopic86869434.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myTopic86869434.ref,
      ],
    });

    if (everyMinute2Bbcea8f == null) { throw new Error(`A combination of conditions caused 'everyMinute2Bbcea8f' to be undefined. Fixit.`); }
    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    const myDeadLetterQueuePolicyCc35d52c = new sqs.CfnQueuePolicy(this, 'MyDeadLetterQueuePolicyCC35D52C', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': everyMinute2Bbcea8f.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myDeadLetterQueueD997968a.attrArn,
            Sid: 'AllowEventRuleawscdksnseventtargetEveryMinuteD1FC5963',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myDeadLetterQueueD997968a.ref,
      ],
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myQueuePolicy6Bbeddac == null) { throw new Error(`A combination of conditions caused 'myQueuePolicy6Bbeddac' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myQueueawscdksnseventtargetMyTopicB7575cd87304d383 = new sns.CfnSubscription(this, 'MyQueueawscdksnseventtargetMyTopicB7575CD87304D383', {
      protocol: 'sqs',
      topicArn: myTopic86869434.ref,
      endpoint: myQueueE6ca6235.attrArn,
    });
    myQueueawscdksnseventtargetMyTopicB7575cd87304d383.addDependency(myQueuePolicy6Bbeddac);
  }
}

