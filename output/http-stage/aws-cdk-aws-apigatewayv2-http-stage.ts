import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';

export interface AwsCdkAwsApigatewayv2HttpStageProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkAwsApigatewayv2HttpStage extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkAwsApigatewayv2HttpStageProps = {}) {
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
    const httpStageWithPropertiesC0aaba83 = new apigatewayv2.CfnStage(this, 'HttpStageWithPropertiesC0AABA83', {
      apiId: httpApiF5a9a8a7.ref,
      stageName: '$default',
      defaultRouteSettings: {
        throttlingBurstLimit: 1000,
        throttlingRateLimit: 1000,
      },
    });
  }
}

