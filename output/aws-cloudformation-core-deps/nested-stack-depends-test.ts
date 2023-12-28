import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface nested-stack-depends-testProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class nested-stack-depends-test extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nested-stack-depends-testProps = {}) {
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
    const stack1NestedStackStack1NestedStackResource256Cb8c4 = new cloudformation.CfnStack(this, 'Stack1NestedStackStack1NestedStackResource256CB8C4', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/a0a84b40ba60ba1e502f2d610a4a4f1887756b077982504bcc7227a7d3d81425.json',
      ].join(''),
    });
    stack1NestedStackStack1NestedStackResource256Cb8c4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (stack1NestedStackStack1NestedStackResource256Cb8c4 == null) { throw new Error(`A combination of conditions caused 'stack1NestedStackStack1NestedStackResource256Cb8c4' to be undefined. Fixit.`); }
    const stack2NestedStackStack2NestedStackResource9F0678cf = new cloudformation.CfnStack(this, 'Stack2NestedStackStack2NestedStackResource9F0678CF', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/a967bbe5c0391c1c335b765fd70a93c81565a73fdd887a2456aa54f001e52336.json',
      ].join(''),
    });
    stack2NestedStackStack2NestedStackResource9F0678cf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stack2NestedStackStack2NestedStackResource9F0678cf.addDependency(stack1NestedStackStack1NestedStackResource256Cb8c4);
  }
}

