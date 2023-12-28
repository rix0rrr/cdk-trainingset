import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface WebSocketApiIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class WebSocketApiInteg extends cdk.Stack {
  public readonly apiEndpoint;

  public constructor(scope: cdk.App, id: string, props: WebSocketApiIntegProps = {}) {
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
    const connectHandlerServiceRole7E4a9b1f = new iam.CfnRole(this, 'ConnectHandlerServiceRole7E4A9B1F', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const defaultHandlerServiceRoleDf00569c = new iam.CfnRole(this, 'DefaultHandlerServiceRoleDF00569C', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const disconnectHandlerServiceRoleE54f14f9 = new iam.CfnRole(this, 'DisconnectHandlerServiceRoleE54F14F9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const messageHandlerServiceRoleDf05266a = new iam.CfnRole(this, 'MessageHandlerServiceRoleDF05266A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const mywsapi32E6ce11 = new apigatewayv2.CfnApi(this, 'mywsapi32E6CE11', {
      name: 'mywsapi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    if (connectHandlerServiceRole7E4a9b1f == null) { throw new Error(`A combination of conditions caused 'connectHandlerServiceRole7E4a9b1f' to be undefined. Fixit.`); }
    const connectHandler2Ffd52d8 = new lambda.CfnFunction(this, 'ConnectHandler2FFD52D8', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { console.log(event); return { statusCode: 200, body: \"connected\" }; };',
      },
      handler: 'index.handler',
      role: connectHandlerServiceRole7E4a9b1f.attrArn,
      runtime: 'nodejs18.x',
    });
    connectHandler2Ffd52d8.addDependency(connectHandlerServiceRole7E4a9b1f);

    if (defaultHandlerServiceRoleDf00569c == null) { throw new Error(`A combination of conditions caused 'defaultHandlerServiceRoleDf00569c' to be undefined. Fixit.`); }
    const defaultHandler604Df7ac = new lambda.CfnFunction(this, 'DefaultHandler604DF7AC', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { console.log(event); return { statusCode: 200, body: \"default\" }; };',
      },
      handler: 'index.handler',
      role: defaultHandlerServiceRoleDf00569c.attrArn,
      runtime: 'nodejs18.x',
    });
    defaultHandler604Df7ac.addDependency(defaultHandlerServiceRoleDf00569c);

    if (disconnectHandlerServiceRoleE54f14f9 == null) { throw new Error(`A combination of conditions caused 'disconnectHandlerServiceRoleE54f14f9' to be undefined. Fixit.`); }
    const disconnectHandlerCb7ed6f7 = new lambda.CfnFunction(this, 'DisconnectHandlerCB7ED6F7', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { console.log(event); return { statusCode: 200, body: \"disconnected\" }; };',
      },
      handler: 'index.handler',
      role: disconnectHandlerServiceRoleE54f14f9.attrArn,
      runtime: 'nodejs18.x',
    });
    disconnectHandlerCb7ed6f7.addDependency(disconnectHandlerServiceRoleE54f14f9);

    if (messageHandlerServiceRoleDf05266a == null) { throw new Error(`A combination of conditions caused 'messageHandlerServiceRoleDf05266a' to be undefined. Fixit.`); }
    const messageHandlerDfbbcd6b = new lambda.CfnFunction(this, 'MessageHandlerDFBBCD6B', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { console.log(event); return { statusCode: 200, body: \"received\" }; };',
      },
      handler: 'index.handler',
      role: messageHandlerServiceRoleDf05266a.attrArn,
      runtime: 'nodejs18.x',
    });
    messageHandlerDfbbcd6b.addDependency(messageHandlerServiceRoleDf05266a);

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mystage114C35ec = new apigatewayv2.CfnStage(this, 'mystage114C35EC', {
      apiId: mywsapi32E6ce11.ref,
      autoDeploy: true,
      stageName: 'dev',
    });

    if (connectHandler2Ffd52d8 == null) { throw new Error(`A combination of conditions caused 'connectHandler2Ffd52d8' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapiconnectRouteConnectIntegrationE101db9b = new apigatewayv2.CfnIntegration(this, 'mywsapiconnectRouteConnectIntegrationE101DB9B', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        connectHandler2Ffd52d8.attrArn,
        '/invocations',
      ].join(''),
    });

    if (connectHandler2Ffd52d8 == null) { throw new Error(`A combination of conditions caused 'connectHandler2Ffd52d8' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapiconnectRouteConnectIntegrationPermission719B6e63 = new lambda.CfnPermission(this, 'mywsapiconnectRouteConnectIntegrationPermission719B6E63', {
      action: 'lambda:InvokeFunction',
      functionName: connectHandler2Ffd52d8.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        mywsapi32E6ce11.ref,
        '/*$connect',
      ].join(''),
    });

    if (defaultHandler604Df7ac == null) { throw new Error(`A combination of conditions caused 'defaultHandler604Df7ac' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapidefaultRouteDefaultIntegrationFfcb3ba9 = new apigatewayv2.CfnIntegration(this, 'mywsapidefaultRouteDefaultIntegrationFFCB3BA9', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        defaultHandler604Df7ac.attrArn,
        '/invocations',
      ].join(''),
    });

    if (defaultHandler604Df7ac == null) { throw new Error(`A combination of conditions caused 'defaultHandler604Df7ac' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapidefaultRouteDefaultIntegrationPermission3B7f9ca1 = new lambda.CfnPermission(this, 'mywsapidefaultRouteDefaultIntegrationPermission3B7F9CA1', {
      action: 'lambda:InvokeFunction',
      functionName: defaultHandler604Df7ac.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        mywsapi32E6ce11.ref,
        '/*$default',
      ].join(''),
    });

    if (disconnectHandlerCb7ed6f7 == null) { throw new Error(`A combination of conditions caused 'disconnectHandlerCb7ed6f7' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapidisconnectRouteDisconnectIntegrationF927d904 = new apigatewayv2.CfnIntegration(this, 'mywsapidisconnectRouteDisconnectIntegrationF927D904', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        disconnectHandlerCb7ed6f7.attrArn,
        '/invocations',
      ].join(''),
    });

    if (disconnectHandlerCb7ed6f7 == null) { throw new Error(`A combination of conditions caused 'disconnectHandlerCb7ed6f7' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapidisconnectRouteDisconnectIntegrationPermissionA8197c41 = new lambda.CfnPermission(this, 'mywsapidisconnectRouteDisconnectIntegrationPermissionA8197C41', {
      action: 'lambda:InvokeFunction',
      functionName: disconnectHandlerCb7ed6f7.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        mywsapi32E6ce11.ref,
        '/*$disconnect',
      ].join(''),
    });

    if (messageHandlerDfbbcd6b == null) { throw new Error(`A combination of conditions caused 'messageHandlerDfbbcd6b' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapisendmessageRouteSendMessageIntegrationD29e12f9 = new apigatewayv2.CfnIntegration(this, 'mywsapisendmessageRouteSendMessageIntegrationD29E12F9', {
      apiId: mywsapi32E6ce11.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        messageHandlerDfbbcd6b.attrArn,
        '/invocations',
      ].join(''),
    });

    if (messageHandlerDfbbcd6b == null) { throw new Error(`A combination of conditions caused 'messageHandlerDfbbcd6b' to be undefined. Fixit.`); }
    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    const mywsapisendmessageRouteSendMessageIntegrationPermission92C9841e = new lambda.CfnPermission(this, 'mywsapisendmessageRouteSendMessageIntegrationPermission92C9841E', {
      action: 'lambda:InvokeFunction',
      functionName: messageHandlerDfbbcd6b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        mywsapi32E6ce11.ref,
        '/*sendmessage',
      ].join(''),
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapiconnectRouteConnectIntegrationE101db9b == null) { throw new Error(`A combination of conditions caused 'mywsapiconnectRouteConnectIntegrationE101db9b' to be undefined. Fixit.`); }
    const mywsapiconnectRoute45A0ed6a = new apigatewayv2.CfnRoute(this, 'mywsapiconnectRoute45A0ED6A', {
      apiId: mywsapi32E6ce11.ref,
      authorizationType: 'NONE',
      routeKey: '$connect',
      target: [
        'integrations/',
        mywsapiconnectRouteConnectIntegrationE101db9b.ref,
      ].join(''),
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapidefaultRouteDefaultIntegrationFfcb3ba9 == null) { throw new Error(`A combination of conditions caused 'mywsapidefaultRouteDefaultIntegrationFfcb3ba9' to be undefined. Fixit.`); }
    const mywsapidefaultRouteE9382df8 = new apigatewayv2.CfnRoute(this, 'mywsapidefaultRouteE9382DF8', {
      apiId: mywsapi32E6ce11.ref,
      authorizationType: 'NONE',
      routeKey: '$default',
      target: [
        'integrations/',
        mywsapidefaultRouteDefaultIntegrationFfcb3ba9.ref,
      ].join(''),
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapidisconnectRouteDisconnectIntegrationF927d904 == null) { throw new Error(`A combination of conditions caused 'mywsapidisconnectRouteDisconnectIntegrationF927d904' to be undefined. Fixit.`); }
    const mywsapidisconnectRoute421A8cb9 = new apigatewayv2.CfnRoute(this, 'mywsapidisconnectRoute421A8CB9', {
      apiId: mywsapi32E6ce11.ref,
      authorizationType: 'NONE',
      routeKey: '$disconnect',
      target: [
        'integrations/',
        mywsapidisconnectRouteDisconnectIntegrationF927d904.ref,
      ].join(''),
    });

    if (mywsapi32E6ce11 == null) { throw new Error(`A combination of conditions caused 'mywsapi32E6ce11' to be undefined. Fixit.`); }
    if (mywsapisendmessageRouteSendMessageIntegrationD29e12f9 == null) { throw new Error(`A combination of conditions caused 'mywsapisendmessageRouteSendMessageIntegrationD29e12f9' to be undefined. Fixit.`); }
    const mywsapisendmessageRouteAe873328 = new apigatewayv2.CfnRoute(this, 'mywsapisendmessageRouteAE873328', {
      apiId: mywsapi32E6ce11.ref,
      authorizationType: 'NONE',
      routeKey: 'sendmessage',
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

