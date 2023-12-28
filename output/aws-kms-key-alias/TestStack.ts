import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface TestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestStackProps = {}) {
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
    const keyFedd6ec0 = new kms.CfnKey(this, 'keyFEDD6EC0', {
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
    });
    keyFedd6ec0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (keyFedd6ec0 == null) { throw new Error(`A combination of conditions caused 'keyFedd6ec0' to be undefined. Fixit.`); }
    const keyAliasCeb16df2 = new kms.CfnAlias(this, 'keyAliasCEB16DF2', {
      aliasName: [
        'alias/MyKey',
        this.account,
      ].join(''),
      targetKeyId: keyFedd6ec0.attrArn,
    });
  }
}

