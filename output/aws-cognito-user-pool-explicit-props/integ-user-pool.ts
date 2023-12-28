import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-user-poolProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-user-pool extends cdk.Stack {
  public readonly userpoolId;
  public readonly cognitoDomainName;

  public constructor(scope: cdk.App, id: string, props: integ-user-poolProps = {}) {
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
    const createAuthChallengeServiceRole611710B5 = new iam.CfnRole(this, 'createAuthChallengeServiceRole611710B5', {
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

    const customMessageServiceRoleB4ae7f17 = new iam.CfnRole(this, 'customMessageServiceRoleB4AE7F17', {
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

    const defineAuthChallengeServiceRole9E2d15df = new iam.CfnRole(this, 'defineAuthChallengeServiceRole9E2D15DF', {
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

    const myuserpoolsmsRole0E16fdd9 = new iam.CfnRole(this, 'myuserpoolsmsRole0E16FDD9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'sts:ExternalId': 'integuserpoolmyuserpoolDA38443C',
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

    const postAuthenticationServiceRole5B3b242a = new iam.CfnRole(this, 'postAuthenticationServiceRole5B3B242A', {
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

    const postConfirmationServiceRole864Be5f9 = new iam.CfnRole(this, 'postConfirmationServiceRole864BE5F9', {
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

    const preAuthenticationServiceRole9712F4d8 = new iam.CfnRole(this, 'preAuthenticationServiceRole9712F4D8', {
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

    const preSignUpServiceRole0A7e91eb = new iam.CfnRole(this, 'preSignUpServiceRole0A7E91EB', {
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

    const preTokenGenerationServiceRole430C3d14 = new iam.CfnRole(this, 'preTokenGenerationServiceRole430C3D14', {
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

    const userMigrationServiceRole091766B0 = new iam.CfnRole(this, 'userMigrationServiceRole091766B0', {
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

    const verifyAuthChallengeResponseServiceRole7077884C = new iam.CfnRole(this, 'verifyAuthChallengeResponseServiceRole7077884C', {
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

    if (createAuthChallengeServiceRole611710B5 == null) { throw new Error(`A combination of conditions caused 'createAuthChallengeServiceRole611710B5' to be undefined. Fixit.`); }
    const createAuthChallengeB185b225 = new lambda.CfnFunction(this, 'createAuthChallengeB185B225', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'createAuthChallenge',
      handler: 'index.handler',
      role: createAuthChallengeServiceRole611710B5.attrArn,
      runtime: 'nodejs18.x',
    });
    createAuthChallengeB185b225.addDependency(createAuthChallengeServiceRole611710B5);

    if (customMessageServiceRoleB4ae7f17 == null) { throw new Error(`A combination of conditions caused 'customMessageServiceRoleB4ae7f17' to be undefined. Fixit.`); }
    const customMessage52Ba91e2 = new lambda.CfnFunction(this, 'customMessage52BA91E2', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'customMessage',
      handler: 'index.handler',
      role: customMessageServiceRoleB4ae7f17.attrArn,
      runtime: 'nodejs18.x',
    });
    customMessage52Ba91e2.addDependency(customMessageServiceRoleB4ae7f17);

    if (defineAuthChallengeServiceRole9E2d15df == null) { throw new Error(`A combination of conditions caused 'defineAuthChallengeServiceRole9E2d15df' to be undefined. Fixit.`); }
    const defineAuthChallengeAe7bcda1 = new lambda.CfnFunction(this, 'defineAuthChallengeAE7BCDA1', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'defineAuthChallenge',
      handler: 'index.handler',
      role: defineAuthChallengeServiceRole9E2d15df.attrArn,
      runtime: 'nodejs18.x',
    });
    defineAuthChallengeAe7bcda1.addDependency(defineAuthChallengeServiceRole9E2d15df);

    if (postAuthenticationServiceRole5B3b242a == null) { throw new Error(`A combination of conditions caused 'postAuthenticationServiceRole5B3b242a' to be undefined. Fixit.`); }
    const postAuthentication741Bd8e3 = new lambda.CfnFunction(this, 'postAuthentication741BD8E3', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'postAuthentication',
      handler: 'index.handler',
      role: postAuthenticationServiceRole5B3b242a.attrArn,
      runtime: 'nodejs18.x',
    });
    postAuthentication741Bd8e3.addDependency(postAuthenticationServiceRole5B3b242a);

    if (postConfirmationServiceRole864Be5f9 == null) { throw new Error(`A combination of conditions caused 'postConfirmationServiceRole864Be5f9' to be undefined. Fixit.`); }
    const postConfirmationD5e3f1dd = new lambda.CfnFunction(this, 'postConfirmationD5E3F1DD', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'postConfirmation',
      handler: 'index.handler',
      role: postConfirmationServiceRole864Be5f9.attrArn,
      runtime: 'nodejs18.x',
    });
    postConfirmationD5e3f1dd.addDependency(postConfirmationServiceRole864Be5f9);

    if (preAuthenticationServiceRole9712F4d8 == null) { throw new Error(`A combination of conditions caused 'preAuthenticationServiceRole9712F4d8' to be undefined. Fixit.`); }
    const preAuthentication56F78c81 = new lambda.CfnFunction(this, 'preAuthentication56F78C81', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'preAuthentication',
      handler: 'index.handler',
      role: preAuthenticationServiceRole9712F4d8.attrArn,
      runtime: 'nodejs18.x',
    });
    preAuthentication56F78c81.addDependency(preAuthenticationServiceRole9712F4d8);

    if (preSignUpServiceRole0A7e91eb == null) { throw new Error(`A combination of conditions caused 'preSignUpServiceRole0A7e91eb' to be undefined. Fixit.`); }
    const preSignUp1934B27c = new lambda.CfnFunction(this, 'preSignUp1934B27C', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'preSignUp',
      handler: 'index.handler',
      role: preSignUpServiceRole0A7e91eb.attrArn,
      runtime: 'nodejs18.x',
    });
    preSignUp1934B27c.addDependency(preSignUpServiceRole0A7e91eb);

    if (preTokenGenerationServiceRole430C3d14 == null) { throw new Error(`A combination of conditions caused 'preTokenGenerationServiceRole430C3d14' to be undefined. Fixit.`); }
    const preTokenGeneration1E968302 = new lambda.CfnFunction(this, 'preTokenGeneration1E968302', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'preTokenGeneration',
      handler: 'index.handler',
      role: preTokenGenerationServiceRole430C3d14.attrArn,
      runtime: 'nodejs18.x',
    });
    preTokenGeneration1E968302.addDependency(preTokenGenerationServiceRole430C3d14);

    if (userMigrationServiceRole091766B0 == null) { throw new Error(`A combination of conditions caused 'userMigrationServiceRole091766B0' to be undefined. Fixit.`); }
    const userMigrationAaa960ec = new lambda.CfnFunction(this, 'userMigrationAAA960EC', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'userMigration',
      handler: 'index.handler',
      role: userMigrationServiceRole091766B0.attrArn,
      runtime: 'nodejs18.x',
    });
    userMigrationAaa960ec.addDependency(userMigrationServiceRole091766B0);

    if (verifyAuthChallengeResponseServiceRole7077884C == null) { throw new Error(`A combination of conditions caused 'verifyAuthChallengeResponseServiceRole7077884C' to be undefined. Fixit.`); }
    const verifyAuthChallengeResponse211Fe4a6 = new lambda.CfnFunction(this, 'verifyAuthChallengeResponse211FE4A6', {
      code: {
        zipFile: 'foo',
      },
      functionName: 'verifyAuthChallengeResponse',
      handler: 'index.handler',
      role: verifyAuthChallengeResponseServiceRole7077884C.attrArn,
      runtime: 'nodejs18.x',
    });
    verifyAuthChallengeResponse211Fe4a6.addDependency(verifyAuthChallengeResponseServiceRole7077884C);

    if (createAuthChallengeB185b225 == null) { throw new Error(`A combination of conditions caused 'createAuthChallengeB185b225' to be undefined. Fixit.`); }
    if (customMessage52Ba91e2 == null) { throw new Error(`A combination of conditions caused 'customMessage52Ba91e2' to be undefined. Fixit.`); }
    if (defineAuthChallengeAe7bcda1 == null) { throw new Error(`A combination of conditions caused 'defineAuthChallengeAe7bcda1' to be undefined. Fixit.`); }
    if (myuserpoolsmsRole0E16fdd9 == null) { throw new Error(`A combination of conditions caused 'myuserpoolsmsRole0E16fdd9' to be undefined. Fixit.`); }
    if (postAuthentication741Bd8e3 == null) { throw new Error(`A combination of conditions caused 'postAuthentication741Bd8e3' to be undefined. Fixit.`); }
    if (postConfirmationD5e3f1dd == null) { throw new Error(`A combination of conditions caused 'postConfirmationD5e3f1dd' to be undefined. Fixit.`); }
    if (preAuthentication56F78c81 == null) { throw new Error(`A combination of conditions caused 'preAuthentication56F78c81' to be undefined. Fixit.`); }
    if (preSignUp1934B27c == null) { throw new Error(`A combination of conditions caused 'preSignUp1934B27c' to be undefined. Fixit.`); }
    if (preTokenGeneration1E968302 == null) { throw new Error(`A combination of conditions caused 'preTokenGeneration1E968302' to be undefined. Fixit.`); }
    if (userMigrationAaa960ec == null) { throw new Error(`A combination of conditions caused 'userMigrationAaa960ec' to be undefined. Fixit.`); }
    if (verifyAuthChallengeResponse211Fe4a6 == null) { throw new Error(`A combination of conditions caused 'verifyAuthChallengeResponse211Fe4a6' to be undefined. Fixit.`); }
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
        inviteMessageTemplate: {
          emailMessage: 'invitation email body from the integ test for {username}. Temp password is {####}.',
          emailSubject: 'invitation email subject from the integ test',
          smsMessage: 'invitation sms message from the integ test for {username}. Temp password is {####}.',
        },
      },
      aliasAttributes: [
        'email',
      ],
      autoVerifiedAttributes: [
        'email',
        'phone_number',
      ],
      emailVerificationMessage: 'verification email body from the integ test. Code is {####}.',
      emailVerificationSubject: 'verification email subject from the integ test',
      lambdaConfig: {
        createAuthChallenge: createAuthChallengeB185b225.attrArn,
        customMessage: customMessage52Ba91e2.attrArn,
        defineAuthChallenge: defineAuthChallengeAe7bcda1.attrArn,
        postAuthentication: postAuthentication741Bd8e3.attrArn,
        postConfirmation: postConfirmationD5e3f1dd.attrArn,
        preAuthentication: preAuthentication56F78c81.attrArn,
        preSignUp: preSignUp1934B27c.attrArn,
        preTokenGeneration: preTokenGeneration1E968302.attrArn,
        userMigration: userMigrationAaa960ec.attrArn,
        verifyAuthChallengeResponse: verifyAuthChallengeResponse211Fe4a6.attrArn,
      },
      mfaConfiguration: 'OFF',
      policies: {
        passwordPolicy: {
          minimumLength: 12,
          requireLowercase: true,
          requireNumbers: true,
          requireSymbols: true,
          requireUppercase: true,
          temporaryPasswordValidityDays: 10,
        },
      },
      schema: [
        {
          mutable: true,
          name: 'name',
          required: true,
        },
        {
          mutable: true,
          name: 'email',
          required: true,
        },
        {
          attributeDataType: 'String',
          name: 'some-string-attr',
        },
        {
          attributeDataType: 'String',
          name: 'another-string-attr',
          stringAttributeConstraints: {
            maxLength: '100',
            minLength: '4',
          },
        },
        {
          attributeDataType: 'Number',
          name: 'some-number-attr',
        },
        {
          attributeDataType: 'Number',
          name: 'another-number-attr',
          numberAttributeConstraints: {
            maxValue: '50',
            minValue: '10',
          },
        },
        {
          attributeDataType: 'Boolean',
          name: 'some-boolean-attr',
        },
        {
          attributeDataType: 'DateTime',
          name: 'some-datetime-attr',
        },
      ],
      smsConfiguration: {
        externalId: 'integuserpoolmyuserpoolDA38443C',
        snsCallerArn: myuserpoolsmsRole0E16fdd9.attrArn,
        snsRegion: this.region,
      },
      smsVerificationMessage: 'verification sms message from the integ test. Code is {####}.',
      userAttributeUpdateSettings: {
        attributesRequireVerificationBeforeUpdate: [
          'email',
          'phone_number',
        ],
      },
      userPoolAddOns: {
        advancedSecurityMode: 'ENFORCED',
      },
      userPoolName: 'MyUserPool',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'verification email body from the integ test. Code is {####}.',
        emailSubject: 'verification email subject from the integ test',
        smsMessage: 'verification sms message from the integ test. Code is {####}.',
      },
    });
    myuserpool01998219.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (createAuthChallengeB185b225 == null) { throw new Error(`A combination of conditions caused 'createAuthChallengeB185b225' to be undefined. Fixit.`); }
    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolCreateAuthChallengeCognitoCe4a6821 = new lambda.CfnPermission(this, 'myuserpoolCreateAuthChallengeCognitoCE4A6821', {
      action: 'lambda:InvokeFunction',
      functionName: createAuthChallengeB185b225.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (customMessage52Ba91e2 == null) { throw new Error(`A combination of conditions caused 'customMessage52Ba91e2' to be undefined. Fixit.`); }
    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolCustomMessageCognito8057432C = new lambda.CfnPermission(this, 'myuserpoolCustomMessageCognito8057432C', {
      action: 'lambda:InvokeFunction',
      functionName: customMessage52Ba91e2.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (defineAuthChallengeAe7bcda1 == null) { throw new Error(`A combination of conditions caused 'defineAuthChallengeAe7bcda1' to be undefined. Fixit.`); }
    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolDefineAuthChallengeCognito81526Ecf = new lambda.CfnPermission(this, 'myuserpoolDefineAuthChallengeCognito81526ECF', {
      action: 'lambda:InvokeFunction',
      functionName: defineAuthChallengeAe7bcda1.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (postAuthentication741Bd8e3 == null) { throw new Error(`A combination of conditions caused 'postAuthentication741Bd8e3' to be undefined. Fixit.`); }
    const myuserpoolPostAuthenticationCognito83D5bae9 = new lambda.CfnPermission(this, 'myuserpoolPostAuthenticationCognito83D5BAE9', {
      action: 'lambda:InvokeFunction',
      functionName: postAuthentication741Bd8e3.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (postConfirmationD5e3f1dd == null) { throw new Error(`A combination of conditions caused 'postConfirmationD5e3f1dd' to be undefined. Fixit.`); }
    const myuserpoolPostConfirmationCognitoB4f79e1c = new lambda.CfnPermission(this, 'myuserpoolPostConfirmationCognitoB4F79E1C', {
      action: 'lambda:InvokeFunction',
      functionName: postConfirmationD5e3f1dd.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (preAuthentication56F78c81 == null) { throw new Error(`A combination of conditions caused 'preAuthentication56F78c81' to be undefined. Fixit.`); }
    const myuserpoolPreAuthenticationCognitoE1c7aed3 = new lambda.CfnPermission(this, 'myuserpoolPreAuthenticationCognitoE1C7AED3', {
      action: 'lambda:InvokeFunction',
      functionName: preAuthentication56F78c81.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (preSignUp1934B27c == null) { throw new Error(`A combination of conditions caused 'preSignUp1934B27c' to be undefined. Fixit.`); }
    const myuserpoolPreSignUpCognitoD6ce8cad = new lambda.CfnPermission(this, 'myuserpoolPreSignUpCognitoD6CE8CAD', {
      action: 'lambda:InvokeFunction',
      functionName: preSignUp1934B27c.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (preTokenGeneration1E968302 == null) { throw new Error(`A combination of conditions caused 'preTokenGeneration1E968302' to be undefined. Fixit.`); }
    const myuserpoolPreTokenGenerationCognitoF1714665 = new lambda.CfnPermission(this, 'myuserpoolPreTokenGenerationCognitoF1714665', {
      action: 'lambda:InvokeFunction',
      functionName: preTokenGeneration1E968302.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (userMigrationAaa960ec == null) { throw new Error(`A combination of conditions caused 'userMigrationAaa960ec' to be undefined. Fixit.`); }
    const myuserpoolUserMigrationCognito56734Afb = new lambda.CfnPermission(this, 'myuserpoolUserMigrationCognito56734AFB', {
      action: 'lambda:InvokeFunction',
      functionName: userMigrationAaa960ec.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    if (verifyAuthChallengeResponse211Fe4a6 == null) { throw new Error(`A combination of conditions caused 'verifyAuthChallengeResponse211Fe4a6' to be undefined. Fixit.`); }
    const myuserpoolVerifyAuthChallengeResponseCognitoAeab40fd = new lambda.CfnPermission(this, 'myuserpoolVerifyAuthChallengeResponseCognitoAEAB40FD', {
      action: 'lambda:InvokeFunction',
      functionName: verifyAuthChallengeResponse211Fe4a6.attrArn,
      principal: 'cognito-idp.amazonaws.com',
      sourceArn: myuserpool01998219.attrArn,
    });

    if (myuserpool01998219 == null) { throw new Error(`A combination of conditions caused 'myuserpool01998219' to be undefined. Fixit.`); }
    const myuserpoolmyuserpooldomainEe1e11af = new cognito.CfnUserPoolDomain(this, 'myuserpoolmyuserpooldomainEE1E11AF', {
      domain: 'cdkintegrationtestuserpoolexplicitprops',
      userPoolId: myuserpool01998219.ref,
    });

    // Outputs
    this.userpoolId = myuserpool01998219.ref;
    new cdk.CfnOutput(this, 'CfnOutputuserpoolId', {
      key: 'userpoolId',
      value: this.userpoolId!.toString(),
    });
    this.cognitoDomainName = [
      myuserpoolmyuserpooldomainEe1e11af.ref,
      '.auth.',
      this.region,
      '.amazoncognito.com',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputcognitoDomainName', {
      key: 'cognitoDomainName',
      value: this.cognitoDomainName!.toString(),
    });
  }
}

