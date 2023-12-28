import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface ProducerStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ProducerStack extends cdk.Stack {
  public readonly exportsOutputFnGetAttMyBucketF68f3ff0Arn0F7e8e58;

  public constructor(scope: cdk.App, id: string, props: ProducerStackProps = {}) {
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
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.exportsOutputFnGetAttMyBucketF68f3ff0Arn0F7e8e58 = myBucketF68f3ff0.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttMyBucketF68F3FF0Arn0F7E8E58', {
      key: 'ExportsOutputFnGetAttMyBucketF68F3FF0Arn0F7E8E58',
      exportName: 'ProducerStack:ExportsOutputFnGetAttMyBucketF68F3FF0Arn0F7E8E58',
      value: this.exportsOutputFnGetAttMyBucketF68f3ff0Arn0F7e8e58!.toString(),
    });
  }
}

