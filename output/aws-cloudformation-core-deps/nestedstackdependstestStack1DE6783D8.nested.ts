import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface nestedstackdependstestStack1DE6783D8.nestedProps extends cdk.StackProps {
}

export class nestedstackdependstestStack1DE6783D8.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nestedstackdependstestStack1DE6783D8.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const lambda1ServiceRoleF188c4b8 = new iam.CfnRole(this, 'Lambda1ServiceRoleF188C4B8', {
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

    if (lambda1ServiceRoleF188c4b8 == null) { throw new Error(`A combination of conditions caused 'lambda1ServiceRoleF188c4b8' to be undefined. Fixit.`); }
    const lambda1Db8e9965 = new lambda.CfnFunction(this, 'Lambda1DB8E9965', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: lambda1ServiceRoleF188c4b8.attrArn,
      runtime: 'nodejs18.x',
    });
    lambda1Db8e9965.addDependency(lambda1ServiceRoleF188c4b8);
  }
}

