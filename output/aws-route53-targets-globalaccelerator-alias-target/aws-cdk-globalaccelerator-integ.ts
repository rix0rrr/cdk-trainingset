import * as cdk from 'aws-cdk-lib';
import * as globalaccelerator from 'aws-cdk-lib/aws-globalaccelerator';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface aws-cdk-globalaccelerator-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-globalaccelerator-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-globalaccelerator-integProps = {}) {
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
      name: 'aws-cdk-globalaccelerator-integ',
      enabled: true,
    });

    const hostedZoneDb99f866 = new route53.CfnHostedZone(this, 'HostedZoneDB99F866', {
      name: 'test.public.',
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const existingGlobalAcceleratorAlias7Acf888c = new route53.CfnRecordSet(this, 'ExistingGlobalAcceleratorAlias7ACF888C', {
      name: 'test-existing.test.public.',
      type: 'A',
      aliasTarget: {
        dnsName: 'someexisting.awsglobalaccelerator.com',
        hostedZoneId: 'Z2BJ6XQ5FK7U4H',
      },
      comment: 'Alias to the an existing Global Accelerator',
      hostedZoneId: hostedZoneDb99f866.ref,
    });

    if (accelerator8Eb0b6b1 == null) { throw new Error(`A combination of conditions caused 'accelerator8Eb0b6b1' to be undefined. Fixit.`); }
    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const localGlobalAcceleratorAlias18B4a87a = new route53.CfnRecordSet(this, 'LocalGlobalAcceleratorAlias18B4A87A', {
      name: 'test-local.test.public.',
      type: 'A',
      aliasTarget: {
        dnsName: accelerator8Eb0b6b1.attrDnsName,
        hostedZoneId: 'Z2BJ6XQ5FK7U4H',
      },
      comment: 'Alias to the locally created Global Accelerator',
      hostedZoneId: hostedZoneDb99f866.ref,
    });
  }
}

