import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface Integ-SecretsManager-SecretProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Integ-SecretsManager-Secret extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integ-SecretsManager-SecretProps = {}) {
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
    const secretA720ef05 = new secretsmanager.CfnSecret(this, 'SecretA720EF05', {
      generateSecretString: {
      },
    });
    secretA720ef05.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const templatedSecret3D98b577 = new secretsmanager.CfnSecret(this, 'TemplatedSecret3D98B577', {
      generateSecretString: {
        generateStringKey: 'password',
        secretStringTemplate: '{\"username\":\"user\"}',
      },
    });
    templatedSecret3D98b577.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const testRole6C9272df = new iam.CfnRole(this, 'TestRole6C9272DF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (templatedSecret3D98b577 == null) { throw new Error(`A combination of conditions caused 'templatedSecret3D98b577' to be undefined. Fixit.`); }
    const otherUser6093621C = new iam.CfnUser(this, 'OtherUser6093621C', {
      loginProfile: {
        password: [
          '{{resolve:secretsmanager:',
          templatedSecret3D98b577.ref,
          ':SecretString:password::}}',
        ].join(''),
      },
      userName: [
        '{{resolve:secretsmanager:',
        templatedSecret3D98b577.ref,
        ':SecretString:username::}}',
      ].join(''),
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    if (testRole6C9272df == null) { throw new Error(`A combination of conditions caused 'testRole6C9272df' to be undefined. Fixit.`); }
    const testRoleDefaultPolicyD1c92014 = new iam.CfnPolicy(this, 'TestRoleDefaultPolicyD1C92014', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: secretA720ef05.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TestRoleDefaultPolicyD1C92014',
      roles: [
        testRole6C9272df.ref,
      ],
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const user00B015a1 = new iam.CfnUser(this, 'User00B015A1', {
      loginProfile: {
        password: [
          '{{resolve:secretsmanager:',
          secretA720ef05.ref,
          ':SecretString:::}}',
        ].join(''),
      },
    });

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const accessKeyE6b25659 = new iam.CfnAccessKey(this, 'AccessKeyE6B25659', {
      userName: user00B015a1.ref,
    });

    if (accessKeyE6b25659 == null) { throw new Error(`A combination of conditions caused 'accessKeyE6b25659' to be undefined. Fixit.`); }
    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const jsonSecret6Fe68aef = new secretsmanager.CfnSecret(this, 'JSONSecret6FE68AEF', {
      secretString: [
        '{\"username\":\"',
        user00B015a1.ref,
        '\",\"database\":\"foo\",\"password\":\"',
        accessKeyE6b25659.attrSecretAccessKey,
        '\"}',
      ].join(''),
    });
    jsonSecret6Fe68aef.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (accessKeyE6b25659 == null) { throw new Error(`A combination of conditions caused 'accessKeyE6b25659' to be undefined. Fixit.`); }
    const predefinedSecret660Af4ec = new secretsmanager.CfnSecret(this, 'PredefinedSecret660AF4EC', {
      secretString: accessKeyE6b25659.attrSecretAccessKey,
    });
    predefinedSecret660Af4ec.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

