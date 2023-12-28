import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsAppsyncIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsAppsyncInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsAppsyncIntegProps = {}) {
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
    const apiF70053cd = new appsync.CfnGraphQLApi(this, 'ApiF70053CD', {
      authenticationType: 'API_KEY',
      name: 'Integ_Test_APIKey',
    });

    const apitestDataSourceServiceRoleAcbc3f3d = new iam.CfnRole(this, 'ApitestDataSourceServiceRoleACBC3F3D', {
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

    const testTable5769773A = new dynamodb.CfnTable(this, 'TestTable5769773A', {
      keySchema: [
        {
          attributeName: 'id',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'id',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
    });
    testTable5769773A.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiSchema510Eecd7 = new appsync.CfnGraphQLSchema(this, 'ApiSchema510EECD7', {
      apiId: apiF70053cd.attrApiId,
      definition: 'type test {\n  id: Int!\n  version: String!\n}\n\ntype Query {\n  getTests: [ test! ]\n}\n\ntype Mutation {\n  addTest(version: String!): test!\n}',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apitestDataSourceServiceRoleAcbc3f3d == null) { throw new Error(`A combination of conditions caused 'apitestDataSourceServiceRoleAcbc3f3d' to be undefined. Fixit.`); }
    if (testTable5769773A == null) { throw new Error(`A combination of conditions caused 'testTable5769773A' to be undefined. Fixit.`); }
    const apitestDataSource96Ae54d5 = new appsync.CfnDataSource(this, 'ApitestDataSource96AE54D5', {
      apiId: apiF70053cd.attrApiId,
      name: 'testDataSource',
      type: 'AMAZON_DYNAMODB',
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: testTable5769773A.ref,
      },
      serviceRoleArn: apitestDataSourceServiceRoleAcbc3f3d.attrArn,
    });

    if (apitestDataSourceServiceRoleAcbc3f3d == null) { throw new Error(`A combination of conditions caused 'apitestDataSourceServiceRoleAcbc3f3d' to be undefined. Fixit.`); }
    if (testTable5769773A == null) { throw new Error(`A combination of conditions caused 'testTable5769773A' to be undefined. Fixit.`); }
    const apitestDataSourceServiceRoleDefaultPolicy897Cd912 = new iam.CfnPolicy(this, 'ApitestDataSourceServiceRoleDefaultPolicy897CD912', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'dynamodb:BatchGetItem',
              'dynamodb:BatchWriteItem',
              'dynamodb:ConditionCheckItem',
              'dynamodb:DeleteItem',
              'dynamodb:DescribeTable',
              'dynamodb:GetItem',
              'dynamodb:GetRecords',
              'dynamodb:GetShardIterator',
              'dynamodb:PutItem',
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:UpdateItem',
            ],
            Effect: 'Allow',
            Resource: [
              testTable5769773A.attrArn,
              undefined,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ApitestDataSourceServiceRoleDefaultPolicy897CD912',
      roles: [
        apitestDataSourceServiceRoleAcbc3f3d.ref,
      ],
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    const apiDefaultApiKeyF991c37b = new appsync.CfnApiKey(this, 'ApiDefaultApiKeyF991C37B', {
      apiId: apiF70053cd.attrApiId,
    });
    apiDefaultApiKeyF991c37b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apitestDataSource96Ae54d5 == null) { throw new Error(`A combination of conditions caused 'apitestDataSource96Ae54d5' to be undefined. Fixit.`); }
    const apiMutationAddTestBf148084 = new appsync.CfnResolver(this, 'ApiMutationAddTestBF148084', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'addTest',
      typeName: 'Mutation',
      dataSourceName: 'testDataSource',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.test)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($util.autoId())\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationAddTestBf148084.addDependency(apiSchema510Eecd7);
    apiMutationAddTestBf148084.addDependency(apitestDataSource96Ae54d5);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apitestDataSource96Ae54d5 == null) { throw new Error(`A combination of conditions caused 'apitestDataSource96Ae54d5' to be undefined. Fixit.`); }
    const apiQueryGetTestsF8c40170 = new appsync.CfnResolver(this, 'ApiQueryGetTestsF8C40170', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getTests',
      typeName: 'Query',
      dataSourceName: 'testDataSource',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\", \"consistentRead\": false}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetTestsF8c40170.addDependency(apiSchema510Eecd7);
    apiQueryGetTestsF8c40170.addDependency(apitestDataSource96Ae54d5);
  }
}

