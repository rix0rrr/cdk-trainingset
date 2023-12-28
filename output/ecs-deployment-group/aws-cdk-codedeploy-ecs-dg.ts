import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-codedeploy-ecs-dgProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codedeploy-ecs-dg extends cdk.Stack {
  public readonly newTaskDefinition;
  public readonly subnet1Id;
  public readonly subnet2Id;
  public readonly securityGroupId;
  public readonly codeDeployApplicationName;
  public readonly codeDeployDeploymentGroupName;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-codedeploy-ecs-dgProps = {}) {
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
    const canaryConfig039778Dd = new codedeploy.CfnDeploymentConfig(this, 'CanaryConfig039778DD', {
      computePlatform: 'ECS',
      trafficRoutingConfig: {
        timeBasedCanary: {
          canaryInterval: 1,
          canaryPercentage: 20,
        },
        type: 'TimeBasedCanary',
      },
    });

    const ecsCluster97242B84 = new ecs.CfnCluster(this, 'EcsCluster97242B84', {
    });

    const taskDef2TaskRole5A51c717 = new iam.CfnRole(this, 'TaskDef2TaskRole5A51C717', {
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

    const taskDefTaskRole1Edb4a67 = new iam.CfnRole(this, 'TaskDefTaskRole1EDB4A67', {
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

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet2',
        },
      ],
    });

    if (canaryConfig039778Dd == null) { throw new Error(`A combination of conditions caused 'canaryConfig039778Dd' to be undefined. Fixit.`); }
    const blueGreenDgApplication3649479D = new codedeploy.CfnApplication(this, 'BlueGreenDGApplication3649479D', {
      computePlatform: 'ECS',
    });
    blueGreenDgApplication3649479D.addDependency(canaryConfig039778Dd);

    if (canaryConfig039778Dd == null) { throw new Error(`A combination of conditions caused 'canaryConfig039778Dd' to be undefined. Fixit.`); }
    const blueGreenDgServiceRole33E3bcac = new iam.CfnRole(this, 'BlueGreenDGServiceRole33E3BCAC', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codedeploy.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AWSCodeDeployRoleForECS',
        ].join(''),
      ],
    });
    blueGreenDgServiceRole33E3bcac.addDependency(canaryConfig039778Dd);

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const greenTg71a27f2f = new elasticloadbalancingv2.CfnTargetGroup(this, 'GreenTG71A27F2F', {
      healthCheckIntervalSeconds: 5,
      healthCheckTimeoutSeconds: 4,
      healthyThresholdCount: 2,
      matcher: {
        httpCode: '200',
      },
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'deregistration_delay.timeout_seconds',
          value: '30',
        },
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      unhealthyThresholdCount: 3,
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const serviceLbSecurityGroup2Ea7eda1 = new ec2.CfnSecurityGroup(this, 'ServiceLBSecurityGroup2EA7EDA1', {
      groupDescription: 'Automatically created Security Group for ELB awscdkcodedeployecsdgServiceLB2A9D4A45',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 9002',
          fromPort: 9002,
          ipProtocol: 'tcp',
          toPort: 9002,
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (taskDef2TaskRole5A51c717 == null) { throw new Error(`A combination of conditions caused 'taskDef2TaskRole5A51c717' to be undefined. Fixit.`); }
    const taskDef2C6a35a16 = new ecs.CfnTaskDefinition(this, 'TaskDef2C6A35A16', {
      containerDefinitions: [
        {
          essential: true,
          image: 'public.ecr.aws/ecs-sample-image/amazon-ecs-sample:latest',
          name: 'Container',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      family: 'awscdkcodedeployecsdgTaskDef22B5CE8FC',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskDef2TaskRole5A51c717.attrArn,
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'public.ecr.aws/ecs-sample-image/amazon-ecs-sample:latest',
          name: 'Container',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      family: 'awscdkcodedeployecsdgTaskDef25A5A14D',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PrivateSubnet1',
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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PrivateSubnet2',
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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet1',
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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet2',
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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (serviceLbSecurityGroup2Ea7eda1 == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroup2Ea7eda1' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const serviceLbbdad0b9b = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ServiceLBBDAD0B9B', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internal',
      securityGroups: [
        serviceLbSecurityGroup2Ea7eda1.attrGroupId,
      ],
      subnets: [
        vpcPrivateSubnet1Subnet8Bca10e0.ref,
        vpcPrivateSubnet2SubnetCfcdaa7a.ref,
      ],
      type: 'application',
    });

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const serviceLbProdListenerBlueTgGroupB47699cd = new elasticloadbalancingv2.CfnTargetGroup(this, 'ServiceLBProdListenerBlueTGGroupB47699CD', {
      healthCheckIntervalSeconds: 5,
      healthCheckTimeoutSeconds: 4,
      healthyThresholdCount: 2,
      matcher: {
        httpCode: '200',
      },
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'deregistration_delay.timeout_seconds',
          value: '30',
        },
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      unhealthyThresholdCount: 3,
      vpcId: vpcb9e5f0b4.ref,
    });
    serviceLbProdListenerBlueTgGroupB47699cd.addDependency(greenTg71a27f2f);

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

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbbdad0b9b == null) { throw new Error(`A combination of conditions caused 'serviceLbbdad0b9b' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    const serviceLbProdListener0E7627ee = new elasticloadbalancingv2.CfnListener(this, 'ServiceLBProdListener0E7627EE', {
      defaultActions: [
        {
          targetGroupArn: serviceLbProdListenerBlueTgGroupB47699cd.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: serviceLbbdad0b9b.ref,
      port: 80,
      protocol: 'HTTP',
    });
    serviceLbProdListener0E7627ee.addDependency(greenTg71a27f2f);

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbbdad0b9b == null) { throw new Error(`A combination of conditions caused 'serviceLbbdad0b9b' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    const serviceLbTestListener3Ea49939 = new elasticloadbalancingv2.CfnListener(this, 'ServiceLBTestListener3EA49939', {
      defaultActions: [
        {
          targetGroupArn: greenTg71a27f2f.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: serviceLbbdad0b9b.ref,
      port: 9002,
      protocol: 'HTTP',
    });
    serviceLbTestListener3Ea49939.addDependency(serviceLbProdListenerBlueTgGroupB47699cd);

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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet1',
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
          value: 'aws-cdk-codedeploy-ecs-dg/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (serviceLbProdListener0E7627ee == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListener0E7627ee' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    const blue5xx7E9798a6 = new cloudwatch.CfnAlarm(this, 'Blue5xx7E9798A6', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      alarmName: 'aws-cdk-codedeploy-ecs-dg-Http-500-Blue',
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: serviceLbProdListenerBlueTgGroupB47699cd.attrTargetGroupFullName,
        },
      ],
      metricName: 'HTTPCode_Target_5XX_Count',
      namespace: 'AWS/ApplicationELB',
      period: 60,
      statistic: 'Sum',
      threshold: 1,
    });

    if (serviceLbProdListener0E7627ee == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListener0E7627ee' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    const blueUnhealthyHosts48919A97 = new cloudwatch.CfnAlarm(this, 'BlueUnhealthyHosts48919A97', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 2,
      alarmName: 'aws-cdk-codedeploy-ecs-dg-Unhealthy-Hosts-Blue',
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', serviceLbProdListener0E7627ee.ref)),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: serviceLbProdListenerBlueTgGroupB47699cd.attrTargetGroupFullName,
        },
      ],
      metricName: 'UnHealthyHostCount',
      namespace: 'AWS/ApplicationELB',
      period: 300,
      statistic: 'Average',
      threshold: 1,
    });

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    if (taskDef2C6a35a16 == null) { throw new Error(`A combination of conditions caused 'taskDef2C6a35a16' to be undefined. Fixit.`); }
    if (taskDef2TaskRole5A51c717 == null) { throw new Error(`A combination of conditions caused 'taskDef2TaskRole5A51c717' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const fargateServiceSecurityGroup0A0e79cb = new ec2.CfnSecurityGroup(this, 'FargateServiceSecurityGroup0A0E79CB', {
      groupDescription: 'aws-cdk-codedeploy-ecs-dg/FargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    fargateServiceSecurityGroup0A0e79cb.addDependency(greenTg71a27f2f);
    fargateServiceSecurityGroup0A0e79cb.addDependency(serviceLbTestListener3Ea49939);
    fargateServiceSecurityGroup0A0e79cb.addDependency(taskDef54694570);
    fargateServiceSecurityGroup0A0e79cb.addDependency(taskDefTaskRole1Edb4a67);
    fargateServiceSecurityGroup0A0e79cb.addDependency(taskDef2C6a35a16);
    fargateServiceSecurityGroup0A0e79cb.addDependency(taskDef2TaskRole5A51c717);

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    const green5xx1A511a06 = new cloudwatch.CfnAlarm(this, 'Green5xx1A511A06', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      alarmName: 'aws-cdk-codedeploy-ecs-dg-Http-500-Green',
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: greenTg71a27f2f.attrTargetGroupFullName,
        },
      ],
      metricName: 'HTTPCode_Target_5XX_Count',
      namespace: 'AWS/ApplicationELB',
      period: 60,
      statistic: 'Sum',
      threshold: 1,
    });

    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    const greenUnhealthyHosts8D9d09c1 = new cloudwatch.CfnAlarm(this, 'GreenUnhealthyHosts8D9D09C1', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 2,
      alarmName: 'aws-cdk-codedeploy-ecs-dg-Unhealthy-Hosts-Green',
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', serviceLbTestListener3Ea49939.ref)),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: greenTg71a27f2f.attrTargetGroupFullName,
        },
      ],
      metricName: 'UnHealthyHostCount',
      namespace: 'AWS/ApplicationELB',
      period: 300,
      statistic: 'Average',
      threshold: 1,
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

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (fargateServiceSecurityGroup0A0e79cb == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup0A0e79cb' to be undefined. Fixit.`); }
    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbProdListener0E7627ee == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListener0E7627ee' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    if (taskDef2C6a35a16 == null) { throw new Error(`A combination of conditions caused 'taskDef2C6a35a16' to be undefined. Fixit.`); }
    if (taskDef2TaskRole5A51c717 == null) { throw new Error(`A combination of conditions caused 'taskDef2TaskRole5A51c717' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const fargateServiceAc2b3b85 = new ecs.CfnService(this, 'FargateServiceAC2B3B85', {
      cluster: ecsCluster97242B84.ref,
      deploymentConfiguration: {
        maximumPercent: 200,
        minimumHealthyPercent: 50,
      },
      deploymentController: {
        type: 'CODE_DEPLOY',
      },
      enableEcsManagedTags: false,
      healthCheckGracePeriodSeconds: 60,
      launchType: 'FARGATE',
      loadBalancers: [
        {
          containerName: 'Container',
          containerPort: 80,
          targetGroupArn: serviceLbProdListenerBlueTgGroupB47699cd.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            fargateServiceSecurityGroup0A0e79cb.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet8Bca10e0.ref,
            vpcPrivateSubnet2SubnetCfcdaa7a.ref,
          ],
        },
      },
      taskDefinition: 'awscdkcodedeployecsdgTaskDef25A5A14D',
    });
    fargateServiceAc2b3b85.addDependency(greenTg71a27f2f);
    fargateServiceAc2b3b85.addDependency(serviceLbProdListenerBlueTgGroupB47699cd);
    fargateServiceAc2b3b85.addDependency(serviceLbProdListener0E7627ee);
    fargateServiceAc2b3b85.addDependency(serviceLbTestListener3Ea49939);
    fargateServiceAc2b3b85.addDependency(taskDef54694570);
    fargateServiceAc2b3b85.addDependency(taskDefTaskRole1Edb4a67);
    fargateServiceAc2b3b85.addDependency(taskDef2C6a35a16);
    fargateServiceAc2b3b85.addDependency(taskDef2TaskRole5A51c717);

    if (fargateServiceSecurityGroup0A0e79cb == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup0A0e79cb' to be undefined. Fixit.`); }
    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (serviceLbSecurityGroup2Ea7eda1 == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroup2Ea7eda1' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    if (taskDef2C6a35a16 == null) { throw new Error(`A combination of conditions caused 'taskDef2C6a35a16' to be undefined. Fixit.`); }
    if (taskDef2TaskRole5A51c717 == null) { throw new Error(`A combination of conditions caused 'taskDef2TaskRole5A51c717' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119 = new ec2.CfnSecurityGroupIngress(this, 'FargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLBSecurityGroupEC967688803C3B1119', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: fargateServiceSecurityGroup0A0e79cb.attrGroupId,
      sourceSecurityGroupId: serviceLbSecurityGroup2Ea7eda1.attrGroupId,
      toPort: 80,
    });
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(greenTg71a27f2f);
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(serviceLbTestListener3Ea49939);
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(taskDef54694570);
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(taskDefTaskRole1Edb4a67);
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(taskDef2C6a35a16);
    fargateServiceSecurityGroupfromawscdkcodedeployecsdgServiceLbSecurityGroupEc967688803c3b1119.addDependency(taskDef2TaskRole5A51c717);

    if (fargateServiceSecurityGroup0A0e79cb == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup0A0e79cb' to be undefined. Fixit.`); }
    if (serviceLbSecurityGroup2Ea7eda1 == null) { throw new Error(`A combination of conditions caused 'serviceLbSecurityGroup2Ea7eda1' to be undefined. Fixit.`); }
    const serviceLbSecurityGrouptoawscdkcodedeployecsdgFargateServiceSecurityGroup64C2b62e8071d2502f = new ec2.CfnSecurityGroupEgress(this, 'ServiceLBSecurityGrouptoawscdkcodedeployecsdgFargateServiceSecurityGroup64C2B62E8071D2502F', {
      groupId: serviceLbSecurityGroup2Ea7eda1.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: fargateServiceSecurityGroup0A0e79cb.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (blue5xx7E9798a6 == null) { throw new Error(`A combination of conditions caused 'blue5xx7E9798a6' to be undefined. Fixit.`); }
    if (blueGreenDgApplication3649479D == null) { throw new Error(`A combination of conditions caused 'blueGreenDgApplication3649479D' to be undefined. Fixit.`); }
    if (blueGreenDgServiceRole33E3bcac == null) { throw new Error(`A combination of conditions caused 'blueGreenDgServiceRole33E3bcac' to be undefined. Fixit.`); }
    if (blueUnhealthyHosts48919A97 == null) { throw new Error(`A combination of conditions caused 'blueUnhealthyHosts48919A97' to be undefined. Fixit.`); }
    if (canaryConfig039778Dd == null) { throw new Error(`A combination of conditions caused 'canaryConfig039778Dd' to be undefined. Fixit.`); }
    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (fargateServiceAc2b3b85 == null) { throw new Error(`A combination of conditions caused 'fargateServiceAc2b3b85' to be undefined. Fixit.`); }
    if (green5xx1A511a06 == null) { throw new Error(`A combination of conditions caused 'green5xx1A511a06' to be undefined. Fixit.`); }
    if (greenTg71a27f2f == null) { throw new Error(`A combination of conditions caused 'greenTg71a27f2f' to be undefined. Fixit.`); }
    if (greenUnhealthyHosts8D9d09c1 == null) { throw new Error(`A combination of conditions caused 'greenUnhealthyHosts8D9d09c1' to be undefined. Fixit.`); }
    if (serviceLbProdListener0E7627ee == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListener0E7627ee' to be undefined. Fixit.`); }
    if (serviceLbProdListenerBlueTgGroupB47699cd == null) { throw new Error(`A combination of conditions caused 'serviceLbProdListenerBlueTgGroupB47699cd' to be undefined. Fixit.`); }
    if (serviceLbTestListener3Ea49939 == null) { throw new Error(`A combination of conditions caused 'serviceLbTestListener3Ea49939' to be undefined. Fixit.`); }
    const blueGreenDg373ab9b0 = new codedeploy.CfnDeploymentGroup(this, 'BlueGreenDG373AB9B0', {
      applicationName: blueGreenDgApplication3649479D.ref,
      serviceRoleArn: blueGreenDgServiceRole33E3bcac.attrArn,
      alarmConfiguration: {
        alarms: [
          {
            name: blueUnhealthyHosts48919A97.ref,
          },
          {
            name: blue5xx7E9798a6.ref,
          },
          {
            name: greenUnhealthyHosts8D9d09c1.ref,
          },
          {
            name: green5xx1A511a06.ref,
          },
        ],
        enabled: true,
      },
      autoRollbackConfiguration: {
        enabled: true,
        events: [
          'DEPLOYMENT_FAILURE',
          'DEPLOYMENT_STOP_ON_REQUEST',
          'DEPLOYMENT_STOP_ON_ALARM',
        ],
      },
      blueGreenDeploymentConfiguration: {
        deploymentReadyOption: {
          actionOnTimeout: 'CONTINUE_DEPLOYMENT',
          waitTimeInMinutes: 0,
        },
        terminateBlueInstancesOnDeploymentSuccess: {
          action: 'TERMINATE',
          terminationWaitTimeInMinutes: 1,
        },
      },
      deploymentConfigName: canaryConfig039778Dd.ref,
      deploymentStyle: {
        deploymentOption: 'WITH_TRAFFIC_CONTROL',
        deploymentType: 'BLUE_GREEN',
      },
      ecsServices: [
        {
          clusterName: ecsCluster97242B84.ref,
          serviceName: fargateServiceAc2b3b85.attrName,
        },
      ],
      loadBalancerInfo: {
        targetGroupPairInfoList: [
          {
            prodTrafficRoute: {
              listenerArns: [
                serviceLbProdListener0E7627ee.ref,
              ],
            },
            targetGroups: [
              {
                name: serviceLbProdListenerBlueTgGroupB47699cd.attrTargetGroupName,
              },
              {
                name: greenTg71a27f2f.attrTargetGroupName,
              },
            ],
            testTrafficRoute: {
              listenerArns: [
                serviceLbTestListener3Ea49939.ref,
              ],
            },
          },
        ],
      },
    });
    blueGreenDg373ab9b0.addDependency(canaryConfig039778Dd);

    // Outputs
    this.newTaskDefinition = taskDef2C6a35a16.ref;
    new cdk.CfnOutput(this, 'CfnOutputNewTaskDefinition', {
      key: 'NewTaskDefinition',
      value: this.newTaskDefinition!.toString(),
    });
    this.subnet1Id = vpcPrivateSubnet1Subnet8Bca10e0.ref;
    new cdk.CfnOutput(this, 'CfnOutputSubnet1Id', {
      key: 'Subnet1Id',
      value: this.subnet1Id!.toString(),
    });
    this.subnet2Id = vpcPrivateSubnet2SubnetCfcdaa7a.ref;
    new cdk.CfnOutput(this, 'CfnOutputSubnet2Id', {
      key: 'Subnet2Id',
      value: this.subnet2Id!.toString(),
    });
    this.securityGroupId = fargateServiceSecurityGroup0A0e79cb.attrGroupId;
    new cdk.CfnOutput(this, 'CfnOutputSecurityGroupId', {
      key: 'SecurityGroupId',
      value: this.securityGroupId!.toString(),
    });
    this.codeDeployApplicationName = blueGreenDgApplication3649479D.ref;
    new cdk.CfnOutput(this, 'CfnOutputCodeDeployApplicationName', {
      key: 'CodeDeployApplicationName',
      value: this.codeDeployApplicationName!.toString(),
    });
    this.codeDeployDeploymentGroupName = blueGreenDg373ab9b0.ref;
    new cdk.CfnOutput(this, 'CfnOutputCodeDeployDeploymentGroupName', {
      key: 'CodeDeployDeploymentGroupName',
      value: this.codeDeployDeploymentGroupName!.toString(),
    });
  }
}

