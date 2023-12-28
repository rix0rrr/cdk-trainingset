import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-ecs-patterns-queue-isolatedProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-patterns-queue-isolated extends cdk.Stack {
  public readonly isolatedQueueServiceSqsDeadLetterQueue43D346b9;
  public readonly isolatedQueueServiceSqsDeadLetterQueueArnCe7c60f2;
  public readonly isolatedQueueServiceSqsQueueA65e2641;
  public readonly isolatedQueueServiceSqsQueueArn571Fdb86;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-patterns-queue-isolatedProps = {}) {
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

    const isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d = new sqs.CfnQueue(this, 'IsolatedQueueServiceEcsProcessingDeadLetterQueue7CC1D07D', {
      messageRetentionPeriod: 1209600,
    });
    isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77 = new iam.CfnRole(this, 'IsolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7ACC77', {
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

    const isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6 = new logs.CfnLogGroup(this, 'IsolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAEB959E6', {
    });
    isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 = new iam.CfnRole(this, 'IsolatedQueueServiceQueueProcessingTaskDefTaskRoleCFCB7511', {
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
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
    });

    if (isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d' to be undefined. Fixit.`); }
    const isolatedQueueServiceEcsProcessingQueueCce172f1 = new sqs.CfnQueue(this, 'IsolatedQueueServiceEcsProcessingQueueCCE172F1', {
      redrivePolicy: {
        deadLetterTargetArn: isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d.attrArn,
        maxReceiveCount: 3,
      },
    });
    isolatedQueueServiceEcsProcessingQueueCce172f1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy5667D265 = new iam.CfnPolicy(this, 'IsolatedQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy5667D265', {
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
            Resource: isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'IsolatedQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy5667D265',
      roles: [
        isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const myCustomSgde27c661 = new ec2.CfnSecurityGroup(this, 'MyCustomSGDE27C661', {
      groupDescription: 'aws-ecs-patterns-queue-isolated/MyCustomSG',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 = new ec2.CfnSecurityGroup(this, 'VPCCloudWatchLogsEndpointSecurityGroup967DBC94', {
      groupDescription: 'aws-ecs-patterns-queue-isolated/VPC/CloudWatchLogsEndpoint/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: vpcb9e5f0b4.attrCidrBlock,
          description: [
            'from ',
            vpcb9e5f0b4.attrCidrBlock,
            ':443',
          ].join(''),
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcEcrEndpointSecurityGroup50Ed8ba4 = new ec2.CfnSecurityGroup(this, 'VPCEcrEndpointSecurityGroup50ED8BA4', {
      groupDescription: 'aws-ecs-patterns-queue-isolated/VPC/EcrEndpoint/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: vpcb9e5f0b4.attrCidrBlock,
          description: [
            'from ',
            vpcb9e5f0b4.attrCidrBlock,
            ':443',
          ].join(''),
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcEcrImageEndpointSecurityGroup83621638 = new ec2.CfnSecurityGroup(this, 'VPCEcrImageEndpointSecurityGroup83621638', {
      groupDescription: 'aws-ecs-patterns-queue-isolated/VPC/EcrImageEndpoint/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: vpcb9e5f0b4.attrCidrBlock,
          description: [
            'from ',
            vpcb9e5f0b4.attrCidrBlock,
            ':443',
          ].join(''),
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableEb156210 = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet1RouteTableEB156210', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/IsolatedSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1SubnetEbd00fc6 = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet1SubnetEBD00FC6', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.2.0/24',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/IsolatedSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTable9B4f78dc = new ec2.CfnRouteTable(this, 'VPCIsolatedSubnet2RouteTable9B4F78DC', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/IsolatedSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2Subnet4B1c8caa = new ec2.CfnSubnet(this, 'VPCIsolatedSubnet2Subnet4B1C8CAA', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.3.0/24',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/IsolatedSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/24',
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
          value: 'aws-ecs-patterns-queue-isolated/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
      vpcId: vpcb9e5f0b4.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.1.0/24',
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
          value: 'aws-ecs-patterns-queue-isolated/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcSqsEndpointSecurityGroupAe06a78d = new ec2.CfnSecurityGroup(this, 'VPCSqsEndpointSecurityGroupAE06A78D', {
      groupDescription: 'aws-ecs-patterns-queue-isolated/VPC/SqsEndpoint/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: vpcb9e5f0b4.attrCidrBlock,
          description: [
            'from ',
            vpcb9e5f0b4.attrCidrBlock,
            ':443',
          ].join(''),
          fromPort: 443,
          ipProtocol: 'tcp',
          toPort: 443,
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-isolated/VPC',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (isolatedQueueServiceEcsProcessingQueueCce172f1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceEcsProcessingQueueCce172f1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingTaskDef0F0ce105 = new ecs.CfnTaskDefinition(this, 'IsolatedQueueServiceQueueProcessingTaskDef0F0CE105', {
      containerDefinitions: [
        {
          environment: [
            {
              name: 'QUEUE_NAME',
              value: isolatedQueueServiceEcsProcessingQueueCce172f1.attrQueueName,
            },
          ],
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:95cefedd43575452a70cdeeeceb0f1c5728fd58c9ff8e81e760c3dac33c46417`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': isolatedQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupAeb959e6.ref,
              'awslogs-stream-prefix': 'IsolatedQueueService',
              'awslogs-region': this.region,
            },
          },
          name: 'QueueProcessingContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: isolatedQueueServiceQueueProcessingTaskDefExecutionRole1D7acc77.attrArn,
      family: 'awsecspatternsqueueisolatedIsolatedQueueServiceQueueProcessingTaskDef27DBAF49',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511.attrArn,
    });

    if (isolatedQueueServiceEcsProcessingQueueCce172f1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceEcsProcessingQueueCce172f1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b = new iam.CfnPolicy(this, 'IsolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52E156B', {
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
            Resource: isolatedQueueServiceEcsProcessingQueueCce172f1.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'IsolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52E156B',
      roles: [
        isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcCloudWatchLogsEndpointE175af65 = new ec2.CfnVPCEndpoint(this, 'VPCCloudWatchLogsEndpointE175AF65', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.logs',
      ].join(''),
      vpcId: vpcb9e5f0b4.ref,
      privateDnsEnabled: true,
      securityGroupIds: [
        vpcCloudWatchLogsEndpointSecurityGroup967Dbc94.attrGroupId,
      ],
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
      vpcEndpointType: 'Interface',
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcEcrEndpointB4f98f37 = new ec2.CfnVPCEndpoint(this, 'VPCEcrEndpointB4F98F37', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.ecr.api',
      ].join(''),
      vpcId: vpcb9e5f0b4.ref,
      privateDnsEnabled: true,
      securityGroupIds: [
        vpcEcrEndpointSecurityGroup50Ed8ba4.attrGroupId,
      ],
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
      vpcEndpointType: 'Interface',
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcEcrImageEndpointD55381dc = new ec2.CfnVPCEndpoint(this, 'VPCEcrImageEndpointD55381DC', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.ecr.dkr',
      ].join(''),
      vpcId: vpcb9e5f0b4.ref,
      privateDnsEnabled: true,
      securityGroupIds: [
        vpcEcrImageEndpointSecurityGroup83621638.attrGroupId,
      ],
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
      vpcEndpointType: 'Interface',
    });

    if (vpcIsolatedSubnet1RouteTableEb156210 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableEb156210' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet1RouteTableAssociationA2d18f7c = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet1RouteTableAssociationA2D18F7C', {
      routeTableId: vpcIsolatedSubnet1RouteTableEb156210.ref,
      subnetId: vpcIsolatedSubnet1SubnetEbd00fc6.ref,
    });

    if (vpcIsolatedSubnet2RouteTable9B4f78dc == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTable9B4f78dc' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    const vpcIsolatedSubnet2RouteTableAssociation7Bf8e0eb = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCIsolatedSubnet2RouteTableAssociation7BF8E0EB', {
      routeTableId: vpcIsolatedSubnet2RouteTable9B4f78dc.ref,
      subnetId: vpcIsolatedSubnet2Subnet4B1c8caa.ref,
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

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1RouteTableEb156210 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1RouteTableEb156210' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2RouteTable9B4f78dc == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2RouteTable9B4f78dc' to be undefined. Fixit.`); }
    const vpcs3Endpoint18C9c7ca = new ec2.CfnVPCEndpoint(this, 'VPCS3Endpoint18C9C7CA', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.s3',
      ].join(''),
      vpcId: vpcb9e5f0b4.ref,
      routeTableIds: [
        vpcIsolatedSubnet1RouteTableEb156210.ref,
        vpcIsolatedSubnet2RouteTable9B4f78dc.ref,
      ],
      vpcEndpointType: 'Gateway',
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const vpcSqsEndpoint9A40d77f = new ec2.CfnVPCEndpoint(this, 'VPCSqsEndpoint9A40D77F', {
      serviceName: [
        'com.amazonaws.',
        this.region,
        '.sqs',
      ].join(''),
      vpcId: vpcb9e5f0b4.ref,
      privateDnsEnabled: true,
      securityGroupIds: [
        vpcSqsEndpointSecurityGroupAe06a78d.attrGroupId,
      ],
      subnetIds: [
        vpcIsolatedSubnet1SubnetEbd00fc6.ref,
        vpcIsolatedSubnet2Subnet4B1c8caa.ref,
      ],
      vpcEndpointType: 'Interface',
    });

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDef0F0ce105 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDef0F0ce105' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (myCustomSgde27c661 == null) { throw new Error(`A combination of conditions caused 'myCustomSgde27c661' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet1SubnetEbd00fc6 == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet1SubnetEbd00fc6' to be undefined. Fixit.`); }
    if (vpcIsolatedSubnet2Subnet4B1c8caa == null) { throw new Error(`A combination of conditions caused 'vpcIsolatedSubnet2Subnet4B1c8caa' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceE868aee1 = new ecs.CfnService(this, 'IsolatedQueueServiceQueueProcessingFargateServiceE868AEE1', {
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
            myCustomSgde27c661.attrGroupId,
          ],
          subnets: [
            vpcIsolatedSubnet1SubnetEbd00fc6.ref,
            vpcIsolatedSubnet2Subnet4B1c8caa.ref,
          ],
        },
      },
      taskDefinition: isolatedQueueServiceQueueProcessingTaskDef0F0ce105.ref,
    });
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceE868aee1.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingFargateServiceE868aee1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceE868aee1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d = new applicationautoscaling.CfnScalableTarget(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06FD17D', {
      maxCapacity: 2,
      minCapacity: 1,
      resourceId: [
        'service/',
        ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
        '/',
        isolatedQueueServiceQueueProcessingFargateServiceE868aee1.attrName,
      ].join(''),
      scalableDimension: 'ecs:service:DesiredCount',
      serviceNamespace: 'ecs',
      roleArn: [
        'arn:',
        this.partition,
        ':iam::',
        this.account,
        ':role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService',
      ].join(''),
    });
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d = new applicationautoscaling.CfnScalingPolicy(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518D9D', {
      policyName: 'awsecspatternsqueueisolatedIsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling8B2FB6C4',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'ECSServiceAverageCPUUtilization',
        },
        targetValue: 50,
      },
    });
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScaling2B518d9d.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1 = new applicationautoscaling.CfnScalingPolicy(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4BA1', {
      policyName: 'awsecspatternsqueueisolatedIsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy5EFC8D1B',
      policyType: 'StepScaling',
      scalingTargetId: isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.ref,
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
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025 = new applicationautoscaling.CfnScalingPolicy(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFAB35025', {
      policyName: 'awsecspatternsqueueisolatedIsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy51E582BF',
      policyType: 'StepScaling',
      scalingTargetId: isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetB06fd17d.ref,
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
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (isolatedQueueServiceEcsProcessingQueueCce172f1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceEcsProcessingQueueCce172f1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9 = new cloudwatch.CfnAlarm(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1A0F9', {
      comparisonOperator: 'LessThanOrEqualToThreshold',
      evaluationPeriods: 1,
      alarmActions: [
        isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy960D4ba1.ref,
      ],
      alarmDescription: 'Lower threshold scaling alarm',
      dimensions: [
        {
          name: 'QueueName',
          value: isolatedQueueServiceEcsProcessingQueueCce172f1.attrQueueName,
        },
      ],
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 0,
    });
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm88D1a0f9.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    if (isolatedQueueServiceEcsProcessingQueueCce172f1 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceEcsProcessingQueueCce172f1' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511 == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511' to be undefined. Fixit.`); }
    if (isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b == null) { throw new Error(`A combination of conditions caused 'isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointE175af65 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointE175af65' to be undefined. Fixit.`); }
    if (vpcCloudWatchLogsEndpointSecurityGroup967Dbc94 == null) { throw new Error(`A combination of conditions caused 'vpcCloudWatchLogsEndpointSecurityGroup967Dbc94' to be undefined. Fixit.`); }
    if (vpcEcrEndpointB4f98f37 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointB4f98f37' to be undefined. Fixit.`); }
    if (vpcEcrEndpointSecurityGroup50Ed8ba4 == null) { throw new Error(`A combination of conditions caused 'vpcEcrEndpointSecurityGroup50Ed8ba4' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointD55381dc == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointD55381dc' to be undefined. Fixit.`); }
    if (vpcEcrImageEndpointSecurityGroup83621638 == null) { throw new Error(`A combination of conditions caused 'vpcEcrImageEndpointSecurityGroup83621638' to be undefined. Fixit.`); }
    if (vpcSqsEndpoint9A40d77f == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpoint9A40d77f' to be undefined. Fixit.`); }
    if (vpcSqsEndpointSecurityGroupAe06a78d == null) { throw new Error(`A combination of conditions caused 'vpcSqsEndpointSecurityGroupAe06a78d' to be undefined. Fixit.`); }
    const isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5 = new cloudwatch.CfnAlarm(this, 'IsolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      alarmActions: [
        isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyFab35025.ref,
      ],
      alarmDescription: 'Upper threshold scaling alarm',
      dimensions: [
        {
          name: 'QueueName',
          value: isolatedQueueServiceEcsProcessingQueueCce172f1.attrQueueName,
        },
      ],
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 100,
    });
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyD52e156b);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(isolatedQueueServiceQueueProcessingTaskDefTaskRoleCfcb7511);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcCloudWatchLogsEndpointE175af65);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcCloudWatchLogsEndpointSecurityGroup967Dbc94);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcEcrEndpointB4f98f37);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcEcrEndpointSecurityGroup50Ed8ba4);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcEcrImageEndpointD55381dc);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcEcrImageEndpointSecurityGroup83621638);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcSqsEndpoint9A40d77f);
    isolatedQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm351987F5.addDependency(vpcSqsEndpointSecurityGroupAe06a78d);

    // Outputs
    this.isolatedQueueServiceSqsDeadLetterQueue43D346b9 = isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputIsolatedQueueServiceSQSDeadLetterQueue43D346B9', {
      key: 'IsolatedQueueServiceSQSDeadLetterQueue43D346B9',
      value: this.isolatedQueueServiceSqsDeadLetterQueue43D346b9!.toString(),
    });
    this.isolatedQueueServiceSqsDeadLetterQueueArnCe7c60f2 = isolatedQueueServiceEcsProcessingDeadLetterQueue7Cc1d07d.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputIsolatedQueueServiceSQSDeadLetterQueueArnCE7C60F2', {
      key: 'IsolatedQueueServiceSQSDeadLetterQueueArnCE7C60F2',
      value: this.isolatedQueueServiceSqsDeadLetterQueueArnCe7c60f2!.toString(),
    });
    this.isolatedQueueServiceSqsQueueA65e2641 = isolatedQueueServiceEcsProcessingQueueCce172f1.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputIsolatedQueueServiceSQSQueueA65E2641', {
      key: 'IsolatedQueueServiceSQSQueueA65E2641',
      value: this.isolatedQueueServiceSqsQueueA65e2641!.toString(),
    });
    this.isolatedQueueServiceSqsQueueArn571Fdb86 = isolatedQueueServiceEcsProcessingQueueCce172f1.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputIsolatedQueueServiceSQSQueueArn571FDB86', {
      key: 'IsolatedQueueServiceSQSQueueArn571FDB86',
      value: this.isolatedQueueServiceSqsQueueArn571Fdb86!.toString(),
    });
  }
}

