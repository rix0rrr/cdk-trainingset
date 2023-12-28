import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkS3UrlsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkS3Urls extends cdk.Stack {
  public readonly bucketUrl;
  public readonly objectUrl;
  public readonly virtualHostedObjectUrl;
  public readonly virtualHostedObjectUrlNonRegional;
  public readonly s3ObjectUrl;

  public constructor(scope: cdk.App, id: string, props: AwsCdkS3UrlsProps = {}) {
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
    this.bucketUrl = myBucketF68f3ff0.attrWebsiteUrl;
    new cdk.CfnOutput(this, 'CfnOutputBucketURL', {
      key: 'BucketURL',
      value: this.bucketUrl!.toString(),
    });
    this.objectUrl = [
      'https://s3.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myBucketF68f3ff0.ref,
      '/myfolder/myfile.txt',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputObjectURL', {
      key: 'ObjectURL',
      value: this.objectUrl!.toString(),
    });
    this.virtualHostedObjectUrl = [
      'https://',
      myBucketF68f3ff0.attrRegionalDomainName,
      '/myfolder/myfile.txt',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputVirtualHostedObjectURL', {
      key: 'VirtualHostedObjectURL',
      value: this.virtualHostedObjectUrl!.toString(),
    });
    this.virtualHostedObjectUrlNonRegional = [
      'https://',
      myBucketF68f3ff0.attrDomainName,
      '/myfolder/myfile.txt',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputVirtualHostedObjectURLNonRegional', {
      key: 'VirtualHostedObjectURLNonRegional',
      value: this.virtualHostedObjectUrlNonRegional!.toString(),
    });
    this.s3ObjectUrl = [
      's3://',
      myBucketF68f3ff0.ref,
      '/myfolder/myfile.txt',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputS3ObjectURL', {
      key: 'S3ObjectURL',
      value: this.s3ObjectUrl!.toString(),
    });
  }
}

