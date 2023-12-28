import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-s3-bucket-encryptionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-s3-bucket-encryption extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-s3-bucket-encryptionProps = {}) {
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
    const myDsseBucket8A2a1d0c = new s3.CfnBucket(this, 'MyDSSEBucket8A2A1D0C', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'aws:kms:dsse',
            },
          },
        ],
      },
    });
    myDsseBucket8A2a1d0c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}

