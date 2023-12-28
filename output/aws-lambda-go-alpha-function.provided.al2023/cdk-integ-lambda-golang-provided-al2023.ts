import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-lambda-golang-provided-al2023Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-lambda-golang-provided-al2023 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-lambda-golang-provided-al2023Props = {}) {
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
    const gohandlerdockerServiceRole70394790 = new iam.CfnRole(this, 'gohandlerdockerServiceRole70394790', {
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

    if (gohandlerdockerServiceRole70394790 == null) { throw new Error(`A combination of conditions caused 'gohandlerdockerServiceRole70394790' to be undefined. Fixit.`); }
    const gohandlerdockerAe04f1b8 = new lambda.CfnFunction(this, 'gohandlerdockerAE04F1B8', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '92cf51642c9fbfef03751059a700f012eb605f85114cafc66e2fb70e37b18c64.zip',
      },
      handler: 'bootstrap',
      role: gohandlerdockerServiceRole70394790.attrArn,
      runtime: 'provided.al2023',
    });
    gohandlerdockerAe04f1b8.addDependency(gohandlerdockerServiceRole70394790);
  }
}

