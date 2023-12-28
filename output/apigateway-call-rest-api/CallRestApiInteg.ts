import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface CallRestApiIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CallRestApiInteg extends cdk.Stack {
  public readonly myRestApiEndpoint4C55e4cb;
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: CallRestApiIntegProps = {}) {
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
    const helloServiceRole1E55ea16 = new iam.CfnRole(this, 'HelloServiceRole1E55EA16', {
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

    const myRestApi2D1f47a9 = new apigateway.CfnRestApi(this, 'MyRestApi2D1F47A9', {
      name: 'MyRestApi',
    });

    const myRestApiCloudWatchRoleD4042e8e = new iam.CfnRole(this, 'MyRestApiCloudWatchRoleD4042E8E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    myRestApiCloudWatchRoleD4042e8e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (helloServiceRole1E55ea16 == null) { throw new Error(`A combination of conditions caused 'helloServiceRole1E55ea16' to be undefined. Fixit.`); }
    const hello4A628bd4 = new lambda.CfnFunction(this, 'Hello4A628BD4', {
      code: {
        zipFile: 'exports.handler = async function(event, context) { return { statusCode: 200, body: \"hello, world!\" }; };',
      },
      handler: 'index.handler',
      role: helloServiceRole1E55ea16.attrArn,
      runtime: 'nodejs18.x',
    });
    hello4A628bd4.addDependency(helloServiceRole1E55ea16);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiCloudWatchRoleD4042e8e == null) { throw new Error(`A combination of conditions caused 'myRestApiCloudWatchRoleD4042e8e' to be undefined. Fixit.`); }
    const myRestApiAccount2Fb6db7a = new apigateway.CfnAccount(this, 'MyRestApiAccount2FB6DB7A', {
      cloudWatchRoleArn: myRestApiCloudWatchRoleD4042e8e.attrArn,
    });
    myRestApiAccount2Fb6db7a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myRestApiAccount2Fb6db7a.addDependency(myRestApi2D1f47a9);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':execute-api:',
              this.region,
              ':',
              this.account,
              ':',
              myRestApi2D1f47a9.ref,
              '/prod/GET/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiAny05143f93 = new apigateway.CfnMethod(this, 'MyRestApiANY05143F93', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          hello4A628bd4.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: myRestApi2D1f47a9.attrRootResourceId,
      restApiId: myRestApi2D1f47a9.ref,
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    const myRestApiAnyApiPermissionTestCallRestApiIntegMyRestApiB570839cany379723ef = new lambda.CfnPermission(this, 'MyRestApiANYApiPermissionTestCallRestApiIntegMyRestApiB570839CANY379723EF', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/test-invoke-stage/*/',
      ].join(''),
    });

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"Call APIGW\",\"States\":{\"Call APIGW\":{\"End\":true,\"Type\":\"Task\",\"OutputPath\":\"$.ResponseBody\",\"Resource\":\"arn:',
        this.partition,
        ':states:::apigateway:invoke\",\"Parameters\":{\"ApiEndpoint\":\"',
        myRestApi2D1f47a9.ref,
        '.execute-api.',
        this.region,
        '.',
        this.urlSuffix,
        '\",\"Method\":\"GET\",\"Stage\":\"prod\",\"AuthType\":\"IAM_ROLE\"}}},\"TimeoutSeconds\":30}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAny05143f93 == null) { throw new Error(`A combination of conditions caused 'myRestApiAny05143f93' to be undefined. Fixit.`); }
    const myRestApiDeploymentB555b582d61dc696e12272a0706c826196fa8d62 = new apigateway.CfnDeployment(this, 'MyRestApiDeploymentB555B582d61dc696e12272a0706c826196fa8d62', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myRestApi2D1f47a9.ref,
    });
    myRestApiDeploymentB555b582d61dc696e12272a0706c826196fa8d62.addDependency(myRestApiAny05143f93);

    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiAccount2Fb6db7a == null) { throw new Error(`A combination of conditions caused 'myRestApiAccount2Fb6db7a' to be undefined. Fixit.`); }
    if (myRestApiDeploymentB555b582d61dc696e12272a0706c826196fa8d62 == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentB555b582d61dc696e12272a0706c826196fa8d62' to be undefined. Fixit.`); }
    const myRestApiDeploymentStageprodC33b8e5f = new apigateway.CfnStage(this, 'MyRestApiDeploymentStageprodC33B8E5F', {
      deploymentId: myRestApiDeploymentB555b582d61dc696e12272a0706c826196fa8d62.ref,
      restApiId: myRestApi2D1f47a9.ref,
      stageName: 'prod',
    });
    myRestApiDeploymentStageprodC33b8e5f.addDependency(myRestApiAccount2Fb6db7a);

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (myRestApi2D1f47a9 == null) { throw new Error(`A combination of conditions caused 'myRestApi2D1f47a9' to be undefined. Fixit.`); }
    if (myRestApiDeploymentStageprodC33b8e5f == null) { throw new Error(`A combination of conditions caused 'myRestApiDeploymentStageprodC33b8e5f' to be undefined. Fixit.`); }
    const myRestApiAnyApiPermissionCallRestApiIntegMyRestApiB570839cany0c27c1e3 = new lambda.CfnPermission(this, 'MyRestApiANYApiPermissionCallRestApiIntegMyRestApiB570839CANY0C27C1E3', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        myRestApi2D1f47a9.ref,
        '/',
        myRestApiDeploymentStageprodC33b8e5f.ref,
        '/*/',
      ].join(''),
    });

    // Outputs
    this.myRestApiEndpoint4C55e4cb = [
      'https://',
      myRestApi2D1f47a9.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myRestApiDeploymentStageprodC33b8e5f.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMyRestApiEndpoint4C55E4CB', {
      key: 'MyRestApiEndpoint4C55E4CB',
      value: this.myRestApiEndpoint4C55e4cb!.toString(),
    });
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

