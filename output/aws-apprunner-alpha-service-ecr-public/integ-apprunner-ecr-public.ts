import * as cdk from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-apprunner-ecr-publicProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-apprunner-ecr-public extends cdk.Stack {
  public readonly url1;
  public readonly serviceName;
  public readonly serviceId;
  public readonly serviceStatus;
  public readonly serviceArn;

  public constructor(scope: cdk.App, id: string, props: integ-apprunner-ecr-publicProps = {}) {
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
    const service1InstanceRole8Cbc81f1 = new iam.CfnRole(this, 'Service1InstanceRole8CBC81F1', {
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

    if (service1InstanceRole8Cbc81f1 == null) { throw new Error(`A combination of conditions caused 'service1InstanceRole8Cbc81f1' to be undefined. Fixit.`); }
    const service1Edcc8134 = new apprunner.CfnService(this, 'Service1EDCC8134', {
      sourceConfiguration: {
        authenticationConfiguration: {
        },
        autoDeploymentsEnabled: false,
        imageRepository: {
          imageConfiguration: {
            port: '8000',
          },
          imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
          imageRepositoryType: 'ECR_PUBLIC',
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service1InstanceRole8Cbc81f1.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
      serviceName: 'service1',
    });

    // Outputs
    this.url1 = [
      'https://',
      service1Edcc8134.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL1', {
      key: 'URL1',
      value: this.url1!.toString(),
    });
    this.serviceName = cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.select(5, cdk.Fn.split(':', service1Edcc8134.attrServiceArn))));
    new cdk.CfnOutput(this, 'CfnOutputServiceName', {
      key: 'ServiceName',
      value: this.serviceName!.toString(),
    });
    this.serviceId = service1Edcc8134.attrServiceId;
    new cdk.CfnOutput(this, 'CfnOutputServiceId', {
      key: 'ServiceId',
      value: this.serviceId!.toString(),
    });
    this.serviceStatus = service1Edcc8134.attrStatus;
    new cdk.CfnOutput(this, 'CfnOutputServiceStatus', {
      key: 'ServiceStatus',
      value: this.serviceStatus!.toString(),
    });
    this.serviceArn = service1Edcc8134.attrServiceArn;
    new cdk.CfnOutput(this, 'CfnOutputServiceArn', {
      key: 'ServiceArn',
      value: this.serviceArn!.toString(),
    });
  }
}

