import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface integ-cloudfront-s3Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-cloudfront-s3 extends cdk.Stack {
  public readonly distributionDomainName;

  public constructor(scope: cdk.App, id: string, props: integ-cloudfront-s3Props = {}) {
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

    const oai = new cloudfront.CfnCloudFrontOriginAccessIdentity(this, 'OAI', {
      cloudFrontOriginAccessIdentityConfig: {
        comment: 'Allows CloudFront to reach the bucket!',
      },
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (oai == null) { throw new Error(`A combination of conditions caused 'oai' to be undefined. Fixit.`); }
    const bucketPolicyE9a3008a = new s3.CfnBucketPolicy(this, 'BucketPolicyE9A3008A', {
      bucket: bucket83908E77.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:GetObject',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::cloudfront:user/CloudFront Origin Access Identity ',
                oai.ref,
              ].join(''),
            },
            Resource: [
              bucket83908E77.attrArn,
              '/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (oai == null) { throw new Error(`A combination of conditions caused 'oai' to be undefined. Fixit.`); }
    const distributionCfDistribution882A7313 = new cloudfront.CfnDistribution(this, 'DistributionCFDistribution882A7313', {
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
              originAccessIdentity: [
                'origin-access-identity/cloudfront/',
                oai.ref,
              ].join(''),
            },
          },
        ],
        priceClass: 'PriceClass_100',
        viewerCertificate: {
          cloudFrontDefaultCertificate: true,
        },
      },
    });

    // Outputs
    this.distributionDomainName = distributionCfDistribution882A7313.attrDomainName;
    new cdk.CfnOutput(this, 'CfnOutputDistributionDomainName', {
      key: 'DistributionDomainName',
      value: this.distributionDomainName!.toString(),
    });
  }
}

