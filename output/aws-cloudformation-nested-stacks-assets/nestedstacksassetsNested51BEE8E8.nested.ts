import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface nestedstacksassetsNested51BEE8E8.nestedProps extends cdk.StackProps {
}

export class nestedstacksassetsNested51BEE8E8.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstacksassetsNested51BEE8E8.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const handlerServiceRoleFcdc14ae = new iam.CfnRole(this, 'HandlerServiceRoleFCDC14AE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (handlerServiceRoleFcdc14ae == null) { throw new Error(`A combination of conditions caused 'handlerServiceRoleFcdc14ae' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'bbe209afddb09a12327bab7a105e085758a29b769b5b4bf5b6320ac41b05fc51.zip',
      },
      handler: 'index.handler',
      role: handlerServiceRoleFcdc14ae.attrArn,
      runtime: 'nodejs18.x',
    });
    handler886Cb40b.addDependency(handlerServiceRoleFcdc14ae);
  }
}

