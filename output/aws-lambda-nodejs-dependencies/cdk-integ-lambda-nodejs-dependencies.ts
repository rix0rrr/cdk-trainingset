import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-lambda-nodejs-dependenciesProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-lambda-nodejs-dependencies extends cdk.Stack {
  public readonly exportsOutputRefexternal068F12d12c72a375;

  public constructor(scope: cdk.App, id: string, props: cdk-integ-lambda-nodejs-dependenciesProps = {}) {
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
    const externalServiceRole85A00a90 = new iam.CfnRole(this, 'externalServiceRole85A00A90', {
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

    if (externalServiceRole85A00a90 == null) { throw new Error(`A combination of conditions caused 'externalServiceRole85A00a90' to be undefined. Fixit.`); }
    const external068F12d1 = new lambda.CfnFunction(this, 'external068F12D1', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'c7937690d1d588b8d91f5f71328142498813c7e04ad7f0da1bb807f0e7ee29a1.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: externalServiceRole85A00a90.attrArn,
      runtime: 'nodejs18.x',
    });
    external068F12d1.addDependency(externalServiceRole85A00a90);

    // Outputs
    this.exportsOutputRefexternal068F12d12c72a375 = external068F12d1.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefexternal068F12D12C72A375', {
      key: 'ExportsOutputRefexternal068F12D12C72A375',
      exportName: 'cdk-integ-lambda-nodejs-dependencies:ExportsOutputRefexternal068F12D12C72A375',
      value: this.exportsOutputRefexternal068F12d12c72a375!.toString(),
    });
  }
}

