import * as cdk from 'aws-cdk-lib';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface cdk-integ-opensearch-multiaz-with-standbyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-opensearch-multiaz-with-standby extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-opensearch-multiaz-with-standbyProps = {}) {
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
        dedicatedMasterCount: 3,
        dedicatedMasterEnabled: true,
        dedicatedMasterType: 'r5.large.search',
        instanceCount: 3,
        instanceType: 'r5.large.search',
        multiAzWithStandbyEnabled: true,
        zoneAwarenessConfig: {
          availabilityZoneCount: 3,
        },
        zoneAwarenessEnabled: true,
      },
      domainEndpointOptions: {
        enforceHttps: false,
        tlsSecurityPolicy: 'Policy-Min-TLS-1-0-2019-07',
      },
      ebsOptions: {
        ebsEnabled: true,
        volumeSize: 10,
        volumeType: 'gp3',
      },
      encryptionAtRestOptions: {
        enabled: false,
      },
      engineVersion: 'OpenSearch_1.3',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

