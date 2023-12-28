import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface FunctionStackProps extends cdk.StackProps {
}

export class FunctionStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: FunctionStackProps = {}) {
    super(scope, id, props);

    // Resources
    const echoServiceRoleBe28060b = new iam.CfnRole(this, 'EchoServiceRoleBE28060B', {
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

    if (echoServiceRoleBe28060b == null) { throw new Error(`A combination of conditions caused 'echoServiceRoleBe28060b' to be undefined. Fixit.`); }
    const echo11F3fb29 = new lambda.CfnFunction(this, 'Echo11F3FB29', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    /* eslint-disable no-console */\n    console.log(\'====================================================\');\n    console.log(JSON.stringify(event, undefined, 2));\n    console.log(\'====================================================\');\n    return callback(undefined, event);\n}',
      },
      role: echoServiceRoleBe28060b.attrArn,
      handler: 'index.handler',
      runtime: 'nodejs14.x',
    });
    echo11F3fb29.addDependency(echoServiceRoleBe28060b);

    if (echo11F3fb29 == null) { throw new Error(`A combination of conditions caused 'echo11F3fb29' to be undefined. Fixit.`); }
    const echoAllowInvokeTopicStackMyTopicC43e67af32cf6efa = new lambda.CfnPermission(this, 'EchoAllowInvokeTopicStackMyTopicC43E67AF32CF6EFA', {
      action: 'lambda:InvokeFunction',
      functionName: echo11F3fb29.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':sns:us-east-1:12345678:topicstackopicstackmytopicc43e67afb24f28bb94f9',
      ].join(''),
    });

    if (echo11F3fb29 == null) { throw new Error(`A combination of conditions caused 'echo11F3fb29' to be undefined. Fixit.`); }
    const echoMyTopic4Cb8819e = new sns.CfnSubscription(this, 'EchoMyTopic4CB8819E', {
      protocol: 'lambda',
      topicArn: [
        'arn:',
        this.partition,
        ':sns:us-east-1:12345678:topicstackopicstackmytopicc43e67afb24f28bb94f9',
      ].join(''),
      endpoint: echo11F3fb29.attrArn,
      region: 'us-east-1',
    });
  }
}

