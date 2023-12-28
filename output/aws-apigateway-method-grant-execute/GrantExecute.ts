import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface GrantExecuteProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class GrantExecute extends cdk.Stack {
  public readonly testapiEndpoint4Ae34d29;

  public constructor(scope: cdk.App, id: string, props: GrantExecuteProps = {}) {
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
    const testapiD6451f70 = new apigateway.CfnRestApi(this, 'testapiD6451F70', {
      name: 'test-api',
    });

    const user2C2b57ae = new iam.CfnUser(this, 'user2C2B57AE', {
    });

    if (testapiD6451f70 == null) { throw new Error(`A combination of conditions caused 'testapiD6451f70' to be undefined. Fixit.`); }
    const testapipets981F319e = new apigateway.CfnResource(this, 'testapipets981F319E', {
      parentId: testapiD6451f70.attrRootResourceId,
      pathPart: 'pets',
      restApiId: testapiD6451f70.ref,
    });

    if (testapiD6451f70 == null) { throw new Error(`A combination of conditions caused 'testapiD6451f70' to be undefined. Fixit.`); }
    if (testapipets981F319e == null) { throw new Error(`A combination of conditions caused 'testapipets981F319e' to be undefined. Fixit.`); }
    const testapipetsGet25a78130 = new apigateway.CfnMethod(this, 'testapipetsGET25A78130', {
      httpMethod: 'GET',
      resourceId: testapipets981F319e.ref,
      restApiId: testapiD6451f70.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (testapiD6451f70 == null) { throw new Error(`A combination of conditions caused 'testapiD6451f70' to be undefined. Fixit.`); }
    if (testapipets981F319e == null) { throw new Error(`A combination of conditions caused 'testapipets981F319e' to be undefined. Fixit.`); }
    if (testapipetsGet25a78130 == null) { throw new Error(`A combination of conditions caused 'testapipetsGet25a78130' to be undefined. Fixit.`); }
    const testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136 = new apigateway.CfnDeployment(this, 'testapiDeployment356D2C358af14d7f8fefbad1c57a65ea01cc6136', {
      restApiId: testapiD6451f70.ref,
      description: 'Automatically created by the RestApi construct',
    });
    testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136.addDependency(testapipetsGet25a78130);
    testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136.addDependency(testapipets981F319e);

    if (testapiD6451f70 == null) { throw new Error(`A combination of conditions caused 'testapiD6451f70' to be undefined. Fixit.`); }
    if (testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136 == null) { throw new Error(`A combination of conditions caused 'testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136' to be undefined. Fixit.`); }
    const testapiDeploymentStageprod5C9e92a4 = new apigateway.CfnStage(this, 'testapiDeploymentStageprod5C9E92A4', {
      restApiId: testapiD6451f70.ref,
      deploymentId: testapiDeployment356D2c358af14d7f8fefbad1c57a65ea01cc6136.ref,
      stageName: 'prod',
    });

    if (testapiD6451f70 == null) { throw new Error(`A combination of conditions caused 'testapiD6451f70' to be undefined. Fixit.`); }
    if (testapiDeploymentStageprod5C9e92a4 == null) { throw new Error(`A combination of conditions caused 'testapiDeploymentStageprod5C9e92a4' to be undefined. Fixit.`); }
    if (user2C2b57ae == null) { throw new Error(`A combination of conditions caused 'user2C2b57ae' to be undefined. Fixit.`); }
    const userDefaultPolicy083Df682 = new iam.CfnPolicy(this, 'userDefaultPolicy083DF682', {
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
              testapiD6451f70.ref,
              '/',
              testapiDeploymentStageprod5C9e92a4.ref,
              '/GET/pets',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'userDefaultPolicy083DF682',
      users: [
        user2C2b57ae.ref,
      ],
    });

    // Outputs
    this.testapiEndpoint4Ae34d29 = [
      'https://',
      testapiD6451f70.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      testapiDeploymentStageprod5C9e92a4.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputtestapiEndpoint4AE34D29', {
      key: 'testapiEndpoint4AE34D29',
      value: this.testapiEndpoint4Ae34d29!.toString(),
    });
  }
}

