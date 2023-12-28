import * as cdk from 'aws-cdk-lib';
import * as appconfig from 'aws-cdk-lib/aws-appconfig';

export interface aws-appconfig-deployment-strategyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-appconfig-deployment-strategy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-appconfig-deployment-strategyProps = {}) {
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
    const myDeploymentStrategy60D31fb0 = new appconfig.CfnDeploymentStrategy(this, 'MyDeploymentStrategy60D31FB0', {
      deploymentDurationInMinutes: 5,
      growthFactor: 15,
      growthType: 'LINEAR',
      name: 'awsappconfigdeploymentstrategy-MyDeploymentStrategy-9D0AC356',
      replicateTo: 'NONE',
    });
  }
}

