import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export interface aws-cdk-nlb-dualstack-internalProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-nlb-dualstack-internal extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-nlb-dualstack-internalProps = {}) {
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
          value: 'aws-cdk-nlb-dualstack-internal/VPC',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const iPv6Block = new ec2.CfnVPCCidrBlock(this, 'IPv6Block', {
      amazonProvidedIpv6CidrBlock: true,
      vpcId: vpcb9e5f0b4.ref,
    });

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableEb156210 = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet1RouteTableEB156210', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-nlb-dualstack-internal/VPC/IsolatedSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    vpcIsolatedSubnet1RouteTableEb156210.addDependency(iPv6Block);

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1SubnetEbd00fc6 = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet1SubnetEBD00FC6', {
      assignIpv6AddressOnCreation: true,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/17',
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
          value: 'aws-cdk-nlb-dualstack-internal/VPC/IsolatedSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    vpcIsolatedSubnet1SubnetEbd00fc6.addDependency(iPv6Block);

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTable9B4f78dc = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet2RouteTable9B4F78DC', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-nlb-dualstack-internal/VPC/IsolatedSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    vpcIsolatedSubnet2RouteTable9B4f78dc.addDependency(iPv6Block);

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2Subnet4B1c8caa = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet2Subnet4B1C8CAA', {
      assignIpv6AddressOnCreation: true,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/17',
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
          value: 'aws-cdk-nlb-dualstack-internal/VPC/IsolatedSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    vpcIsolatedSubnet2Subnet4B1c8caa.addDependency(iPv6Block);

    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const lb8a12904c = new elasticloadbalancingv2.CfnLoadBalancer(this, 'LB8A12904C', {
      ipAddressType: 'dualstack',
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internal',
      subnets: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
      type: 'network',
    });

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1RouteTableEb156210 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableEb156210' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableAssociationA2d18f7c = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet1RouteTableAssociationA2D18F7C', {
      routeTableId: vpcIsolatedSubnet1RouteTableEb156210.ref,
      subnetId: vpcIsolatedSubnet1SubnetEbd00fc6.ref,
    });
    vpcIsolatedSubnet1RouteTableAssociationA2d18f7c.addDependency(iPv6Block);

    if (iPv6Block == null) { throw new Error(`A combination of conditions caused 'iPv6Block' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2RouteTable9B4f78dc == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTable9B4f78dc' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet2RouteTableAssociation7BF8E0EB', {
      routeTableId: vpcIsolatedSubnet2RouteTable9B4f78dc.ref,
      subnetId: vpcIsolatedSubnet2Subnet4B1c8caa.ref,
    });
    vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb.addDependency(iPv6Block);

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1RouteTableAssociationA2d18f7c == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableAssociationA2d18f7c' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1RouteTableEb156210 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableEb156210' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2RouteTable9B4f78dc == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTable9B4f78dc' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const tg2Dcffd86 = new elasticloadbalancingv2.CfnTargetGroup(this, 'tg2DCFFD86', {
      healthCheckIntervalSeconds: 250,
      healthCheckProtocol: 'TCP',
      healthCheckTimeoutSeconds: 100,
      healthyThresholdCount: 5,
      port: 3000,
      protocol: 'TCP',
      unhealthyThresholdCount: 2,
      vpcId: vpcb9e5f0b4.ref,
    });
    tg2Dcffd86.addDependency(vpcIsolatedSubnet1RouteTableEb156210);
    tg2Dcffd86.addDependency(vpcIsolatedSubnet1RouteTableAssociationA2d18f7c);
    tg2Dcffd86.addDependency(vpcIsolatedSubnet1SubnetEbd00fc6);
    tg2Dcffd86.addDependency(vpcIsolatedSubnet2RouteTable9B4f78dc);
    tg2Dcffd86.addDependency(vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb);
    tg2Dcffd86.addDependency(vpcIsolatedSubnet2Subnet4B1c8caa);

    if (lb8a12904c == null) { throw new Error(`A combination of conditions caused 'lb8a12904c' to be undefined. Fixit.`); }
    if (tg2Dcffd86 == null) { throw new Error(`A combination of conditions caused 'tg2Dcffd86' to be undefined. Fixit.`); }
    const lbListener49E825b4 = new elasticloadbalancingv2.CfnListener(this, 'LBListener49E825B4', {
      defaultActions: [
        {
          targetGroupArn: tg2Dcffd86.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: lb8a12904c.ref,
      port: 3000,
      protocol: 'TCP',
    });
  }
}

