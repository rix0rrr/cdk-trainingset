import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface SynthesizeDefaultResourcesProps extends cdk.StackProps {
}

export class SynthesizeDefaultResources extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: SynthesizeDefaultResourcesProps = {}) {
    super(scope, id, props);

    // Resources
    const lambdaecr1copyServiceRole2A9faf5f = new iam.CfnRole(this, 'lambdaecr1copyServiceRole2A9FAF5F', {
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

    const lambdaecrtwoServiceRole13E37f90 = new iam.CfnRole(this, 'lambdaecrtwoServiceRole13E37F90', {
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

    const lambdas3ServiceRoleC9ede33a = new iam.CfnRole(this, 'lambdas3ServiceRoleC9EDE33A', {
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

    if (lambdaecr1copyServiceRole2A9faf5f == null) { throw new Error(`A combination of conditions caused 'lambdaecr1copyServiceRole2A9faf5f' to be undefined. Fixit.`); }
    const lambdaecr1copyD39cde9b = new lambda.CfnFunction(this, 'lambdaecr1copyD39CDE9B', {
      code: {
        imageUri: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/default-resourcesmax/ecr-asset/1:16624c2a162b07c5cc0e2c59c484f638bac238ca558ccbdc2aa0e0535df3e622`,
      },
      packageType: 'Image',
      role: lambdaecr1copyServiceRole2A9faf5f.attrArn,
    });
    lambdaecr1copyD39cde9b.addDependency(lambdaecr1copyServiceRole2A9faf5f);

    if (lambdaecrtwoServiceRole13E37f90 == null) { throw new Error(`A combination of conditions caused 'lambdaecrtwoServiceRole13E37f90' to be undefined. Fixit.`); }
    const lambdaecrtwo03D31db7 = new lambda.CfnFunction(this, 'lambdaecrtwo03D31DB7', {
      code: {
        imageUri: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/default-resourcesmax/ecr-asset-2:16624c2a162b07c5cc0e2c59c484f638bac238ca558ccbdc2aa0e0535df3e622`,
      },
      packageType: 'Image',
      role: lambdaecrtwoServiceRole13E37f90.attrArn,
    });
    lambdaecrtwo03D31db7.addDependency(lambdaecrtwoServiceRole13E37f90);

    if (lambdas3ServiceRoleC9ede33a == null) { throw new Error(`A combination of conditions caused 'lambdas3ServiceRoleC9ede33a' to be undefined. Fixit.`); }
    const lambdas342Ce2bbd = new lambda.CfnFunction(this, 'lambdas342CE2BBD', {
      code: {
        s3Bucket: `cdk-default-resourcesmax-staging-${this.account}-${this.region}`,
        s3Key: 'deploy-time/68539effc3f7ad46fff9765606c2a01b7f7965833643ab37e62799f19a37f650.zip',
      },
      handler: 'index.handler',
      role: lambdas3ServiceRoleC9ede33a.attrArn,
      runtime: 'python3.10',
    });
    lambdas342Ce2bbd.addDependency(lambdas3ServiceRoleC9ede33a);
  }
}

