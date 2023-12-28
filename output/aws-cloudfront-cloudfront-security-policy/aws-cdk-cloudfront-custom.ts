import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface AwsCdkCloudfrontCustomProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCloudfrontCustom extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCloudfrontCustomProps = {}) {
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
    const anAmazingWebsiteProbablyCfDistribution47E3983b = new cloudfront.CfnDistribution(this, 'AnAmazingWebsiteProbablyCFDistribution47E3983B', {
      distributionConfig: {
        aliases: [
          'test.test.com',
        ],
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
          acmCertificateArn: 'arn:aws:acm:us-east-1:1111111:certificate/11-3336f1-44483d-adc7-9cd375c5169d',
          minimumProtocolVersion: 'TLSv1',
          sslSupportMethod: 'sni-only',
        },
      },
    });
  }
}

