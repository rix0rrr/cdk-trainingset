import * as cdk from 'aws-cdk-lib';
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
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      intelligentTieringConfigurations: [
        {
          id: 'foo',
          prefix: 'bar',
          status: 'Enabled',
          tagFilters: [
            {
              key: 'test',
              value: 'bazz',
            },
          ],
          tierings: [
            {
              accessTier: 'ARCHIVE_ACCESS',
              days: 90,
            },
            {
              accessTier: 'DEEP_ARCHIVE_ACCESS',
              days: 180,
            },
          ],
        },
      ],
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}

