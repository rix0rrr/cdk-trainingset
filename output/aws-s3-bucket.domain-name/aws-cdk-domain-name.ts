import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkDomainNameProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkDomainName extends cdk.Stack {
  public readonly realBucketDomain;
  public readonly importedBucketDomain;

  public constructor(scope: cdk.App, id: string, props: AwsCdkDomainNameProps = {}) {
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
    this.realBucketDomain = myBucketF68f3ff0.attrDomainName;
    new cdk.CfnOutput(this, 'CfnOutputRealBucketDomain', {
      key: 'RealBucketDomain',
      value: this.realBucketDomain!.toString(),
    });
    this.importedBucketDomain = [
      'my-bucket-test.s3.',
      this.urlSuffix,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputImportedBucketDomain', {
      key: 'ImportedBucketDomain',
      value: this.importedBucketDomain!.toString(),
    });
  }
}

