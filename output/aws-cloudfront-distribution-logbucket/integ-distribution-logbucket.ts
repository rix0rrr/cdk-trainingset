import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface IntegDistributionLogbucketProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegDistributionLogbucket extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegDistributionLogbucketProps = {}) {
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
    const logBucketCc3b17e8 = new s3.CfnBucket(this, 'LogBucketCC3B17E8', {
      ownershipControls: {
        rules: [
          {
            objectOwnership: 'ObjectWriter',
          },
        ],
      },
    });
    logBucketCc3b17e8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (logBucketCc3b17e8 == null) { throw new Error(`A combination of conditions caused 'logBucketCc3b17e8' to be undefined. Fixit.`); }
    const myDistDb88fd9a = new cloudfront.CfnDistribution(this, 'MyDistDB88FD9A', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionlogbucketMyDistOrigin16148F85F',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        logging: {
          bucket: logBucketCc3b17e8.attrRegionalDomainName,
        },
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionlogbucketMyDistOrigin16148F85F',
            originShield: {
              enabled: true,
              originShieldRegion: 'us-west-2',
            },
          },
        ],
      },
    });
  }
}

