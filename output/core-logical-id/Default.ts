import * as cdk from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface DefaultProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Default extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: DefaultProps = {}) {
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
    const 01234test13C610be = new sqs.CfnQueue(this, '01234test13C610BE', {
      visibilityTimeout: 300,
    });
    01234test13C610be.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const test01234Cc388e2e = new sqs.CfnQueue(this, 'test01234CC388E2E', {
      visibilityTimeout: 300,
    });
    test01234Cc388e2e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

