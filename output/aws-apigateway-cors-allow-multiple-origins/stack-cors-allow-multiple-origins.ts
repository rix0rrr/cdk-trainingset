import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface stack-cors-allow-multiple-originsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack-cors-allow-multiple-origins extends cdk.Stack {
  public readonly corsapitestEndpointE63606ae;

  public constructor(scope: cdk.App, id: string, props: stack-cors-allow-multiple-originsProps = {}) {
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
    const corsapitest8682546E = new apigateway.CfnRestApi(this, 'corsapitest8682546E', {
      name: 'cors-api-test',
    });

    const handlerServiceRole187D5a5a = new iam.CfnRole(this, 'handlerServiceRole187D5A5A', {
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

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    const corsapitestOptions15560589 = new apigateway.CfnMethod(this, 'corsapitestOPTIONS15560589', {
      apiKeyRequired: false,
      authorizationType: 'NONE',
      httpMethod: 'OPTIONS',
      integration: {
        integrationResponses: [
          {
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': '\'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent\'',
              'method.response.header.Access-Control-Allow-Origin': '\'https://amazon.com\'',
              'method.response.header.Vary': '\'Origin\'',
              'method.response.header.Access-Control-Allow-Methods': '\'OPTIONS,GET,PUT,POST,DELETE,PATCH,HEAD\'',
            },
            responseTemplates: {
              'application/json': '#set($origin = $input.params().header.get(\"Origin\"))\n#if($origin == \"\")\n  #set($origin = $input.params().header.get(\"origin\"))\n#end\n#if($origin == \"https://twitch.tv\" || $origin == \"https://aws.amazon.com\")\n  #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin)\n#end',
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
            'method.response.header.Vary': true,
            'method.response.header.Access-Control-Allow-Methods': true,
          },
          statusCode: '204',
        },
      ],
      resourceId: corsapitest8682546E.attrRootResourceId,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    const corsapitestmyresource73D41bdd = new apigateway.CfnResource(this, 'corsapitestmyresource73D41BDD', {
      parentId: corsapitest8682546E.attrRootResourceId,
      pathPart: 'my-resource',
      restApiId: corsapitest8682546E.ref,
    });

    if (handlerServiceRole187D5a5a == null) { throw new Error(`A combination of conditions caused 'handlerServiceRole187D5a5a' to be undefined. Fixit.`); }
    const handlerE1533bd5 = new lambda.CfnFunction(this, 'handlerE1533BD5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'c7bba0d9d477c86c6dc2adb0eb95842634a1c040dd3a66b42eec2bb604644d4f.zip',
      },
      handler: 'index.handler',
      role: handlerServiceRole187D5a5a.attrArn,
      runtime: 'nodejs18.x',
    });
    handlerE1533bd5.addDependency(handlerServiceRole187D5a5a);

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestmyresource73D41bdd == null) { throw new Error(`A combination of conditions caused 'corsapitestmyresource73D41bdd' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitestmyresourceGet844c52ea = new apigateway.CfnMethod(this, 'corsapitestmyresourceGET844C52EA', {
      authorizationType: 'NONE',
      httpMethod: 'GET',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          handlerE1533bd5.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: corsapitestmyresource73D41bdd.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitestmyresourceGetApiPermissionTeststackcorsallowmultipleoriginscorsapitestC473fae8geTmyresource29B41abb = new lambda.CfnPermission(this, 'corsapitestmyresourceGETApiPermissionTeststackcorsallowmultipleoriginscorsapitestC473FAE8GETmyresource29B41ABB', {
      action: 'lambda:InvokeFunction',
      functionName: handlerE1533bd5.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        corsapitest8682546E.ref,
        '/test-invoke-stage/GET/my-resource',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestmyresource73D41bdd == null) { throw new Error(`A combination of conditions caused 'corsapitestmyresource73D41bdd' to be undefined. Fixit.`); }
    const corsapitestmyresourceOptionsd5275318 = new apigateway.CfnMethod(this, 'corsapitestmyresourceOPTIONSD5275318', {
      apiKeyRequired: false,
      authorizationType: 'NONE',
      httpMethod: 'OPTIONS',
      integration: {
        integrationResponses: [
          {
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': '\'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent\'',
              'method.response.header.Access-Control-Allow-Origin': '\'https://amazon.com\'',
              'method.response.header.Vary': '\'Origin\'',
              'method.response.header.Access-Control-Allow-Methods': '\'OPTIONS,GET,PUT,POST,DELETE,PATCH,HEAD\'',
            },
            responseTemplates: {
              'application/json': '#set($origin = $input.params().header.get(\"Origin\"))\n#if($origin == \"\")\n  #set($origin = $input.params().header.get(\"origin\"))\n#end\n#if($origin == \"https://twitch.tv\" || $origin == \"https://aws.amazon.com\")\n  #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin)\n#end',
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
            'method.response.header.Vary': true,
            'method.response.header.Access-Control-Allow-Methods': true,
          },
          statusCode: '204',
        },
      ],
      resourceId: corsapitestmyresource73D41bdd.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestOptions15560589 == null) { throw new Error(`A combination of conditions caused 'corsapitestOptions15560589' to be undefined. Fixit.`); }
    if (corsapitestmyresource73D41bdd == null) { throw new Error(`A combination of conditions caused 'corsapitestmyresource73D41bdd' to be undefined. Fixit.`); }
    if (corsapitestmyresourceGet844c52ea == null) { throw new Error(`A combination of conditions caused 'corsapitestmyresourceGet844c52ea' to be undefined. Fixit.`); }
    if (corsapitestmyresourceOptionsd5275318 == null) { throw new Error(`A combination of conditions caused 'corsapitestmyresourceOptionsd5275318' to be undefined. Fixit.`); }
    const corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c = new apigateway.CfnDeployment(this, 'corsapitestDeployment2BF1633A506e17bacbb92c0f9e65d8c89b158b9c', {
      description: 'Automatically created by the RestApi construct',
      restApiId: corsapitest8682546E.ref,
    });
    corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c.addDependency(corsapitestmyresourceGet844c52ea);
    corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c.addDependency(corsapitestmyresourceOptionsd5275318);
    corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c.addDependency(corsapitestmyresource73D41bdd);
    corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c.addDependency(corsapitestOptions15560589);

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c == null) { throw new Error(`A combination of conditions caused 'corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c' to be undefined. Fixit.`); }
    const corsapitestDeploymentStageprod8F31f2ab = new apigateway.CfnStage(this, 'corsapitestDeploymentStageprod8F31F2AB', {
      deploymentId: corsapitestDeployment2Bf1633a506e17bacbb92c0f9e65d8c89b158b9c.ref,
      restApiId: corsapitest8682546E.ref,
      stageName: 'prod',
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestDeploymentStageprod8F31f2ab == null) { throw new Error(`A combination of conditions caused 'corsapitestDeploymentStageprod8F31f2ab' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitestmyresourceGetApiPermissionstackcorsallowmultipleoriginscorsapitestC473fae8geTmyresourceB82b6c26 = new lambda.CfnPermission(this, 'corsapitestmyresourceGETApiPermissionstackcorsallowmultipleoriginscorsapitestC473FAE8GETmyresourceB82B6C26', {
      action: 'lambda:InvokeFunction',
      functionName: handlerE1533bd5.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        corsapitest8682546E.ref,
        '/',
        corsapitestDeploymentStageprod8F31f2ab.ref,
        '/GET/my-resource',
      ].join(''),
    });

    // Outputs
    this.corsapitestEndpointE63606ae = [
      'https://',
      corsapitest8682546E.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      corsapitestDeploymentStageprod8F31f2ab.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputcorsapitestEndpointE63606AE', {
      key: 'corsapitestEndpointE63606AE',
      value: this.corsapitestEndpointE63606ae!.toString(),
    });
  }
}

