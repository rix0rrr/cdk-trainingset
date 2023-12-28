import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-lambda-python-nodepsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-lambda-python-nodeps extends cdk.Stack {
  public readonly functionArn;
  public readonly exportsOutputRefmyhandlerD202fa8e369e8804;

  public constructor(scope: cdk.App, id: string, props: integ-lambda-python-nodepsProps = {}) {
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
    const myhandlerServiceRole77891068 = new iam.CfnRole(this, 'myhandlerServiceRole77891068', {
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

    if (myhandlerServiceRole77891068 == null) { throw new Error(`A combination of conditions caused 'myhandlerServiceRole77891068' to be undefined. Fixit.`); }
    const myhandlerD202fa8e = new lambda.CfnFunction(this, 'myhandlerD202FA8E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '12865c7bd1f821f245cacee7dc33770eae9ee5949892a310a41215c18f7981ba.zip',
      },
      role: myhandlerServiceRole77891068.attrArn,
      handler: 'index.handler',
      runtime: 'python3.8',
    });
    myhandlerD202fa8e.addDependency(myhandlerServiceRole77891068);

    // Outputs
    this.functionArn = myhandlerD202fa8e.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputFunctionArn', {
      key: 'FunctionArn',
      value: this.functionArn!.toString(),
    });
    this.exportsOutputRefmyhandlerD202fa8e369e8804 = myhandlerD202fa8e.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerD202FA8E369E8804', {
      key: 'ExportsOutputRefmyhandlerD202FA8E369E8804',
      exportName: 'integ-lambda-python-nodeps:ExportsOutputRefmyhandlerD202FA8E369E8804',
      value: this.exportsOutputRefmyhandlerD202fa8e369e8804!.toString(),
    });
  }
}

