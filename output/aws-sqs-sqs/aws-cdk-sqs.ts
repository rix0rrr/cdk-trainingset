import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkSqsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSqs extends cdk.Stack {
  public readonly queueUrl;

  public constructor(scope: cdk.App, id: string, props: AwsCdkSqsProps = {}) {
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

    const encryptionKey1B843e66 = new kms.CfnKey(this, 'EncryptionKey1B843E66', {
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
    });
    encryptionKey1B843e66.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const highThroughputFifoQueue40A0eee4 = new sqs.CfnQueue(this, 'HighThroughputFifoQueue40A0EEE4', {
      deduplicationScope: 'messageGroup',
      fifoQueue: true,
      fifoThroughputLimit: 'perMessageGroupId',
    });
    highThroughputFifoQueue40A0eee4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
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
          },
        ],
        Version: '2012-10-17',
      },
    });

    const sslQueue4E9bf022 = new sqs.CfnQueue(this, 'SSLQueue4E9BF022', {
    });
    sslQueue4E9bf022.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const sqsManagedEncryptedQueue587679B3 = new sqs.CfnQueue(this, 'SqsManagedEncryptedQueue587679B3', {
      sqsManagedSseEnabled: true,
    });
    sqsManagedEncryptedQueue587679B3.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const unencryptedQueue57F92f9c = new sqs.CfnQueue(this, 'UnencryptedQueue57F92F9C', {
      sqsManagedSseEnabled: false,
    });
    unencryptedQueue57F92f9c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    const fifoQueueE5ff7273 = new sqs.CfnQueue(this, 'FifoQueueE5FF7273', {
      fifoQueue: true,
      kmsMasterKeyId: encryptionKey1B843e66.attrArn,
    });
    fifoQueueE5ff7273.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    const queue4A7e3555 = new sqs.CfnQueue(this, 'Queue4A7E3555', {
      kmsMasterKeyId: 'alias/aws/sqs',
      redrivePolicy: {
        deadLetterTargetArn: deadLetterQueue9F481546.attrArn,
        maxReceiveCount: 5,
      },
    });
    queue4A7e3555.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (sslQueue4E9bf022 == null) { throw new Error(`A combination of conditions caused 'sslQueue4E9bf022' to be undefined. Fixit.`); }
    const sslQueuePolicy5Abfdf4f = new sqs.CfnQueuePolicy(this, 'SSLQueuePolicy5ABFDF4F', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:*',
            Condition: {
              Bool: {
                'aws:SecureTransport': 'false',
              },
            },
            Effect: 'Deny',
            Principal: {
              AWS: '*',
            },
            Resource: sslQueue4E9bf022.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        sslQueue4E9bf022.ref,
      ],
    });

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    if (fifoQueueE5ff7273 == null) { throw new Error(`A combination of conditions caused 'fifoQueueE5ff7273' to be undefined. Fixit.`); }
    if (highThroughputFifoQueue40A0eee4 == null) { throw new Error(`A combination of conditions caused 'highThroughputFifoQueue40A0eee4' to be undefined. Fixit.`); }
    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (sslQueue4E9bf022 == null) { throw new Error(`A combination of conditions caused 'sslQueue4E9bf022' to be undefined. Fixit.`); }
    if (sqsManagedEncryptedQueue587679B3 == null) { throw new Error(`A combination of conditions caused 'sqsManagedEncryptedQueue587679B3' to be undefined. Fixit.`); }
    if (unencryptedQueue57F92f9c == null) { throw new Error(`A combination of conditions caused 'unencryptedQueue57F92f9c' to be undefined. Fixit.`); }
    const roleDefaultPolicy5Ffb7dab = new iam.CfnPolicy(this, 'RoleDefaultPolicy5FFB7DAB', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sqs:ChangeMessageVisibility',
              'sqs:DeleteMessage',
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:ReceiveMessage',
            ],
            Effect: 'Allow',
            Resource: [
              deadLetterQueue9F481546.attrArn,
              fifoQueueE5ff7273.attrArn,
              highThroughputFifoQueue40A0eee4.attrArn,
              queue4A7e3555.attrArn,
              sslQueue4E9bf022.attrArn,
              sqsManagedEncryptedQueue587679B3.attrArn,
              unencryptedQueue57F92f9c.attrArn,
            ],
          },
          {
            Action: 'kms:Decrypt',
            Effect: 'Allow',
            Resource: encryptionKey1B843e66.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'RoleDefaultPolicy5FFB7DAB',
      roles: [
        role1Abcc5f0.ref,
      ],
    });

    // Outputs
    this.queueUrl = queue4A7e3555.ref;
    new cdk.CfnOutput(this, 'CfnOutputQueueUrl', {
      key: 'QueueUrl',
      value: this.queueUrl!.toString(),
    });
  }
}

