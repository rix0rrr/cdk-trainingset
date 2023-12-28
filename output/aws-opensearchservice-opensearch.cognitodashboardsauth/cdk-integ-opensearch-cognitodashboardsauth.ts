import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface CdkIntegOpensearchCognitodashboardsauthProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegOpensearchCognitodashboardsauth extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkIntegOpensearchCognitodashboardsauthProps = {}) {
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
    const identityPool = new cognito.CfnIdentityPool(this, 'IdentityPool', {
      allowUnauthenticatedIdentities: true,
    });

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'opensearchservice.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonOpenSearchServiceCognitoAccess',
        ].join(''),
      ],
    });

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

    if (identityPool == null) { throw new Error(`A combination of conditions caused 'identityPool' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (userPool6Ba7e5f2 == null) { throw new Error(`A combination of conditions caused 'userPool6Ba7e5f2' to be undefined. Fixit.`); }
    const domain66Ac69e0 = new opensearchservice.CfnDomain(this, 'Domain66AC69E0', {
      clusterConfig: {
        dedicatedMasterEnabled: false,
        instanceCount: 1,
        instanceType: 'r5.large.search',
        zoneAwarenessEnabled: false,
        multiAzWithStandbyEnabled: false,
      },
      cognitoOptions: {
        enabled: true,
        identityPoolId: identityPool.ref,
        roleArn: role1Abcc5f0.attrArn,
        userPoolId: userPool6Ba7e5f2.ref,
      },
      domainEndpointOptions: {
        enforceHttps: false,
        tlsSecurityPolicy: 'Policy-Min-TLS-1-0-2019-07',
      },
      ebsOptions: {
        ebsEnabled: true,
        volumeSize: 10,
        volumeType: 'gp2',
      },
      encryptionAtRestOptions: {
        enabled: false,
      },
      engineVersion: 'OpenSearch_1.0',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (userPool6Ba7e5f2 == null) { throw new Error(`A combination of conditions caused 'userPool6Ba7e5f2' to be undefined. Fixit.`); }
    const userPoolUserPoolDomain9F01e991 = new cognito.CfnUserPoolDomain(this, 'UserPoolUserPoolDomain9F01E991', {
      domain: 'integ-test-domain-prefix',
      userPoolId: userPool6Ba7e5f2.ref,
    });
  }
}

