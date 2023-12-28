import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface CloudfrontHttpOriginProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CloudfrontHttpOrigin extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CloudfrontHttpOriginProps = {}) {
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
    const distribution830Fac52 = new cloudfront.CfnDistribution(this, 'Distribution830FAC52', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'cloudfronthttporiginDistributionOrigin162B02709',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
              originSslProtocols: [
                'TLSv1.2',
              ],
            },
            domainName: 'www.example.com',
            id: 'cloudfronthttporiginDistributionOrigin162B02709',
          },
        ],
      },
    });
  }
}

