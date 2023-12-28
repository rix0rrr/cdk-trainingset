import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integservicecatalogproductencryptedassetS3AssetProductF5835286.productProps extends cdk.StackProps {
}

export class integservicecatalogproductencryptedassetS3AssetProductF5835286.product extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integservicecatalogproductencryptedassetS3AssetProductF5835286.productProps = {}) {
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

