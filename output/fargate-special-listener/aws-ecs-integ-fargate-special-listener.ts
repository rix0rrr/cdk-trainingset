import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-ecs-integ-fargate-special-listenerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-fargate-special-listener extends cdk.Stack {
  public readonly fargateNlbServiceLoadBalancerDns20395db7;
  public readonly fargateAlbServiceLoadBalancerDnsa91678bc;
  public readonly fargateAlbServiceServiceUrl101f25cc;
  public readonly albDnsName;
  public readonly nlbDnsName;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-fargate-special-listenerProps = {}) {
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

    const fargateAlbServiceTaskDefExecutionRole5Fc6f0d2 = new iam.CfnRole(this, 'FargateAlbServiceTaskDefExecutionRole5FC6F0D2', {
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

    const fargateAlbServiceTaskDefTaskRoleC9259c01 = new iam.CfnRole(this, 'FargateAlbServiceTaskDefTaskRoleC9259C01', {
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

    const fargateAlbServiceTaskDefwebLogGroup0Bc14b46 = new logs.CfnLogGroup(this, 'FargateAlbServiceTaskDefwebLogGroup0BC14B46', {
    });
    fargateAlbServiceTaskDefwebLogGroup0Bc14b46.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const fargateNlbServiceTaskDefExecutionRole5E165f68 = new iam.CfnRole(this, 'FargateNlbServiceTaskDefExecutionRole5E165F68', {
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

    const fargateNlbServiceTaskDefTaskRoleD95d755c = new iam.CfnRole(this, 'FargateNlbServiceTaskDefTaskRoleD95D755C', {
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

    const fargateNlbServiceTaskDefwebLogGroup3547138D = new logs.CfnLogGroup(this, 'FargateNlbServiceTaskDefwebLogGroup3547138D', {
    });
    fargateNlbServiceTaskDefwebLogGroup3547138D.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateAlbServiceLbPublicListenerEcsGroupB3826700 = new elasticloadbalancingv2.CfnTargetGroup(this, 'FargateAlbServiceLBPublicListenerECSGroupB3826700', {
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
    const fargateAlbServiceLbSecurityGroupE10f3df3 = new ec2.CfnSecurityGroup(this, 'FargateAlbServiceLBSecurityGroupE10F3DF3', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegfargatespeciallistenerFargateAlbServiceLBE2F6C139',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 2015',
          fromPort: 2015,
          ipProtocol: 'tcp',
          toPort: 2015,
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (fargateAlbServiceTaskDefTaskRoleC9259c01 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefTaskRoleC9259c01' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateAlbServiceSecurityGroupF5affc6e = new ec2.CfnSecurityGroup(this, 'FargateAlbServiceSecurityGroupF5AFFC6E', {
      groupDescription: 'aws-ecs-integ-fargate-special-listener/FargateAlbService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    fargateAlbServiceSecurityGroupF5affc6e.addDependency(fargateAlbServiceTaskDefTaskRoleC9259c01);

    if (fargateAlbServiceTaskDefExecutionRole5Fc6f0d2 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefExecutionRole5Fc6f0d2' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDefTaskRoleC9259c01 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefTaskRoleC9259c01' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDefwebLogGroup0Bc14b46 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefwebLogGroup0Bc14b46' to be undefined. Fixit.`); }
    const fargateAlbServiceTaskDef291471C0 = new ecs.CfnTaskDefinition(this, 'FargateAlbServiceTaskDef291471C0', {
      containerDefinitions: [
        {
          essential: true,
          image: 'abiosoft/caddy',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': fargateAlbServiceTaskDefwebLogGroup0Bc14b46.ref,
              'awslogs-stream-prefix': 'FargateAlbService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 2015,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      executionRoleArn: fargateAlbServiceTaskDefExecutionRole5Fc6f0d2.attrArn,
      family: 'awsecsintegfargatespeciallistenerFargateAlbServiceTaskDef9DBF29E5',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: fargateAlbServiceTaskDefTaskRoleC9259c01.attrArn,
    });

    if (fargateAlbServiceTaskDefExecutionRole5Fc6f0d2 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefExecutionRole5Fc6f0d2' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDefwebLogGroup0Bc14b46 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefwebLogGroup0Bc14b46' to be undefined. Fixit.`); }
    const fargateAlbServiceTaskDefExecutionRoleDefaultPolicyD03ca136 = new iam.CfnPolicy(this, 'FargateAlbServiceTaskDefExecutionRoleDefaultPolicyD03CA136', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: fargateAlbServiceTaskDefwebLogGroup0Bc14b46.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateAlbServiceTaskDefExecutionRoleDefaultPolicyD03CA136',
      roles: [
        fargateAlbServiceTaskDefExecutionRole5Fc6f0d2.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateNlbServiceLbPublicListenerEcsGroup7501571D = new elasticloadbalancingv2.CfnTargetGroup(this, 'FargateNlbServiceLBPublicListenerECSGroup7501571D', {
      port: 2015,
      protocol: 'TCP',
      targetType: 'ip',
      vpcId: vpc8378Eb38.ref,
    });

    if (fargateNlbServiceTaskDefTaskRoleD95d755c == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefTaskRoleD95d755c' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateNlbServiceSecurityGroup4718761F = new ec2.CfnSecurityGroup(this, 'FargateNlbServiceSecurityGroup4718761F', {
      groupDescription: 'aws-ecs-integ-fargate-special-listener/FargateNlbService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    fargateNlbServiceSecurityGroup4718761F.addDependency(fargateNlbServiceTaskDefTaskRoleD95d755c);

    if (fargateNlbServiceTaskDefExecutionRole5E165f68 == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefExecutionRole5E165f68' to be undefined. Fixit.`); }
    if (fargateNlbServiceTaskDefTaskRoleD95d755c == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefTaskRoleD95d755c' to be undefined. Fixit.`); }
    if (fargateNlbServiceTaskDefwebLogGroup3547138D == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefwebLogGroup3547138D' to be undefined. Fixit.`); }
    const fargateNlbServiceTaskDef03021E9a = new ecs.CfnTaskDefinition(this, 'FargateNlbServiceTaskDef03021E9A', {
      containerDefinitions: [
        {
          essential: true,
          image: 'abiosoft/caddy',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': fargateNlbServiceTaskDefwebLogGroup3547138D.ref,
              'awslogs-stream-prefix': 'FargateNlbService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 2015,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      executionRoleArn: fargateNlbServiceTaskDefExecutionRole5E165f68.attrArn,
      family: 'awsecsintegfargatespeciallistenerFargateNlbServiceTaskDefC2C53C85',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: fargateNlbServiceTaskDefTaskRoleD95d755c.attrArn,
    });

    if (fargateNlbServiceTaskDefExecutionRole5E165f68 == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefExecutionRole5E165f68' to be undefined. Fixit.`); }
    if (fargateNlbServiceTaskDefwebLogGroup3547138D == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefwebLogGroup3547138D' to be undefined. Fixit.`); }
    const fargateNlbServiceTaskDefExecutionRoleDefaultPolicyC8326d5a = new iam.CfnPolicy(this, 'FargateNlbServiceTaskDefExecutionRoleDefaultPolicyC8326D5A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: fargateNlbServiceTaskDefwebLogGroup3547138D.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateNlbServiceTaskDefExecutionRoleDefaultPolicyC8326D5A',
      roles: [
        fargateNlbServiceTaskDefExecutionRole5E165f68.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (fargateAlbServiceLbSecurityGroupE10f3df3 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbSecurityGroupE10f3df3' to be undefined. Fixit.`); }
    if (fargateAlbServiceSecurityGroupF5affc6e == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceSecurityGroupF5affc6e' to be undefined. Fixit.`); }
    const fargateAlbServiceLbSecurityGrouptoawsecsintegfargatespeciallistenerFargateAlbServiceSecurityGroupAb131faf20155dca13d5 = new ec2.CfnSecurityGroupEgress(this, 'FargateAlbServiceLBSecurityGrouptoawsecsintegfargatespeciallistenerFargateAlbServiceSecurityGroupAB131FAF20155DCA13D5', {
      groupId: fargateAlbServiceLbSecurityGroupE10f3df3.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: fargateAlbServiceSecurityGroupF5affc6e.attrGroupId,
      fromPort: 2015,
      toPort: 2015,
    });

    if (fargateAlbServiceLbSecurityGroupE10f3df3 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbSecurityGroupE10f3df3' to be undefined. Fixit.`); }
    if (fargateAlbServiceSecurityGroupF5affc6e == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceSecurityGroupF5affc6e' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDefTaskRoleC9259c01 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefTaskRoleC9259c01' to be undefined. Fixit.`); }
    const fargateAlbServiceSecurityGroupfromawsecsintegfargatespeciallistenerFargateAlbServiceLbSecurityGroup0327D42e20157f514694 = new ec2.CfnSecurityGroupIngress(this, 'FargateAlbServiceSecurityGroupfromawsecsintegfargatespeciallistenerFargateAlbServiceLBSecurityGroup0327D42E20157F514694', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 2015,
      groupId: fargateAlbServiceSecurityGroupF5affc6e.attrGroupId,
      sourceSecurityGroupId: fargateAlbServiceLbSecurityGroupE10f3df3.attrGroupId,
      toPort: 2015,
    });
    fargateAlbServiceSecurityGroupfromawsecsintegfargatespeciallistenerFargateAlbServiceLbSecurityGroup0327D42e20157f514694.addDependency(fargateAlbServiceTaskDefTaskRoleC9259c01);

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

    if (fargateAlbServiceLbSecurityGroupE10f3df3 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbSecurityGroupE10f3df3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const fargateAlbServiceLba7128551 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'FargateAlbServiceLBA7128551', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        fargateAlbServiceLbSecurityGroupE10f3df3.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    fargateAlbServiceLba7128551.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    fargateAlbServiceLba7128551.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    fargateAlbServiceLba7128551.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    fargateAlbServiceLba7128551.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const fargateNlbServiceLbc7004b25 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'FargateNlbServiceLBC7004B25', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'network',
    });
    fargateNlbServiceLbc7004b25.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    fargateNlbServiceLbc7004b25.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    fargateNlbServiceLbc7004b25.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    fargateNlbServiceLbc7004b25.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-fargate-special-listener/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (fargateAlbServiceLba7128551 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLba7128551' to be undefined. Fixit.`); }
    if (fargateAlbServiceLbPublicListenerEcsGroupB3826700 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbPublicListenerEcsGroupB3826700' to be undefined. Fixit.`); }
    const fargateAlbServiceLbPublicListener9C1349be = new elasticloadbalancingv2.CfnListener(this, 'FargateAlbServiceLBPublicListener9C1349BE', {
      defaultActions: [
        {
          targetGroupArn: fargateAlbServiceLbPublicListenerEcsGroupB3826700.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: fargateAlbServiceLba7128551.ref,
      port: 2015,
      protocol: 'HTTP',
    });

    if (fargateNlbServiceLbc7004b25 == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceLbc7004b25' to be undefined. Fixit.`); }
    if (fargateNlbServiceLbPublicListenerEcsGroup7501571D == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceLbPublicListenerEcsGroup7501571D' to be undefined. Fixit.`); }
    const fargateNlbServiceLbPublicListener91199F13 = new elasticloadbalancingv2.CfnListener(this, 'FargateNlbServiceLBPublicListener91199F13', {
      defaultActions: [
        {
          targetGroupArn: fargateNlbServiceLbPublicListenerEcsGroup7501571D.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: fargateNlbServiceLbc7004b25.ref,
      port: 2015,
      protocol: 'TCP',
    });

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

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (fargateAlbServiceLbPublicListener9C1349be == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbPublicListener9C1349be' to be undefined. Fixit.`); }
    if (fargateAlbServiceLbPublicListenerEcsGroupB3826700 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceLbPublicListenerEcsGroupB3826700' to be undefined. Fixit.`); }
    if (fargateAlbServiceSecurityGroupF5affc6e == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceSecurityGroupF5affc6e' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDef291471C0 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDef291471C0' to be undefined. Fixit.`); }
    if (fargateAlbServiceTaskDefTaskRoleC9259c01 == null) { throw new Error(`A combination of conditions caused 'fargateAlbServiceTaskDefTaskRoleC9259c01' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const fargateAlbServiceB466e994 = new ecs.CfnService(this, 'FargateAlbServiceB466E994', {
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
          containerPort: 2015,
          targetGroupArn: fargateAlbServiceLbPublicListenerEcsGroupB3826700.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            fargateAlbServiceSecurityGroupF5affc6e.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: fargateAlbServiceTaskDef291471C0.ref,
    });
    fargateAlbServiceB466e994.addDependency(fargateAlbServiceLbPublicListenerEcsGroupB3826700);
    fargateAlbServiceB466e994.addDependency(fargateAlbServiceLbPublicListener9C1349be);
    fargateAlbServiceB466e994.addDependency(fargateAlbServiceTaskDefTaskRoleC9259c01);

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (fargateNlbServiceLbPublicListener91199F13 == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceLbPublicListener91199F13' to be undefined. Fixit.`); }
    if (fargateNlbServiceLbPublicListenerEcsGroup7501571D == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceLbPublicListenerEcsGroup7501571D' to be undefined. Fixit.`); }
    if (fargateNlbServiceSecurityGroup4718761F == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceSecurityGroup4718761F' to be undefined. Fixit.`); }
    if (fargateNlbServiceTaskDef03021E9a == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDef03021E9a' to be undefined. Fixit.`); }
    if (fargateNlbServiceTaskDefTaskRoleD95d755c == null) { throw new Error(`A combination of conditions caused 'fargateNlbServiceTaskDefTaskRoleD95d755c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const fargateNlbService65A9dbf8 = new ecs.CfnService(this, 'FargateNlbService65A9DBF8', {
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
          containerPort: 2015,
          targetGroupArn: fargateNlbServiceLbPublicListenerEcsGroup7501571D.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            fargateNlbServiceSecurityGroup4718761F.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: fargateNlbServiceTaskDef03021E9a.ref,
    });
    fargateNlbService65A9dbf8.addDependency(fargateNlbServiceLbPublicListenerEcsGroup7501571D);
    fargateNlbService65A9dbf8.addDependency(fargateNlbServiceLbPublicListener91199F13);
    fargateNlbService65A9dbf8.addDependency(fargateNlbServiceTaskDefTaskRoleD95d755c);

    // Outputs
    this.fargateNlbServiceLoadBalancerDns20395db7 = fargateNlbServiceLbc7004b25.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputFargateNlbServiceLoadBalancerDNS20395DB7', {
      key: 'FargateNlbServiceLoadBalancerDNS20395DB7',
      value: this.fargateNlbServiceLoadBalancerDns20395db7!.toString(),
    });
    this.fargateAlbServiceLoadBalancerDnsa91678bc = fargateAlbServiceLba7128551.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputFargateAlbServiceLoadBalancerDNSA91678BC', {
      key: 'FargateAlbServiceLoadBalancerDNSA91678BC',
      value: this.fargateAlbServiceLoadBalancerDnsa91678bc!.toString(),
    });
    this.fargateAlbServiceServiceUrl101f25cc = [
      'http://',
      fargateAlbServiceLba7128551.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputFargateAlbServiceServiceURL101F25CC', {
      key: 'FargateAlbServiceServiceURL101F25CC',
      value: this.fargateAlbServiceServiceUrl101f25cc!.toString(),
    });
    this.albDnsName = fargateAlbServiceLba7128551.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputAlbDnsName', {
      key: 'AlbDnsName',
      value: this.albDnsName!.toString(),
    });
    this.nlbDnsName = fargateNlbServiceLbc7004b25.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputNlbDnsName', {
      key: 'NlbDnsName',
      value: this.nlbDnsName!.toString(),
    });
  }
}

