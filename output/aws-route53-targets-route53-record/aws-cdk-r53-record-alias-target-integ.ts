import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface aws-cdk-r53-record-alias-target-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-r53-record-alias-target-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-r53-record-alias-target-integProps = {}) {
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
    const hostedZoneDb99f866 = new route53.CfnHostedZone(this, 'HostedZoneDB99F866', {
      name: 'cdk-integ.com.',
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const www9f8609da = new route53.CfnRecordSet(this, 'WWW9F8609DA', {
      name: 'www.cdk-integ.com.',
      type: 'A',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        '1.2.3.4',
      ],
      ttl: '1800',
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    if (www9f8609da == null) { throw new Error(`A combination of conditions caused 'www9f8609da' to be undefined. Fixit.`); }
    const alias325C5727 = new route53.CfnRecordSet(this, 'Alias325C5727', {
      name: 'cdk-integ.com.',
      type: 'A',
      aliasTarget: {
        dnsName: www9f8609da.ref,
        hostedZoneId: hostedZoneDb99f866.ref,
      },
      hostedZoneId: hostedZoneDb99f866.ref,
    });
  }
}

