import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export interface BasicProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Basic extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: BasicProps = {}) {
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
    const stack8A423254 = new ec2.CfnVPC(this, 'Stack8A423254', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack',
        },
      ],
    });

    const stackIgw2f0a1126 = new ec2.CfnInternetGateway(this, 'StackIGW2F0A1126', {
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack',
        },
      ],
    });

    const stackPublicSubnet1Eipbdaab2a5 = new ec2.CfnEIP(this, 'StackPublicSubnet1EIPBDAAB2A5', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet1',
        },
      ],
    });

    const stackPublicSubnet2Eip8cdbc8c2 = new ec2.CfnEIP(this, 'StackPublicSubnet2EIP8CDBC8C2', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const lbSecurityGroup8A41ea2b = new ec2.CfnSecurityGroup(this, 'LBSecurityGroup8A41EA2B', {
      groupDescription: 'Automatically created Security Group for ELB BasicLBE45AFDA3',
      securityGroupEgress: [
        {
          cidrIp: '255.255.255.255/32',
          description: 'Disallow all traffic',
          fromPort: 252,
          ipProtocol: 'icmp',
          toPort: 86,
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: stack8A423254.ref,
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet1RouteTable8Ada6a0c = new ec2.CfnRouteTable(this, 'StackPrivateSubnet1RouteTable8ADA6A0C', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PrivateSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet1Subnet47Ac2bc7 = new ec2.CfnSubnet(this, 'StackPrivateSubnet1Subnet47AC2BC7', {
      vpcId: stack8A423254.ref,
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
          value: 'Basic/Stack/PrivateSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet2RouteTableA5546697 = new ec2.CfnRouteTable(this, 'StackPrivateSubnet2RouteTableA5546697', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PrivateSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet2SubnetA2f8edd8 = new ec2.CfnSubnet(this, 'StackPrivateSubnet2SubnetA2F8EDD8', {
      vpcId: stack8A423254.ref,
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
          value: 'Basic/Stack/PrivateSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet1RouteTable5057189D = new ec2.CfnRouteTable(this, 'StackPublicSubnet1RouteTable5057189D', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet1Subnet0Ad81d22 = new ec2.CfnSubnet(this, 'StackPublicSubnet1Subnet0AD81D22', {
      vpcId: stack8A423254.ref,
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
          value: 'Basic/Stack/PublicSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet2RouteTableCd306445 = new ec2.CfnRouteTable(this, 'StackPublicSubnet2RouteTableCD306445', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet2Subnet3C7d2288 = new ec2.CfnSubnet(this, 'StackPublicSubnet2Subnet3C7D2288', {
      vpcId: stack8A423254.ref,
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
          value: 'Basic/Stack/PublicSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    const stackVpcgwffcb6290 = new ec2.CfnVPCGatewayAttachment(this, 'StackVPCGWFFCB6290', {
      vpcId: stack8A423254.ref,
      internetGatewayId: stackIgw2f0a1126.ref,
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const targetGroupOne7810Cafb = new elasticloadbalancingv2.CfnTargetGroup(this, 'TargetGroupOne7810CAFB', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'instance',
      vpcId: stack8A423254.ref,
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const targetGroupTwo593946E1 = new elasticloadbalancingv2.CfnTargetGroup(this, 'TargetGroupTwo593946E1', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'instance',
      vpcId: stack8A423254.ref,
    });

    if (lbSecurityGroup8A41ea2b == null) { throw new Error(`A combination of conditions caused 'lbSecurityGroup8A41ea2b' to be undefined. Fixit.`); }
    if (stackPrivateSubnet1Subnet47Ac2bc7 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1Subnet47Ac2bc7' to be undefined. Fixit.`); }
    if (stackPrivateSubnet2SubnetA2f8edd8 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2SubnetA2f8edd8' to be undefined. Fixit.`); }
    const lb8a12904c = new elasticloadbalancingv2.CfnLoadBalancer(this, 'LB8A12904C', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internal',
      securityGroups: [
        lbSecurityGroup8A41ea2b.attrGroupId,
      ],
      subnets: [
        stackPrivateSubnet1Subnet47Ac2bc7.ref,
        stackPrivateSubnet2SubnetA2f8edd8.ref,
      ],
      type: 'application',
    });

    if (stackPrivateSubnet1RouteTable8Ada6a0c == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1RouteTable8Ada6a0c' to be undefined. Fixit.`); }
    if (stackPrivateSubnet1Subnet47Ac2bc7 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1Subnet47Ac2bc7' to be undefined. Fixit.`); }
    const stackPrivateSubnet1RouteTableAssociationFfe38495 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPrivateSubnet1RouteTableAssociationFFE38495', {
      routeTableId: stackPrivateSubnet1RouteTable8Ada6a0c.ref,
      subnetId: stackPrivateSubnet1Subnet47Ac2bc7.ref,
    });

    if (stackPrivateSubnet2RouteTableA5546697 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2RouteTableA5546697' to be undefined. Fixit.`); }
    if (stackPrivateSubnet2SubnetA2f8edd8 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2SubnetA2f8edd8' to be undefined. Fixit.`); }
    const stackPrivateSubnet2RouteTableAssociation68Acb8c1 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPrivateSubnet2RouteTableAssociation68ACB8C1', {
      routeTableId: stackPrivateSubnet2RouteTableA5546697.ref,
      subnetId: stackPrivateSubnet2SubnetA2f8edd8.ref,
    });

    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    if (stackPublicSubnet1RouteTable5057189D == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTable5057189D' to be undefined. Fixit.`); }
    if (stackVpcgwffcb6290 == null) { throw new Error(`A combination of conditions caused 'stackVpcgwffcb6290' to be undefined. Fixit.`); }
    const stackPublicSubnet1DefaultRoute16154E3d = new ec2.CfnRoute(this, 'StackPublicSubnet1DefaultRoute16154E3D', {
      routeTableId: stackPublicSubnet1RouteTable5057189D.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: stackIgw2f0a1126.ref,
    });
    stackPublicSubnet1DefaultRoute16154E3d.addDependency(stackVpcgwffcb6290);

    if (stackPublicSubnet1RouteTable5057189D == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTable5057189D' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Subnet0Ad81d22 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Subnet0Ad81d22' to be undefined. Fixit.`); }
    const stackPublicSubnet1RouteTableAssociation74F1c1b6 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPublicSubnet1RouteTableAssociation74F1C1B6', {
      routeTableId: stackPublicSubnet1RouteTable5057189D.ref,
      subnetId: stackPublicSubnet1Subnet0Ad81d22.ref,
    });

    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    if (stackPublicSubnet2RouteTableCd306445 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableCd306445' to be undefined. Fixit.`); }
    if (stackVpcgwffcb6290 == null) { throw new Error(`A combination of conditions caused 'stackVpcgwffcb6290' to be undefined. Fixit.`); }
    const stackPublicSubnet2DefaultRoute0319539B = new ec2.CfnRoute(this, 'StackPublicSubnet2DefaultRoute0319539B', {
      routeTableId: stackPublicSubnet2RouteTableCd306445.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: stackIgw2f0a1126.ref,
    });
    stackPublicSubnet2DefaultRoute0319539B.addDependency(stackVpcgwffcb6290);

    if (stackPublicSubnet2RouteTableCd306445 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableCd306445' to be undefined. Fixit.`); }
    if (stackPublicSubnet2Subnet3C7d2288 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2Subnet3C7d2288' to be undefined. Fixit.`); }
    const stackPublicSubnet2RouteTableAssociation5E8f73f1 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPublicSubnet2RouteTableAssociation5E8F73F1', {
      routeTableId: stackPublicSubnet2RouteTableCd306445.ref,
      subnetId: stackPublicSubnet2Subnet3C7d2288.ref,
    });

    if (lb8a12904c == null) { throw new Error(`A combination of conditions caused 'lb8a12904c' to be undefined. Fixit.`); }
    if (targetGroupOne7810Cafb == null) { throw new Error(`A combination of conditions caused 'targetGroupOne7810Cafb' to be undefined. Fixit.`); }
    if (targetGroupTwo593946E1 == null) { throw new Error(`A combination of conditions caused 'targetGroupTwo593946E1' to be undefined. Fixit.`); }
    const lbListener49E825b4 = new elasticloadbalancingv2.CfnListener(this, 'LBListener49E825B4', {
      defaultActions: [
        {
          forwardConfig: {
            targetGroups: [
              {
                targetGroupArn: targetGroupOne7810Cafb.ref,
                weight: 1,
              },
              {
                targetGroupArn: targetGroupTwo593946E1.ref,
                weight: 1,
              },
            ],
          },
          type: 'forward',
        },
      ],
      loadBalancerArn: lb8a12904c.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (stackPublicSubnet1DefaultRoute16154E3d == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1DefaultRoute16154E3d' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Eipbdaab2a5 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Eipbdaab2a5' to be undefined. Fixit.`); }
    if (stackPublicSubnet1RouteTableAssociation74F1c1b6 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTableAssociation74F1c1b6' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Subnet0Ad81d22 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Subnet0Ad81d22' to be undefined. Fixit.`); }
    const stackPublicSubnet1NatGatewayD2e1abf7 = new ec2.CfnNatGateway(this, 'StackPublicSubnet1NATGatewayD2E1ABF7', {
      subnetId: stackPublicSubnet1Subnet0Ad81d22.ref,
      allocationId: stackPublicSubnet1Eipbdaab2a5.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet1',
        },
      ],
    });
    stackPublicSubnet1NatGatewayD2e1abf7.addDependency(stackPublicSubnet1DefaultRoute16154E3d);
    stackPublicSubnet1NatGatewayD2e1abf7.addDependency(stackPublicSubnet1RouteTableAssociation74F1c1b6);

    if (stackPublicSubnet2DefaultRoute0319539B == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2DefaultRoute0319539B' to be undefined. Fixit.`); }
    if (stackPublicSubnet2Eip8cdbc8c2 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2Eip8cdbc8c2' to be undefined. Fixit.`); }
    if (stackPublicSubnet2RouteTableAssociation5E8f73f1 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableAssociation5E8f73f1' to be undefined. Fixit.`); }
    if (stackPublicSubnet2Subnet3C7d2288 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2Subnet3C7d2288' to be undefined. Fixit.`); }
    const stackPublicSubnet2NatGatewayA8e03ab3 = new ec2.CfnNatGateway(this, 'StackPublicSubnet2NATGatewayA8E03AB3', {
      subnetId: stackPublicSubnet2Subnet3C7d2288.ref,
      allocationId: stackPublicSubnet2Eip8cdbc8c2.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'Basic/Stack/PublicSubnet2',
        },
      ],
    });
    stackPublicSubnet2NatGatewayA8e03ab3.addDependency(stackPublicSubnet2DefaultRoute0319539B);
    stackPublicSubnet2NatGatewayA8e03ab3.addDependency(stackPublicSubnet2RouteTableAssociation5E8f73f1);

    if (stackPrivateSubnet1RouteTable8Ada6a0c == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1RouteTable8Ada6a0c' to be undefined. Fixit.`); }
    if (stackPublicSubnet1NatGatewayD2e1abf7 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1NatGatewayD2e1abf7' to be undefined. Fixit.`); }
    const stackPrivateSubnet1DefaultRouteFbf81ba5 = new ec2.CfnRoute(this, 'StackPrivateSubnet1DefaultRouteFBF81BA5', {
      routeTableId: stackPrivateSubnet1RouteTable8Ada6a0c.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: stackPublicSubnet1NatGatewayD2e1abf7.ref,
    });

    if (stackPrivateSubnet2RouteTableA5546697 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2RouteTableA5546697' to be undefined. Fixit.`); }
    if (stackPublicSubnet2NatGatewayA8e03ab3 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2NatGatewayA8e03ab3' to be undefined. Fixit.`); }
    const stackPrivateSubnet2DefaultRoute22004492 = new ec2.CfnRoute(this, 'StackPrivateSubnet2DefaultRoute22004492', {
      routeTableId: stackPrivateSubnet2RouteTableA5546697.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: stackPublicSubnet2NatGatewayA8e03ab3.ref,
    });
  }
}

