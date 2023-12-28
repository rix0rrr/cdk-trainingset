import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface TeststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Teststack extends cdk.Stack {
  public readonly exportsOutputRefFunction76856677C48862d5;

  public constructor(scope: cdk.App, id: string, props: TeststackProps = {}) {
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
    const functionServiceRole675Bb04a = new iam.CfnRole(this, 'FunctionServiceRole675BB04A', {
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

    if (functionServiceRole675Bb04a == null) { throw new Error(`A combination of conditions caused 'functionServiceRole675Bb04a' to be undefined. Fixit.`); }
    const function76856677 = new lambda.CfnFunction(this, 'Function76856677', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '955124673880e20bd4e41d523bef58eb74503a0f574604d9ef9a6bd2c84336d6.zip',
      },
      role: functionServiceRole675Bb04a.attrArn,
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      runtime: 'nodejs18.x',
    });
    function76856677.addDependency(functionServiceRole675Bb04a);

    // Outputs
    this.exportsOutputRefFunction76856677C48862d5 = function76856677.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefFunction76856677C48862D5', {
      key: 'ExportsOutputRefFunction76856677C48862D5',
      exportName: 'TestStack:ExportsOutputRefFunction76856677C48862D5',
      value: this.exportsOutputRefFunction76856677C48862d5!.toString(),
    });
  }
}

