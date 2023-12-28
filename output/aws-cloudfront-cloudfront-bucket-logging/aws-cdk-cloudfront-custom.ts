import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-cloudfront-customProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-cloudfront-custom extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-cloudfront-customProps = {}) {
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
    const anAmazingWebsiteProbably2LoggingBucket222F7ce9 = new s3.CfnBucket(this, 'AnAmazingWebsiteProbably2LoggingBucket222F7CE9', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'AES256',
            },
          },
        ],
      },
    });
    anAmazingWebsiteProbably2LoggingBucket222F7ce9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (anAmazingWebsiteProbably2LoggingBucket222F7ce9 == null) { throw new Error(`A combination of conditions caused 'anAmazingWebsiteProbably2LoggingBucket222F7ce9' to be undefined. Fixit.`); }
    const anAmazingWebsiteProbably2CfDistribution7C1ccd12 = new cloudfront.CfnDistribution(this, 'AnAmazingWebsiteProbably2CFDistribution7C1CCD12', {
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
        logging: {
          bucket: anAmazingWebsiteProbably2LoggingBucket222F7ce9.attrRegionalDomainName,
          includeCookies: false,
        },
        origins: [
          {
            connectionAttempts: 3,
            connectionTimeout: 10,
            customOriginConfig: {
              httpPort: 80,
              httpsPort: 443,
              originKeepaliveTimeout: 5,
              originProtocolPolicy: 'https-only',
              originReadTimeout: 30,
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: 'brelandm.a2z.com',
            id: 'origin1',
            originCustomHeaders: [
              {
                headerName: 'X-Custom-Header',
                headerValue: 'somevalue',
              },
            ],
          },
        ],
        priceClass: 'PriceClass_100',
        viewerCertificate: {
          cloudFrontDefaultCertificate: true,
        },
      },
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    const anAmazingWebsiteProbablyCfDistribution47E3983b = new cloudfront.CfnDistribution(this, 'AnAmazingWebsiteProbablyCFDistribution47E3983B', {
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
        logging: {
          bucket: bucket83908E77.attrRegionalDomainName,
          includeCookies: true,
          prefix: 'test-prefix',
        },
        origins: [
          {
            connectionAttempts: 3,
            connectionTimeout: 10,
            customOriginConfig: {
              httpPort: 80,
              httpsPort: 443,
              originKeepaliveTimeout: 5,
              originProtocolPolicy: 'https-only',
              originReadTimeout: 30,
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: 'brelandm.a2z.com',
            id: 'origin1',
            originCustomHeaders: [
              {
                headerName: 'X-Custom-Header',
                headerValue: 'somevalue',
              },
            ],
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

