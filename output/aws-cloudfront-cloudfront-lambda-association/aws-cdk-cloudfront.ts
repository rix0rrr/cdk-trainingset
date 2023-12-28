import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-cloudfrontProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-cloudfront extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-cloudfrontProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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
    const lambdaVersionFa49e61e = new lambda.CfnVersion(this, 'LambdaVersionFA49E61E', {
      functionName: lambdaD247545b.ref,
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (lambdaVersionFa49e61e == null) { throw new Error(`A combination of conditions caused 'lambdaVersionFa49e61e' to be undefined. Fixit.`); }
    const myDistributionCfDistributionDe147309 = new cloudfront.CfnDistribution(this, 'MyDistributionCFDistributionDE147309', {
      distributionConfig: {
        defaultCacheBehavior: {
          allowedMethods: [
            'GET',
            'HEAD',
          ],
          cachedMethods: [
            'GET',
            'HEAD',
          ],
          compress: true,
          forwardedValues: {
            cookies: {
              forward: 'none',
            },
            queryString: false,
          },
          lambdaFunctionAssociations: [
            {
              eventType: 'origin-request',
              lambdaFunctionArn: lambdaVersionFa49e61e.ref,
            },
          ],
          targetOriginId: 'origin1',
          viewerProtocolPolicy: 'redirect-to-https',
        },
        defaultRootObject: 'index.html',
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        origins: [
          {
            connectionAttempts: 3,
            connectionTimeout: 10,
            domainName: bucket83908E77.attrRegionalDomainName,
            id: 'origin1',
            s3OriginConfig: {
            },
          },
        ],
        priceClass: 'PriceClass_100',
        viewerCertificate: {
          cloudFrontDefaultCertificate: true,
        },
      },
    });
  }
}

