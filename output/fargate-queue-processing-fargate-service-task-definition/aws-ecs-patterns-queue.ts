import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-ecs-patterns-queueProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-patterns-queue extends cdk.Stack {
  public readonly queueProcessingServiceSqsDeadLetterQueueE9058015;
  public readonly queueProcessingServiceSqsDeadLetterQueueArnF7c6d3a8;
  public readonly queueProcessingServiceSqsQueue1Ad9cd9c;
  public readonly queueProcessingServiceSqsQueueArn8C4ae4ae;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-patterns-queueProps = {}) {
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
    const ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 = new ecs.CfnCluster(this, 'EcsDefaultClusterMnL3mNNYNVPC9C1EC7A3', {
    });

    const queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b = new sqs.CfnQueue(this, 'QueueProcessingServiceEcsProcessingDeadLetterQueueD47A7C6B', {
      messageRetentionPeriod: 1209600,
    });
    queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const taskDefExecutionRoleB4775c97 = new iam.CfnRole(this, 'TaskDefExecutionRoleB4775C97', {
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

    const taskDefTheContainerLogGroupD94c8ef5 = new logs.CfnLogGroup(this, 'TaskDefTheContainerLogGroupD94C8EF5', {
    });
    taskDefTheContainerLogGroupD94c8ef5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet2',
        },
      ],
    });

    if (queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b' to be undefined. Fixit.`); }
    const queueProcessingServiceEcsProcessingQueue552F0b37 = new sqs.CfnQueue(this, 'QueueProcessingServiceEcsProcessingQueue552F0B37', {
      redrivePolicy: {
        deadLetterTargetArn: queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b.attrArn,
        maxReceiveCount: 3,
      },
    });
    queueProcessingServiceEcsProcessingQueue552F0b37.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTheContainerLogGroupD94c8ef5 == null) { throw new Error(`A combination of conditions caused 'taskDefTheContainerLogGroupD94c8ef5' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:95cefedd43575452a70cdeeeceb0f1c5728fd58c9ff8e81e760c3dac33c46417`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': taskDefTheContainerLogGroupD94c8ef5.ref,
              'awslogs-stream-prefix': 'QueueProcessingFargateService',
              'awslogs-region': this.region,
            },
          },
          name: 'TheContainer',
        },
      ],
      cpu: '512',
      ephemeralStorage: {
        sizeInGiB: 30,
      },
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awsecspatternsqueueTaskDefD9E658F3',
      memory: '1024',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTheContainerLogGroupD94c8ef5 == null) { throw new Error(`A combination of conditions caused 'taskDefTheContainerLogGroupD94c8ef5' to be undefined. Fixit.`); }
    const taskDefExecutionRoleDefaultPolicy0Dbb737a = new iam.CfnPolicy(this, 'TaskDefExecutionRoleDefaultPolicy0DBB737A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: taskDefTheContainerLogGroupD94c8ef5.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefExecutionRoleDefaultPolicy0DBB737A',
      roles: [
        taskDefExecutionRoleB4775c97.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
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
          value: 'aws-ecs-patterns-queue/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2SubnetCfcdaa7a = new ec2.CfnSubnet(this, 'VPCPrivateSubnet2SubnetCFCDAA7A', {
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
          value: 'aws-ecs-patterns-queue/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
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
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
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
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      internetGatewayId: vpcigwb7e252d3.ref,
      vpcId: vpcb9e5f0b4.ref,
    });

    if (queueProcessingServiceEcsProcessingQueue552F0b37 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceEcsProcessingQueue552F0b37' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDefTaskRoleDefaultPolicyA592cb18 = new iam.CfnPolicy(this, 'TaskDefTaskRoleDefaultPolicyA592CB18', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sqs:ChangeMessageVisibility',
              'sqs:DeleteMessage',
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:ReceiveMessage',
            ],
            Effect: 'Allow',
            Resource: queueProcessingServiceEcsProcessingQueue552F0b37.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefTaskRoleDefaultPolicyA592CB18',
      roles: [
        taskDefTaskRole1Edb4a67.ref,
      ],
    });

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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
    });
    vpcPublicSubnet2DefaultRouteB7481bba.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation5A808732 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet2RouteTableAssociation5A808732', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d = new ec2.CfnSecurityGroup(this, 'QueueProcessingServiceQueueProcessingFargateServiceSecurityGroup8FDF413D', {
      groupDescription: 'aws-ecs-patterns-queue/QueueProcessingService/QueueProcessingFargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d.addDependency(taskDefTaskRole1Edb4a67);

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet1',
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
      allocationId: vpcPublicSubnet2Eip4947bc00.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateService0340Db9f = new ecs.CfnService(this, 'QueueProcessingServiceQueueProcessingFargateService0340DB9F', {
      cluster: ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
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
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            queueProcessingServiceQueueProcessingFargateServiceSecurityGroup8Fdf413d.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet8Bca10e0.ref,
            vpcPrivateSubnet2SubnetCfcdaa7a.ref,
          ],
        },
      },
      taskDefinition: taskDef54694570.ref,
    });
    queueProcessingServiceQueueProcessingFargateService0340Db9f.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateService0340Db9f.addDependency(taskDefTaskRole1Edb4a67);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway3C070193 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway3C070193' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteF4f5cfd2 = new ec2.CfnRoute(this, 'VPCPrivateSubnet2DefaultRouteF4F5CFD2', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway3C070193.ref,
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
    });

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (queueProcessingServiceQueueProcessingFargateService0340Db9f == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateService0340Db9f' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444 = new applicationautoscaling.CfnScalableTarget(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9D54444', {
      maxCapacity: 2,
      minCapacity: 1,
      resourceId: [
        'service/',
        ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
        '/',
        queueProcessingServiceQueueProcessingFargateService0340Db9f.attrName,
      ].join(''),
      roleArn: [
        'arn:',
        this.partition,
        ':iam::',
        this.account,
        ':role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService',
      ].join(''),
      scalableDimension: 'ecs:service:DesiredCount',
      serviceNamespace: 'ecs',
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444.addDependency(taskDefTaskRole1Edb4a67);

    if (queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling330150E9 = new applicationautoscaling.CfnScalingPolicy(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling330150E9', {
      policyName: 'awsecspatternsqueueQueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling374CE648',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'ECSServiceAverageCPUUtilization',
        },
        targetValue: 50,
      },
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling330150E9.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling330150E9.addDependency(taskDefTaskRole1Edb4a67);

    if (queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644 = new applicationautoscaling.CfnScalingPolicy(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644', {
      policyName: 'awsecspatternsqueueQueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy74582401',
      policyType: 'StepScaling',
      scalingTargetId: queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444.ref,
      stepScalingPolicyConfiguration: {
        adjustmentType: 'ChangeInCapacity',
        metricAggregationType: 'Maximum',
        stepAdjustments: [
          {
            metricIntervalUpperBound: 0,
            scalingAdjustment: -1,
          },
        ],
      },
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644.addDependency(taskDefTaskRole1Edb4a67);

    if (queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a = new applicationautoscaling.CfnScalingPolicy(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84DD739A', {
      policyName: 'awsecspatternsqueueQueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy23C5F983',
      policyType: 'StepScaling',
      scalingTargetId: queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetA9d54444.ref,
      stepScalingPolicyConfiguration: {
        adjustmentType: 'ChangeInCapacity',
        metricAggregationType: 'Maximum',
        stepAdjustments: [
          {
            metricIntervalLowerBound: 0,
            metricIntervalUpperBound: 400,
            scalingAdjustment: 1,
          },
          {
            metricIntervalLowerBound: 400,
            scalingAdjustment: 5,
          },
        ],
      },
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a.addDependency(taskDefTaskRole1Edb4a67);

    if (queueProcessingServiceEcsProcessingQueue552F0b37 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceEcsProcessingQueue552F0b37' to be undefined. Fixit.`); }
    if (queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm20C30a06 = new cloudwatch.CfnAlarm(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm20C30A06', {
      alarmActions: [
        queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy332E2644.ref,
      ],
      alarmDescription: 'Lower threshold scaling alarm',
      comparisonOperator: 'LessThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: queueProcessingServiceEcsProcessingQueue552F0b37.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 0,
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm20C30a06.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm20C30a06.addDependency(taskDefTaskRole1Edb4a67);

    if (queueProcessingServiceEcsProcessingQueue552F0b37 == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceEcsProcessingQueue552F0b37' to be undefined. Fixit.`); }
    if (queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a == null) { throw new Error(`A combination of conditions caused 'queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm2660Bedf = new cloudwatch.CfnAlarm(this, 'QueueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm2660BEDF', {
      alarmActions: [
        queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy84Dd739a.ref,
      ],
      alarmDescription: 'Upper threshold scaling alarm',
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: queueProcessingServiceEcsProcessingQueue552F0b37.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 100,
    });
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm2660Bedf.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    queueProcessingServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm2660Bedf.addDependency(taskDefTaskRole1Edb4a67);

    // Outputs
    this.queueProcessingServiceSqsDeadLetterQueueE9058015 = queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputQueueProcessingServiceSQSDeadLetterQueueE9058015', {
      key: 'QueueProcessingServiceSQSDeadLetterQueueE9058015',
      value: this.queueProcessingServiceSqsDeadLetterQueueE9058015!.toString(),
    });
    this.queueProcessingServiceSqsDeadLetterQueueArnF7c6d3a8 = queueProcessingServiceEcsProcessingDeadLetterQueueD47a7c6b.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputQueueProcessingServiceSQSDeadLetterQueueArnF7C6D3A8', {
      key: 'QueueProcessingServiceSQSDeadLetterQueueArnF7C6D3A8',
      value: this.queueProcessingServiceSqsDeadLetterQueueArnF7c6d3a8!.toString(),
    });
    this.queueProcessingServiceSqsQueue1Ad9cd9c = queueProcessingServiceEcsProcessingQueue552F0b37.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputQueueProcessingServiceSQSQueue1AD9CD9C', {
      key: 'QueueProcessingServiceSQSQueue1AD9CD9C',
      value: this.queueProcessingServiceSqsQueue1Ad9cd9c!.toString(),
    });
    this.queueProcessingServiceSqsQueueArn8C4ae4ae = queueProcessingServiceEcsProcessingQueue552F0b37.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputQueueProcessingServiceSQSQueueArn8C4AE4AE', {
      key: 'QueueProcessingServiceSQSQueueArn8C4AE4AE',
      value: this.queueProcessingServiceSqsQueueArn8C4ae4ae!.toString(),
    });
  }
}

