import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkSnsSqsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSnsSqs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSnsSqsProps = {}) {
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
    const deadLetterQueue9F481546 = new sqs.CfnQueue(this, 'DeadLetterQueue9F481546', {
    });
    deadLetterQueue9F481546.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const deadLetterQueuePolicyB1fb890c = new sqs.CfnQueuePolicy(this, 'DeadLetterQueuePolicyB1FB890C', {
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
            Resource: deadLetterQueue9F481546.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        deadLetterQueue9F481546.ref,
      ],
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const encryptionMasterKey5Bd393b9 = new kms.CfnKey(this, 'EncryptionMasterKey5BD393B9', {
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
              'kms:GenerateDataKey',
            ],
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myTopic86869434.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    encryptionMasterKey5Bd393b9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (encryptionMasterKey5Bd393b9 == null) { throw new Error(`A combination of conditions caused 'encryptionMasterKey5Bd393b9' to be undefined. Fixit.`); }
    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
      kmsMasterKeyId: encryptionMasterKey5Bd393b9.attrArn,
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myQueuePolicy6Bbeddac == null) { throw new Error(`A combination of conditions caused 'myQueuePolicy6Bbeddac' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myQueueawscdksnssqsMyTopic9361Dea223429051 = new sns.CfnSubscription(this, 'MyQueueawscdksnssqsMyTopic9361DEA223429051', {
      protocol: 'sqs',
      topicArn: myTopic86869434.ref,
      endpoint: myQueueE6ca6235.attrArn,
      redrivePolicy: {
        deadLetterTargetArn: deadLetterQueue9F481546.attrArn,
      },
    });
    myQueueawscdksnssqsMyTopic9361Dea223429051.addDependency(myQueuePolicy6Bbeddac);
  }
}

