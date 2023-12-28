import * as cdk from 'aws-cdk-lib';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-apigwv2-lambda-connect-integrationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-apigwv2-lambda-connect-integration extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-apigwv2-lambda-connect-integrationProps = {}) {
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
    const connectFunctionServiceRoleDd1eaa8c = new iam.CfnRole(this, 'ConnectFunctionServiceRoleDD1EAA8C', {
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

    const disconnectFunctionServiceRole49Db60ac = new iam.CfnRole(this, 'DisconnectFunctionServiceRole49DB60AC', {
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

    const webSocketApida75128a = new apigatewayv2.CfnApi(this, 'WebSocketAPIDA75128A', {
      name: 'webSocket',
      protocolType: 'WEBSOCKET',
      routeSelectionExpression: '$request.body.action',
    });

    const webSocketLogTable7F74aac5 = new dynamodb.CfnTable(this, 'WebSocketLogTable7F74AAC5', {
      attributeDefinitions: [
        {
          attributeName: 'ConnectionId',
          attributeType: 'S',
        },
      ],
      keySchema: [
        {
          attributeName: 'ConnectionId',
          keyType: 'HASH',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      tableName: 'WebSocketConnections',
    });
    webSocketLogTable7F74aac5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (connectFunctionServiceRoleDd1eaa8c == null) { throw new Error(`A combination of conditions caused 'connectFunctionServiceRoleDd1eaa8c' to be undefined. Fixit.`); }
    if (webSocketLogTable7F74aac5 == null) { throw new Error(`A combination of conditions caused 'webSocketLogTable7F74aac5' to be undefined. Fixit.`); }
    const connectFunctionServiceRoleDefaultPolicy9C1fe0b3 = new iam.CfnPolicy(this, 'ConnectFunctionServiceRoleDefaultPolicy9C1FE0B3', {
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
              webSocketLogTable7F74aac5.attrArn,
              undefined,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ConnectFunctionServiceRoleDefaultPolicy9C1FE0B3',
      roles: [
        connectFunctionServiceRoleDd1eaa8c.ref,
      ],
    });

    if (disconnectFunctionServiceRole49Db60ac == null) { throw new Error(`A combination of conditions caused 'disconnectFunctionServiceRole49Db60ac' to be undefined. Fixit.`); }
    if (webSocketLogTable7F74aac5 == null) { throw new Error(`A combination of conditions caused 'webSocketLogTable7F74aac5' to be undefined. Fixit.`); }
    const disconnectFunctionServiceRoleDefaultPolicyF5348ec3 = new iam.CfnPolicy(this, 'DisconnectFunctionServiceRoleDefaultPolicyF5348EC3', {
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
              webSocketLogTable7F74aac5.attrArn,
              undefined,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'DisconnectFunctionServiceRoleDefaultPolicyF5348EC3',
      roles: [
        disconnectFunctionServiceRole49Db60ac.ref,
      ],
    });

    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    const productionStage7933Aab2 = new apigatewayv2.CfnStage(this, 'ProductionStage7933AAB2', {
      apiId: webSocketApida75128a.ref,
      autoDeploy: true,
      stageName: 'prod',
    });

    if (connectFunctionServiceRoleDd1eaa8c == null) { throw new Error(`A combination of conditions caused 'connectFunctionServiceRoleDd1eaa8c' to be undefined. Fixit.`); }
    if (connectFunctionServiceRoleDefaultPolicy9C1fe0b3 == null) { throw new Error(`A combination of conditions caused 'connectFunctionServiceRoleDefaultPolicy9C1fe0b3' to be undefined. Fixit.`); }
    const connectFunction4D4b4bb5 = new lambda.CfnFunction(this, 'ConnectFunction4D4B4BB5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '2748a200bf25c8ee2c2898271226a9f7bdc386b8ce9669528731eb36c5ed9e28.zip',
      },
      environment: {
        variables: {
          'TABLE_NAME': 'WebSocketConnections',
        },
      },
      functionName: 'process_connect_requests',
      handler: 'index.handler',
      role: connectFunctionServiceRoleDd1eaa8c.attrArn,
      runtime: 'nodejs14.x',
      timeout: 5,
    });
    connectFunction4D4b4bb5.addDependency(connectFunctionServiceRoleDefaultPolicy9C1fe0b3);
    connectFunction4D4b4bb5.addDependency(connectFunctionServiceRoleDd1eaa8c);

    if (disconnectFunctionServiceRole49Db60ac == null) { throw new Error(`A combination of conditions caused 'disconnectFunctionServiceRole49Db60ac' to be undefined. Fixit.`); }
    if (disconnectFunctionServiceRoleDefaultPolicyF5348ec3 == null) { throw new Error(`A combination of conditions caused 'disconnectFunctionServiceRoleDefaultPolicyF5348ec3' to be undefined. Fixit.`); }
    const disconnectFunction620A9610 = new lambda.CfnFunction(this, 'DisconnectFunction620A9610', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'e593848af17fee558eece2cd2719347804c0c141cff4f8ea1fb8556cf986b5a0.zip',
      },
      environment: {
        variables: {
          'TABLE_NAME': 'WebSocketConnections',
        },
      },
      functionName: 'process_disconnect_requests',
      handler: 'index.handler',
      role: disconnectFunctionServiceRole49Db60ac.attrArn,
      runtime: 'nodejs14.x',
      timeout: 5,
    });
    disconnectFunction620A9610.addDependency(disconnectFunctionServiceRoleDefaultPolicyF5348ec3);
    disconnectFunction620A9610.addDependency(disconnectFunctionServiceRole49Db60ac);

    if (connectFunction4D4b4bb5 == null) { throw new Error(`A combination of conditions caused 'connectFunction4D4b4bb5' to be undefined. Fixit.`); }
    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    const webSocketApIconnectRouteConnectIntegration2725692A = new apigatewayv2.CfnIntegration(this, 'WebSocketAPIconnectRouteConnectIntegration2725692A', {
      apiId: webSocketApida75128a.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        connectFunction4D4b4bb5.attrArn,
        '/invocations',
      ].join(''),
    });

    if (connectFunction4D4b4bb5 == null) { throw new Error(`A combination of conditions caused 'connectFunction4D4b4bb5' to be undefined. Fixit.`); }
    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    const webSocketApIconnectRouteConnectIntegrationPermission1Fecde58 = new lambda.CfnPermission(this, 'WebSocketAPIconnectRouteConnectIntegrationPermission1FECDE58', {
      action: 'lambda:InvokeFunction',
      functionName: connectFunction4D4b4bb5.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        webSocketApida75128a.ref,
        '/*$connect',
      ].join(''),
    });

    if (disconnectFunction620A9610 == null) { throw new Error(`A combination of conditions caused 'disconnectFunction620A9610' to be undefined. Fixit.`); }
    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    const webSocketApIdisconnectRouteDisconnectIntegration317B9227 = new apigatewayv2.CfnIntegration(this, 'WebSocketAPIdisconnectRouteDisconnectIntegration317B9227', {
      apiId: webSocketApida75128a.ref,
      integrationType: 'AWS_PROXY',
      integrationUri: [
        'arn:',
        this.partition,
        ':apigateway:',
        this.region,
        ':lambda:path/2015-03-31/functions/',
        disconnectFunction620A9610.attrArn,
        '/invocations',
      ].join(''),
    });

    if (disconnectFunction620A9610 == null) { throw new Error(`A combination of conditions caused 'disconnectFunction620A9610' to be undefined. Fixit.`); }
    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    const webSocketApIdisconnectRouteDisconnectIntegrationPermission909Ccdd8 = new lambda.CfnPermission(this, 'WebSocketAPIdisconnectRouteDisconnectIntegrationPermission909CCDD8', {
      action: 'lambda:InvokeFunction',
      functionName: disconnectFunction620A9610.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        webSocketApida75128a.ref,
        '/*$disconnect',
      ].join(''),
    });

    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    if (webSocketApIconnectRouteConnectIntegration2725692A == null) { throw new Error(`A combination of conditions caused 'webSocketApIconnectRouteConnectIntegration2725692A' to be undefined. Fixit.`); }
    const webSocketApIconnectRoute4Bd84fcf = new apigatewayv2.CfnRoute(this, 'WebSocketAPIconnectRoute4BD84FCF', {
      apiId: webSocketApida75128a.ref,
      authorizationType: 'NONE',
      routeKey: '$connect',
      target: [
        'integrations/',
        webSocketApIconnectRouteConnectIntegration2725692A.ref,
      ].join(''),
    });

    if (webSocketApida75128a == null) { throw new Error(`A combination of conditions caused 'webSocketApida75128a' to be undefined. Fixit.`); }
    if (webSocketApIdisconnectRouteDisconnectIntegration317B9227 == null) { throw new Error(`A combination of conditions caused 'webSocketApIdisconnectRouteDisconnectIntegration317B9227' to be undefined. Fixit.`); }
    const webSocketApIdisconnectRouteBc1a3c36 = new apigatewayv2.CfnRoute(this, 'WebSocketAPIdisconnectRouteBC1A3C36', {
      apiId: webSocketApida75128a.ref,
      authorizationType: 'NONE',
      routeKey: '$disconnect',
      target: [
        'integrations/',
        webSocketApIdisconnectRouteDisconnectIntegration317B9227.ref,
      ].join(''),
    });
  }
}

