import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksSnsPublishIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksSnsPublishInteg extends cdk.Stack {
  public readonly stateMachineArn;
  public readonly queueUrl;
  public readonly fifoQueueUrl;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksSnsPublishIntegProps = {}) {
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
    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const cooltopic4736778A = new sns.CfnTopic(this, 'cooltopic4736778A', {
    });

    const fifoqueue3F2573b3 = new sqs.CfnQueue(this, 'fifoqueue3F2573B3', {
      fifoQueue: true,
    });
    fifoqueue3F2573b3.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const fifotopicA6114788 = new sns.CfnTopic(this, 'fifotopicA6114788', {
      fifoTopic: true,
      topicName: 'awsstepfunctionstaskssnspublishinteg-fifotopic-6FE667F7.fifo',
    });

    const showmethemessages8D16bbdb = new sqs.CfnQueue(this, 'showmethemessages8D16BBDB', {
    });
    showmethemessages8D16bbdb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (cooltopic4736778A == null) { throw new Error(`A combination of conditions caused 'cooltopic4736778A' to be undefined. Fixit.`); }
    if (fifotopicA6114788 == null) { throw new Error(`A combination of conditions caused 'fifotopicA6114788' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: [
              cooltopic4736778A.ref,
              fifotopicA6114788.ref,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (fifoqueue3F2573b3 == null) { throw new Error(`A combination of conditions caused 'fifoqueue3F2573b3' to be undefined. Fixit.`); }
    if (fifotopicA6114788 == null) { throw new Error(`A combination of conditions caused 'fifotopicA6114788' to be undefined. Fixit.`); }
    const fifoqueuePolicyCa528c39 = new sqs.CfnQueuePolicy(this, 'fifoqueuePolicyCA528C39', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': fifotopicA6114788.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: fifoqueue3F2573b3.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        fifoqueue3F2573b3.ref,
      ],
    });

    if (cooltopic4736778A == null) { throw new Error(`A combination of conditions caused 'cooltopic4736778A' to be undefined. Fixit.`); }
    if (showmethemessages8D16bbdb == null) { throw new Error(`A combination of conditions caused 'showmethemessages8D16bbdb' to be undefined. Fixit.`); }
    const showmethemessagesPolicyB08b04b0 = new sqs.CfnQueuePolicy(this, 'showmethemessagesPolicyB08B04B0', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': cooltopic4736778A.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: showmethemessages8D16bbdb.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        showmethemessages8D16bbdb.ref,
      ],
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (cooltopic4736778A == null) { throw new Error(`A combination of conditions caused 'cooltopic4736778A' to be undefined. Fixit.`); }
    if (fifotopicA6114788 == null) { throw new Error(`A combination of conditions caused 'fifotopicA6114788' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"publish to SNS\",\"States\":{\"publish to SNS\":{\"Next\":\"publish to FIFO SNS\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sns:publish\",\"Parameters\":{\"TopicArn\":\"',
        cooltopic4736778A.ref,
        '\",\"Message\":\"sending message over\"}},\"publish to FIFO SNS\":{\"Next\":\"Final step\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sns:publish\",\"Parameters\":{\"TopicArn\":\"',
        fifotopicA6114788.ref,
        '\",\"Message\":\"sending message over\",\"MessageDeduplicationId\":\"message-deduplication-id\",\"MessageGroupId\":\"message-group-id\"}},\"Final step\":{\"Type\":\"Pass\",\"End\":true}},\"TimeoutSeconds\":30}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (fifoqueue3F2573b3 == null) { throw new Error(`A combination of conditions caused 'fifoqueue3F2573b3' to be undefined. Fixit.`); }
    if (fifoqueuePolicyCa528c39 == null) { throw new Error(`A combination of conditions caused 'fifoqueuePolicyCa528c39' to be undefined. Fixit.`); }
    if (fifotopicA6114788 == null) { throw new Error(`A combination of conditions caused 'fifotopicA6114788' to be undefined. Fixit.`); }
    const fifoqueueawsstepfunctionstaskssnspublishintegfifotopic6Fe667f78f3219a7 = new sns.CfnSubscription(this, 'fifoqueueawsstepfunctionstaskssnspublishintegfifotopic6FE667F78F3219A7', {
      endpoint: fifoqueue3F2573b3.attrArn,
      protocol: 'sqs',
      topicArn: fifotopicA6114788.ref,
    });
    fifoqueueawsstepfunctionstaskssnspublishintegfifotopic6Fe667f78f3219a7.addDependency(fifoqueuePolicyCa528c39);

    if (cooltopic4736778A == null) { throw new Error(`A combination of conditions caused 'cooltopic4736778A' to be undefined. Fixit.`); }
    if (showmethemessages8D16bbdb == null) { throw new Error(`A combination of conditions caused 'showmethemessages8D16bbdb' to be undefined. Fixit.`); }
    if (showmethemessagesPolicyB08b04b0 == null) { throw new Error(`A combination of conditions caused 'showmethemessagesPolicyB08b04b0' to be undefined. Fixit.`); }
    const showmethemessagesawsstepfunctionstaskssnspublishintegcooltopic8388C976f1d63091 = new sns.CfnSubscription(this, 'showmethemessagesawsstepfunctionstaskssnspublishintegcooltopic8388C976F1D63091', {
      endpoint: showmethemessages8D16bbdb.attrArn,
      protocol: 'sqs',
      topicArn: cooltopic4736778A.ref,
    });
    showmethemessagesawsstepfunctionstaskssnspublishintegcooltopic8388C976f1d63091.addDependency(showmethemessagesPolicyB08b04b0);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
    this.queueUrl = showmethemessages8D16bbdb.ref;
    new cdk.CfnOutput(this, 'CfnOutputqueueUrl', {
      key: 'queueUrl',
      value: this.queueUrl!.toString(),
    });
    this.fifoQueueUrl = fifoqueue3F2573b3.ref;
    new cdk.CfnOutput(this, 'CfnOutputfifoQueueUrl', {
      key: 'fifoQueueUrl',
      value: this.fifoQueueUrl!.toString(),
    });
  }
}

