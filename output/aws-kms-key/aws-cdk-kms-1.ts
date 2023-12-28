import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface AwsCdkKms1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkKms1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkKms1Props = {}) {
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
    const asymmetricKey26Bbc514 = new kms.CfnKey(this, 'AsymmetricKey26BBC514', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
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
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      keySpec: 'ECC_NIST_P256',
      keyUsage: 'SIGN_VERIFY',
    });
    asymmetricKey26Bbc514.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myKey6Ab29fa6 = new kms.CfnKey(this, 'MyKey6AB29FA6', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
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
            Resource: '*',
          },
          {
            Action: 'kms:encrypt',
            Effect: 'Allow',
            Principal: {
              AWS: this.account,
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    myKey6Ab29fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myKey6Ab29fa6 == null) { throw new Error(`A combination of conditions caused 'myKey6Ab29fa6' to be undefined. Fixit.`); }
    const myKeyAlias1B45d9da = new kms.CfnAlias(this, 'MyKeyAlias1B45D9DA', {
      aliasName: 'alias/bar',
      targetKeyId: myKey6Ab29fa6.attrArn,
    });
  }
}

