import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface PrivateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Private extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: PrivateProps = {}) {
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
    const integBucketD47df7ca = new s3.CfnBucket(this, 'IntegBucketD47DF7CA', {
      accessControl: 'Private',
      ownershipControls: {
        rules: [
          {
            objectOwnership: 'BucketOwnerEnforced',
          },
        ],
      },
    });
    integBucketD47df7ca.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

