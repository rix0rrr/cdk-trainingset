import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface Integrestapiimportrootstackintegrestapiimportdeploystack7C4Fc449NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetointegrestapiimportRootStackRestApi2647Da4cRef: string;
}

export class Integrestapiimportrootstackintegrestapiimportdeploystack7C4Fc449Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integrestapiimportrootstackintegrestapiimportdeploystack7C4Fc449NestedProps) {
    super(scope, id, props);

    // Resources
    const deployment37Bbd5e4 = new apigateway.CfnDeployment(this, 'Deployment37BBD5E4', {
      restApiId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRef!,
    });

    if (deployment37Bbd5e4 == null) { throw new Error(`A combination of conditions caused 'deployment37Bbd5e4' to be undefined. Fixit.`); }
    const stage0E8c2af5 = new apigateway.CfnStage(this, 'Stage0E8C2AF5', {
      restApiId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRef!,
      deploymentId: deployment37Bbd5e4.ref,
      stageName: 'prod',
    });
  }
}

