import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

export interface aws-cdk-rds-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-rds-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-rds-integProps = {}) {
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
    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const serverlessDatabaseSecurityGroup1E143fbb = new ec2.CfnSecurityGroup(this, 'ServerlessDatabaseSecurityGroup1E143FBB', {
      groupDescription: 'RDS security group',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01 = new ec2.CfnSecurityGroup(this, 'ServerlessDatabaseWithoutCopyTagsSecurityGroup9C8F4A01', {
      groupDescription: 'RDS security group',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-rds-integ/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2SubnetCfcdaa7a = new ec2.CfnSubnet(this, 'VPCPrivateSubnet2SubnetCFCDAA7A', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-rds-integ/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const subnetGroup = new rds.CfnDBSubnetGroup(this, 'SubnetGroup', {
      dbSubnetGroupDescription: 'My Subnet Group',
      subnetIds: [
        vpcPublicSubnet1SubnetB4246d30.ref,
        vpcPublicSubnet2Subnet74179F39.ref,
      ],
      dbSubnetGroupName: 'mynotlowercasesubnetgroupname',
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation347902D1 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet1RouteTableAssociation347902D1', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation0C73d413 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet2RouteTableAssociation0C73D413', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      subnetId: vpcPrivateSubnet2SubnetCfcdaa7a.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute91Cef279 = new ec2.CfnRoute(this, 'VPCPublicSubnet1DefaultRoute91CEF279', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet1DefaultRoute91Cef279.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation0B0896dc = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet1RouteTableAssociation0B0896DC', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteB7481bba = new ec2.CfnRoute(this, 'VPCPublicSubnet2DefaultRouteB7481BBA', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet2DefaultRouteB7481bba.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation5A808732 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet2RouteTableAssociation5A808732', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
    });

    if (serverlessDatabaseSecurityGroup1E143fbb == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseSecurityGroup1E143fbb' to be undefined. Fixit.`); }
    if (subnetGroup == null) { throw new Error(`A combination of conditions caused 'subnetGroup' to be undefined. Fixit.`); }
    const serverlessDatabaseDf340ae1 = new rds.CfnDBCluster(this, 'ServerlessDatabaseDF340AE1', {
      engine: 'aurora-mysql',
      copyTagsToSnapshot: true,
      dbClusterParameterGroupName: 'default.aurora-mysql5.7',
      dbSubnetGroupName: subnetGroup.ref,
      engineMode: 'serverless',
      masterUsername: 'admin',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      storageEncrypted: true,
      vpcSecurityGroupIds: [
        serverlessDatabaseSecurityGroup1E143fbb.attrGroupId,
      ],
    });
    serverlessDatabaseDf340ae1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01 == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01' to be undefined. Fixit.`); }
    if (subnetGroup == null) { throw new Error(`A combination of conditions caused 'subnetGroup' to be undefined. Fixit.`); }
    const serverlessDatabaseWithoutCopyTagsB34876c9 = new rds.CfnDBCluster(this, 'ServerlessDatabaseWithoutCopyTagsB34876C9', {
      engine: 'aurora-mysql',
      copyTagsToSnapshot: false,
      dbClusterParameterGroupName: 'default.aurora-mysql5.7',
      dbSubnetGroupName: subnetGroup.ref,
      engineMode: 'serverless',
      masterUsername: 'admin',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      storageEncrypted: true,
      vpcSecurityGroupIds: [
        serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01.attrGroupId,
      ],
    });
    serverlessDatabaseWithoutCopyTagsB34876c9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip4947bc00 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip4947bc00' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway3C070193 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet2NATGateway3C070193', {
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
      allocationId: vpcPublicSubnet2Eip4947bc00.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (serverlessDatabaseDf340ae1 == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseDf340ae1' to be undefined. Fixit.`); }
    if (serverlessDatabaseSecurityGroup1E143fbb == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseSecurityGroup1E143fbb' to be undefined. Fixit.`); }
    const serverlessDatabaseSecurityGroupfrom00000IndirectPortE0823e20 = new ec2.CfnSecurityGroupIngress(this, 'ServerlessDatabaseSecurityGroupfrom00000IndirectPortE0823E20', {
      ipProtocol: 'tcp',
      cidrIp: '0.0.0.0/0',
      description: 'Open to the world',
      fromPort: serverlessDatabaseDf340ae1.attrEndpointPort,
      groupId: serverlessDatabaseSecurityGroup1E143fbb.attrGroupId,
      toPort: serverlessDatabaseDf340ae1.attrEndpointPort,
    });

    if (serverlessDatabaseWithoutCopyTagsB34876c9 == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseWithoutCopyTagsB34876c9' to be undefined. Fixit.`); }
    if (serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01 == null) { throw new Error(`A combination of conditions caused 'serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01' to be undefined. Fixit.`); }
    const serverlessDatabaseWithoutCopyTagsSecurityGroupfrom00000IndirectPortEfbd728b = new ec2.CfnSecurityGroupIngress(this, 'ServerlessDatabaseWithoutCopyTagsSecurityGroupfrom00000IndirectPortEFBD728B', {
      ipProtocol: 'tcp',
      cidrIp: '0.0.0.0/0',
      description: 'Open to the world',
      fromPort: serverlessDatabaseWithoutCopyTagsB34876c9.attrEndpointPort,
      groupId: serverlessDatabaseWithoutCopyTagsSecurityGroup9C8f4a01.attrGroupId,
      toPort: serverlessDatabaseWithoutCopyTagsB34876c9.attrEndpointPort,
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway3C070193 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway3C070193' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteF4f5cfd2 = new ec2.CfnRoute(this, 'VPCPrivateSubnet2DefaultRouteF4F5CFD2', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway3C070193.ref,
    });
  }
}

