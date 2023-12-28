import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkS3AccessLogsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkS3AccessLogs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkS3AccessLogsProps = {}) {
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
    const myAccessLogsBucketF7fe6635 = new s3.CfnBucket(this, 'MyAccessLogsBucketF7FE6635', {
    });
    myAccessLogsBucketF7fe6635.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myAccessLogsBucketF7fe6635 == null) { throw new Error(`A combination of conditions caused 'myAccessLogsBucketF7fe6635' to be undefined. Fixit.`); }
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      loggingConfiguration: {
        destinationBucketName: myAccessLogsBucketF7fe6635.ref,
        logFilePrefix: 'example',
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myAccessLogsBucketF7fe6635 == null) { throw new Error(`A combination of conditions caused 'myAccessLogsBucketF7fe6635' to be undefined. Fixit.`); }
    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const myAccessLogsBucketPolicyEa9ab063 = new s3.CfnBucketPolicy(this, 'MyAccessLogsBucketPolicyEA9AB063', {
      bucket: myAccessLogsBucketF7fe6635.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:PutObject',
            Condition: {
              ArnLike: {
                'aws:SourceArn': myBucketF68f3ff0.attrArn,
              },
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'logging.s3.amazonaws.com',
            },
            Resource: [
              myAccessLogsBucketF7fe6635.attrArn,
              '/example*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
    });
  }
}

