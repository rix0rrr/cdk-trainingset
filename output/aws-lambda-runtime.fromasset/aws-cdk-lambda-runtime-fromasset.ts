import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkLambdaRuntimeFromassetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambdaRuntimeFromasset extends cdk.Stack {
  public readonly exportsOutputRefMyFunction3Baa72d119002d92;

  public constructor(scope: cdk.App, id: string, props: AwsCdkLambdaRuntimeFromassetProps = {}) {
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
    const myFunctionServiceRole3C357ff2 = new iam.CfnRole(this, 'MyFunctionServiceRole3C357FF2', {
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

    if (myFunctionServiceRole3C357ff2 == null) { throw new Error(`A combination of conditions caused 'myFunctionServiceRole3C357ff2' to be undefined. Fixit.`); }
    const myFunction3Baa72d1 = new lambda.CfnFunction(this, 'MyFunction3BAA72D1', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'ff6ca8da1c8c599aa9f53b242d0e817f8a336ad653e62805a13a5ad46ea7ebe1.zip',
      },
      handler: 'com.mycompany.app.LambdaMethodHandler::handleRequest',
      role: myFunctionServiceRole3C357ff2.attrArn,
      runtime: 'java21',
    });
    myFunction3Baa72d1.addDependency(myFunctionServiceRole3C357ff2);

    // Outputs
    this.exportsOutputRefMyFunction3Baa72d119002d92 = myFunction3Baa72d1.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyFunction3BAA72D119002D92', {
      key: 'ExportsOutputRefMyFunction3BAA72D119002D92',
      exportName: 'aws-cdk-lambda-runtime-fromasset:ExportsOutputRefMyFunction3BAA72D119002D92',
      value: this.exportsOutputRefMyFunction3Baa72d119002d92!.toString(),
    });
  }
}

