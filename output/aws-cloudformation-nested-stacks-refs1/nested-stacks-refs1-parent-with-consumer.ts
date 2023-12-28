import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface nested-stacks-refs1-parent-with-consumerProps extends cdk.StackProps {
  /**
   * S3 bucket for asset "f780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46"
   */
  readonly assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46S3BucketE30948c8: string;
  /**
   * S3 key for asset version "f780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46"
   */
  readonly assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46S3VersionKeyDea9e5ae: string;
  /**
   * Artifact hash for asset "f780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46"
   */
  readonly assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46ArtifactHashFcb5e601: string;
}

export class nested-stacks-refs1-parent-with-consumer extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nested-stacks-refs1-parent-with-consumerProps) {
    super(scope, id, props);

    // Resources
    const nested1NestedStackNested1NestedStackResourceCd0ad36b = new cloudformation.CfnStack(this, 'Nested1NestedStackNested1NestedStackResourceCD0AD36B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        props.assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46S3BucketE30948c8!,
        '/',
        cdk.Fn.select(0, cdk.Fn.split('||', props.assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46S3VersionKeyDea9e5ae!)),
        cdk.Fn.select(1, cdk.Fn.split('||', props.assetParametersf780d24543a81dc89296e718fbad166c6cc0223026f7a142a0ad9cb21de3ac46S3VersionKeyDea9e5ae!)),
      ].join(''),
    });
    nested1NestedStackNested1NestedStackResourceCd0ad36b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

