import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface AwsSchedulerTargetsSnsPublishProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsSchedulerTargetsSnsPublish extends cdk.Stack {
  public readonly exportsOutputRefQueue4A7e3555425e8bd3;

  public constructor(scope: cdk.App, id: string, props: AwsSchedulerTargetsSnsPublishProps = {}) {
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
    const queue4A7e3555 = new sqs.CfnQueue(this, 'Queue4A7E3555', {
    });
    queue4A7e3555.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const schedulerRoleForTarget1441a743A31888 = new iam.CfnRole(this, 'SchedulerRoleForTarget1441a743A31888', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'scheduler.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const topicBfc7af6e = new sns.CfnTopic(this, 'TopicBFC7AF6E', {
    });

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const queuePolicy25439813 = new sqs.CfnQueuePolicy(this, 'QueuePolicy25439813', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': topicBfc7af6e.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: queue4A7e3555.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        queue4A7e3555.ref,
      ],
    });

    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(1 minute)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: topicBfc7af6e.ref,
        input: '\"Hello, Scheduler!\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });

    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: topicBfc7af6e.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (queuePolicy25439813 == null) { throw new Error(`A combination of conditions caused 'queuePolicy25439813' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const queueAwsSchedulerTargetsSnsPublishTopicCb9bf6e1c346ad60 = new sns.CfnSubscription(this, 'QueueAwsSchedulerTargetsSnsPublishTopicCB9BF6E1C346AD60', {
      endpoint: queue4A7e3555.attrArn,
      protocol: 'sqs',
      rawMessageDelivery: true,
      topicArn: topicBfc7af6e.ref,
    });
    queueAwsSchedulerTargetsSnsPublishTopicCb9bf6e1c346ad60.addDependency(queuePolicy25439813);

    // Outputs
    this.exportsOutputRefQueue4A7e3555425e8bd3 = queue4A7e3555.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefQueue4A7E3555425E8BD3', {
      key: 'ExportsOutputRefQueue4A7E3555425E8BD3',
      exportName: 'AwsSchedulerTargetsSnsPublish:ExportsOutputRefQueue4A7E3555425E8BD3',
      value: this.exportsOutputRefQueue4A7e3555425e8bd3!.toString(),
    });
  }
}

