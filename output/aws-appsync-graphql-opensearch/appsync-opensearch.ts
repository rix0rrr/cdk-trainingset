import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as opensearchservice from 'aws-cdk-lib/aws-opensearchservice';

export interface appsync-opensearchProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class appsync-opensearch extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: appsync-opensearchProps = {}) {
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

    const apiC8550315 = new appsync.CfnGraphQLApi(this, 'apiC8550315', {
      authenticationType: 'API_KEY',
      name: 'api',
    });

    const apidsServiceRoleBdb08107 = new iam.CfnRole(this, 'apidsServiceRoleBDB08107', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'appsync.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
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
      engineVersion: 'OpenSearch_2.3',
      logPublishingOptions: {
      },
      nodeToNodeEncryptionOptions: {
        enabled: true,
      },
    });
    domain66Ac69e0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    const apiSchema0Ea92056 = new appsync.CfnGraphQLSchema(this, 'apiSchema0EA92056', {
      apiId: apiC8550315.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiSchema0Ea92056 == null) { throw new Error(`A combination of conditions caused 'apiSchema0Ea92056' to be undefined. Fixit.`); }
    const apiDefaultApiKey6Ab8d7c4 = new appsync.CfnApiKey(this, 'apiDefaultApiKey6AB8D7C4', {
      apiId: apiC8550315.attrApiId,
    });
    apiDefaultApiKey6Ab8d7c4.addDependency(apiSchema0Ea92056);

    if (domain66Ac69e0 == null) { throw new Error(`A combination of conditions caused 'domain66Ac69e0' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apidsServiceRoleBdb08107 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleBdb08107' to be undefined. Fixit.`); }
    const apids4328272F = new appsync.CfnDataSource(this, 'apids4328272F', {
      apiId: apiC8550315.attrApiId,
      name: 'ds',
      type: 'AMAZON_OPENSEARCH_SERVICE',
      openSearchServiceConfig: {
        awsRegion: this.region,
        endpoint: [
          'https://',
          domain66Ac69e0.attrDomainEndpoint,
        ].join(''),
      },
      serviceRoleArn: apidsServiceRoleBdb08107.attrArn,
    });

    if (domain66Ac69e0 == null) { throw new Error(`A combination of conditions caused 'domain66Ac69e0' to be undefined. Fixit.`); }
    if (apidsServiceRoleBdb08107 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleBdb08107' to be undefined. Fixit.`); }
    const apidsServiceRoleDefaultPolicy5634Efd0 = new iam.CfnPolicy(this, 'apidsServiceRoleDefaultPolicy5634EFD0', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'es:ESHttpDelete',
              'es:ESHttpGet',
              'es:ESHttpHead',
              'es:ESHttpPatch',
              'es:ESHttpPost',
              'es:ESHttpPut',
            ],
            Effect: 'Allow',
            Resource: [
              domain66Ac69e0.attrArn,
              [
                domain66Ac69e0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'apidsServiceRoleDefaultPolicy5634EFD0',
      roles: [
        apidsServiceRoleBdb08107.ref,
      ],
    });

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiSchema0Ea92056 == null) { throw new Error(`A combination of conditions caused 'apiSchema0Ea92056' to be undefined. Fixit.`); }
    if (apids4328272F == null) { throw new Error(`A combination of conditions caused 'apids4328272F' to be undefined. Fixit.`); }
    const apiQueryGetTests5F79f353 = new appsync.CfnResolver(this, 'apiQueryGetTests5F79F353', {
      apiId: apiC8550315.attrApiId,
      fieldName: 'getTests',
      typeName: 'Query',
      dataSourceName: 'ds',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\":\"2017-02-28\",\"operation\":\"GET\",\"path\":\"/id/post/_search\",\"params\":{\"headers\":{},\"queryString\":{},\"body\":{\"from\":0,\"size\":50}}}',
      responseMappingTemplate: '{\"version\":\"2017-02-28\",\"operation\":\"GET\",\"path\":\"/id/post/_search\",\"params\":{\"headers\":{},\"queryString\":{},\"body\":{\"from\":0,\"size\":50,\"query\":{\"term\":{\"author\":\"$util.toJson($context.arguments.author)\"}}}}}',
    });
    apiQueryGetTests5F79f353.addDependency(apids4328272F);
    apiQueryGetTests5F79f353.addDependency(apiSchema0Ea92056);
  }
}

