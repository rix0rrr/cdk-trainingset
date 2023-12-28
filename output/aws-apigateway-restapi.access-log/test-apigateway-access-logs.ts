import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface TestApigatewayAccessLogsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestApigatewayAccessLogs extends cdk.Stack {
  public readonly myApiEndpoint869Abe96;

  public constructor(scope: cdk.App, id: string, props: TestApigatewayAccessLogsProps = {}) {
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
    const myApi49610Edf = new apigateway.CfnRestApi(this, 'MyApi49610EDF', {
      name: 'MyApi',
    });

    const myApiCloudWatchRole2Bec1a9c = new iam.CfnRole(this, 'MyApiCloudWatchRole2BEC1A9C', {
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
    myApiCloudWatchRole2Bec1a9c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myLogGroup5C0dad85 = new logs.CfnLogGroup(this, 'MyLogGroup5C0DAD85', {
      retentionInDays: 731,
    });
    myLogGroup5C0dad85.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myApi49610Edf == null) { throw new Error(`A combination of conditions caused 'myApi49610Edf' to be undefined. Fixit.`); }
    if (myApiCloudWatchRole2Bec1a9c == null) { throw new Error(`A combination of conditions caused 'myApiCloudWatchRole2Bec1a9c' to be undefined. Fixit.`); }
    const myApiAccount13882D84 = new apigateway.CfnAccount(this, 'MyApiAccount13882D84', {
      cloudWatchRoleArn: myApiCloudWatchRole2Bec1a9c.attrArn,
    });
    myApiAccount13882D84.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    myApiAccount13882D84.addDependency(myApi49610Edf);

    if (myApi49610Edf == null) { throw new Error(`A combination of conditions caused 'myApi49610Edf' to be undefined. Fixit.`); }
    const myApiGetd0c7aa0c = new apigateway.CfnMethod(this, 'MyApiGETD0C7AA0C', {
      httpMethod: 'GET',
      resourceId: myApi49610Edf.attrRootResourceId,
      restApiId: myApi49610Edf.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (myApi49610Edf == null) { throw new Error(`A combination of conditions caused 'myApi49610Edf' to be undefined. Fixit.`); }
    if (myApiGetd0c7aa0c == null) { throw new Error(`A combination of conditions caused 'myApiGetd0c7aa0c' to be undefined. Fixit.`); }
    const myApiDeploymentEcb0d05e81594d6748b4b291f993111a5070d710 = new apigateway.CfnDeployment(this, 'MyApiDeploymentECB0D05E81594d6748b4b291f993111a5070d710', {
      restApiId: myApi49610Edf.ref,
      description: 'Automatically created by the RestApi construct',
    });
    myApiDeploymentEcb0d05e81594d6748b4b291f993111a5070d710.addDependency(myApiGetd0c7aa0c);

    if (myApi49610Edf == null) { throw new Error(`A combination of conditions caused 'myApi49610Edf' to be undefined. Fixit.`); }
    if (myApiAccount13882D84 == null) { throw new Error(`A combination of conditions caused 'myApiAccount13882D84' to be undefined. Fixit.`); }
    if (myApiDeploymentEcb0d05e81594d6748b4b291f993111a5070d710 == null) { throw new Error(`A combination of conditions caused 'myApiDeploymentEcb0d05e81594d6748b4b291f993111a5070d710' to be undefined. Fixit.`); }
    if (myLogGroup5C0dad85 == null) { throw new Error(`A combination of conditions caused 'myLogGroup5C0dad85' to be undefined. Fixit.`); }
    const myApiDeploymentStageprodE1054af0 = new apigateway.CfnStage(this, 'MyApiDeploymentStageprodE1054AF0', {
      restApiId: myApi49610Edf.ref,
      accessLogSetting: {
        destinationArn: myLogGroup5C0dad85.attrArn,
        format: '{\"requestId\":\"$context.requestId\",\"sourceIp\":\"$context.identity.sourceIp\",\"method\":\"$context.httpMethod\",\"callerAccountId\":\"$context.identity.accountId\",\"ownerAccountId\":\"$context.accountId\",\"userContext\":{\"sub\":\"$context.authorizer.claims.sub\",\"email\":\"$context.authorizer.claims.email\"},\"clientCertPem\":\"$context.identity.clientCert.clientCertPem\",\"subjectDN\":\"$context.identity.clientCert.subjectDN\",\"issunerDN\":\"$context.identity.clientCert.issuerDN\",\"serialNumber\":\"$context.identity.clientCert.serialNumber\",\"validityNotBefore\":\"$context.identity.clientCert.validity.notBefore\",\"validityNotAfter\":\"$context.identity.clientCert.validity.notAfter\"}',
      },
      deploymentId: myApiDeploymentEcb0d05e81594d6748b4b291f993111a5070d710.ref,
      stageName: 'prod',
    });
    myApiDeploymentStageprodE1054af0.addDependency(myApiAccount13882D84);

    // Outputs
    this.myApiEndpoint869Abe96 = [
      'https://',
      myApi49610Edf.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myApiDeploymentStageprodE1054af0.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMyApiEndpoint869ABE96', {
      key: 'MyApiEndpoint869ABE96',
      value: this.myApiEndpoint869Abe96!.toString(),
    });
  }
}

