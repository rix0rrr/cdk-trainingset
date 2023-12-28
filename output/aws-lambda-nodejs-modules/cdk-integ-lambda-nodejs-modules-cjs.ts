import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaNodejsModulesCjsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaNodejsModulesCjs extends cdk.Stack {
  public readonly exportsOutputRefcjsentry878440591D57a63c;

  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaNodejsModulesCjsProps = {}) {
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
    const cjsentryServiceRole2A625525 = new iam.CfnRole(this, 'cjsentryServiceRole2A625525', {
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

    if (cjsentryServiceRole2A625525 == null) { throw new Error(`A combination of conditions caused 'cjsentryServiceRole2A625525' to be undefined. Fixit.`); }
    const cjsentry87844059 = new lambda.CfnFunction(this, 'cjsentry87844059', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '28de77e42ea798836445f0dd73c84320861bfe911d58e603bee8767c2d6e9e8a.zip',
      },
      role: cjsentryServiceRole2A625525.attrArn,
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      runtime: 'nodejs18.x',
    });
    cjsentry87844059.addDependency(cjsentryServiceRole2A625525);

    // Outputs
    this.exportsOutputRefcjsentry878440591D57a63c = cjsentry87844059.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefcjsentry878440591D57A63C', {
      key: 'ExportsOutputRefcjsentry878440591D57A63C',
      exportName: 'cdk-integ-lambda-nodejs-modules-cjs:ExportsOutputRefcjsentry878440591D57A63C',
      value: this.exportsOutputRefcjsentry878440591D57a63c!.toString(),
    });
  }
}

