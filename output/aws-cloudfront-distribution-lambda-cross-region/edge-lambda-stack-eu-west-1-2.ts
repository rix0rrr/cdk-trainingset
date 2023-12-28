import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface edge-lambda-stack-eu-west-1-2Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class edge-lambda-stack-eu-west-1-2 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: edge-lambda-stack-eu-west-1-2Props = {}) {
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
    const lambda2ServiceRole31A072e1 = new iam.CfnRole(this, 'Lambda2ServiceRole31A072E1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: [
                'edgelambda.amazonaws.com',
                'lambda.amazonaws.com',
              ],
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

    if (lambda217Cfb423 == null) { throw new Error(`A combination of conditions caused 'lambda217Cfb423' to be undefined. Fixit.`); }
    const lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d = new lambda.CfnVersion(this, 'Lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d', {
      functionName: lambda217Cfb423.ref,
    });

    if (lambda217Cfb423 == null) { throw new Error(`A combination of conditions caused 'lambda217Cfb423' to be undefined. Fixit.`); }
    if (lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d == null) { throw new Error(`A combination of conditions caused 'lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d' to be undefined. Fixit.`); }
    const lambda2Aliaslive77F6085f = new lambda.CfnAlias(this, 'Lambda2Aliaslive77F6085F', {
      functionName: lambda217Cfb423.ref,
      functionVersion: lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d.attrVersion,
      name: 'live',
    });

    if (lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d == null) { throw new Error(`A combination of conditions caused 'lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d' to be undefined. Fixit.`); }
    const lambda2Parameter3444E17a = new ssm.CfnParameter(this, 'Lambda2Parameter3444E17A', {
      name: '/cdk/EdgeFunctionArn/eu-west-1/integ-distribution-lambda-cross-region/Lambda2',
      type: 'String',
      value: lambda2CurrentVersion72012B7448e7ccb012bdf87615c944d94691ab6d.ref,
    });
  }
}

