import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface CloudfrontS3OriginOaiProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CloudfrontS3OriginOai extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CloudfrontS3OriginOaiProps = {}) {
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
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const originAccessIdentityDf1e3cac = new cloudfront.CfnCloudFrontOriginAccessIdentity(this, 'OriginAccessIdentityDF1E3CAC', {
      cloudFrontOriginAccessIdentityConfig: {
        comment: 'Identity for bucket provided by test',
      },
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (originAccessIdentityDf1e3cac == null) { throw new Error(`A combination of conditions caused 'originAccessIdentityDf1e3cac' to be undefined. Fixit.`); }
    const bucketPolicyE9a3008a = new s3.CfnBucketPolicy(this, 'BucketPolicyE9A3008A', {
      bucket: bucket83908E77.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:GetObject',
            Effect: 'Allow',
            Principal: {
              CanonicalUser: originAccessIdentityDf1e3cac.attrS3CanonicalUserId,
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
    if (originAccessIdentityDf1e3cac == null) { throw new Error(`A combination of conditions caused 'originAccessIdentityDf1e3cac' to be undefined. Fixit.`); }
    const distribution830Fac52 = new cloudfront.CfnDistribution(this, 'Distribution830FAC52', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'cloudfronts3originoaiDistributionOrigin1516C5A91',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        origins: [
          {
            domainName: bucket83908E77.attrRegionalDomainName,
            id: 'cloudfronts3originoaiDistributionOrigin1516C5A91',
            s3OriginConfig: {
              originAccessIdentity: [
                'origin-access-identity/cloudfront/',
                originAccessIdentityDf1e3cac.ref,
              ].join(''),
            },
          },
        ],
      },
    });
  }
}

