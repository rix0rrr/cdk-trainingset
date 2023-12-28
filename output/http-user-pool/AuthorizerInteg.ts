import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AuthorizerintegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Authorizerinteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AuthorizerintegProps = {}) {
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

    const userpool0Ac4aa96 = new cognito.CfnUserPool(this, 'userpool0AC4AA96', {
      accountRecoverySetting: {
        recoveryMechanisms: [
          {
            name: 'verified_phone_number',
            priority: 1,
          },
          {
            name: 'verified_email',
            priority: 2,
          },
        ],
      },
      adminCreateUserConfig: {
        allowAdminCreateUserOnly: true,
      },
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      smsVerificationMessage: 'The verification code to your new account is {####}',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    userpool0Ac4aa96.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const userpoolForDefaultAuthorizerDfbe8e74 = new cognito.CfnUserPool(this, 'userpoolForDefaultAuthorizerDFBE8E74', {
      accountRecoverySetting: {
        recoveryMechanisms: [
          {
            name: 'verified_phone_number',
            priority: 1,
          },
          {
            name: 'verified_email',
            priority: 2,
          },
        ],
      },
      adminCreateUserConfig: {
        allowAdminCreateUserOnly: true,
      },
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      smsVerificationMessage: 'The verification code to your new account is {####}',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    userpoolForDefaultAuthorizerDfbe8e74.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    if (lambdaServiceRole494E4ca6 == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRole494E4ca6' to be undefined. Fixit.`); }
    const lambda8B5974b5 = new lambda.CfnFunction(this, 'lambda8B5974B5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '867837e91f97aaf9c29d20a4fea18e3f520bb65d84e9bb59ec84058226225ffc.zip',
      },
      handler: 'index.handler',
      role: lambdaServiceRole494E4ca6.attrArn,
      runtime: 'nodejs18.x',
    });
    lambda8B5974b5.addDependency(lambdaServiceRole494E4ca6);

    if (userpoolForDefaultAuthorizerDfbe8e74 == null) { throw new Error(`A combination of conditions caused 'userpoolForDefaultAuthorizerDfbe8e74' to be undefined. Fixit.`); }
    const userpoolForDefaultAuthorizerUserPoolAuthorizerClient3Aa110e7 = new cognito.CfnUserPoolClient(this, 'userpoolForDefaultAuthorizerUserPoolAuthorizerClient3AA110E7', {
      allowedOAuthFlows: [
        'implicit',
        'code',
      ],
      allowedOAuthFlowsUserPoolClient: true,
      allowedOAuthScopes: [
        'profile',
        'phone',
        'email',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      callbackUrLs: [
        'https://example.com',
      ],
      supportedIdentityProviders: [
        'COGNITO',
      ],
      userPoolId: userpoolForDefaultAuthorizerDfbe8e74.ref,
    });

    if (userpool0Ac4aa96 == null) { throw new Error(`A combination of conditions caused 'userpool0Ac4aa96' to be undefined. Fixit.`); }
    const userpoolUserPoolAuthorizerClient6A7486e8 = new cognito.CfnUserPoolClient(this, 'userpoolUserPoolAuthorizerClient6A7486E8', {
      allowedOAuthFlows: [
        'implicit',
        'code',
      ],
      allowedOAuthFlowsUserPoolClient: true,
      allowedOAuthScopes: [
        'profile',
        'phone',
        'email',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      callbackUrLs: [
        'https://example.com',
      ],
      supportedIdentityProviders: [
        'COGNITO',
      ],
      userPoolId: userpool0Ac4aa96.ref,
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const myHttpApiGetRootIntegratin93150A89 = new apigatewayv2.CfnIntegration(this, 'MyHttpApiGETRootIntegratin93150A89', {
      apiId: myHttpApi8Aeaac21.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: lambda8B5974b5.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (myHttpApi8Aeaac21 == null) { throw new Error(`A combination of conditions caused 'myHttpApi8Aeaac21' to be undefined. Fixit.`); }
    if (lambda8B5974b5 == null) { throw new Error(`A combination of conditions caused 'lambda8B5974b5' to be undefined. Fixit.`); }
    const myHttpApiGetRootIntegratinPermissionCeeeb498 = new lambda.CfnPermission(this, 'MyHttpApiGETRootIntegratinPermissionCEEEB498', {
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
    if (userpool0Ac4aa96 == null) { throw new Error(`A combination of conditions caused 'userpool0Ac4aa96' to be undefined. Fixit.`); }
    if (userpoolUserPoolAuthorizerClient6A7486e8 == null) { throw new Error(`A combination of conditions caused 'userpoolUserPoolAuthorizerClient6A7486e8' to be undefined. Fixit.`); }
    const myHttpApiUserPoolAuthorizer8754262B = new apigatewayv2.CfnAuthorizer(this, 'MyHttpApiUserPoolAuthorizer8754262B', {
      apiId: myHttpApi8Aeaac21.ref,
      authorizerType: 'JWT',
      identitySource: [
        '$request.header.Authorization',
      ],
      jwtConfiguration: {
        audience: [
          userpoolUserPoolAuthorizerClient6A7486e8.ref,
        ],
        issuer: [
          'https://cognito-idp.',
          this.region,
          '.amazonaws.com/',
          userpool0Ac4aa96.ref,
        ].join(''),
      },
      name: 'UserPoolAuthorizer',
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (userpoolForDefaultAuthorizerDfbe8e74 == null) { throw new Error(`A combination of conditions caused 'userpoolForDefaultAuthorizerDfbe8e74' to be undefined. Fixit.`); }
    if (userpoolForDefaultAuthorizerUserPoolAuthorizerClient3Aa110e7 == null) { throw new Error(`A combination of conditions caused 'userpoolForDefaultAuthorizerUserPoolAuthorizerClient3Aa110e7' to be undefined. Fixit.`); }
    const myHttpApiWithDefaultAuthorizerUserPoolDefaultAuthorizerF10d4fff = new apigatewayv2.CfnAuthorizer(this, 'MyHttpApiWithDefaultAuthorizerUserPoolDefaultAuthorizerF10D4FFF', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      authorizerType: 'JWT',
      identitySource: [
        '$request.header.Authorization',
      ],
      jwtConfiguration: {
        audience: [
          userpoolForDefaultAuthorizerUserPoolAuthorizerClient3Aa110e7.ref,
        ],
        issuer: [
          'https://cognito-idp.',
          this.region,
          '.amazonaws.com/',
          userpoolForDefaultAuthorizerDfbe8e74.ref,
        ].join(''),
      },
      name: 'UserPoolDefaultAuthorizer',
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
    if (myHttpApiGetRootIntegratin93150A89 == null) { throw new Error(`A combination of conditions caused 'myHttpApiGetRootIntegratin93150A89' to be undefined. Fixit.`); }
    if (myHttpApiUserPoolAuthorizer8754262B == null) { throw new Error(`A combination of conditions caused 'myHttpApiUserPoolAuthorizer8754262B' to be undefined. Fixit.`); }
    const myHttpApiGete0efc6f8 = new apigatewayv2.CfnRoute(this, 'MyHttpApiGETE0EFC6F8', {
      apiId: myHttpApi8Aeaac21.ref,
      authorizationType: 'JWT',
      authorizerId: myHttpApiUserPoolAuthorizer8754262B.ref,
      routeKey: 'GET /',
      target: [
        'integrations/',
        myHttpApiGetRootIntegratin93150A89.ref,
      ].join(''),
    });

    if (myHttpApiWithDefaultAuthorizerE08800a1 == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerE08800a1' to be undefined. Fixit.`); }
    if (myHttpApiWithDefaultAuthorizerUserPoolDefaultAuthorizerF10d4fff == null) { throw new Error(`A combination of conditions caused 'myHttpApiWithDefaultAuthorizerUserPoolDefaultAuthorizerF10d4fff' to be undefined. Fixit.`); }
    if (routeRootIntegration1Cf58575 == null) { throw new Error(`A combination of conditions caused 'routeRootIntegration1Cf58575' to be undefined. Fixit.`); }
    const routeA67450d2 = new apigatewayv2.CfnRoute(this, 'RouteA67450D2', {
      apiId: myHttpApiWithDefaultAuthorizerE08800a1.ref,
      authorizationScopes: [
        'scope1',
        'scope2',
      ],
      authorizationType: 'JWT',
      authorizerId: myHttpApiWithDefaultAuthorizerUserPoolDefaultAuthorizerF10d4fff.ref,
      routeKey: 'ANY /v1/mything/{proxy+}',
      target: [
        'integrations/',
        routeRootIntegration1Cf58575.ref,
      ].join(''),
    });
  }
}

