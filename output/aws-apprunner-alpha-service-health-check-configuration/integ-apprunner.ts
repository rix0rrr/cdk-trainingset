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
    const serviceInstanceRoleDfa90cec = new iam.CfnRole(this, 'ServiceInstanceRoleDFA90CEC', {
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

    if (serviceInstanceRoleDfa90cec == null) { throw new Error(`A combination of conditions caused 'serviceInstanceRoleDfa90cec' to be undefined. Fixit.`); }
    const serviceDbc79909 = new apprunner.CfnService(this, 'ServiceDBC79909', {
      healthCheckConfiguration: {
        healthyThreshold: 5,
        interval: 10,
        path: '/',
        protocol: 'HTTP',
        timeout: 10,
        unhealthyThreshold: 10,
      },
      instanceConfiguration: {
        instanceRoleArn: serviceInstanceRoleDfa90cec.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
      sourceConfiguration: {
        authenticationConfiguration: {
        },
        imageRepository: {
          imageConfiguration: {
            port: '8000',
          },
          imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
          imageRepositoryType: 'ECR_PUBLIC',
        },
      },
    });
  }
}

