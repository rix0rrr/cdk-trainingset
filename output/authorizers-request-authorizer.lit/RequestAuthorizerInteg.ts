import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface RequestauthorizerintegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Requestauthorizerinteg extends cdk.Stack {
  public readonly myRestApiEndpoint4C55e4cb;

  public constructor(scope: cdk.App, id: string, props: RequestauthorizerintegProps = {}) {
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

    if (myAuthorizerFunctionServiceRole8A34c19e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunctionServiceRole8A34c19e' to be undefined. Fixit.`); }
    const myAuthorizerFunction70F1223e = new lambda.CfnFunction(this, 'MyAuthorizerFunction70F1223E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '32958f9442f31389bed730b768bd21f066c7343a5d0e87b9cad92b365e9d3c37.zip',
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

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiauth918A22b9 = new apigateway.CfnResource(this, 'MyRestApiauth918A22B9', {
      parentId: myRestApi2D1f47a9.attrRootResourceId,
      pathPart: 'auth',
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myAuthorizer6575980E = new apigateway.CfnAuthorizer(this, 'MyAuthorizer6575980E', {
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
      identitySource: 'method.request.header.Authorization,method.request.querystring.allow',
      name: 'RequestAuthorizerIntegMyAuthorizer5D9D41C5',
      restApiId: myRestApi2D1f47a9.ref,
      type: 'REQUEST',
    });

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const mySecondAuthorizer25A69b96 = new apigateway.CfnAuthorizer(this, 'MySecondAuthorizer25A69B96', {
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
      identitySource: 'method.request.header.Authorization,method.request.querystring.allow',
      name: 'RequestAuthorizerIntegMySecondAuthorizerCCC4ECED',
      restApiId: myRestApi2D1f47a9.ref,
      type: 'REQUEST',
    });

    if (myAuthorizer6575980E == null) { throw new Error(`A combination of conditions caused 'myAuthorizer6575980E' to be undefined. Fixit.`); }
    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myAuthorizerFunctionRequestAuthorizerIntegMyAuthorizer5D9d41c5PermissionsCb8b246e = new lambda.CfnPermission(this, 'MyAuthorizerFunctionRequestAuthorizerIntegMyAuthorizer5D9D41C5PermissionsCB8B246E', {
      action: 'lambda:InvokeFunction',
      functionName: myAuthorizerFunction70F1223e.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/authorizers/',
        myAuthorizer6575980E.ref,
      ].join(''),
    });

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (mySecondAuthorizer25A69b96 == null) { throw new Error(`A combination of conditions caused 'mySecondAuthorizer25A69b96' to be undefined. Fixit.`); }
    const myAuthorizerFunctionRequestAuthorizerIntegMySecondAuthorizerCcc4ecedPermissions055F817a = new lambda.CfnPermission(this, 'MyAuthorizerFunctionRequestAuthorizerIntegMySecondAuthorizerCCC4ECEDPermissions055F817A', {
      action: 'lambda:InvokeFunction',
      functionName: myAuthorizerFunction70F1223e.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/authorizers/',
        mySecondAuthorizer25A69b96.ref,
      ].join(''),
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

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiauth918A22b9 == null) { throw new Error(`A combination of conditions caused 'myRestApiauth918A22b9' to be undefined. Fixit.`); }
    if (mySecondAuthorizer25A69b96 == null) { throw new Error(`A combination of conditions caused 'mySecondAuthorizer25A69b96' to be undefined. Fixit.`); }
    const myRestApiauthAny12a3cab7 = new apigateway.CfnMethod(this, 'MyRestApiauthANY12A3CAB7', {
      authorizationType: 'CUSTOM',
      authorizerId: mySecondAuthorizer25A69b96.ref,
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
      resourceId: myRestApiauth918A22b9.ref,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myAuthorizer6575980E == null) { throw new Error(`A combination of conditions caused 'myAuthorizer6575980E' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAny05143f93 == null) { throw new Error(`A combination of conditions caused 'myRestApiAny05143f93' to be undefined. Fixit.`); }
    if (myRestApiauth918A22b9 == null) { throw new Error(`A combination of conditions caused 'myRestApiauth918A22b9' to be undefined. Fixit.`); }
    if (myRestApiauthAny12a3cab7 == null) { throw new Error(`A combination of conditions caused 'myRestApiauthAny12a3cab7' to be undefined. Fixit.`); }
    if (mySecondAuthorizer25A69b96 == null) { throw new Error(`A combination of conditions caused 'mySecondAuthorizer25A69b96' to be undefined. Fixit.`); }
    const myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44 = new apigateway.CfnDeployment(this, 'MyRestApiDeploymentB555B58276a4103e7ef38befb395a9ace5fdce44', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myRestApi2D1f47a9.ref,
    });
    myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.addDependency(myAuthorizer6575980E);
    myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.addDependency(myRestApiAny05143f93);
    myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.addDependency(myRestApiauthAny12a3cab7);
    myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.addDependency(myRestApiauth918A22b9);
    myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.addDependency(mySecondAuthorizer25A69b96);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAccount2Fb6db7a == null) { throw new Error(`A combination of conditions caused 'myRestApiAccount2Fb6db7a' to be undefined. Fixit.`); }
    if (myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44 == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44' to be undefined. Fixit.`); }
    const myRestApiDeploymentStageprodC33b8e5f = new apigateway.CfnStage(this, 'MyRestApiDeploymentStageprodC33B8E5F', {
      deploymentId: myRestApiDeploymentB555b58276a4103e7ef38befb395a9ace5fdce44.ref,
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

