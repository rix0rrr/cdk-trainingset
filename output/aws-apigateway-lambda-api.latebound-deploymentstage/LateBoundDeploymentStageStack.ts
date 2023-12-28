import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LatebounddeploymentstagestackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Latebounddeploymentstagestack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LatebounddeploymentstagestackProps = {}) {
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
    const lambdarestapiCloudWatchRoleA142878f = new iam.CfnRole(this, 'lambdarestapiCloudWatchRoleA142878F', {
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
    lambdarestapiCloudWatchRoleA142878f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const lambdarestapiF559e4f2 = new apigateway.CfnRestApi(this, 'lambdarestapiF559E4F2', {
      name: 'lambdarestapi',
    });

    const myfnServiceRole7822Dc24 = new iam.CfnRole(this, 'myfnServiceRole7822DC24', {
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

    if (lambdarestapiCloudWatchRoleA142878f == null) { throw new Error(`A combination of conditions caused 'lambdarestapiCloudWatchRoleA142878f' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    const lambdarestapiAccount856938D8 = new apigateway.CfnAccount(this, 'lambdarestapiAccount856938D8', {
      cloudWatchRoleArn: lambdarestapiCloudWatchRoleA142878f.attrArn,
    });
    lambdarestapiAccount856938D8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    lambdarestapiAccount856938D8.addDependency(lambdarestapiF559e4f2);

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    const lambdarestapiproxyB0e963b7 = new apigateway.CfnResource(this, 'lambdarestapiproxyB0E963B7', {
      parentId: lambdarestapiF559e4f2.attrRootResourceId,
      pathPart: '{proxy+}',
      restApiId: lambdarestapiF559e4f2.ref,
    });

    if (myfnServiceRole7822Dc24 == null) { throw new Error(`A combination of conditions caused 'myfnServiceRole7822Dc24' to be undefined. Fixit.`); }
    const myfn8C66d016 = new lambda.CfnFunction(this, 'myfn8C66D016', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: myfnServiceRole7822Dc24.attrArn,
      runtime: 'nodejs18.x',
    });
    myfn8C66d016.addDependency(myfnServiceRole7822Dc24);

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiAnyApiPermissionTestLateBoundDeploymentStageStacklambdarestapiCe6017f6any239cfd70 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionTestLateBoundDeploymentStageStacklambdarestapiCE6017F6ANY239CFD70', {
      action: 'lambda:InvokeFunction',
      functionName: myfn8C66d016.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        lambdarestapiF559e4f2.ref,
        '/test-invoke-stage/*/',
      ].join(''),
    });

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiAnyb9bb3fb2 = new apigateway.CfnMethod(this, 'lambdarestapiANYB9BB3FB2', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          myfn8C66d016.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: lambdarestapiF559e4f2.attrRootResourceId,
      restApiId: lambdarestapiF559e4f2.ref,
    });

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiproxyAnyApiPermissionTestLateBoundDeploymentStageStacklambdarestapiCe6017f6anYproxyCc4f6bb2 = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionTestLateBoundDeploymentStageStacklambdarestapiCE6017F6ANYproxyCC4F6BB2', {
      action: 'lambda:InvokeFunction',
      functionName: myfn8C66d016.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        lambdarestapiF559e4f2.ref,
        '/test-invoke-stage/*/*',
      ].join(''),
    });

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (lambdarestapiproxyB0e963b7 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiproxyB0e963b7' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiproxyAnyc900233f = new apigateway.CfnMethod(this, 'lambdarestapiproxyANYC900233F', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          myfn8C66d016.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: lambdarestapiproxyB0e963b7.ref,
      restApiId: lambdarestapiF559e4f2.ref,
    });

    if (lambdarestapiAnyb9bb3fb2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiAnyb9bb3fb2' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (lambdarestapiproxyAnyc900233f == null) { throw new Error(`A combination of conditions caused 'lambdarestapiproxyAnyc900233f' to be undefined. Fixit.`); }
    const deployment3338197541aef5f15bf9a60b10e06fdbe72854f4 = new apigateway.CfnDeployment(this, 'deployment3338197541aef5f15bf9a60b10e06fdbe72854f4', {
      restApiId: lambdarestapiF559e4f2.ref,
    });
    deployment3338197541aef5f15bf9a60b10e06fdbe72854f4.addDependency(lambdarestapiproxyAnyc900233f);
    deployment3338197541aef5f15bf9a60b10e06fdbe72854f4.addDependency(lambdarestapiAnyb9bb3fb2);

    if (deployment3338197541aef5f15bf9a60b10e06fdbe72854f4 == null) { throw new Error(`A combination of conditions caused 'deployment3338197541aef5f15bf9a60b10e06fdbe72854f4' to be undefined. Fixit.`); }
    if (lambdarestapiAccount856938D8 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiAccount856938D8' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    const stage0661E4ac = new apigateway.CfnStage(this, 'stage0661E4AC', {
      deploymentId: deployment3338197541aef5f15bf9a60b10e06fdbe72854f4.ref,
      restApiId: lambdarestapiF559e4f2.ref,
      stageName: 'prod',
    });
    stage0661E4ac.addDependency(lambdarestapiAccount856938D8);

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    if (stage0661E4ac == null) { throw new Error(`A combination of conditions caused 'stage0661E4ac' to be undefined. Fixit.`); }
    const lambdarestapiAnyApiPermissionLateBoundDeploymentStageStacklambdarestapiCe6017f6any35688e13 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionLateBoundDeploymentStageStacklambdarestapiCE6017F6ANY35688E13', {
      action: 'lambda:InvokeFunction',
      functionName: myfn8C66d016.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        lambdarestapiF559e4f2.ref,
        '/',
        stage0661E4ac.ref,
        '/*/',
      ].join(''),
    });

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    if (stage0661E4ac == null) { throw new Error(`A combination of conditions caused 'stage0661E4ac' to be undefined. Fixit.`); }
    const lambdarestapiproxyAnyApiPermissionLateBoundDeploymentStageStacklambdarestapiCe6017f6anYproxy2C5460ed = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionLateBoundDeploymentStageStacklambdarestapiCE6017F6ANYproxy2C5460ED', {
      action: 'lambda:InvokeFunction',
      functionName: myfn8C66d016.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        lambdarestapiF559e4f2.ref,
        '/',
        stage0661E4ac.ref,
        '/*/*',
      ].join(''),
    });
  }
}

