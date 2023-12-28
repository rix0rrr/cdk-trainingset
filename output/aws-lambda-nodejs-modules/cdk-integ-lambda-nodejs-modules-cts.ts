import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaNodejsModulesCtsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaNodejsModulesCts extends cdk.Stack {
  public readonly exportsOutputRefctsentryFe3e09c5ebce847b;

  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaNodejsModulesCtsProps = {}) {
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
    const ctsentryServiceRole93F225d5 = new iam.CfnRole(this, 'ctsentryServiceRole93F225D5', {
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

    if (ctsentryServiceRole93F225d5 == null) { throw new Error(`A combination of conditions caused 'ctsentryServiceRole93F225d5' to be undefined. Fixit.`); }
    const ctsentryFe3e09c5 = new lambda.CfnFunction(this, 'ctsentryFE3E09C5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3df927e5941c39836eafe07496dc13c1c6935e59b0490249af5b05a1becfb7ab.zip',
      },
      role: ctsentryServiceRole93F225d5.attrArn,
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      runtime: 'nodejs18.x',
    });
    ctsentryFe3e09c5.addDependency(ctsentryServiceRole93F225d5);

    // Outputs
    this.exportsOutputRefctsentryFe3e09c5ebce847b = ctsentryFe3e09c5.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefctsentryFE3E09C5EBCE847B', {
      key: 'ExportsOutputRefctsentryFE3E09C5EBCE847B',
      exportName: 'cdk-integ-lambda-nodejs-modules-cts:ExportsOutputRefctsentryFE3E09C5EBCE847B',
      value: this.exportsOutputRefctsentryFe3e09c5ebce847b!.toString(),
    });
  }
}

