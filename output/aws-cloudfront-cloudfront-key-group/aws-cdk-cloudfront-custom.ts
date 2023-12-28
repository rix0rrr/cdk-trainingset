import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface aws-cdk-cloudfront-customProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-cloudfront-custom extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-cloudfront-customProps = {}) {
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
    const awesomePublicKeyEd3e7f55 = new cloudfront.CfnPublicKey(this, 'AwesomePublicKeyED3E7F55', {
      publicKeyConfig: {
        callerReference: 'c88e460888c5762c9c47ac0cdc669370d787fb2d9f',
        encodedKey: '-----BEGIN PUBLIC KEY-----\n      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAudf8/iNkQgdvjEdm6xYS\n      JAyxd/kGTbJfQNg9YhInb7TSm0dGu0yx8yZ3fnpmxuRPqJIlaVr+fT4YRl71gEYa\n      dlhHmnVegyPNjP9dNqZ7zwNqMEPOPnS/NOHbJj1KYKpn1f8pPNycQ5MQCntKGnSj\n      6fc+nbcC0joDvGz80xuy1W4hLV9oC9c3GT26xfZb2jy9MVtA3cppNuTwqrFi3t6e\n      0iGpraxZlT5wewjZLpQkngqYr6s3aucPAZVsGTEYPo4nD5mswmtZOm+tgcOrivtD\n      /3sD/qZLQ6c5siqyS8aTraD6y+VXugujfarTU65IeZ6QAUbLMsWuZOIi5Jn8zAwx\n      NQIDAQAB\n      -----END PUBLIC KEY-----\n      ',
        name: 'awscdkcloudfrontcustomAwesomePublicKey0E83393B',
      },
    });

    if (awesomePublicKeyEd3e7f55 == null) { throw new Error(`A combination of conditions caused 'awesomePublicKeyEd3e7f55' to be undefined. Fixit.`); }
    const awesomeKeyGroup3Ef8348b = new cloudfront.CfnKeyGroup(this, 'AwesomeKeyGroup3EF8348B', {
      keyGroupConfig: {
        items: [
          awesomePublicKeyEd3e7f55.ref,
        ],
        name: 'awscdkcloudfrontcustomAwesomeKeyGroup73FD4DCA',
      },
    });
  }
}

