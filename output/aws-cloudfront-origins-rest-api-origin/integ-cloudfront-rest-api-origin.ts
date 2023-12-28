import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegCloudfrontRestApiOriginProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegCloudfrontRestApiOrigin extends cdk.Stack {
  public readonly restApiEndpoint0551178A;

  public constructor(scope: cdk.App, id: string, props: IntegCloudfrontRestApiOriginProps = {}) {
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
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      name: 'RestApi',
    });

    const restApiCloudWatchRoleE3ed6605 = new iam.CfnRole(this, 'RestApiCloudWatchRoleE3ED6605', {
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
    restApiCloudWatchRoleE3ed6605.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiCloudWatchRoleE3ed6605 == null) { throw new Error(`A combination of conditions caused 'restApiCloudWatchRoleE3ed6605' to be undefined. Fixit.`); }
    const restApiAccount7C83cf5a = new apigateway.CfnAccount(this, 'RestApiAccount7C83CF5A', {
      cloudWatchRoleArn: restApiCloudWatchRoleE3ed6605.attrArn,
    });
    restApiAccount7C83cf5a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    restApiAccount7C83cf5a.addDependency(restApi0C43bf4b);

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    const restApiGet0f59260b = new apigateway.CfnMethod(this, 'RestApiGET0F59260B', {
      httpMethod: 'GET',
      resourceId: restApi0C43bf4b.attrRootResourceId,
      restApiId: restApi0C43bf4b.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiGet0f59260b == null) { throw new Error(`A combination of conditions caused 'restApiGet0f59260b' to be undefined. Fixit.`); }
    const restApiDeployment180Ec50368af6d4b358eff290c08cb2de07c4042 = new apigateway.CfnDeployment(this, 'RestApiDeployment180EC50368af6d4b358eff290c08cb2de07c4042', {
      restApiId: restApi0C43bf4b.ref,
      description: 'Automatically created by the RestApi construct',
    });
    restApiDeployment180Ec50368af6d4b358eff290c08cb2de07c4042.addDependency(restApiGet0f59260b);

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiAccount7C83cf5a == null) { throw new Error(`A combination of conditions caused 'restApiAccount7C83cf5a' to be undefined. Fixit.`); }
    if (restApiDeployment180Ec50368af6d4b358eff290c08cb2de07c4042 == null) { throw new Error(`A combination of conditions caused 'restApiDeployment180Ec50368af6d4b358eff290c08cb2de07c4042' to be undefined. Fixit.`); }
    const restApiDeploymentStageprod3855De66 = new apigateway.CfnStage(this, 'RestApiDeploymentStageprod3855DE66', {
      restApiId: restApi0C43bf4b.ref,
      deploymentId: restApiDeployment180Ec50368af6d4b358eff290c08cb2de07c4042.ref,
      stageName: 'prod',
    });
    restApiDeploymentStageprod3855De66.addDependency(restApiAccount7C83cf5a);

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiDeploymentStageprod3855De66 == null) { throw new Error(`A combination of conditions caused 'restApiDeploymentStageprod3855De66' to be undefined. Fixit.`); }
    const distribution830Fac52 = new cloudfront.CfnDistribution(this, 'Distribution830FAC52', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integcloudfrontrestapioriginDistributionOrigin1B3EE0E72',
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
            id: 'integcloudfrontrestapioriginDistributionOrigin1B3EE0E72',
            originPath: [
              '/',
              cdk.Fn.select(3, cdk.Fn.split('/', [
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
            ].join(''),
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

