import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-lambda-add-subroute-integrationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-lambda-add-subroute-integration extends cdk.Stack {
  public readonly exportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440cad;

  public constructor(scope: cdk.App, id: string, props: integ-lambda-add-subroute-integrationProps = {}) {
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
    const firstlambdafunctionServiceRoleC4fd6c93 = new iam.CfnRole(this, 'firstlambdafunctionServiceRoleC4FD6C93', {
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

    const secondlambdafunctionServiceRole23Fee383 = new iam.CfnRole(this, 'secondlambdafunctionServiceRole23FEE383', {
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

    const testapigwv2addsubrouteintegration74634536 = new apigatewayv2.CfnApi(this, 'testapigwv2addsubrouteintegration74634536', {
      name: 'test-apigwv2-add-subroute-integration',
      protocolType: 'HTTP',
    });

    const thirdlambdafunctionServiceRole1Ca82110 = new iam.CfnRole(this, 'thirdlambdafunctionServiceRole1CA82110', {
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

    if (firstlambdafunctionServiceRoleC4fd6c93 == null) { throw new Error(`A combination of conditions caused 'firstlambdafunctionServiceRoleC4fd6c93' to be undefined. Fixit.`); }
    const firstlambdafunction507195Ee = new lambda.CfnFunction(this, 'firstlambdafunction507195EE', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { return { statusCode: 200, body: \'success-hit-first-lambda\' }; };',
      },
      handler: 'index.handler',
      role: firstlambdafunctionServiceRoleC4fd6c93.attrArn,
      runtime: 'nodejs18.x',
    });
    firstlambdafunction507195Ee.addDependency(firstlambdafunctionServiceRoleC4fd6c93);

    if (secondlambdafunctionServiceRole23Fee383 == null) { throw new Error(`A combination of conditions caused 'secondlambdafunctionServiceRole23Fee383' to be undefined. Fixit.`); }
    const secondlambdafunction075D9d2b = new lambda.CfnFunction(this, 'secondlambdafunction075D9D2B', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { return { statusCode: 200, body: \'success-hit-second-lambda\' }; };',
      },
      handler: 'index.handler',
      role: secondlambdafunctionServiceRole23Fee383.attrArn,
      runtime: 'nodejs18.x',
    });
    secondlambdafunction075D9d2b.addDependency(secondlambdafunctionServiceRole23Fee383);

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationDefaultStage95Cbb85f = new apigatewayv2.CfnStage(this, 'testapigwv2addsubrouteintegrationDefaultStage95CBB85F', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      autoDeploy: true,
      stageName: '$default',
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e = new apigatewayv2.CfnIntegration(this, 'testapigwv2addsubrouteintegrationGETthirdroutemyreferencedlambdaintegrationD0FF024E', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':lambda:',
        this.region,
        ':',
        this.account,
        ':function:third-lambda-function',
      ].join(''),
      payloadFormatVersion: '2.0',
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationPermission020Aa386 = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETthirdroutemyreferencedlambdaintegrationPermission020AA386', {
      action: 'lambda:InvokeFunction',
      functionName: [
        'arn:',
        this.partition,
        ':lambda:',
        this.region,
        ':',
        this.account,
        ':function:third-lambda-function',
      ].join(''),
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/thirdroute',
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTthirdroutesubroutemyreferencedlambdaintegrationPermissionDe3e4e26 = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETthirdroutesubroutemyreferencedlambdaintegrationPermissionDE3E4E26', {
      action: 'lambda:InvokeFunction',
      functionName: [
        'arn:',
        this.partition,
        ':lambda:',
        this.region,
        ':',
        this.account,
        ':function:third-lambda-function',
      ].join(''),
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/thirdroute/subroute',
      ].join(''),
    });

    if (thirdlambdafunctionServiceRole1Ca82110 == null) { throw new Error(`A combination of conditions caused 'thirdlambdafunctionServiceRole1Ca82110' to be undefined. Fixit.`); }
    const thirdlambdafunctionF08420cd = new lambda.CfnFunction(this, 'thirdlambdafunctionF08420CD', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { return { statusCode: 200, body: \'success-hit-third-lambda\' }; };',
      },
      functionName: 'third-lambda-function',
      handler: 'index.handler',
      role: thirdlambdafunctionServiceRole1Ca82110.attrArn,
      runtime: 'nodejs18.x',
    });
    thirdlambdafunctionF08420cd.addDependency(thirdlambdafunctionServiceRole1Ca82110);

    if (firstlambdafunction507195Ee == null) { throw new Error(`A combination of conditions caused 'firstlambdafunction507195Ee' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429 = new apigatewayv2.CfnIntegration(this, 'testapigwv2addsubrouteintegrationGETfirstroutemylambdaintegration9AC16429', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: firstlambdafunction507195Ee.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (firstlambdafunction507195Ee == null) { throw new Error(`A combination of conditions caused 'firstlambdafunction507195Ee' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegrationPermissionA652dc1d = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETfirstroutemylambdaintegrationPermissionA652DC1D', {
      action: 'lambda:InvokeFunction',
      functionName: firstlambdafunction507195Ee.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/firstroute',
      ].join(''),
    });

    if (firstlambdafunction507195Ee == null) { throw new Error(`A combination of conditions caused 'firstlambdafunction507195Ee' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTfirstroutesubroutemylambdaintegrationPermissionCcc6b203 = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETfirstroutesubroutemylambdaintegrationPermissionCCC6B203', {
      action: 'lambda:InvokeFunction',
      functionName: firstlambdafunction507195Ee.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/firstroute/subroute',
      ].join(''),
    });

    if (secondlambdafunction075D9d2b == null) { throw new Error(`A combination of conditions caused 'secondlambdafunction075D9d2b' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72 = new apigatewayv2.CfnIntegration(this, 'testapigwv2addsubrouteintegrationGETsecondroutemyreferencedlambdaintegration6C087A72', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: secondlambdafunction075D9d2b.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (secondlambdafunction075D9d2b == null) { throw new Error(`A combination of conditions caused 'secondlambdafunction075D9d2b' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegrationPermissionC21831d2 = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETsecondroutemyreferencedlambdaintegrationPermissionC21831D2', {
      action: 'lambda:InvokeFunction',
      functionName: secondlambdafunction075D9d2b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/secondroute',
      ].join(''),
    });

    if (secondlambdafunction075D9d2b == null) { throw new Error(`A combination of conditions caused 'secondlambdafunction075D9d2b' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTsecondroutesubroutemyreferencedlambdaintegrationPermissionBc2fb67a = new lambda.CfnPermission(this, 'testapigwv2addsubrouteintegrationGETsecondroutesubroutemyreferencedlambdaintegrationPermissionBC2FB67A', {
      action: 'lambda:InvokeFunction',
      functionName: secondlambdafunction075D9d2b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        testapigwv2addsubrouteintegration74634536.ref,
        '/*/*/secondroute/subroute',
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTthirdroute55217764 = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETthirdroute55217764', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /thirdroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e.ref,
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTthirdroutesubroute4E0397c0 = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETthirdroutesubroute4E0397C0', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /thirdroute/subroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTthirdroutemyreferencedlambdaintegrationD0ff024e.ref,
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTfirstrouteA8b45a0f = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETfirstrouteA8B45A0F', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /firstroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429.ref,
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTfirstroutesubroute1247B83f = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETfirstroutesubroute1247B83F', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /firstroute/subroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTfirstroutemylambdaintegration9Ac16429.ref,
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTsecondroute4Af1e609 = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETsecondroute4AF1E609', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /secondroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72.ref,
      ].join(''),
    });

    if (testapigwv2addsubrouteintegration74634536 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegration74634536' to be undefined. Fixit.`); }
    if (testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72 == null) { throw new Error(`A combination of conditions caused 'testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72' to be undefined. Fixit.`); }
    const testapigwv2addsubrouteintegrationGeTsecondroutesubrouteB60a5707 = new apigatewayv2.CfnRoute(this, 'testapigwv2addsubrouteintegrationGETsecondroutesubrouteB60A5707', {
      apiId: testapigwv2addsubrouteintegration74634536.ref,
      authorizationType: 'NONE',
      routeKey: 'GET /secondroute/subroute',
      target: [
        'integrations/',
        testapigwv2addsubrouteintegrationGeTsecondroutemyreferencedlambdaintegration6C087a72.ref,
      ].join(''),
    });

    // Outputs
    this.exportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440cad = testapigwv2addsubrouteintegration74634536.attrApiEndpoint;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440CAD', {
      key: 'ExportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440CAD',
      exportName: 'integ-lambda-add-subroute-integration:ExportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440CAD',
      value: this.exportsOutputFnGetAtttestapigwv2addsubrouteintegration74634536ApiEndpoint0B440cad!.toString(),
    });
  }
}

