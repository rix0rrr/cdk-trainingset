import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AppsyncLambdaAuthProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AppsyncLambdaAuth extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AppsyncLambdaAuthProps = {}) {
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
    const funcServiceRoleA96ccb44 = new iam.CfnRole(this, 'funcServiceRoleA96CCB44', {
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

    if (funcServiceRoleA96ccb44 == null) { throw new Error(`A combination of conditions caused 'funcServiceRoleA96ccb44' to be undefined. Fixit.`); }
    const funcC3a0c2e2 = new lambda.CfnFunction(this, 'funcC3A0C2E2', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'df9f207d681056c35badb6bc0d60a945b44c887b227b759715fd6a6443486443.zip',
      },
      handler: 'lambda-tutorial.handler',
      role: funcServiceRoleA96ccb44.attrArn,
      runtime: 'nodejs18.x',
    });
    funcC3a0c2e2.addDependency(funcServiceRoleA96ccb44);

    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const api1A91238e2 = new appsync.CfnGraphQLApi(this, 'api1A91238E2', {
      authenticationType: 'AWS_LAMBDA',
      lambdaAuthorizerConfig: {
        authorizerUri: funcC3a0c2e2.attrArn,
      },
      name: 'api1',
    });

    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const api2C4850cea = new appsync.CfnGraphQLApi(this, 'api2C4850CEA', {
      authenticationType: 'AWS_LAMBDA',
      lambdaAuthorizerConfig: {
        authorizerUri: funcC3a0c2e2.attrArn,
      },
      name: 'api2',
    });

    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const funcapi1appsync5C5bbfa1 = new lambda.CfnPermission(this, 'funcapi1appsync5C5BBFA1', {
      action: 'lambda:InvokeFunction',
      functionName: funcC3a0c2e2.attrArn,
      principal: 'appsync.amazonaws.com',
    });

    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const funcapi2appsync0Ee83ef2 = new lambda.CfnPermission(this, 'funcapi2appsync0EE83EF2', {
      action: 'lambda:InvokeFunction',
      functionName: funcC3a0c2e2.attrArn,
      principal: 'appsync.amazonaws.com',
    });

    if (api1A91238e2 == null) { throw new Error(`A combination of conditions caused 'api1A91238e2' to be undefined. Fixit.`); }
    const api1SchemaFfa53db6 = new appsync.CfnGraphQLSchema(this, 'api1SchemaFFA53DB6', {
      apiId: api1A91238e2.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (api2C4850cea == null) { throw new Error(`A combination of conditions caused 'api2C4850cea' to be undefined. Fixit.`); }
    const api2SchemaD5c26031 = new appsync.CfnGraphQLSchema(this, 'api2SchemaD5C26031', {
      apiId: api2C4850cea.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });
  }
}

