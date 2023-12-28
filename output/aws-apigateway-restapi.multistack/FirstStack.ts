import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface FirstStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class FirstStack extends cdk.Stack {
  public readonly exportsOutputFnGetAttfirstLambda395F9adeArn1A9b3bc3;

  public constructor(scope: cdk.App, id: string, props: FirstStackProps = {}) {
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
    const firstLambdaServiceRoleB6408c31 = new iam.CfnRole(this, 'firstLambdaServiceRoleB6408C31', {
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

    if (firstLambdaServiceRoleB6408c31 == null) { throw new Error(`A combination of conditions caused 'firstLambdaServiceRoleB6408c31' to be undefined. Fixit.`); }
    const firstLambda395F9ade = new lambda.CfnFunction(this, 'firstLambda395F9ADE', {
      code: {
        zipFile: 'exports.handler = async function(event) {\n          return  {\n            \'headers\': { \'Content-Type\': \'text/plain\' },\n            \'statusCode\': 200\n          }\n        }',
      },
      role: firstLambdaServiceRoleB6408c31.attrArn,
      functionName: 'FirstLambda',
      handler: 'index.handler',
      runtime: 'nodejs14.x',
    });
    firstLambda395F9ade.addDependency(firstLambdaServiceRoleB6408c31);

    // Outputs
    this.exportsOutputFnGetAttfirstLambda395F9adeArn1A9b3bc3 = firstLambda395F9ade.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3', {
      key: 'ExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3',
      exportName: 'FirstStack:ExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3',
      value: this.exportsOutputFnGetAttfirstLambda395F9adeArn1A9b3bc3!.toString(),
    });
  }
}

