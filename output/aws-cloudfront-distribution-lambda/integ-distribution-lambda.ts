import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface IntegDistributionLambdaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegDistributionLambda extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegDistributionLambdaProps = {}) {
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
    const lambdaServiceRoleA8ed4d3b = new iam.CfnRole(this, 'LambdaServiceRoleA8ED4D3B', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: [
                'edgelambda.amazonaws.com',
                'lambda.amazonaws.com',
              ],
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

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    const lambdaD247545b = new lambda.CfnFunction(this, 'LambdaD247545B', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: lambdaServiceRoleA8ed4d3b.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaD247545b.addDependency(lambdaServiceRoleA8ed4d3b);

    if (lambdaD247545b == null) { throw new Error(`A combination of conditions caused 'lambdaD247545b' to be undefined. Fixit.`); }
    const lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05 = new lambda.CfnVersion(this, 'LambdaCurrentVersionDF706F6Aceabca74f785ac2be6cd5e57eeaf3b05', {
      functionName: lambdaD247545b.ref,
    });

    if (lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05 == null) { throw new Error(`A combination of conditions caused 'lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05' to be undefined. Fixit.`); }
    const distB3b78991 = new cloudfront.CfnDistribution(this, 'DistB3B78991', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad',
          compress: true,
          lambdaFunctionAssociations: [
            {
              eventType: 'origin-request',
              lambdaFunctionArn: lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05.ref,
            },
          ],
          targetOriginId: 'integdistributionlambdaDistOrigin133A13098',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionlambdaDistOrigin133A13098',
          },
        ],
      },
    });
  }
}

