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
    const deleter1Fedc09a = new iam.CfnUser(this, 'Deleter1FEDC09A', {
    });

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
        ],
        Version: '2012-10-17',
      },
    });
    myKey6Ab29fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myKey6Ab29fa6 == null) { throw new Error(`A combination of conditions caused 'myKey6Ab29fa6' to be undefined. Fixit.`); }
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: myKey6Ab29fa6.attrArn,
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (deleter1Fedc09a == null) { throw new Error(`A combination of conditions caused 'deleter1Fedc09a' to be undefined. Fixit.`); }
    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const deleterDefaultPolicyCd33b8a0 = new iam.CfnPolicy(this, 'DeleterDefaultPolicyCD33B8A0', {
      policyDocument: {
        Statement: [
          {
            Action: 's3:DeleteObject*',
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              '/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'DeleterDefaultPolicyCD33B8A0',
      users: [
        deleter1Fedc09a.ref,
      ],
    });
  }
}

