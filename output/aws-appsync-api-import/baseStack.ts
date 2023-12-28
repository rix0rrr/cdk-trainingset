import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';

export interface BasestackProps extends cdk.StackProps {
}

export class Basestack extends cdk.Stack {
  public readonly exportsOutputFnGetAttbaseApiCda4d43aApiId50287E68;

  public constructor(scope: cdk.App, id: string, props: BasestackProps = {}) {
    super(scope, id, props);

    // Resources
    const baseApiCda4d43a = new appsync.CfnGraphQLApi(this, 'baseApiCDA4D43A', {
      authenticationType: 'API_KEY',
      name: 'baseApi',
    });

    if (baseApiCda4d43a == null) { throw new Error(`A combination of conditions caused 'baseApiCda4d43a' to be undefined. Fixit.`); }
    const baseApiSchemaB12c7bb0 = new appsync.CfnGraphQLSchema(this, 'baseApiSchemaB12C7BB0', {
      apiId: baseApiCda4d43a.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (baseApiCda4d43a == null) { throw new Error(`A combination of conditions caused 'baseApiCda4d43a' to be undefined. Fixit.`); }
    if (baseApiSchemaB12c7bb0 == null) { throw new Error(`A combination of conditions caused 'baseApiSchemaB12c7bb0' to be undefined. Fixit.`); }
    const baseApiDefaultApiKeyA3a0a16a = new appsync.CfnApiKey(this, 'baseApiDefaultApiKeyA3A0A16A', {
      apiId: baseApiCda4d43a.attrApiId,
    });
    baseApiDefaultApiKeyA3a0a16a.addDependency(baseApiSchemaB12c7bb0);

    // Outputs
    this.exportsOutputFnGetAttbaseApiCda4d43aApiId50287E68 = baseApiCda4d43a.attrApiId;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68', {
      key: 'ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68',
      exportName: 'baseStack:ExportsOutputFnGetAttbaseApiCDA4D43AApiId50287E68',
      value: this.exportsOutputFnGetAttbaseApiCda4d43aApiId50287E68!.toString(),
    });
  }
}

