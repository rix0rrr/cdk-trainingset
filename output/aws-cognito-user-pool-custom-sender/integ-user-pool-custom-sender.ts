import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-user-pool-custom-senderProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-pool-custom-sender extends cdk.Stack {
  public readonly userPoolId;
  public readonly clientId;

  public constructor(scope: cdk.App, id: string, props: integ-user-pool-custom-senderProps = {}) {
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
    const emailLambdaServiceRole7569D9f6 = new iam.CfnRole(this, 'emailLambdaServiceRole7569D9F6', {
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

    const keyFedd6ec0 = new kms.CfnKey(this, 'keyFEDD6EC0', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    keyFedd6ec0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (emailLambdaServiceRole7569D9f6 == null) { throw new Error(`A combination of conditions caused 'emailLambdaServiceRole7569D9f6' to be undefined. Fixit.`); }
    const emailLambda61F82360 = new lambda.CfnFunction(this, 'emailLambda61F82360', {
      code: {
        zipFile: 'exports.handler = function(event, ctx, cb) { console.log(\"Mocked custom email send\");return cb(null, \"success\"); }',
      },
      handler: 'index.handler',
      role: emailLambdaServiceRole7569D9f6.attrArn,
      runtime: 'nodejs18.x',
    });
    emailLambda61F82360.addDependency(emailLambdaServiceRole7569D9f6);

    if (emailLambda61F82360 == null) { throw new Error(`A combination of conditions caused 'emailLambda61F82360' to be undefined. Fixit.`); }
    if (keyFedd6ec0 == null) { throw new Error(`A combination of conditions caused 'keyFedd6ec0' to be undefined. Fixit.`); }
    const pool056F3f7e = new cognito.CfnUserPool(this, 'pool056F3F7E', {
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
        allowAdminCreateUserOnly: false,
      },
      autoVerifiedAttributes: [
        'email',
      ],
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      lambdaConfig: {
        customEmailSender: {
          lambdaArn: emailLambda61F82360.attrArn,
          lambdaVersion: 'V1_0',
        },
        kmsKeyId: keyFedd6ec0.attrArn,
      },
      smsVerificationMessage: 'The verification code to your new account is {####}',
      usernameAttributes: [
        'email',
      ],
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    pool056F3f7e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (emailLambda61F82360 == null) { throw new Error(`A combination of conditions caused 'emailLambda61F82360' to be undefined. Fixit.`); }
    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const poolCustomEmailSenderCognitoE3d88e99 = new lambda.CfnPermission(this, 'poolCustomEmailSenderCognitoE3D88E99', {
      action: 'lambda:InvokeFunction',
      functionName: emailLambda61F82360.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: pool056F3f7e.attrArn,
    });

    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const poolclient2623294C = new cognito.CfnUserPoolClient(this, 'poolclient2623294C', {
      allowedOAuthFlows: [
        'implicit',
        'code',
      ],
      allowedOAuthFlowsUserPoolClient: true,
      allowedOAuthScopes: [
        'profile',
        'phone',
        'email',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      callbackUrLs: [
        'https://example.com',
      ],
      explicitAuthFlows: [
        'ALLOW_USER_SRP_AUTH',
        'ALLOW_REFRESH_TOKEN_AUTH',
      ],
      supportedIdentityProviders: [
        'COGNITO',
      ],
      userPoolId: pool056F3f7e.ref,
    });

    // Outputs
    this.userPoolId = pool056F3f7e.ref;
    new cdk.CfnOutput(this, 'CfnOutputUserPoolId', {
      key: 'UserPoolId',
      value: this.userPoolId!.toString(),
    });
    this.clientId = poolclient2623294C.ref;
    new cdk.CfnOutput(this, 'CfnOutputClientId', {
      key: 'ClientId',
      value: this.clientId!.toString(),
    });
  }
}

