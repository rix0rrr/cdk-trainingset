import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';

export interface AwsCdkAwsApigatewayv2WebsocketsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkAwsApigatewayv2Websockets extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkAwsApigatewayv2WebsocketsProps = {}) {
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
    const myWebsocketApiEbac53df = new apigatewayv2.CfnApi(this, 'MyWebsocketApiEBAC53DF', {
      apiKeySelectionExpression: '$request.header.x-api-key',
      name: 'MyWebsocketApi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });
  }
}

