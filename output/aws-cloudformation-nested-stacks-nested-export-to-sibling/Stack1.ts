import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface Stack1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack1 extends cdk.Stack {
  public readonly exportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305bOutputsStack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicNameD753d416;

  public constructor(scope: cdk.App, id: string, props: Stack1Props = {}) {
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
    const nestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305b = new cloudformation.CfnStack(this, 'NestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/5bbe5621d9656843b414db3e449d8c562b0b27bb293ef6999180dc5198c70219.json',
      ].join(''),
    });
    nestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.exportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305bOutputsStack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicNameD753d416 = nestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305b.attrOutputsStack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicName;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305BOutputsStack1NestedUnderStack1TopicInNestedUnderStack136BDF841TopicNameD753D416', {
      key: 'ExportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305BOutputsStack1NestedUnderStack1TopicInNestedUnderStack136BDF841TopicNameD753D416',
      exportName: 'Stack1:ExportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305BOutputsStack1NestedUnderStack1TopicInNestedUnderStack136BDF841TopicNameD753D416',
      value: this.exportsOutputFnGetAttNestedUnderStack1NestedStackNestedUnderStack1NestedStackResourceF616305bOutputsStack1NestedUnderStack1TopicInNestedUnderStack136Bdf841TopicNameD753d416!.toString(),
    });
  }
}

