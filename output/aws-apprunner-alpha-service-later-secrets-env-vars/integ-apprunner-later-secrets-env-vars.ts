import * as cdk from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface integ-apprunner-later-secrets-env-varsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-apprunner-later-secrets-env-vars extends cdk.Stack {
  public readonly url9;

  public constructor(scope: cdk.App, id: string, props: integ-apprunner-later-secrets-env-varsProps = {}) {
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
    const laterSecretF6c54c5b = new secretsmanager.CfnSecret(this, 'LaterSecretF6C54C5B', {
      secretString: '{\"password\":\"mySecretPassword\",\"apikey\":\"mySecretApiKey\"}',
    });
    laterSecretF6c54c5b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const service9InstanceRole8Bd2cee0 = new iam.CfnRole(this, 'Service9InstanceRole8BD2CEE0', {
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

    if (laterSecretF6c54c5b == null) { throw new Error(`A combination of conditions caused 'laterSecretF6c54c5b' to be undefined. Fixit.`); }
    if (service9InstanceRole8Bd2cee0 == null) { throw new Error(`A combination of conditions caused 'service9InstanceRole8Bd2cee0' to be undefined. Fixit.`); }
    const service9Decc815e = new apprunner.CfnService(this, 'Service9DECC815E', {
      sourceConfiguration: {
        authenticationConfiguration: {
        },
        imageRepository: {
          imageConfiguration: {
            port: '8000',
            runtimeEnvironmentSecrets: [
              {
                name: 'LATER_SECRET',
                value: [
                  laterSecretF6c54c5b.ref,
                  ':apikey::',
                ].join(''),
              },
            ],
            runtimeEnvironmentVariables: [
              {
                name: 'LATER_ENVVAR',
                value: 'testNewEnvVar',
              },
            ],
          },
          imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
          imageRepositoryType: 'ECR_PUBLIC',
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service9InstanceRole8Bd2cee0.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    if (laterSecretF6c54c5b == null) { throw new Error(`A combination of conditions caused 'laterSecretF6c54c5b' to be undefined. Fixit.`); }
    if (service9InstanceRole8Bd2cee0 == null) { throw new Error(`A combination of conditions caused 'service9InstanceRole8Bd2cee0' to be undefined. Fixit.`); }
    const service9InstanceRoleDefaultPolicy85Bf9e64 = new iam.CfnPolicy(this, 'Service9InstanceRoleDefaultPolicy85BF9E64', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: laterSecretF6c54c5b.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Service9InstanceRoleDefaultPolicy85BF9E64',
      roles: [
        service9InstanceRole8Bd2cee0.ref,
      ],
    });

    // Outputs
    this.url9 = [
      'https://',
      service9Decc815e.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL9', {
      key: 'URL9',
      value: this.url9!.toString(),
    });
  }
}

