import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface IntegApigwDomainNameMappingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegApigwDomainNameMapping extends cdk.Stack {
  public readonly integApi1IntegApi201Endpoint361E7c32;
  public readonly integApi2IntegApi202Endpoint18343E9b;
  public readonly exportsOutputRefIntegDomain624Df323d17b7540;
  public readonly exportsOutputRefInteg2Domain70Ccea688a08551f;

  public constructor(scope: cdk.App, id: string, props: IntegApigwDomainNameMappingProps = {}) {
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
    const integ2Domain70Ccea68 = new apigateway.CfnDomainName(this, 'Integ2Domain70CCEA68', {
      domainName: 'another-*.example.com',
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      regionalCertificateArn: 'arn:aws:acm:test-region:12345678:certificate/86468209-a272-595d-b831-0efb6421265z',
      securityPolicy: 'TLS_1_2',
    });

    const integ3DomainE531fbab = new apigateway.CfnDomainName(this, 'Integ3DomainE531FBAB', {
      domainName: 'yet-another-*.example.com',
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      regionalCertificateArn: 'arn:aws:acm:test-region:12345678:certificate/86468209-a272-595d-b831-0efb6421265z',
      securityPolicy: 'TLS_1_2',
    });

    const integApi1IntegApi2018Fad77e9 = new apigateway.CfnRestApi(this, 'IntegApi1IntegApi2018FAD77E9', {
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      name: 'IntegApi201',
    });

    const integApi2IntegApi202F39817f4 = new apigateway.CfnRestApi(this, 'IntegApi2IntegApi202F39817F4', {
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      name: 'IntegApi202',
    });

    const integDomain624Df323 = new apigateway.CfnDomainName(this, 'IntegDomain624DF323', {
      domainName: '*.example.com',
      endpointConfiguration: {
        types: [
          'REGIONAL',
        ],
      },
      regionalCertificateArn: 'arn:aws:acm:test-region:12345678:certificate/86468209-a272-595d-b831-0efb6421265z',
      securityPolicy: 'TLS_1_2',
    });

    if (integ2Domain70Ccea68 == null) { throw new Error(`A combination of conditions caused 'integ2Domain70Ccea68' to be undefined. Fixit.`); }
    const integ2DomainRecord = new route53.CfnRecordSet(this, 'Integ2DomainRecord', {
      name: 'another-*.example.com',
      type: 'A',
      aliasTarget: {
        dnsName: integ2Domain70Ccea68.attrRegionalDomainName,
        hostedZoneId: integ2Domain70Ccea68.attrRegionalHostedZoneId,
      },
      hostedZoneId: 'Z23ABC4XYZL05B',
    });

    if (integ3DomainE531fbab == null) { throw new Error(`A combination of conditions caused 'integ3DomainE531fbab' to be undefined. Fixit.`); }
    const integ3DomainRecord = new route53.CfnRecordSet(this, 'Integ3DomainRecord', {
      name: 'yet-another-*.example.com',
      type: 'A',
      aliasTarget: {
        dnsName: integ3DomainE531fbab.attrRegionalDomainName,
        hostedZoneId: integ3DomainE531fbab.attrRegionalHostedZoneId,
      },
      hostedZoneId: 'Z23ABC4XYZL05B',
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    const integApi1IntegApi201Get725fd00e = new apigateway.CfnMethod(this, 'IntegApi1IntegApi201GET725FD00E', {
      httpMethod: 'GET',
      resourceId: integApi1IntegApi2018Fad77e9.attrRootResourceId,
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      authorizationType: 'NONE',
      integration: {
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, world\"}',
            },
            statusCode: '201',
          },
        ],
        requestTemplates: {
          'application/json': '{ statusCode: 201 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '201',
        },
      ],
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    const integApi1IntegApi201itemsE127eeb1 = new apigateway.CfnResource(this, 'IntegApi1IntegApi201itemsE127EEB1', {
      parentId: integApi1IntegApi2018Fad77e9.attrRootResourceId,
      pathPart: 'items',
      restApiId: integApi1IntegApi2018Fad77e9.ref,
    });

    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    const integApi2IntegApi202Geta6a9e1fd = new apigateway.CfnMethod(this, 'IntegApi2IntegApi202GETA6A9E1FD', {
      httpMethod: 'GET',
      resourceId: integApi2IntegApi202F39817f4.attrRootResourceId,
      restApiId: integApi2IntegApi202F39817f4.ref,
      authorizationType: 'NONE',
      integration: {
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, world\"}',
            },
            statusCode: '202',
          },
        ],
        requestTemplates: {
          'application/json': '{ statusCode: 202 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '202',
        },
      ],
    });

    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    const integApi2IntegApi202items6625F7ba = new apigateway.CfnResource(this, 'IntegApi2IntegApi202items6625F7BA', {
      parentId: integApi2IntegApi202F39817f4.attrRootResourceId,
      pathPart: 'items',
      restApiId: integApi2IntegApi202F39817f4.ref,
    });

    if (integDomain624Df323 == null) { throw new Error(`A combination of conditions caused 'integDomain624Df323' to be undefined. Fixit.`); }
    const integDomainRecord = new route53.CfnRecordSet(this, 'IntegDomainRecord', {
      name: '*.example.com',
      type: 'A',
      aliasTarget: {
        dnsName: integDomain624Df323.attrRegionalDomainName,
        hostedZoneId: integDomain624Df323.attrRegionalHostedZoneId,
      },
      hostedZoneId: 'Z23ABC4XYZL05B',
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201itemsE127eeb1 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201itemsE127eeb1' to be undefined. Fixit.`); }
    const integApi1IntegApi201itemsGet28ed9c03 = new apigateway.CfnMethod(this, 'IntegApi1IntegApi201itemsGET28ED9C03', {
      httpMethod: 'GET',
      resourceId: integApi1IntegApi201itemsE127eeb1.ref,
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      authorizationType: 'NONE',
      integration: {
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, world\"}',
            },
            statusCode: '201',
          },
        ],
        requestTemplates: {
          'application/json': '{ statusCode: 201 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '201',
        },
      ],
    });

    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    if (integApi2IntegApi202items6625F7ba == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202items6625F7ba' to be undefined. Fixit.`); }
    const integApi2IntegApi202itemsGet3c1b2802 = new apigateway.CfnMethod(this, 'IntegApi2IntegApi202itemsGET3C1B2802', {
      httpMethod: 'GET',
      resourceId: integApi2IntegApi202items6625F7ba.ref,
      restApiId: integApi2IntegApi202F39817f4.ref,
      authorizationType: 'NONE',
      integration: {
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '{\"message\":\"Hello, world\"}',
            },
            statusCode: '202',
          },
        ],
        requestTemplates: {
          'application/json': '{ statusCode: 202 }',
        },
        type: 'MOCK',
      },
      methodResponses: [
        {
          statusCode: '202',
        },
      ],
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201Get725fd00e == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201Get725fd00e' to be undefined. Fixit.`); }
    if (integApi1IntegApi201itemsE127eeb1 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201itemsE127eeb1' to be undefined. Fixit.`); }
    if (integApi1IntegApi201itemsGet28ed9c03 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201itemsGet28ed9c03' to be undefined. Fixit.`); }
    const integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999 = new apigateway.CfnDeployment(this, 'IntegApi1IntegApi201DeploymentF1012E35e3d8f8929b682e11ef294dd954cc0999', {
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      description: 'Automatically created by the RestApi construct',
    });
    integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999.addDependency(integApi1IntegApi201Get725fd00e);
    integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999.addDependency(integApi1IntegApi201itemsGet28ed9c03);
    integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999.addDependency(integApi1IntegApi201itemsE127eeb1);

    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    if (integApi2IntegApi202Geta6a9e1fd == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202Geta6a9e1fd' to be undefined. Fixit.`); }
    if (integApi2IntegApi202items6625F7ba == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202items6625F7ba' to be undefined. Fixit.`); }
    if (integApi2IntegApi202itemsGet3c1b2802 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202itemsGet3c1b2802' to be undefined. Fixit.`); }
    const integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737 = new apigateway.CfnDeployment(this, 'IntegApi2IntegApi202Deployment16A1A56Af8137e7222475e5a9ac210201aa96737', {
      restApiId: integApi2IntegApi202F39817f4.ref,
      description: 'Automatically created by the RestApi construct',
    });
    integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737.addDependency(integApi2IntegApi202Geta6a9e1fd);
    integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737.addDependency(integApi2IntegApi202itemsGet3c1b2802);
    integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737.addDependency(integApi2IntegApi202items6625F7ba);

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999' to be undefined. Fixit.`); }
    const integApi1IntegApi201DeploymentStageprod42C7f5ce = new apigateway.CfnStage(this, 'IntegApi1IntegApi201DeploymentStageprod42C7F5CE', {
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      deploymentId: integApi1IntegApi201DeploymentF1012e35e3d8f8929b682e11ef294dd954cc0999.ref,
      stageName: 'prod',
    });

    if (integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737' to be undefined. Fixit.`); }
    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    const integApi2IntegApi202DeploymentStageprod9500285C = new apigateway.CfnStage(this, 'IntegApi2IntegApi202DeploymentStageprod9500285C', {
      restApiId: integApi2IntegApi202F39817f4.ref,
      deploymentId: integApi2IntegApi202Deployment16A1a56Af8137e7222475e5a9ac210201aa96737.ref,
      stageName: 'prod',
    });

    if (integ2Domain70Ccea68 == null) { throw new Error(`A combination of conditions caused 'integ2Domain70Ccea68' to be undefined. Fixit.`); }
    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentStageprod42C7f5ce == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentStageprod42C7f5ce' to be undefined. Fixit.`); }
    const integ2DomainMapordersintegapigwdomainnamemappingIntegApi1IntegApi201817D4f3e604ccbd9 = new apigateway.CfnBasePathMapping(this, 'Integ2DomainMapordersintegapigwdomainnamemappingIntegApi1IntegApi201817D4F3E604CCBD9', {
      domainName: integ2Domain70Ccea68.ref,
      basePath: 'orders',
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      stage: integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
    });

    if (integ2Domain70Ccea68 == null) { throw new Error(`A combination of conditions caused 'integ2Domain70Ccea68' to be undefined. Fixit.`); }
    if (integApi2IntegApi202DeploymentStageprod9500285C == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202DeploymentStageprod9500285C' to be undefined. Fixit.`); }
    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    const integ2DomainMapordersv2integapigwdomainnamemappingIntegApi2IntegApi202DeploymentStageprodDa7fc3fece78c5ad = new apigatewayv2.CfnApiMapping(this, 'Integ2DomainMapordersv2integapigwdomainnamemappingIntegApi2IntegApi202DeploymentStageprodDA7FC3FECE78C5AD', {
      apiId: integApi2IntegApi202F39817f4.ref,
      domainName: integ2Domain70Ccea68.ref,
      stage: integApi2IntegApi202DeploymentStageprod9500285C.ref,
      apiMappingKey: 'orders/v2',
    });

    if (integ3DomainE531fbab == null) { throw new Error(`A combination of conditions caused 'integ3DomainE531fbab' to be undefined. Fixit.`); }
    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentStageprod42C7f5ce == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentStageprod42C7f5ce' to be undefined. Fixit.`); }
    const integ3DomainMapintegapigwdomainnamemappingIntegApi1IntegApi201817D4f3ec2a223f3 = new apigateway.CfnBasePathMapping(this, 'Integ3DomainMapintegapigwdomainnamemappingIntegApi1IntegApi201817D4F3EC2A223F3', {
      domainName: integ3DomainE531fbab.ref,
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      stage: integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
    });

    if (integ3DomainE531fbab == null) { throw new Error(`A combination of conditions caused 'integ3DomainE531fbab' to be undefined. Fixit.`); }
    if (integApi2IntegApi202DeploymentStageprod9500285C == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202DeploymentStageprod9500285C' to be undefined. Fixit.`); }
    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    const integ3DomainMapv2integapigwdomainnamemappingIntegApi2IntegApi20289438F2bd839069d = new apigateway.CfnBasePathMapping(this, 'Integ3DomainMapv2integapigwdomainnamemappingIntegApi2IntegApi20289438F2BD839069D', {
      domainName: integ3DomainE531fbab.ref,
      basePath: 'v2',
      restApiId: integApi2IntegApi202F39817f4.ref,
      stage: integApi2IntegApi202DeploymentStageprod9500285C.ref,
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentStageprod42C7f5ce == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentStageprod42C7f5ce' to be undefined. Fixit.`); }
    if (integDomain624Df323 == null) { throw new Error(`A combination of conditions caused 'integDomain624Df323' to be undefined. Fixit.`); }
    const integDomainMapintegapigwdomainnamemappingIntegApi1IntegApi201817D4f3e86701596 = new apigateway.CfnBasePathMapping(this, 'IntegDomainMapintegapigwdomainnamemappingIntegApi1IntegApi201817D4F3E86701596', {
      domainName: integDomain624Df323.ref,
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      stage: integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentStageprod42C7f5ce == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentStageprod42C7f5ce' to be undefined. Fixit.`); }
    if (integDomain624Df323 == null) { throw new Error(`A combination of conditions caused 'integDomain624Df323' to be undefined. Fixit.`); }
    const integDomainMapordersintegapigwdomainnamemappingIntegApi1IntegApi201817D4f3e1f08dbee = new apigateway.CfnBasePathMapping(this, 'IntegDomainMapordersintegapigwdomainnamemappingIntegApi1IntegApi201817D4F3E1F08DBEE', {
      domainName: integDomain624Df323.ref,
      basePath: 'orders',
      restApiId: integApi1IntegApi2018Fad77e9.ref,
      stage: integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
    });

    if (integApi1IntegApi2018Fad77e9 == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi2018Fad77e9' to be undefined. Fixit.`); }
    if (integApi1IntegApi201DeploymentStageprod42C7f5ce == null) { throw new Error(`A combination of conditions caused 'integApi1IntegApi201DeploymentStageprod42C7f5ce' to be undefined. Fixit.`); }
    if (integDomain624Df323 == null) { throw new Error(`A combination of conditions caused 'integDomain624Df323' to be undefined. Fixit.`); }
    const integDomainMapordersv1integapigwdomainnamemappingIntegApi1IntegApi201DeploymentStageprod556D59765598da9a = new apigatewayv2.CfnApiMapping(this, 'IntegDomainMapordersv1integapigwdomainnamemappingIntegApi1IntegApi201DeploymentStageprod556D59765598DA9A', {
      apiId: integApi1IntegApi2018Fad77e9.ref,
      domainName: integDomain624Df323.ref,
      stage: integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
      apiMappingKey: 'orders/v1',
    });

    if (integApi2IntegApi202DeploymentStageprod9500285C == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202DeploymentStageprod9500285C' to be undefined. Fixit.`); }
    if (integApi2IntegApi202F39817f4 == null) { throw new Error(`A combination of conditions caused 'integApi2IntegApi202F39817f4' to be undefined. Fixit.`); }
    if (integDomain624Df323 == null) { throw new Error(`A combination of conditions caused 'integDomain624Df323' to be undefined. Fixit.`); }
    const integDomainMapordersv2integapigwdomainnamemappingIntegApi2IntegApi202DeploymentStageprodDa7fc3fe3c3cdd8f = new apigatewayv2.CfnApiMapping(this, 'IntegDomainMapordersv2integapigwdomainnamemappingIntegApi2IntegApi202DeploymentStageprodDA7FC3FE3C3CDD8F', {
      apiId: integApi2IntegApi202F39817f4.ref,
      domainName: integDomain624Df323.ref,
      stage: integApi2IntegApi202DeploymentStageprod9500285C.ref,
      apiMappingKey: 'orders/v2',
    });

    // Outputs
    this.integApi1IntegApi201Endpoint361E7c32 = [
      'https://',
      integApi1IntegApi2018Fad77e9.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      integApi1IntegApi201DeploymentStageprod42C7f5ce.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputIntegApi1IntegApi201Endpoint361E7C32', {
      key: 'IntegApi1IntegApi201Endpoint361E7C32',
      value: this.integApi1IntegApi201Endpoint361E7c32!.toString(),
    });
    this.integApi2IntegApi202Endpoint18343E9b = [
      'https://',
      integApi2IntegApi202F39817f4.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      integApi2IntegApi202DeploymentStageprod9500285C.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputIntegApi2IntegApi202Endpoint18343E9B', {
      key: 'IntegApi2IntegApi202Endpoint18343E9B',
      value: this.integApi2IntegApi202Endpoint18343E9b!.toString(),
    });
    this.exportsOutputRefIntegDomain624Df323d17b7540 = integDomain624Df323.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefIntegDomain624DF323D17B7540', {
      key: 'ExportsOutputRefIntegDomain624DF323D17B7540',
      exportName: 'integ-apigw-domain-name-mapping:ExportsOutputRefIntegDomain624DF323D17B7540',
      value: this.exportsOutputRefIntegDomain624Df323d17b7540!.toString(),
    });
    this.exportsOutputRefInteg2Domain70Ccea688a08551f = integ2Domain70Ccea68.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefInteg2Domain70CCEA688A08551F', {
      key: 'ExportsOutputRefInteg2Domain70CCEA688A08551F',
      exportName: 'integ-apigw-domain-name-mapping:ExportsOutputRefInteg2Domain70CCEA688A08551F',
      value: this.exportsOutputRefInteg2Domain70Ccea688a08551f!.toString(),
    });
  }
}

