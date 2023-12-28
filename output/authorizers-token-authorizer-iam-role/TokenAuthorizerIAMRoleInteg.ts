import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface TokenauthorizeriamroleintegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Tokenauthorizeriamroleinteg extends cdk.Stack {
  public readonly myRestApiEndpoint4C55e4cb;

  public constructor(scope: cdk.App, id: string, props: TokenauthorizeriamroleintegProps = {}) {
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
    const myAuthorizerFunctionServiceRole8A34c19e = new iam.CfnRole(this, 'MyAuthorizerFunctionServiceRole8A34C19E', {
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

    const myRestApi2D1f47a9 = new apigateway.CfnRestApi(this, 'MyRestApi2D1F47A9', {
      name: 'MyRestApi',
    });

    const myRestApiCloudWatchRoleD4042e8e = new iam.CfnRole(this, 'MyRestApiCloudWatchRoleD4042E8E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    myRestApiCloudWatchRoleD4042e8e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const authorizerRole06E70703 = new iam.CfnRole(this, 'authorizerRole06E70703', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myAuthorizerFunctionServiceRole8A34c19e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunctionServiceRole8A34c19e' to be undefined. Fixit.`); }
    const myAuthorizerFunction70F1223e = new lambda.CfnFunction(this, 'MyAuthorizerFunction70F1223E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '6ef24b26328dec9135be0bd32fff8f588f9a4564f32df911d1de82cfb78183f0.zip',
      },
      handler: 'index.handler',
      role: myAuthorizerFunctionServiceRole8A34c19e.attrArn,
      runtime: 'nodejs18.x',
    });
    myAuthorizerFunction70F1223e.addDependency(myAuthorizerFunctionServiceRole8A34c19e);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiCloudWatchRoleD4042e8e == null) { throw new Error(`A combination of conditions caused 'myRestApiCloudWatchRoleD4042e8e' to be undefined. Fixit.`); }
    const myRestApiAccount2Fb6db7a = new apigateway.CfnAccount(this, 'MyRestApiAccount2FB6DB7A', {
      cloudWatchRoleArn: myRestApiCloudWatchRoleD4042e8e.attrArn,
    });
    myRestApiAccount2Fb6db7a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myRestApiAccount2Fb6db7a.addDependency(myRestApi2D1f47a9);

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (authorizerRole06E70703 == null) { throw new Error(`A combination of conditions caused 'authorizerRole06E70703' to be undefined. Fixit.`); }
    const myAuthorizer6575980E = new apigateway.CfnAuthorizer(this, 'MyAuthorizer6575980E', {
      authorizerCredentials: authorizerRole06E70703.attrArn,
      authorizerResultTtlInSeconds: 300,
      authorizerUri: [
        'arn:',
        cdk.Fn.select(1, cdk.Fn.split(':', myAuthorizerFunction70F1223e.attrArn)),
        ':apigateway:',
        cdk.Fn.select(3, cdk.Fn.split(':', myAuthorizerFunction70F1223e.attrArn)),
        ':lambda:path/2015-03-31/functions/',
        myAuthorizerFunction70F1223e.attrArn,
        '/invocations',
      ].join(''),
      identitySource: 'method.request.header.Authorization',
      name: 'TokenAuthorizerIAMRoleIntegMyAuthorizer1DFDE3B5',
      restApiId: myRestApi2D1f47a9.ref,
      type: 'TOKEN',
    });

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (authorizerRole06E70703 == null) { throw new Error(`A combination of conditions caused 'authorizerRole06E70703' to be undefined. Fixit.`); }
    const myAuthorizerauthorizerInvokePolicy0F88b8e1 = new iam.CfnPolicy(this, 'MyAuthorizerauthorizerInvokePolicy0F88B8E1', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              myAuthorizerFunction70F1223e.attrArn,
              [
                myAuthorizerFunction70F1223e.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyAuthorizerauthorizerInvokePolicy0F88B8E1',
      roles: [
        authorizerRole06E70703.ref,
      ],
    });

    if (myAuthorizer6575980E == null) { throw new Error(`A combination of conditions caused 'myAuthorizer6575980E' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiAny05143f93 = new apigateway.CfnMethod(this, 'MyRestApiANY05143F93', {
      authorizationType: 'CUSTOM',
      authorizerId: myAuthorizer6575980E.ref,
      httpMethod: 'ANY',
      integration: {
        integrationResponses: [
          {
            statusCode: '200',
          },
        ],
        passthroughBehavior: 'NEVER',
        requestTemplates: {
          'application/json': '{ \"statusCode\": 200 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
      resourceId: myRestApi2D1f47a9.attrRootResourceId,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myAuthorizer6575980E == null) { throw new Error(`A combination of conditions caused 'myAuthorizer6575980E' to be undefined. Fixit.`); }
    if (myAuthorizerauthorizerInvokePolicy0F88b8e1 == null) { throw new Error(`A combination of conditions caused 'myAuthorizerauthorizerInvokePolicy0F88b8e1' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAny05143f93 == null) { throw new Error(`A combination of conditions caused 'myRestApiAny05143f93' to be undefined. Fixit.`); }
    const myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede = new apigateway.CfnDeployment(this, 'MyRestApiDeploymentB555B58259401a546b13c99de2d05e5e255a9ede', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myRestApi2D1f47a9.ref,
    });
    myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede.addDependency(myAuthorizerauthorizerInvokePolicy0F88b8e1);
    myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede.addDependency(myAuthorizer6575980E);
    myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede.addDependency(myRestApiAny05143f93);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAccount2Fb6db7a == null) { throw new Error(`A combination of conditions caused 'myRestApiAccount2Fb6db7a' to be undefined. Fixit.`); }
    if (myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede' to be undefined. Fixit.`); }
    const myRestApiDeploymentStageprodC33b8e5f = new apigateway.CfnStage(this, 'MyRestApiDeploymentStageprodC33B8E5F', {
      deploymentId: myRestApiDeploymentB555b58259401a546b13c99de2d05e5e255a9ede.ref,
      restApiId: myRestApi2D1f47a9.ref,
      stageName: 'prod',
    });
    myRestApiDeploymentStageprodC33b8e5f.addDependency(myRestApiAccount2Fb6db7a);

    // Outputs
    this.myRestApiEndpoint4C55e4cb = [
      'https://',
      myRestApi2D1f47a9.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myRestApiDeploymentStageprodC33b8e5f.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMyRestApiEndpoint4C55E4CB', {
      key: 'MyRestApiEndpoint4C55E4CB',
      value: this.myRestApiEndpoint4C55e4cb!.toString(),
    });
  }
}

