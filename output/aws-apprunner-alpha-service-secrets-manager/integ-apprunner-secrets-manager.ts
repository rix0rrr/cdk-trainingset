import * as cdk from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface IntegApprunnerSecretsManagerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegApprunnerSecretsManager extends cdk.Stack {
  public readonly url8;

  public constructor(scope: cdk.App, id: string, props: IntegApprunnerSecretsManagerProps = {}) {
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
      secretString: '{\"password\":\"mySecretPassword\",\"apikey\":\"mySecretApiKey\"}',
    });
    secretA720ef05.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const service8InstanceRole6Cc2a03a = new iam.CfnRole(this, 'Service8InstanceRole6CC2A03A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'tasks.apprunner.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const string0Ba8456e = new ssm.CfnParameter(this, 'String0BA8456E', {
      type: 'String',
      value: 'Abc123',
      name: '/My/Public/Parameter',
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    if (service8InstanceRole6Cc2a03a == null) { throw new Error(`A combination of conditions caused 'service8InstanceRole6Cc2a03a' to be undefined. Fixit.`); }
    const service86269A78b = new apprunner.CfnService(this, 'Service86269A78B', {
      sourceConfiguration: {
        authenticationConfiguration: {
        },
        imageRepository: {
          imageConfiguration: {
            port: '8000',
            runtimeEnvironmentSecrets: [
              {
                name: 'PASSWORD',
                value: [
                  secretA720ef05.ref,
                  ':password::',
                ].join(''),
              },
              {
                name: 'PARAMETER',
                value: [
                  'arn:',
                  this.partition,
                  ':ssm:',
                  this.region,
                  ':',
                  this.account,
                  ':parameter/My/Public/Parameter',
                ].join(''),
              },
              {
                name: 'API_KEY',
                value: [
                  secretA720ef05.ref,
                  ':apikey::',
                ].join(''),
              },
            ],
          },
          imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
          imageRepositoryType: 'ECR_PUBLIC',
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service8InstanceRole6Cc2a03a.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    if (service8InstanceRole6Cc2a03a == null) { throw new Error(`A combination of conditions caused 'service8InstanceRole6Cc2a03a' to be undefined. Fixit.`); }
    const service8InstanceRoleDefaultPolicy7Bc4087d = new iam.CfnPolicy(this, 'Service8InstanceRoleDefaultPolicy7BC4087D', {
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
          {
            Action: [
              'ssm:DescribeParameters',
              'ssm:GetParameter',
              'ssm:GetParameterHistory',
              'ssm:GetParameters',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/My/Public/Parameter',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Service8InstanceRoleDefaultPolicy7BC4087D',
      roles: [
        service8InstanceRole6Cc2a03a.ref,
      ],
    });

    // Outputs
    this.url8 = [
      'https://',
      service86269A78b.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL8', {
      key: 'URL8',
      value: this.url8!.toString(),
    });
  }
}

