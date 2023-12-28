import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface default-apiProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class default-api extends cdk.Stack {
  public readonly myapiEndpoint3628Afe3;

  public constructor(scope: cdk.App, id: string, props: default-apiProps = {}) {
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
    const myapi4C7bf186 = new apigateway.CfnRestApi(this, 'myapi4C7BF186', {
      name: 'my-api',
    });

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    const myapiGetf990ce3c = new apigateway.CfnMethod(this, 'myapiGETF990CE3C', {
      httpMethod: 'GET',
      resourceId: myapi4C7bf186.attrRootResourceId,
      restApiId: myapi4C7bf186.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiGetf990ce3c == null) { throw new Error(`A combination of conditions caused 'myapiGetf990ce3c' to be undefined. Fixit.`); }
    const myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a = new apigateway.CfnDeployment(this, 'myapiDeployment92F2CB4972a890db5063ec679071ba7eefc76f2a', {
      restApiId: myapi4C7bf186.ref,
      description: 'Automatically created by the RestApi construct',
    });
    myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a.addDependency(myapiGetf990ce3c);

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a == null) { throw new Error(`A combination of conditions caused 'myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a' to be undefined. Fixit.`); }
    const myapiDeploymentStageprod298F01af = new apigateway.CfnStage(this, 'myapiDeploymentStageprod298F01AF', {
      restApiId: myapi4C7bf186.ref,
      deploymentId: myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a.ref,
      stageName: 'prod',
    });

    // Outputs
    this.myapiEndpoint3628Afe3 = [
      'https://',
      myapi4C7bf186.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myapiDeploymentStageprod298F01af.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyapiEndpoint3628AFE3', {
      key: 'myapiEndpoint3628AFE3',
      value: this.myapiEndpoint3628Afe3!.toString(),
    });
  }
}

