import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

export interface aws-cdk-rds-instance-dual-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-rds-instance-dual-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-rds-instance-dual-integProps = {}) {
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
          value: 'aws-cdk-rds-instance-dual-integ/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const dualstackInstanceSecurityGroupE7c05542 = new ec2.CfnSecurityGroup(this, 'DualstackInstanceSecurityGroupE7C05542', {
      groupDescription: 'Security group for DualstackInstance database',
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
    const ipv4InstanceSecurityGroup0E80ce00 = new ec2.CfnSecurityGroup(this, 'Ipv4InstanceSecurityGroup0E80CE00', {
      groupDescription: 'Security group for Ipv4Instance database',
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
    const ipv6CidrBlock = new ec2.CfnVPCCidrBlock(this, 'Ipv6CidrBlock', {
      vpcId: vpcb9e5f0b4.ref,
      amazonProvidedIpv6CidrBlock: true,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableEb156210 = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet1RouteTableEB156210', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/IsolatedSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTable9B4f78dc = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet2RouteTable9B4F78DC', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/IsolatedSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/PublicSubnet1',
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
          value: 'aws-cdk-rds-instance-dual-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/PublicSubnet2',
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
          value: 'aws-cdk-rds-instance-dual-integ/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (ipv6CidrBlock == null) { throw new Error(`A combination of conditions caused 'ipv6CidrBlock' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1SubnetEbd00fc6 = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet1SubnetEBD00FC6', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/18',
      ipv6CidrBlock: cdk.Fn.select(0, cdk.Fn.cidr(cdk.Fn.select(0, vpcb9e5f0b4.attrIpv6CidrBlocks), 256, String('64'))),
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/IsolatedSubnet1',
        },
      ],
    });
    vpcIsolatedSubnet1SubnetEbd00fc6.addDependency(ipv6CidrBlock);

    if (ipv6CidrBlock == null) { throw new Error(`A combination of conditions caused 'ipv6CidrBlock' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2Subnet4B1c8caa = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet2Subnet4B1C8CAA', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.192.0/18',
      ipv6CidrBlock: cdk.Fn.select(1, cdk.Fn.cidr(cdk.Fn.select(0, vpcb9e5f0b4.attrIpv6CidrBlocks), 256, String('64'))),
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-cdk-rds-instance-dual-integ/VPC/IsolatedSubnet2',
        },
      ],
    });
    vpcIsolatedSubnet2Subnet4B1c8caa.addDependency(ipv6CidrBlock);

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

    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const dualstackInstanceSubnetGroupB16a837f = new rds.CfnDBSubnetGroup(this, 'DualstackInstanceSubnetGroupB16A837F', {
      dbSubnetGroupDescription: 'Subnet group for DualstackInstance database',
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
    });

    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const ipv4InstanceSubnetGroup6E04eddc = new rds.CfnDBSubnetGroup(this, 'Ipv4InstanceSubnetGroup6E04EDDC', {
      dbSubnetGroupDescription: 'Subnet group for Ipv4Instance database',
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
    });

    if (vpcIsolatedSubnet1RouteTableEb156210 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableEb156210' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableAssociationA2d18f7c = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet1RouteTableAssociationA2D18F7C', {
      routeTableId: vpcIsolatedSubnet1RouteTableEb156210.ref,
      subnetId: vpcIsolatedSubnet1SubnetEbd00fc6.ref,
    });

    if (vpcIsolatedSubnet2RouteTable9B4f78dc == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTable9B4f78dc' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet2RouteTableAssociation7BF8E0EB', {
      routeTableId: vpcIsolatedSubnet2RouteTable9B4f78dc.ref,
      subnetId: vpcIsolatedSubnet2Subnet4B1c8caa.ref,
    });

    if (dualstackInstanceSecurityGroupE7c05542 == null) { throw new Error(`A combination of conditions caused 'dualstackInstanceSecurityGroupE7c05542' to be undefined. Fixit.`); }
    if (dualstackInstanceSubnetGroupB16a837f == null) { throw new Error(`A combination of conditions caused 'dualstackInstanceSubnetGroupB16a837f' to be undefined. Fixit.`); }
    const dualstackInstance4Cb1897e = new rds.CfnDBInstance(this, 'DualstackInstance4CB1897E', {
      allocatedStorage: '100',
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.micro',
      dbSubnetGroupName: dualstackInstanceSubnetGroupB16a837f.ref,
      engine: 'postgres',
      engineVersion: '15.2',
      masterUsername: 'postgres',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      multiAz: false,
      networkType: 'DUAL',
      publiclyAccessible: false,
      storageType: 'gp2',
      vpcSecurityGroups: [
        dualstackInstanceSecurityGroupE7c05542.attrGroupId,
      ],
    });
    dualstackInstance4Cb1897e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (ipv4InstanceSecurityGroup0E80ce00 == null) { throw new Error(`A combination of conditions caused 'ipv4InstanceSecurityGroup0E80ce00' to be undefined. Fixit.`); }
    if (ipv4InstanceSubnetGroup6E04eddc == null) { throw new Error(`A combination of conditions caused 'ipv4InstanceSubnetGroup6E04eddc' to be undefined. Fixit.`); }
    const ipv4Instance75869831 = new rds.CfnDBInstance(this, 'Ipv4Instance75869831', {
      allocatedStorage: '100',
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.micro',
      dbSubnetGroupName: ipv4InstanceSubnetGroup6E04eddc.ref,
      engine: 'postgres',
      engineVersion: '15.2',
      masterUsername: 'postgres',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      multiAz: false,
      networkType: 'IPV4',
      publiclyAccessible: false,
      storageType: 'gp2',
      vpcSecurityGroups: [
        ipv4InstanceSecurityGroup0E80ce00.attrGroupId,
      ],
    });
    ipv4Instance75869831.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

