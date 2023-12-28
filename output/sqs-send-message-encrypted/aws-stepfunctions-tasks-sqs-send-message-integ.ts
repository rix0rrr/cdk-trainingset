import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksSqsSendMessageIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksSqsSendMessageInteg extends cdk.Stack {
  public readonly stateMachineArn;
  public readonly queueUrl;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksSqsSendMessageIntegProps = {}) {
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

    const showmethemessagesKeyC4d56d85 = new kms.CfnKey(this, 'showmethemessagesKeyC4D56D85', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      description: 'Created by aws-stepfunctions-tasks-sqs-send-message-integ/show-me-the-messages',
    });
    showmethemessagesKeyC4d56d85.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (showmethemessagesKeyC4d56d85 == null) { throw new Error(`A combination of conditions caused 'showmethemessagesKeyC4d56d85' to be undefined. Fixit.`); }
    const showmethemessages8D16bbdb = new sqs.CfnQueue(this, 'showmethemessages8D16BBDB', {
      kmsMasterKeyId: showmethemessagesKeyC4d56d85.attrArn,
    });
    showmethemessages8D16bbdb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (showmethemessages8D16bbdb == null) { throw new Error(`A combination of conditions caused 'showmethemessages8D16bbdb' to be undefined. Fixit.`); }
    if (showmethemessagesKeyC4d56d85 == null) { throw new Error(`A combination of conditions caused 'showmethemessagesKeyC4d56d85' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: showmethemessages8D16bbdb.attrArn,
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:GenerateDataKey*',
            ],
            Effect: 'Allow',
            Resource: showmethemessagesKeyC4d56d85.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (showmethemessages8D16bbdb == null) { throw new Error(`A combination of conditions caused 'showmethemessages8D16bbdb' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"send message to sqs\",\"States\":{\"send message to sqs\":{\"Next\":\"Final step\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sqs:sendMessage\",\"Parameters\":{\"QueueUrl\":\"',
        showmethemessages8D16bbdb.ref,
        '\",\"MessageBody\":\"sending message over\"}},\"Final step\":{\"Type\":\"Pass\",\"End\":true}},\"TimeoutSeconds\":30}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

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
  }
}

