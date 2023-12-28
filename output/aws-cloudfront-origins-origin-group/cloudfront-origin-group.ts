import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface CloudfrontOriginGroupProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CloudfrontOriginGroup extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CloudfrontOriginGroupProps = {}) {
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

    const distributionOrigin1S3Origin5F5c0696 = new cloudfront.CfnCloudFrontOriginAccessIdentity(this, 'DistributionOrigin1S3Origin5F5C0696', {
      cloudFrontOriginAccessIdentityConfig: {
        comment: 'Identity for cloudfrontorigingroupDistributionOrigin137659A54',
      },
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (distributionOrigin1S3Origin5F5c0696 == null) { throw new Error(`A combination of conditions caused 'distributionOrigin1S3Origin5F5c0696' to be undefined. Fixit.`); }
    const bucketPolicyE9a3008a = new s3.CfnBucketPolicy(this, 'BucketPolicyE9A3008A', {
      bucket: bucket83908E77.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:GetObject',
            Effect: 'Allow',
            Principal: {
              CanonicalUser: distributionOrigin1S3Origin5F5c0696.attrS3CanonicalUserId,
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
    if (distributionOrigin1S3Origin5F5c0696 == null) { throw new Error(`A combination of conditions caused 'distributionOrigin1S3Origin5F5c0696' to be undefined. Fixit.`); }
    const distribution830Fac52 = new cloudfront.CfnDistribution(this, 'Distribution830FAC52', {
      distributionConfig: {
        cacheBehaviors: [
          {
            cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            compress: true,
            pathPattern: '/api',
            targetOriginId: 'cloudfrontorigingroupDistributionOriginGroup10B57F1D1',
            viewerProtocolPolicy: 'allow-all',
          },
        ],
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'cloudfrontorigingroupDistributionOriginGroup10B57F1D1',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        originGroups: {
          items: [
            {
              failoverCriteria: {
                statusCodes: {
                  items: [
                    500,
                    502,
                    503,
                    504,
                  ],
                  quantity: 4,
                },
              },
              id: 'cloudfrontorigingroupDistributionOriginGroup10B57F1D1',
              members: {
                items: [
                  {
                    originId: 'cloudfrontorigingroupDistributionOrigin137659A54',
                  },
                  {
                    originId: 'cloudfrontorigingroupDistributionOrigin2CCE5D500',
                  },
                ],
                quantity: 2,
              },
            },
          ],
          quantity: 1,
        },
        origins: [
          {
            domainName: bucket83908E77.attrRegionalDomainName,
            id: 'cloudfrontorigingroupDistributionOrigin137659A54',
            s3OriginConfig: {
              originAccessIdentity: [
                'origin-access-identity/cloudfront/',
                distributionOrigin1S3Origin5F5c0696.ref,
              ].join(''),
            },
          },
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: 'www.example.com',
            id: 'cloudfrontorigingroupDistributionOrigin2CCE5D500',
          },
        ],
      },
    });
  }
}

