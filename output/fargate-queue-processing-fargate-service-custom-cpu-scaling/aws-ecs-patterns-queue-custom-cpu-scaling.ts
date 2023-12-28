import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsEcsPatternsQueueCustomCpuScalingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsPatternsQueueCustomCpuScaling extends cdk.Stack {
  public readonly awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueue94103Ab7;
  public readonly awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueueArn45Aa7a61;
  public readonly awsecspatternsqueuecustomcpuscalingSqsQueue56D4c1ab;
  public readonly awsecspatternsqueuecustomcpuscalingSqsQueueArnA165eb72;

  public constructor(scope: cdk.App, id: string, props: AwsEcsPatternsQueueCustomCpuScalingProps = {}) {
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet2',
        },
      ],
    });

    const awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89 = new sqs.CfnQueue(this, 'awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2F89', {
      messageRetentionPeriod: 1209600,
    });
    awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316 = new iam.CfnRole(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91D316', {
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

    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2 = new logs.CfnLogGroup(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706DABB2', {
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 = new iam.CfnRole(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3', {
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PrivateSubnet1',
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PrivateSubnet2',
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet2',
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet2',
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

    if (awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c = new sqs.CfnQueue(this, 'awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2AF4CB2C', {
      redrivePolicy: {
        deadLetterTargetArn: awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89.attrArn,
        maxReceiveCount: 3,
      },
    });
    awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicy25E1f570 = new iam.CfnPolicy(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicy25E1F570', {
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
            Resource: awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRoleDefaultPolicy25E1F570',
      roles: [
        awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316.ref,
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

    if (awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef7D327eda = new ecs.CfnTaskDefinition(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef7D327EDA', {
      containerDefinitions: [
        {
          environment: [
            {
              name: 'QUEUE_NAME',
              value: awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrQueueName,
            },
          ],
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:8be39d348c20f7e58a373abbd1152069e18da130e51bf52c89bd82a38d0e51d7`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefQueueProcessingContainerLogGroup706Dabb2.ref,
              'awslogs-stream-prefix': 'aws-ecs-patterns-queue-custom-cpu-scaling',
              'awslogs-region': this.region,
            },
          },
          name: 'QueueProcessingContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefExecutionRole3F91d316.attrArn,
      family: 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef1A053021',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3.attrArn,
    });

    if (awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 = new iam.CfnPolicy(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFF70EC56', {
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
            Resource: awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFF70EC56',
      roles: [
        awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3.ref,
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-custom-cpu-scaling/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096 = new ec2.CfnSecurityGroup(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096', {
      groupDescription: 'aws-ecs-patterns-queue-custom-cpu-scaling/aws-ecs-patterns-queue-custom-cpu-scaling/QueueProcessingFargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

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
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef7D327eda == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef7D327eda' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9 = new ecs.CfnService(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0B9F9', {
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
            awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceSecurityGroup48C94096.attrGroupId,
          ],
          subnets: [
            vpcPublicSubnet1SubnetB4246d30.ref,
            vpcPublicSubnet2Subnet74179F39.ref,
          ],
        },
      },
      taskDefinition: awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDef7D327eda.ref,
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a = new applicationautoscaling.CfnScalableTarget(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEA4C3C9A', {
      maxCapacity: 2,
      minCapacity: 1,
      resourceId: [
        'service/',
        ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
        '/',
        awsecspatternsqueuecustomcpuscalingQueueProcessingFargateService88A0b9f9.attrName,
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
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetCpuScalingF32a6eb0 = new applicationautoscaling.CfnScalingPolicy(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetCpuScalingF32A6EB0', {
      policyName: 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetCpuScaling743D6A56',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'ECSServiceAverageCPUUtilization',
        },
        targetValue: 90,
      },
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetCpuScalingF32a6eb0.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetCpuScalingF32a6eb0.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979 = new applicationautoscaling.CfnScalingPolicy(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081DB979', {
      policyName: 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy592B357B',
      policyType: 'StepScaling',
      scalingTargetId: awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a.ref,
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
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775 = new applicationautoscaling.CfnScalingPolicy(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775', {
      policyName: 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyA55AB219',
      policyType: 'StepScaling',
      scalingTargetId: awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetEa4c3c9a.ref,
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
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm53129Cf0 = new cloudwatch.CfnAlarm(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm53129CF0', {
      alarmActions: [
        awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy081Db979.ref,
      ],
      alarmDescription: 'Lower threshold scaling alarm',
      comparisonOperator: 'LessThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 0,
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm53129Cf0.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm53129Cf0.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    if (awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3' to be undefined. Fixit.`); }
    if (awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56 == null) { throw new Error(`A combination of conditions caused 'awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56' to be undefined. Fixit.`); }
    const awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm9397Abfa = new cloudwatch.CfnAlarm(this, 'awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm9397ABFA', {
      alarmActions: [
        awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyF6102775.ref,
      ],
      alarmDescription: 'Upper threshold scaling alarm',
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 100,
    });
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm9397Abfa.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRoleDefaultPolicyFf70ec56);
    awsecspatternsqueuecustomcpuscalingQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm9397Abfa.addDependency(awsecspatternsqueuecustomcpuscalingQueueProcessingTaskDefTaskRole397465C3);

    // Outputs
    this.awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueue94103Ab7 = awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuecustomcpuscalingSQSDeadLetterQueue94103AB7', {
      key: 'awsecspatternsqueuecustomcpuscalingSQSDeadLetterQueue94103AB7',
      value: this.awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueue94103Ab7!.toString(),
    });
    this.awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueueArn45Aa7a61 = awsecspatternsqueuecustomcpuscalingEcsProcessingDeadLetterQueue018F2f89.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuecustomcpuscalingSQSDeadLetterQueueArn45AA7A61', {
      key: 'awsecspatternsqueuecustomcpuscalingSQSDeadLetterQueueArn45AA7A61',
      value: this.awsecspatternsqueuecustomcpuscalingSqsDeadLetterQueueArn45Aa7a61!.toString(),
    });
    this.awsecspatternsqueuecustomcpuscalingSqsQueue56D4c1ab = awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuecustomcpuscalingSQSQueue56D4C1AB', {
      key: 'awsecspatternsqueuecustomcpuscalingSQSQueue56D4C1AB',
      value: this.awsecspatternsqueuecustomcpuscalingSqsQueue56D4c1ab!.toString(),
    });
    this.awsecspatternsqueuecustomcpuscalingSqsQueueArnA165eb72 = awsecspatternsqueuecustomcpuscalingEcsProcessingQueue2Af4cb2c.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawsecspatternsqueuecustomcpuscalingSQSQueueArnA165EB72', {
      key: 'awsecspatternsqueuecustomcpuscalingSQSQueueArnA165EB72',
      value: this.awsecspatternsqueuecustomcpuscalingSqsQueueArnA165eb72!.toString(),
    });
  }
}

