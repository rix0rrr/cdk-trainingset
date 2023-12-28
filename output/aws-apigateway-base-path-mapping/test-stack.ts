import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface TestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestStack extends cdk.Stack {
  public readonly apiEndpoint4F160690;

  public constructor(scope: cdk.App, id: string, props: TestStackProps = {}) {
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
    const apiF70053cd = new apigateway.CfnRestApi(this, 'ApiF70053CD', {
      name: 'Api',
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiGet9257b917 = new apigateway.CfnMethod(this, 'ApiGET9257B917', {
      httpMethod: 'GET',
      resourceId: apiF70053cd.attrRootResourceId,
      restApiId: apiF70053cd.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const mappingThree36Bba1b6 = new apigateway.CfnBasePathMapping(this, 'MappingThree36BBA1B6', {
      domainName: 'domainName',
      basePath: 'api/v1/multi-level-path',
      restApiId: apiF70053cd.ref,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const mappingTwo551C79ed = new apigateway.CfnBasePathMapping(this, 'MappingTwo551C79ED', {
      domainName: 'domainName',
      basePath: 'path',
      restApiId: apiF70053cd.ref,
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiGet9257b917 == null) { throw new Error(`A combination of conditions caused 'apiGet9257b917' to be undefined. Fixit.`); }
    const apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73 = new apigateway.CfnDeployment(this, 'ApiDeploymentB17BE62Df672ad8455f9678e4a3db5854bdb8d73', {
      restApiId: apiF70053cd.ref,
      description: 'Automatically created by the RestApi construct',
    });
    apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73.addDependency(apiGet9257b917);

    if (apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73 == null) { throw new Error(`A combination of conditions caused 'apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73' to be undefined. Fixit.`); }
    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiDeploymentStageprod3Eb9684e = new apigateway.CfnStage(this, 'ApiDeploymentStageprod3EB9684E', {
      restApiId: apiF70053cd.ref,
      deploymentId: apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73.ref,
      stageName: 'prod',
    });

    if (apiDeploymentStageprod3Eb9684e == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod3Eb9684e' to be undefined. Fixit.`); }
    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const mappingOneAb5d4fd4 = new apigateway.CfnBasePathMapping(this, 'MappingOneAB5D4FD4', {
      domainName: 'domainName',
      restApiId: apiF70053cd.ref,
      stage: apiDeploymentStageprod3Eb9684e.ref,
    });

    // Outputs
    this.apiEndpoint4F160690 = [
      'https://',
      apiF70053cd.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      apiDeploymentStageprod3Eb9684e.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputApiEndpoint4F160690', {
      key: 'ApiEndpoint4F160690',
      value: this.apiEndpoint4F160690!.toString(),
    });
  }
}

