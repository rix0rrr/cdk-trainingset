import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface UseStackProps extends cdk.StackProps {
}

export class UseStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: UseStackProps = {}) {
    super(scope, id, props);

    // Resources
    const alias325C5727 = new kms.CfnAlias(this, 'Alias325C5727', {
      aliasName: 'alias/foo',
      targetKeyId: cdk.Fn.importValue('KeyStack:ExportsOutputFnGetAttMyKey6AB29FA6Arn4FA82736'),
    });
  }
}

