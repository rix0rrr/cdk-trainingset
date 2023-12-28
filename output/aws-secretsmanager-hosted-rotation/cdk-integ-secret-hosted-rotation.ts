import * as cdk from 'aws-cdk-lib';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface cdk-integ-secret-hosted-rotationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-secret-hosted-rotation extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-secret-hosted-rotationProps = {}) {
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
    const customSecret5Dc95d87 = new secretsmanager.CfnSecret(this, 'CustomSecret5DC95D87', {
      generateSecretString: {
        excludeCharacters: '&@/',
      },
    });
    customSecret5Dc95d87.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const mySecret8Fe80b51 = new secretsmanager.CfnSecret(this, 'MySecret8FE80B51', {
      generateSecretString: {
      },
    });
    mySecret8Fe80b51.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const secretA720ef05 = new secretsmanager.CfnSecret(this, 'SecretA720EF05', {
      generateSecretString: {
      },
    });
    secretA720ef05.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (customSecret5Dc95d87 == null) { throw new Error(`A combination of conditions caused 'customSecret5Dc95d87' to be undefined. Fixit.`); }
    const customSecretPolicy8E81d2eb = new secretsmanager.CfnResourcePolicy(this, 'CustomSecretPolicy8E81D2EB', {
      resourcePolicy: {
        Statement: [
          {
            Action: 'secretsmanager:DeleteSecret',
            Effect: 'Deny',
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
      secretId: customSecret5Dc95d87.ref,
    });

    if (customSecret5Dc95d87 == null) { throw new Error(`A combination of conditions caused 'customSecret5Dc95d87' to be undefined. Fixit.`); }
    const customSecretScheduleDd99f351 = new secretsmanager.CfnRotationSchedule(this, 'CustomSecretScheduleDD99F351', {
      hostedRotationLambda: {
        excludeCharacters: '&@/',
        rotationType: 'MySQLSingleUser',
      },
      rotateImmediatelyOnUpdate: false,
      rotationRules: {
        scheduleExpression: 'rate(30 days)',
      },
      secretId: customSecret5Dc95d87.ref,
    });

    if (mySecret8Fe80b51 == null) { throw new Error(`A combination of conditions caused 'mySecret8Fe80b51' to be undefined. Fixit.`); }
    const mySecretPolicyDad0e682 = new secretsmanager.CfnResourcePolicy(this, 'MySecretPolicyDAD0E682', {
      resourcePolicy: {
        Statement: [
          {
            Action: 'secretsmanager:DeleteSecret',
            Effect: 'Deny',
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
      secretId: mySecret8Fe80b51.ref,
    });

    if (mySecret8Fe80b51 == null) { throw new Error(`A combination of conditions caused 'mySecret8Fe80b51' to be undefined. Fixit.`); }
    const mySecretRotationSchedule673B961c = new secretsmanager.CfnRotationSchedule(this, 'MySecretRotationSchedule673B961C', {
      hostedRotationLambda: {
        excludeCharacters: ' %+~`#$&*()|[]{}:;<>?!\'/@\"\\',
        masterSecretArn: [
          'arn:',
          this.partition,
          ':secretsmanager:',
          this.region,
          ':',
          this.account,
          ':secret:MasterSecret-??????',
        ].join(''),
        rotationType: 'PostgreSQLMultiUser',
      },
      rotationRules: {
        scheduleExpression: 'rate(30 days)',
      },
      secretId: mySecret8Fe80b51.ref,
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const secretPolicy06C9821c = new secretsmanager.CfnResourcePolicy(this, 'SecretPolicy06C9821C', {
      resourcePolicy: {
        Statement: [
          {
            Action: 'secretsmanager:DeleteSecret',
            Effect: 'Deny',
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
      secretId: secretA720ef05.ref,
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const secretSchedule18F2cb66 = new secretsmanager.CfnRotationSchedule(this, 'SecretSchedule18F2CB66', {
      hostedRotationLambda: {
        excludeCharacters: ' %+~`#$&*()|[]{}:;<>?!\'/@\"\\',
        rotationType: 'MySQLSingleUser',
      },
      rotationRules: {
        scheduleExpression: 'rate(30 days)',
      },
      secretId: secretA720ef05.ref,
    });
  }
}

