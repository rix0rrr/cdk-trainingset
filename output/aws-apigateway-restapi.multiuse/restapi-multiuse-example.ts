import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface RestapiMultiuseExampleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class RestapiMultiuseExample extends cdk.Stack {
  public readonly helloapiEndpoint0E4d8d32;
  public readonly secondapiEndpoint89D0e02c;

  public constructor(scope: cdk.App, id: string, props: RestapiMultiuseExampleProps = {}) {
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
    const helloServiceRole1E55ea16 = new iam.CfnRole(this, 'HelloServiceRole1E55EA16', {
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

    const helloapi4446A35b = new apigateway.CfnRestApi(this, 'helloapi4446A35B', {
      name: 'hello-api',
    });

    const helloapiCloudWatchRoleD13e913e = new iam.CfnRole(this, 'helloapiCloudWatchRoleD13E913E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    helloapiCloudWatchRoleD13e913e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const secondapi730Ef3c7 = new apigateway.CfnRestApi(this, 'secondapi730EF3C7', {
      name: 'second-api',
    });

    const secondapiCloudWatchRole7Fec1028 = new iam.CfnRole(this, 'secondapiCloudWatchRole7FEC1028', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    secondapiCloudWatchRole7Fec1028.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (helloServiceRole1E55ea16 == null) { throw new Error(`A combination of conditions caused 'helloServiceRole1E55ea16' to be undefined. Fixit.`); }
    const hello4A628bd4 = new lambda.CfnFunction(this, 'Hello4A628BD4', {
      code: {
        zipFile: 'exports.handler = function helloCode(_event, _context, callback) {\n    return callback(undefined, {\n        statusCode: 200,\n        body: \'hello, world!\',\n    });\n}',
      },
      handler: 'index.handler',
      role: helloServiceRole1E55ea16.attrArn,
      runtime: 'nodejs18.x',
    });
    hello4A628bd4.addDependency(helloServiceRole1E55ea16);

    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    if (helloapiCloudWatchRoleD13e913e == null) { throw new Error(`A combination of conditions caused 'helloapiCloudWatchRoleD13e913e' to be undefined. Fixit.`); }
    const helloapiAccountD8c38bce = new apigateway.CfnAccount(this, 'helloapiAccountD8C38BCE', {
      cloudWatchRoleArn: helloapiCloudWatchRoleD13e913e.attrArn,
    });
    helloapiAccountD8c38bce.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    helloapiAccountD8c38bce.addDependency(helloapi4446A35b);

    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    const helloapihello4Aa00177 = new apigateway.CfnResource(this, 'helloapihello4AA00177', {
      parentId: helloapi4446A35b.attrRootResourceId,
      pathPart: 'hello',
      restApiId: helloapi4446A35b.ref,
    });

    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    if (secondapiCloudWatchRole7Fec1028 == null) { throw new Error(`A combination of conditions caused 'secondapiCloudWatchRole7Fec1028' to be undefined. Fixit.`); }
    const secondapiAccountDf729874 = new apigateway.CfnAccount(this, 'secondapiAccountDF729874', {
      cloudWatchRoleArn: secondapiCloudWatchRole7Fec1028.attrArn,
    });
    secondapiAccountDf729874.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    secondapiAccountDf729874.addDependency(secondapi730Ef3c7);

    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    const secondapihello7264Eb69 = new apigateway.CfnResource(this, 'secondapihello7264EB69', {
      parentId: secondapi730Ef3c7.attrRootResourceId,
      pathPart: 'hello',
      restApiId: secondapi730Ef3c7.ref,
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    const helloapihelloGetApiPermissionTestrestapimultiuseexamplehelloapi9Fd0148dgeThelloA58b2fae = new lambda.CfnPermission(this, 'helloapihelloGETApiPermissionTestrestapimultiuseexamplehelloapi9FD0148DGEThelloA58B2FAE', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        helloapi4446A35b.ref,
        '/test-invoke-stage/GET/hello',
      ].join(''),
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    if (helloapihello4Aa00177 == null) { throw new Error(`A combination of conditions caused 'helloapihello4Aa00177' to be undefined. Fixit.`); }
    const helloapihelloGete6a58337 = new apigateway.CfnMethod(this, 'helloapihelloGETE6A58337', {
      authorizationType: 'NONE',
      httpMethod: 'GET',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          hello4A628bd4.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: helloapihello4Aa00177.ref,
      restApiId: helloapi4446A35b.ref,
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    const secondapihelloGetApiPermissionTestrestapimultiuseexamplesecondapi5Cb05b89geThelloB0b3b749 = new lambda.CfnPermission(this, 'secondapihelloGETApiPermissionTestrestapimultiuseexamplesecondapi5CB05B89GEThelloB0B3B749', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        secondapi730Ef3c7.ref,
        '/test-invoke-stage/GET/hello',
      ].join(''),
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    if (secondapihello7264Eb69 == null) { throw new Error(`A combination of conditions caused 'secondapihello7264Eb69' to be undefined. Fixit.`); }
    const secondapihelloGetdc5bbb18 = new apigateway.CfnMethod(this, 'secondapihelloGETDC5BBB18', {
      authorizationType: 'NONE',
      httpMethod: 'GET',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          hello4A628bd4.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: secondapihello7264Eb69.ref,
      restApiId: secondapi730Ef3c7.ref,
    });

    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    if (helloapihello4Aa00177 == null) { throw new Error(`A combination of conditions caused 'helloapihello4Aa00177' to be undefined. Fixit.`); }
    if (helloapihelloGete6a58337 == null) { throw new Error(`A combination of conditions caused 'helloapihelloGete6a58337' to be undefined. Fixit.`); }
    const helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138 = new apigateway.CfnDeployment(this, 'helloapiDeploymentFA89AEEC3622d8c965f356a33fd95586d24bf138', {
      description: 'Automatically created by the RestApi construct',
      restApiId: helloapi4446A35b.ref,
    });
    helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138.addDependency(helloapihelloGete6a58337);
    helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138.addDependency(helloapihello4Aa00177);

    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    if (secondapihello7264Eb69 == null) { throw new Error(`A combination of conditions caused 'secondapihello7264Eb69' to be undefined. Fixit.`); }
    if (secondapihelloGetdc5bbb18 == null) { throw new Error(`A combination of conditions caused 'secondapihelloGetdc5bbb18' to be undefined. Fixit.`); }
    const secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a = new apigateway.CfnDeployment(this, 'secondapiDeployment20F2C70088fa5a027620045bea3e5043c6d31f5a', {
      description: 'Automatically created by the RestApi construct',
      restApiId: secondapi730Ef3c7.ref,
    });
    secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a.addDependency(secondapihelloGetdc5bbb18);
    secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a.addDependency(secondapihello7264Eb69);

    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    if (helloapiAccountD8c38bce == null) { throw new Error(`A combination of conditions caused 'helloapiAccountD8c38bce' to be undefined. Fixit.`); }
    if (helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138 == null) { throw new Error(`A combination of conditions caused 'helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138' to be undefined. Fixit.`); }
    const helloapiDeploymentStageprod677E2c4f = new apigateway.CfnStage(this, 'helloapiDeploymentStageprod677E2C4F', {
      deploymentId: helloapiDeploymentFa89aeec3622d8c965f356a33fd95586d24bf138.ref,
      restApiId: helloapi4446A35b.ref,
      stageName: 'prod',
    });
    helloapiDeploymentStageprod677E2c4f.addDependency(helloapiAccountD8c38bce);

    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    if (secondapiAccountDf729874 == null) { throw new Error(`A combination of conditions caused 'secondapiAccountDf729874' to be undefined. Fixit.`); }
    if (secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a == null) { throw new Error(`A combination of conditions caused 'secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a' to be undefined. Fixit.`); }
    const secondapiDeploymentStageprod40491Df0 = new apigateway.CfnStage(this, 'secondapiDeploymentStageprod40491DF0', {
      deploymentId: secondapiDeployment20F2c70088fa5a027620045bea3e5043c6d31f5a.ref,
      restApiId: secondapi730Ef3c7.ref,
      stageName: 'prod',
    });
    secondapiDeploymentStageprod40491Df0.addDependency(secondapiAccountDf729874);

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (helloapi4446A35b == null) { throw new Error(`A combination of conditions caused 'helloapi4446A35b' to be undefined. Fixit.`); }
    if (helloapiDeploymentStageprod677E2c4f == null) { throw new Error(`A combination of conditions caused 'helloapiDeploymentStageprod677E2c4f' to be undefined. Fixit.`); }
    const helloapihelloGetApiPermissionrestapimultiuseexamplehelloapi9Fd0148dgeThello2Fd34bc2 = new lambda.CfnPermission(this, 'helloapihelloGETApiPermissionrestapimultiuseexamplehelloapi9FD0148DGEThello2FD34BC2', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        helloapi4446A35b.ref,
        '/',
        helloapiDeploymentStageprod677E2c4f.ref,
        '/GET/hello',
      ].join(''),
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (secondapi730Ef3c7 == null) { throw new Error(`A combination of conditions caused 'secondapi730Ef3c7' to be undefined. Fixit.`); }
    if (secondapiDeploymentStageprod40491Df0 == null) { throw new Error(`A combination of conditions caused 'secondapiDeploymentStageprod40491Df0' to be undefined. Fixit.`); }
    const secondapihelloGetApiPermissionrestapimultiuseexamplesecondapi5Cb05b89geThello2D6c1879 = new lambda.CfnPermission(this, 'secondapihelloGETApiPermissionrestapimultiuseexamplesecondapi5CB05B89GEThello2D6C1879', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        secondapi730Ef3c7.ref,
        '/',
        secondapiDeploymentStageprod40491Df0.ref,
        '/GET/hello',
      ].join(''),
    });

    // Outputs
    this.helloapiEndpoint0E4d8d32 = [
      'https://',
      helloapi4446A35b.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      helloapiDeploymentStageprod677E2c4f.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputhelloapiEndpoint0E4D8D32', {
      key: 'helloapiEndpoint0E4D8D32',
      value: this.helloapiEndpoint0E4d8d32!.toString(),
    });
    this.secondapiEndpoint89D0e02c = [
      'https://',
      secondapi730Ef3c7.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      secondapiDeploymentStageprod40491Df0.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputsecondapiEndpoint89D0E02C', {
      key: 'secondapiEndpoint89D0E02C',
      value: this.secondapiEndpoint89D0e02c!.toString(),
    });
  }
}

