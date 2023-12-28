import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-ecs-patterns-queue-health-checkProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-patterns-queue-health-check extends cdk.Stack {
  public readonly healthCheckQueueServiceSqsDeadLetterQueue6Dc0188c;
  public readonly healthCheckQueueServiceSqsDeadLetterQueueArnAb5730dd;
  public readonly healthCheckQueueServiceSqsQueue9E8d5698;
  public readonly healthCheckQueueServiceSqsQueueArnB4a71095;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-patterns-queue-health-checkProps = {}) {
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

    const healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724 = new sqs.CfnQueue(this, 'HealthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724', {
      messageRetentionPeriod: 1209600,
    });
    healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f = new iam.CfnRole(this, 'HealthCheckQueueServiceQueueProcessingTaskDefExecutionRole90BAC61F', {
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

    const healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460 = new logs.CfnLogGroup(this, 'HealthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6BFC460', {
    });
    healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df = new iam.CfnRole(this, 'HealthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9B3DF', {
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
          value: 'aws-ecs-patterns-queue-health-check/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet2',
        },
      ],
    });

    if (healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724' to be undefined. Fixit.`); }
    const healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d = new sqs.CfnQueue(this, 'HealthCheckQueueServiceEcsProcessingQueue2FE4AB4D', {
      redrivePolicy: {
        deadLetterTargetArn: healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724.attrArn,
        maxReceiveCount: 3,
      },
    });
    healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy7Ac42dd5 = new iam.CfnPolicy(this, 'HealthCheckQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy7AC42DD5', {
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
            Resource: healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'HealthCheckQueueServiceQueueProcessingTaskDefExecutionRoleDefaultPolicy7AC42DD5',
      roles: [
        healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PrivateSubnet1',
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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PrivateSubnet2',
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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet2',
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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet2',
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

    if (healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingTaskDefE2def18c = new ecs.CfnTaskDefinition(this, 'HealthCheckQueueServiceQueueProcessingTaskDefE2DEF18C', {
      containerDefinitions: [
        {
          environment: [
            {
              name: 'QUEUE_NAME',
              value: healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrQueueName,
            },
          ],
          essential: true,
          healthCheck: {
            command: [
              'CMD-SHELL',
              'cat /tmp/health_status | grep -q \"1\" || exit 1',
            ],
            interval: 10,
            retries: 10,
            timeout: 5,
          },
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:205c5d917605ee59cc93dc29526bc4f73b315ae613cdfbc52b8179f388041a03`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': healthCheckQueueServiceQueueProcessingTaskDefQueueProcessingContainerLogGroupA6bfc460.ref,
              'awslogs-stream-prefix': 'HealthCheckQueueService',
              'awslogs-region': this.region,
            },
          },
          name: 'QueueProcessingContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: healthCheckQueueServiceQueueProcessingTaskDefExecutionRole90Bac61f.attrArn,
      family: 'awsecspatternsqueuehealthcheckHealthCheckQueueServiceQueueProcessingTaskDef531E773A',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df.attrArn,
    });

    if (healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa = new iam.CfnPolicy(this, 'HealthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDE6F15AA', {
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
            Resource: healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'HealthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDE6F15AA',
      roles: [
        healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df.ref,
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

    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd = new ec2.CfnSecurityGroup(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3F38AFD', {
      groupDescription: 'aws-ecs-patterns-queue-health-check/HealthCheckQueueService/QueueProcessingFargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet1',
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
          value: 'aws-ecs-patterns-queue-health-check/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (ecsDefaultClusterMnL3mNnynvpc9c1ec7a3 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynvpc9c1ec7a3' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefE2def18c == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefE2def18c' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateService3Ff69405 = new ecs.CfnService(this, 'HealthCheckQueueServiceQueueProcessingFargateService3FF69405', {
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
            healthCheckQueueServiceQueueProcessingFargateServiceSecurityGroupC3f38afd.attrGroupId,
          ],
          subnets: [
            vpcPublicSubnet1SubnetB4246d30.ref,
            vpcPublicSubnet2Subnet74179F39.ref,
          ],
        },
      },
      taskDefinition: healthCheckQueueServiceQueueProcessingTaskDefE2def18c.ref,
    });
    healthCheckQueueServiceQueueProcessingFargateService3Ff69405.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateService3Ff69405.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

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
    if (healthCheckQueueServiceQueueProcessingFargateService3Ff69405 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateService3Ff69405' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0 = new applicationautoscaling.CfnScalableTarget(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1FE1D4C0', {
      maxCapacity: 2,
      minCapacity: 1,
      resourceId: [
        'service/',
        ecsDefaultClusterMnL3mNnynvpc9c1ec7a3.ref,
        '/',
        healthCheckQueueServiceQueueProcessingFargateService3Ff69405.attrName,
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
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    if (healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScalingE6c00530 = new applicationautoscaling.CfnScalingPolicy(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScalingE6C00530', {
      policyName: 'awsecspatternsqueuehealthcheckHealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScalingAE7C2661',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'ECSServiceAverageCPUUtilization',
        },
        targetValue: 50,
      },
    });
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScalingE6c00530.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetCpuScalingE6c00530.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    if (healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f = new applicationautoscaling.CfnScalingPolicy(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350CBF9F', {
      policyName: 'awsecspatternsqueuehealthcheckHealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicyB2D7C3E7',
      policyType: 'StepScaling',
      scalingTargetId: healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0.ref,
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
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    if (healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785 = new applicationautoscaling.CfnScalingPolicy(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAABD0785', {
      policyName: 'awsecspatternsqueuehealthcheckHealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicy953F3B85',
      policyType: 'StepScaling',
      scalingTargetId: healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTarget1Fe1d4c0.ref,
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
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    if (healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9F271c45 = new cloudwatch.CfnAlarm(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9F271C45', {
      alarmActions: [
        healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerPolicy350Cbf9f.ref,
      ],
      alarmDescription: 'Lower threshold scaling alarm',
      comparisonOperator: 'LessThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 0,
    });
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9F271c45.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingLowerAlarm9F271c45.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    if (healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785 == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df' to be undefined. Fixit.`); }
    if (healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa == null) { throw new Error(`A combination of conditions caused 'healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa' to be undefined. Fixit.`); }
    const healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm0Adeac2a = new cloudwatch.CfnAlarm(this, 'HealthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm0ADEAC2A', {
      alarmActions: [
        healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperPolicyAabd0785.ref,
      ],
      alarmDescription: 'Upper threshold scaling alarm',
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      dimensions: [
        {
          name: 'QueueName',
          value: healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrQueueName,
        },
      ],
      evaluationPeriods: 1,
      metricName: 'ApproximateNumberOfMessagesVisible',
      namespace: 'AWS/SQS',
      period: 300,
      statistic: 'Maximum',
      threshold: 100,
    });
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm0Adeac2a.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRoleDefaultPolicyDe6f15aa);
    healthCheckQueueServiceQueueProcessingFargateServiceTaskCountTargetQueueMessagesVisibleScalingUpperAlarm0Adeac2a.addDependency(healthCheckQueueServiceQueueProcessingTaskDefTaskRole75C9b3df);

    // Outputs
    this.healthCheckQueueServiceSqsDeadLetterQueue6Dc0188c = healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputHealthCheckQueueServiceSQSDeadLetterQueue6DC0188C', {
      key: 'HealthCheckQueueServiceSQSDeadLetterQueue6DC0188C',
      value: this.healthCheckQueueServiceSqsDeadLetterQueue6Dc0188c!.toString(),
    });
    this.healthCheckQueueServiceSqsDeadLetterQueueArnAb5730dd = healthCheckQueueServiceEcsProcessingDeadLetterQueueE3547724.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputHealthCheckQueueServiceSQSDeadLetterQueueArnAB5730DD', {
      key: 'HealthCheckQueueServiceSQSDeadLetterQueueArnAB5730DD',
      value: this.healthCheckQueueServiceSqsDeadLetterQueueArnAb5730dd!.toString(),
    });
    this.healthCheckQueueServiceSqsQueue9E8d5698 = healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrQueueName;
    new cdk.CfnOutput(this, 'CfnOutputHealthCheckQueueServiceSQSQueue9E8D5698', {
      key: 'HealthCheckQueueServiceSQSQueue9E8D5698',
      value: this.healthCheckQueueServiceSqsQueue9E8d5698!.toString(),
    });
    this.healthCheckQueueServiceSqsQueueArnB4a71095 = healthCheckQueueServiceEcsProcessingQueue2Fe4ab4d.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputHealthCheckQueueServiceSQSQueueArnB4A71095', {
      key: 'HealthCheckQueueServiceSQSQueueArnB4A71095',
      value: this.healthCheckQueueServiceSqsQueueArnB4a71095!.toString(),
    });
  }
}

