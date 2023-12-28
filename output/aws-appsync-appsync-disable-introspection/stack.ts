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
    const disableIntrospectionE1701ce9 = new appsync.CfnGraphQLApi(this, 'DisableIntrospectionE1701CE9', {
      authenticationType: 'API_KEY',
      introspectionConfig: 'DISABLED',
      name: 'DisableIntrospection',
    });

    if (disableIntrospectionE1701ce9 == null) { throw new Error(`A combination of conditions caused 'disableIntrospectionE1701ce9' to be undefined. Fixit.`); }
    const disableIntrospectionNoneDsc312e52a = new appsync.CfnDataSource(this, 'DisableIntrospectionNoneDSC312E52A', {
      apiId: disableIntrospectionE1701ce9.attrApiId,
      name: 'NoneDS',
      type: 'NONE',
    });

    if (disableIntrospectionE1701ce9 == null) { throw new Error(`A combination of conditions caused 'disableIntrospectionE1701ce9' to be undefined. Fixit.`); }
    const disableIntrospectionSchema09592192 = new appsync.CfnGraphQLSchema(this, 'DisableIntrospectionSchema09592192', {
      apiId: disableIntrospectionE1701ce9.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (disableIntrospectionE1701ce9 == null) { throw new Error(`A combination of conditions caused 'disableIntrospectionE1701ce9' to be undefined. Fixit.`); }
    if (disableIntrospectionSchema09592192 == null) { throw new Error(`A combination of conditions caused 'disableIntrospectionSchema09592192' to be undefined. Fixit.`); }
    const disableIntrospectionDefaultApiKeyD4180023 = new appsync.CfnApiKey(this, 'DisableIntrospectionDefaultApiKeyD4180023', {
      apiId: disableIntrospectionE1701ce9.attrApiId,
    });
    disableIntrospectionDefaultApiKeyD4180023.addDependency(disableIntrospectionSchema09592192);
  }
}

