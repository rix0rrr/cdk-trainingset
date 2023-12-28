import * as cdk from 'aws-cdk-lib';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface aws-servicediscovery-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-servicediscovery-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-servicediscovery-integProps = {}) {
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
            type: 'A',
          },
        ],
        namespaceId: namespace9B63b8c8.attrId,
        routingPolicy: 'MULTIVALUE',
      },
      healthCheckConfig: {
        failureThreshold: 2,
        resourcePath: '/healthcheck',
        type: 'HTTPS',
      },
      name: 'foo',
      namespaceId: namespace9B63b8c8.attrId,
    });

    if (namespaceServiceCabdf534 == null) { throw new Error(`A combination of conditions caused 'namespaceServiceCabdf534' to be undefined. Fixit.`); }
    const namespaceServiceIpInstanceCced93e7 = new servicediscovery.CfnInstance(this, 'NamespaceServiceIpInstanceCCED93E7', {
      instanceAttributes: {
        'AWS_INSTANCE_IPV4': '54.239.25.192',
        'AWS_INSTANCE_PORT': '443',
      },
      serviceId: namespaceServiceCabdf534.attrId,
      instanceId: 'awsservicediscoveryintegNamespaceServiceIpInstance5A6845D4',
    });
  }
}

