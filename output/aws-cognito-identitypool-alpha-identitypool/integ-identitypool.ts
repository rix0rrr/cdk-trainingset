import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIdentitypoolProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIdentitypool extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegIdentitypoolProps = {}) {
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
    const otherPool7Da7f2f7 = new cognito.CfnUserPool(this, 'OtherPool7DA7F2F7', {
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
    otherPool7Da7f2f7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const poolD3f588b8 = new cognito.CfnUserPool(this, 'PoolD3F588B8', {
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
    poolD3f588b8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    const otherPoolProviderAmazon4Eb0592f = new cognito.CfnUserPoolIdentityProvider(this, 'OtherPoolProviderAmazon4EB0592F', {
      providerName: 'LoginWithAmazon',
      providerType: 'LoginWithAmazon',
      userPoolId: otherPool7Da7f2f7.ref,
      attributeMapping: {
        'given_name': 'name',
        email: 'email',
        userId: 'user_id',
      },
      providerDetails: {
        'client_id': 'amzn-client-id',
        'client_secret': 'amzn-client-secret',
        'authorize_scopes': 'profile',
      },
    });

    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    const poolProviderGoogle76A1e8d0 = new cognito.CfnUserPoolIdentityProvider(this, 'PoolProviderGoogle76A1E8D0', {
      providerName: 'Google',
      providerType: 'Google',
      userPoolId: poolD3f588b8.ref,
      attributeMapping: {
        'given_name': 'given_name',
        'family_name': 'family_name',
        email: 'email',
        gender: 'gender',
        names: 'names',
      },
      providerDetails: {
        'client_id': 'google-client-id',
        'client_secret': 'google-client-secret',
        'authorize_scopes': 'profile',
      },
    });

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolProviderAmazon4Eb0592f == null) { throw new Error(`A combination of conditions caused 'otherPoolProviderAmazon4Eb0592f' to be undefined. Fixit.`); }
    const otherPoolUserPoolAuthenticationProviderClient08F670f8 = new cognito.CfnUserPoolClient(this, 'OtherPoolUserPoolAuthenticationProviderClient08F670F8', {
      userPoolId: otherPool7Da7f2f7.ref,
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
        otherPoolProviderAmazon4Eb0592f.ref,
        'COGNITO',
      ],
    });

    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (poolProviderGoogle76A1e8d0 == null) { throw new Error(`A combination of conditions caused 'poolProviderGoogle76A1e8d0' to be undefined. Fixit.`); }
    const pooltestClientFe8d4935 = new cognito.CfnUserPoolClient(this, 'PooltestClientFE8D4935', {
      userPoolId: poolD3f588b8.ref,
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
        poolProviderGoogle76A1e8d0.ref,
        'COGNITO',
      ],
    });

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    const identitypoolE2a6d099 = new cognito.CfnIdentityPool(this, 'identitypoolE2A6D099', {
      allowUnauthenticatedIdentities: false,
      allowClassicFlow: true,
      cognitoIdentityProviders: [
        {
          clientId: pooltestClientFe8d4935.ref,
          providerName: [
            'cognito-idp.',
            this.region,
            '.',
            this.urlSuffix,
            '/',
            poolD3f588b8.ref,
          ].join(''),
          serverSideTokenCheck: true,
        },
        {
          clientId: otherPoolUserPoolAuthenticationProviderClient08F670f8.ref,
          providerName: [
            'cognito-idp.',
            this.region,
            '.',
            this.urlSuffix,
            '/',
            otherPool7Da7f2f7.ref,
          ].join(''),
          serverSideTokenCheck: true,
        },
      ],
      identityPoolName: 'my-id-pool',
      supportedLoginProviders: {
        'www.amazon.com': 'amzn1.application.12312k3j234j13rjiwuenf',
        'accounts.google.com': '12345678012.apps.googleusercontent.com',
      },
    });
    identitypoolE2a6d099.addDependency(otherPool7Da7f2f7);
    identitypoolE2a6d099.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolE2a6d099.addDependency(poolD3f588b8);
    identitypoolE2a6d099.addDependency(pooltestClientFe8d4935);

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    if (identitypoolE2a6d099 == null) { throw new Error(`A combination of conditions caused 'identitypoolE2a6d099' to be undefined. Fixit.`); }
    const identitypoolAuthenticatedRoleB074b49d = new iam.CfnRole(this, 'identitypoolAuthenticatedRoleB074B49D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRoleWithWebIdentity',
            Condition: {
              StringEquals: {
                'cognito-identity.amazonaws.com:aud': identitypoolE2a6d099.ref,
              },
              'ForAnyValue:StringLike': {
                'cognito-identity.amazonaws.com:amr': 'authenticated',
              },
            },
            Effect: 'Allow',
            Principal: {
              Federated: 'cognito-identity.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      description: [
        'Default Authenticated Role for Identity Pool ',
        identitypoolE2a6d099.attrName,
      ].join(''),
    });
    identitypoolAuthenticatedRoleB074b49d.addDependency(otherPool7Da7f2f7);
    identitypoolAuthenticatedRoleB074b49d.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolAuthenticatedRoleB074b49d.addDependency(poolD3f588b8);
    identitypoolAuthenticatedRoleB074b49d.addDependency(pooltestClientFe8d4935);

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    if (identitypoolE2a6d099 == null) { throw new Error(`A combination of conditions caused 'identitypoolE2a6d099' to be undefined. Fixit.`); }
    const identitypoolUnauthenticatedRoleE61cac70 = new iam.CfnRole(this, 'identitypoolUnauthenticatedRoleE61CAC70', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRoleWithWebIdentity',
            Condition: {
              StringEquals: {
                'cognito-identity.amazonaws.com:aud': identitypoolE2a6d099.ref,
              },
              'ForAnyValue:StringLike': {
                'cognito-identity.amazonaws.com:amr': 'unauthenticated',
              },
            },
            Effect: 'Allow',
            Principal: {
              Federated: 'cognito-identity.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      description: [
        'Default Unauthenticated Role for Identity Pool ',
        identitypoolE2a6d099.attrName,
      ].join(''),
    });
    identitypoolUnauthenticatedRoleE61cac70.addDependency(otherPool7Da7f2f7);
    identitypoolUnauthenticatedRoleE61cac70.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolUnauthenticatedRoleE61cac70.addDependency(poolD3f588b8);
    identitypoolUnauthenticatedRoleE61cac70.addDependency(pooltestClientFe8d4935);

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    if (identitypoolAuthenticatedRoleB074b49d == null) { throw new Error(`A combination of conditions caused 'identitypoolAuthenticatedRoleB074b49d' to be undefined. Fixit.`); }
    const identitypoolAuthenticatedRoleDefaultPolicyCb4d2992 = new iam.CfnPolicy(this, 'identitypoolAuthenticatedRoleDefaultPolicyCB4D2992', {
      policyDocument: {
        Statement: [
          {
            Action: 'dynamodb:*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'identitypoolAuthenticatedRoleDefaultPolicyCB4D2992',
      roles: [
        identitypoolAuthenticatedRoleB074b49d.ref,
      ],
    });
    identitypoolAuthenticatedRoleDefaultPolicyCb4d2992.addDependency(otherPool7Da7f2f7);
    identitypoolAuthenticatedRoleDefaultPolicyCb4d2992.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolAuthenticatedRoleDefaultPolicyCb4d2992.addDependency(poolD3f588b8);
    identitypoolAuthenticatedRoleDefaultPolicyCb4d2992.addDependency(pooltestClientFe8d4935);

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    if (identitypoolAuthenticatedRoleB074b49d == null) { throw new Error(`A combination of conditions caused 'identitypoolAuthenticatedRoleB074b49d' to be undefined. Fixit.`); }
    if (identitypoolE2a6d099 == null) { throw new Error(`A combination of conditions caused 'identitypoolE2a6d099' to be undefined. Fixit.`); }
    if (identitypoolUnauthenticatedRoleE61cac70 == null) { throw new Error(`A combination of conditions caused 'identitypoolUnauthenticatedRoleE61cac70' to be undefined. Fixit.`); }
    const identitypoolDefaultRoleAttachment6Bcab114 = new cognito.CfnIdentityPoolRoleAttachment(this, 'identitypoolDefaultRoleAttachment6BCAB114', {
      identityPoolId: identitypoolE2a6d099.ref,
      roleMappings: {
        theKey: {
          AmbiguousRoleResolution: 'Deny',
          IdentityProvider: [
            poolD3f588b8.attrProviderName,
            ':',
            pooltestClientFe8d4935.ref,
          ].join(''),
          Type: 'Token',
        },
      },
      roles: {
        authenticated: identitypoolAuthenticatedRoleB074b49d.attrArn,
        unauthenticated: identitypoolUnauthenticatedRoleE61cac70.attrArn,
      },
    });
    identitypoolDefaultRoleAttachment6Bcab114.addDependency(otherPool7Da7f2f7);
    identitypoolDefaultRoleAttachment6Bcab114.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolDefaultRoleAttachment6Bcab114.addDependency(poolD3f588b8);
    identitypoolDefaultRoleAttachment6Bcab114.addDependency(pooltestClientFe8d4935);

    if (otherPool7Da7f2f7 == null) { throw new Error(`A combination of conditions caused 'otherPool7Da7f2f7' to be undefined. Fixit.`); }
    if (otherPoolUserPoolAuthenticationProviderClient08F670f8 == null) { throw new Error(`A combination of conditions caused 'otherPoolUserPoolAuthenticationProviderClient08F670f8' to be undefined. Fixit.`); }
    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    if (pooltestClientFe8d4935 == null) { throw new Error(`A combination of conditions caused 'pooltestClientFe8d4935' to be undefined. Fixit.`); }
    if (identitypoolUnauthenticatedRoleE61cac70 == null) { throw new Error(`A combination of conditions caused 'identitypoolUnauthenticatedRoleE61cac70' to be undefined. Fixit.`); }
    const identitypoolUnauthenticatedRoleDefaultPolicyBfacce98 = new iam.CfnPolicy(this, 'identitypoolUnauthenticatedRoleDefaultPolicyBFACCE98', {
      policyDocument: {
        Statement: [
          {
            Action: 'dynamodb:Get*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'identitypoolUnauthenticatedRoleDefaultPolicyBFACCE98',
      roles: [
        identitypoolUnauthenticatedRoleE61cac70.ref,
      ],
    });
    identitypoolUnauthenticatedRoleDefaultPolicyBfacce98.addDependency(otherPool7Da7f2f7);
    identitypoolUnauthenticatedRoleDefaultPolicyBfacce98.addDependency(otherPoolUserPoolAuthenticationProviderClient08F670f8);
    identitypoolUnauthenticatedRoleDefaultPolicyBfacce98.addDependency(poolD3f588b8);
    identitypoolUnauthenticatedRoleDefaultPolicyBfacce98.addDependency(pooltestClientFe8d4935);
  }
}

