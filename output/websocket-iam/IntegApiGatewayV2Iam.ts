import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface Integapigatewayv2IamProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Integapigatewayv2Iam extends cdk.Stack {
  public readonly testaccesskeyid;
  public readonly testsecretaccesskey;
  public readonly testregion;

  public constructor(scope: cdk.App, id: string, props: Integapigatewayv2IamProps = {}) {
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
    const user00B015a1 = new iam.CfnUser(this, 'User00B015A1', {
    });

    const webSocketApi34Bcf99b = new apigatewayv2.CfnApi(this, 'WebSocketApi34BCF99B', {
      name: 'WebSocketApi',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    const authfunctionServiceRoleFcb72198 = new iam.CfnRole(this, 'authfunctionServiceRoleFCB72198', {
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

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    if (webSocketApi34Bcf99b == null) { throw new Error(`A combination of conditions caused 'webSocketApi34Bcf99b' to be undefined. Fixit.`); }
    const allowInvoke767865Ea = new iam.CfnPolicy(this, 'AllowInvoke767865EA', {
      policyDocument: {
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':execute-api:',
              this.region,
              ':',
              this.account,
              ':',
              webSocketApi34Bcf99b.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AllowInvoke767865EA',
      users: [
        user00B015a1.ref,
      ],
    });

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const userAccessEc42adf7 = new iam.CfnAccessKey(this, 'UserAccessEC42ADF7', {
      userName: user00B015a1.ref,
    });

    if (authfunctionServiceRoleFcb72198 == null) { throw new Error(`A combination of conditions caused 'authfunctionServiceRoleFcb72198' to be undefined. Fixit.`); }
    const authfunction96361832 = new lambda.CfnFunction(this, 'authfunction96361832', {
      code: {
        zipFile: 'exports.handler = () => {return true}',
      },
      handler: 'index.handler',
      role: authfunctionServiceRoleFcb72198.attrArn,
      runtime: 'nodejs18.x',
    });
    authfunction96361832.addDependency(authfunctionServiceRoleFcb72198);

    if (webSocketApi34Bcf99b == null) { throw new Error(`A combination of conditions caused 'webSocketApi34Bcf99b' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const webSocketApiconnectRouteWebSocketLambdaIntegration3D2b13dd = new apigatewayv2.CfnIntegration(this, 'WebSocketApiconnectRouteWebSocketLambdaIntegration3D2B13DD', {
      apiId: webSocketApi34Bcf99b.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        authfunction96361832.attrArn,
        '/invocations',
      ].join(''),
    });

    if (webSocketApi34Bcf99b == null) { throw new Error(`A combination of conditions caused 'webSocketApi34Bcf99b' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const webSocketApiconnectRouteWebSocketLambdaIntegrationPermission76Cd86c6 = new lambda.CfnPermission(this, 'WebSocketApiconnectRouteWebSocketLambdaIntegrationPermission76CD86C6', {
      action: 'lambda:InvokeFunction',
      functionName: authfunction96361832.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        webSocketApi34Bcf99b.ref,
        '/*$connect',
      ].join(''),
    });

    if (webSocketApi34Bcf99b == null) { throw new Error(`A combination of conditions caused 'webSocketApi34Bcf99b' to be undefined. Fixit.`); }
    if (webSocketApiconnectRouteWebSocketLambdaIntegration3D2b13dd == null) { throw new Error(`A combination of conditions caused 'webSocketApiconnectRouteWebSocketLambdaIntegration3D2b13dd' to be undefined. Fixit.`); }
    const webSocketApiconnectRoute846149Dd = new apigatewayv2.CfnRoute(this, 'WebSocketApiconnectRoute846149DD', {
      apiId: webSocketApi34Bcf99b.ref,
      authorizationType: 'AWS_IAM',
      routeKey: '$connect',
      target: [
        'integrations/',
        webSocketApiconnectRouteWebSocketLambdaIntegration3D2b13dd.ref,
      ].join(''),
    });

    // Outputs
    this.testaccesskeyid = userAccessEc42adf7.ref;
    new cdk.CfnOutput(this, 'CfnOutputTESTACCESSKEYID', {
      key: 'TESTACCESSKEYID',
      value: this.testaccesskeyid!.toString(),
    });
    this.testsecretaccesskey = userAccessEc42adf7.attrSecretAccessKey;
    new cdk.CfnOutput(this, 'CfnOutputTESTSECRETACCESSKEY', {
      key: 'TESTSECRETACCESSKEY',
      value: this.testsecretaccesskey!.toString(),
    });
    this.testregion = this.region;
    new cdk.CfnOutput(this, 'CfnOutputTESTREGION', {
      key: 'TESTREGION',
      value: this.testregion!.toString(),
    });
  }
}

