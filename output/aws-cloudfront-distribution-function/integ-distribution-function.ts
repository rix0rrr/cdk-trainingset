import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface IntegDistributionFunctionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegDistributionFunction extends cdk.Stack {
  public readonly functionArn;
  public readonly functionStage;

  public constructor(scope: cdk.App, id: string, props: IntegDistributionFunctionProps = {}) {
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
    const function76856677 = new cloudfront.CfnFunction(this, 'Function76856677', {
      name: 'eu-west-1integdistributionfunctionFunctionDCD62A02',
      autoPublish: true,
      functionCode: 'function handler(event) { return event.request }',
      functionConfig: {
        comment: 'eu-west-1integdistributionfunctionFunctionDCD62A02',
        runtime: 'cloudfront-js-1.0',
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    const distB3b78991 = new cloudfront.CfnDistribution(this, 'DistB3B78991', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad',
          compress: true,
          functionAssociations: [
            {
              eventType: 'viewer-request',
              functionArn: function76856677.attrFunctionArn,
            },
          ],
          targetOriginId: 'integdistributionfunctionDistOrigin1D1E9DF17',
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
            id: 'integdistributionfunctionDistOrigin1D1E9DF17',
          },
        ],
      },
    });

    // Outputs
    this.functionArn = function76856677.attrFunctionArn;
    new cdk.CfnOutput(this, 'CfnOutputFunctionArn', {
      key: 'FunctionArn',
      value: this.functionArn!.toString(),
    });
    this.functionStage = function76856677.attrStage;
    new cdk.CfnOutput(this, 'CfnOutputFunctionStage', {
      key: 'FunctionStage',
      value: this.functionStage!.toString(),
    });
  }
}

