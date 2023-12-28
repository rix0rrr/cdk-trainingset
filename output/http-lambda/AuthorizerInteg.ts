import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AuthorizerIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AuthorizerInteg extends cdk.Stack {
  public readonly url;
  public readonly urlWithDefaultAuthorizer;

  public constructor(scope: cdk.App, id: string, props: AuthorizerIntegProps = {}) {
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
    const myHttpApi8Aeaac21 = new apigatewayv2.CfnApi(this, 'MyHttpApi8AEAAC21', {
      name: 'MyHttpApi',
      protocolType: 'HTTP',
    });

    const myHttpApiWithDefaultAuthorizerE08800a1 = new apigatewayv2.CfnApi(this, 'MyHttpApiWithDefaultAuthorizerE08800A1', {
      name: 'MyHttpApiWithDefaultAuthorizer',
      protocolType: 'HTTP',
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

    const lambdaServiceRole494E4ca6 = new iam.CfnRole(this, 'lambdaServiceRole494E4CA6', {
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

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    const myHttpApiDefaultStageDcb9bc49 = new apigatewayv2.CfnStage(this, 'MyHttpApiDefaultStageDCB9BC49', {
      apiId: myHttpApi8Aeaac21.ref,
      autoDeploy: true,
      stageName: '$default',
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    const myHttpApiWithDefaultAuthorizerDefaultStage7A9ee9b6 = new apigatewayv2.CfnStage(this, 'MyHttpApiWithDefaultAuthorizerDefaultStage7A9EE9B6', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      autoDeploy: true,
      stageName: '$default',
    });

    if (authfunctionServiceRoleFcb72198 == null) { throw new Error(`A combination of conditions caused 'authfunctionServiceRoleFcb72198' to be undefined. Fixit.`); }
    const authfunction96361832 = new lambda.CfnFunction(this, 'authfunction96361832', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'd7d3785243d748927f2a8d6edcecf909f96191df27a815e305aaeba98bcd2c64.zip',
      },
      handler: 'index.handler',
      role: authfunctionServiceRoleFcb72198.attrArn,
      runtime: 'nodejs18.x',
    });
    authfunction96361832.addDependency(authfunctionServiceRoleFcb72198);

    if (lambdaServiceRole494E4ca6 == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRole494E4ca6' to be undefined. Fixit.`); }
    const lambda8B5974b5 = new lambda.CfnFunction(this, 'lambda8B5974B5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '54deaef2af5b9afbfc9cbcbb9261b1c0d4cce6560831d7ae1959f3da899011c8.zip',
      },
      handler: 'index.handler',
      role: lambdaServiceRole494E4ca6.attrArn,
      runtime: 'nodejs18.x',
    });
    lambda8B5974b5.addDependency(lambdaServiceRole494E4ca6);

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const myHttpApiGetRootIntegration5068C5b0 = new apigatewayv2.CfnIntegration(this, 'MyHttpApiGETRootIntegration5068C5B0', {
      apiId: myHttpApi8Aeaac21.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: lambda8B5974b5.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const myHttpApiGetRootIntegrationPermission81613491 = new lambda.CfnPermission(this, 'MyHttpApiGETRootIntegrationPermission81613491', {
      action: 'lambda:InvokeFunction',
      functionName: lambda8B5974b5.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myHttpApi8Aeaac21.ref,
        '/*/*/',
      ].join(''),
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const myHttpApiLambdaAuthorizerB8a0e2a4 = new apigatewayv2.CfnAuthorizer(this, 'MyHttpApiLambdaAuthorizerB8A0E2A4', {
      apiId: myHttpApi8Aeaac21.ref,
      authorizerPayloadFormatVersion: '2.0',
      authorizerResultTtlInSeconds: 300,
      authorizerType: 'REQUEST',
      authorizerUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        authfunction96361832.attrArn,
        '/invocations',
      ].join(''),
      enableSimpleResponses: true,
      identitySource: [
        '$request.header.X-API-Key',
      ],
      name: 'my-simple-authorizer',
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65 = new apigatewayv2.CfnAuthorizer(this, 'MyHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407E65', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      authorizerPayloadFormatVersion: '2.0',
      authorizerResultTtlInSeconds: 300,
      authorizerType: 'REQUEST',
      authorizerUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        authfunction96361832.attrArn,
        '/invocations',
      ].join(''),
      enableSimpleResponses: true,
      identitySource: [
        '$request.header.X-API-Key',
      ],
      name: 'my-simple-authorizer',
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const routeRootIntegration1Cf58575 = new apigatewayv2.CfnIntegration(this, 'RouteRootIntegration1CF58575', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: lambda8B5974b5.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const routeRootIntegrationPermissionC2c15701 = new lambda.CfnPermission(this, 'RouteRootIntegrationPermissionC2C15701', {
      action: 'lambda:InvokeFunction',
      functionName: lambda8B5974b5.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myHttpApiWithDefaultAuthorizerE08800a1.ref,
        '/*/*/v1/mything/{proxy+}',
      ].join(''),
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (myHttpApiLambdaAuthorizerB8a0e2a4 == null) { throw new Error(`A combination of conditions caused 'myHttpApiLambdaAuthorizerB8a0e2a4' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const myHttpApiAuthorizerIntegMyHttpApiLambdaAuthorizerB89228d7Permission82260331 = new lambda.CfnPermission(this, 'MyHttpApiAuthorizerIntegMyHttpApiLambdaAuthorizerB89228D7Permission82260331', {
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
        myHttpApi8Aeaac21.ref,
        '/authorizers/',
        myHttpApiLambdaAuthorizerB8a0e2a4.ref,
      ].join(''),
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (myHttpApiGetRootIntegration5068C5b0 == null) { throw new Error(`A combination of conditions caused 'myHttpApiGetRootIntegration5068C5b0' to be undefined. Fixit.`); }
    if (myHttpApiLambdaAuthorizerB8a0e2a4 == null) { throw new Error(`A combination of conditions caused 'myHttpApiLambdaAuthorizerB8a0e2a4' to be undefined. Fixit.`); }
    const myHttpApiGete0efc6f8 = new apigatewayv2.CfnRoute(this, 'MyHttpApiGETE0EFC6F8', {
      apiId: myHttpApi8Aeaac21.ref,
      authorizationType: 'CUSTOM',
      authorizerId: myHttpApiLambdaAuthorizerB8a0e2a4.ref,
      routeKey: 'GET /',
      target: [
        'integrations/',
        myHttpApiGetRootIntegration5068C5b0.ref,
      ].join(''),
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65' to be undefined. Fixit.`); }
    if (authfunction96361832 == null) { throw new Error(`A combination of conditions caused 'authfunction96361832' to be undefined. Fixit.`); }
    const myHttpApiWithDefaultAuthorizerAuthorizerIntegMyHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer1Bc6ea35Permission700Db59d = new lambda.CfnPermission(this, 'MyHttpApiWithDefaultAuthorizerAuthorizerIntegMyHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer1BC6EA35Permission700DB59D', {
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
        myHttpApiWithDefaultAuthorizerE08800a1.ref,
        '/authorizers/',
        myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65.ref,
      ].join(''),
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65' to be undefined. Fixit.`); }
    if (routeRootIntegration1Cf58575 == null) { throw new Error(`A combination of conditions caused 'routeRootIntegration1Cf58575' to be undefined. Fixit.`); }
    const routeA67450d2 = new apigatewayv2.CfnRoute(this, 'RouteA67450D2', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      authorizationType: 'CUSTOM',
      authorizerId: myHttpApiWithDefaultAuthorizerLambdaDefaultAuthorizer9D407e65.ref,
      routeKey: 'ANY /v1/mything/{proxy+}',
      target: [
        'integrations/',
        routeRootIntegration1Cf58575.ref,
      ].join(''),
    });

    // Outputs
    this.url = [
      'https://',
      myHttpApi8Aeaac21.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL', {
      key: 'URL',
      value: this.url!.toString(),
    });
    this.urlWithDefaultAuthorizer = [
      'https://',
      myHttpApiWithDefaultAuthorizerE08800a1.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURLWithDefaultAuthorizer', {
      key: 'URLWithDefaultAuthorizer',
      value: this.urlWithDefaultAuthorizer!.toString(),
    });
  }
}

