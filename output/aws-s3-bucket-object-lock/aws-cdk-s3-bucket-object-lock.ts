import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkS3BucketObjectLockProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkS3BucketObjectLock extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkS3BucketObjectLockProps = {}) {
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
    const objectLockBucketA9f4f5ac = new s3.CfnBucket(this, 'ObjectLockBucketA9F4F5AC', {
      objectLockEnabled: true,
    });
    objectLockBucketA9f4f5ac.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const objectLockWithRetentionBucket31Ed9b51 = new s3.CfnBucket(this, 'ObjectLockWithRetentionBucket31ED9B51', {
      objectLockConfiguration: {
        objectLockEnabled: 'Enabled',
        rule: {
          defaultRetention: {
            days: 2,
            mode: 'GOVERNANCE',
          },
        },
      },
      objectLockEnabled: true,
    });
    objectLockWithRetentionBucket31Ed9b51.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}

