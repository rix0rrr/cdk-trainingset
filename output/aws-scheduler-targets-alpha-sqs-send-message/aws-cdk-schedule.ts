import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface AwsCdkScheduleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSchedule extends cdk.Stack {
  public readonly exportsOutputRefMyQueueE6ca623512a57419;

  public constructor(scope: cdk.App, id: string, props: AwsCdkScheduleProps = {}) {
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
    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
      contentBasedDeduplication: true,
      fifoQueue: true,
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(1 minute)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: myQueueE6ca6235.attrArn,
        input: '\"test\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
        sqsParameters: {
          messageGroupId: 'id',
        },
      },
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:SendMessage',
            ],
            Effect: 'Allow',
            Resource: myQueueE6ca6235.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });

    // Outputs
    this.exportsOutputRefMyQueueE6ca623512a57419 = myQueueE6ca6235.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyQueueE6CA623512A57419', {
      key: 'ExportsOutputRefMyQueueE6CA623512A57419',
      exportName: 'aws-cdk-schedule:ExportsOutputRefMyQueueE6CA623512A57419',
      value: this.exportsOutputRefMyQueueE6ca623512a57419!.toString(),
    });
  }
}

