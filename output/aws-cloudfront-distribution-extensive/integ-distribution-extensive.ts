import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface integ-distribution-extensiveProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-distribution-extensive extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-distribution-extensiveProps = {}) {
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
    const myDistLoggingBucket9B8976bc = new s3.CfnBucket(this, 'MyDistLoggingBucket9B8976BC', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'AES256',
            },
          },
        ],
      },
      ownershipControls: {
        rules: [
          {
            objectOwnership: 'ObjectWriter',
          },
        ],
      },
    });
    myDistLoggingBucket9B8976bc.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myDistLoggingBucket9B8976bc == null) { throw new Error(`A combination of conditions caused 'myDistLoggingBucket9B8976bc' to be undefined. Fixit.`); }
    const myDistDb88fd9a = new cloudfront.CfnDistribution(this, 'MyDistDB88FD9A', {
      distributionConfig: {
        comment: 'a test',
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionextensiveMyDistOrigin185F089B3',
          viewerProtocolPolicy: 'allow-all',
        },
        defaultRootObject: 'index.html',
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        logging: {
          bucket: myDistLoggingBucket9B8976bc.attrRegionalDomainName,
          includeCookies: true,
          prefix: 'logs/',
        },
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionextensiveMyDistOrigin185F089B3',
            originShield: {
              enabled: true,
              originShieldRegion: 'us-west-2',
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
      },
    });
  }
}

