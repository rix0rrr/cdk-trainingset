import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-distribution-basicProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-distribution-basic extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-distribution-basicProps = {}) {
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
    const distB3b78991 = new cloudfront.CfnDistribution(this, 'DistB3B78991', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionbasicDistOrigin151B53FF1',
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
            id: 'integdistributionbasicDistOrigin151B53FF1',
          },
        ],
      },
    });

    const role13A5c70c1 = new iam.CfnRole(this, 'Role13A5C70C1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const role291939Bc6 = new iam.CfnRole(this, 'Role291939BC6', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (distB3b78991 == null) { throw new Error(`A combination of conditions caused 'distB3b78991' to be undefined. Fixit.`); }
    if (role13A5c70c1 == null) { throw new Error(`A combination of conditions caused 'role13A5c70c1' to be undefined. Fixit.`); }
    const role1DefaultPolicyD3ef4d0a = new iam.CfnPolicy(this, 'Role1DefaultPolicyD3EF4D0A', {
      policyDocument: {
        Statement: [
          {
            Action: 'cloudfront:CreateInvalidation',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':cloudfront::',
              this.account,
              ':distribution/',
              distB3b78991.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Role1DefaultPolicyD3EF4D0A',
      roles: [
        role13A5c70c1.ref,
      ],
    });

    if (distB3b78991 == null) { throw new Error(`A combination of conditions caused 'distB3b78991' to be undefined. Fixit.`); }
    if (role291939Bc6 == null) { throw new Error(`A combination of conditions caused 'role291939Bc6' to be undefined. Fixit.`); }
    const role2DefaultPolicy3A7a0a1b = new iam.CfnPolicy(this, 'Role2DefaultPolicy3A7A0A1B', {
      policyDocument: {
        Statement: [
          {
            Action: 'cloudfront:ListInvalidations',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':cloudfront::',
              this.account,
              ':distribution/',
              distB3b78991.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Role2DefaultPolicy3A7A0A1B',
      roles: [
        role291939Bc6.ref,
      ],
    });
  }
}

