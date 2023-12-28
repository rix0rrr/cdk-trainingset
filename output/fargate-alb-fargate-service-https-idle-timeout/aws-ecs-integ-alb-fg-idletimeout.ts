import * as cdk from 'aws-cdk-lib';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface AwsEcsIntegAlbFgIdletimeoutProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegAlbFgIdletimeout extends cdk.Stack {
  public readonly myServiceLoadBalancerDns3a083e9f;
  public readonly myServiceServiceUrl1258c56b;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegAlbFgIdletimeoutProps = {}) {
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet2',
        },
      ],
    });

    const myServiceCertificate152F9dda = new certificatemanager.CfnCertificate(this, 'myServiceCertificate152F9DDA', {
      domainName: 'test.example.com',
      domainValidationOptions: [
        {
          domainName: 'test.example.com',
          hostedZoneId: 'fakeId',
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/myService/Certificate',
        },
      ],
      validationMethod: 'DNS',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet2',
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
    const myServiceLbPublicListenerEcsGroup17E9bbc1 = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServiceLBPublicListenerECSGroup17E9BBC1', {
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
    const myServiceLbSecurityGroupFe0ed608 = new ec2.CfnSecurityGroup(this, 'myServiceLBSecurityGroupFE0ED608', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegalbfgidletimeoutmyServiceLB2E81DC64',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 443',
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
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
          ],
        },
      ],
      cpu: '256',
      executionRoleArn: myServiceTaskDefExecutionRole618Cd311.attrArn,
      family: 'awsecsintegalbfgidletimeoutmyServiceTaskDefD16C9528',
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

    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    const myServiceTaskDefTaskRoleDefaultPolicyD48473c0 = new iam.CfnPolicy(this, 'myServiceTaskDefTaskRoleDefaultPolicyD48473C0', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:DescribeLogGroups',
              'logs:DescribeLogStreams',
              'logs:PutLogEvents',
              'ssmmessages:CreateControlChannel',
              'ssmmessages:CreateDataChannel',
              'ssmmessages:OpenControlChannel',
              'ssmmessages:OpenDataChannel',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myServiceTaskDefTaskRoleDefaultPolicyD48473C0',
      roles: [
        myServiceTaskDefTaskRole1C1de6cc.ref,
      ],
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRoleDefaultPolicyD48473c0 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRoleDefaultPolicyD48473c0' to be undefined. Fixit.`); }
    const myServiceSecurityGroupC3b9d4e0 = new ec2.CfnSecurityGroup(this, 'myServiceSecurityGroupC3B9D4E0', {
      groupDescription: 'aws-ecs-integ-alb-fg-idletimeout/myService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    myServiceSecurityGroupC3b9d4e0.addDependency(myServiceTaskDefTaskRoleDefaultPolicyD48473c0);
    myServiceSecurityGroupC3b9d4e0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-alb-fg-idletimeout/Vpc/PublicSubnet2',
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
    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    const myServiceLb168895e1 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'myServiceLB168895E1', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
        {
          key: 'idle_timeout.timeout_seconds',
          value: '120',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        myServiceLbSecurityGroupFe0ed608.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    myServiceLb168895e1.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    myServiceLb168895e1.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    const myServiceLbSecurityGrouptoawsecsintegalbfgidletimeoutmyServiceSecurityGroup60Db85688076c73184 = new ec2.CfnSecurityGroupEgress(this, 'myServiceLBSecurityGrouptoawsecsintegalbfgidletimeoutmyServiceSecurityGroup60DB85688076C73184', {
      groupId: myServiceLbSecurityGroupFe0ed608.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRoleDefaultPolicyD48473c0 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRoleDefaultPolicyD48473c0' to be undefined. Fixit.`); }
    const myServiceSecurityGroupfromawsecsintegalbfgidletimeoutmyServiceLbSecurityGroup1B078e6280039b9a1c = new ec2.CfnSecurityGroupIngress(this, 'myServiceSecurityGroupfromawsecsintegalbfgidletimeoutmyServiceLBSecurityGroup1B078E6280039B9A1C', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: myServiceSecurityGroupC3b9d4e0.attrGroupId,
      sourceSecurityGroupId: myServiceLbSecurityGroupFe0ed608.attrGroupId,
      toPort: 80,
    });
    myServiceSecurityGroupfromawsecsintegalbfgidletimeoutmyServiceLbSecurityGroup1B078e6280039b9a1c.addDependency(myServiceTaskDefTaskRoleDefaultPolicyD48473c0);
    myServiceSecurityGroupfromawsecsintegalbfgidletimeoutmyServiceLbSecurityGroup1B078e6280039b9a1c.addDependency(myServiceTaskDefTaskRole1C1de6cc);

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

    if (myServiceLb168895e1 == null) { throw new Error(`A combination of conditions caused 'myServiceLb168895e1' to be undefined. Fixit.`); }
    const myServiceDnsd76fb53a = new route53.CfnRecordSet(this, 'myServiceDNSD76FB53A', {
      name: 'test.example.com.',
      type: 'A',
      aliasTarget: {
        dnsName: [
          'dualstack.',
          myServiceLb168895e1.attrDnsName,
        ].join(''),
        hostedZoneId: myServiceLb168895e1.attrCanonicalHostedZoneId,
      },
      hostedZoneId: 'fakeId',
    });

    if (myServiceCertificate152F9dda == null) { throw new Error(`A combination of conditions caused 'myServiceCertificate152F9dda' to be undefined. Fixit.`); }
    if (myServiceLb168895e1 == null) { throw new Error(`A combination of conditions caused 'myServiceLb168895e1' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsGroup17E9bbc1 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsGroup17E9bbc1' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerC78ae8a0 = new elasticloadbalancingv2.CfnListener(this, 'myServiceLBPublicListenerC78AE8A0', {
      defaultActions: [
        {
          targetGroupArn: myServiceLbPublicListenerEcsGroup17E9bbc1.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: myServiceLb168895e1.ref,
      certificates: [
        {
          certificateArn: myServiceCertificate152F9dda.ref,
        },
      ],
      port: 443,
      protocol: 'HTTPS',
    });

    if (myServiceLb168895e1 == null) { throw new Error(`A combination of conditions caused 'myServiceLb168895e1' to be undefined. Fixit.`); }
    const myServiceLbPublicRedirectListener0Eef9dca = new elasticloadbalancingv2.CfnListener(this, 'myServiceLBPublicRedirectListener0EEF9DCA', {
      defaultActions: [
        {
          redirectConfig: {
            port: '443',
            protocol: 'HTTPS',
            statusCode: 'HTTP_301',
          },
          type: 'redirect',
        },
      ],
      loadBalancerArn: myServiceLb168895e1.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerC78ae8a0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerC78ae8a0' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsGroup17E9bbc1 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsGroup17E9bbc1' to be undefined. Fixit.`); }
    if (myServiceSecurityGroupC3b9d4e0 == null) { throw new Error(`A combination of conditions caused 'myServiceSecurityGroupC3b9d4e0' to be undefined. Fixit.`); }
    if (myServiceTaskDef7Fb8322a == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDef7Fb8322a' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRoleDefaultPolicyD48473c0 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRoleDefaultPolicyD48473c0' to be undefined. Fixit.`); }
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
      enableEcsManagedTags: true,
      enableExecuteCommand: true,
      healthCheckGracePeriodSeconds: 60,
      launchType: 'FARGATE',
      loadBalancers: [
        {
          containerName: 'web',
          containerPort: 80,
          targetGroupArn: myServiceLbPublicListenerEcsGroup17E9bbc1.ref,
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
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerEcsGroup17E9bbc1);
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerC78ae8a0);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRoleDefaultPolicyD48473c0);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    // Outputs
    this.myServiceLoadBalancerDns3a083e9f = myServiceLb168895e1.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputmyServiceLoadBalancerDNS3A083E9F', {
      key: 'myServiceLoadBalancerDNS3A083E9F',
      value: this.myServiceLoadBalancerDns3a083e9f!.toString(),
    });
    this.myServiceServiceUrl1258c56b = [
      'https://',
      myServiceDnsd76fb53a.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyServiceServiceURL1258C56B', {
      key: 'myServiceServiceURL1258C56B',
      value: this.myServiceServiceUrl1258c56b!.toString(),
    });
  }
}

