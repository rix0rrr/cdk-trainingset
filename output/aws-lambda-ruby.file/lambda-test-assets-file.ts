import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface lambda-test-assets-fileProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class lambda-test-assets-file extends cdk.Stack {
  public readonly exportsOutputRefMyRubyLambdaAfed834fc50afb5f;

  public constructor(scope: cdk.App, id: string, props: lambda-test-assets-fileProps = {}) {
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
    const myRubyLambdaServiceRoleDc227070 = new iam.CfnRole(this, 'MyRubyLambdaServiceRoleDC227070', {
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

    if (myRubyLambdaServiceRoleDc227070 == null) { throw new Error(`A combination of conditions caused 'myRubyLambdaServiceRoleDc227070' to be undefined. Fixit.`); }
    const myRubyLambdaAfed834f = new lambda.CfnFunction(this, 'MyRubyLambdaAFED834F', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b9d265a7298dcf7774794746a1aac25ee61dc998230526747e062aeaff88af86.zip',
      },
      role: myRubyLambdaServiceRoleDc227070.attrArn,
      handler: 'index.main',
      runtime: 'ruby3.2',
    });
    myRubyLambdaAfed834f.addDependency(myRubyLambdaServiceRoleDc227070);

    // Outputs
    this.exportsOutputRefMyRubyLambdaAfed834fc50afb5f = myRubyLambdaAfed834f.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyRubyLambdaAFED834FC50AFB5F', {
      key: 'ExportsOutputRefMyRubyLambdaAFED834FC50AFB5F',
      exportName: 'lambda-test-assets-file:ExportsOutputRefMyRubyLambdaAFED834FC50AFB5F',
      value: this.exportsOutputRefMyRubyLambdaAfed834fc50afb5f!.toString(),
    });
  }
}

