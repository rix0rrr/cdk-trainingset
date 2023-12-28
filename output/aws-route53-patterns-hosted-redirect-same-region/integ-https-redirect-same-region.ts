import * as cdk from 'aws-cdk-lib';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface IntegHttpsRedirectSameRegionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegHttpsRedirectSameRegion extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegHttpsRedirectSameRegionProps = {}) {
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

    // Mappings
    const awsCloudFrontPartitionHostedZoneIdMap: Record<string, Record<string, string>> = {
      'aws': {
        'zoneId': 'Z2FDTNDATAQYW2',
      },
      'aws-cn': {
        'zoneId': 'Z3RFFRIM2A3IF5',
      },
    };

    // Resources
    const redirectRedirectBucketAa44e2fe = new s3.CfnBucket(this, 'redirectRedirectBucketAA44E2FE', {
      publicAccessBlockConfiguration: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      },
      websiteConfiguration: {
        redirectAllRequestsTo: {
          hostName: 'aws.amazon.com',
          protocol: 'https',
        },
      },
    });
    redirectRedirectBucketAa44e2fe.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const redirectRedirectCertificateD6c59f7f = new certificatemanager.CfnCertificate(this, 'redirectRedirectCertificateD6C59F7F', {
      domainName: 'integ-same-region.example.com',
      domainValidationOptions: [
        {
          domainName: 'integ-same-region.example.com',
          hostedZoneId: 'Z23ABC4XYZL05B',
        },
        {
          domainName: 'integ-same-region.example.com',
          hostedZoneId: 'Z23ABC4XYZL05B',
        },
      ],
      subjectAlternativeNames: [
        'integ-same-region.example.com',
      ],
      tags: [
        {
          key: 'Name',
          value: 'integ-https-redirect-same-region/redirect/RedirectCertificate',
        },
      ],
      validationMethod: 'DNS',
    });

    if (redirectRedirectBucketAa44e2fe == null) { throw new Error(`A combination of conditions caused 'redirectRedirectBucketAa44e2fe' to be undefined. Fixit.`); }
    if (redirectRedirectCertificateD6c59f7f == null) { throw new Error(`A combination of conditions caused 'redirectRedirectCertificateD6c59f7f' to be undefined. Fixit.`); }
    const redirectRedirectDistributionCfDistribution1A4c48e3 = new cloudfront.CfnDistribution(this, 'redirectRedirectDistributionCFDistribution1A4C48E3', {
      distributionConfig: {
        aliases: [
          'integ-same-region.example.com',
        ],
        comment: 'Redirect to aws.amazon.com from integ-same-region.example.com',
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
        defaultRootObject: '',
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
              originProtocolPolicy: 'http-only',
              originReadTimeout: 30,
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: cdk.Fn.select(2, cdk.Fn.split('/', redirectRedirectBucketAa44e2fe.attrWebsiteUrl)),
            id: 'origin1',
          },
        ],
        priceClass: 'PriceClass_All',
        viewerCertificate: {
          acmCertificateArn: redirectRedirectCertificateD6c59f7f.ref,
          sslSupportMethod: 'sni-only',
        },
      },
    });

    if (redirectRedirectDistributionCfDistribution1A4c48e3 == null) { throw new Error(`A combination of conditions caused 'redirectRedirectDistributionCfDistribution1A4c48e3' to be undefined. Fixit.`); }
    const redirectRedirectAliasRecordSixe7728a9391F03e = new route53.CfnRecordSet(this, 'redirectRedirectAliasRecordSixe7728a9391F03E', {
      name: 'integ-same-region.example.com.',
      type: 'AAAA',
      aliasTarget: {
        dnsName: redirectRedirectDistributionCfDistribution1A4c48e3.attrDomainName,
        hostedZoneId: awsCloudFrontPartitionHostedZoneIdMap[this.partition]['zoneId'],
      },
      hostedZoneId: 'Z23ABC4XYZL05B',
    });

    if (redirectRedirectDistributionCfDistribution1A4c48e3 == null) { throw new Error(`A combination of conditions caused 'redirectRedirectDistributionCfDistribution1A4c48e3' to be undefined. Fixit.`); }
    const redirectRedirectAliasRecorde7728a9F2a656c = new route53.CfnRecordSet(this, 'redirectRedirectAliasRecorde7728a9F2A656C', {
      name: 'integ-same-region.example.com.',
      type: 'A',
      aliasTarget: {
        dnsName: redirectRedirectDistributionCfDistribution1A4c48e3.attrDomainName,
        hostedZoneId: awsCloudFrontPartitionHostedZoneIdMap[this.partition]['zoneId'],
      },
      hostedZoneId: 'Z23ABC4XYZL05B',
    });
  }
}

