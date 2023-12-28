import * as cdk from 'aws-cdk-lib';
import * as appmesh from 'aws-cdk-lib/aws-appmesh';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface MeshStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class MeshStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: MeshStackProps = {}) {
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

    const meshwithpreferenceCc9682c9 = new appmesh.CfnMesh(this, 'meshwithpreferenceCC9682C9', {
      meshName: 'meshstackmeshwithpreference13C624E1',
      spec: {
        serviceDiscovery: {
          ipPreference: 'IPv4_ONLY',
        },
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
    const gateway2Bce5c5e0 = new appmesh.CfnVirtualGateway(this, 'gateway2BCE5C5E0', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 2,
              intervalMillis: 10000,
              path: '/',
              port: 443,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 443,
              protocol: 'http',
            },
            tls: {
              certificate: {
                file: {
                  certificateChain: 'path/to/certChain',
                  privateKey: 'path/to/privateKey',
                },
              },
              mode: 'STRICT',
            },
          },
        ],
      },
      virtualGatewayName: 'meshstackgateway2BEC62D7C',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const gateway3F9f16554 = new appmesh.CfnVirtualGateway(this, 'gateway3F9F16554', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        backendDefaults: {
          clientPolicy: {
            tls: {
              certificate: {
                sds: {
                  secretName: 'secret_validation',
                },
              },
              validation: {
                trust: {
                  file: {
                    certificateChain: 'path/to/certChain',
                  },
                },
              },
            },
          },
        },
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 2,
              intervalMillis: 10000,
              path: '/',
              port: 443,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 443,
              protocol: 'http',
            },
            tls: {
              certificate: {
                sds: {
                  secretName: 'secret_certificate',
                },
              },
              mode: 'STRICT',
              validation: {
                trust: {
                  file: {
                    certificateChain: 'path/to/certChain',
                  },
                },
              },
            },
          },
        ],
      },
      virtualGatewayName: 'meshstackgateway34EC5ED00',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshgateway1B02387e8 = new appmesh.CfnVirtualGateway(this, 'meshgateway1B02387E8', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 8080,
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
      virtualGatewayName: 'gateway1',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshnode2092Ba426 = new appmesh.CfnVirtualNode(this, 'meshnode2092BA426', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        backendDefaults: {
          clientPolicy: {
            tls: {
              validation: {
                trust: {
                  file: {
                    certificateChain: 'path/to/cert',
                  },
                },
              },
            },
          },
        },
        backends: [
          {
            virtualService: {
              virtualServiceName: 'service3.domain.local',
            },
          },
        ],
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 3,
              intervalMillis: 5000,
              path: '/check-path2',
              port: 8080,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 8080,
              protocol: 'http',
            },
          },
        ],
        serviceDiscovery: {
          dns: {
            hostname: 'node2.domain.local',
          },
        },
      },
      virtualNodeName: 'meshstackmeshnode2F1F28441',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshnode3D2a19cf2 = new appmesh.CfnVirtualNode(this, 'meshnode3D2A19CF2', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        backendDefaults: {
          clientPolicy: {
            tls: {
              validation: {
                trust: {
                  file: {
                    certificateChain: 'path-to-certificate',
                  },
                },
              },
            },
          },
        },
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 3,
              intervalMillis: 5000,
              path: '/check-path3',
              port: 8080,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 8080,
              protocol: 'http',
            },
          },
        ],
        logging: {
          accessLog: {
            file: {
              format: {
                text: 'test_pattern',
              },
              path: '/dev/stdout',
            },
          },
        },
        serviceDiscovery: {
          dns: {
            hostname: 'node3.domain.local',
          },
        },
      },
      virtualNodeName: 'meshstackmeshnode3C5835BCB',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshnode4Ae87f692 = new appmesh.CfnVirtualNode(this, 'meshnode4AE87F692', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        backendDefaults: {
          clientPolicy: {
            tls: {
              certificate: {
                file: {
                  certificateChain: 'path/to/certChain',
                  privateKey: 'path/to/privateKey',
                },
              },
              validation: {
                subjectAlternativeNames: {
                  match: {
                    exact: [
                      'mymesh.local',
                    ],
                  },
                },
                trust: {
                  file: {
                    certificateChain: 'path-to-certificate',
                  },
                },
              },
            },
          },
        },
        backends: [
          {
            virtualService: {
              virtualServiceName: 'service4.domain.local',
            },
          },
        ],
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 3,
              intervalMillis: 5000,
              path: '/check-path3',
              port: 8080,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 8080,
              protocol: 'http',
            },
            tls: {
              certificate: {
                sds: {
                  secretName: 'spiffe://domain.local/backend-service',
                },
              },
              mode: 'STRICT',
              validation: {
                subjectAlternativeNames: {
                  match: {
                    exact: [
                      'client.domain.local',
                    ],
                  },
                },
                trust: {
                  sds: {
                    secretName: 'spiffe://domain.local',
                  },
                },
              },
            },
          },
        ],
        logging: {
          accessLog: {
            file: {
              format: {
                json: [
                  {
                    key: 'testKey1',
                    value: 'testValue1',
                  },
                  {
                    key: 'testKey2',
                    value: 'testValue2',
                  },
                ],
              },
              path: '/dev/stdout',
            },
          },
        },
        serviceDiscovery: {
          dns: {
            hostname: 'node4.domain.local',
            responseType: 'ENDPOINTS',
          },
        },
      },
      virtualNodeName: 'meshstackmeshnode404B014E7',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshnode726C787d = new appmesh.CfnVirtualNode(this, 'meshnode726C787D', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        backends: [
          {
            virtualService: {
              virtualServiceName: 'service1.domain.local',
            },
          },
          {
            virtualService: {
              virtualServiceName: 'service2.domain.local',
            },
          },
        ],
        listeners: [
          {
            healthCheck: {
              healthyThreshold: 3,
              intervalMillis: 5000,
              path: '/check-path',
              port: 8080,
              protocol: 'http',
              timeoutMillis: 2000,
              unhealthyThreshold: 2,
            },
            portMapping: {
              port: 8080,
              protocol: 'http',
            },
          },
        ],
        serviceDiscovery: {
          dns: {
            hostname: 'node1.domain.local',
            ipPreference: 'IPv4_ONLY',
          },
        },
      },
      virtualNodeName: 'meshstackmeshnode61AD3D23',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const meshrouter81B8087e = new appmesh.CfnVirtualRouter(this, 'meshrouter81B8087E', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        listeners: [
          {
            portMapping: {
              port: 8080,
              protocol: 'http',
            },
          },
        ],
      },
      virtualRouterName: 'meshstackmeshrouter2FE6E358',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const service27C65cf7d = new appmesh.CfnVirtualService(this, 'service27C65CF7D', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
      },
      virtualServiceName: 'service2.domain.local',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const service3859Eb104 = new appmesh.CfnVirtualService(this, 'service3859EB104', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
      },
      virtualServiceName: 'service3.domain.local',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    const service4983B61ee = new appmesh.CfnVirtualService(this, 'service4983B61EE', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
      },
      virtualServiceName: 'service4.domain.local',
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
    if (meshnode726C787d == null) { throw new Error(`A combination of conditions caused 'meshnode726C787d' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute118Bac45e = new appmesh.CfnRoute(this, 'meshrouterroute118BAC45E', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode726C787d.attrVirtualNodeName,
                weight: 50,
              },
            ],
          },
          match: {
            prefix: '/',
          },
          timeout: {
            idle: {
              unit: 'ms',
              value: 10000,
            },
            perRequest: {
              unit: 'ms',
              value: 10000,
            },
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-1',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode2092Ba426 == null) { throw new Error(`A combination of conditions caused 'meshnode2092Ba426' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute2486D9def = new appmesh.CfnRoute(this, 'meshrouterroute2486D9DEF', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode2092Ba426.attrVirtualNodeName,
                weight: 30,
              },
            ],
          },
          match: {
            prefix: '/path2',
          },
          timeout: {
            idle: {
              unit: 'ms',
              value: 11000,
            },
            perRequest: {
              unit: 'ms',
              value: 11000,
            },
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-2',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode3D2a19cf2 == null) { throw new Error(`A combination of conditions caused 'meshnode3D2a19cf2' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute3Bd0fa22f = new appmesh.CfnRoute(this, 'meshrouterroute3BD0FA22F', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        tcpRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode3D2a19cf2.attrVirtualNodeName,
                weight: 20,
              },
            ],
          },
          timeout: {
            idle: {
              unit: 'ms',
              value: 12000,
            },
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-3',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode4Ae87f692 == null) { throw new Error(`A combination of conditions caused 'meshnode4Ae87f692' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute417D3f5b5 = new appmesh.CfnRoute(this, 'meshrouterroute417D3F5B5', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode4Ae87f692.attrVirtualNodeName,
                weight: 20,
              },
            ],
          },
          match: {
            serviceName: 'test',
          },
          timeout: {
            idle: {
              unit: 'ms',
              value: 12000,
            },
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-4',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode2092Ba426 == null) { throw new Error(`A combination of conditions caused 'meshnode2092Ba426' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute53F46b0fe = new appmesh.CfnRoute(this, 'meshrouterroute53F46B0FE', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode2092Ba426.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            prefix: '/',
          },
        },
        priority: 10,
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-5',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode2092Ba426 == null) { throw new Error(`A combination of conditions caused 'meshnode2092Ba426' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute699804Ae1 = new appmesh.CfnRoute(this, 'meshrouterroute699804AE1', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode2092Ba426.attrVirtualNodeName,
                weight: 30,
              },
            ],
          },
          match: {
            path: {
              regex: 'regex',
            },
            queryParameters: [
              {
                match: {
                  exact: 'value',
                },
                name: 'query-field',
              },
            ],
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-6',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode4Ae87f692 == null) { throw new Error(`A combination of conditions caused 'meshnode4Ae87f692' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroute76C21e6e7 = new appmesh.CfnRoute(this, 'meshrouterroute76C21E6E7', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode4Ae87f692.attrVirtualNodeName,
                weight: 20,
              },
            ],
          },
          match: {
            metadata: [
              {
                invert: false,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
            ],
            methodName: 'test-method',
            serviceName: 'test-service',
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-7',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode3D2a19cf2 == null) { throw new Error(`A combination of conditions caused 'meshnode3D2a19cf2' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroutegrpcretry9Beb798a = new appmesh.CfnRoute(this, 'meshrouterroutegrpcretry9BEB798A', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode3D2a19cf2.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            serviceName: 'servicename',
          },
          retryPolicy: {
            grpcRetryEvents: [
              'deadline-exceeded',
            ],
            httpRetryEvents: [
              'client-error',
            ],
            maxRetries: 5,
            perRetryTimeout: {
              unit: 'ms',
              value: 1000,
            },
            tcpRetryEvents: [
              'connection-error',
            ],
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-grpc-retry',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode3D2a19cf2 == null) { throw new Error(`A combination of conditions caused 'meshnode3D2a19cf2' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroutehttp2retryCc41345f = new appmesh.CfnRoute(this, 'meshrouterroutehttp2retryCC41345F', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode3D2a19cf2.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            prefix: '/',
          },
          retryPolicy: {
            httpRetryEvents: [
              'client-error',
            ],
            maxRetries: 5,
            perRetryTimeout: {
              unit: 'ms',
              value: 1000,
            },
            tcpRetryEvents: [
              'connection-error',
            ],
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-http2-retry',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshnode3D2a19cf2 == null) { throw new Error(`A combination of conditions caused 'meshnode3D2a19cf2' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const meshrouterroutematchingAcc12f04 = new appmesh.CfnRoute(this, 'meshrouterroutematchingACC12F04', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            weightedTargets: [
              {
                virtualNode: meshnode3D2a19cf2.attrVirtualNodeName,
                weight: 1,
              },
            ],
          },
          match: {
            headers: [
              {
                invert: false,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  prefix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  suffix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  regex: 'application/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  prefix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  suffix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  regex: 'application/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Content-Type',
              },
            ],
            method: 'POST',
            prefix: '/',
            scheme: 'https',
          },
        },
      },
      virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
      routeName: 'route-matching',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshrouter81B8087e == null) { throw new Error(`A combination of conditions caused 'meshrouter81B8087e' to be undefined. Fixit.`); }
    const service6D174f83 = new appmesh.CfnVirtualService(this, 'service6D174F83', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        provider: {
          virtualRouter: {
            virtualRouterName: meshrouter81B8087e.attrVirtualRouterName,
          },
        },
      },
      virtualServiceName: 'service1.domain.local',
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

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routegrpc2Fac1ff36 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routegrpc2FAC1FF36', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            rewrite: {
              hostname: {
                defaultTargetHostname: 'DISABLED',
              },
            },
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            hostname: {
              exact: 'example.com',
            },
            metadata: [
              {
                invert: false,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  exact: 'text/html',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  prefix: 'application/',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  prefix: 'text/',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  suffix: '/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  suffix: '/json+foobar',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  regex: 'application/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  regex: 'text/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Max-Forward',
              },
              {
                invert: true,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Max-Forward',
              },
            ],
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routegrpc2AE8379FD',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routegrpc76486062 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routegrpc76486062', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        grpcRoute: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            serviceName: service6D174f83.attrVirtualServiceName,
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routegrpcCD4D891D',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routehttp2225001508 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routehttp2225001508', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            rewrite: {
              path: {
                exact: '/rewrittenpath',
              },
            },
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            path: {
              exact: '/exact',
            },
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routehttp22BD49AE9D',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routehttp2376Eb99d6 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routehttp2376EB99D6', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            path: {
              regex: 'regex',
            },
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routehttp23E44F5774',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routehttp2B672d43f = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routehttp2B672D43F', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            rewrite: {
              hostname: {
                defaultTargetHostname: 'ENABLED',
              },
              prefix: {
                defaultPrefix: 'DISABLED',
              },
            },
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            headers: [
              {
                invert: false,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  prefix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  suffix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  regex: 'application/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: false,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  exact: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  prefix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  suffix: 'application/json',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  regex: 'application/.*',
                },
                name: 'Content-Type',
              },
              {
                invert: true,
                match: {
                  range: {
                    end: 5,
                    start: 1,
                  },
                },
                name: 'Content-Type',
              },
            ],
            hostname: {
              exact: 'example.com',
            },
            method: 'POST',
            port: 8080,
            prefix: '/',
            queryParameters: [
              {
                match: {
                  exact: 'value',
                },
                name: 'query-field',
              },
            ],
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routehttp27F17263B',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routehttp2Fd69c306 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routehttp2FD69C306', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        http2Route: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            prefix: '/',
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routehttp255781963',
    });

    if (meshAcdfe68e == null) { throw new Error(`A combination of conditions caused 'meshAcdfe68e' to be undefined. Fixit.`); }
    if (meshgateway1B02387e8 == null) { throw new Error(`A combination of conditions caused 'meshgateway1B02387e8' to be undefined. Fixit.`); }
    if (service6D174f83 == null) { throw new Error(`A combination of conditions caused 'service6D174f83' to be undefined. Fixit.`); }
    const meshgateway1gateway1routehttpE8d6f433 = new appmesh.CfnGatewayRoute(this, 'meshgateway1gateway1routehttpE8D6F433', {
      meshName: meshAcdfe68e.attrMeshName,
      spec: {
        httpRoute: {
          action: {
            target: {
              virtualService: {
                virtualServiceName: service6D174f83.attrVirtualServiceName,
              },
            },
          },
          match: {
            prefix: '/',
          },
        },
      },
      virtualGatewayName: meshgateway1B02387e8.attrVirtualGatewayName,
      gatewayRouteName: 'meshstackmeshgateway1gateway1routehttpBA921D42',
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

