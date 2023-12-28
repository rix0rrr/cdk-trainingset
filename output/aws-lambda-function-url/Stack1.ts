import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface Stack1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack1 extends cdk.Stack {
  public readonly theIamAuthFunctionUrls;
  public readonly theNoAuthFunctionUrls;
  public readonly theCorsFunctionUrls;
  public readonly theStreamFunctionUrls;

  public constructor(scope: cdk.App, id: string, props: Stack1Props = {}) {
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
    const corsFunctionUrlsServiceRole6227B597 = new iam.CfnRole(this, 'CorsFunctionUrlsServiceRole6227B597', {
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

    const iamAuthFunctionUrlsServiceRole35Df9de0 = new iam.CfnRole(this, 'IamAuthFunctionUrlsServiceRole35DF9DE0', {
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

    const noAuthFunctionUrlsServiceRole7247E6f2 = new iam.CfnRole(this, 'NoAuthFunctionUrlsServiceRole7247E6F2', {
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

    const streamFunctionUrlsServiceRoleAf76ec5d = new iam.CfnRole(this, 'StreamFunctionUrlsServiceRoleAF76EC5D', {
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

    if (corsFunctionUrlsServiceRole6227B597 == null) { throw new Error(`A combination of conditions caused 'corsFunctionUrlsServiceRole6227B597' to be undefined. Fixit.`); }
    const corsFunctionUrlsD81cf424 = new lambda.CfnFunction(this, 'CorsFunctionUrlsD81CF424', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      role: corsFunctionUrlsServiceRole6227B597.attrArn,
      handler: 'index.handler',
      runtime: 'python3.10',
    });
    corsFunctionUrlsD81cf424.addDependency(corsFunctionUrlsServiceRole6227B597);

    if (iamAuthFunctionUrlsServiceRole35Df9de0 == null) { throw new Error(`A combination of conditions caused 'iamAuthFunctionUrlsServiceRole35Df9de0' to be undefined. Fixit.`); }
    const iamAuthFunctionUrls609024A0 = new lambda.CfnFunction(this, 'IamAuthFunctionUrls609024A0', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      role: iamAuthFunctionUrlsServiceRole35Df9de0.attrArn,
      handler: 'index.handler',
      runtime: 'python3.10',
    });
    iamAuthFunctionUrls609024A0.addDependency(iamAuthFunctionUrlsServiceRole35Df9de0);

    if (noAuthFunctionUrlsServiceRole7247E6f2 == null) { throw new Error(`A combination of conditions caused 'noAuthFunctionUrlsServiceRole7247E6f2' to be undefined. Fixit.`); }
    const noAuthFunctionUrls65Abc157 = new lambda.CfnFunction(this, 'NoAuthFunctionUrls65ABC157', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      role: noAuthFunctionUrlsServiceRole7247E6f2.attrArn,
      handler: 'index.handler',
      runtime: 'python3.10',
    });
    noAuthFunctionUrls65Abc157.addDependency(noAuthFunctionUrlsServiceRole7247E6f2);

    if (streamFunctionUrlsServiceRoleAf76ec5d == null) { throw new Error(`A combination of conditions caused 'streamFunctionUrlsServiceRoleAf76ec5d' to be undefined. Fixit.`); }
    const streamFunctionUrlsAab55c9c = new lambda.CfnFunction(this, 'StreamFunctionUrlsAAB55C9C', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      role: streamFunctionUrlsServiceRoleAf76ec5d.attrArn,
      handler: 'index.handler',
      runtime: 'python3.10',
    });
    streamFunctionUrlsAab55c9c.addDependency(streamFunctionUrlsServiceRoleAf76ec5d);

    if (corsFunctionUrlsD81cf424 == null) { throw new Error(`A combination of conditions caused 'corsFunctionUrlsD81cf424' to be undefined. Fixit.`); }
    const corsFunctionUrlsFunctionUrl591106C8 = new lambda.CfnUrl(this, 'CorsFunctionUrlsFunctionUrl591106C8', {
      authType: 'NONE',
      targetFunctionArn: corsFunctionUrlsD81cf424.attrArn,
      cors: {
        allowMethods: [
          '*',
        ],
        allowOrigins: [
          'https://example.com',
        ],
      },
    });

    if (corsFunctionUrlsD81cf424 == null) { throw new Error(`A combination of conditions caused 'corsFunctionUrlsD81cf424' to be undefined. Fixit.`); }
    const corsFunctionUrlsinvokefunctionurl5E7d2994 = new lambda.CfnPermission(this, 'CorsFunctionUrlsinvokefunctionurl5E7D2994', {
      action: 'lambda:InvokeFunctionUrl',
      functionName: corsFunctionUrlsD81cf424.attrArn,
      principal: '*',
      functionUrlAuthType: 'NONE',
    });

    if (iamAuthFunctionUrls609024A0 == null) { throw new Error(`A combination of conditions caused 'iamAuthFunctionUrls609024A0' to be undefined. Fixit.`); }
    const iamAuthFunctionUrlsFunctionUrl144E56c2 = new lambda.CfnUrl(this, 'IamAuthFunctionUrlsFunctionUrl144E56C2', {
      authType: 'AWS_IAM',
      targetFunctionArn: iamAuthFunctionUrls609024A0.attrArn,
    });

    if (noAuthFunctionUrls65Abc157 == null) { throw new Error(`A combination of conditions caused 'noAuthFunctionUrls65Abc157' to be undefined. Fixit.`); }
    const noAuthFunctionUrlsFunctionUrl22F8fcd9 = new lambda.CfnUrl(this, 'NoAuthFunctionUrlsFunctionUrl22F8FCD9', {
      authType: 'NONE',
      targetFunctionArn: noAuthFunctionUrls65Abc157.attrArn,
    });

    if (noAuthFunctionUrls65Abc157 == null) { throw new Error(`A combination of conditions caused 'noAuthFunctionUrls65Abc157' to be undefined. Fixit.`); }
    const noAuthFunctionUrlsinvokefunctionurl832C0266 = new lambda.CfnPermission(this, 'NoAuthFunctionUrlsinvokefunctionurl832C0266', {
      action: 'lambda:InvokeFunctionUrl',
      functionName: noAuthFunctionUrls65Abc157.attrArn,
      principal: '*',
      functionUrlAuthType: 'NONE',
    });

    if (streamFunctionUrlsAab55c9c == null) { throw new Error(`A combination of conditions caused 'streamFunctionUrlsAab55c9c' to be undefined. Fixit.`); }
    const streamFunctionUrlsFunctionUrl56476535 = new lambda.CfnUrl(this, 'StreamFunctionUrlsFunctionUrl56476535', {
      authType: 'NONE',
      targetFunctionArn: streamFunctionUrlsAab55c9c.attrArn,
      invokeMode: 'RESPONSE_STREAM',
    });

    if (streamFunctionUrlsAab55c9c == null) { throw new Error(`A combination of conditions caused 'streamFunctionUrlsAab55c9c' to be undefined. Fixit.`); }
    const streamFunctionUrlsinvokefunctionurl4Fd8689d = new lambda.CfnPermission(this, 'StreamFunctionUrlsinvokefunctionurl4FD8689D', {
      action: 'lambda:InvokeFunctionUrl',
      functionName: streamFunctionUrlsAab55c9c.attrArn,
      principal: '*',
      functionUrlAuthType: 'NONE',
    });

    // Outputs
    this.theIamAuthFunctionUrls = iamAuthFunctionUrlsFunctionUrl144E56c2.attrFunctionUrl;
    new cdk.CfnOutput(this, 'CfnOutputTheIamAuthFunctionUrls', {
      key: 'TheIamAuthFunctionUrls',
      value: this.theIamAuthFunctionUrls!.toString(),
    });
    this.theNoAuthFunctionUrls = noAuthFunctionUrlsFunctionUrl22F8fcd9.attrFunctionUrl;
    new cdk.CfnOutput(this, 'CfnOutputTheNoAuthFunctionUrls', {
      key: 'TheNoAuthFunctionUrls',
      value: this.theNoAuthFunctionUrls!.toString(),
    });
    this.theCorsFunctionUrls = corsFunctionUrlsFunctionUrl591106C8.attrFunctionUrl;
    new cdk.CfnOutput(this, 'CfnOutputTheCorsFunctionUrls', {
      key: 'TheCorsFunctionUrls',
      value: this.theCorsFunctionUrls!.toString(),
    });
    this.theStreamFunctionUrls = streamFunctionUrlsFunctionUrl56476535.attrFunctionUrl;
    new cdk.CfnOutput(this, 'CfnOutputTheStreamFunctionUrls', {
      key: 'TheStreamFunctionUrls',
      value: this.theStreamFunctionUrls!.toString(),
    });
  }
}

