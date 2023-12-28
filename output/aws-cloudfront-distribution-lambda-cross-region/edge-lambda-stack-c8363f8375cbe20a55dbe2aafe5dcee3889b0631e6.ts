import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface edge-lambda-stack-c8363f8375cbe20a55dbe2aafe5dcee3889b0631e6Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class edge-lambda-stack-c8363f8375cbe20a55dbe2aafe5dcee3889b0631e6 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: edge-lambda-stack-c8363f8375cbe20a55dbe2aafe5dcee3889b0631e6Props = {}) {
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
    const lambdaServiceRoleA8ed4d3b = new iam.CfnRole(this, 'LambdaServiceRoleA8ED4D3B', {
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

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    const lambdaD247545b = new lambda.CfnFunction(this, 'LambdaD247545B', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: lambdaServiceRoleA8ed4d3b.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaD247545b.addDependency(lambdaServiceRoleA8ed4d3b);

    if (lambdaD247545b == null) { throw new Error(`A combination of conditions caused 'lambdaD247545b' to be undefined. Fixit.`); }
    const lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05 = new lambda.CfnVersion(this, 'LambdaCurrentVersionDF706F6Aceabca74f785ac2be6cd5e57eeaf3b05', {
      functionName: lambdaD247545b.ref,
    });

    if (lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05 == null) { throw new Error(`A combination of conditions caused 'lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05' to be undefined. Fixit.`); }
    if (lambdaD247545b == null) { throw new Error(`A combination of conditions caused 'lambdaD247545b' to be undefined. Fixit.`); }
    const lambdaAliaslive79C8a712 = new lambda.CfnAlias(this, 'LambdaAliaslive79C8A712', {
      functionName: lambdaD247545b.ref,
      functionVersion: lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05.attrVersion,
      name: 'live',
    });

    if (lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05 == null) { throw new Error(`A combination of conditions caused 'lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05' to be undefined. Fixit.`); }
    const lambdaParameterCdcffb68 = new ssm.CfnParameter(this, 'LambdaParameterCDCFFB68', {
      name: '/cdk/EdgeFunctionArn/eu-west-1/integ-distribution-lambda-cross-region/Lambda',
      type: 'String',
      value: lambdaCurrentVersionDf706f6Aceabca74f785ac2be6cd5e57eeaf3b05.ref,
    });
  }
}

