import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CorsTwitchTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CorsTwitchTest extends cdk.Stack {
  public readonly corsapitestEndpointE63606ae;

  public constructor(scope: cdk.App, id: string, props: CorsTwitchTestProps = {}) {
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

    const corsapitestCloudWatchRole9Af5a81a = new iam.CfnRole(this, 'corsapitestCloudWatchRole9AF5A81A', {
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
    corsapitestCloudWatchRole9Af5a81a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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
    if (corsapitestCloudWatchRole9Af5a81a == null) { throw new Error(`A combination of conditions caused 'corsapitestCloudWatchRole9Af5a81a' to be undefined. Fixit.`); }
    const corsapitestAccount7D1d6854 = new apigateway.CfnAccount(this, 'corsapitestAccount7D1D6854', {
      cloudWatchRoleArn: corsapitestCloudWatchRole9Af5a81a.attrArn,
    });
    corsapitestAccount7D1d6854.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    corsapitestAccount7D1d6854.addDependency(corsapitest8682546E);

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    const corsapitesttwitch0E3d1559 = new apigateway.CfnResource(this, 'corsapitesttwitch0E3D1559', {
      parentId: corsapitest8682546E.attrRootResourceId,
      pathPart: 'twitch',
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
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchDeleteApiPermissionTestcorstwitchtestcorsapitest1E81ff74deletEtwitch0Cd7a81b = new lambda.CfnPermission(this, 'corsapitesttwitchDELETEApiPermissionTestcorstwitchtestcorsapitest1E81FF74DELETEtwitch0CD7A81B', {
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
        '/test-invoke-stage/DELETE/twitch',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitesttwitch0E3d1559 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitch0E3d1559' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchDeleteb4c94228 = new apigateway.CfnMethod(this, 'corsapitesttwitchDELETEB4C94228', {
      authorizationType: 'NONE',
      httpMethod: 'DELETE',
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
      resourceId: corsapitesttwitch0E3d1559.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitesttwitch0E3d1559 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitch0E3d1559' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchGet4270341b = new apigateway.CfnMethod(this, 'corsapitesttwitchGET4270341B', {
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
      resourceId: corsapitesttwitch0E3d1559.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchGetApiPermissionTestcorstwitchtestcorsapitest1E81ff74geTtwitch730Cd01f = new lambda.CfnPermission(this, 'corsapitesttwitchGETApiPermissionTestcorstwitchtestcorsapitest1E81FF74GETtwitch730CD01F', {
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
        '/test-invoke-stage/GET/twitch',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitesttwitch0E3d1559 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitch0E3d1559' to be undefined. Fixit.`); }
    const corsapitesttwitchOptionse5eeb527 = new apigateway.CfnMethod(this, 'corsapitesttwitchOPTIONSE5EEB527', {
      apiKeyRequired: false,
      authorizationType: 'NONE',
      httpMethod: 'OPTIONS',
      integration: {
        integrationResponses: [
          {
            responseParameters: {
              'method.response.header.Access-Control-Allow-Headers': '\'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent\'',
              'method.response.header.Access-Control-Allow-Origin': '\'https://google.com\'',
              'method.response.header.Vary': '\'Origin\'',
              'method.response.header.Access-Control-Allow-Methods': '\'OPTIONS,GET,PUT,POST,DELETE,PATCH,HEAD\'',
            },
            responseTemplates: {
              'application/json': '#set($origin = $input.params().header.get(\"Origin\"))\n#if($origin == \"\")\n  #set($origin = $input.params().header.get(\"origin\"))\n#end\n#if($origin == \"https://www.test-cors.org\")\n  #set($context.responseOverride.header.Access-Control-Allow-Origin = $origin)\n#end',
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
      resourceId: corsapitesttwitch0E3d1559.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchPostApiPermissionTestcorstwitchtestcorsapitest1E81ff74posTtwitch9C9c1e14 = new lambda.CfnPermission(this, 'corsapitesttwitchPOSTApiPermissionTestcorstwitchtestcorsapitest1E81FF74POSTtwitch9C9C1E14', {
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
        '/test-invoke-stage/POST/twitch',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitesttwitch0E3d1559 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitch0E3d1559' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchPostb52cfb02 = new apigateway.CfnMethod(this, 'corsapitesttwitchPOSTB52CFB02', {
      authorizationType: 'NONE',
      httpMethod: 'POST',
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
      resourceId: corsapitesttwitch0E3d1559.ref,
      restApiId: corsapitest8682546E.ref,
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitesttwitch0E3d1559 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitch0E3d1559' to be undefined. Fixit.`); }
    if (corsapitesttwitchDeleteb4c94228 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitchDeleteb4c94228' to be undefined. Fixit.`); }
    if (corsapitesttwitchGet4270341b == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitchGet4270341b' to be undefined. Fixit.`); }
    if (corsapitesttwitchOptionse5eeb527 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitchOptionse5eeb527' to be undefined. Fixit.`); }
    if (corsapitesttwitchPostb52cfb02 == null) { throw new Error(`A combination of conditions caused 'corsapitesttwitchPostb52cfb02' to be undefined. Fixit.`); }
    const corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a = new apigateway.CfnDeployment(this, 'corsapitestDeployment2BF1633A72d0197fd6797ee251232efbdce56b8a', {
      description: 'Automatically created by the RestApi construct',
      restApiId: corsapitest8682546E.ref,
    });
    corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.addDependency(corsapitesttwitchDeleteb4c94228);
    corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.addDependency(corsapitesttwitchGet4270341b);
    corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.addDependency(corsapitesttwitchOptionse5eeb527);
    corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.addDependency(corsapitesttwitchPostb52cfb02);
    corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.addDependency(corsapitesttwitch0E3d1559);

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestAccount7D1d6854 == null) { throw new Error(`A combination of conditions caused 'corsapitestAccount7D1d6854' to be undefined. Fixit.`); }
    if (corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a == null) { throw new Error(`A combination of conditions caused 'corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a' to be undefined. Fixit.`); }
    const corsapitestDeploymentStageprod8F31f2ab = new apigateway.CfnStage(this, 'corsapitestDeploymentStageprod8F31F2AB', {
      deploymentId: corsapitestDeployment2Bf1633a72d0197fd6797ee251232efbdce56b8a.ref,
      restApiId: corsapitest8682546E.ref,
      stageName: 'prod',
    });
    corsapitestDeploymentStageprod8F31f2ab.addDependency(corsapitestAccount7D1d6854);

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestDeploymentStageprod8F31f2ab == null) { throw new Error(`A combination of conditions caused 'corsapitestDeploymentStageprod8F31f2ab' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchDeleteApiPermissioncorstwitchtestcorsapitest1E81ff74deletEtwitch2Af8a510 = new lambda.CfnPermission(this, 'corsapitesttwitchDELETEApiPermissioncorstwitchtestcorsapitest1E81FF74DELETEtwitch2AF8A510', {
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
        '/DELETE/twitch',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestDeploymentStageprod8F31f2ab == null) { throw new Error(`A combination of conditions caused 'corsapitestDeploymentStageprod8F31f2ab' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchGetApiPermissioncorstwitchtestcorsapitest1E81ff74geTtwitchDd74718a = new lambda.CfnPermission(this, 'corsapitesttwitchGETApiPermissioncorstwitchtestcorsapitest1E81FF74GETtwitchDD74718A', {
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
        '/GET/twitch',
      ].join(''),
    });

    if (corsapitest8682546E == null) { throw new Error(`A combination of conditions caused 'corsapitest8682546E' to be undefined. Fixit.`); }
    if (corsapitestDeploymentStageprod8F31f2ab == null) { throw new Error(`A combination of conditions caused 'corsapitestDeploymentStageprod8F31f2ab' to be undefined. Fixit.`); }
    if (handlerE1533bd5 == null) { throw new Error(`A combination of conditions caused 'handlerE1533bd5' to be undefined. Fixit.`); }
    const corsapitesttwitchPostApiPermissioncorstwitchtestcorsapitest1E81ff74posTtwitchD6548e1b = new lambda.CfnPermission(this, 'corsapitesttwitchPOSTApiPermissioncorstwitchtestcorsapitest1E81FF74POSTtwitchD6548E1B', {
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
        '/POST/twitch',
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

