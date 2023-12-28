import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface integ-spec-rest-api-origin-custom-originProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-spec-rest-api-origin-custom-origin extends cdk.Stack {
  public readonly restApiEndpoint0551178A;

  public constructor(scope: cdk.App, id: string, props: integ-spec-rest-api-origin-custom-originProps = {}) {
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
    const restApi0C43bf4b = new apigateway.CfnRestApi(this, 'RestApi0C43BF4B', {
      body: {
        openapi: '3.0.2',
        info: {
          version: '1.0.0',
          title: 'Test API for CDK',
        },
        paths: {
          '/pets': {
            get: {
              summary: 'Test Method',
              operationId: 'testMethod',
              responses: {
                '200': {
                  description: 'A paged array of pets',
                  content: {
                    'application/json': {
                      schema: {
                        '$ref': '#/components/schemas/Empty',
                      },
                    },
                  },
                },
              },
              'x-amazon-apigateway-integration': {
                responses: {
                  default: {
                    statusCode: '200',
                  },
                },
                requestTemplates: {
                  'application/json': '{\"statusCode\": 200}',
                },
                passthroughBehavior: 'when_no_match',
                type: 'mock',
              },
            },
          },
        },
        components: {
          schemas: {
            Empty: {
              title: 'Empty Schema',
              type: 'object',
            },
          },
        },
      },
      name: 'RestApi',
    });

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    const restApiDeployment180Ec503edd77c5c8fffabb2e523387cd087d12f = new apigateway.CfnDeployment(this, 'RestApiDeployment180EC503edd77c5c8fffabb2e523387cd087d12f', {
      description: 'Automatically created by the RestApi construct',
      restApiId: restApi0C43bf4b.ref,
    });

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiDeployment180Ec503edd77c5c8fffabb2e523387cd087d12f == null) { throw new Error(`A combination of conditions caused 'restApiDeployment180Ec503edd77c5c8fffabb2e523387cd087d12f' to be undefined. Fixit.`); }
    const restApiDeploymentStageprod3855De66 = new apigateway.CfnStage(this, 'RestApiDeploymentStageprod3855DE66', {
      deploymentId: restApiDeployment180Ec503edd77c5c8fffabb2e523387cd087d12f.ref,
      restApiId: restApi0C43bf4b.ref,
      stageName: 'prod',
    });

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiDeploymentStageprod3855De66 == null) { throw new Error(`A combination of conditions caused 'restApiDeploymentStageprod3855De66' to be undefined. Fixit.`); }
    const distribution830Fac52 = new cloudfront.CfnDistribution(this, 'Distribution830FAC52', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integspecrestapiorigincustomoriginDistributionOrigin1C1368952',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: cdk.Fn.select(2, cdk.Fn.split('/', [
              'https://',
              restApi0C43bf4b.ref,
              '.execute-api.',
              this.region,
              '.',
              this.urlSuffix,
              '/',
              restApiDeploymentStageprod3855De66.ref,
              '/',
            ].join(''))),
            id: 'integspecrestapiorigincustomoriginDistributionOrigin1C1368952',
            originPath: '',
          },
        ],
      },
    });

    // Outputs
    this.restApiEndpoint0551178A = [
      'https://',
      restApi0C43bf4b.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      restApiDeploymentStageprod3855De66.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputRestApiEndpoint0551178A', {
      key: 'RestApiEndpoint0551178A',
      value: this.restApiEndpoint0551178A!.toString(),
    });
  }
}

