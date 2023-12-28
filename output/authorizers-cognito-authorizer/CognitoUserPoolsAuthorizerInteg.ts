import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface CognitoUserPoolsAuthorizerIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CognitoUserPoolsAuthorizerInteg extends cdk.Stack {
  public readonly myrestapiEndpointE06f9d98;

  public constructor(scope: cdk.App, id: string, props: CognitoUserPoolsAuthorizerIntegProps = {}) {
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
    const userPool6Ba7e5f2 = new cognito.CfnUserPool(this, 'UserPool6BA7E5F2', {
      accountRecoverySetting: {
        recoveryMechanisms: [
          {
            name: 'verified_phone_number',
            priority: 1,
          },
          {
            name: 'verified_email',
            priority: 2,
          },
        ],
      },
      adminCreateUserConfig: {
        allowAdminCreateUserOnly: true,
      },
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      smsVerificationMessage: 'The verification code to your new account is {####}',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    userPool6Ba7e5f2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myrestapi551C8392 = new apigateway.CfnRestApi(this, 'myrestapi551C8392', {
      name: 'myrestapi',
    });

    const myrestapiCloudWatchRoleC48da1dd = new iam.CfnRole(this, 'myrestapiCloudWatchRoleC48DA1DD', {
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
    myrestapiCloudWatchRoleC48da1dd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (userPool6Ba7e5f2 == null) { throw new Error(`A combination of conditions caused 'userPool6Ba7e5f2' to be undefined. Fixit.`); }
    if (myrestapi551C8392 == null) { throw new Error(`A combination of conditions caused 'myrestapi551C8392' to be undefined. Fixit.`); }
    const myauthorizer23Cb99dd = new apigateway.CfnAuthorizer(this, 'myauthorizer23CB99DD', {
      name: 'CognitoUserPoolsAuthorizerIntegmyauthorizer10C804C1',
      restApiId: myrestapi551C8392.ref,
      type: 'COGNITO_USER_POOLS',
      identitySource: 'method.request.header.Authorization',
      providerArns: [
        userPool6Ba7e5f2.attrArn,
      ],
    });

    if (myrestapi551C8392 == null) { throw new Error(`A combination of conditions caused 'myrestapi551C8392' to be undefined. Fixit.`); }
    if (myrestapiCloudWatchRoleC48da1dd == null) { throw new Error(`A combination of conditions caused 'myrestapiCloudWatchRoleC48da1dd' to be undefined. Fixit.`); }
    const myrestapiAccountA49a05be = new apigateway.CfnAccount(this, 'myrestapiAccountA49A05BE', {
      cloudWatchRoleArn: myrestapiCloudWatchRoleC48da1dd.attrArn,
    });
    myrestapiAccountA49a05be.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myrestapiAccountA49a05be.addDependency(myrestapi551C8392);

    if (myauthorizer23Cb99dd == null) { throw new Error(`A combination of conditions caused 'myauthorizer23Cb99dd' to be undefined. Fixit.`); }
    if (myrestapi551C8392 == null) { throw new Error(`A combination of conditions caused 'myrestapi551C8392' to be undefined. Fixit.`); }
    const myrestapiAny94b0497f = new apigateway.CfnMethod(this, 'myrestapiANY94B0497F', {
      httpMethod: 'ANY',
      resourceId: myrestapi551C8392.attrRootResourceId,
      restApiId: myrestapi551C8392.ref,
      authorizationType: 'COGNITO_USER_POOLS',
      authorizerId: myauthorizer23Cb99dd.ref,
      integration: {
        integrationResponses: [
          {
            statusCode: '200',
          },
        ],
        passthroughBehavior: 'NEVER',
        requestTemplates: {
          'application/json': '{ \"statusCode\": 200 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    });

    if (myauthorizer23Cb99dd == null) { throw new Error(`A combination of conditions caused 'myauthorizer23Cb99dd' to be undefined. Fixit.`); }
    if (myrestapi551C8392 == null) { throw new Error(`A combination of conditions caused 'myrestapi551C8392' to be undefined. Fixit.`); }
    if (myrestapiAny94b0497f == null) { throw new Error(`A combination of conditions caused 'myrestapiAny94b0497f' to be undefined. Fixit.`); }
    const myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6 = new apigateway.CfnDeployment(this, 'myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6', {
      restApiId: myrestapi551C8392.ref,
      description: 'Automatically created by the RestApi construct',
    });
    myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6.addDependency(myauthorizer23Cb99dd);
    myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6.addDependency(myrestapiAny94b0497f);

    if (myrestapi551C8392 == null) { throw new Error(`A combination of conditions caused 'myrestapi551C8392' to be undefined. Fixit.`); }
    if (myrestapiAccountA49a05be == null) { throw new Error(`A combination of conditions caused 'myrestapiAccountA49a05be' to be undefined. Fixit.`); }
    if (myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6 == null) { throw new Error(`A combination of conditions caused 'myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6' to be undefined. Fixit.`); }
    const myrestapiDeploymentStageprodA9250ea4 = new apigateway.CfnStage(this, 'myrestapiDeploymentStageprodA9250EA4', {
      restApiId: myrestapi551C8392.ref,
      deploymentId: myrestapiDeployment419B1464d5146a3a0aa3a9f79024a52930571dc6.ref,
      stageName: 'prod',
    });
    myrestapiDeploymentStageprodA9250ea4.addDependency(myrestapiAccountA49a05be);

    // Outputs
    this.myrestapiEndpointE06f9d98 = [
      'https://',
      myrestapi551C8392.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myrestapiDeploymentStageprodA9250ea4.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyrestapiEndpointE06F9D98', {
      key: 'myrestapiEndpointE06F9D98',
      value: this.myrestapiEndpointE06f9d98!.toString(),
    });
  }
}

