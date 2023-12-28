import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface IntegUserPoolDomainSigninurlProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegUserPoolDomainSigninurl extends cdk.Stack {
  public readonly signInUrl;

  public constructor(scope: cdk.App, id: string, props: IntegUserPoolDomainSigninurlProps = {}) {
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
    userPool6Ba7e5f2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (userPool6Ba7e5f2 == null) { throw new Error(`A combination of conditions caused 'userPool6Ba7e5f2' to be undefined. Fixit.`); }
    const userPoolDomainD0ea232a = new cognito.CfnUserPoolDomain(this, 'UserPoolDomainD0EA232A', {
      domain: 'cdk-integ-user-pool-domain',
      userPoolId: userPool6Ba7e5f2.ref,
    });

    if (userPool6Ba7e5f2 == null) { throw new Error(`A combination of conditions caused 'userPool6Ba7e5f2' to be undefined. Fixit.`); }
    const userPoolUserPoolClient40176907 = new cognito.CfnUserPoolClient(this, 'UserPoolUserPoolClient40176907', {
      userPoolId: userPool6Ba7e5f2.ref,
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
      supportedIdentityProviders: [
        'COGNITO',
      ],
    });

    // Outputs
    this.signInUrl = [
      'https://',
      userPoolDomainD0ea232a.ref,
      '.auth.',
      this.region,
      '.amazoncognito.com/login?client_id=',
      userPoolUserPoolClient40176907.ref,
      '&response_type=code&redirect_uri=https://example.com',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputSignInUrl', {
      key: 'SignInUrl',
      value: this.signInUrl!.toString(),
    });
  }
}

