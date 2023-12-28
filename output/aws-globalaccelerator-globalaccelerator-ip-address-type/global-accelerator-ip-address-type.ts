import * as cdk from 'aws-cdk-lib';
import * as globalaccelerator from 'aws-cdk-lib/aws-globalaccelerator';

export interface global-accelerator-ip-address-typeProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class global-accelerator-ip-address-type extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: global-accelerator-ip-address-typeProps = {}) {
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
    const accelerator8Eb0b6b1 = new globalaccelerator.CfnAccelerator(this, 'Accelerator8EB0B6B1', {
      enabled: true,
      ipAddressType: 'DUAL_STACK',
      name: 'acceleratorWithIpAddressType',
    });
  }
}

