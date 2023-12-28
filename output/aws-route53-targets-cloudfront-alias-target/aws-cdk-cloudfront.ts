import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-cloudfrontProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-cloudfront extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-cloudfrontProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const hostedZoneDb99f866 = new route53.CfnHostedZone(this, 'HostedZoneDB99F866', {
      name: 'test.public.',
    });

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
        viewerCertificate: {
          cloudFrontDefaultCertificate: true,
        },
      },
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    if (myDistributionCfDistributionDe147309 == null) { throw new Error(`A combination of conditions caused 'myDistributionCfDistributionDe147309' to be undefined. Fixit.`); }
    const hostedZoneAlias40D2e006 = new route53.CfnRecordSet(this, 'HostedZoneAlias40D2E006', {
      name: '_foo.test.public.',
      type: 'A',
      aliasTarget: {
        dnsName: myDistributionCfDistributionDe147309.attrDomainName,
        hostedZoneId: awsCloudFrontPartitionHostedZoneIdMap[this.partition]['zoneId'],
      },
      hostedZoneId: hostedZoneDb99f866.ref,
    });
  }
}

