import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsEcsIntegLbFargateCmdEntrypointTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegLbFargateCmdEntrypointTest extends cdk.Stack {
  public readonly albFargateServiceWithCommandAndEntryPointLoadBalancerDnse2b256cd;
  public readonly albFargateServiceWithCommandAndEntryPointServiceUrlacf72094;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegLbFargateCmdEntrypointTestProps = {}) {
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
    const albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e = new iam.CfnRole(this, 'ALBFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372E', {
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

    const albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392 = new iam.CfnRole(this, 'ALBFargateServiceWithCommandAndEntryPointTaskDefTaskRole65CE9392', {
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

    const albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925 = new logs.CfnLogGroup(this, 'ALBFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925', {
    });
    albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const testFargateCluster0Bf869f3 = new ecs.CfnCluster(this, 'TestFargateCluster0BF869F3', {
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305 = new elasticloadbalancingv2.CfnTargetGroup(this, 'ALBFargateServiceWithCommandAndEntryPointLBPublicListenerECSGroupBAD40305', {
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
    const albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797 = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceWithCommandAndEntryPointLBSecurityGroupD7099797', {
      groupDescription: 'Automatically created Security Group for ELB awsecsinteglbfargatecmdentrypointtestALBFargateServiceWithCommandAndEntryPointLB690B472C',
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

    if (albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880 = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154E880', {
      groupDescription: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/ALBFargateServiceWithCommandAndEntryPoint/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880.addDependency(albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392);

    if (albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointTaskDefCd2c6236 = new ecs.CfnTaskDefinition(this, 'ALBFargateServiceWithCommandAndEntryPointTaskDefCD2C6236', {
      containerDefinitions: [
        {
          command: [
            '/usr/sbin/apache2',
            '-D',
            'FOREGROUND',
          ],
          entryPoint: [
            '/bin/bash',
          ],
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925.ref,
              'awslogs-stream-prefix': 'ALBFargateServiceWithCommandAndEntryPoint',
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
      executionRoleArn: albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e.attrArn,
      family: 'awsecsinteglbfargatecmdentrypointtestALBFargateServiceWithCommandAndEntryPointTaskDef2781E3BC',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392.attrArn,
    });

    if (albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleDefaultPolicy9B61b60b = new iam.CfnPolicy(this, 'ALBFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleDefaultPolicy9B61B60B', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: albFargateServiceWithCommandAndEntryPointTaskDefwebLogGroup82F04925.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ALBFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleDefaultPolicy9B61B60B',
      roles: [
        albFargateServiceWithCommandAndEntryPointTaskDefExecutionRoleB204372e.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointLbSecurityGrouptoawsecsinteglbfargatecmdentrypointtestAlbFargateServiceWithCommandAndEntryPointServiceSecurityGroup6D1e5f11801b449faa = new ec2.CfnSecurityGroupEgress(this, 'ALBFargateServiceWithCommandAndEntryPointLBSecurityGrouptoawsecsinteglbfargatecmdentrypointtestALBFargateServiceWithCommandAndEntryPointServiceSecurityGroup6D1E5F11801B449FAA', {
      groupId: albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointServiceSecurityGroupfromawsecsinteglbfargatecmdentrypointtestAlbFargateServiceWithCommandAndEntryPointLbSecurityGroup886E70918046ddbfe6 = new ec2.CfnSecurityGroupIngress(this, 'ALBFargateServiceWithCommandAndEntryPointServiceSecurityGroupfromawsecsinteglbfargatecmdentrypointtestALBFargateServiceWithCommandAndEntryPointLBSecurityGroup886E70918046DDBFE6', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880.attrGroupId,
      sourceSecurityGroupId: albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797.attrGroupId,
      toPort: 80,
    });
    albFargateServiceWithCommandAndEntryPointServiceSecurityGroupfromawsecsinteglbfargatecmdentrypointtestAlbFargateServiceWithCommandAndEntryPointLbSecurityGroup886E70918046ddbfe6.addDependency(albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392);

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

    if (albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointLb353ea7ca = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ALBFargateServiceWithCommandAndEntryPointLB353EA7CA', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        albFargateServiceWithCommandAndEntryPointLbSecurityGroupD7099797.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    albFargateServiceWithCommandAndEntryPointLb353ea7ca.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    albFargateServiceWithCommandAndEntryPointLb353ea7ca.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    albFargateServiceWithCommandAndEntryPointLb353ea7ca.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    albFargateServiceWithCommandAndEntryPointLb353ea7ca.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate-cmd-entrypoint-test/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (albFargateServiceWithCommandAndEntryPointLb353ea7ca == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLb353ea7ca' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointLbPublicListener6589Dc80 = new elasticloadbalancingv2.CfnListener(this, 'ALBFargateServiceWithCommandAndEntryPointLBPublicListener6589DC80', {
      defaultActions: [
        {
          targetGroupArn: albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: albFargateServiceWithCommandAndEntryPointLb353ea7ca.ref,
      port: 80,
      protocol: 'HTTP',
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

    if (albFargateServiceWithCommandAndEntryPointLbPublicListener6589Dc80 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbPublicListener6589Dc80' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefCd2c6236 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefCd2c6236' to be undefined. Fixit.`); }
    if (albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392' to be undefined. Fixit.`); }
    if (testFargateCluster0Bf869f3 == null) { throw new Error(`A combination of conditions caused 'testFargateCluster0Bf869f3' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const albFargateServiceWithCommandAndEntryPointService1Fdfd0bc = new ecs.CfnService(this, 'ALBFargateServiceWithCommandAndEntryPointService1FDFD0BC', {
      cluster: testFargateCluster0Bf869f3.ref,
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
          targetGroupArn: albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            albFargateServiceWithCommandAndEntryPointServiceSecurityGroupD154e880.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: albFargateServiceWithCommandAndEntryPointTaskDefCd2c6236.ref,
    });
    albFargateServiceWithCommandAndEntryPointService1Fdfd0bc.addDependency(albFargateServiceWithCommandAndEntryPointLbPublicListenerEcsGroupBad40305);
    albFargateServiceWithCommandAndEntryPointService1Fdfd0bc.addDependency(albFargateServiceWithCommandAndEntryPointLbPublicListener6589Dc80);
    albFargateServiceWithCommandAndEntryPointService1Fdfd0bc.addDependency(albFargateServiceWithCommandAndEntryPointTaskDefTaskRole65Ce9392);

    // Outputs
    this.albFargateServiceWithCommandAndEntryPointLoadBalancerDnse2b256cd = albFargateServiceWithCommandAndEntryPointLb353ea7ca.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputALBFargateServiceWithCommandAndEntryPointLoadBalancerDNSE2B256CD', {
      key: 'ALBFargateServiceWithCommandAndEntryPointLoadBalancerDNSE2B256CD',
      value: this.albFargateServiceWithCommandAndEntryPointLoadBalancerDnse2b256cd!.toString(),
    });
    this.albFargateServiceWithCommandAndEntryPointServiceUrlacf72094 = [
      'http://',
      albFargateServiceWithCommandAndEntryPointLb353ea7ca.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputALBFargateServiceWithCommandAndEntryPointServiceURLACF72094', {
      key: 'ALBFargateServiceWithCommandAndEntryPointServiceURLACF72094',
      value: this.albFargateServiceWithCommandAndEntryPointServiceUrlacf72094!.toString(),
    });
  }
}

