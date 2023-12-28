import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-ecs-integ-alb-ec2-cmd-entrypointProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id'
   */
  readonly ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-alb-ec2-cmd-entrypoint extends cdk.Stack {
  public readonly albecsServiceWithCommandEntryPointLoadBalancerDns4794c277;
  public readonly albecsServiceWithCommandEntryPointServiceUrla5faf4d9;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-alb-ec2-cmd-entrypointProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196 = new iam.CfnRole(this, 'ALBECSServiceWithCommandEntryPointTaskDefExecutionRoleEF46B196', {
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

    const albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c = new iam.CfnRole(this, 'ALBECSServiceWithCommandEntryPointTaskDefTaskRoleD0EE621C', {
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

    const albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d = new logs.CfnLogGroup(this, 'ALBECSServiceWithCommandEntryPointTaskDefwebLogGroup9AC53F6D', {
    });
    albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const autoScalingGroupInstanceRoleDc70d128 = new iam.CfnRole(this, 'AutoScalingGroupInstanceRoleDC70D128', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/AutoScalingGroup',
        },
      ],
    });

    const ec2ClusterEe43e89d = new ecs.CfnCluster(this, 'Ec2ClusterEE43E89D', {
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D = new elasticloadbalancingv2.CfnTargetGroup(this, 'ALBECSServiceWithCommandEntryPointLBPublicListenerECSGroup7271102D', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'instance',
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointLbSecurityGroupBa7f6fb5 = new ec2.CfnSecurityGroup(this, 'ALBECSServiceWithCommandEntryPointLBSecurityGroupBA7F6FB5', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegalbec2cmdentrypointALBECSServiceWithCommandEntryPointLB36B044C3',
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
      vpcId: vpc8378Eb38.ref,
    });

    if (albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196 == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointTaskDef63271Ec5 = new ecs.CfnTaskDefinition(this, 'ALBECSServiceWithCommandEntryPointTaskDef63271EC5', {
      containerDefinitions: [
        {
          command: [
            '/usr/sbin/apache2',
            '-D',
            'FOREGROUND',
          ],
          cpu: 256,
          entryPoint: [
            '/bin/bash',
            '-l',
            '-c',
          ],
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d.ref,
              'awslogs-stream-prefix': 'ALBECSServiceWithCommandEntryPoint',
              'awslogs-region': this.region,
            },
          },
          memory: 512,
          name: 'web',
          portMappings: [
            {
              containerPort: 80,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
      ],
      executionRoleArn: albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196.attrArn,
      family: 'awsecsintegalbec2cmdentrypointALBECSServiceWithCommandEntryPointTaskDef8556E5D8',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c.attrArn,
    });

    if (albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196 == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointTaskDefExecutionRoleDefaultPolicyD8110f3f = new iam.CfnPolicy(this, 'ALBECSServiceWithCommandEntryPointTaskDefExecutionRoleDefaultPolicyD8110F3F', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: albecsServiceWithCommandEntryPointTaskDefwebLogGroup9Ac53f6d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ALBECSServiceWithCommandEntryPointTaskDefExecutionRoleDefaultPolicyD8110F3F',
      roles: [
        albecsServiceWithCommandEntryPointTaskDefExecutionRoleEf46b196.ref,
      ],
    });

    if (autoScalingGroupInstanceRoleDc70d128 == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceRoleDc70d128' to be undefined. Fixit.`); }
    const autoScalingGroupInstanceProfile342Fac7c = new iam.CfnInstanceProfile(this, 'AutoScalingGroupInstanceProfile342FAC7C', {
      roles: [
        autoScalingGroupInstanceRoleDc70d128.ref,
      ],
    });

    if (autoScalingGroupInstanceRoleDc70d128 == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceRoleDc70d128' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const autoScalingGroupInstanceRoleDefaultPolicy3Df09528 = new iam.CfnPolicy(this, 'AutoScalingGroupInstanceRoleDefaultPolicy3DF09528', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: ec2ClusterEe43e89d.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': ec2ClusterEe43e89d.attrArn,
              },
            },
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'ecr:GetAuthorizationToken',
              'ecs:DiscoverPollEndpoint',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AutoScalingGroupInstanceRoleDefaultPolicy3DF09528',
      roles: [
        autoScalingGroupInstanceRoleDc70d128.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const autoScalingGroupInstanceSecurityGroup9D2e0c5e = new ec2.CfnSecurityGroup(this, 'AutoScalingGroupInstanceSecurityGroup9D2E0C5E', {
      groupDescription: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/AutoScalingGroup/InstanceSecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/AutoScalingGroup',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (autoScalingGroupInstanceProfile342Fac7c == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceProfile342Fac7c' to be undefined. Fixit.`); }
    if (autoScalingGroupInstanceRoleDc70d128 == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceRoleDc70d128' to be undefined. Fixit.`); }
    if (autoScalingGroupInstanceRoleDefaultPolicy3Df09528 == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceRoleDefaultPolicy3Df09528' to be undefined. Fixit.`); }
    if (autoScalingGroupInstanceSecurityGroup9D2e0c5e == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupInstanceSecurityGroup9D2e0c5e' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const autoScalingGroupLaunchConfigDeeb160c = new autoscaling.CfnLaunchConfiguration(this, 'AutoScalingGroupLaunchConfigDEEB160C', {
      imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
      instanceType: 't2.micro',
      iamInstanceProfile: autoScalingGroupInstanceProfile342Fac7c.ref,
      securityGroups: [
        autoScalingGroupInstanceSecurityGroup9D2e0c5e.attrGroupId,
      ],
      userData: cdk.Fn.base64([
        '#!/bin/bash\necho ECS_CLUSTER=',
        ec2ClusterEe43e89d.ref,
        ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
      ].join('')),
    });
    autoScalingGroupLaunchConfigDeeb160c.addDependency(autoScalingGroupInstanceRoleDefaultPolicy3Df09528);
    autoScalingGroupLaunchConfigDeeb160c.addDependency(autoScalingGroupInstanceRoleDc70d128);

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

    if (albecsServiceWithCommandEntryPointLbSecurityGroupBa7f6fb5 == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointLbSecurityGroupBa7f6fb5' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointLb2ffe407f = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ALBECSServiceWithCommandEntryPointLB2FFE407F', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        albecsServiceWithCommandEntryPointLbSecurityGroupBa7f6fb5.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    albecsServiceWithCommandEntryPointLb2ffe407f.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    albecsServiceWithCommandEntryPointLb2ffe407f.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    albecsServiceWithCommandEntryPointLb2ffe407f.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    albecsServiceWithCommandEntryPointLb2ffe407f.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (autoScalingGroupLaunchConfigDeeb160c == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupLaunchConfigDeeb160c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const autoScalingGroupAsg804c35be = new autoscaling.CfnAutoScalingGroup(this, 'AutoScalingGroupASG804C35BE', {
      maxSize: '1',
      minSize: '1',
      launchConfigurationName: autoScalingGroupLaunchConfigDeeb160c.ref,
      newInstancesProtectedFromScaleIn: true,
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/AutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    autoScalingGroupAsg804c35be.cfnOptions.updatePolicy = {
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-alb-ec2-cmd-entrypoint/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (albecsServiceWithCommandEntryPointLb2ffe407f == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointLb2ffe407f' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointLbPublicListener1Dcf0f84 = new elasticloadbalancingv2.CfnListener(this, 'ALBECSServiceWithCommandEntryPointLBPublicListener1DCF0F84', {
      defaultActions: [
        {
          targetGroupArn: albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: albecsServiceWithCommandEntryPointLb2ffe407f.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (autoScalingGroupAsg804c35be == null) { throw new Error(`A combination of conditions caused 'autoScalingGroupAsg804c35be' to be undefined. Fixit.`); }
    const capacityProvier480De32f = new ecs.CfnCapacityProvider(this, 'CapacityProvier480DE32F', {
      autoScalingGroupProvider: {
        autoScalingGroupArn: autoScalingGroupAsg804c35be.ref,
        managedScaling: {
          status: 'ENABLED',
          targetCapacity: 100,
        },
        managedTerminationProtection: 'ENABLED',
      },
      name: 'test-capacity-provider',
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

    if (albecsServiceWithCommandEntryPointLbPublicListener1Dcf0f84 == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointLbPublicListener1Dcf0f84' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointTaskDef63271Ec5 == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDef63271Ec5' to be undefined. Fixit.`); }
    if (albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c == null) { throw new Error(`A combination of conditions caused 'albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c' to be undefined. Fixit.`); }
    if (capacityProvier480De32f == null) { throw new Error(`A combination of conditions caused 'capacityProvier480De32f' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const albecsServiceWithCommandEntryPointService6335A932 = new ecs.CfnService(this, 'ALBECSServiceWithCommandEntryPointService6335A932', {
      capacityProviderStrategy: [
        {
          base: 1,
          capacityProvider: capacityProvier480De32f.ref,
          weight: 1,
        },
      ],
      cluster: ec2ClusterEe43e89d.ref,
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
      loadBalancers: [
        {
          containerName: 'web',
          containerPort: 80,
          targetGroupArn: albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D.ref,
        },
      ],
      schedulingStrategy: 'REPLICA',
      taskDefinition: albecsServiceWithCommandEntryPointTaskDef63271Ec5.ref,
    });
    albecsServiceWithCommandEntryPointService6335A932.addDependency(albecsServiceWithCommandEntryPointLbPublicListenerEcsGroup7271102D);
    albecsServiceWithCommandEntryPointService6335A932.addDependency(albecsServiceWithCommandEntryPointLbPublicListener1Dcf0f84);
    albecsServiceWithCommandEntryPointService6335A932.addDependency(albecsServiceWithCommandEntryPointTaskDefTaskRoleD0ee621c);

    if (capacityProvier480De32f == null) { throw new Error(`A combination of conditions caused 'capacityProvier480De32f' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2Cluster56240A3a = new ecs.CfnClusterCapacityProviderAssociations(this, 'Ec2Cluster56240A3A', {
      capacityProviders: [
        capacityProvier480De32f.ref,
      ],
      cluster: ec2ClusterEe43e89d.ref,
      defaultCapacityProviderStrategy: [
      ],
    });

    // Outputs
    this.albecsServiceWithCommandEntryPointLoadBalancerDns4794c277 = albecsServiceWithCommandEntryPointLb2ffe407f.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputALBECSServiceWithCommandEntryPointLoadBalancerDNS4794C277', {
      key: 'ALBECSServiceWithCommandEntryPointLoadBalancerDNS4794C277',
      value: this.albecsServiceWithCommandEntryPointLoadBalancerDns4794c277!.toString(),
    });
    this.albecsServiceWithCommandEntryPointServiceUrla5faf4d9 = [
      'http://',
      albecsServiceWithCommandEntryPointLb2ffe407f.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputALBECSServiceWithCommandEntryPointServiceURLA5FAF4D9', {
      key: 'ALBECSServiceWithCommandEntryPointServiceURLA5FAF4D9',
      value: this.albecsServiceWithCommandEntryPointServiceUrla5faf4d9!.toString(),
    });
  }
}

