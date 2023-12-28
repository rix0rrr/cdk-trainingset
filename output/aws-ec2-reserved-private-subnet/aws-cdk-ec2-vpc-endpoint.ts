import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface AwsCdkEc2VpcEndpointProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkEc2VpcEndpoint extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkEc2VpcEndpointProps = {}) {
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
          value: 'aws-cdk-ec2-vpc-endpoint/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpc-endpoint/VPC',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpCingressSubnet1RouteTableEef02a64 = new ec2.CfnRouteTable(this, 'VPCingressSubnet1RouteTableEEF02A64', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpc-endpoint/VPC/ingressSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpCingressSubnet1SubnetBb7fdf67 = new ec2.CfnSubnet(this, 'VPCingressSubnet1SubnetBB7FDF67', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'ingress',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpc-endpoint/VPC/ingressSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpCingressSubnet2RouteTable8565F2d0 = new ec2.CfnRouteTable(this, 'VPCingressSubnet2RouteTable8565F2D0', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpc-endpoint/VPC/ingressSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpCingressSubnet2SubnetE30f0091 = new ec2.CfnSubnet(this, 'VPCingressSubnet2SubnetE30F0091', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.64.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'ingress',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'aws-cdk-ec2-vpc-endpoint/VPC/ingressSubnet2',
        },
      ],
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    if (vpCingressSubnet1RouteTableEef02a64 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet1RouteTableEef02a64' to be undefined. Fixit.`); }
    const vpCingressSubnet1DefaultRouteC1c9d77c = new ec2.CfnRoute(this, 'VPCingressSubnet1DefaultRouteC1C9D77C', {
      routeTableId: vpCingressSubnet1RouteTableEef02a64.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpCingressSubnet1DefaultRouteC1c9d77c.addDependency(vpcvpcgw99b986dc);

    if (vpCingressSubnet1RouteTableEef02a64 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet1RouteTableEef02a64' to be undefined. Fixit.`); }
    if (vpCingressSubnet1SubnetBb7fdf67 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet1SubnetBb7fdf67' to be undefined. Fixit.`); }
    const vpCingressSubnet1RouteTableAssociation7700457B = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCingressSubnet1RouteTableAssociation7700457B', {
      routeTableId: vpCingressSubnet1RouteTableEef02a64.ref,
      subnetId: vpCingressSubnet1SubnetBb7fdf67.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    if (vpCingressSubnet2RouteTable8565F2d0 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet2RouteTable8565F2d0' to be undefined. Fixit.`); }
    const vpCingressSubnet2DefaultRoute8E2f45a7 = new ec2.CfnRoute(this, 'VPCingressSubnet2DefaultRoute8E2F45A7', {
      routeTableId: vpCingressSubnet2RouteTable8565F2d0.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpCingressSubnet2DefaultRoute8E2f45a7.addDependency(vpcvpcgw99b986dc);

    if (vpCingressSubnet2RouteTable8565F2d0 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet2RouteTable8565F2d0' to be undefined. Fixit.`); }
    if (vpCingressSubnet2SubnetE30f0091 == null) { throw new Error(`A combination of conditions caused 'vpCingressSubnet2SubnetE30f0091' to be undefined. Fixit.`); }
    const vpCingressSubnet2RouteTableAssociation35C35494 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCingressSubnet2RouteTableAssociation35C35494', {
      routeTableId: vpCingressSubnet2RouteTable8565F2d0.ref,
      subnetId: vpCingressSubnet2SubnetE30f0091.ref,
    });
  }
}

