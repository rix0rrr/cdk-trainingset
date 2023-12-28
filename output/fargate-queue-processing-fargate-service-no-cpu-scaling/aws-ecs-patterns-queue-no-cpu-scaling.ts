import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsEcsPatternsQueueNoCpuScalingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsPatternsQueueNoCpuScaling extends cdk.Stack {
  public readonly awsecspatternsqueuenocpuscalingSqsDeadLetterQueue91065018;
  public readonly awsecspatternsqueuenocpuscalingSqsDeadLetterQueueArn7947Ed56;
  public readonly awsecspatternsqueuenocpuscalingSqsQueue0875F3e7;
  public readonly awsecspatternsqueuenocpuscalingSqsQueueArn07A31821;

  public constructor(scope: cdk.App, id: string, props: AwsEcsPatternsQueueNoCpuScalingProps = {}) {
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

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet2',
        },
      ],
    });

    const awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5 = new sqs.CfnQueue(this, 'awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254F5', {
      messageRetentionPeriod: 1209600,
    });
    awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444 = new iam.CfnRole(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7DE7E444', {
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

    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c = new logs.CfnLogGroup(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396C', {
    });
    awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 = new iam.CfnRole(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98F08', {
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

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PrivateSubnet1',
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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PrivateSubnet2',
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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet2',
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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet2',
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

    if (awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5 = new sqs.CfnQueue(this, 'awsecspatternsqueuenocpuscalingEcsProcessingQueue52AE8DE5', {
      redrivePolicy: {
        deadLetterTargetArn: awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5.attrArn,
        maxReceiveCount: 3,
      },
    });
    awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicyDe7e0b22 = new iam.CfnPolicy(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicyDE7E0B22', {
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
            Resource: awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicyDE7E0B22',
      roles: [
        awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444.ref,
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

    if (awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDef33911003 = new ecs.CfnTaskDefinition(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDef33911003', {
      containerDefinitions: [
        {
          environment: [
            {
              name: 'QUEUE_NAME',
              value: awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrQueueName,
            },
          ],
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:8be39d348c20f7e58a373abbd1152069e18da130e51bf52c89bd82a38d0e51d7`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': awsecspatternsqueuenocpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroupD037396c.ref,
              'awslogs-stream-prefix': 'aws-ecs-patterns-queue-no-cpu-scaling',
              'awslogs-region': this.region,
            },
          },
          name: 'QueueProcessingContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: awsecspatternsqueuenocpuscalingQueueProcessingTaskDefExecutionRole7De7e444.attrArn,
      family: 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDef737B9146',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08.attrArn,
    });

    if (awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a = new iam.CfnPolicy(this, 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2DF7A', {
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
            Resource: awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2DF7A',
      roles: [
        awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08.ref,
      ],
    });

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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-no-cpu-scaling/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91 = new ec2.CfnSecurityGroup(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40A7C91', {
      groupDescription: 'aws-ecs-patterns-queue-no-cpu-scaling/aws-ecs-patterns-queue-no-cpu-scaling/QueueProcessingFargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

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
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDef33911003 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDef33911003' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae = new ecs.CfnService(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3CD1AE', {
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
          assignPublicIp: 'ENABLED',
          securityGroups: [
            awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceSecurityGroupE40a7c91.attrGroupId,
          ],
          subnets: [
            vpcPublicSubnet1SubnetB4246d30.ref,
            vpcPublicSubnet2Subnet74179F39.ref,
          ],
        },
      },
      taskDefinition: awsecspatternsqueuenocpuscalingQueueProcessingTaskDef33911003.ref,
    });
    awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9 = new applicationautoscaling.CfnScalableTarget(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAF622EF9', {
      maxCapacity: 2,
      minCapacity: 1,
      resourceId: [
        'service/',
        ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
        '/',
        awsecspatternsqueuenocpuscalingQueueProcessingFargateService2D3cd1ae.attrName,
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
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3 = new applicationautoscaling.CfnScalingPolicy(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2D0ED3', {
      policyName: 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicyC9FD3BAC',
      policyType: 'StepScaling',
      scalingTargetId: awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9.ref,
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
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a = new applicationautoscaling.CfnScalingPolicy(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1A', {
      policyName: 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy2230072F',
      policyType: 'StepScaling',
      scalingTargetId: awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetAf622ef9.ref,
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
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    if (awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9B53e90c = new cloudwatch.CfnAlarm(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9B53E90C', {
      alarmActions: [
        awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy0A2d0ed3.ref,
      ],
      alarmDescription: 'Lower threshold scaling alarm',
      comparisonOperator: 'LessThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 0,
    });
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9B53e90c.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9B53e90c.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    if (awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08' to be undefined. Fixit.`); }
    if (awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a' to be undefined. Fixit.`); }
    const awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm10D3781e = new cloudwatch.CfnAlarm(this, 'awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm10D3781E', {
      alarmActions: [
        awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy33179C1a.ref,
      ],
      alarmDescription: 'Upper threshold scaling alarm',
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 100,
    });
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm10D3781e.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicy07A2df7a);
    awsecspatternsqueuenocpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm10D3781e.addDependency(awsecspatternsqueuenocpuscalingQueueProcessingTaskDefTaskRole32D98f08);

    // Outputs
    this.awsecspatternsqueuenocpuscalingSqsDeadLetterQueue91065018 = awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuenocpuscalingSQSDeadLetterQueue91065018', {
      key: 'awsecspatternsqueuenocpuscalingSQSDeadLetterQueue91065018',
      value: this.awsecspatternsqueuenocpuscalingSqsDeadLetterQueue91065018!.toString(),
    });
    this.awsecspatternsqueuenocpuscalingSqsDeadLetterQueueArn7947Ed56 = awsecspatternsqueuenocpuscalingEcsProcessingDeadLetterQueue00A254f5.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuenocpuscalingSQSDeadLetterQueueArn7947ED56', {
      key: 'awsecspatternsqueuenocpuscalingSQSDeadLetterQueueArn7947ED56',
      value: this.awsecspatternsqueuenocpuscalingSqsDeadLetterQueueArn7947Ed56!.toString(),
    });
    this.awsecspatternsqueuenocpuscalingSqsQueue0875F3e7 = awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuenocpuscalingSQSQueue0875F3E7', {
      key: 'awsecspatternsqueuenocpuscalingSQSQueue0875F3E7',
      value: this.awsecspatternsqueuenocpuscalingSqsQueue0875F3e7!.toString(),
    });
    this.awsecspatternsqueuenocpuscalingSqsQueueArn07A31821 = awsecspatternsqueuenocpuscalingEcsProcessingQueue52Ae8de5.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuenocpuscalingSQSQueueArn07A31821', {
      key: 'awsecspatternsqueuenocpuscalingSQSQueueArn07A31821',
      value: this.awsecspatternsqueuenocpuscalingSqsQueueArn07A31821!.toString(),
    });
  }
}

