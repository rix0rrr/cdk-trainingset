import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaNodejsEsmProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaNodejsEsm extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaNodejsEsmProps = {}) {
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
    const esmServiceRole84Ac2522 = new iam.CfnRole(this, 'esmServiceRole84AC2522', {
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

    if (esmServiceRole84Ac2522 == null) { throw new Error(`A combination of conditions caused 'esmServiceRole84Ac2522' to be undefined. Fixit.`); }
    const esm9B397d27 = new lambda.CfnFunction(this, 'esm9B397D27', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b1fe61f2900194572e27cce06c685324999fd8e34728c4ffc45e81f234b79e3f.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: esmServiceRole84Ac2522.attrArn,
      runtime: 'nodejs18.x',
    });
    esm9B397d27.addDependency(esmServiceRole84Ac2522);
  }
}

