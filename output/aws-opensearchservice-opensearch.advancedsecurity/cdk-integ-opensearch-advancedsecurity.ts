import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface cdk-integ-opensearch-advancedsecurityProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-opensearch-advancedsecurity extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-opensearch-advancedsecurityProps = {}) {
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
    const user00B015a1 = new iam.CfnUser(this, 'User00B015A1', {
    });

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const domain66Ac69e0 = new opensearchservice.CfnDomain(this, 'Domain66AC69E0', {
      advancedSecurityOptions: {
        enabled: true,
        internalUserDatabaseEnabled: false,
        masterUserOptions: {
          masterUserArn: user00B015a1.attrArn,
        },
      },
      clusterConfig: {
        dedicatedMasterEnabled: false,
        instanceCount: 1,
        instanceType: 'r5.large.search',
        zoneAwarenessEnabled: false,
        multiAzWithStandbyEnabled: false,
      },
      domainEndpointOptions: {
        enforceHttps: true,
        tlsSecurityPolicy: 'Policy-Min-TLS-1-0-2019-07',
      },
      ebsOptions: {
        ebsEnabled: true,
        volumeSize: 10,
        volumeType: 'gp2',
      },
      encryptionAtRestOptions: {
        enabled: true,
      },
      engineVersion: 'Elasticsearch_7.1',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: true,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

