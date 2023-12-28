import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface SnsToSqsStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class SnsToSqsStack extends cdk.Stack {
  public readonly exportsOutputRefMyTopic868694349D03d60f;

  public constructor(scope: cdk.App, id: string, props: SnsToSqsStackProps = {}) {
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
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    // Outputs
    this.exportsOutputRefMyTopic868694349D03d60f = myTopic86869434.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyTopic868694349D03D60F', {
      key: 'ExportsOutputRefMyTopic868694349D03D60F',
      exportName: 'SnsToSqsStack:ExportsOutputRefMyTopic868694349D03D60F',
      value: this.exportsOutputRefMyTopic868694349D03d60f!.toString(),
    });
  }
}

