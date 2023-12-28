import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integtest-restapi-fromdefinition-inlineProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integtest-restapi-fromdefinition-inline extends cdk.Stack {
  public readonly myapiEndpoint3628Afe3;
  public readonly petsUrl;

  public constructor(scope: cdk.App, id: string, props: integtest-restapi-fromdefinition-inlineProps = {}) {
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
      body: {
        openapi: '3.0.2',
        info: {
          version: '1.0.0',
          title: 'Test API for CDK',
        },
        paths: {
          '/pets': {
            get: {
              summary: 'Test Method',
              operationId: 'testMethod',
              responses: {
                '200': {
                  description: 'A paged array of pets',
                  content: {
                    'application/json': {
                      schema: {
                        '$ref': '#/components/schemas/Empty',
                      },
                    },
                  },
                },
              },
              'x-amazon-apigateway-integration': {
                responses: {
                  default: {
                    statusCode: '200',
                  },
                },
                requestTemplates: {
                  'application/json': '{\"statusCode\": 200}',
                },
                passthroughBehavior: 'when_no_match',
                type: 'mock',
              },
            },
          },
        },
        components: {
          schemas: {
            Empty: {
              title: 'Empty Schema',
              type: 'object',
            },
          },
        },
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
    const myapiDeployment92F2cb49a59bca458e4fac1fcd742212ded42a65 = new apigateway.CfnDeployment(this, 'myapiDeployment92F2CB49a59bca458e4fac1fcd742212ded42a65', {
      restApiId: myapi4C7bf186.ref,
      description: 'Automatically created by the RestApi construct',
    });

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiAccountEc421a0a == null) { throw new Error(`A combination of conditions caused 'myapiAccountEc421a0a' to be undefined. Fixit.`); }
    if (myapiDeployment92F2cb49a59bca458e4fac1fcd742212ded42a65 == null) { throw new Error(`A combination of conditions caused 'myapiDeployment92F2cb49a59bca458e4fac1fcd742212ded42a65' to be undefined. Fixit.`); }
    const myapiDeploymentStageprod298F01af = new apigateway.CfnStage(this, 'myapiDeploymentStageprod298F01AF', {
      restApiId: myapi4C7bf186.ref,
      deploymentId: myapiDeployment92F2cb49a59bca458e4fac1fcd742212ded42a65.ref,
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
  }
}

