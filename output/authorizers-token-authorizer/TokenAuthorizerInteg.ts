import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface TokenAuthorizerIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TokenAuthorizerInteg extends cdk.Stack {
  public readonly myRestApiEndpoint4C55e4cb;
  public readonly exportsOutputRefInvokeFunctionC517e46d32c855b5;

  public constructor(scope: cdk.App, id: string, props: TokenAuthorizerIntegProps = {}) {
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
    const invokeFunctionServiceRole3B980fd2 = new iam.CfnRole(this, 'InvokeFunctionServiceRole3B980FD2', {
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

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiOptions43bd7bf4 = new apigateway.CfnMethod(this, 'MyRestApiOPTIONS43BD7BF4', {
      apiKeyRequired: false,
      authorizationType: 'NONE',
      httpMethod: 'OPTIONS',
      integration: {
        integrationResponses: [
          {
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': '\'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent\'',
              'method.response.header.Access-Control-Allow-Origin': '\'*\'',
              'method.response.header.Access-Control-Allow-Methods': '\'OPTIONS,GET,PUT,POST,DELETE,PATCH,HEAD\'',
            },
            statusCode: '204',
          },
        ],
        requestTemplates: {
          'application/json': '{ statusCode: 200 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          responseParameters: {
            'method.response.header.Access-Control-Allow-Headers': true,
            'method.response.header.Access-Control-Allow-Origin': true,
            'method.response.header.Access-Control-Allow-Methods': true,
          },
          statusCode: '204',
        },
      ],
      resourceId: myRestApi2D1f47a9.attrRootResourceId,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myAuthorizer6575980E = new apigateway.CfnAuthorizer(this, 'MyAuthorizer6575980E', {
      authorizerResultTtlInSeconds: 600,
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
      name: 'TokenAuthorizerIntegMyAuthorizer793B1D5F',
      restApiId: myRestApi2D1f47a9.ref,
      type: 'TOKEN',
    });

    if (myAuthorizer6575980E == null) { throw new Error(`A combination of conditions caused 'myAuthorizer6575980E' to be undefined. Fixit.`); }
    if (myAuthorizerFunction70F1223e == null) { throw new Error(`A combination of conditions caused 'myAuthorizerFunction70F1223e' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myAuthorizerFunctionTokenAuthorizerIntegMyAuthorizer793B1d5fPermissions7557Ae26 = new lambda.CfnPermission(this, 'MyAuthorizerFunctionTokenAuthorizerIntegMyAuthorizer793B1D5FPermissions7557AE26', {
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
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAny05143f93 == null) { throw new Error(`A combination of conditions caused 'myRestApiAny05143f93' to be undefined. Fixit.`); }
    if (myRestApiOptions43bd7bf4 == null) { throw new Error(`A combination of conditions caused 'myRestApiOptions43bd7bf4' to be undefined. Fixit.`); }
    const myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74 = new apigateway.CfnDeployment(this, 'MyRestApiDeploymentB555B5827a9cde8f137f97e5aa74fca164d09d74', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myRestApi2D1f47a9.ref,
    });
    myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74.addDependency(myAuthorizer6575980E);
    myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74.addDependency(myRestApiAny05143f93);
    myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74.addDependency(myRestApiOptions43bd7bf4);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAccount2Fb6db7a == null) { throw new Error(`A combination of conditions caused 'myRestApiAccount2Fb6db7a' to be undefined. Fixit.`); }
    if (myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74 == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74' to be undefined. Fixit.`); }
    const myRestApiDeploymentStageprodC33b8e5f = new apigateway.CfnStage(this, 'MyRestApiDeploymentStageprodC33B8E5F', {
      deploymentId: myRestApiDeploymentB555b5827a9cde8f137f97e5aa74fca164d09d74.ref,
      restApiId: myRestApi2D1f47a9.ref,
      stageName: 'prod',
    });
    myRestApiDeploymentStageprodC33b8e5f.addDependency(myRestApiAccount2Fb6db7a);

    if (invokeFunctionServiceRole3B980fd2 == null) { throw new Error(`A combination of conditions caused 'invokeFunctionServiceRole3B980fd2' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiDeploymentStageprodC33b8e5f == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentStageprodC33b8e5f' to be undefined. Fixit.`); }
    const invokeFunctionC517e46d = new lambda.CfnFunction(this, 'InvokeFunctionC517E46D', {
      code: {
        zipFile: [
          '\nconst https = require(\'https\');\nconst options = {\n  hostname: \'',
          myRestApi2D1f47a9.ref,
          '.execute-api.',
          this.region,
          '.',
          this.urlSuffix,
          '\',\n  path: \'/',
          myRestApiDeploymentStageprodC33b8e5f.ref,
          '\',\n};\nexports.handler = async function(event) {\n  console.log(event);\n  options.method = event.method;\n  if (\'authorization\' in event) {\n    options.headers = {\n      Authorization: event.authorization,\n    };\n  }\n  let dataString = \'\';\n  const response = await new Promise((resolve, reject) => {\n    const req = https.request(options, (res) => {\n      res.on(\'data\', data => {\n        dataString += data;\n      })\n      res.on(\'end\', () => {\n        resolve({\n          statusCode: res.statusCode,\n          body: dataString,\n        });\n      })\n    });\n    req.on(\'error\', err => {\n      reject({\n        statusCode: 500,\n        body: JSON.stringify({\n          cause: \'Something went wrong\',\n          error: err,\n        })\n      });\n    });\n    req.end();\n  });\n  return response;\n}\n',
        ].join(''),
      },
      handler: 'index.handler',
      memorySize: 250,
      role: invokeFunctionServiceRole3B980fd2.attrArn,
      runtime: 'nodejs18.x',
      timeout: 10,
    });
    invokeFunctionC517e46d.addDependency(invokeFunctionServiceRole3B980fd2);

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
    this.exportsOutputRefInvokeFunctionC517e46d32c855b5 = invokeFunctionC517e46d.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefInvokeFunctionC517E46D32C855B5', {
      key: 'ExportsOutputRefInvokeFunctionC517E46D32C855B5',
      exportName: 'TokenAuthorizerInteg:ExportsOutputRefInvokeFunctionC517E46D32C855B5',
      value: this.exportsOutputRefInvokeFunctionC517e46d32c855b5!.toString(),
    });
  }
}

