import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface integrestapiimportRootStackintegrestapiimportPetsStackC2B0DDC8.nestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetointegrestapiimportRootStackRestApi2647Da4cRootResourceId: string;
  /**
   */
  readonly referencetointegrestapiimportRootStackRestApi2647Da4cRef: string;
}

export class integrestapiimportRootStackintegrestapiimportPetsStackC2B0DDC8.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integrestapiimportRootStackintegrestapiimportPetsStackC2B0DDC8.nestedProps) {
    super(scope, id, props);

    // Resources
    const restApipetsC5a41236 = new apigateway.CfnResource(this, 'RestApipetsC5A41236', {
      parentId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRootResourceId!,
      pathPart: 'pets',
      restApiId: props.referencetointegrestapiimportRootStackRestApi2647Da4cRef!,
    });

    if (restApipetsC5a41236 == null) { throw new Error(`A combination of conditions caused 'restApipetsC5a41236' to be undefined. Fixit.`); }
    const restApipetsGet4375532c = new apigateway.CfnMethod(this, 'RestApipetsGET4375532C', {
      httpMethod: 'GET',
      resourceId: restApipetsC5a41236.ref,
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

