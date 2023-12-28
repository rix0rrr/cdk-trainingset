import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface integ-user-pool-resource-serverProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-pool-resource-server extends cdk.Stack {
  public readonly poolid;
  public readonly clientid;

  public constructor(scope: cdk.App, id: string, props: integ-user-pool-resource-serverProps = {}) {
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
        allowAdminCreateUserOnly: true,
      },
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      smsVerificationMessage: 'The verification code to your new account is {####}',
      userPoolName: 'MyUserPool',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    myuserpool01998219.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolmyserver50C4d8e9 = new cognito.CfnUserPoolResourceServer(this, 'myuserpoolmyserver50C4D8E9', {
      identifier: 'users',
      name: 'users',
      userPoolId: myuserpool01998219.ref,
      scopes: [
        {
          scopeDescription: 'read only',
          scopeName: 'read',
        },
      ],
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (myuserpoolmyserver50C4d8e9 == null) { throw new Error(`A combination of conditions caused 'myuserpoolmyserver50C4d8e9' to be undefined. Fixit.`); }
    const myuserpoolclientC5fa41ec = new cognito.CfnUserPoolClient(this, 'myuserpoolclientC5FA41EC', {
      userPoolId: myuserpool01998219.ref,
      allowedOAuthFlows: [
        'client_credentials',
      ],
      allowedOAuthFlowsUserPoolClient: true,
      allowedOAuthScopes: [
        [
          myuserpoolmyserver50C4d8e9.ref,
          '/read',
        ].join(''),
      ],
      clientName: 'users-app',
      generateSecret: true,
      supportedIdentityProviders: [
        'COGNITO',
      ],
    });

    // Outputs
    this.poolid = myuserpool01998219.ref;
    new cdk.CfnOutput(this, 'CfnOutputpoolid', {
      key: 'poolid',
      value: this.poolid!.toString(),
    });
    this.clientid = myuserpoolclientC5fa41ec.ref;
    new cdk.CfnOutput(this, 'CfnOutputclientid', {
      key: 'clientid',
      value: this.clientid!.toString(),
    });
  }
}

