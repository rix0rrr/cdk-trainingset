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
    const myNamespaceD0bb8558 = new servicediscovery.CfnHttpNamespace(this, 'MyNamespaceD0BB8558', {
      name: 'MyHTTPNamespace',
    });

    if (myNamespaceD0bb8558 == null) { throw new Error(`A combination of conditions caused 'myNamespaceD0bb8558' to be undefined. Fixit.`); }
    const myNamespaceIpService220F547f = new servicediscovery.CfnService(this, 'MyNamespaceIpService220F547F', {
      description: 'service registering ip instances',
      healthCheckConfig: {
        failureThreshold: 1,
        resourcePath: '/check',
        type: 'HTTP',
      },
      namespaceId: myNamespaceD0bb8558.attrId,
    });

    if (myNamespaceD0bb8558 == null) { throw new Error(`A combination of conditions caused 'myNamespaceD0bb8558' to be undefined. Fixit.`); }
    const myNamespaceNonIpService3B425009 = new servicediscovery.CfnService(this, 'MyNamespaceNonIpService3B425009', {
      description: 'service registering non-ip instances',
      namespaceId: myNamespaceD0bb8558.attrId,
    });

    if (myNamespaceIpService220F547f == null) { throw new Error(`A combination of conditions caused 'myNamespaceIpService220F547f' to be undefined. Fixit.`); }
    const myNamespaceIpServiceIpInstance8Cd1b210 = new servicediscovery.CfnInstance(this, 'MyNamespaceIpServiceIpInstance8CD1B210', {
      instanceAttributes: {
        'AWS_INSTANCE_IPV4': '54.239.25.192',
        'AWS_INSTANCE_PORT': '80',
      },
      serviceId: myNamespaceIpService220F547f.attrId,
      instanceId: 'awsservicediscoveryintegMyNamespaceIpServiceIpInstance56070746',
    });

    if (myNamespaceNonIpService3B425009 == null) { throw new Error(`A combination of conditions caused 'myNamespaceNonIpService3B425009' to be undefined. Fixit.`); }
    const myNamespaceNonIpServiceNonIpInstanceFf8fb3de = new servicediscovery.CfnInstance(this, 'MyNamespaceNonIpServiceNonIpInstanceFF8FB3DE', {
      instanceAttributes: {
        arn: 'arn:aws:s3:::mybucket',
      },
      serviceId: myNamespaceNonIpService3B425009.attrId,
      instanceId: 'ervicediscoveryintegMyNamespaceNonIpServiceNonIpInstance45389A2A',
    });
  }
}

