import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface integ-distribution-key-groupProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-distribution-key-group extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-distribution-key-groupProps = {}) {
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
    const myPublicKey78071F3d = new cloudfront.CfnPublicKey(this, 'MyPublicKey78071F3D', {
      publicKeyConfig: {
        callerReference: 'c8752fac3fe06fc93f3fbd12d7e0282d8967409e4d',
        encodedKey: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAudf8/iNkQgdvjEdm6xYS\nJAyxd/kGTbJfQNg9YhInb7TSm0dGu0yx8yZ3fnpmxuRPqJIlaVr+fT4YRl71gEYa\ndlhHmnVegyPNjP9dNqZ7zwNqMEPOPnS/NOHbJj1KYKpn1f8pPNycQ5MQCntKGnSj\n6fc+nbcC0joDvGz80xuy1W4hLV9oC9c3GT26xfZb2jy9MVtA3cppNuTwqrFi3t6e\n0iGpraxZlT5wewjZLpQkngqYr6s3aucPAZVsGTEYPo4nD5mswmtZOm+tgcOrivtD\n/3sD/qZLQ6c5siqyS8aTraD6y+VXugujfarTU65IeZ6QAUbLMsWuZOIi5Jn8zAwx\nNQIDAQAB\n-----END PUBLIC KEY-----',
        name: 'integdistributionkeygroupMyPublicKeyC0F3B115',
      },
    });

    if (myPublicKey78071F3d == null) { throw new Error(`A combination of conditions caused 'myPublicKey78071F3d' to be undefined. Fixit.`); }
    const myKeyGroupAf22fd35 = new cloudfront.CfnKeyGroup(this, 'MyKeyGroupAF22FD35', {
      keyGroupConfig: {
        items: [
          myPublicKey78071F3d.ref,
        ],
        name: 'integdistributionkeygroupMyKeyGroupF179E01A',
      },
    });

    if (myKeyGroupAf22fd35 == null) { throw new Error(`A combination of conditions caused 'myKeyGroupAf22fd35' to be undefined. Fixit.`); }
    const distB3b78991 = new cloudfront.CfnDistribution(this, 'DistB3B78991', {
      distributionConfig: {
        defaultCacheBehavior: {
          cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
          compress: true,
          targetOriginId: 'integdistributionkeygroupDistOrigin1B9677703',
          trustedKeyGroups: [
            myKeyGroupAf22fd35.ref,
          ],
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
            id: 'integdistributionkeygroupDistOrigin1B9677703',
          },
        ],
      },
    });
  }
}

