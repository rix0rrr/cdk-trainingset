import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkSqsEventTargetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSqsEventTarget extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSqsEventTargetProps = {}) {
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

    const myKey6Ab29fa6 = new kms.CfnKey(this, 'MyKey6AB29FA6', {
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
          {
            Action: [
              'kms:Decrypt',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    myKey6Ab29fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myKey6Ab29fa6 == null) { throw new Error(`A combination of conditions caused 'myKey6Ab29fa6' to be undefined. Fixit.`); }
    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
      kmsMasterKeyId: myKey6Ab29fa6.attrArn,
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    const myQueuePolicy6Bbeddac = new sqs.CfnQueuePolicy(this, 'MyQueuePolicy6BBEDDAC', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:SendMessage',
            ],
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
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

    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    const myRuleA44ab831 = new events.CfnRule(this, 'MyRuleA44AB831', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myQueueE6ca6235.attrArn,
          deadLetterConfig: {
            arn: myDeadLetterQueueD997968a.attrArn,
          },
          id: 'Target0',
        },
      ],
    });

    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (myRuleA44ab831 == null) { throw new Error(`A combination of conditions caused 'myRuleA44ab831' to be undefined. Fixit.`); }
    const myDeadLetterQueuePolicyCc35d52c = new sqs.CfnQueuePolicy(this, 'MyDeadLetterQueuePolicyCC35D52C', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myRuleA44ab831.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myDeadLetterQueueD997968a.attrArn,
            Sid: 'AllowEventRuleawscdksqseventtargetMyRule0027A8F4',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myDeadLetterQueueD997968a.ref,
      ],
    });
  }
}

