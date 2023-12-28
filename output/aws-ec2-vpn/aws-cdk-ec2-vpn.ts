import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface aws-cdk-ec2-vpnProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-ec2-vpn extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-ec2-vpnProps = {}) {
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
    const myVpcDynamicCustomerGatewayFb63dfbf = new ec2.CfnCustomerGateway(this, 'MyVpcDynamicCustomerGatewayFB63DFBF', {
      bgpAsn: 65000,
      ipAddress: '52.85.255.164',
      type: 'ipsec.1',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
    });

    const myVpcF9f0ca6f = new ec2.CfnVPC(this, 'MyVpcF9F0CA6F', {
      cidrBlock: '10.10.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
    });

    const myVpcIgw5c4a4f63 = new ec2.CfnInternetGateway(this, 'MyVpcIGW5C4A4F63', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
    });

    const myVpcPublicSubnet1Eip096967cb = new ec2.CfnEIP(this, 'MyVpcPublicSubnet1EIP096967CB', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet1',
        },
      ],
    });

    const myVpcPublicSubnet2Eip8ccba239 = new ec2.CfnEIP(this, 'MyVpcPublicSubnet2EIP8CCBA239', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet2',
        },
      ],
    });

    const myVpcStaticCustomerGateway43D01906 = new ec2.CfnCustomerGateway(this, 'MyVpcStaticCustomerGateway43D01906', {
      bgpAsn: 65000,
      ipAddress: '52.85.255.197',
      type: 'ipsec.1',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
    });

    const myVpcVpnGateway11Fb05e5 = new ec2.CfnVPNGateway(this, 'MyVpcVpnGateway11FB05E5', {
      type: 'ipsec.1',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
    });

    if (myVpcDynamicCustomerGatewayFb63dfbf == null) { throw new Error(`A combination of conditions caused 'myVpcDynamicCustomerGatewayFb63dfbf' to be undefined. Fixit.`); }
    if (myVpcVpnGateway11Fb05e5 == null) { throw new Error(`A combination of conditions caused 'myVpcVpnGateway11Fb05e5' to be undefined. Fixit.`); }
    const myVpcDynamic739F3519 = new ec2.CfnVPNConnection(this, 'MyVpcDynamic739F3519', {
      customerGatewayId: myVpcDynamicCustomerGatewayFb63dfbf.ref,
      type: 'ipsec.1',
      staticRoutesOnly: false,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
      vpnGatewayId: myVpcVpnGateway11Fb05e5.ref,
      vpnTunnelOptionsSpecifications: [
        {
          preSharedKey: 'secretkey1234',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTable8819E6e2 = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet1RouteTable8819E6E2', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PrivateSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1Subnet5057Cf7e = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet1Subnet5057CF7E', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.10.128.0/18',
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PrivateSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2RouteTableCedceece = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet2RouteTableCEDCEECE', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PrivateSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2Subnet0040C983 = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet2Subnet0040C983', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.10.192.0/18',
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PrivateSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableC46ab2f4 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet1RouteTableC46AB2F4', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1SubnetF6608456 = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet1SubnetF6608456', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.10.0.0/18',
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet1',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2RouteTable1Df17386 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet2RouteTable1DF17386', {
      vpcId: myVpcF9f0ca6f.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet2',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2Subnet492B6bfb = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet2Subnet492B6BFB', {
      vpcId: myVpcF9f0ca6f.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.10.64.0/18',
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet2',
        },
      ],
    });

    if (myVpcStaticCustomerGateway43D01906 == null) { throw new Error(`A combination of conditions caused 'myVpcStaticCustomerGateway43D01906' to be undefined. Fixit.`); }
    if (myVpcVpnGateway11Fb05e5 == null) { throw new Error(`A combination of conditions caused 'myVpcVpnGateway11Fb05e5' to be undefined. Fixit.`); }
    const myVpcStaticAba7f625 = new ec2.CfnVPNConnection(this, 'MyVpcStaticABA7F625', {
      customerGatewayId: myVpcStaticCustomerGateway43D01906.ref,
      type: 'ipsec.1',
      staticRoutesOnly: true,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpn/MyVpc',
        },
      ],
      vpnGatewayId: myVpcVpnGateway11Fb05e5.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    const myVpcVpcgw488ace0d = new ec2.CfnVPCGatewayAttachment(this, 'MyVpcVPCGW488ACE0D', {
      vpcId: myVpcF9f0ca6f.ref,
      internetGatewayId: myVpcIgw5c4a4f63.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    if (myVpcVpnGateway11Fb05e5 == null) { throw new Error(`A combination of conditions caused 'myVpcVpnGateway11Fb05e5' to be undefined. Fixit.`); }
    const myVpcVpcvpngw0cb969b3 = new ec2.CfnVPCGatewayAttachment(this, 'MyVpcVPCVPNGW0CB969B3', {
      vpcId: myVpcF9f0ca6f.ref,
      vpnGatewayId: myVpcVpnGateway11Fb05e5.ref,
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

    if (myVpcPrivateSubnet1RouteTable8819E6e2 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable8819E6e2' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet2RouteTableCedceece == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2RouteTableCedceece' to be undefined. Fixit.`); }
    if (myVpcVpcvpngw0cb969b3 == null) { throw new Error(`A combination of conditions caused 'myVpcVpcvpngw0cb969b3' to be undefined. Fixit.`); }
    if (myVpcVpnGateway11Fb05e5 == null) { throw new Error(`A combination of conditions caused 'myVpcVpnGateway11Fb05e5' to be undefined. Fixit.`); }
    const myVpcRoutePropagation122Fc3be = new ec2.CfnVPNGatewayRoutePropagation(this, 'MyVpcRoutePropagation122FC3BE', {
      routeTableIds: [
        myVpcPrivateSubnet1RouteTable8819E6e2.ref,
        myVpcPrivateSubnet2RouteTableCedceece.ref,
      ],
      vpnGatewayId: myVpcVpnGateway11Fb05e5.ref,
    });
    myVpcRoutePropagation122Fc3be.addDependency(myVpcVpcvpngw0cb969b3);

    if (myVpcStaticAba7f625 == null) { throw new Error(`A combination of conditions caused 'myVpcStaticAba7f625' to be undefined. Fixit.`); }
    const myVpcStaticRoute192168100240A24a5cc = new ec2.CfnVPNConnectionRoute(this, 'MyVpcStaticRoute192168100240A24A5CC', {
      destinationCidrBlock: '192.168.10.0/24',
      vpnConnectionId: myVpcStaticAba7f625.ref,
    });

    if (myVpcStaticAba7f625 == null) { throw new Error(`A combination of conditions caused 'myVpcStaticAba7f625' to be undefined. Fixit.`); }
    const myVpcStaticRoute19216820024Cd4b642f = new ec2.CfnVPNConnectionRoute(this, 'MyVpcStaticRoute19216820024CD4B642F', {
      destinationCidrBlock: '192.168.20.0/24',
      vpnConnectionId: myVpcStaticAba7f625.ref,
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet1',
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
          value: 'aws-cdk-ec2-vpn/MyVpc/PublicSubnet2',
        },
      ],
    });
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2DefaultRoute052936F6);
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2RouteTableAssociation227De78d);

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
  }
}
