import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-appsync-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-appsync-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-appsync-integProps = {}) {
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
    const apicustomerDsServiceRole76Cad539 = new iam.CfnRole(this, 'ApicustomerDsServiceRole76CAD539', {
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

    const apiorderDsServiceRoleCc2040c0 = new iam.CfnRole(this, 'ApiorderDsServiceRoleCC2040C0', {
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

    const apipaymentDsServiceRole0Dac58d6 = new iam.CfnRole(this, 'ApipaymentDsServiceRole0DAC58D6', {
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

    const customerTable260Dcc08 = new dynamodb.CfnTable(this, 'CustomerTable260DCC08', {
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
    customerTable260Dcc08.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const orderTable416Eb896 = new dynamodb.CfnTable(this, 'OrderTable416EB896', {
      keySchema: [
        {
          attributeName: 'customer',
          keyType: 'HASH',
        },
        {
          attributeName: 'order',
          keyType: 'RANGE',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'customer',
          attributeType: 'S',
        },
        {
          attributeName: 'order',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      globalSecondaryIndexes: [
        {
          indexName: 'orderIndex',
          keySchema: [
            {
              attributeName: 'order',
              keyType: 'HASH',
            },
            {
              attributeName: 'customer',
              keyType: 'RANGE',
            },
          ],
          projection: {
            projectionType: 'ALL',
          },
        },
      ],
    });
    orderTable416Eb896.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const paymentTableE140d25e = new dynamodb.CfnTable(this, 'PaymentTableE140D25E', {
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
    paymentTableE140d25e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (poolD3f588b8 == null) { throw new Error(`A combination of conditions caused 'poolD3f588b8' to be undefined. Fixit.`); }
    const apiF70053cd = new appsync.CfnGraphQLApi(this, 'ApiF70053CD', {
      authenticationType: 'AMAZON_COGNITO_USER_POOLS',
      name: 'demoapi',
      additionalAuthenticationProviders: [
        {
          authenticationType: 'API_KEY',
        },
      ],
      userPoolConfig: {
        awsRegion: this.region,
        defaultAction: 'ALLOW',
        userPoolId: poolD3f588b8.ref,
      },
    });

    if (apicustomerDsServiceRole76Cad539 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsServiceRole76Cad539' to be undefined. Fixit.`); }
    if (customerTable260Dcc08 == null) { throw new Error(`A combination of conditions caused 'customerTable260Dcc08' to be undefined. Fixit.`); }
    const apicustomerDsServiceRoleDefaultPolicyF8e72ae7 = new iam.CfnPolicy(this, 'ApicustomerDsServiceRoleDefaultPolicyF8E72AE7', {
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
              customerTable260Dcc08.attrArn,
              undefined,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ApicustomerDsServiceRoleDefaultPolicyF8E72AE7',
      roles: [
        apicustomerDsServiceRole76Cad539.ref,
      ],
    });

    if (apiorderDsServiceRoleCc2040c0 == null) { throw new Error(`A combination of conditions caused 'apiorderDsServiceRoleCc2040c0' to be undefined. Fixit.`); }
    if (orderTable416Eb896 == null) { throw new Error(`A combination of conditions caused 'orderTable416Eb896' to be undefined. Fixit.`); }
    const apiorderDsServiceRoleDefaultPolicy3315Fcf4 = new iam.CfnPolicy(this, 'ApiorderDsServiceRoleDefaultPolicy3315FCF4', {
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
              orderTable416Eb896.attrArn,
              [
                orderTable416Eb896.attrArn,
                '/index/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ApiorderDsServiceRoleDefaultPolicy3315FCF4',
      roles: [
        apiorderDsServiceRoleCc2040c0.ref,
      ],
    });

    if (apipaymentDsServiceRole0Dac58d6 == null) { throw new Error(`A combination of conditions caused 'apipaymentDsServiceRole0Dac58d6' to be undefined. Fixit.`); }
    const apipaymentDsServiceRoleDefaultPolicy528E42b0 = new iam.CfnPolicy(this, 'ApipaymentDsServiceRoleDefaultPolicy528E42B0', {
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
              [
                'arn:',
                this.partition,
                ':dynamodb:',
                this.region,
                ':',
                this.account,
                ':table/PaymentTable',
              ].join(''),
              undefined,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ApipaymentDsServiceRoleDefaultPolicy528E42B0',
      roles: [
        apipaymentDsServiceRole0Dac58d6.ref,
      ],
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiSchema510Eecd7 = new appsync.CfnGraphQLSchema(this, 'ApiSchema510EECD7', {
      apiId: apiF70053cd.attrApiId,
      definition: 'type ServiceVersion @aws_api_key {\n  version: String!\n}\n\ntype Customer @aws_api_key {\n  id: String!\n  name: String!\n}\n\ninput SaveCustomerInput {\n  name: String!\n}\n\ntype Order @aws_api_key {\n  customer: String!\n  order: String!\n}\n\ntype Payment @aws_api_key {\n  id: String!\n  amount: String!\n}\n\ninput PaymentInput {\n  amount: String!\n}\n\ntype Query @aws_api_key {\n  getServiceVersion: ServiceVersion\n  getCustomers: [Customer]\n  getCustomersNotConsistent: [Customer]\n  getCustomersConsistent: [Customer]\n  getCustomer(id: String): Customer\n  getCustomerNotConsistent(id: String): Customer\n  getCustomerConsistent(id: String): Customer\n  getCustomerOrdersEq(customer: String): Order\n  getCustomerOrdersLt(customer: String): Order\n  getCustomerOrdersLe(customer: String): Order\n  getCustomerOrdersGt(customer: String): Order\n  getCustomerOrdersGe(customer: String): Order\n  getCustomerOrdersNotConsistentEq(customer: String): Order\n  getCustomerOrdersNotConsistentLt(customer: String): Order\n  getCustomerOrdersNotConsistentLe(customer: String): Order\n  getCustomerOrdersNotConsistentGt(customer: String): Order\n  getCustomerOrdersNotConsistentGe(customer: String): Order\n  getCustomerOrdersConsistentEq(customer: String): Order\n  getCustomerOrdersConsistentLt(customer: String): Order\n  getCustomerOrdersConsistentLe(customer: String): Order\n  getCustomerOrdersConsistentGt(customer: String): Order\n  getCustomerOrdersConsistentGe(customer: String): Order\n  getCustomerOrdersFilter(customer: String, order: String): Order\n  getCustomerOrdersBetween(customer: String, order1: String, order2: String): Order\n  getOrderCustomersEq(order: String): [Customer]\n  getOrderCustomersLt(order: String): [Customer]\n  getOrderCustomersLe(order: String): [Customer]\n  getOrderCustomersGt(order: String): [Customer]\n  getOrderCustomersGe(order: String): [Customer]\n  getOrderCustomersNotConsistentEq(order: String): [Customer]\n  getOrderCustomersNotConsistentLt(order: String): [Customer]\n  getOrderCustomersNotConsistentLe(order: String): [Customer]\n  getOrderCustomersNotConsistentGt(order: String): [Customer]\n  getOrderCustomersNotConsistentGe(order: String): [Customer]\n  getOrderCustomersConsistentEq(order: String): [Customer]\n  getOrderCustomersConsistentLt(order: String): [Customer]\n  getOrderCustomersConsistentLe(order: String): [Customer]\n  getOrderCustomersConsistentGt(order: String): [Customer]\n  getOrderCustomersConsistentGe(order: String): [Customer]\n  getOrderCustomersFilter(order: String, customer: String): [Customer]\n  getOrderCustomersBetween(order: String, customer1: String, customer2: String): [Customer]\n  getPayment(id: String): Payment\n  getPaymentConsistent(id: String): Payment\n}\n\ninput FirstOrderInput {\n  product: String!\n  quantity: Int!\n}\n\ntype Mutation @aws_api_key {\n  addCustomer(customer: SaveCustomerInput!): Customer\n  saveCustomer(id: String!, customer: SaveCustomerInput!): Customer\n  removeCustomer(id: String!): Customer\n  saveCustomerWithFirstOrder(customer: SaveCustomerInput!, order: FirstOrderInput!, referral: String): Order\n  savePayment(payment: PaymentInput!): Payment\n  doPostOnAws: String!\n}\n',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apicustomerDsServiceRole76Cad539 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsServiceRole76Cad539' to be undefined. Fixit.`); }
    if (customerTable260Dcc08 == null) { throw new Error(`A combination of conditions caused 'customerTable260Dcc08' to be undefined. Fixit.`); }
    const apicustomerDsFe73dac5 = new appsync.CfnDataSource(this, 'ApicustomerDsFE73DAC5', {
      apiId: apiF70053cd.attrApiId,
      name: 'Customer',
      type: 'AMAZON_DYNAMODB',
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: customerTable260Dcc08.ref,
      },
      serviceRoleArn: apicustomerDsServiceRole76Cad539.attrArn,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apidsServiceRoleAdc7d124 == null) { throw new Error(`A combination of conditions caused 'apidsServiceRoleAdc7d124' to be undefined. Fixit.`); }
    const apids0Db53fea = new appsync.CfnDataSource(this, 'Apids0DB53FEA', {
      apiId: apiF70053cd.attrApiId,
      name: 'http',
      type: 'HTTP',
      httpConfig: {
        endpoint: 'https://aws.amazon.com/',
      },
      serviceRoleArn: apidsServiceRoleAdc7d124.attrArn,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apinone1F55f3f3 = new appsync.CfnDataSource(this, 'Apinone1F55F3F3', {
      apiId: apiF70053cd.attrApiId,
      name: 'None',
      type: 'NONE',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiorderDsServiceRoleCc2040c0 == null) { throw new Error(`A combination of conditions caused 'apiorderDsServiceRoleCc2040c0' to be undefined. Fixit.`); }
    if (orderTable416Eb896 == null) { throw new Error(`A combination of conditions caused 'orderTable416Eb896' to be undefined. Fixit.`); }
    const apiorderDsB50c8aad = new appsync.CfnDataSource(this, 'ApiorderDsB50C8AAD', {
      apiId: apiF70053cd.attrApiId,
      name: 'Order',
      type: 'AMAZON_DYNAMODB',
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: orderTable416Eb896.ref,
      },
      serviceRoleArn: apiorderDsServiceRoleCc2040c0.attrArn,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apipaymentDsServiceRole0Dac58d6 == null) { throw new Error(`A combination of conditions caused 'apipaymentDsServiceRole0Dac58d6' to be undefined. Fixit.`); }
    const apipaymentDs95C7ac36 = new appsync.CfnDataSource(this, 'ApipaymentDs95C7AC36', {
      apiId: apiF70053cd.attrApiId,
      name: 'Payment',
      type: 'AMAZON_DYNAMODB',
      dynamoDbConfig: {
        awsRegion: this.region,
        tableName: 'PaymentTable',
      },
      serviceRoleArn: apipaymentDsServiceRole0Dac58d6.attrArn,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    const apiDefaultApiKeyF991c37b = new appsync.CfnApiKey(this, 'ApiDefaultApiKeyF991C37B', {
      apiId: apiF70053cd.attrApiId,
    });
    apiDefaultApiKeyF991c37b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiMutationAddCustomer4E43da9d = new appsync.CfnResolver(this, 'ApiMutationAddCustomer4E43DA9D', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'addCustomer',
      typeName: 'Mutation',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.customer)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($util.autoId())\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationAddCustomer4E43da9d.addDependency(apicustomerDsFe73dac5);
    apiMutationAddCustomer4E43da9d.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apids0Db53fea == null) { throw new Error(`A combination of conditions caused 'apids0Db53fea' to be undefined. Fixit.`); }
    const apiMutationDoPostOnAws6Dbbf12b = new appsync.CfnResolver(this, 'ApiMutationDoPostOnAws6DBBF12B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'doPostOnAws',
      typeName: 'Mutation',
      dataSourceName: 'http',
      kind: 'UNIT',
      requestMappingTemplate: '{\n    \"version\": \"2018-05-29\",\n    \"method\": \"POST\",\n    # if full path is https://api.xxxxxxxxx.com/posts then resourcePath would be /posts\n    \"resourcePath\": \"/path/123\",\n    \"params\":{\n        \"body\": $util.toJson($ctx.args),\n        \"headers\":{\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"$ctx.request.headers.Authorization\"\n        }\n    }\n  }',
      responseMappingTemplate: '\n    ## Raise a GraphQL field error in case of a datasource invocation error\n    #if($ctx.error)\n      $util.error($ctx.error.message, $ctx.error.type)\n    #end\n    ## if the response status code is not 200, then return an error. Else return the body **\n    #if($ctx.result.statusCode == 200)\n        ## If response is 200, return the body.\n        $ctx.result.body\n    #else\n        ## If response is not 200, append the response to error block.\n        $utils.appendError($ctx.result.body, \"$ctx.result.statusCode\")\n    #end\n  ',
    });
    apiMutationDoPostOnAws6Dbbf12b.addDependency(apids0Db53fea);
    apiMutationDoPostOnAws6Dbbf12b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiMutationRemoveCustomer9Cb404e8 = new appsync.CfnResolver(this, 'ApiMutationRemoveCustomer9CB404E8', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'removeCustomer',
      typeName: 'Mutation',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"DeleteItem\", \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationRemoveCustomer9Cb404e8.addDependency(apicustomerDsFe73dac5);
    apiMutationRemoveCustomer9Cb404e8.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiMutationSaveCustomer9E1b960e = new appsync.CfnResolver(this, 'ApiMutationSaveCustomer9E1B960E', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'saveCustomer',
      typeName: 'Mutation',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.customer)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($ctx.args.id)\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationSaveCustomer9E1b960e.addDependency(apicustomerDsFe73dac5);
    apiMutationSaveCustomer9E1b960e.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiMutationSaveCustomerWithFirstOrder9E0e3bde = new appsync.CfnResolver(this, 'ApiMutationSaveCustomerWithFirstOrder9E0E3BDE', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'saveCustomerWithFirstOrder',
      typeName: 'Mutation',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.order)\n      $util.qr($input.put(\"referral\", referral))\n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"order\" : $util.dynamodb.toDynamoDBJson($util.autoId()),\"customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer.id)\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationSaveCustomerWithFirstOrder9E0e3bde.addDependency(apicustomerDsFe73dac5);
    apiMutationSaveCustomerWithFirstOrder9E0e3bde.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apipaymentDs95C7ac36 == null) { throw new Error(`A combination of conditions caused 'apipaymentDs95C7ac36' to be undefined. Fixit.`); }
    const apiMutationSavePayment63C236f7 = new appsync.CfnResolver(this, 'ApiMutationSavePayment63C236F7', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'savePayment',
      typeName: 'Mutation',
      dataSourceName: 'Payment',
      kind: 'UNIT',
      requestMappingTemplate: '\n      #set($input = $ctx.args.payment)\n      \n      {\n        \"version\": \"2017-02-28\",\n        \"operation\": \"PutItem\",\n        \"key\" : {\n      \"id\" : $util.dynamodb.toDynamoDBJson($util.autoId())\n    },\n        \"attributeValues\": $util.dynamodb.toMapValuesJson($input)\n      }',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiMutationSavePayment63C236f7.addDependency(apipaymentDs95C7ac36);
    apiMutationSavePayment63C236f7.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCusomtersNotConsistent851627D3 = new appsync.CfnResolver(this, 'ApiQueryGetCusomtersNotConsistent851627D3', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomersNotConsistent',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\", \"consistentRead\": false}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCusomtersNotConsistent851627D3.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCusomtersNotConsistent851627D3.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCustomer5Ec5bde8 = new appsync.CfnResolver(this, 'ApiQueryGetCustomer5EC5BDE8', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomer',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": false, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiQueryGetCustomer5Ec5bde8.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCustomer5Ec5bde8.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCustomerConsistentAe365d03 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerConsistentAE365D03', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerConsistent',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": true, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiQueryGetCustomerConsistentAe365d03.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCustomerConsistentAe365d03.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCustomerNotConsistent090667B1 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerNotConsistent090667B1', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerNotConsistent',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": false, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiQueryGetCustomerNotConsistent090667B1.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCustomerNotConsistent090667B1.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersBetween40B365b9 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersBetween40B365B9', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersBetween',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer = :customer AND #order BETWEEN :order1 AND :order2\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\", \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer), \":order1\" : $util.dynamodb.toDynamoDBJson($ctx.args.order1), \":order2\" : $util.dynamodb.toDynamoDBJson($ctx.args.order2)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersBetween40B365b9.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersBetween40B365b9.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersConsistentEq653D75b6 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersConsistentEq653D75B6', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersConsistentEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"query\" : {\n              \"expression\" : \"#customer = :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersConsistentEq653D75b6.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersConsistentEq653D75b6.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersConsistentGeB76bcc43 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersConsistentGeB76BCC43', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersConsistentGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"query\" : {\n              \"expression\" : \"#customer >= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersConsistentGeB76bcc43.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersConsistentGeB76bcc43.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersConsistentGtBc4b2edf = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersConsistentGtBC4B2EDF', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersConsistentGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"query\" : {\n              \"expression\" : \"#customer > :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersConsistentGtBc4b2edf.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersConsistentGtBc4b2edf.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersConsistentLeEcdeab1b = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersConsistentLeECDEAB1B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersConsistentLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"query\" : {\n              \"expression\" : \"#customer <= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersConsistentLeEcdeab1b.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersConsistentLeEcdeab1b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersConsistentLt250Bf7ec = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersConsistentLt250BF7EC', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersConsistentLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"query\" : {\n              \"expression\" : \"#customer < :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersConsistentLt250Bf7ec.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersConsistentLt250Bf7ec.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersEq8D77201b = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersEq8D77201B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer = :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersEq8D77201b.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersEq8D77201b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersFilter854Ff70b = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersFilter854FF70B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersFilter',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer = :customer AND begins_with(#order, :order)\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\", \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer), \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersFilter854Ff70b.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersFilter854Ff70b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersGeD1854d76 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersGeD1854D76', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer >= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersGeD1854d76.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersGeD1854d76.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersGtAabe2a40 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersGtAABE2A40', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer > :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersGtAabe2a40.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersGtAabe2a40.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersLe15936B5b = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersLe15936B5B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer <= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersLe15936B5b.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersLe15936B5b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersLt0C55634c = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersLt0C55634C', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer < :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersLt0C55634c.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersLt0C55634c.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersNotConsistentEqD733058c = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersNotConsistentEqD733058C', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersNotConsistentEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer = :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersNotConsistentEqD733058c.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersNotConsistentEqD733058c.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersNotConsistentGe8F8aa1e1 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersNotConsistentGe8F8AA1E1', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersNotConsistentGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer >= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersNotConsistentGe8F8aa1e1.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersNotConsistentGe8F8aa1e1.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersNotConsistentGt92879Db9 = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersNotConsistentGt92879DB9', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersNotConsistentGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer > :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersNotConsistentGt92879Db9.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersNotConsistentGt92879Db9.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersNotConsistentLe8817Eddb = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersNotConsistentLe8817EDDB', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersNotConsistentLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer <= :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersNotConsistentLe8817Eddb.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersNotConsistentLe8817Eddb.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetCustomerOrdersNotConsistentLt7B43587c = new appsync.CfnResolver(this, 'ApiQueryGetCustomerOrdersNotConsistentLt7B43587C', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomerOrdersNotConsistentLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#customer < :customer\",\n              \"expressionNames\" : {\n                \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomerOrdersNotConsistentLt7B43587c.addDependency(apiorderDsB50c8aad);
    apiQueryGetCustomerOrdersNotConsistentLt7B43587c.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCustomersAd7b06c3 = new appsync.CfnResolver(this, 'ApiQueryGetCustomersAD7B06C3', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomers',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\", \"consistentRead\": false}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomersAd7b06c3.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCustomersAd7b06c3.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apicustomerDsFe73dac5 == null) { throw new Error(`A combination of conditions caused 'apicustomerDsFe73dac5' to be undefined. Fixit.`); }
    const apiQueryGetCustomersConsistentCbd09d98 = new appsync.CfnResolver(this, 'ApiQueryGetCustomersConsistentCBD09D98', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getCustomersConsistent',
      typeName: 'Query',
      dataSourceName: 'Customer',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Scan\", \"consistentRead\": true}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetCustomersConsistentCbd09d98.addDependency(apicustomerDsFe73dac5);
    apiQueryGetCustomersConsistentCbd09d98.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersBetween7C2efcfe = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersBetween7C2EFCFE', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersBetween',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order = :order AND #customer BETWEEN :customer1 AND :customer2\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\", \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order), \":customer1\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer1), \":customer2\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer2)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersBetween7C2efcfe.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersBetween7C2efcfe.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersConsistentEq6C9caa47 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersConsistentEq6C9CAA47', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersConsistentEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order = :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersConsistentEq6C9caa47.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersConsistentEq6C9caa47.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersConsistentGeCe4a2d21 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersConsistentGeCE4A2D21', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersConsistentGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order >= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersConsistentGeCe4a2d21.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersConsistentGeCe4a2d21.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersConsistentGt8185C8f7 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersConsistentGt8185C8F7', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersConsistentGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order > :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersConsistentGt8185C8f7.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersConsistentGt8185C8f7.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersConsistentLeA46a454c = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersConsistentLeA46A454C', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersConsistentLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order <= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersConsistentLeA46a454c.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersConsistentLeA46a454c.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersConsistentLtB4b34793 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersConsistentLtB4B34793', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersConsistentLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": true, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order < :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersConsistentLtB4b34793.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersConsistentLtB4b34793.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersEq37D9dee0 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersEq37D9DEE0', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order = :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersEq37D9dee0.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersEq37D9dee0.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersFilter4E08981b = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersFilter4E08981B', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersFilter',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"query\" : {\n              \"expression\" : \"#order = :order AND begins_with(#customer, :customer)\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\", \"#customer\" : \"customer\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order), \":customer\" : $util.dynamodb.toDynamoDBJson($ctx.args.customer)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersFilter4E08981b.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersFilter4E08981b.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersGe1790C495 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersGe1790C495', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order >= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersGe1790C495.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersGe1790C495.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersGtB37e8428 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersGtB37E8428', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order > :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersGtB37e8428.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersGtB37e8428.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersLeE726f374 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersLeE726F374', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order <= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersLeE726f374.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersLeE726f374.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersLt4Ab5e0f8 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersLt4AB5E0F8', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order < :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersLt4Ab5e0f8.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersLt4Ab5e0f8.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersNotConsistentEq3Be248fe = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersNotConsistentEq3BE248FE', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersNotConsistentEq',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order = :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersNotConsistentEq3Be248fe.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersNotConsistentEq3Be248fe.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersNotConsistentGe76Ffc40e = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersNotConsistentGe76FFC40E', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersNotConsistentGe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order >= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersNotConsistentGe76Ffc40e.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersNotConsistentGe76Ffc40e.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersNotConsistentGt6C9f2f8f = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersNotConsistentGt6C9F2F8F', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersNotConsistentGt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order > :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersNotConsistentGt6C9f2f8f.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersNotConsistentGt6C9f2f8f.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersNotConsistentLe09B90bc1 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersNotConsistentLe09B90BC1', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersNotConsistentLe',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order <= :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersNotConsistentLe09B90bc1.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersNotConsistentLe09B90bc1.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apiorderDsB50c8aad == null) { throw new Error(`A combination of conditions caused 'apiorderDsB50c8aad' to be undefined. Fixit.`); }
    const apiQueryGetOrderCustomersNotConsistentLt3B88f412 = new appsync.CfnResolver(this, 'ApiQueryGetOrderCustomersNotConsistentLt3B88F412', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getOrderCustomersNotConsistentLt',
      typeName: 'Query',
      dataSourceName: 'Order',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2017-02-28\", \"operation\" : \"Query\",  \"consistentRead\": false, \"index\" : \"orderIndex\", \"query\" : {\n              \"expression\" : \"#order < :order\",\n              \"expressionNames\" : {\n                \"#order\" : \"order\"\n              },\n              \"expressionValues\" : {\n                \":order\" : $util.dynamodb.toDynamoDBJson($ctx.args.order)\n              }\n            }}',
      responseMappingTemplate: '$util.toJson($ctx.result.items)',
    });
    apiQueryGetOrderCustomersNotConsistentLt3B88f412.addDependency(apiorderDsB50c8aad);
    apiQueryGetOrderCustomersNotConsistentLt3B88f412.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apipaymentDs95C7ac36 == null) { throw new Error(`A combination of conditions caused 'apipaymentDs95C7ac36' to be undefined. Fixit.`); }
    const apiQueryGetPayment26F71513 = new appsync.CfnResolver(this, 'ApiQueryGetPayment26F71513', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getPayment',
      typeName: 'Query',
      dataSourceName: 'Payment',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": false, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiQueryGetPayment26F71513.addDependency(apipaymentDs95C7ac36);
    apiQueryGetPayment26F71513.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apipaymentDs95C7ac36 == null) { throw new Error(`A combination of conditions caused 'apipaymentDs95C7ac36' to be undefined. Fixit.`); }
    const apiQueryGetPaymentConsistent0440A8ce = new appsync.CfnResolver(this, 'ApiQueryGetPaymentConsistent0440A8CE', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getPaymentConsistent',
      typeName: 'Query',
      dataSourceName: 'Payment',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"GetItem\", \"consistentRead\": true, \"key\": {\"id\": $util.dynamodb.toDynamoDBJson($ctx.args.id)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    apiQueryGetPaymentConsistent0440A8ce.addDependency(apipaymentDs95C7ac36);
    apiQueryGetPaymentConsistent0440A8ce.addDependency(apiSchema510Eecd7);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiSchema510Eecd7 == null) { throw new Error(`A combination of conditions caused 'apiSchema510Eecd7' to be undefined. Fixit.`); }
    if (apinone1F55f3f3 == null) { throw new Error(`A combination of conditions caused 'apinone1F55f3f3' to be undefined. Fixit.`); }
    const apiQuerygetServiceVersionDa048589 = new appsync.CfnResolver(this, 'ApiQuerygetServiceVersionDA048589', {
      apiId: apiF70053cd.attrApiId,
      fieldName: 'getServiceVersion',
      typeName: 'Query',
      dataSourceName: 'None',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\":\"2017-02-28\"}',
      responseMappingTemplate: '{\"version\":\"v1\"}',
    });
    apiQuerygetServiceVersionDa048589.addDependency(apinone1F55f3f3);
    apiQuerygetServiceVersionDa048589.addDependency(apiSchema510Eecd7);
  }
}

