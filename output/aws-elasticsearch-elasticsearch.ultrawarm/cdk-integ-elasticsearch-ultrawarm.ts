import * as cdk from 'aws-cdk-lib';
import * as elasticsearch from 'aws-cdk-lib/aws-elasticsearch';

export interface cdk-integ-elasticsearch-ultrawarmProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-elasticsearch-ultrawarm extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-elasticsearch-ultrawarmProps = {}) {
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
    const domain66Ac69e0 = new elasticsearch.CfnDomain(this, 'Domain66AC69E0', {
      cognitoOptions: {
        enabled: false,
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
      elasticsearchClusterConfig: {
        dedicatedMasterCount: 2,
        dedicatedMasterEnabled: true,
        dedicatedMasterType: 'r5.large.elasticsearch',
        instanceCount: 1,
        instanceType: 'r5.large.elasticsearch',
        warmCount: 2,
        warmEnabled: true,
        warmType: 'ultrawarm1.medium.elasticsearch',
        zoneAwarenessEnabled: false,
      },
      elasticsearchVersion: '7.1',
      encryptionAtRestOptions: {
        enabled: false,
      },
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: false,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

