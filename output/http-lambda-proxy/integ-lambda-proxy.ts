import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface IntegLambdaProxyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegLambdaProxy extends cdk.Stack {
  public readonly endpoint;

  public constructor(scope: cdk.App, id: string, props: IntegLambdaProxyProps = {}) {
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
    const alwaysSuccessServiceRole6Db8c2f6 = new iam.CfnRole(this, 'AlwaysSuccessServiceRole6DB8C2F6', {
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

    const lambdaProxyApi67594471 = new apigatewayv2.CfnApi(this, 'LambdaProxyApi67594471', {
      name: 'LambdaProxyApi',
      protocolType: 'HTTP',
    });

    if (alwaysSuccessServiceRole6Db8c2f6 == null) { throw new Error(`A combination of conditions caused 'alwaysSuccessServiceRole6Db8c2f6' to be undefined. Fixit.`); }
    const alwaysSuccess099Eab05 = new lambda.CfnFunction(this, 'AlwaysSuccess099EAB05', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { return { statusCode: 200, body: \"success\" }; };',
      },
      handler: 'index.handler',
      role: alwaysSuccessServiceRole6Db8c2f6.attrArn,
      runtime: 'nodejs18.x',
    });
    alwaysSuccess099Eab05.addDependency(alwaysSuccessServiceRole6Db8c2f6);

    if (lambdaProxyApi67594471 == null) { throw new Error(`A combination of conditions caused 'lambdaProxyApi67594471' to be undefined. Fixit.`); }
    const lambdaProxyApiDefaultStage07C38681 = new apigatewayv2.CfnStage(this, 'LambdaProxyApiDefaultStage07C38681', {
      apiId: lambdaProxyApi67594471.ref,
      autoDeploy: true,
      stageName: '$default',
    });

    if (alwaysSuccess099Eab05 == null) { throw new Error(`A combination of conditions caused 'alwaysSuccess099Eab05' to be undefined. Fixit.`); }
    if (lambdaProxyApi67594471 == null) { throw new Error(`A combination of conditions caused 'lambdaProxyApi67594471' to be undefined. Fixit.`); }
    const lambdaProxyApiDefaultRouteDefaultIntegrationAe9908c8 = new apigatewayv2.CfnIntegration(this, 'LambdaProxyApiDefaultRouteDefaultIntegrationAE9908C8', {
      apiId: lambdaProxyApi67594471.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: alwaysSuccess099Eab05.attrArn,
      payloadFormatVersion: '2.0',
    });

    if (alwaysSuccess099Eab05 == null) { throw new Error(`A combination of conditions caused 'alwaysSuccess099Eab05' to be undefined. Fixit.`); }
    if (lambdaProxyApi67594471 == null) { throw new Error(`A combination of conditions caused 'lambdaProxyApi67594471' to be undefined. Fixit.`); }
    const lambdaProxyApiDefaultRouteDefaultIntegrationPermission39F587fc = new lambda.CfnPermission(this, 'LambdaProxyApiDefaultRouteDefaultIntegrationPermission39F587FC', {
      action: 'lambda:InvokeFunction',
      functionName: alwaysSuccess099Eab05.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        lambdaProxyApi67594471.ref,
        '/*/*',
      ].join(''),
    });

    if (lambdaProxyApi67594471 == null) { throw new Error(`A combination of conditions caused 'lambdaProxyApi67594471' to be undefined. Fixit.`); }
    if (lambdaProxyApiDefaultRouteDefaultIntegrationAe9908c8 == null) { throw new Error(`A combination of conditions caused 'lambdaProxyApiDefaultRouteDefaultIntegrationAe9908c8' to be undefined. Fixit.`); }
    const lambdaProxyApiDefaultRoute1Eb30a46 = new apigatewayv2.CfnRoute(this, 'LambdaProxyApiDefaultRoute1EB30A46', {
      apiId: lambdaProxyApi67594471.ref,
      authorizationType: 'NONE',
      routeKey: '$default',
      target: [
        'integrations/',
        lambdaProxyApiDefaultRouteDefaultIntegrationAe9908c8.ref,
      ].join(''),
    });

    // Outputs
    this.endpoint = [
      'https://',
      lambdaProxyApi67594471.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputEndpoint', {
      key: 'Endpoint',
      value: this.endpoint!.toString(),
    });
  }
}

