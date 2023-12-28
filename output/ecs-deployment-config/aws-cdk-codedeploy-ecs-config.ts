import * as cdk from 'aws-cdk-lib';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';

export interface AwsCdkCodedeployEcsConfigProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodedeployEcsConfig extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodedeployEcsConfigProps = {}) {
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
    const linearConfig531Cf4aa = new codedeploy.CfnDeploymentConfig(this, 'LinearConfig531CF4AA', {
      computePlatform: 'ECS',
      trafficRoutingConfig: {
        timeBasedLinear: {
          linearInterval: 1,
          linearPercentage: 5,
        },
        type: 'TimeBasedLinear',
      },
    });
  }
}

