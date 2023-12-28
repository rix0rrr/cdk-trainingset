import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface IntegUserPoolIdpGoogleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegUserPoolIdpGoogle extends cdk.Stack {
  public readonly signInLink;

  public constructor(scope: cdk.App, id: string, props: IntegUserPoolIdpGoogleProps = {}) {
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
    const googleClientSecretValueD28c3034 = new secretsmanager.CfnSecret(this, 'GoogleClientSecretValueD28C3034', {
      generateSecretString: {
        excludePunctuation: true,
        passwordLength: 20,
      },
      name: 'GoogleClientSecretValueName',
    });
    googleClientSecretValueD28c3034.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (googleClientSecretValueD28c3034 == null) { throw new Error(`A combination of conditions caused 'googleClientSecretValueD28c3034' to be undefined. Fixit.`); }
    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const googleDb2c5242 = new cognito.CfnUserPoolIdentityProvider(this, 'googleDB2C5242', {
      providerName: 'Google',
      providerType: 'Google',
      userPoolId: pool056F3f7e.ref,
      attributeMapping: {
        'given_name': 'given_name',
        'family_name': 'family_name',
        email: 'email',
        gender: 'gender',
        names: 'names',
      },
      providerDetails: {
        'client_id': 'google-client-id',
        'client_secret': [
          '{{resolve:secretsmanager:',
          googleClientSecretValueD28c3034.ref,
          ':SecretString:::}}',
        ].join(''),
        'authorize_scopes': 'profile',
      },
    });

    if (pool056F3f7e == null) { throw new Error(`A combination of conditions caused 'pool056F3f7e' to be undefined. Fixit.`); }
    const pooldomain430Fa744 = new cognito.CfnUserPoolDomain(this, 'pooldomain430FA744', {
      domain: 'nija-test-pool',
      userPoolId: pool056F3f7e.ref,
    });

    if (googleDb2c5242 == null) { throw new Error(`A combination of conditions caused 'googleDb2c5242' to be undefined. Fixit.`); }
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
        googleDb2c5242.ref,
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

