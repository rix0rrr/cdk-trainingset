import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';

export interface IntegMockWebsocketIntegrationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegMockWebsocketIntegration extends cdk.Stack {
  public readonly apiEndpoint;

  public constructor(scope: cdk.App, id: string, props: IntegMockWebsocketIntegrationProps = {}) {
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
    const mywsapi32E6ce11 = new apigatewayv2.CfnApi(this, 'mywsapi32E6CE11', {
      name: 'mywsapi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mystage114C35ec = new apigatewayv2.CfnStage(this, 'mystage114C35EC', {
      apiId: mywsapi32E6ce11.ref,
      stageName: 'dev',
      autoDeploy: true,
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapidefaultRouteDefaultIntegrationFfcb3ba9 = new apigatewayv2.CfnIntegration(this, 'mywsapidefaultRouteDefaultIntegrationFFCB3BA9', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'MOCK',
      integrationUri: '',
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapisendmessageRouteSendMessageIntegrationD29e12f9 = new apigatewayv2.CfnIntegration(this, 'mywsapisendmessageRouteSendMessageIntegrationD29E12F9', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'MOCK',
      integrationUri: '',
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapidefaultRouteDefaultIntegrationFfcb3ba9 == null) { throw new Error(`A combination of conditions caused 'mywsapidefaultRouteDefaultIntegrationFfcb3ba9' to be undefined. Fixit.`); }
    const mywsapidefaultRouteE9382df8 = new apigatewayv2.CfnRoute(this, 'mywsapidefaultRouteE9382DF8', {
      apiId: mywsapi32E6ce11.ref,
      routeKey: '$default',
      authorizationType: 'NONE',
      target: [
        'integrations/',
        mywsapidefaultRouteDefaultIntegrationFfcb3ba9.ref,
      ].join(''),
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapisendmessageRouteSendMessageIntegrationD29e12f9 == null) { throw new Error(`A combination of conditions caused 'mywsapisendmessageRouteSendMessageIntegrationD29e12f9' to be undefined. Fixit.`); }
    const mywsapisendmessageRouteAe873328 = new apigatewayv2.CfnRoute(this, 'mywsapisendmessageRouteAE873328', {
      apiId: mywsapi32E6ce11.ref,
      routeKey: 'sendmessage',
      authorizationType: 'NONE',
      target: [
        'integrations/',
        mywsapisendmessageRouteSendMessageIntegrationD29e12f9.ref,
      ].join(''),
    });

    // Outputs
    this.apiEndpoint = [
      'wss://',
      mywsapi32E6ce11.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/dev',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputApiEndpoint', {
      key: 'ApiEndpoint',
      value: this.apiEndpoint!.toString(),
    });
  }
}

