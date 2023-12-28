import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface StackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackProps = {}) {
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

    const mergedApiExecutionRoleA4aa677d = new iam.CfnRole(this, 'MergedApiExecutionRoleA4AA677D', {
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

    const thirdSourceApia5da856c = new appsync.CfnGraphQLApi(this, 'ThirdSourceAPIA5DA856C', {
      authenticationType: 'API_KEY',
      name: 'ThirdSourceAPI',
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

    if (mergedApiExecutionRoleA4aa677d == null) { throw new Error(`A combination of conditions caused 'mergedApiExecutionRoleA4aa677d' to be undefined. Fixit.`); }
    const mergedApi08d3ead1 = new appsync.CfnGraphQLApi(this, 'MergedAPI08D3EAD1', {
      apiType: 'MERGED',
      authenticationType: 'API_KEY',
      mergedApiExecutionRoleArn: mergedApiExecutionRoleA4aa677d.attrArn,
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

    if (thirdSourceApia5da856c == null) { throw new Error(`A combination of conditions caused 'thirdSourceApia5da856c' to be undefined. Fixit.`); }
    const thirdSourceApiSchema5999A853 = new appsync.CfnGraphQLSchema(this, 'ThirdSourceAPISchema5999A853', {
      apiId: thirdSourceApia5da856c.attrApiId,
      definition: 'type thirdTest {\n  version: String!\n}\ntype Query {\n  getThirdTests: [thirdTest]!\n}\ntype Mutation {\n  addThirdTest(version: String!): thirdTest\n}\n',
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

    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    if (secondSourceApiSchema65B7401e == null) { throw new Error(`A combination of conditions caused 'secondSourceApiSchema65B7401e' to be undefined. Fixit.`); }
    const secondSourceApiDefaultApiKeyCe5a0a64 = new appsync.CfnApiKey(this, 'SecondSourceAPIDefaultApiKeyCE5A0A64', {
      apiId: secondSourceApie903371d.attrApiId,
    });
    secondSourceApiDefaultApiKeyCe5a0a64.addDependency(secondSourceApiSchema65B7401e);

    if (firstSourceApib0de8d5a == null) { throw new Error(`A combination of conditions caused 'firstSourceApib0de8d5a' to be undefined. Fixit.`); }
    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    const sourceApiAssociation17B8f97c7 = new appsync.CfnSourceApiAssociation(this, 'SourceApiAssociation17B8F97C7', {
      mergedApiIdentifier: mergedApi08d3ead1.attrArn,
      sourceApiAssociationConfig: {
        mergeType: 'MANUAL_MERGE',
      },
      sourceApiIdentifier: firstSourceApib0de8d5a.attrArn,
    });

    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    if (secondSourceApie903371d == null) { throw new Error(`A combination of conditions caused 'secondSourceApie903371d' to be undefined. Fixit.`); }
    const sourceApiAssociation254340D38 = new appsync.CfnSourceApiAssociation(this, 'SourceApiAssociation254340D38', {
      mergedApiIdentifier: mergedApi08d3ead1.attrArn,
      sourceApiAssociationConfig: {
        mergeType: 'AUTO_MERGE',
      },
      sourceApiIdentifier: secondSourceApie903371d.attrArn,
    });

    if (mergedApi08d3ead1 == null) { throw new Error(`A combination of conditions caused 'mergedApi08d3ead1' to be undefined. Fixit.`); }
    if (thirdSourceApia5da856c == null) { throw new Error(`A combination of conditions caused 'thirdSourceApia5da856c' to be undefined. Fixit.`); }
    const sourceApiAssociation3F6a7c1ba = new appsync.CfnSourceApiAssociation(this, 'SourceApiAssociation3F6A7C1BA', {
      mergedApiIdentifier: mergedApi08d3ead1.attrArn,
      sourceApiAssociationConfig: {
        mergeType: 'MANUAL_MERGE',
      },
      sourceApiIdentifier: thirdSourceApia5da856c.attrArn,
    });

    if (thirdSourceApia5da856c == null) { throw new Error(`A combination of conditions caused 'thirdSourceApia5da856c' to be undefined. Fixit.`); }
    if (thirdSourceApiSchema5999A853 == null) { throw new Error(`A combination of conditions caused 'thirdSourceApiSchema5999A853' to be undefined. Fixit.`); }
    const thirdSourceApiDefaultApiKey3D5568a7 = new appsync.CfnApiKey(this, 'ThirdSourceAPIDefaultApiKey3D5568A7', {
      apiId: thirdSourceApia5da856c.attrApiId,
    });
    thirdSourceApiDefaultApiKey3D5568a7.addDependency(thirdSourceApiSchema5999A853);

    if (mergedApiExecutionRoleA4aa677d == null) { throw new Error(`A combination of conditions caused 'mergedApiExecutionRoleA4aa677d' to be undefined. Fixit.`); }
    if (sourceApiAssociation17B8f97c7 == null) { throw new Error(`A combination of conditions caused 'sourceApiAssociation17B8f97c7' to be undefined. Fixit.`); }
    if (sourceApiAssociation254340D38 == null) { throw new Error(`A combination of conditions caused 'sourceApiAssociation254340D38' to be undefined. Fixit.`); }
    if (sourceApiAssociation3F6a7c1ba == null) { throw new Error(`A combination of conditions caused 'sourceApiAssociation3F6a7c1ba' to be undefined. Fixit.`); }
    const mergedApiExecutionRoleDefaultPolicy249A5507 = new iam.CfnPolicy(this, 'MergedApiExecutionRoleDefaultPolicy249A5507', {
      policyDocument: {
        Statement: [
          {
            Action: 'appsync:SourceGraphQL',
            Effect: 'Allow',
            Resource: [
              sourceApiAssociation17B8f97c7.attrSourceApiArn,
              sourceApiAssociation254340D38.attrSourceApiArn,
              sourceApiAssociation3F6a7c1ba.attrSourceApiArn,
              [
                sourceApiAssociation17B8f97c7.attrSourceApiArn,
                '/*',
              ].join(''),
              [
                sourceApiAssociation254340D38.attrSourceApiArn,
                '/*',
              ].join(''),
              [
                sourceApiAssociation3F6a7c1ba.attrSourceApiArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'appsync:StartSchemaMerge',
            Effect: 'Allow',
            Resource: sourceApiAssociation254340D38.attrAssociationArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MergedApiExecutionRoleDefaultPolicy249A5507',
      roles: [
        mergedApiExecutionRoleA4aa677d.ref,
      ],
    });
  }
}

