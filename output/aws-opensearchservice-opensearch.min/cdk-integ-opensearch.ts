import * as cdk from 'aws-cdk-lib';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface cdk-integ-opensearchProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-opensearch extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-opensearchProps = {}) {
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
    const domain66Ac69e0 = new opensearchservice.CfnDomain(this, 'Domain66AC69E0', {
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
      engineVersion: 'OpenSearch_2.11',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

