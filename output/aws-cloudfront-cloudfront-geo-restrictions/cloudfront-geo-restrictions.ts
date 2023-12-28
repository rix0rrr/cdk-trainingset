import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface CloudfrontGeoRestrictionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CloudfrontGeoRestrictions extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CloudfrontGeoRestrictionsProps = {}) {
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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
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
        restrictions: {
          geoRestriction: {
            locations: [
              'US',
              'GB',
            ],
            restrictionType: 'whitelist',
          },
        },
        viewerCertificate: {
          cloudFrontDefaultCertificate: true,
        },
      },
    });
  }
}

