import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

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

    const lambdaIam687b49af = new iam.CfnRole(this, 'LambdaIAM687B49AF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const poolD3f588b8 = new cognito.CfnUserPool(this, 'PoolD3F588B8', {
      accountRecoverySetting: {
        recoveryMechanisms: [
          {
            name: 'verified_phone_number',
            priority: 1,
          },
          {
            name: 'verified_email',
            priority: 2,
          },
        ],
      },
      adminCreateUserConfig: {
        allowAdminCreateUserOnly: true,
      },
      emailVerificationMessage: 'The verification code to your new account is {####}',
      emailVerificationSubject: 'Verify your new account',
      smsVerificationMessage: 'The verification code to your new account is {####}',
      userPoolName: 'myPool',
      verificationMessageTemplate: {
        defaultEmailOption: 'CONFIRM_WITH_CODE',
        emailMessage: 'The verification code to your new account is {####}',
        emailSubject: 'Verify your new account',
        smsMessage: 'The verification code to your new account is {####}',
      },
    });
    poolD3f588b8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const testTable5769773A = new dynamodb.CfnTable(this, 'TestTable5769773A', {
      attributeDefinitions: [
        {
          attributeName: 'id',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      keySchema: [
        {
          attributeName: 'id',
          keyType: 'HASH',
        },
      ],
    });
    testTable5769773A.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const testFailServiceRole9Ff22f85 = new iam.CfnRole(this, 'testFailServiceRole9FF22F85', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    const apiF70053cd = new appsync.CfnGraphQLApi(this, 'ApiF70053CD', {
      additionalAuthenticationProviders: [
        {
          authenticationType: 'AWS_IAM',
        },
      ],
      authenticationType: 'AMAZON_COGNITO_USER_POOLS',
      name: 'Integ_Test_IAM',
      userPoolConfig: {
        awsRegion: this.region,
        defaultAction: 'ALLOW',
        userPoolId: poolD3f588b8.ref,
      },
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

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiSchema510Eecd7 = new appsync.CfnGraphQLSchema(this, 'ApiSchema510EECD7', {
      apiId: apiF70053cd.attrApiId,
      definition: 'type test @aws_iam {\n  id: String!\n  version: String!\n}\n\ntype Query {\n  getTest(id: String!): test\n  getTests: [ test! ]\n    @aws_iam \n}\n\ninput TestInput {\n  version: String!\n}\n\ntype Mutation {\n  addTest(input: TestInput!): test\n    @aws_iam\n}\n',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apidsServiceRoleAdc7d124 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleAdc7d124' to be undefined. Fixit.`); }
    if (testTable5769773A == null) { throw new Error(`A combination of conditions caused 'testTable5769773A' to be undefined. Fixit.`); }
    const apids0Db53fea = new appsync.CfnDataSource(this, 'Apids0DB53FEA', {
      apiId: apiF70053cd.attrApiId,
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: testTable5769773A.ref,
      },
      name: 'testDataSource',
      serviceRoleArn: apidsServiceRoleAdc7d124.attrArn,
      type: 'AMAZON_DYNAMODB',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (lambdaIam687b49af == null) { throw new Error(`A combination of conditions caused 'lambdaIam687b49af' to be undefined. Fixit.`); }
    const lambdaIamDefaultPolicy96Dea124 = new iam.CfnPolicy(this, 'LambdaIAMDefaultPolicy96DEA124', {
      policyDocument: {
        Statement: [
          {
            Action: 'appsync:graphql',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':appsync:',
              this.region,
              ':',
              this.account,
              ':apis/',
              apiF70053cd.attrApiId,
              '/types/Query/fields/getTests',
            ].join(''),
          },
          {
            Action: 'appsync:GraphQL',
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':appsync:',
                this.region,
                ':',
                this.account,
                ':apis/',
                apiF70053cd.attrApiId,
                '/types/Mutation/fields/addTest',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':appsync:',
                this.region,
                ':',
                this.account,
                ':apis/',
                apiF70053cd.attrApiId,
                '/types/test/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'LambdaIAMDefaultPolicy96DEA124',
      roles: [
        lambdaIam687b49af.ref,
      ],
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (testFailServiceRole9Ff22f85 == null) { throw new Error(`A combination of conditions caused 'testFailServiceRole9Ff22f85' to be undefined. Fixit.`); }
    const testFail33Ce01d1 = new lambda.CfnFunction(this, 'testFail33CE01D1', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f38244b9028d22d4e265a5b466bdba928d93b5a4ac2b4bbf583309b3f027f044.zip',
      },
      environment: {
        variables: {
          'APPSYNC_ENDPOINT': apiF70053cd.attrGraphQlUrl,
        },
      },
      handler: 'iam-query.handler',
      role: testFailServiceRole9Ff22f85.attrArn,
      runtime: 'nodejs18.x',
    });
    testFail33Ce01d1.addDependency(testFailServiceRole9Ff22f85);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apiMutationAddTestBf148084 = new appsync.CfnResolver(this, 'ApiMutationAddTestBF148084', {
      apiId: apiF70053cd.attrApiId,
      dataSourceName: 'testDataSource',
      fieldName: 'addTest',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.test)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($util.autoId())\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
      typeName: 'Mutation',
    });
    apiMutationAddTestBf148084.addDependency(apids0Db53fea);
    apiMutationAddTestBf148084.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apiQueryGetTest0Bead0f2 = new appsync.CfnResolver(this, 'ApiQueryGetTest0BEAD0F2', {
      apiId: apiF70053cd.attrApiId,
      dataSourceName: 'testDataSource',
      fieldName: 'getTest',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": false, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
      typeName: 'Query',
    });
    apiQueryGetTest0Bead0f2.addDependency(apids0Db53fea);
    apiQueryGetTest0Bead0f2.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apiQueryGetTestsF8c40170 = new appsync.CfnResolver(this, 'ApiQueryGetTestsF8C40170', {
      apiId: apiF70053cd.attrApiId,
      dataSourceName: 'testDataSource',
      fieldName: 'getTests',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\", \"consistentRead\": false}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
      typeName: 'Query',
    });
    apiQueryGetTestsF8c40170.addDependency(apids0Db53fea);
    apiQueryGetTestsF8c40170.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (lambdaIam687b49af == null) { throw new Error(`A combination of conditions caused 'lambdaIam687b49af' to be undefined. Fixit.`); }
    if (lambdaIamDefaultPolicy96Dea124 == null) { throw new Error(`A combination of conditions caused 'lambdaIamDefaultPolicy96Dea124' to be undefined. Fixit.`); }
    const testQuery6695Aade = new lambda.CfnFunction(this, 'testQuery6695AADE', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f38244b9028d22d4e265a5b466bdba928d93b5a4ac2b4bbf583309b3f027f044.zip',
      },
      environment: {
        variables: {
          'APPSYNC_ENDPOINT': apiF70053cd.attrGraphQlUrl,
        },
      },
      handler: 'iam-query.handler',
      role: lambdaIam687b49af.attrArn,
      runtime: 'nodejs18.x',
    });
    testQuery6695Aade.addDependency(lambdaIamDefaultPolicy96Dea124);
    testQuery6695Aade.addDependency(lambdaIam687b49af);
  }
}

