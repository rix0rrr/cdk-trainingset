import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface TeststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Teststack extends cdk.Stack {
  public readonly serviceLoadBalancerDnsec5b149e;
  public readonly serviceServiceUrl250c0fb6;
  public readonly nlbEndpoint;

  public constructor(scope: cdk.App, id: string, props: TeststackProps = {}) {
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
    const ecsDefaultClusterMnL3mNnynVpc18E0451a = new ecs.CfnCluster(this, 'EcsDefaultClusterMnL3mNNYNVpc18E0451A', {
    });

    const taskTaskRoleE98524a1 = new iam.CfnRole(this, 'TaskTaskRoleE98524A1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const serviceLbPublicListenerEcsGroup0Cc8688c = new elasticloadbalancingv2.CfnTargetGroup(this, 'ServiceLBPublicListenerECSGroup0CC8688C', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const serviceLbSecurityGroupF7435a5c = new ec2.CfnSecurityGroup(this, 'ServiceLBSecurityGroupF7435A5C', {
      groupDescription: 'Automatically created Security Group for ELB TestStackServiceLBD3BB32E9',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const serviceSecurityGroupEea09b68 = new ec2.CfnSecurityGroup(this, 'ServiceSecurityGroupEEA09B68', {
      groupDescription: 'TestStack/Service/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    serviceSecurityGroupEea09b68.addDependency(taskTaskRoleE98524a1);

    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    const task79114B6b = new ecs.CfnTaskDefinition(this, 'Task79114B6B', {
      containerDefinitions: [
        {
          essential: true,
          image: 'public.ecr.aws/nginx/nginx:latest',
          name: 'nginx',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      family: 'TestStackTask24CEEDF4',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskTaskRoleE98524a1.attrArn,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'TestStack/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'TestStack/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'TestStack/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'TestStack/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (serviceLbSecurityGroupF7435a5c == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroupF7435a5c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const serviceLbe9a1adbc = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ServiceLBE9A1ADBC', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internal',
      securityGroups: [
        serviceLbSecurityGroupF7435a5c.attrGroupId,
      ],
      subnets: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
      type: 'application',
    });

    if (serviceLbSecurityGroupF7435a5c == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroupF7435a5c' to be undefined. Fixit.`); }
    if (serviceSecurityGroupEea09b68 == null) { throw new Error(`A combination of conditions caused 'serviceSecurityGroupEea09b68' to be undefined. Fixit.`); }
    const serviceLbSecurityGrouptoTestStackServiceSecurityGroup59159Bdd804a6ba8ac = new ec2.CfnSecurityGroupEgress(this, 'ServiceLBSecurityGrouptoTestStackServiceSecurityGroup59159BDD804A6BA8AC', {
      groupId: serviceLbSecurityGroupF7435a5c.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: serviceSecurityGroupEea09b68.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (serviceLbSecurityGroupF7435a5c == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroupF7435a5c' to be undefined. Fixit.`); }
    if (serviceSecurityGroupEea09b68 == null) { throw new Error(`A combination of conditions caused 'serviceSecurityGroupEea09b68' to be undefined. Fixit.`); }
    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    const serviceSecurityGroupfromTestStackServiceLbSecurityGroup76260E3b8004fb511a = new ec2.CfnSecurityGroupIngress(this, 'ServiceSecurityGroupfromTestStackServiceLBSecurityGroup76260E3B8004FB511A', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: serviceSecurityGroupEea09b68.attrGroupId,
      sourceSecurityGroupId: serviceLbSecurityGroupF7435a5c.attrGroupId,
      toPort: 80,
    });
    serviceSecurityGroupfromTestStackServiceLbSecurityGroup76260E3b8004fb511a.addDependency(taskTaskRoleE98524a1);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation70C59fa6 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet1RouteTableAssociation70C59FA6', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      subnetId: vpcPrivateSubnet1Subnet536B997a.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociationA89cad56 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet2RouteTableAssociationA89CAD56', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      subnetId: vpcPrivateSubnet2Subnet3788Aaa1.ref,
    });

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute3Da9e72a = new ec2.CfnRoute(this, 'VpcPublicSubnet1DefaultRoute3DA9E72A', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet1DefaultRoute3Da9e72a.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation97140677 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet1RouteTableAssociation97140677', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
    });

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRoute97F91067 = new ec2.CfnRoute(this, 'VpcPublicSubnet2DefaultRoute97F91067', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const nlbBcdb97fe = new elasticloadbalancingv2.CfnLoadBalancer(this, 'NlbBCDB97FE', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
        {
          key: 'load_balancing.cross_zone.enabled',
          value: 'true',
        },
      ],
      scheme: 'internet-facing',
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'network',
    });
    nlbBcdb97fe.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    nlbBcdb97fe.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    nlbBcdb97fe.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    nlbBcdb97fe.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (serviceLbe9a1adbc == null) { throw new Error(`A combination of conditions caused 'serviceLbe9a1adbc' to be undefined. Fixit.`); }
    if (serviceLbPublicListenerEcsGroup0Cc8688c == null) { throw new Error(`A combination of conditions caused 'serviceLbPublicListenerEcsGroup0Cc8688c' to be undefined. Fixit.`); }
    const serviceLbPublicListener46709Eaa = new elasticloadbalancingv2.CfnListener(this, 'ServiceLBPublicListener46709EAA', {
      defaultActions: [
        {
          targetGroupArn: serviceLbPublicListenerEcsGroup0Cc8688c.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: serviceLbe9a1adbc.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipd7e02669 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipd7e02669' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway4D7517aa = new ec2.CfnNatGateway(this, 'VpcPublicSubnet1NATGateway4D7517AA', {
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
      allocationId: vpcPublicSubnet1Eipd7e02669.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (serviceLbe9a1adbc == null) { throw new Error(`A combination of conditions caused 'serviceLbe9a1adbc' to be undefined. Fixit.`); }
    if (serviceLbPublicListener46709Eaa == null) { throw new Error(`A combination of conditions caused 'serviceLbPublicListener46709Eaa' to be undefined. Fixit.`); }
    if (serviceLbPublicListenerEcsGroup0Cc8688c == null) { throw new Error(`A combination of conditions caused 'serviceLbPublicListenerEcsGroup0Cc8688c' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const nlblistenerTargetsGroupDd2a3cb0 = new elasticloadbalancingv2.CfnTargetGroup(this, 'NlblistenerTargetsGroupDD2A3CB0', {
      healthCheckProtocol: 'HTTP',
      port: 80,
      protocol: 'TCP',
      targets: [
        {
          id: serviceLbe9a1adbc.ref,
          port: 80,
        },
      ],
      targetType: 'alb',
      vpcId: vpc8378Eb38.ref,
    });
    nlblistenerTargetsGroupDd2a3cb0.addDependency(serviceLbPublicListenerEcsGroup0Cc8688c);
    nlblistenerTargetsGroupDd2a3cb0.addDependency(serviceLbPublicListener46709Eaa);

    if (ecsDefaultClusterMnL3mNnynVpc18E0451a == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc18E0451a' to be undefined. Fixit.`); }
    if (serviceLbPublicListener46709Eaa == null) { throw new Error(`A combination of conditions caused 'serviceLbPublicListener46709Eaa' to be undefined. Fixit.`); }
    if (serviceLbPublicListenerEcsGroup0Cc8688c == null) { throw new Error(`A combination of conditions caused 'serviceLbPublicListenerEcsGroup0Cc8688c' to be undefined. Fixit.`); }
    if (serviceSecurityGroupEea09b68 == null) { throw new Error(`A combination of conditions caused 'serviceSecurityGroupEea09b68' to be undefined. Fixit.`); }
    if (task79114B6b == null) { throw new Error(`A combination of conditions caused 'task79114B6b' to be undefined. Fixit.`); }
    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const service9571Fdd8 = new ecs.CfnService(this, 'Service9571FDD8', {
      cluster: ecsDefaultClusterMnL3mNnynVpc18E0451a.ref,
      deploymentConfiguration: {
        alarms: {
          alarmNames: [
          ],
          enable: false,
          rollback: false,
        },
        maximumPercent: 200,
        minimumHealthyPercent: 50,
      },
      enableEcsManagedTags: false,
      healthCheckGracePeriodSeconds: 60,
      launchType: 'FARGATE',
      loadBalancers: [
        {
          containerName: 'nginx',
          containerPort: 80,
          targetGroupArn: serviceLbPublicListenerEcsGroup0Cc8688c.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            serviceSecurityGroupEea09b68.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: task79114B6b.ref,
    });
    service9571Fdd8.addDependency(serviceLbPublicListenerEcsGroup0Cc8688c);
    service9571Fdd8.addDependency(serviceLbPublicListener46709Eaa);
    service9571Fdd8.addDependency(taskTaskRoleE98524a1);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (nlbBcdb97fe == null) { throw new Error(`A combination of conditions caused 'nlbBcdb97fe' to be undefined. Fixit.`); }
    if (nlblistenerTargetsGroupDd2a3cb0 == null) { throw new Error(`A combination of conditions caused 'nlblistenerTargetsGroupDd2a3cb0' to be undefined. Fixit.`); }
    const nlblistenerBe297616 = new elasticloadbalancingv2.CfnListener(this, 'NlblistenerBE297616', {
      defaultActions: [
        {
          targetGroupArn: nlblistenerTargetsGroupDd2a3cb0.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: nlbBcdb97fe.ref,
      port: 80,
      protocol: 'TCP',
    });

    // Outputs
    this.serviceLoadBalancerDnsec5b149e = serviceLbe9a1adbc.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputServiceLoadBalancerDNSEC5B149E', {
      key: 'ServiceLoadBalancerDNSEC5B149E',
      value: this.serviceLoadBalancerDnsec5b149e!.toString(),
    });
    this.serviceServiceUrl250c0fb6 = [
      'http://',
      serviceLbe9a1adbc.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputServiceServiceURL250C0FB6', {
      key: 'ServiceServiceURL250C0FB6',
      value: this.serviceServiceUrl250c0fb6!.toString(),
    });
    this.nlbEndpoint = [
      'http://',
      nlbBcdb97fe.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputNlbEndpoint', {
      key: 'NlbEndpoint',
      value: this.nlbEndpoint!.toString(),
    });
  }
}

