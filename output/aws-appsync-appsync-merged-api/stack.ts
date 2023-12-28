import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const firstSourceApib0de8d5a = new appsync.CfnGraphQLApi(this, 'FirstSourceAPIB0DE8D5A', {
      authenticationType: 'API_KEY',
      name: 'FirstSourceAPI',
    });

    const mergedApiMergedApiExecutionRole5F2bccad = new iam.CfnRole(this, 'MergedAPIMergedApiExecutionRole5F2BCCAD', {
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

    const secondSourceApie903371d = new appsync.CfnGraphQLApi(this, 'SecondSourceAPIE903371D', {
      authenticationType: 'API_KEY',
      name: 'SecondSourceAPI',
    });

    if (firstSourceApib0de8d5a == null) { throw new Error(`A combination of conditions caused 'firstSourceApib0de8d5a' to be undefined. Fixit.`); }
    const firstSourceApiFirstSourceDs6ad299b7 = new appsync.CfnDataSource(this, 'FirstSourceAPIFirstSourceDS6AD299B7', {
      apiId: firstSourceApib0de8d5a.attrApiId,
      name: 'FirstSourceDS',
      type: 'NONE',
    });

    if (firstSourceApib0de8d5a == null) { throw new Error(`A combination of conditions caused 'firstSourceApib0de8d5a' to be undefined. Fixit.`); }
    const firstSourceApiSchemaF2fdb692 = new appsync.CfnGraphQLSchema(this, 'FirstSourceAPISchemaF2FDB692', {
      apiId: firstSourceApib0de8d5a.attrApiId,
      definition: 'type firstTest {\n  version: String!\n}\ntype Query {\n  getFirstTests: [firstTest]!\n}\ntype Mutation {\n  addFirstTest(version: String!): firstTest\n}\n',
    });

    if (mergedApiMergedApiExecutionRole5F2bccad == null) { throw new Error(`A combination of conditions caused 'mergedApiMergedApiExecutionRole5F2bccad' to be undefined. Fixit.`); }
    const mergedApi08d3ead1 = new appsync.CfnGraphQLApi(this, 'MergedAPI08D3EAD1', {
      apiType: 'MERGED',
      authenticationType: 'API_KEY',
      mergedApiExecutionRoleArn: mergedApiMergedApiExecutionRole5F2bccad.attrArn,
      name: 'MergedAPI',
    });

    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    const secondSourceApiSchema65B7401e = new appsync.CfnGraphQLSchema(this, 'SecondSourceAPISchema65B7401E', {
      apiId: secondSourceApie903371d.attrApiId,
      definition: 'type secondTest {\n  version: String!\n}\ntype Query {\n  getSecondTests: [secondTest]!\n}\ntype Mutation {\n  addSecondTest(version: String!): secondTest\n}\n',
    });

    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    const secondSourceApiSecondSourceDsea46eba7 = new appsync.CfnDataSource(this, 'SecondSourceAPISecondSourceDSEA46EBA7', {
      apiId: secondSourceApie903371d.attrApiId,
      name: 'SecondSourceDS',
      type: 'NONE',
    });

    if (firstSourceApib0de8d5a == null) { throw new Error(`A combination of conditions caused 'firstSourceApib0de8d5a' to be undefined. Fixit.`); }
    if (firstSourceApiSchemaF2fdb692 == null) { throw new Error(`A combination of conditions caused 'firstSourceApiSchemaF2fdb692' to be undefined. Fixit.`); }
    const firstSourceApiDefaultApiKey9D9ae06d = new appsync.CfnApiKey(this, 'FirstSourceAPIDefaultApiKey9D9AE06D', {
      apiId: firstSourceApib0de8d5a.attrApiId,
    });
    firstSourceApiDefaultApiKey9D9ae06d.addDependency(firstSourceApiSchemaF2fdb692);

    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    const mergedApiDefaultApiKeyAf5ea13c = new appsync.CfnApiKey(this, 'MergedAPIDefaultApiKeyAF5EA13C', {
      apiId: mergedApi08d3ead1.attrApiId,
    });

    if (firstSourceApib0de8d5a == null) { throw new Error(`A combination of conditions caused 'firstSourceApib0de8d5a' to be undefined. Fixit.`); }
    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    const mergedApiFirstSourceApiAssociationEc781ba9 = new appsync.CfnSourceApiAssociation(this, 'MergedAPIFirstSourceAPIAssociationEC781BA9', {
      mergedApiIdentifier: mergedApi08d3ead1.attrApiId,
      sourceApiAssociationConfig: {
        mergeType: 'MANUAL_MERGE',
      },
      sourceApiIdentifier: firstSourceApib0de8d5a.attrApiId,
    });

    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    const mergedApiSecondSourceApiAssociationBd1a08f4 = new appsync.CfnSourceApiAssociation(this, 'MergedAPISecondSourceAPIAssociationBD1A08F4', {
      mergedApiIdentifier: mergedApi08d3ead1.attrApiId,
      sourceApiAssociationConfig: {
        mergeType: 'AUTO_MERGE',
      },
      sourceApiIdentifier: secondSourceApie903371d.attrApiId,
    });

    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    if (secondSourceApiSchema65B7401e == null) { throw new Error(`A combination of conditions caused 'secondSourceApiSchema65B7401e' to be undefined. Fixit.`); }
    const secondSourceApiDefaultApiKeyCe5a0a64 = new appsync.CfnApiKey(this, 'SecondSourceAPIDefaultApiKeyCE5A0A64', {
      apiId: secondSourceApie903371d.attrApiId,
    });
    secondSourceApiDefaultApiKeyCe5a0a64.addDependency(secondSourceApiSchema65B7401e);

    if (mergedApiFirstSourceApiAssociationEc781ba9 == null) { throw new Error(`A combination of conditions caused 'mergedApiFirstSourceApiAssociationEc781ba9' to be undefined. Fixit.`); }
    if (mergedApiMergedApiExecutionRole5F2bccad == null) { throw new Error(`A combination of conditions caused 'mergedApiMergedApiExecutionRole5F2bccad' to be undefined. Fixit.`); }
    if (mergedApiSecondSourceApiAssociationBd1a08f4 == null) { throw new Error(`A combination of conditions caused 'mergedApiSecondSourceApiAssociationBd1a08f4' to be undefined. Fixit.`); }
    const mergedApiMergedApiExecutionRoleDefaultPolicy31A96dbc = new iam.CfnPolicy(this, 'MergedAPIMergedApiExecutionRoleDefaultPolicy31A96DBC', {
      policyDocument: {
        Statement: [
          {
            Action: 'appsync:SourceGraphQL',
            Effect: 'Allow',
            Resource: [
              mergedApiFirstSourceApiAssociationEc781ba9.attrSourceApiArn,
              mergedApiSecondSourceApiAssociationBd1a08f4.attrSourceApiArn,
              [
                mergedApiFirstSourceApiAssociationEc781ba9.attrSourceApiArn,
                '/*',
              ].join(''),
              [
                mergedApiSecondSourceApiAssociationBd1a08f4.attrSourceApiArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'appsync:StartSchemaMerge',
            Effect: 'Allow',
            Resource: mergedApiSecondSourceApiAssociationBd1a08f4.attrAssociationArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MergedAPIMergedApiExecutionRoleDefaultPolicy31A96DBC',
      roles: [
        mergedApiMergedApiExecutionRole5F2bccad.ref,
      ],
    });
  }
}

