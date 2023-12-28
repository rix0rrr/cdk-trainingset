import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaApiIntegrationOptionsStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaApiIntegrationOptionsStack extends cdk.Stack {
  public readonly lambdarestapiEndpoint4A61b166;
  public readonly exportsOutputReflambdarestapiF559e4f2e351bc88;
  public readonly exportsOutputReflambdarestapiDeploymentStageprodA05f84ea6a0e534f;

  public constructor(scope: cdk.App, id: string, props: LambdaApiIntegrationOptionsStackProps = {}) {
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
        zipFile: 'exports.handler = async function(event) {\n        return {\n          body: JSON.stringify({\n            message: \'Hello\',\n          }),\n          statusCode: 200,\n          headers: { \'Content-Type\': \'*/*\' }\n        };\n      }',
      },
      role: myfnServiceRole7822Dc24.attrArn,
      handler: 'index.handler',
      runtime: 'nodejs18.x',
    });
    myfn8C66d016.addDependency(myfnServiceRole7822Dc24);

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiAnyApiPermissionTestLambdaApiIntegrationOptionsStacklambdarestapi1C6ee2bdanya5ef21a0 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionTestLambdaApiIntegrationOptionsStacklambdarestapi1C6EE2BDANYA5EF21A0', {
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
      httpMethod: 'ANY',
      resourceId: lambdarestapiF559e4f2.attrRootResourceId,
      restApiId: lambdarestapiF559e4f2.ref,
      authorizationType: 'NONE',
      integration: {
        integrationHttpMethod: 'POST',
        timeoutInMillis: 1000,
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
    });

    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiproxyAnyApiPermissionTestLambdaApiIntegrationOptionsStacklambdarestapi1C6ee2bdanYproxyE203bd4e = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionTestLambdaApiIntegrationOptionsStacklambdarestapi1C6EE2BDANYproxyE203BD4E', {
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
      httpMethod: 'ANY',
      resourceId: lambdarestapiproxyB0e963b7.ref,
      restApiId: lambdarestapiF559e4f2.ref,
      authorizationType: 'NONE',
      integration: {
        integrationHttpMethod: 'POST',
        timeoutInMillis: 1000,
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
    });

    if (lambdarestapiAnyb9bb3fb2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiAnyb9bb3fb2' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (lambdarestapiproxyAnyc900233f == null) { throw new Error(`A combination of conditions caused 'lambdarestapiproxyAnyc900233f' to be undefined. Fixit.`); }
    if (lambdarestapiproxyB0e963b7 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiproxyB0e963b7' to be undefined. Fixit.`); }
    const lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032 = new apigateway.CfnDeployment(this, 'lambdarestapiDeployment2E401BD85ca559db3bb9b4a52bf7250ba64df032', {
      restApiId: lambdarestapiF559e4f2.ref,
      description: 'Automatically created by the RestApi construct',
    });
    lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032.addDependency(lambdarestapiproxyAnyc900233f);
    lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032.addDependency(lambdarestapiproxyB0e963b7);
    lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032.addDependency(lambdarestapiAnyb9bb3fb2);

    if (lambdarestapiAccount856938D8 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiAccount856938D8' to be undefined. Fixit.`); }
    if (lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    const lambdarestapiDeploymentStageprodA05f84ea = new apigateway.CfnStage(this, 'lambdarestapiDeploymentStageprodA05F84EA', {
      restApiId: lambdarestapiF559e4f2.ref,
      deploymentId: lambdarestapiDeployment2E401bd85ca559db3bb9b4a52bf7250ba64df032.ref,
      stageName: 'prod',
    });
    lambdarestapiDeploymentStageprodA05f84ea.addDependency(lambdarestapiAccount856938D8);

    if (lambdarestapiDeploymentStageprodA05f84ea == null) { throw new Error(`A combination of conditions caused 'lambdarestapiDeploymentStageprodA05f84ea' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiAnyApiPermissionLambdaApiIntegrationOptionsStacklambdarestapi1C6ee2bdany509ee687 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionLambdaApiIntegrationOptionsStacklambdarestapi1C6EE2BDANY509EE687', {
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
        lambdarestapiDeploymentStageprodA05f84ea.ref,
        '/*/',
      ].join(''),
    });

    if (lambdarestapiDeploymentStageprodA05f84ea == null) { throw new Error(`A combination of conditions caused 'lambdarestapiDeploymentStageprodA05f84ea' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiproxyAnyApiPermissionLambdaApiIntegrationOptionsStacklambdarestapi1C6ee2bdanYproxy19093776 = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionLambdaApiIntegrationOptionsStacklambdarestapi1C6EE2BDANYproxy19093776', {
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
        lambdarestapiDeploymentStageprodA05f84ea.ref,
        '/*/*',
      ].join(''),
    });

    // Outputs
    this.lambdarestapiEndpoint4A61b166 = [
      'https://',
      lambdarestapiF559e4f2.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      lambdarestapiDeploymentStageprodA05f84ea.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputlambdarestapiEndpoint4A61B166', {
      key: 'lambdarestapiEndpoint4A61B166',
      value: this.lambdarestapiEndpoint4A61b166!.toString(),
    });
    this.exportsOutputReflambdarestapiF559e4f2e351bc88 = lambdarestapiF559e4f2.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputReflambdarestapiF559E4F2E351BC88', {
      key: 'ExportsOutputReflambdarestapiF559E4F2E351BC88',
      exportName: 'LambdaApiIntegrationOptionsStack:ExportsOutputReflambdarestapiF559E4F2E351BC88',
      value: this.exportsOutputReflambdarestapiF559e4f2e351bc88!.toString(),
    });
    this.exportsOutputReflambdarestapiDeploymentStageprodA05f84ea6a0e534f = lambdarestapiDeploymentStageprodA05f84ea.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputReflambdarestapiDeploymentStageprodA05F84EA6A0E534F', {
      key: 'ExportsOutputReflambdarestapiDeploymentStageprodA05F84EA6A0E534F',
      exportName: 'LambdaApiIntegrationOptionsStack:ExportsOutputReflambdarestapiDeploymentStageprodA05F84EA6A0E534F',
      value: this.exportsOutputReflambdarestapiDeploymentStageprodA05f84ea6a0e534f!.toString(),
    });
  }
}

