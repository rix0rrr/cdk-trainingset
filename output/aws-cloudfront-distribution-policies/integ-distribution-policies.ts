import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface IntegDistributionPoliciesProps extends cdk.StackProps {
  /**
   * @default 1000
   */
  readonly minTtlParam?: string;
  /**
   * @default 2000
   */
  readonly defaultTtlParam?: string;
  /**
   * @default 3000
   */
  readonly maxTtlParam?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegDistributionPolicies extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegDistributionPoliciesProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      minTtlParam: props.minTtlParam ?? 1000,
      defaultTtlParam: props.defaultTtlParam ?? 2000,
      maxTtlParam: props.maxTtlParam ?? 3000,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const cachePolicy26D8a535 = new cloudfront.CfnCachePolicy(this, 'CachePolicy26D8A535', {
      cachePolicyConfig: {
        defaultTtl: 86400,
        maxTtl: 31536000,
        minTtl: 0,
        name: 'ACustomCachePolicy',
        parametersInCacheKeyAndForwardedToOrigin: {
          cookiesConfig: {
            cookieBehavior: 'none',
          },
          enableAcceptEncodingBrotli: false,
          enableAcceptEncodingGzip: false,
          headersConfig: {
            headerBehavior: 'none',
          },
          queryStringsConfig: {
            queryStringBehavior: 'none',
          },
        },
      },
    });

    const cachePolicyWithRefD7c98251 = new cloudfront.CfnCachePolicy(this, 'CachePolicyWithRefD7C98251', {
      cachePolicyConfig: {
        defaultTtl: props.defaultTtlParam!,
        maxTtl: props.maxTtlParam!,
        minTtl: props.minTtlParam!,
        name: [
          'integdistributionpoliciesCachePolicyWithRef80C59B6E-',
          this.region,
        ].join(''),
        parametersInCacheKeyAndForwardedToOrigin: {
          cookiesConfig: {
            cookieBehavior: 'none',
          },
          enableAcceptEncodingBrotli: false,
          enableAcceptEncodingGzip: false,
          headersConfig: {
            headerBehavior: 'none',
          },
          queryStringsConfig: {
            queryStringBehavior: 'none',
          },
        },
      },
    });

    const originRequestPolicy3Efdb4fa = new cloudfront.CfnOriginRequestPolicy(this, 'OriginRequestPolicy3EFDB4FA', {
      originRequestPolicyConfig: {
        cookiesConfig: {
          cookieBehavior: 'whitelist',
          cookies: [
            'cookie1',
          ],
        },
        headersConfig: {
          headerBehavior: 'allViewerAndWhitelistCloudFront',
          headers: [
            'CloudFront-Forwarded-Proto',
          ],
        },
        name: 'ACustomOriginRequestPolicy',
        queryStringsConfig: {
          queryStringBehavior: 'allExcept',
          queryStrings: [
            'querystringparam',
          ],
        },
      },
    });

    const responseHeadersPolicy13Dbf9e0 = new cloudfront.CfnResponseHeadersPolicy(this, 'ResponseHeadersPolicy13DBF9E0', {
      responseHeadersPolicyConfig: {
        corsConfig: {
          accessControlAllowCredentials: false,
          accessControlAllowHeaders: {
            items: [
              'X-Custom-Header-1',
              'X-Custom-Header-2',
            ],
          },
          accessControlAllowMethods: {
            items: [
              'GET',
              'POST',
            ],
          },
          accessControlAllowOrigins: {
            items: [
              '*',
            ],
          },
          accessControlExposeHeaders: {
            items: [
              'X-Custom-Header-1',
              'X-Custom-Header-2',
            ],
          },
          accessControlMaxAgeSec: 600,
          originOverride: true,
        },
        name: 'ACustomResponseHeadersPolicy',
        removeHeadersConfig: {
          items: [
            {
              header: 'Server',
            },
          ],
        },
        serverTimingHeadersConfig: {
          enabled: true,
          samplingRate: 50,
        },
      },
    });

    if (cachePolicyWithRefD7c98251 == null) { throw new Error(`A combination of conditions caused 'cachePolicyWithRefD7c98251' to be undefined. Fixit.`); }
    if (responseHeadersPolicy13Dbf9e0 == null) { throw new Error(`A combination of conditions caused 'responseHeadersPolicy13Dbf9e0' to be undefined. Fixit.`); }
    const dist24014Fec1 = new cloudfront.CfnDistribution(this, 'Dist24014FEC1', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: cachePolicyWithRefD7c98251.ref,
          compress: true,
          originRequestPolicyId: 'b689b0a8-53d0-40ab-baf2-68738e2966ac',
          responseHeadersPolicyId: responseHeadersPolicy13Dbf9e0.ref,
          targetOriginId: 'integdistributionpoliciesDist2Origin16AFA66C6',
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
            domainName: 'www.example-2.com',
            id: 'integdistributionpoliciesDist2Origin16AFA66C6',
          },
        ],
      },
    });

    if (cachePolicy26D8a535 == null) { throw new Error(`A combination of conditions caused 'cachePolicy26D8a535' to be undefined. Fixit.`); }
    if (originRequestPolicy3Efdb4fa == null) { throw new Error(`A combination of conditions caused 'originRequestPolicy3Efdb4fa' to be undefined. Fixit.`); }
    if (responseHeadersPolicy13Dbf9e0 == null) { throw new Error(`A combination of conditions caused 'responseHeadersPolicy13Dbf9e0' to be undefined. Fixit.`); }
    const distB3b78991 = new cloudfront.CfnDistribution(this, 'DistB3B78991', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: cachePolicy26D8a535.ref,
          compress: true,
          originRequestPolicyId: originRequestPolicy3Efdb4fa.ref,
          responseHeadersPolicyId: responseHeadersPolicy13Dbf9e0.ref,
          targetOriginId: 'integdistributionpoliciesDistOrigin17849EF2C',
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
            id: 'integdistributionpoliciesDistOrigin17849EF2C',
          },
        ],
      },
    });
  }
}

