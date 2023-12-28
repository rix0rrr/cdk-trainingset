import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface producerProps extends cdk.StackProps {
  /**
   * @default 'BLAT,BLAH'
   */
  readonly stringListParam?: string[];
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class producer extends cdk.Stack {
  public readonly exportManualExport;
  public readonly exportsOutputFnGetAttendpointE7b9679bDnsEntries62080A34;
  public readonly exportsOutputRefstringListParam77B646d6;

  public constructor(scope: cdk.App, id: string, props: producerProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      stringListParam: props.stringListParam ?? BLAT,BLAH,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip9b3743b1 = new ec2.CfnEIP(this, 'vpcPublicSubnet2EIP9B3743B1', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PublicSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const endpointSecurityGroup895E596e = new ec2.CfnSecurityGroup(this, 'endpointSecurityGroup895E596E', {
      groupDescription: 'producer/endpoint/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: vpcA2121c38.attrCidrBlock,
          description: [
            'from ',
            vpcA2121c38.attrCidrBlock,
            ':443',
          ].join(''),
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PrivateSubnet1',
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
          value: 'producer/vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PrivateSubnet2',
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
          value: 'producer/vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PublicSubnet1',
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
          value: 'producer/vpc/PublicSubnet1',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      vpcId: vpcA2121c38.ref,
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PublicSubnet2',
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
          value: 'producer/vpc/PublicSubnet2',
        },
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    const vpcVpcgw7984c166 = new ec2.CfnVPCGatewayAttachment(this, 'vpcVPCGW7984C166', {
      vpcId: vpcA2121c38.ref,
      internetGatewayId: vpcIgwe57cbdca.ref,
    });

    if (endpointSecurityGroup895E596e == null) { throw new Error(`A combination of conditions caused 'endpointSecurityGroup895E596e' to be undefined. Fixit.`); }
    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const endpointE7b9679b = new ec2.CfnVPCEndpoint(this, 'endpointE7B9679B', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.secretsmanager',
      ].join(''),
      vpcId: vpcA2121c38.ref,
      privateDnsEnabled: true,
      securityGroupIds: [
        endpointSecurityGroup895E596e.attrGroupId,
      ],
      subnetIds: [
        vpcPrivateSubnet1Subnet934893E8.ref,
        vpcPrivateSubnet2Subnet7031C2ba.ref,
      ],
      vpcEndpointType: 'Interface',
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
          value: 'producer/vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1DefaultRoute10708846);
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1RouteTableAssociation5D3f4579);

    if (vpcPublicSubnet2DefaultRouteA1ec0f60 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteA1ec0f60' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip9b3743b1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip9b3743b1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation21F81b59 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation21F81b59' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9B8ae11a = new ec2.CfnNatGateway(this, 'vpcPublicSubnet2NATGateway9B8AE11A', {
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
      allocationId: vpcPublicSubnet2Eip9b3743b1.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'producer/vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2DefaultRouteA1ec0f60);
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2RouteTableAssociation21F81b59);

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRoute1Aa8e2e5 = new ec2.CfnRoute(this, 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9B8ae11a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9B8ae11a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteB0e07f99 = new ec2.CfnRoute(this, 'vpcPrivateSubnet2DefaultRouteB0E07F99', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9B8ae11a.ref,
    });

    // Outputs
    this.exportManualExport = 'string1||string2';
    new cdk.CfnOutput(this, 'CfnOutputExportManualExport', {
      key: 'ExportManualExport',
      exportName: 'ManualExport',
      value: this.exportManualExport!.toString(),
    });
    this.exportsOutputFnGetAttendpointE7b9679bDnsEntries62080A34 = [
      endpointE7b9679b.attrDnsEntries,
    ].join('||');
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttendpointE7B9679BDnsEntries62080A34', {
      key: 'ExportsOutputFnGetAttendpointE7B9679BDnsEntries62080A34',
      exportName: 'producer:ExportsOutputFnGetAttendpointE7B9679BDnsEntries62080A34',
      value: this.exportsOutputFnGetAttendpointE7b9679bDnsEntries62080A34!.toString(),
    });
    this.exportsOutputRefstringListParam77B646d6 = [
      props.stringListParam!,
    ].join('||');
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefstringListParam77B646D6', {
      key: 'ExportsOutputRefstringListParam77B646D6',
      exportName: 'producer:ExportsOutputRefstringListParam77B646D6',
      value: this.exportsOutputRefstringListParam77B646d6!.toString(),
    });
  }
}

