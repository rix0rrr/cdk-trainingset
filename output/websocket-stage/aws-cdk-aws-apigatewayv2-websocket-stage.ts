import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';

export interface aws-cdk-aws-apigatewayv2-websocket-stageProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-aws-apigatewayv2-websocket-stage extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-aws-apigatewayv2-websocket-stageProps = {}) {
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
    const webSocketApi34Bcf99b = new apigatewayv2.CfnApi(this, 'WebSocketApi34BCF99B', {
      name: 'WebSocketApi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    if (webSocketApi34Bcf99b == null) { throw new Error(`A combination of conditions caused 'webSocketApi34Bcf99b' to be undefined. Fixit.`); }
    const webSocketStageC46b7e43 = new apigatewayv2.CfnStage(this, 'WebSocketStageC46B7E43', {
      apiId: webSocketApi34Bcf99b.ref,
      stageName: 'dev',
      defaultRouteSettings: {
        throttlingBurstLimit: 1000,
        throttlingRateLimit: 1000,
      },
    });
  }
}

