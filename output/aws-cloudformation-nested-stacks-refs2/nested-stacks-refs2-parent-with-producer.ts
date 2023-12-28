import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface NestedStacksRefs2ParentWithProducerProps extends cdk.StackProps {
  /**
   * S3 bucket for asset "89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883"
   */
  readonly assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883S3Bucket88569758: string;
  /**
   * S3 key for asset version "89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883"
   */
  readonly assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883S3VersionKey2661E5b6: string;
  /**
   * Artifact hash for asset "89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883"
   */
  readonly assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883ArtifactHashF75589eb: string;
}

export class NestedStacksRefs2ParentWithProducer extends cdk.Stack {
  public readonly exportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCd0ad36bOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicNameF4bcedaf;

  public constructor(scope: cdk.App, id: string, props: NestedStacksRefs2ParentWithProducerProps) {
    super(scope, id, props);

    // Resources
    const nested1NestedStackNested1NestedStackResourceCd0ad36b = new cloudformation.CfnStack(this, 'Nested1NestedStackNested1NestedStackResourceCD0AD36B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        props.assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883S3Bucket88569758!,
        '/',
        cdk.Fn.select(0, cdk.Fn.split('||', props.assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883S3VersionKey2661E5b6!)),
        cdk.Fn.select(1, cdk.Fn.split('||', props.assetParameters89ace718d1ec985253be4d688a4632c5f15e28247cedbf99a756c83096315883S3VersionKey2661E5b6!)),
      ].join(''),
    });
    nested1NestedStackNested1NestedStackResourceCd0ad36b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.exportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCd0ad36bOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicNameF4bcedaf = nested1NestedStackNested1NestedStackResourceCd0ad36b.attrOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicName;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCD0AD36BOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicNameF4BCEDAF', {
      key: 'ExportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCD0AD36BOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicNameF4BCEDAF',
      exportName: 'nested-stacks-refs2-parent-with-producer:ExportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCD0AD36BOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26C363TopicNameF4BCEDAF',
      value: this.exportsOutputFnGetAttNested1NestedStackNested1NestedStackResourceCd0ad36bOutputsnestedstacksrefs2parentwithproducerNested1MyTopic9E26c363TopicNameF4bcedaf!.toString(),
    });
  }
}

