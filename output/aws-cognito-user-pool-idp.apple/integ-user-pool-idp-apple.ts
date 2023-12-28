import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface integ-user-pool-idp-appleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-pool-idp-apple extends cdk.Stack {
  public readonly signInLink;

  public constructor(scope: cdk.App, id: string, props: integ-user-pool-idp-appleProps = {}) {
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
    pool056F3f7e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const apple9B5408ac = new cognito.CfnUserPoolIdentityProvider(this, 'apple9B5408AC', {
      providerName: 'SignInWithApple',
      providerType: 'SignInWithApple',
      userPoolId: pool056F3f7e.ref,
      attributeMapping: {
        'family_name': 'lastName',
        'given_name': 'firstName',
      },
      providerDetails: {
        'client_id': 'com.amzn.cdk',
        'team_id': 'CDKTEAMCDK',
        'key_id': 'CDKKEYCDK1',
        'private_key': 'PRIV_KEY_CDK',
        'authorize_scopes': 'email name',
      },
    });

    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const pooldomain430Fa744 = new cognito.CfnUserPoolDomain(this, 'pooldomain430FA744', {
      domain: 'nija-test-pool',
      userPoolId: pool056F3f7e.ref,
    });

    if (apple9B5408ac == null) { throw new Error(`A combination of conditions caused 'apple9B5408ac' to be undefined. Fixit.`); }
    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const poolclient2623294C = new cognito.CfnUserPoolClient(this, 'poolclient2623294C', {
      userPoolId: pool056F3f7e.ref,
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
        apple9B5408ac.ref,
        'COGNITO',
      ],
    });

    // Outputs
    this.signInLink = [
      'https://',
      pooldomain430Fa744.ref,
      '.auth.',
      this.region,
      '.amazoncognito.com/login?client_id=',
      poolclient2623294C.ref,
      '&response_type=code&redirect_uri=https://example.com',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputSignInLink', {
      key: 'SignInLink',
      value: this.signInLink!.toString(),
    });
  }
}

