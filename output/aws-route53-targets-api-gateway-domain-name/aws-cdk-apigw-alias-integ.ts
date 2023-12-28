import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface AwsCdkApigwAliasIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkApigwAliasInteg extends cdk.Stack {
  public readonly apiEndpoint9349E63c;

  public constructor(scope: cdk.App, id: string, props: AwsCdkApigwAliasIntegProps = {}) {
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
    const handlerServiceRoleFcdc14ae = new iam.CfnRole(this, 'HandlerServiceRoleFCDC14AE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const apiC8550315 = new apigateway.CfnRestApi(this, 'apiC8550315', {
      name: 'api',
    });

    const apiCloudWatchRoleAc81d93e = new iam.CfnRole(this, 'apiCloudWatchRoleAC81D93E', {
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
    apiCloudWatchRoleAc81d93e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const apiCustomDomain64773C4f = new apigateway.CfnDomainName(this, 'apiCustomDomain64773C4F', {
      domainName: 'example.com',
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      regionalCertificateArn: 'arn:aws:acm:us-east-1:111111111111:certificate',
    });

    if (apiCustomDomain64773C4f == null) { throw new Error(`A combination of conditions caused 'apiCustomDomain64773C4f' to be undefined. Fixit.`); }
    const alias325C5727 = new route53.CfnRecordSet(this, 'Alias325C5727', {
      aliasTarget: {
        dnsName: apiCustomDomain64773C4f.attrRegionalDomainName,
        hostedZoneId: apiCustomDomain64773C4f.attrRegionalHostedZoneId,
      },
      hostedZoneId: 'AAAAAAAAAAAAA',
      name: 'example.com.',
      type: 'A',
    });

    if (handlerServiceRoleFcdc14ae == null) { throw new Error(`A combination of conditions caused 'handlerServiceRoleFcdc14ae' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        zipFile: 'exports.handler = async () => {\n        return {\n          statusCode: \'200\',\n          body: \'hello, world!\'\n        };\n      };',
      },
      handler: 'index.handler',
      role: handlerServiceRoleFcdc14ae.attrArn,
      runtime: 'nodejs18.x',
    });
    handler886Cb40b.addDependency(handlerServiceRoleFcdc14ae);

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiCloudWatchRoleAc81d93e == null) { throw new Error(`A combination of conditions caused 'apiCloudWatchRoleAc81d93e' to be undefined. Fixit.`); }
    const apiAccount57E28b43 = new apigateway.CfnAccount(this, 'apiAccount57E28B43', {
      cloudWatchRoleArn: apiCloudWatchRoleAc81d93e.attrArn,
    });
    apiAccount57E28b43.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    apiAccount57E28b43.addDependency(apiC8550315);

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    const apiproxy4Ea44110 = new apigateway.CfnResource(this, 'apiproxy4EA44110', {
      parentId: apiC8550315.attrRootResourceId,
      pathPart: '{proxy+}',
      restApiId: apiC8550315.ref,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    const apiAnyApiPermissionTestawscdkapigwaliasintegapiF4df08acanyc10548c8 = new lambda.CfnPermission(this, 'apiANYApiPermissionTestawscdkapigwaliasintegapiF4DF08ACANYC10548C8', {
      action: 'lambda:InvokeFunction',
      functionName: handler886Cb40b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        apiC8550315.ref,
        '/test-invoke-stage/*/',
      ].join(''),
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    const apiAnyb3df8c3c = new apigateway.CfnMethod(this, 'apiANYB3DF8C3C', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          handler886Cb40b.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: apiC8550315.attrRootResourceId,
      restApiId: apiC8550315.ref,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiproxy4Ea44110 == null) { throw new Error(`A combination of conditions caused 'apiproxy4Ea44110' to be undefined. Fixit.`); }
    const apiproxyAny7f13f09c = new apigateway.CfnMethod(this, 'apiproxyANY7F13F09C', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          handler886Cb40b.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: apiproxy4Ea44110.ref,
      restApiId: apiC8550315.ref,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    const apiproxyAnyApiPermissionTestawscdkapigwaliasintegapiF4df08acanYproxyCf8e3d8c = new lambda.CfnPermission(this, 'apiproxyANYApiPermissionTestawscdkapigwaliasintegapiF4DF08ACANYproxyCF8E3D8C', {
      action: 'lambda:InvokeFunction',
      functionName: handler886Cb40b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        apiC8550315.ref,
        '/test-invoke-stage/*/*',
      ].join(''),
    });

    if (apiAnyb3df8c3c == null) { throw new Error(`A combination of conditions caused 'apiAnyb3df8c3c' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiproxy4Ea44110 == null) { throw new Error(`A combination of conditions caused 'apiproxy4Ea44110' to be undefined. Fixit.`); }
    if (apiproxyAny7f13f09c == null) { throw new Error(`A combination of conditions caused 'apiproxyAny7f13f09c' to be undefined. Fixit.`); }
    const apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950 = new apigateway.CfnDeployment(this, 'apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950', {
      description: 'Automatically created by the RestApi construct',
      restApiId: apiC8550315.ref,
    });
    apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950.addDependency(apiproxyAny7f13f09c);
    apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950.addDependency(apiproxy4Ea44110);
    apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950.addDependency(apiAnyb3df8c3c);

    if (apiAccount57E28b43 == null) { throw new Error(`A combination of conditions caused 'apiAccount57E28b43' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950 == null) { throw new Error(`A combination of conditions caused 'apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950' to be undefined. Fixit.`); }
    const apiDeploymentStageprod896C8101 = new apigateway.CfnStage(this, 'apiDeploymentStageprod896C8101', {
      deploymentId: apiDeployment149F1294891f10d69bae7c4d19bdee7af013a950.ref,
      restApiId: apiC8550315.ref,
      stageName: 'prod',
    });
    apiDeploymentStageprod896C8101.addDependency(apiAccount57E28b43);

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiDeploymentStageprod896C8101 == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod896C8101' to be undefined. Fixit.`); }
    const apiAnyApiPermissionawscdkapigwaliasintegapiF4df08acanybced9dda = new lambda.CfnPermission(this, 'apiANYApiPermissionawscdkapigwaliasintegapiF4DF08ACANYBCED9DDA', {
      action: 'lambda:InvokeFunction',
      functionName: handler886Cb40b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        apiC8550315.ref,
        '/',
        apiDeploymentStageprod896C8101.ref,
        '/*/',
      ].join(''),
    });

    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiCustomDomain64773C4f == null) { throw new Error(`A combination of conditions caused 'apiCustomDomain64773C4f' to be undefined. Fixit.`); }
    if (apiDeploymentStageprod896C8101 == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod896C8101' to be undefined. Fixit.`); }
    const apiCustomDomainMapawscdkapigwaliasintegapiF4df08accf365f22 = new apigateway.CfnBasePathMapping(this, 'apiCustomDomainMapawscdkapigwaliasintegapiF4DF08ACCF365F22', {
      domainName: apiCustomDomain64773C4f.ref,
      restApiId: apiC8550315.ref,
      stage: apiDeploymentStageprod896C8101.ref,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (apiC8550315 == null) { throw new Error(`A combination of conditions caused 'apiC8550315' to be undefined. Fixit.`); }
    if (apiDeploymentStageprod896C8101 == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod896C8101' to be undefined. Fixit.`); }
    const apiproxyAnyApiPermissionawscdkapigwaliasintegapiF4df08acanYproxy80933581 = new lambda.CfnPermission(this, 'apiproxyANYApiPermissionawscdkapigwaliasintegapiF4DF08ACANYproxy80933581', {
      action: 'lambda:InvokeFunction',
      functionName: handler886Cb40b.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        apiC8550315.ref,
        '/',
        apiDeploymentStageprod896C8101.ref,
        '/*/*',
      ].join(''),
    });

    // Outputs
    this.apiEndpoint9349E63c = [
      'https://',
      apiC8550315.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      apiDeploymentStageprod896C8101.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputapiEndpoint9349E63C', {
      key: 'apiEndpoint9349E63C',
      value: this.apiEndpoint9349E63c!.toString(),
    });
  }
}

