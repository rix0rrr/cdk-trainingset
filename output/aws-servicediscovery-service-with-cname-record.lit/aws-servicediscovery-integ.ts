import * as cdk from 'aws-cdk-lib';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface AwsServicediscoveryIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsServicediscoveryInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsServicediscoveryIntegProps = {}) {
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
    const namespace9B63b8c8 = new servicediscovery.CfnPublicDnsNamespace(this, 'Namespace9B63B8C8', {
      name: 'foobar.com',
    });

    if (namespace9B63b8c8 == null) { throw new Error(`A combination of conditions caused 'namespace9B63b8c8' to be undefined. Fixit.`); }
    const namespaceServiceCabdf534 = new servicediscovery.CfnService(this, 'NamespaceServiceCABDF534', {
      dnsConfig: {
        dnsRecords: [
          {
            ttl: 30,
            type: 'CNAME',
          },
        ],
        namespaceId: namespace9B63b8c8.attrId,
        routingPolicy: 'WEIGHTED',
      },
      name: 'foo',
      namespaceId: namespace9B63b8c8.attrId,
    });

    if (namespaceServiceCabdf534 == null) { throw new Error(`A combination of conditions caused 'namespaceServiceCabdf534' to be undefined. Fixit.`); }
    const namespaceServiceCnameInstance5863Ed3a = new servicediscovery.CfnInstance(this, 'NamespaceServiceCnameInstance5863ED3A', {
      instanceAttributes: {
        'AWS_INSTANCE_CNAME': 'service.pizza',
      },
      serviceId: namespaceServiceCabdf534.attrId,
      instanceId: 'awsservicediscoveryintegNamespaceServiceCnameInstance0F7DE989',
    });
  }
}

