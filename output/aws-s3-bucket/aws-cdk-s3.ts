import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkS3Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkS3 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkS3Props = {}) {
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
    const myBucketKeyC17130cf = new kms.CfnKey(this, 'MyBucketKeyC17130CF', {
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
      description: 'Created by aws-cdk-s3/MyBucket',
    });
    myBucketKeyC17130cf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myOtherBucket543F3540 = new s3.CfnBucket(this, 'MyOtherBucket543F3540', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'AES256',
            },
          },
        ],
      },
    });
    myOtherBucket543F3540.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    if (myBucketKeyC17130cf == null) { throw new Error(`A combination of conditions caused 'myBucketKeyC17130cf' to be undefined. Fixit.`); }
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: myBucketKeyC17130cf.attrArn,
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myBucketKeyC17130cf == null) { throw new Error(`A combination of conditions caused 'myBucketKeyC17130cf' to be undefined. Fixit.`); }
    if (myOtherBucket543F3540 == null) { throw new Error(`A combination of conditions caused 'myOtherBucket543F3540' to be undefined. Fixit.`); }
    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    const myUserDefaultPolicy7B897426 = new iam.CfnPolicy(this, 'MyUserDefaultPolicy7B897426', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: myBucketKeyC17130cf.attrArn,
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myOtherBucket543F3540.attrArn,
              [
                myOtherBucket543F3540.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyUserDefaultPolicy7B897426',
      users: [
        myUserDc45028b.ref,
      ],
    });
  }
}

