import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-lambda-python-functionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-lambda-python-function extends cdk.Stack {
  public readonly defaultFunctionArn;
  public readonly functionArnWithExcludes;
  public readonly functionWithCustomPypi;
  public readonly exportsOutputRefmyhandlerD202fa8e369e8804;
  public readonly exportsOutputRefmyhandlerexcludes0437E0d23d81f234;
  public readonly exportsOutputRefmyhandlerpypiBadba141a80e83f9;

  public constructor(scope: cdk.App, id: string, props: integ-lambda-python-functionProps = {}) {
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

    const myhandlerexcludesServiceRoleBb475dcc = new iam.CfnRole(this, 'myhandlerexcludesServiceRoleBB475DCC', {
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

    const myhandlerpypiServiceRoleF3cdf4f9 = new iam.CfnRole(this, 'myhandlerpypiServiceRoleF3CDF4F9', {
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
        s3Key: '130f332ecdd8088282adfd41a4353e2fb2951c24281cd5f91470230f6b82841f.zip',
      },
      handler: 'index.handler',
      role: myhandlerServiceRole77891068.attrArn,
      runtime: 'python3.9',
    });
    myhandlerD202fa8e.addDependency(myhandlerServiceRole77891068);

    if (myhandlerexcludesServiceRoleBb475dcc == null) { throw new Error(`A combination of conditions caused 'myhandlerexcludesServiceRoleBb475dcc' to be undefined. Fixit.`); }
    const myhandlerexcludes0437E0d2 = new lambda.CfnFunction(this, 'myhandlerexcludes0437E0D2', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f425d7725431bdf99c0da5f07fb530e0dd3d8fcaef1a105adfc15e05c0670d2c.zip',
      },
      handler: 'index.handler',
      role: myhandlerexcludesServiceRoleBb475dcc.attrArn,
      runtime: 'python3.9',
    });
    myhandlerexcludes0437E0d2.addDependency(myhandlerexcludesServiceRoleBb475dcc);

    if (myhandlerpypiServiceRoleF3cdf4f9 == null) { throw new Error(`A combination of conditions caused 'myhandlerpypiServiceRoleF3cdf4f9' to be undefined. Fixit.`); }
    const myhandlerpypiBadba141 = new lambda.CfnFunction(this, 'myhandlerpypiBADBA141', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'e1453d72dc45873ddf9323c37715423413cdfd3506485238f1f9ce965a3b2d2e.zip',
      },
      handler: 'index.handler',
      role: myhandlerpypiServiceRoleF3cdf4f9.attrArn,
      runtime: 'python3.9',
    });
    myhandlerpypiBadba141.addDependency(myhandlerpypiServiceRoleF3cdf4f9);

    // Outputs
    this.defaultFunctionArn = myhandlerD202fa8e.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputDefaultFunctionArn', {
      key: 'DefaultFunctionArn',
      value: this.defaultFunctionArn!.toString(),
    });
    this.functionArnWithExcludes = myhandlerexcludes0437E0d2.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputFunctionArnWithExcludes', {
      key: 'FunctionArnWithExcludes',
      value: this.functionArnWithExcludes!.toString(),
    });
    this.functionWithCustomPypi = myhandlerpypiBadba141.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputfunctionWithCustomPypi', {
      key: 'functionWithCustomPypi',
      value: this.functionWithCustomPypi!.toString(),
    });
    this.exportsOutputRefmyhandlerD202fa8e369e8804 = myhandlerD202fa8e.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerD202FA8E369E8804', {
      key: 'ExportsOutputRefmyhandlerD202FA8E369E8804',
      exportName: 'integ-lambda-python-function:ExportsOutputRefmyhandlerD202FA8E369E8804',
      value: this.exportsOutputRefmyhandlerD202fa8e369e8804!.toString(),
    });
    this.exportsOutputRefmyhandlerexcludes0437E0d23d81f234 = myhandlerexcludes0437E0d2.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerexcludes0437E0D23D81F234', {
      key: 'ExportsOutputRefmyhandlerexcludes0437E0D23D81F234',
      exportName: 'integ-lambda-python-function:ExportsOutputRefmyhandlerexcludes0437E0D23D81F234',
      value: this.exportsOutputRefmyhandlerexcludes0437E0d23d81f234!.toString(),
    });
    this.exportsOutputRefmyhandlerpypiBadba141a80e83f9 = myhandlerpypiBadba141.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerpypiBADBA141A80E83F9', {
      key: 'ExportsOutputRefmyhandlerpypiBADBA141A80E83F9',
      exportName: 'integ-lambda-python-function:ExportsOutputRefmyhandlerpypiBADBA141A80E83F9',
      value: this.exportsOutputRefmyhandlerpypiBadba141a80e83f9!.toString(),
    });
  }
}

