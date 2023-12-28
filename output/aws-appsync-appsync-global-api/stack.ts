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
    const globalApiDf743291 = new appsync.CfnGraphQLApi(this, 'GlobalApiDF743291', {
      authenticationType: 'API_KEY',
      name: 'GlobalApi',
      visibility: 'GLOBAL',
    });

    if (globalApiDf743291 == null) { throw new Error(`A combination of conditions caused 'globalApiDf743291' to be undefined. Fixit.`); }
    const globalApiNoneDsa6a1c75b = new appsync.CfnDataSource(this, 'GlobalApiNoneDSA6A1C75B', {
      apiId: globalApiDf743291.attrApiId,
      name: 'NoneDS',
      type: 'NONE',
    });

    if (globalApiDf743291 == null) { throw new Error(`A combination of conditions caused 'globalApiDf743291' to be undefined. Fixit.`); }
    const globalApiSchema59B7a7f8 = new appsync.CfnGraphQLSchema(this, 'GlobalApiSchema59B7A7F8', {
      apiId: globalApiDf743291.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (globalApiDf743291 == null) { throw new Error(`A combination of conditions caused 'globalApiDf743291' to be undefined. Fixit.`); }
    if (globalApiSchema59B7a7f8 == null) { throw new Error(`A combination of conditions caused 'globalApiSchema59B7a7f8' to be undefined. Fixit.`); }
    const globalApiDefaultApiKey407F28ff = new appsync.CfnApiKey(this, 'GlobalApiDefaultApiKey407F28FF', {
      apiId: globalApiDf743291.attrApiId,
    });
    globalApiDefaultApiKey407F28ff.addDependency(globalApiSchema59B7a7f8);
  }
}

