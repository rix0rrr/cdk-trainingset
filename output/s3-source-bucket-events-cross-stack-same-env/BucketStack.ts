import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface BucketStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class BucketStack extends cdk.Stack {
  public readonly exportsOutputRefBucket83908E7781c90ac0;
  public readonly exportsOutputFnGetAttBucket83908E77Arn063C8555;

  public constructor(scope: cdk.App, id: string, props: BucketStackProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.exportsOutputRefBucket83908E7781c90ac0 = bucket83908E77.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefBucket83908E7781C90AC0', {
      key: 'ExportsOutputRefBucket83908E7781C90AC0',
      exportName: 'BucketStack:ExportsOutputRefBucket83908E7781C90AC0',
      value: this.exportsOutputRefBucket83908E7781c90ac0!.toString(),
    });
    this.exportsOutputFnGetAttBucket83908E77Arn063C8555 = bucket83908E77.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttBucket83908E77Arn063C8555', {
      key: 'ExportsOutputFnGetAttBucket83908E77Arn063C8555',
      exportName: 'BucketStack:ExportsOutputFnGetAttBucket83908E77Arn063C8555',
      value: this.exportsOutputFnGetAttBucket83908E77Arn063C8555!.toString(),
    });
  }
}

