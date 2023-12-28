import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface nestedstackdependstestStack2A36722CF.nestedProps extends cdk.StackProps {
}

export class nestedstackdependstestStack2A36722CF.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstackdependstestStack2A36722CF.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const lambda2ServiceRole31A072e1 = new iam.CfnRole(this, 'Lambda2ServiceRole31A072E1', {
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

    if (lambda2ServiceRole31A072e1 == null) { throw new Error(`A combination of conditions caused 'lambda2ServiceRole31A072e1' to be undefined. Fixit.`); }
    const lambda217Cfb423 = new lambda.CfnFunction(this, 'Lambda217CFB423', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: lambda2ServiceRole31A072e1.attrArn,
      runtime: 'nodejs18.x',
    });
    lambda217Cfb423.addDependency(lambda2ServiceRole31A072e1);
  }
}

