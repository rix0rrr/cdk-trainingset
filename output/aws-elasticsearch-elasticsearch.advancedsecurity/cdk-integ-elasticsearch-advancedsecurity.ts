import * as cdk from 'aws-cdk-lib';
import * as elasticsearch from 'aws-cdk-lib/aws-elasticsearch';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface cdk-integ-elasticsearch-advancedsecurityProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-elasticsearch-advancedsecurity extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-elasticsearch-advancedsecurityProps = {}) {
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
    const domain66Ac69e0 = new elasticsearch.CfnDomain(this, 'Domain66AC69E0', {
      advancedSecurityOptions: {
        enabled: true,
        internalUserDatabaseEnabled: false,
        masterUserOptions: {
          masterUserArn: user00B015a1.attrArn,
        },
      },
      cognitoOptions: {
        enabled: false,
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
      elasticsearchClusterConfig: {
        dedicatedMasterEnabled: false,
        instanceCount: 1,
        instanceType: 'r5.large.elasticsearch',
        zoneAwarenessEnabled: false,
      },
      elasticsearchVersion: '7.1',
      encryptionAtRestOptions: {
        enabled: true,
      },
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: true,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

