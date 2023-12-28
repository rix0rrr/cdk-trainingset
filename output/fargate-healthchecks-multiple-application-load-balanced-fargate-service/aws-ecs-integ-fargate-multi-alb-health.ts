import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-ecs-integ-fargate-multi-alb-healthProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-fargate-multi-alb-health extends cdk.Stack {
  public readonly myServiceLoadBalancerDnSlb1341Ee21a;
  public readonly myServiceServiceUrLlb1httpAfa12fd3;
  public readonly myServiceLoadBalancerDnSlb2Ddce46c8;
  public readonly myServiceServiceUrLlb2http935C1443;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-fargate-multi-alb-healthProps = {}) {
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
    const clusterEb0386a7 = new ecs.CfnCluster(this, 'ClusterEB0386A7', {
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet2',
        },
      ],
    });

    const myServiceTaskDefExecutionRole618Cd311 = new iam.CfnRole(this, 'myServiceTaskDefExecutionRole618CD311', {
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

    const myServiceTaskDefTaskRole1C1de6cc = new iam.CfnRole(this, 'myServiceTaskDefTaskRole1C1DE6CC', {
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

    const myServiceTaskDefwebLogGroupA1767f2c = new logs.CfnLogGroup(this, 'myServiceTaskDefwebLogGroupA1767F2C', {
    });
    myServiceTaskDefwebLogGroupA1767f2c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    const myServiceSecurityGroupC3b9d4e0 = new ec2.CfnSecurityGroup(this, 'myServiceSecurityGroupC3B9D4E0', {
      groupDescription: 'aws-ecs-integ-fargate-multi-alb-health/myService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    myServiceSecurityGroupC3b9d4e0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    if (myServiceTaskDefExecutionRole618Cd311 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefExecutionRole618Cd311' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefwebLogGroupA1767f2c == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefwebLogGroupA1767f2c' to be undefined. Fixit.`); }
    const myServiceTaskDef7Fb8322a = new ecs.CfnTaskDefinition(this, 'myServiceTaskDef7FB8322A', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': myServiceTaskDefwebLogGroupA1767f2c.ref,
              'awslogs-stream-prefix': 'myService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
            {
              containerPort: 90,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      executionRoleArn: myServiceTaskDefExecutionRole618Cd311.attrArn,
      family: 'awsecsintegfargatemultialbhealthmyServiceTaskDefDE804C7F',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: myServiceTaskDefTaskRole1C1de6cc.attrArn,
    });

    if (myServiceTaskDefExecutionRole618Cd311 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefExecutionRole618Cd311' to be undefined. Fixit.`); }
    if (myServiceTaskDefwebLogGroupA1767f2c == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefwebLogGroupA1767f2c' to be undefined. Fixit.`); }
    const myServiceTaskDefExecutionRoleDefaultPolicyBdaec571 = new iam.CfnPolicy(this, 'myServiceTaskDefExecutionRoleDefaultPolicyBDAEC571', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: myServiceTaskDefwebLogGroupA1767f2c.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myServiceTaskDefExecutionRoleDefaultPolicyBDAEC571',
      roles: [
        myServiceTaskDefExecutionRole618Cd311.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServicelb1SecurityGroup342C51ea = new ec2.CfnSecurityGroup(this, 'myServicelb1SecurityGroup342C51EA', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegfargatemultialbhealthmyServicelb15CA76551',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServicelb1listener1ECSTargetGroupweb80GroupC3F9339A', {
      healthCheckIntervalSeconds: 30,
      healthCheckProtocol: 'HTTP',
      healthCheckTimeoutSeconds: 10,
      healthyThresholdCount: 2,
      matcher: {
        httpCode: '200',
      },
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      unhealthyThresholdCount: 2,
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServicelb2SecurityGroupEb00b5b9 = new ec2.CfnSecurityGroup(this, 'myServicelb2SecurityGroupEB00B5B9', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegfargatemultialbhealthmyServicelb29F876A86',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServicelb2listener2EcsTargetGroupweb90Group6841F924 = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServicelb2listener2ECSTargetGroupweb90Group6841F924', {
      healthCheckIntervalSeconds: 30,
      healthCheckProtocol: 'HTTP',
      healthCheckTimeoutSeconds: 10,
      healthyThresholdCount: 2,
      matcher: {
        httpCode: '200',
      },
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      unhealthyThresholdCount: 2,
      vpcId: vpc8378Eb38.ref,
    });

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

    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServicelb1SecurityGroup342C51ea == null) { throw new Error(`A combination of conditions caused 'myServicelb1SecurityGroup342C51ea' to be undefined. Fixit.`); }
    const myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb1SecurityGroupF186685f80e1471e22 = new ec2.CfnSecurityGroupIngress(this, 'myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb1SecurityGroupF186685F80E1471E22', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      sourceSecurityGroupId: myServicelb1SecurityGroup342C51ea.attrGroupId,
      toPort: 80,
    });
    myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb1SecurityGroupF186685f80e1471e22.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServicelb2SecurityGroupEb00b5b9 == null) { throw new Error(`A combination of conditions caused 'myServicelb2SecurityGroupEb00b5b9' to be undefined. Fixit.`); }
    const myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb2SecurityGroup271B292a9014bc1af0 = new ec2.CfnSecurityGroupIngress(this, 'myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb2SecurityGroup271B292A9014BC1AF0', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 90,
      groupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      sourceSecurityGroupId: myServicelb2SecurityGroupEb00b5b9.attrGroupId,
      toPort: 90,
    });
    myServiceSecurityGroupfromawsecsintegfargatemultialbhealthmyServicelb2SecurityGroup271B292a9014bc1af0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServicelb1SecurityGroup342C51ea == null) { throw new Error(`A combination of conditions caused 'myServicelb1SecurityGroup342C51ea' to be undefined. Fixit.`); }
    const myServicelb1SecurityGrouptoawsecsintegfargatemultialbhealthmyServiceSecurityGroup340Bcafa80bc12b528 = new ec2.CfnSecurityGroupEgress(this, 'myServicelb1SecurityGrouptoawsecsintegfargatemultialbhealthmyServiceSecurityGroup340BCAFA80BC12B528', {
      groupId: myServicelb1SecurityGroup342C51ea.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServicelb2SecurityGroupEb00b5b9 == null) { throw new Error(`A combination of conditions caused 'myServicelb2SecurityGroupEb00b5b9' to be undefined. Fixit.`); }
    const myServicelb2SecurityGrouptoawsecsintegfargatemultialbhealthmyServiceSecurityGroup340Bcafa90b8acadca = new ec2.CfnSecurityGroupEgress(this, 'myServicelb2SecurityGrouptoawsecsintegfargatemultialbhealthmyServiceSecurityGroup340BCAFA90B8ACADCA', {
      groupId: myServicelb2SecurityGroupEb00b5b9.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      fromPort: 90,
      toPort: 90,
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
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip3c605a87 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip3c605a87' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9182C01d = new ec2.CfnNatGateway(this, 'VpcPublicSubnet2NATGateway9182C01D', {
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
      allocationId: vpcPublicSubnet2Eip3c605a87.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-multi-alb-health/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    if (myServicelb1SecurityGroup342C51ea == null) { throw new Error(`A combination of conditions caused 'myServicelb1SecurityGroup342C51ea' to be undefined. Fixit.`); }
    const myServicelb1Fa8cbe12 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'myServicelb1FA8CBE12', {
      name: 'lb1',
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        myServicelb1SecurityGroup342C51ea.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    myServicelb1Fa8cbe12.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    myServicelb1Fa8cbe12.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    myServicelb1Fa8cbe12.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    myServicelb1Fa8cbe12.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    if (myServicelb2SecurityGroupEb00b5b9 == null) { throw new Error(`A combination of conditions caused 'myServicelb2SecurityGroupEb00b5b9' to be undefined. Fixit.`); }
    const myServicelb2C84c7bcb = new elasticloadbalancingv2.CfnLoadBalancer(this, 'myServicelb2C84C7BCB', {
      name: 'lb2',
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        myServicelb2SecurityGroupEb00b5b9.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    myServicelb2C84c7bcb.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    myServicelb2C84c7bcb.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    myServicelb2C84c7bcb.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    myServicelb2C84c7bcb.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
    });

    if (myServicelb1Fa8cbe12 == null) { throw new Error(`A combination of conditions caused 'myServicelb1Fa8cbe12' to be undefined. Fixit.`); }
    if (myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a == null) { throw new Error(`A combination of conditions caused 'myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a' to be undefined. Fixit.`); }
    const myServicelb1listener15Ed0e805 = new elasticloadbalancingv2.CfnListener(this, 'myServicelb1listener15ED0E805', {
      defaultActions: [
        {
          targetGroupArn: myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: myServicelb1Fa8cbe12.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (myServicelb2C84c7bcb == null) { throw new Error(`A combination of conditions caused 'myServicelb2C84c7bcb' to be undefined. Fixit.`); }
    if (myServicelb2listener2EcsTargetGroupweb90Group6841F924 == null) { throw new Error(`A combination of conditions caused 'myServicelb2listener2EcsTargetGroupweb90Group6841F924' to be undefined. Fixit.`); }
    const myServicelb2listener2Aa6970eb = new elasticloadbalancingv2.CfnListener(this, 'myServicelb2listener2AA6970EB', {
      defaultActions: [
        {
          targetGroupArn: myServicelb2listener2EcsTargetGroupweb90Group6841F924.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: myServicelb2C84c7bcb.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServiceTaskDef7Fb8322a == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDef7Fb8322a' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServicelb1listener15Ed0e805 == null) { throw new Error(`A combination of conditions caused 'myServicelb1listener15Ed0e805' to be undefined. Fixit.`); }
    if (myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a == null) { throw new Error(`A combination of conditions caused 'myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a' to be undefined. Fixit.`); }
    if (myServicelb2listener2Aa6970eb == null) { throw new Error(`A combination of conditions caused 'myServicelb2listener2Aa6970eb' to be undefined. Fixit.`); }
    if (myServicelb2listener2EcsTargetGroupweb90Group6841F924 == null) { throw new Error(`A combination of conditions caused 'myServicelb2listener2EcsTargetGroupweb90Group6841F924' to be undefined. Fixit.`); }
    const myServiceB0b6faa0 = new ecs.CfnService(this, 'myServiceB0B6FAA0', {
      cluster: clusterEb0386a7.ref,
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
          containerName: 'web',
          containerPort: 80,
          targetGroupArn: myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a.ref,
        },
        {
          containerName: 'web',
          containerPort: 90,
          targetGroupArn: myServicelb2listener2EcsTargetGroupweb90Group6841F924.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            myServiceSecurityGroupC3b9d4e0.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: myServiceTaskDef7Fb8322a.ref,
    });
    myServiceB0b6faa0.addDependency(myServicelb1listener1EcsTargetGroupweb80GroupC3f9339a);
    myServiceB0b6faa0.addDependency(myServicelb1listener15Ed0e805);
    myServiceB0b6faa0.addDependency(myServicelb2listener2EcsTargetGroupweb90Group6841F924);
    myServiceB0b6faa0.addDependency(myServicelb2listener2Aa6970eb);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    // Outputs
    this.myServiceLoadBalancerDnSlb1341Ee21a = myServicelb1Fa8cbe12.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputmyServiceLoadBalancerDNSlb1341EE21A', {
      key: 'myServiceLoadBalancerDNSlb1341EE21A',
      value: this.myServiceLoadBalancerDnSlb1341Ee21a!.toString(),
    });
    this.myServiceServiceUrLlb1httpAfa12fd3 = [
      'http://',
      myServicelb1Fa8cbe12.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyServiceServiceURLlb1httpAFA12FD3', {
      key: 'myServiceServiceURLlb1httpAFA12FD3',
      value: this.myServiceServiceUrLlb1httpAfa12fd3!.toString(),
    });
    this.myServiceLoadBalancerDnSlb2Ddce46c8 = myServicelb2C84c7bcb.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputmyServiceLoadBalancerDNSlb2DDCE46C8', {
      key: 'myServiceLoadBalancerDNSlb2DDCE46C8',
      value: this.myServiceLoadBalancerDnSlb2Ddce46c8!.toString(),
    });
    this.myServiceServiceUrLlb2http935C1443 = [
      'http://',
      myServicelb2C84c7bcb.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyServiceServiceURLlb2http935C1443', {
      key: 'myServiceServiceURLlb2http935C1443',
      value: this.myServiceServiceUrLlb2http935C1443!.toString(),
    });
  }
}

