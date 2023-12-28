import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface KeyStackProps extends cdk.StackProps {
}

export class KeyStack extends cdk.Stack {
  public readonly exportsOutputFnGetAttMyKey6Ab29fa6Arn4Fa82736;

  public constructor(scope: cdk.App, id: string, props: KeyStackProps = {}) {
    super(scope, id, props);

    // Resources
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
        ],
        Version: '2012-10-17',
      },
    });
    myKey6Ab29fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.exportsOutputFnGetAttMyKey6Ab29fa6Arn4Fa82736 = myKey6Ab29fa6.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttMyKey6AB29FA6Arn4FA82736', {
      key: 'ExportsOutputFnGetAttMyKey6AB29FA6Arn4FA82736',
      exportName: 'KeyStack:ExportsOutputFnGetAttMyKey6AB29FA6Arn4FA82736',
      value: this.exportsOutputFnGetAttMyKey6Ab29fa6Arn4Fa82736!.toString(),
    });
  }
}

