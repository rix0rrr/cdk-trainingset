import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface IntegCloudfrontFailoverProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegCloudfrontFailover extends cdk.Stack {
  public readonly distributionDomainName;

  public constructor(scope: cdk.App, id: string, props: IntegCloudfrontFailoverProps = {}) {
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
    const bucket1D4c77784 = new s3.CfnBucket(this, 'bucket1D4C77784', {
    });
    bucket1D4c77784.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const bucket231De1803 = new s3.CfnBucket(this, 'bucket231DE1803', {
    });
    bucket231De1803.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (bucket1D4c77784 == null) { throw new Error(`A combination of conditions caused 'bucket1D4c77784' to be undefined. Fixit.`); }
    if (bucket231De1803 == null) { throw new Error(`A combination of conditions caused 'bucket231De1803' to be undefined. Fixit.`); }
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
          targetOriginId: 'OriginGroup1',
          viewerProtocolPolicy: 'redirect-to-https',
        },
        defaultRootObject: 'index.html',
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
                  ],
                  quantity: 1,
                },
              },
              id: 'OriginGroup1',
              members: {
                items: [
                  {
                    originId: 'origin1',
                  },
                  {
                    originId: 'originSecondary1',
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
            connectionAttempts: 3,
            connectionTimeout: 10,
            domainName: bucket231De1803.attrRegionalDomainName,
            id: 'originSecondary1',
            s3OriginConfig: {
            },
          },
          {
            connectionAttempts: 3,
            connectionTimeout: 10,
            domainName: bucket1D4c77784.attrRegionalDomainName,
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

    // Outputs
    this.distributionDomainName = distributionCfDistribution882A7313.attrDomainName;
    new cdk.CfnOutput(this, 'CfnOutputDistributionDomainName', {
      key: 'DistributionDomainName',
      value: this.distributionDomainName!.toString(),
    });
  }
}

