import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface IntegLambdaPythonPipenvProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegLambdaPythonPipenv extends cdk.Stack {
  public readonly exportsOutputRefmyhandlerinline53D120c7b0898676;
  public readonly exportsOutputRefmyhandlerpython384D62bbb58aa8b940;
  public readonly exportsOutputRefmyhandlerpython37C34039a7bb71d94d;
  public readonly exportsOutputRefmyhandlerinlineexcludes9Acf1422fa94aaf9;
  public readonly exportsOutputRefmyhandlerpython38excludes1Cedd61508a85d35;
  public readonly exportsOutputRefmyhandlerpython37excludes977F9cdf40301da3;

  public constructor(scope: cdk.App, id: string, props: IntegLambdaPythonPipenvProps = {}) {
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
    const myhandlerinlineServiceRole10C681f6 = new iam.CfnRole(this, 'myhandlerinlineServiceRole10C681F6', {
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

    const myhandlerinlineexcludesServiceRoleFf9028a3 = new iam.CfnRole(this, 'myhandlerinlineexcludesServiceRoleFF9028A3', {
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

    const myhandlerpython37ServiceRole45Cbd18d = new iam.CfnRole(this, 'myhandlerpython37ServiceRole45CBD18D', {
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

    const myhandlerpython37excludesServiceRole083Bd595 = new iam.CfnRole(this, 'myhandlerpython37excludesServiceRole083BD595', {
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

    const myhandlerpython38ServiceRole2049Aff7 = new iam.CfnRole(this, 'myhandlerpython38ServiceRole2049AFF7', {
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

    const myhandlerpython38excludesServiceRole05Cd433c = new iam.CfnRole(this, 'myhandlerpython38excludesServiceRole05CD433C', {
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

    if (myhandlerinlineServiceRole10C681f6 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineServiceRole10C681f6' to be undefined. Fixit.`); }
    const myhandlerinline53D120c7 = new lambda.CfnFunction(this, 'myhandlerinline53D120C7', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '2f3bbbf29fb95dea832d2f407fb3af92e2179a31a179650c1e9bad3d5d51afaf.zip',
      },
      role: myhandlerinlineServiceRole10C681f6.attrArn,
      handler: 'index.handler',
      runtime: 'python3.9',
    });
    myhandlerinline53D120c7.addDependency(myhandlerinlineServiceRole10C681f6);

    if (myhandlerinlineexcludesServiceRoleFf9028a3 == null) { throw new Error(`A combination of conditions caused 'myhandlerinlineexcludesServiceRoleFf9028a3' to be undefined. Fixit.`); }
    const myhandlerinlineexcludes9Acf1422 = new lambda.CfnFunction(this, 'myhandlerinlineexcludes9ACF1422', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '6259c1fcafbecaa6547531670fa651cce171cf49a597b58343c28ad4c6a4ba04.zip',
      },
      role: myhandlerinlineexcludesServiceRoleFf9028a3.attrArn,
      handler: 'index.handler',
      runtime: 'python3.9',
    });
    myhandlerinlineexcludes9Acf1422.addDependency(myhandlerinlineexcludesServiceRoleFf9028a3);

    if (myhandlerpython37ServiceRole45Cbd18d == null) { throw new Error(`A combination of conditions caused 'myhandlerpython37ServiceRole45Cbd18d' to be undefined. Fixit.`); }
    const myhandlerpython37C34039a7 = new lambda.CfnFunction(this, 'myhandlerpython37C34039A7', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f4e3739faf89086835a11fc5cdc60f9f437560fdc808ba5f7b8c717b280eb2b1.zip',
      },
      role: myhandlerpython37ServiceRole45Cbd18d.attrArn,
      handler: 'index.handler',
      runtime: 'python3.7',
    });
    myhandlerpython37C34039a7.addDependency(myhandlerpython37ServiceRole45Cbd18d);

    if (myhandlerpython37excludesServiceRole083Bd595 == null) { throw new Error(`A combination of conditions caused 'myhandlerpython37excludesServiceRole083Bd595' to be undefined. Fixit.`); }
    const myhandlerpython37excludes977F9cdf = new lambda.CfnFunction(this, 'myhandlerpython37excludes977F9CDF', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '53f2ca7d739f5ee14104a478b820bb6f429b8afaa9c00a9aed6cf32538cf7207.zip',
      },
      role: myhandlerpython37excludesServiceRole083Bd595.attrArn,
      handler: 'index.handler',
      runtime: 'python3.7',
    });
    myhandlerpython37excludes977F9cdf.addDependency(myhandlerpython37excludesServiceRole083Bd595);

    if (myhandlerpython38ServiceRole2049Aff7 == null) { throw new Error(`A combination of conditions caused 'myhandlerpython38ServiceRole2049Aff7' to be undefined. Fixit.`); }
    const myhandlerpython384D62bbb5 = new lambda.CfnFunction(this, 'myhandlerpython384D62BBB5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '393d0817d83ce87664be2c627863e3f448f1106ceeb687e3f3c370b7957b9a21.zip',
      },
      role: myhandlerpython38ServiceRole2049Aff7.attrArn,
      handler: 'index.handler',
      runtime: 'python3.8',
    });
    myhandlerpython384D62bbb5.addDependency(myhandlerpython38ServiceRole2049Aff7);

    if (myhandlerpython38excludesServiceRole05Cd433c == null) { throw new Error(`A combination of conditions caused 'myhandlerpython38excludesServiceRole05Cd433c' to be undefined. Fixit.`); }
    const myhandlerpython38excludes1Cedd615 = new lambda.CfnFunction(this, 'myhandlerpython38excludes1CEDD615', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '7885d5d20a5bca7141b637a7e9db57f95730b26b0c4a5d7a6e6db0f392042f7e.zip',
      },
      role: myhandlerpython38excludesServiceRole05Cd433c.attrArn,
      handler: 'index.handler',
      runtime: 'python3.8',
    });
    myhandlerpython38excludes1Cedd615.addDependency(myhandlerpython38excludesServiceRole05Cd433c);

    // Outputs
    this.exportsOutputRefmyhandlerinline53D120c7b0898676 = myhandlerinline53D120c7.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinline53D120C7B0898676', {
      key: 'ExportsOutputRefmyhandlerinline53D120C7B0898676',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerinline53D120C7B0898676',
      value: this.exportsOutputRefmyhandlerinline53D120c7b0898676!.toString(),
    });
    this.exportsOutputRefmyhandlerpython384D62bbb58aa8b940 = myhandlerpython384D62bbb5.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerpython384D62BBB58AA8B940', {
      key: 'ExportsOutputRefmyhandlerpython384D62BBB58AA8B940',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerpython384D62BBB58AA8B940',
      value: this.exportsOutputRefmyhandlerpython384D62bbb58aa8b940!.toString(),
    });
    this.exportsOutputRefmyhandlerpython37C34039a7bb71d94d = myhandlerpython37C34039a7.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerpython37C34039A7BB71D94D', {
      key: 'ExportsOutputRefmyhandlerpython37C34039A7BB71D94D',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerpython37C34039A7BB71D94D',
      value: this.exportsOutputRefmyhandlerpython37C34039a7bb71d94d!.toString(),
    });
    this.exportsOutputRefmyhandlerinlineexcludes9Acf1422fa94aaf9 = myhandlerinlineexcludes9Acf1422.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerinlineexcludes9ACF1422FA94AAF9', {
      key: 'ExportsOutputRefmyhandlerinlineexcludes9ACF1422FA94AAF9',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerinlineexcludes9ACF1422FA94AAF9',
      value: this.exportsOutputRefmyhandlerinlineexcludes9Acf1422fa94aaf9!.toString(),
    });
    this.exportsOutputRefmyhandlerpython38excludes1Cedd61508a85d35 = myhandlerpython38excludes1Cedd615.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerpython38excludes1CEDD61508A85D35', {
      key: 'ExportsOutputRefmyhandlerpython38excludes1CEDD61508A85D35',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerpython38excludes1CEDD61508A85D35',
      value: this.exportsOutputRefmyhandlerpython38excludes1Cedd61508a85d35!.toString(),
    });
    this.exportsOutputRefmyhandlerpython37excludes977F9cdf40301da3 = myhandlerpython37excludes977F9cdf.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerpython37excludes977F9CDF40301DA3', {
      key: 'ExportsOutputRefmyhandlerpython37excludes977F9CDF40301DA3',
      exportName: 'integ-lambda-python-pipenv:ExportsOutputRefmyhandlerpython37excludes977F9CDF40301DA3',
      value: this.exportsOutputRefmyhandlerpython37excludes977F9cdf40301da3!.toString(),
    });
  }
}

