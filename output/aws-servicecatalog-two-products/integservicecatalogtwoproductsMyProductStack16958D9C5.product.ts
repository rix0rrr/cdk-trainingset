import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integservicecatalogtwoproductsMyProductStack16958D9C5.productProps extends cdk.StackProps {
}

export class integservicecatalogtwoproductsMyProductStack16958D9C5.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogtwoproductsMyProductStack16958D9C5.productProps = {}) {
    super(scope, id, props);

    // Resources
    const helloHandlerServiceRole11Ef7c63 = new iam.CfnRole(this, 'HelloHandlerServiceRole11EF7C63', {
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

    if (helloHandlerServiceRole11Ef7c63 == null) { throw new Error(`A combination of conditions caused 'helloHandlerServiceRole11Ef7c63' to be undefined. Fixit.`); }
    const helloHandler2E4fba4d = new lambda.CfnFunction(this, 'HelloHandler2E4FBA4D', {
      code: {
        s3Bucket: 'product-stack-asset-bucket-12345678-test-region',
        s3Key: 'd3833f63e813b3a96ea04c8c50ca98209330867f5f6ac358efca11f85a3476c2.zip',
      },
      handler: 'index.handler',
      role: helloHandlerServiceRole11Ef7c63.attrArn,
      runtime: 'python3.9',
    });
    helloHandler2E4fba4d.addDependency(helloHandlerServiceRole11Ef7c63);
  }
}

