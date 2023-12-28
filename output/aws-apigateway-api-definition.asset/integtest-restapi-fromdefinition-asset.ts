import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integtest-restapi-fromdefinition-assetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integtest-restapi-fromdefinition-asset extends cdk.Stack {
  public readonly myapiEndpoint3628Afe3;
  public readonly petsUrl;
  public readonly booksUrl;

  public constructor(scope: cdk.App, id: string, props: integtest-restapi-fromdefinition-assetProps = {}) {
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
      bodyS3Location: {
        bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        key: '68497ac876de4e963fc8f7b5f1b28844c18ecc95e3f7c6e9e0bf250e03c037fb.yaml',
      },
      name: 'my-api',
    });

    const myapiCloudWatchRole095452E5 = new iam.CfnRole(this, 'myapiCloudWatchRole095452E5', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    myapiCloudWatchRole095452E5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiCloudWatchRole095452E5 == null) { throw new Error(`A combination of conditions caused 'myapiCloudWatchRole095452E5' to be undefined. Fixit.`); }
    const myapiAccountEc421a0a = new apigateway.CfnAccount(this, 'myapiAccountEC421A0A', {
      cloudWatchRoleArn: myapiCloudWatchRole095452E5.attrArn,
    });
    myapiAccountEc421a0a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myapiAccountEc421a0a.addDependency(myapi4C7bf186);

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    const myapibooks51D54548 = new apigateway.CfnResource(this, 'myapibooks51D54548', {
      parentId: myapi4C7bf186.attrRootResourceId,
      pathPart: 'books',
      restApiId: myapi4C7bf186.ref,
    });

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapibooks51D54548 == null) { throw new Error(`A combination of conditions caused 'myapibooks51D54548' to be undefined. Fixit.`); }
    const myapibooksGetd6b2f597 = new apigateway.CfnMethod(this, 'myapibooksGETD6B2F597', {
      httpMethod: 'GET',
      resourceId: myapibooks51D54548.ref,
      restApiId: myapi4C7bf186.ref,
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

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapibooks51D54548 == null) { throw new Error(`A combination of conditions caused 'myapibooks51D54548' to be undefined. Fixit.`); }
    if (myapibooksGetd6b2f597 == null) { throw new Error(`A combination of conditions caused 'myapibooksGetd6b2f597' to be undefined. Fixit.`); }
    const myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96 = new apigateway.CfnDeployment(this, 'myapiDeployment92F2CB49d7e5c9cfe50a1616e1cef4517d6b8f96', {
      restApiId: myapi4C7bf186.ref,
      description: 'Automatically created by the RestApi construct',
    });
    myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96.addDependency(myapibooksGetd6b2f597);
    myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96.addDependency(myapibooks51D54548);

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiAccountEc421a0a == null) { throw new Error(`A combination of conditions caused 'myapiAccountEc421a0a' to be undefined. Fixit.`); }
    if (myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96 == null) { throw new Error(`A combination of conditions caused 'myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96' to be undefined. Fixit.`); }
    const myapiDeploymentStageprod298F01af = new apigateway.CfnStage(this, 'myapiDeploymentStageprod298F01AF', {
      restApiId: myapi4C7bf186.ref,
      deploymentId: myapiDeployment92F2cb49d7e5c9cfe50a1616e1cef4517d6b8f96.ref,
      stageName: 'prod',
    });
    myapiDeploymentStageprod298F01af.addDependency(myapiAccountEc421a0a);

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
    this.petsUrl = [
      'https://',
      myapi4C7bf186.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myapiDeploymentStageprod298F01af.ref,
      '/pets',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputPetsURL', {
      key: 'PetsURL',
      value: this.petsUrl!.toString(),
    });
    this.booksUrl = [
      'https://',
      myapi4C7bf186.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myapiDeploymentStageprod298F01af.ref,
      '/books',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputBooksURL', {
      key: 'BooksURL',
      value: this.booksUrl!.toString(),
    });
  }
}

