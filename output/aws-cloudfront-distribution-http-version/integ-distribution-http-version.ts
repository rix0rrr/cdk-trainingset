import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface integ-distribution-http-versionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-distribution-http-version extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-distribution-http-versionProps = {}) {
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
    const http118E669f5d = new cloudfront.CfnDistribution(this, 'Http118E669F5D', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionhttpversionHttp11Origin117833241',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http1.1',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionhttpversionHttp11Origin117833241',
          },
        ],
      },
    });

    const http25Ed2a59b = new cloudfront.CfnDistribution(this, 'Http25ED2A59B', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionhttpversionHttp2Origin15C0A1B66',
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
            id: 'integdistributionhttpversionHttp2Origin15C0A1B66',
          },
        ],
      },
    });

    const http2and3D987da75 = new cloudfront.CfnDistribution(this, 'Http2and3D987DA75', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionhttpversionHttp2and3Origin1487BBB15',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http2and3',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionhttpversionHttp2and3Origin1487BBB15',
          },
        ],
      },
    });

    const http31D566096 = new cloudfront.CfnDistribution(this, 'Http31D566096', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionhttpversionHttp3Origin10970C9C4',
          viewerProtocolPolicy: 'allow-all',
        },
        enabled: true,
        httpVersion: 'http3',
        ipv6Enabled: true,
        origins: [
          {
            customOriginConfig: {
              originProtocolPolicy: 'https-only',
            },
            domainName: 'www.example.com',
            id: 'integdistributionhttpversionHttp3Origin10970C9C4',
          },
        ],
      },
    });
  }
}

