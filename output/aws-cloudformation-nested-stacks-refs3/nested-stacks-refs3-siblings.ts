import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface NestedStacksRefs3SiblingsProps extends cdk.StackProps {
  /**
   * S3 bucket for asset "008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9a"
   */
  readonly assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aS3Bucket3Ac5d089: string;
  /**
   * S3 key for asset version "008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9a"
   */
  readonly assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aS3VersionKeyB0263a92: string;
  /**
   * Artifact hash for asset "008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9a"
   */
  readonly assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aArtifactHashEf790dcb: string;
  /**
   * S3 bucket for asset "2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583"
   */
  readonly assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583S3Bucket72E4418f: string;
  /**
   * S3 key for asset version "2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583"
   */
  readonly assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583S3VersionKeyC46a55b6: string;
  /**
   * Artifact hash for asset "2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583"
   */
  readonly assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583ArtifactHashDf52341b: string;
}

export class NestedStacksRefs3Siblings extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: NestedStacksRefs3SiblingsProps) {
    super(scope, id, props);

    // Resources
    const nested1NestedStackNested1NestedStackResourceCd0ad36b = new cloudformation.CfnStack(this, 'Nested1NestedStackNested1NestedStackResourceCD0AD36B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        props.assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aS3Bucket3Ac5d089!,
        '/',
        cdk.Fn.select(0, cdk.Fn.split('||', props.assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aS3VersionKeyB0263a92!)),
        cdk.Fn.select(1, cdk.Fn.split('||', props.assetParameters008e281fb3039601b8fbef60e255afe78cb00a09611d1aa7342f56328aef7d9aS3VersionKeyB0263a92!)),
      ].join(''),
    });
    nested1NestedStackNested1NestedStackResourceCd0ad36b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (nested1NestedStackNested1NestedStackResourceCd0ad36b == null) { throw new Error(`A combination of conditions caused 'nested1NestedStackNested1NestedStackResourceCd0ad36b' to be undefined. Fixit.`); }
    const nested2NestedStackNested2NestedStackResource877A1112 = new cloudformation.CfnStack(this, 'Nested2NestedStackNested2NestedStackResource877A1112', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        props.assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583S3Bucket72E4418f!,
        '/',
        cdk.Fn.select(0, cdk.Fn.split('||', props.assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583S3VersionKeyC46a55b6!)),
        cdk.Fn.select(1, cdk.Fn.split('||', props.assetParameters2e7ce09a9e0721d268d734287b72d071ed542a05451e3b53dfcb5ae4e76cc583S3VersionKeyC46a55b6!)),
      ].join(''),
      parameters: {
        referencetonestedstacksrefs3siblingsNested1NestedStackNested1NestedStackResourceE58B6825Outputsnestedstacksrefs3siblingsNested1MyTopic12458558TopicName: nested1NestedStackNested1NestedStackResourceCd0ad36b.attrOutputsnestedstacksrefs3siblingsNested1MyTopic12458558TopicName,
      },
    });
    nested2NestedStackNested2NestedStackResource877A1112.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

