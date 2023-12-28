import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface integ-user-ses-emailProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-ses-email extends cdk.Stack {
  public readonly userpoolid;

  public constructor(scope: cdk.App, id: string, props: integ-user-ses-emailProps = {}) {
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
      emailConfiguration: {
        emailSendingAccount: 'DEVELOPER',
        from: '\"myname@mycompany.com\" <noreply@example.com>',
        replyToEmailAddress: 'support@example.com',
        sourceArn: [
          'arn:',
          this.partition,
          ':ses:us-east-1:',
          this.account,
          ':identity/example.com',
        ].join(''),
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

    // Outputs
    this.userpoolid = myuserpool01998219.ref;
    new cdk.CfnOutput(this, 'CfnOutputuserpoolid', {
      key: 'userpoolid',
      value: this.userpoolid!.toString(),
    });
  }
}

