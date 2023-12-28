import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';

export interface aws-cdk-aws-apigatewayv2Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-aws-apigatewayv2 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-aws-apigatewayv2Props = {}) {
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
    const httpApiF5a9a8a7 = new apigatewayv2.CfnApi(this, 'HttpApiF5A9A8A7', {
      name: 'HttpApi',
      protocolType: 'HTTP',
    });

    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiDefaultStage3Eeb07d6 = new apigatewayv2.CfnStage(this, 'HttpApiDefaultStage3EEB07D6', {
      apiId: httpApiF5a9a8a7.ref,
      autoDeploy: true,
      stageName: '$default',
    });
  }
}

