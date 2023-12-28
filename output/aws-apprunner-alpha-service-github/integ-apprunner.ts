import * as cdk from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegApprunnerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegApprunner extends cdk.Stack {
  public readonly url4;
  public readonly url5;

  public constructor(scope: cdk.App, id: string, props: IntegApprunnerProps = {}) {
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
    const service4InstanceRole26B443a0 = new iam.CfnRole(this, 'Service4InstanceRole26B443A0', {
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

    const service5InstanceRole94C07d84 = new iam.CfnRole(this, 'Service5InstanceRole94C07D84', {
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

    if (service4InstanceRole26B443a0 == null) { throw new Error(`A combination of conditions caused 'service4InstanceRole26B443a0' to be undefined. Fixit.`); }
    const service429949929 = new apprunner.CfnService(this, 'Service429949929', {
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: 'MOCK',
        },
        codeRepository: {
          codeConfiguration: {
            configurationSource: 'REPOSITORY',
          },
          repositoryUrl: 'https://github.com/aws-containers/hello-app-runner',
          sourceCodeVersion: {
            type: 'BRANCH',
            value: 'main',
          },
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service4InstanceRole26B443a0.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    if (service5InstanceRole94C07d84 == null) { throw new Error(`A combination of conditions caused 'service5InstanceRole94C07d84' to be undefined. Fixit.`); }
    const service5Ad92b5a5 = new apprunner.CfnService(this, 'Service5AD92B5A5', {
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: 'MOCK',
        },
        codeRepository: {
          codeConfiguration: {
            codeConfigurationValues: {
              buildCommand: 'yum install -y pycairo && pip install -r requirements.txt',
              port: '8000',
              runtime: 'PYTHON_3',
              startCommand: 'python app.py',
            },
            configurationSource: 'API',
          },
          repositoryUrl: 'https://github.com/aws-containers/hello-app-runner',
          sourceCodeVersion: {
            type: 'BRANCH',
            value: 'main',
          },
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service5InstanceRole94C07d84.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    // Outputs
    this.url4 = [
      'https://',
      service429949929.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL4', {
      key: 'URL4',
      value: this.url4!.toString(),
    });
    this.url5 = [
      'https://',
      service5Ad92b5a5.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL5', {
      key: 'URL5',
      value: this.url5!.toString(),
    });
  }
}

