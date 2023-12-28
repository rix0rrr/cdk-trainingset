import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface StackProps extends cdk.StackProps {
}

export class Stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Resources
    const apidsServiceRoleAdc7d124 = new iam.CfnRole(this, 'ApidsServiceRoleADC7D124', {
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

    const api2noneC88db89f = new appsync.CfnDataSource(this, 'api2noneC88DB89F', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      name: 'none',
      type: 'NONE',
    });

    if (apidsServiceRoleAdc7d124 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleAdc7d124' to be undefined. Fixit.`); }
    if (testTable5769773A == null) { throw new Error(`A combination of conditions caused 'testTable5769773A' to be undefined. Fixit.`); }
    const apids0Db53fea = new appsync.CfnDataSource(this, 'Apids0DB53FEA', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      name: 'ds',
      type: 'AMAZON_DYNAMODB',
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: testTable5769773A.ref,
      },
      serviceRoleArn: apidsServiceRoleAdc7d124.attrArn,
    });

    if (apidsServiceRoleAdc7d124 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleAdc7d124' to be undefined. Fixit.`); }
    if (testTable5769773A == null) { throw new Error(`A combination of conditions caused 'testTable5769773A' to be undefined. Fixit.`); }
    const apidsServiceRoleDefaultPolicyE5e18d6d = new iam.CfnPolicy(this, 'ApidsServiceRoleDefaultPolicyE5E18D6D', {
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
      policyName: 'ApidsServiceRoleDefaultPolicyE5E18D6D',
      roles: [
        apidsServiceRoleAdc7d124.ref,
      ],
    });

    if (api2noneC88db89f == null) { throw new Error(`A combination of conditions caused 'api2noneC88db89f' to be undefined. Fixit.`); }
    const api2nonepipelinefunctionFunction2426F465 = new appsync.CfnFunctionConfiguration(this, 'api2nonepipelinefunctionFunction2426F465', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      dataSourceName: 'none',
      functionVersion: '2018-05-29',
      name: 'pipeline_function',
      requestMappingTemplate: '{\"version\":\"2017-02-28\"}',
      responseMappingTemplate: '{\"version\":\"v1\"}',
    });
    api2nonepipelinefunctionFunction2426F465.addDependency(api2noneC88db89f);

    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apidsMutationaddTestResolverBcf0400b = new appsync.CfnResolver(this, 'ApidsMutationaddTestResolverBCF0400B', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      fieldName: 'addTest',
      typeName: 'Mutation',
      dataSourceName: 'ds',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.test)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($util.autoId())\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apidsMutationaddTestResolverBcf0400b.addDependency(apids0Db53fea);

    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apidsQuerygetTestsResolver952F49ee = new appsync.CfnResolver(this, 'ApidsQuerygetTestsResolver952F49EE', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      fieldName: 'getTests',
      typeName: 'Query',
      dataSourceName: 'ds',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\"}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apidsQuerygetTestsResolver952F49ee.addDependency(apids0Db53fea);

    if (api2nonepipelinefunctionFunction2426F465 == null) { throw new Error(`A combination of conditions caused 'api2nonepipelinefunctionFunction2426F465' to be undefined. Fixit.`); }
    const pipelineresolver843133Ea = new appsync.CfnResolver(this, 'pipelineresolver843133EA', {
      apiId: cdk.Fn.importValue('baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68'),
      fieldName: 'version',
      typeName: 'test',
      kind: 'PIPELINE',
      pipelineConfig: {
        functions: [
          api2nonepipelinefunctionFunction2426F465.attrFunctionId,
        ],
      },
      requestMappingTemplate: '{\"version\":\"2017-02-28\"}',
      responseMappingTemplate: '{\"version\":\"v1\"}',
    });
  }
}

