import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-lambda-nodejs-dependencies-for-sdk-v3Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-lambda-nodejs-dependencies-for-sdk-v3 extends cdk.Stack {
  public readonly exportsOutputRefexternalsdkv3B69f9d996acdf2e7;

  public constructor(scope: cdk.App, id: string, props: cdk-integ-lambda-nodejs-dependencies-for-sdk-v3Props = {}) {
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
    const externalsdkv3ServiceRole9C835365 = new iam.CfnRole(this, 'externalsdkv3ServiceRole9C835365', {
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

    if (externalsdkv3ServiceRole9C835365 == null) { throw new Error(`A combination of conditions caused 'externalsdkv3ServiceRole9C835365' to be undefined. Fixit.`); }
    const externalsdkv3B69f9d99 = new lambda.CfnFunction(this, 'externalsdkv3B69F9D99', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f3b52c9ad5bbed49f33611a5c250aeacc78f264984e08b98abc221300022e69c.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: externalsdkv3ServiceRole9C835365.attrArn,
      runtime: 'nodejs18.x',
    });
    externalsdkv3B69f9d99.addDependency(externalsdkv3ServiceRole9C835365);

    // Outputs
    this.exportsOutputRefexternalsdkv3B69f9d996acdf2e7 = externalsdkv3B69f9d99.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefexternalsdkv3B69F9D996ACDF2E7', {
      key: 'ExportsOutputRefexternalsdkv3B69F9D996ACDF2E7',
      exportName: 'cdk-integ-lambda-nodejs-dependencies-for-sdk-v3:ExportsOutputRefexternalsdkv3B69F9D996ACDF2E7',
      value: this.exportsOutputRefexternalsdkv3B69f9d996acdf2e7!.toString(),
    });
  }
}

