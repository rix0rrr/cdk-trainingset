import * as cdk from 'aws-cdk-lib';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface CdkIntegOpensearchIpAddressTypeProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegOpensearchIpAddressType extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkIntegOpensearchIpAddressTypeProps = {}) {
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
    const dualStackC64a8ac0 = new opensearchservice.CfnDomain(this, 'DualStackC64A8AC0', {
      clusterConfig: {
        dedicatedMasterEnabled: false,
        instanceCount: 1,
        instanceType: 'r5.large.search',
        multiAzWithStandbyEnabled: false,
        zoneAwarenessEnabled: false,
      },
      domainEndpointOptions: {
        enforceHttps: false,
        tlsSecurityPolicy: 'Policy-Min-TLS-1-0-2019-07',
      },
      ebsOptions: {
        ebsEnabled: true,
        volumeSize: 10,
        volumeType: 'gp2',
      },
      encryptionAtRestOptions: {
        enabled: false,
      },
      engineVersion: 'Elasticsearch_7.1',
      ipAddressType: 'dualstack',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    dualStackC64a8ac0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const iPv41075180A = new opensearchservice.CfnDomain(this, 'IPv41075180A', {
      clusterConfig: {
        dedicatedMasterEnabled: false,
        instanceCount: 1,
        instanceType: 'r5.large.search',
        multiAzWithStandbyEnabled: false,
        zoneAwarenessEnabled: false,
      },
      domainEndpointOptions: {
        enforceHttps: false,
        tlsSecurityPolicy: 'Policy-Min-TLS-1-0-2019-07',
      },
      ebsOptions: {
        ebsEnabled: true,
        volumeSize: 10,
        volumeType: 'gp2',
      },
      encryptionAtRestOptions: {
        enabled: false,
      },
      engineVersion: 'Elasticsearch_7.1',
      ipAddressType: 'ipv4',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    iPv41075180A.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

