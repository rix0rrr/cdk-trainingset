import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const noneApi55e3d0d9 = new appsync.CfnGraphQLApi(this, 'NoneAPI55E3D0D9', {
      authenticationType: 'API_KEY',
      name: 'NoneAPI',
    });

    if (noneApi55e3d0d9 == null) { throw new Error(`A combination of conditions caused 'noneApi55e3d0d9' to be undefined. Fixit.`); }
    const noneApiNoneDscc0a2012 = new appsync.CfnDataSource(this, 'NoneAPINoneDSCC0A2012', {
      apiId: noneApi55e3d0d9.attrApiId,
      name: 'NoneDS',
      type: 'NONE',
    });

    if (noneApi55e3d0d9 == null) { throw new Error(`A combination of conditions caused 'noneApi55e3d0d9' to be undefined. Fixit.`); }
    const noneApiSchema60A29796 = new appsync.CfnGraphQLSchema(this, 'NoneAPISchema60A29796', {
      apiId: noneApi55e3d0d9.attrApiId,
      definition: 'type test {\n  version: String!\n}\ntype Query {\n  getTests: [test]!\n}\ntype Mutation {\n  addTest(version: String!): test\n}\n',
    });

    if (noneApi55e3d0d9 == null) { throw new Error(`A combination of conditions caused 'noneApi55e3d0d9' to be undefined. Fixit.`); }
    if (noneApiSchema60A29796 == null) { throw new Error(`A combination of conditions caused 'noneApiSchema60A29796' to be undefined. Fixit.`); }
    const noneApiDefaultApiKey67B964ca = new appsync.CfnApiKey(this, 'NoneAPIDefaultApiKey67B964CA', {
      apiId: noneApi55e3d0d9.attrApiId,
    });
    noneApiDefaultApiKey67B964ca.addDependency(noneApiSchema60A29796);
  }
}

