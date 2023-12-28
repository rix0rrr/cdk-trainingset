import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIamAccessKey1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIamAccessKey1 extends cdk.Stack {
  public readonly accessKeyId;

  public constructor(scope: cdk.App, id: string, props: IntegIamAccessKey1Props = {}) {
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
    const testUser6A619381 = new iam.CfnUser(this, 'TestUser6A619381', {
    });

    if (testUser6A619381 == null) { throw new Error(`A combination of conditions caused 'testUser6A619381' to be undefined. Fixit.`); }
    const testAccessKey4Bfc5cf5 = new iam.CfnAccessKey(this, 'TestAccessKey4BFC5CF5', {
      userName: testUser6A619381.ref,
    });

    // Outputs
    this.accessKeyId = testAccessKey4Bfc5cf5.ref;
    new cdk.CfnOutput(this, 'CfnOutputAccessKeyId', {
      key: 'AccessKeyId',
      value: this.accessKeyId!.toString(),
    });
  }
}

