import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface Integrestapiimportrootstackintegrestapiimportbooksstack8A2BcefbNestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetointegrestapiimportRootStackRestApi2647Da4cRootResourceId: string;
  /**
   */
  readonly referencetointegrestapiimportRootStackRestApi2647Da4cRef: string;
}

export class Integrestapiimportrootstackintegrestapiimportbooksstack8A2BcefbNested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Integrestapiimportrootstackintegrestapiimportbooksstack8A2BcefbNestedProps) {
    super(scope, id, props);

    // Resources
    const restApibooksA2500abd = new apigateway.CfnResource(this, 'RestApibooksA2500ABD', {
      parentId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRootResourceId!,
      pathPart: 'books',
      restApiId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRef!,
    });

    if (restApibooksA2500abd == null) { throw new Error(`A combination of conditions caused 'restApibooksA2500abd' to be undefined. Fixit.`); }
    const restApibooksGet46f66c0a = new apigateway.CfnMethod(this, 'RestApibooksGET46F66C0A', {
      httpMethod: 'GET',
      resourceId: restApibooksA2500abd.ref,
      restApiId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRef!,
      authorizationType: 'NONE',
      integration: {
        integrationResponses: [
          {
            statusCode: '200',
          },
        ],
        passthroughBehavior: 'NEVER',
        requestTemplates: {
          'application/json': '{ \"statusCode\": 200 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '200',
        },
      ],
    });
  }
}

