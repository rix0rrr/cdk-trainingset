import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integservicecatalogtwoproductsMyProductStack25090BCC2.productProps extends cdk.StackProps {
}

export class integservicecatalogtwoproductsMyProductStack25090BCC2.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogtwoproductsMyProductStack25090BCC2.productProps = {}) {
    super(scope, id, props);

    // Resources
    const helloHandler2ServiceRole37B1402d = new iam.CfnRole(this, 'HelloHandler2ServiceRole37B1402D', {
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

    if (helloHandler2ServiceRole37B1402d == null) { throw new Error(`A combination of conditions caused 'helloHandler2ServiceRole37B1402d' to be undefined. Fixit.`); }
    const helloHandler2109B0120 = new lambda.CfnFunction(this, 'HelloHandler2109B0120', {
      code: {
        s3Bucket: 'product-stack-asset-bucket-12345678-test-region',
        s3Key: 'e2204c9fddfc339ea362dec9143b4c22f883d4c18dd38c456f8f6a7161c1073d.zip',
      },
      handler: 'index.handler',
      role: helloHandler2ServiceRole37B1402d.attrArn,
      runtime: 'python3.9',
    });
    helloHandler2109B0120.addDependency(helloHandler2ServiceRole37B1402d);
  }
}

