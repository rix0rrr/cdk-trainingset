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
      name: 'MyWebsocketApi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    if (myWebsocketApiEbac53df == null) { throw new Error(`A combination of conditions caused 'myWebsocketApiEbac53df' to be undefined. Fixit.`); }
    const myWebsocketApitestRouteSendMessageIntegration526C7cb6 = new apigatewayv2.CfnIntegration(this, 'MyWebsocketApitestRouteSendMessageIntegration526C7CB6', {
      apiId: myWebsocketApiEbac53df.ref,
      integrationType: 'MOCK',
      integrationUri: '',
    });

    if (myWebsocketApiEbac53df == null) { throw new Error(`A combination of conditions caused 'myWebsocketApiEbac53df' to be undefined. Fixit.`); }
    if (myWebsocketApitestRouteSendMessageIntegration526C7cb6 == null) { throw new Error(`A combination of conditions caused 'myWebsocketApitestRouteSendMessageIntegration526C7cb6' to be undefined. Fixit.`); }
    const myWebsocketApitestRoute893E635a = new apigatewayv2.CfnRoute(this, 'MyWebsocketApitestRoute893E635A', {
      apiId: myWebsocketApiEbac53df.ref,
      routeKey: 'test',
      authorizationType: 'NONE',
      routeResponseSelectionExpression: '$default',
      target: [
        'integrations/',
        myWebsocketApitestRouteSendMessageIntegration526C7cb6.ref,
      ].join(''),
    });

    if (myWebsocketApiEbac53df == null) { throw new Error(`A combination of conditions caused 'myWebsocketApiEbac53df' to be undefined. Fixit.`); }
    if (myWebsocketApitestRoute893E635a == null) { throw new Error(`A combination of conditions caused 'myWebsocketApitestRoute893E635a' to be undefined. Fixit.`); }
    const myWebsocketApitestRouteResponse5A88d743 = new apigatewayv2.CfnRouteResponse(this, 'MyWebsocketApitestRouteResponse5A88D743', {
      apiId: myWebsocketApiEbac53df.ref,
      routeId: myWebsocketApitestRoute893E635a.ref,
      routeResponseKey: '$default',
    });
  }
}

