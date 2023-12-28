import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface ParentStackChildStack26957E6F.nestedProps extends cdk.StackProps {
  /**
   * @default 'default-bucket-param-name'
   */
  readonly myBucketParameter?: string;
}

export class ParentStackChildStack26957E6F.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ParentStackChildStack26957E6F.nestedProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      myBucketParameter: props.myBucketParameter ?? 'default-bucket-param-name',
    };

    // Resources
    const bucketImport = new s3.CfnBucket(this, 'BucketImport', {
      bucketName: [
        'bucket-name-prefix',
        props.myBucketParameter!,
      ].join('-'),
    });
  }
}

