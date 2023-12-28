import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-user-pool-signup-codeProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-pool-signup-code extends cdk.Stack {
  public readonly userpoolid;
  public readonly clientid;

  public constructor(scope: cdk.App, id: string, props: integ-user-pool-signup-codeProps = {}) {
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
    const myuserpoolsmsRole0E16fdd9 = new iam.CfnRole(this, 'myuserpoolsmsRole0E16FDD9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'sts:ExternalId': 'integuserpoolsignupcodemyuserpool08E7AAA5',
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'cognito-idp.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: 'sns:Publish',
                Effect: 'Allow',
                Resource: '*',
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'sns-publish',
        },
      ],
    });

    if (myuserpoolsmsRole0E16fdd9 == null) { throw new Error(`A combination of conditions caused 'myuserpoolsmsRole0E16fdd9' to be undefined. Fixit.`); }
    const myuserpool01998219 = new cognito.CfnUserPool(this, 'myuserpool01998219', {
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
        'phone_number',
      ],
      emailVerificationMessage: 'integ-test: Account verification code is {####}',
      emailVerificationSubject: 'integ-test: Verify your account',
      policies: {
        passwordPolicy: {
          minimumLength: 8,
          requireLowercase: false,
          requireNumbers: false,
          requireSymbols: false,
          requireUppercase: false,
        },
      },
      smsConfiguration: {
        externalId: 'integuserpoolsignupcodemyuserpool08E7AAA5',
        snsCallerArn: myuserpoolsmsRole0E16fdd9.attrArn,
      },
      smsVerificationMessage: 'integ-test: Account verification code is {####}',
      userPoolName: 'MyUserPool',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'integ-test: Account verification code is {####}',
        emailSubject: 'integ-test: Verify your account',
        smsMessage: 'integ-test: Account verification code is {####}',
      },
    });
    myuserpool01998219.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolclient8A58a3e4 = new cognito.CfnUserPoolClient(this, 'myuserpoolclient8A58A3E4', {
      userPoolId: myuserpool01998219.ref,
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
      clientName: 'signup-test',
      generateSecret: false,
      supportedIdentityProviders: [
        'COGNITO',
      ],
    });

    // Outputs
    this.userpoolid = myuserpool01998219.ref;
    new cdk.CfnOutput(this, 'CfnOutputuserpoolid', {
      key: 'userpoolid',
      value: this.userpoolid!.toString(),
    });
    this.clientid = myuserpoolclient8A58a3e4.ref;
    new cdk.CfnOutput(this, 'CfnOutputclientid', {
      key: 'clientid',
      value: this.clientid!.toString(),
    });
  }
}

