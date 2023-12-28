import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface StackWithVpcProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class StackWithVpc extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackWithVpcProps = {}) {
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
    const myVpcF9f0ca6f = new ec2.CfnVPC(this, 'MyVpcF9F0CA6F', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'my-vpc-name',
        },
      ],
    });

    const myVpcIgw5c4a4f63 = new ec2.CfnInternetGateway(this, 'MyVpcIGW5C4A4F63', {
      tags: [
        {
          key: 'Name',
          value: 'my-vpc-name',
        },
      ],
    });

    const myVpcPublicSubnet1Eip096967cb = new ec2.CfnEIP(this, 'MyVpcPublicSubnet1EIP096967CB', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet1',
        },
      ],
    });

    const myVpcPublicSubnet2Eip8ccba239 = new ec2.CfnEIP(this, 'MyVpcPublicSubnet2EIP8CCBA239', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet2',
        },
      ],
    });

    const myVpcPublicSubnet3Eipc5acadab = new ec2.CfnEIP(this, 'MyVpcPublicSubnet3EIPC5ACADAB', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet3',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTable8819E6e2 = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet1RouteTable8819E6E2', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PrivateSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1Subnet5057Cf7e = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet1Subnet5057CF7E', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1a',
      cidrBlock: '10.0.96.0/19',
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
          value: 'StackWithVpc/MyVpc/PrivateSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2RouteTableCedceece = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet2RouteTableCEDCEECE', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PrivateSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2Subnet0040C983 = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet2Subnet0040C983', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1b',
      cidrBlock: '10.0.128.0/19',
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
          value: 'StackWithVpc/MyVpc/PrivateSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet3RouteTableB790927c = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet3RouteTableB790927C', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PrivateSubnet3',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet3Subnet772D6ad7 = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet3Subnet772D6AD7', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1c',
      cidrBlock: '10.0.160.0/19',
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
          value: 'StackWithVpc/MyVpc/PrivateSubnet3',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableC46ab2f4 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet1RouteTableC46AB2F4', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1SubnetF6608456 = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet1SubnetF6608456', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1a',
      cidrBlock: '10.0.0.0/19',
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
          value: 'StackWithVpc/MyVpc/PublicSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2RouteTable1Df17386 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet2RouteTable1DF17386', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2Subnet492B6bfb = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet2Subnet492B6BFB', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1b',
      cidrBlock: '10.0.32.0/19',
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
          value: 'StackWithVpc/MyVpc/PublicSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet3RouteTable15028F08 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet3RouteTable15028F08', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet3',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet3Subnet57Eee236 = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet3Subnet57EEE236', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: 'dummy1c',
      cidrBlock: '10.0.64.0/19',
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
          value: 'StackWithVpc/MyVpc/PublicSubnet3',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    const myVpcVpcgw488ace0d = new ec2.CfnVPCGatewayAttachment(this, 'MyVpcVPCGW488ACE0D', {
      vpcId: myVpcF9f0ca6f.ref,
      internetGatewayId: myVpcIgw5c4a4f63.ref,
    });

    if (myVpcPrivateSubnet1RouteTable8819E6e2 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable8819E6e2' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet5057Cf7e == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet5057Cf7e' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTableAssociation56D38c7e = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPrivateSubnet1RouteTableAssociation56D38C7E', {
      routeTableId: myVpcPrivateSubnet1RouteTable8819E6e2.ref,
      subnetId: myVpcPrivateSubnet1Subnet5057Cf7e.ref,
    });

    if (myVpcPrivateSubnet2RouteTableCedceece == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2RouteTableCedceece' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet2Subnet0040C983 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2Subnet0040C983' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2RouteTableAssociation86A610da = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPrivateSubnet2RouteTableAssociation86A610DA', {
      routeTableId: myVpcPrivateSubnet2RouteTableCedceece.ref,
      subnetId: myVpcPrivateSubnet2Subnet0040C983.ref,
    });

    if (myVpcPrivateSubnet3RouteTableB790927c == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet3RouteTableB790927c' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet3Subnet772D6ad7 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet3Subnet772D6ad7' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet3RouteTableAssociationD951741c = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPrivateSubnet3RouteTableAssociationD951741C', {
      routeTableId: myVpcPrivateSubnet3RouteTableB790927c.ref,
      subnetId: myVpcPrivateSubnet3Subnet772D6ad7.ref,
    });

    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTableC46ab2f4 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableC46ab2f4' to be undefined. Fixit.`); }
    if (myVpcVpcgw488ace0d == null) { throw new Error(`A combination of conditions caused 'myVpcVpcgw488ace0d' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1DefaultRoute95Fdf9eb = new ec2.CfnRoute(this, 'MyVpcPublicSubnet1DefaultRoute95FDF9EB', {
      routeTableId: myVpcPublicSubnet1RouteTableC46ab2f4.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcIgw5c4a4f63.ref,
    });
    myVpcPublicSubnet1DefaultRoute95Fdf9eb.addDependency(myVpcVpcgw488ace0d);

    if (myVpcPublicSubnet1RouteTableC46ab2f4 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableC46ab2f4' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1SubnetF6608456 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1SubnetF6608456' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableAssociation2Ecee1cb = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPublicSubnet1RouteTableAssociation2ECEE1CB', {
      routeTableId: myVpcPublicSubnet1RouteTableC46ab2f4.ref,
      subnetId: myVpcPublicSubnet1SubnetF6608456.ref,
    });

    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2RouteTable1Df17386 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTable1Df17386' to be undefined. Fixit.`); }
    if (myVpcVpcgw488ace0d == null) { throw new Error(`A combination of conditions caused 'myVpcVpcgw488ace0d' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2DefaultRoute052936F6 = new ec2.CfnRoute(this, 'MyVpcPublicSubnet2DefaultRoute052936F6', {
      routeTableId: myVpcPublicSubnet2RouteTable1Df17386.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcIgw5c4a4f63.ref,
    });
    myVpcPublicSubnet2DefaultRoute052936F6.addDependency(myVpcVpcgw488ace0d);

    if (myVpcPublicSubnet2RouteTable1Df17386 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTable1Df17386' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Subnet492B6bfb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Subnet492B6bfb' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2RouteTableAssociation227De78d = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPublicSubnet2RouteTableAssociation227DE78D', {
      routeTableId: myVpcPublicSubnet2RouteTable1Df17386.ref,
      subnetId: myVpcPublicSubnet2Subnet492B6bfb.ref,
    });

    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3RouteTable15028F08 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3RouteTable15028F08' to be undefined. Fixit.`); }
    if (myVpcVpcgw488ace0d == null) { throw new Error(`A combination of conditions caused 'myVpcVpcgw488ace0d' to be undefined. Fixit.`); }
    const myVpcPublicSubnet3DefaultRoute3A83ab36 = new ec2.CfnRoute(this, 'MyVpcPublicSubnet3DefaultRoute3A83AB36', {
      routeTableId: myVpcPublicSubnet3RouteTable15028F08.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcIgw5c4a4f63.ref,
    });
    myVpcPublicSubnet3DefaultRoute3A83ab36.addDependency(myVpcVpcgw488ace0d);

    if (myVpcPublicSubnet3RouteTable15028F08 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3RouteTable15028F08' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3Subnet57Eee236 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3Subnet57Eee236' to be undefined. Fixit.`); }
    const myVpcPublicSubnet3RouteTableAssociation5C27dda4 = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPublicSubnet3RouteTableAssociation5C27DDA4', {
      routeTableId: myVpcPublicSubnet3RouteTable15028F08.ref,
      subnetId: myVpcPublicSubnet3Subnet57Eee236.ref,
    });

    if (myVpcPublicSubnet1DefaultRoute95Fdf9eb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1DefaultRoute95Fdf9eb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1Eip096967cb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1Eip096967cb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTableAssociation2Ecee1cb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableAssociation2Ecee1cb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1SubnetF6608456 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1SubnetF6608456' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1NatGatewayAd3400c1 = new ec2.CfnNatGateway(this, 'MyVpcPublicSubnet1NATGatewayAD3400C1', {
      subnetId: myVpcPublicSubnet1SubnetF6608456.ref,
      allocationId: myVpcPublicSubnet1Eip096967cb.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet1',
        },
      ],
    });
    myVpcPublicSubnet1NatGatewayAd3400c1.addDependency(myVpcPublicSubnet1DefaultRoute95Fdf9eb);
    myVpcPublicSubnet1NatGatewayAd3400c1.addDependency(myVpcPublicSubnet1RouteTableAssociation2Ecee1cb);

    if (myVpcPublicSubnet2DefaultRoute052936F6 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2DefaultRoute052936F6' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Eip8ccba239 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Eip8ccba239' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2RouteTableAssociation227De78d == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTableAssociation227De78d' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Subnet492B6bfb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Subnet492B6bfb' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2NatGateway91Bfbec9 = new ec2.CfnNatGateway(this, 'MyVpcPublicSubnet2NATGateway91BFBEC9', {
      subnetId: myVpcPublicSubnet2Subnet492B6bfb.ref,
      allocationId: myVpcPublicSubnet2Eip8ccba239.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet2',
        },
      ],
    });
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2DefaultRoute052936F6);
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2RouteTableAssociation227De78d);

    if (myVpcPublicSubnet3DefaultRoute3A83ab36 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3DefaultRoute3A83ab36' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3Eipc5acadab == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3Eipc5acadab' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3RouteTableAssociation5C27dda4 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3RouteTableAssociation5C27dda4' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3Subnet57Eee236 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3Subnet57Eee236' to be undefined. Fixit.`); }
    const myVpcPublicSubnet3NatGatewayD4b50ebe = new ec2.CfnNatGateway(this, 'MyVpcPublicSubnet3NATGatewayD4B50EBE', {
      subnetId: myVpcPublicSubnet3Subnet57Eee236.ref,
      allocationId: myVpcPublicSubnet3Eipc5acadab.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'StackWithVpc/MyVpc/PublicSubnet3',
        },
      ],
    });
    myVpcPublicSubnet3NatGatewayD4b50ebe.addDependency(myVpcPublicSubnet3DefaultRoute3A83ab36);
    myVpcPublicSubnet3NatGatewayD4b50ebe.addDependency(myVpcPublicSubnet3RouteTableAssociation5C27dda4);

    if (myVpcPrivateSubnet1RouteTable8819E6e2 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable8819E6e2' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1NatGatewayAd3400c1 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1NatGatewayAd3400c1' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1DefaultRouteA8cde2fa = new ec2.CfnRoute(this, 'MyVpcPrivateSubnet1DefaultRouteA8CDE2FA', {
      routeTableId: myVpcPrivateSubnet1RouteTable8819E6e2.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet1NatGatewayAd3400c1.ref,
    });

    if (myVpcPrivateSubnet2RouteTableCedceece == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2RouteTableCedceece' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2NatGateway91Bfbec9 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2NatGateway91Bfbec9' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2DefaultRoute9Ce96294 = new ec2.CfnRoute(this, 'MyVpcPrivateSubnet2DefaultRoute9CE96294', {
      routeTableId: myVpcPrivateSubnet2RouteTableCedceece.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet2NatGateway91Bfbec9.ref,
    });

    if (myVpcPrivateSubnet3RouteTableB790927c == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet3RouteTableB790927c' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet3NatGatewayD4b50ebe == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet3NatGatewayD4b50ebe' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet3DefaultRouteEc11c0c5 = new ec2.CfnRoute(this, 'MyVpcPrivateSubnet3DefaultRouteEC11C0C5', {
      routeTableId: myVpcPrivateSubnet3RouteTableB790927c.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet3NatGatewayD4b50ebe.ref,
    });
  }
}

