import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaNodejsModulesMtsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaNodejsModulesMts extends cdk.Stack {
  public readonly exportsOutputRefmtsentry7Ed0c613550c78d2;

  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaNodejsModulesMtsProps = {}) {
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
    const mtsentryServiceRole1174D60b = new iam.CfnRole(this, 'mtsentryServiceRole1174D60B', {
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

    if (mtsentryServiceRole1174D60b == null) { throw new Error(`A combination of conditions caused 'mtsentryServiceRole1174D60b' to be undefined. Fixit.`); }
    const mtsentry7Ed0c613 = new lambda.CfnFunction(this, 'mtsentry7ED0C613', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '2149a129ab87c93e19bbdbfc0f861cefeee8f1fe360b256c7f66b9bc521c11e3.zip',
      },
      role: mtsentryServiceRole1174D60b.attrArn,
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      runtime: 'nodejs18.x',
    });
    mtsentry7Ed0c613.addDependency(mtsentryServiceRole1174D60b);

    // Outputs
    this.exportsOutputRefmtsentry7Ed0c613550c78d2 = mtsentry7Ed0c613.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmtsentry7ED0C613550C78D2', {
      key: 'ExportsOutputRefmtsentry7ED0C613550C78D2',
      exportName: 'cdk-integ-lambda-nodejs-modules-mts:ExportsOutputRefmtsentry7ED0C613550C78D2',
      value: this.exportsOutputRefmtsentry7Ed0c613550c78d2!.toString(),
    });
  }
}

