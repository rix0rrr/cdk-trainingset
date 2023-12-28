import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-lambda-nodejs-latestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-lambda-nodejs-latest extends cdk.Stack {
  public readonly exportsOutputReflatestFe0d80b6c9b17e6b;

  public constructor(scope: cdk.App, id: string, props: cdk-integ-lambda-nodejs-latestProps = {}) {
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
    const latestServiceRole8A40241a = new iam.CfnRole(this, 'latestServiceRole8A40241A', {
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

    if (latestServiceRole8A40241a == null) { throw new Error(`A combination of conditions caused 'latestServiceRole8A40241a' to be undefined. Fixit.`); }
    const latestFe0d80b6 = new lambda.CfnFunction(this, 'latestFE0D80B6', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3c88aacdb6b48767fb52367e6dc0fe01602cfdc730dee4c4e3bebe0cec85ff9e.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: latestServiceRole8A40241a.attrArn,
      runtime: 'nodejs16.x',
    });
    latestFe0d80b6.addDependency(latestServiceRole8A40241a);

    // Outputs
    this.exportsOutputReflatestFe0d80b6c9b17e6b = latestFe0d80b6.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputReflatestFE0D80B6C9B17E6B', {
      key: 'ExportsOutputReflatestFE0D80B6C9B17E6B',
      exportName: 'cdk-integ-lambda-nodejs-latest:ExportsOutputReflatestFE0D80B6C9B17E6B',
      value: this.exportsOutputReflatestFe0d80b6c9b17e6b!.toString(),
    });
  }
}

