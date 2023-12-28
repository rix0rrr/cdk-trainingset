import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface NestedStacksMultiRefsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class NestedStacksMultiRefs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: NestedStacksMultiRefsProps = {}) {
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
    const level1Abbd39b3 = new sns.CfnTopic(this, 'Level1ABBD39B3', {
    });

    if (level1Abbd39b3 == null) { throw new Error(`A combination of conditions caused 'level1Abbd39b3' to be undefined. Fixit.`); }
    const nested1NestedStackNested1NestedStackResourceCd0ad36b = new cloudformation.CfnStack(this, 'Nested1NestedStackNested1NestedStackResourceCD0AD36B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/4bdae5eef426be902bf557cb4e8586dca464f5907b710c68d9679f61d2b7eee7.json',
      ].join(''),
      parameters: {
        referencetonestedstacksmultirefsLevel19FB2466DTopicName: level1Abbd39b3.attrTopicName,
      },
    });
    nested1NestedStackNested1NestedStackResourceCd0ad36b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

