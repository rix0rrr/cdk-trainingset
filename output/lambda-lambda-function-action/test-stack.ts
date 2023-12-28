import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface TestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestStackProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const myFunctionServiceRole3C357ff2 = new iam.CfnRole(this, 'MyFunctionServiceRole3C357FF2', {
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

    if (myFunctionServiceRole3C357ff2 == null) { throw new Error(`A combination of conditions caused 'myFunctionServiceRole3C357ff2' to be undefined. Fixit.`); }
    const myFunction3Baa72d1 = new lambda.CfnFunction(this, 'MyFunction3BAA72D1', {
      code: {
        zipFile: '\n        exports.handler = (event) => {\n          console.log(\"It is test for lambda action of AWS IoT Rule.\", event);\n        };\"',
      },
      handler: 'index.handler',
      role: myFunctionServiceRole3C357ff2.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunction3Baa72d1.addDependency(myFunctionServiceRole3C357ff2);

    if (myFunction3Baa72d1 == null) { throw new Error(`A combination of conditions caused 'myFunction3Baa72d1' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            lambda: {
              functionArn: myFunction3Baa72d1.attrArn,
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT topic(2) as device_id, timestamp() as timestamp, temperature FROM \'device/+/data\'',
      },
    });

    if (myFunction3Baa72d1 == null) { throw new Error(`A combination of conditions caused 'myFunction3Baa72d1' to be undefined. Fixit.`); }
    if (topicRule40A4ea44 == null) { throw new Error(`A combination of conditions caused 'topicRule40A4ea44' to be undefined. Fixit.`); }
    const myFunctionteststackTopicRule1Cb8242fIotLambdaFunctionAction37A1a89f = new lambda.CfnPermission(this, 'MyFunctionteststackTopicRule1CB8242FIotLambdaFunctionAction37A1A89F', {
      action: 'lambda:InvokeFunction',
      functionName: myFunction3Baa72d1.attrArn,
      principal: 'iot.amazonaws.com',
      sourceAccount: this.account,
      sourceArn: topicRule40A4ea44.attrArn,
    });
  }
}

