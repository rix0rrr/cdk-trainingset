import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface IntegDistributionOriginIdProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegDistributionOriginId extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegDistributionOriginIdProps = {}) {
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
    const testDistribution94Ec811c = new cloudfront.CfnDistribution(this, 'TestDistribution94EC811C', {
      distributionConfig: {
        cacheBehaviors: [
          {
            cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            compress: true,
            pathPattern: '/second',
            targetOriginId: 'my-custom-origin-id',
            viewerProtocolPolicy: 'allow-all',
          },
          {
            cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            compress: true,
            pathPattern: '/third',
            targetOriginId: 'my-custom-origin-id',
            viewerProtocolPolicy: 'allow-all',
          },
        ],
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'my-custom-origin-id',
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
            id: 'my-custom-origin-id',
          },
        ],
      },
    });
  }
}

