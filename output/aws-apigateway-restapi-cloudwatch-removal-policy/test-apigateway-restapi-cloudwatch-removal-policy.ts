import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface test-apigateway-restapi-cloudwatch-removal-policyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class test-apigateway-restapi-cloudwatch-removal-policy extends cdk.Stack {
  public readonly myapiEndpoint3628Afe3;

  public constructor(scope: cdk.App, id: string, props: test-apigateway-restapi-cloudwatch-removal-policyProps = {}) {
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
    myapiCloudWatchRole095452E5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiCloudWatchRole095452E5 == null) { throw new Error(`A combination of conditions caused 'myapiCloudWatchRole095452E5' to be undefined. Fixit.`); }
    const myapiAccountEc421a0a = new apigateway.CfnAccount(this, 'myapiAccountEC421A0A', {
      cloudWatchRoleArn: myapiCloudWatchRole095452E5.attrArn,
    });
    myapiAccountEc421a0a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    myapiAccountEc421a0a.addDependency(myapi4C7bf186);

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    const myapiGetf990ce3c = new apigateway.CfnMethod(this, 'myapiGETF990CE3C', {
      authorizationType: 'NONE',
      httpMethod: 'GET',
      integration: {
        type: 'MOCK',
      },
      resourceId: myapi4C7bf186.attrRootResourceId,
      restApiId: myapi4C7bf186.ref,
    });

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiGetf990ce3c == null) { throw new Error(`A combination of conditions caused 'myapiGetf990ce3c' to be undefined. Fixit.`); }
    const myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a = new apigateway.CfnDeployment(this, 'myapiDeployment92F2CB4972a890db5063ec679071ba7eefc76f2a', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myapi4C7bf186.ref,
    });
    myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a.addDependency(myapiGetf990ce3c);

    if (myapi4C7bf186 == null) { throw new Error(`A combination of conditions caused 'myapi4C7bf186' to be undefined. Fixit.`); }
    if (myapiAccountEc421a0a == null) { throw new Error(`A combination of conditions caused 'myapiAccountEc421a0a' to be undefined. Fixit.`); }
    if (myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a == null) { throw new Error(`A combination of conditions caused 'myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a' to be undefined. Fixit.`); }
    const myapiDeploymentStageprod298F01af = new apigateway.CfnStage(this, 'myapiDeploymentStageprod298F01AF', {
      deploymentId: myapiDeployment92F2cb4972a890db5063ec679071ba7eefc76f2a.ref,
      restApiId: myapi4C7bf186.ref,
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
  }
}

