import * as cdk from 'aws-cdk-lib';
import * as appmesh from 'aws-cdk-lib/aws-appmesh';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface mesh-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class mesh-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: mesh-stackProps = {}) {
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
    const meshAcdfe68e = new appmesh.CfnMesh(this, 'meshACDFE68E', {
      meshName: 'meshstackmesh680D3CEB',
      spec: {
      },
    });

    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet1',
        },
      ],
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshgateway2A278d68e = new appmesh.CfnVirtualGateway(this, 'meshgateway2A278D68E', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1234,
              protocol: 'grpc',
            },
          },
        ],
        logging: {
          accessLog: {
            file: {
              path: '/dev/stdout',
            },
          },
        },
      },
      virtualGatewayName: 'gateway2',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshgateway7E10276f = new appmesh.CfnVirtualGateway(this, 'meshgateway7E10276F', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1233,
              protocol: 'http',
            },
          },
        ],
        logging: {
          accessLog: {
            file: {
              path: '/dev/stdout',
            },
          },
        },
      },
      virtualGatewayName: 'gateway',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshgrpcnode5De90b75 = new appmesh.CfnVirtualNode(this, 'meshgrpcnode5DE90B75', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1234,
              protocol: 'grpc',
            },
          },
        ],
        serviceDiscovery: {
          dns: {
            hostname: 'node.domain.local',
            responseType: 'ENDPOINTS',
          },
        },
      },
      virtualNodeName: 'meshstackmeshgrpcnode22C47BCC',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshgrpcrouter885C4d83 = new appmesh.CfnVirtualRouter(this, 'meshgrpcrouter885C4D83', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1234,
              protocol: 'grpc',
            },
          },
        ],
      },
      virtualRouterName: 'meshstackmeshgrpcrouter2CCBF824',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshhttpnode26144F8b = new appmesh.CfnVirtualNode(this, 'meshhttpnode26144F8B', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1233,
              protocol: 'http',
            },
          },
        ],
        serviceDiscovery: {
          dns: {
            hostname: 'node.domain.local',
            responseType: 'ENDPOINTS',
          },
        },
      },
      virtualNodeName: 'meshstackmeshhttpnodeECE697CA',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshhttprouter1Dc8881a = new appmesh.CfnVirtualRouter(this, 'meshhttprouter1DC8881A', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 1233,
              protocol: 'http',
            },
          },
        ],
      },
      virtualRouterName: 'meshstackmeshhttprouter85E0114B',
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const testnamespace01Fa2caf = new servicediscovery.CfnPrivateDnsNamespace(this, 'testnamespace01FA2CAF', {
      name: 'domain.local',
      vpc: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet934893E8 = new ec2.CfnSubnet(this, 'vpcPrivateSubnet1Subnet934893E8', {
      vpcId: vpcA2121c38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/18',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Private',
        },
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet7031C2ba = new ec2.CfnSubnet(this, 'vpcPrivateSubnet2Subnet7031C2BA', {
      vpcId: vpcA2121c38.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.192.0/18',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Private',
        },
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet2E65531e = new ec2.CfnSubnet(this, 'vpcPublicSubnet1Subnet2E65531E', {
      vpcId: vpcA2121c38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Public',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet009B674f = new ec2.CfnSubnet(this, 'vpcPublicSubnet2Subnet009B674F', {
      vpcId: vpcA2121c38.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.64.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Public',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    const vpcVpcgw7984c166 = new ec2.CfnVPCGatewayAttachment(this, 'vpcVPCGW7984C166', {
      vpcId: vpcA2121c38.ref,
      internetGatewayId: vpcIgwe57cbdca.ref,
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgrpcrouter885C4d83 == null) { throw new Error(`A combination of conditions caused 'meshgrpcrouter885C4d83' to be undefined. Fixit.`); }
    const grpcserviceF42ba24d = new appmesh.CfnVirtualService(this, 'grpcserviceF42BA24D', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        provider: {
          virtualRouter: {
            virtualRouterName: meshgrpcrouter885C4d83.attrVirtualRouterName,
          },
        },
      },
      virtualServiceName: 'service2.domain.local',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshhttprouter1Dc8881a == null) { throw new Error(`A combination of conditions caused 'meshhttprouter1Dc8881a' to be undefined. Fixit.`); }
    const httpserviceA998e5f0 = new appmesh.CfnVirtualService(this, 'httpserviceA998E5F0', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        provider: {
          virtualRouter: {
            virtualRouterName: meshhttprouter1Dc8881a.attrVirtualRouterName,
          },
        },
      },
      virtualServiceName: 'service1.domain.local',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgrpcnode5De90b75 == null) { throw new Error(`A combination of conditions caused 'meshgrpcnode5De90b75' to be undefined. Fixit.`); }
    if (meshgrpcrouter885C4d83 == null) { throw new Error(`A combination of conditions caused 'meshgrpcrouter885C4d83' to be undefined. Fixit.`); }
    const meshgrpcroutergrpcrouteC2c69c40 = new appmesh.CfnRoute(this, 'meshgrpcroutergrpcrouteC2C69C40', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            weightedTargets: [
              {
                port: 1234,
                virtualNode: meshgrpcnode5De90b75.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            port: 1234,
          },
        },
      },
      virtualRouterName: meshgrpcrouter885C4d83.attrVirtualRouterName,
      routeName: 'grpc-route',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshhttpnode26144F8b == null) { throw new Error(`A combination of conditions caused 'meshhttpnode26144F8b' to be undefined. Fixit.`); }
    if (meshhttprouter1Dc8881a == null) { throw new Error(`A combination of conditions caused 'meshhttprouter1Dc8881a' to be undefined. Fixit.`); }
    const meshhttprouterhttprouteA1ec61b9 = new appmesh.CfnRoute(this, 'meshhttprouterhttprouteA1EC61B9', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshhttpnode26144F8b.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            port: 1233,
            prefix: '/',
          },
        },
      },
      virtualRouterName: meshhttprouter1Dc8881a.attrVirtualRouterName,
      routeName: 'http-route',
    });

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation67945127 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet1RouteTableAssociation67945127', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      subnetId: vpcPrivateSubnet1Subnet934893E8.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation007E94d3 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet2RouteTableAssociation007E94D3', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      subnetId: vpcPrivateSubnet2Subnet7031C2ba.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute10708846 = new ec2.CfnRoute(this, 'vpcPublicSubnet1DefaultRoute10708846', {
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
    });
    vpcPublicSubnet1DefaultRoute10708846.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation5D3f4579 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet1RouteTableAssociation5D3F4579', {
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteA1ec0f60 = new ec2.CfnRoute(this, 'vpcPublicSubnet2DefaultRouteA1EC0F60', {
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
    });
    vpcPublicSubnet2DefaultRouteA1ec0f60.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation21F81b59 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet2RouteTableAssociation21F81B59', {
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
    });

    if (grpcserviceF42ba24d == null) { throw new Error(`A combination of conditions caused 'grpcserviceF42ba24d' to be undefined. Fixit.`); }
    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway2A278d68e == null) { throw new Error(`A combination of conditions caused 'meshgateway2A278d68e' to be undefined. Fixit.`); }
    const meshgateway2gateway2routegrpcD0da968b = new appmesh.CfnGatewayRoute(this, 'meshgateway2gateway2routegrpcD0DA968B', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: grpcserviceF42ba24d.attrVirtualServiceName,
              },
            },
          },
          match: {
            port: 1234,
          },
        },
      },
      virtualGatewayName: meshgateway2A278d68e.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway2gateway2routegrpc65A85E78',
    });

    if (httpserviceA998e5f0 == null) { throw new Error(`A combination of conditions caused 'httpserviceA998e5f0' to be undefined. Fixit.`); }
    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway7E10276f == null) { throw new Error(`A combination of conditions caused 'meshgateway7E10276f' to be undefined. Fixit.`); }
    const meshgatewaygatewayroutehttpFc878a78 = new appmesh.CfnGatewayRoute(this, 'meshgatewaygatewayroutehttpFC878A78', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: httpserviceA998e5f0.attrVirtualServiceName,
              },
            },
          },
          match: {
            port: 1233,
            prefix: '/',
          },
        },
      },
      virtualGatewayName: meshgateway7E10276f.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgatewaygatewayroutehttp4CA31BCC',
    });

    if (vpcPublicSubnet1DefaultRoute10708846 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute10708846' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipda49dcbe == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipda49dcbe' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation5D3f4579 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation5D3f4579' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway9C16659e = new ec2.CfnNatGateway(this, 'vpcPublicSubnet1NATGateway9C16659E', {
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
      allocationId: vpcPublicSubnet1Eipda49dcbe.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'mesh-stack/vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1DefaultRoute10708846);
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1RouteTableAssociation5D3f4579);

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRoute1Aa8e2e5 = new ec2.CfnRoute(this, 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteB0e07f99 = new ec2.CfnRoute(this, 'vpcPrivateSubnet2DefaultRouteB0E07F99', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
    });
  }
}

