import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaApiIntegrationOptionsNonProxyIntegrationStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaApiIntegrationOptionsNonProxyIntegrationStack extends cdk.Stack {
  public readonly lambdarestapiEndpoint4A61b166;

  public constructor(scope: cdk.App, id: string, props: LambdaApiIntegrationOptionsNonProxyIntegrationStackProps = {}) {
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
    const lambdarestapiAnyApiPermissionTestLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04Bd4cacanyf29f6989 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionTestLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04BD4CACANYF29F6989', {
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
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, word\"}',
            },
            statusCode: '200',
          },
        ],
        passthroughBehavior: 'WHEN_NO_MATCH',
        type: 'AWS',
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
    const lambdarestapiproxyAnyApiPermissionTestLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04Bd4cacanYproxy188Ce6c9 = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionTestLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04BD4CACANYproxy188CE6C9', {
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
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, word\"}',
            },
            statusCode: '200',
          },
        ],
        passthroughBehavior: 'WHEN_NO_MATCH',
        type: 'AWS',
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
    if (lambdarestapiproxyB0e963b7 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiproxyB0e963b7' to be undefined. Fixit.`); }
    const lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38 = new apigateway.CfnDeployment(this, 'lambdarestapiDeployment2E401BD8b6af71d9ba27b2c75a61008a85fc6b38', {
      description: 'Automatically created by the RestApi construct',
      restApiId: lambdarestapiF559e4f2.ref,
    });
    lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38.addDependency(lambdarestapiproxyAnyc900233f);
    lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38.addDependency(lambdarestapiproxyB0e963b7);
    lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38.addDependency(lambdarestapiAnyb9bb3fb2);

    if (lambdarestapiAccount856938D8 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiAccount856938D8' to be undefined. Fixit.`); }
    if (lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    const lambdarestapiDeploymentStageprodA05f84ea = new apigateway.CfnStage(this, 'lambdarestapiDeploymentStageprodA05F84EA', {
      deploymentId: lambdarestapiDeployment2E401bd8b6af71d9ba27b2c75a61008a85fc6b38.ref,
      restApiId: lambdarestapiF559e4f2.ref,
      stageName: 'prod',
    });
    lambdarestapiDeploymentStageprodA05f84ea.addDependency(lambdarestapiAccount856938D8);

    if (lambdarestapiDeploymentStageprodA05f84ea == null) { throw new Error(`A combination of conditions caused 'lambdarestapiDeploymentStageprodA05f84ea' to be undefined. Fixit.`); }
    if (lambdarestapiF559e4f2 == null) { throw new Error(`A combination of conditions caused 'lambdarestapiF559e4f2' to be undefined. Fixit.`); }
    if (myfn8C66d016 == null) { throw new Error(`A combination of conditions caused 'myfn8C66d016' to be undefined. Fixit.`); }
    const lambdarestapiAnyApiPermissionLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04Bd4cacanyecc07de3 = new lambda.CfnPermission(this, 'lambdarestapiANYApiPermissionLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04BD4CACANYECC07DE3', {
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
    const lambdarestapiproxyAnyApiPermissionLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04Bd4cacanYproxy43Adcde6 = new lambda.CfnPermission(this, 'lambdarestapiproxyANYApiPermissionLambdaApiIntegrationOptionsNonProxyIntegrationStacklambdarestapi04BD4CACANYproxy43ADCDE6', {
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
  }
}

