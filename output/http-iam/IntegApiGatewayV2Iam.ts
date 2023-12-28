import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegApiGatewayV2IamProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegApiGatewayV2Iam extends cdk.Stack {
  public readonly api;
  public readonly testaccesskeyid;
  public readonly testsecretaccesskey;
  public readonly testregion;

  public constructor(scope: cdk.App, id: string, props: IntegApiGatewayV2IamProps = {}) {
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
    const httpApiF5a9a8a7 = new apigatewayv2.CfnApi(this, 'HttpApiF5A9A8A7', {
      name: 'HttpApi',
      protocolType: 'HTTP',
    });

    const user00B015a1 = new iam.CfnUser(this, 'User00B015A1', {
    });

    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiAnYbooksbookexamplecom5C333c98 = new apigatewayv2.CfnIntegration(this, 'HttpApiANYbooksbookexamplecom5C333C98', {
      apiId: httpApiF5a9a8a7.ref,
      integrationType: 'HTTP_PROXY',
      integrationMethod: 'GET',
      integrationUri: 'https://www.example.com/',
      payloadFormatVersion: '1.0',
    });

    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiAnYfooexamplecom903F7a9f = new apigatewayv2.CfnIntegration(this, 'HttpApiANYfooexamplecom903F7A9F', {
      apiId: httpApiF5a9a8a7.ref,
      integrationType: 'HTTP_PROXY',
      integrationMethod: 'GET',
      integrationUri: 'https://www.example.com/',
      payloadFormatVersion: '1.0',
    });

    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiDefaultStage3Eeb07d6 = new apigatewayv2.CfnStage(this, 'HttpApiDefaultStage3EEB07D6', {
      apiId: httpApiF5a9a8a7.ref,
      stageName: '$default',
      autoDeploy: true,
    });

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const userAccessEc42adf7 = new iam.CfnAccessKey(this, 'UserAccessEC42ADF7', {
      userName: user00B015a1.ref,
    });

    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const userDefaultPolicy1F97781e = new iam.CfnPolicy(this, 'UserDefaultPolicy1F97781E', {
      policyDocument: {
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':execute-api:',
                this.region,
                ':',
                this.account,
                ':',
                httpApiF5a9a8a7.ref,
                '/*/*/books/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':execute-api:',
                this.region,
                ':',
                this.account,
                ':',
                httpApiF5a9a8a7.ref,
                '/*/*/foo',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'UserDefaultPolicy1F97781E',
      users: [
        user00B015a1.ref,
      ],
    });

    if (httpApiAnYbooksbookexamplecom5C333c98 == null) { throw new Error(`A combination of conditions caused 'httpApiAnYbooksbookexamplecom5C333c98' to be undefined. Fixit.`); }
    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiAnYbooksbook2F78361c = new apigatewayv2.CfnRoute(this, 'HttpApiANYbooksbook2F78361C', {
      apiId: httpApiF5a9a8a7.ref,
      routeKey: 'ANY /books/{book}',
      authorizationType: 'AWS_IAM',
      target: [
        'integrations/',
        httpApiAnYbooksbookexamplecom5C333c98.ref,
      ].join(''),
    });

    if (httpApiAnYfooexamplecom903F7a9f == null) { throw new Error(`A combination of conditions caused 'httpApiAnYfooexamplecom903F7a9f' to be undefined. Fixit.`); }
    if (httpApiF5a9a8a7 == null) { throw new Error(`A combination of conditions caused 'httpApiF5a9a8a7' to be undefined. Fixit.`); }
    const httpApiAnYfooD178456f = new apigatewayv2.CfnRoute(this, 'HttpApiANYfooD178456F', {
      apiId: httpApiF5a9a8a7.ref,
      routeKey: 'ANY /foo',
      authorizationType: 'AWS_IAM',
      target: [
        'integrations/',
        httpApiAnYfooexamplecom903F7a9f.ref,
      ].join(''),
    });

    // Outputs
    this.api = [
      'https://',
      httpApiF5a9a8a7.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputAPI', {
      key: 'API',
      value: this.api!.toString(),
    });
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

