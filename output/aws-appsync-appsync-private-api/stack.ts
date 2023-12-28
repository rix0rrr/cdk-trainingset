import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';

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
    const privateApi1Fa926d9 = new appsync.CfnGraphQLApi(this, 'PrivateApi1FA926D9', {
      authenticationType: 'API_KEY',
      name: 'PrivateApi',
      visibility: 'PRIVATE',
    });

    if (privateApi1Fa926d9 == null) { throw new Error(`A combination of conditions caused 'privateApi1Fa926d9' to be undefined. Fixit.`); }
    const privateApiNoneDsf76d677a = new appsync.CfnDataSource(this, 'PrivateApiNoneDSF76D677A', {
      apiId: privateApi1Fa926d9.attrApiId,
      name: 'NoneDS',
      type: 'NONE',
    });

    if (privateApi1Fa926d9 == null) { throw new Error(`A combination of conditions caused 'privateApi1Fa926d9' to be undefined. Fixit.`); }
    const privateApiSchema8313Bb1a = new appsync.CfnGraphQLSchema(this, 'PrivateApiSchema8313BB1A', {
      apiId: privateApi1Fa926d9.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (privateApi1Fa926d9 == null) { throw new Error(`A combination of conditions caused 'privateApi1Fa926d9' to be undefined. Fixit.`); }
    if (privateApiSchema8313Bb1a == null) { throw new Error(`A combination of conditions caused 'privateApiSchema8313Bb1a' to be undefined. Fixit.`); }
    const privateApiDefaultApiKey1F26a0c1 = new appsync.CfnApiKey(this, 'PrivateApiDefaultApiKey1F26A0C1', {
      apiId: privateApi1Fa926d9.attrApiId,
    });
    privateApiDefaultApiKey1F26a0c1.addDependency(privateApiSchema8313Bb1a);
  }
}

