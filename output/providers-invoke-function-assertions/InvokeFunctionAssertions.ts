import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface InvokeFunctionAssertionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class InvokeFunctionAssertions extends cdk.Stack {
  public readonly exportsOutputRefTargetFunc08E2afd9bd39cdae;

  public constructor(scope: cdk.App, id: string, props: InvokeFunctionAssertionsProps = {}) {
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
    const targetFuncServiceRoleD60c6577 = new iam.CfnRole(this, 'TargetFuncServiceRoleD60C6577', {
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

    if (targetFuncServiceRoleD60c6577 == null) { throw new Error(`A combination of conditions caused 'targetFuncServiceRoleD60c6577' to be undefined. Fixit.`); }
    const targetFunc08E2afd9 = new lambda.CfnFunction(this, 'TargetFunc08E2AFD9', {
      code: {
        zipFile: 'exports.handler = async (event, context) => { return { foo: \"bar\" }; };',
      },
      handler: 'index.handler',
      role: targetFuncServiceRoleD60c6577.attrArn,
      runtime: 'nodejs18.x',
    });
    targetFunc08E2afd9.addDependency(targetFuncServiceRoleD60c6577);

    // Outputs
    this.exportsOutputRefTargetFunc08E2afd9bd39cdae = targetFunc08E2afd9.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefTargetFunc08E2AFD9BD39CDAE', {
      key: 'ExportsOutputRefTargetFunc08E2AFD9BD39CDAE',
      exportName: 'InvokeFunctionAssertions:ExportsOutputRefTargetFunc08E2AFD9BD39CDAE',
      value: this.exportsOutputRefTargetFunc08E2afd9bd39cdae!.toString(),
    });
  }
}

