import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkLambda1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambda1 extends cdk.Stack {
  public readonly myRestApiEndpoint4C55e4cb;

  public constructor(scope: cdk.App, id: string, props: AwsCdkLambda1Props = {}) {
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
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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

    const myRestApi2D1f47a9 = new apigateway.CfnRestApi(this, 'MyRestApi2D1F47A9', {
      name: 'MyRestApi',
    });

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiGetApiPermissionTestawscdklambda1MyRestApi20890E8fgetb5733bde = new lambda.CfnPermission(this, 'MyRestApiGETApiPermissionTestawscdklambda1MyRestApi20890E8FGETB5733BDE', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/test-invoke-stage/GET/',
      ].join(''),
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiGete3827d1c = new apigateway.CfnMethod(this, 'MyRestApiGETE3827D1C', {
      apiKeyRequired: true,
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
          myLambdaCce802fb.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: myRestApi2D1f47a9.attrRootResourceId,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiPost2ee84297 = new apigateway.CfnMethod(this, 'MyRestApiPOST2EE84297', {
      apiKeyRequired: false,
      authorizationType: 'NONE',
      httpMethod: 'POST',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          myLambdaCce802fb.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: myRestApi2D1f47a9.attrRootResourceId,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiPostApiPermissionTestawscdklambda1MyRestApi20890E8fpost931bcba1 = new lambda.CfnPermission(this, 'MyRestApiPOSTApiPermissionTestawscdklambda1MyRestApi20890E8FPOST931BCBA1', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/test-invoke-stage/POST/',
      ].join(''),
    });

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiGete3827d1c == null) { throw new Error(`A combination of conditions caused 'myRestApiGete3827d1c' to be undefined. Fixit.`); }
    if (myRestApiPost2ee84297 == null) { throw new Error(`A combination of conditions caused 'myRestApiPost2ee84297' to be undefined. Fixit.`); }
    const myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767 = new apigateway.CfnDeployment(this, 'MyRestApiDeploymentB555B582f86f07eb1bf053df446e77125b5ae767', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myRestApi2D1f47a9.ref,
    });
    myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767.addDependency(myRestApiGete3827d1c);
    myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767.addDependency(myRestApiPost2ee84297);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767 == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767' to be undefined. Fixit.`); }
    const myRestApiDeploymentStageprodC33b8e5f = new apigateway.CfnStage(this, 'MyRestApiDeploymentStageprodC33B8E5F', {
      deploymentId: myRestApiDeploymentB555b582f86f07eb1bf053df446e77125b5ae767.ref,
      restApiId: myRestApi2D1f47a9.ref,
      stageName: 'prod',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiDeploymentStageprodC33b8e5f == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentStageprodC33b8e5f' to be undefined. Fixit.`); }
    const myRestApiGetApiPermissionawscdklambda1MyRestApi20890E8fget6b62c72c = new lambda.CfnPermission(this, 'MyRestApiGETApiPermissionawscdklambda1MyRestApi20890E8FGET6B62C72C', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/',
        myRestApiDeploymentStageprodC33b8e5f.ref,
        '/GET/',
      ].join(''),
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiDeploymentStageprodC33b8e5f == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentStageprodC33b8e5f' to be undefined. Fixit.`); }
    const myRestApiPostApiPermissionawscdklambda1MyRestApi20890E8fpost70683b77 = new lambda.CfnPermission(this, 'MyRestApiPOSTApiPermissionawscdklambda1MyRestApi20890E8FPOST70683B77', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/',
        myRestApiDeploymentStageprodC33b8e5f.ref,
        '/POST/',
      ].join(''),
    });

    // Outputs
    this.myRestApiEndpoint4C55e4cb = [
      'https://',
      myRestApi2D1f47a9.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myRestApiDeploymentStageprodC33b8e5f.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMyRestApiEndpoint4C55E4CB', {
      key: 'MyRestApiEndpoint4C55E4CB',
      value: this.myRestApiEndpoint4C55e4cb!.toString(),
    });
  }
}

