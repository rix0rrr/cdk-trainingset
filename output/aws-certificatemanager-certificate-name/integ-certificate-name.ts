import * as cdk from 'aws-cdk-lib';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';

export interface integ-certificate-nameProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-certificate-name extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-certificate-nameProps = {}) {
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
    const certificate4E7abb08 = new certificatemanager.CfnCertificate(this, 'Certificate4E7ABB08', {
      domainName: '*.example.com',
      domainValidationOptions: [
        {
          domainName: '*.example.com',
          hostedZoneId: 'Z23ABC4XYZL05B',
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'This is a test name',
        },
      ],
      validationMethod: 'DNS',
    });
  }
}

