import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-sfn-tasks-ecs-ec2-integProps extends cdk.StackProps {
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

export class aws-sfn-tasks-ecs-ec2-integ extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: aws-sfn-tasks-ecs-ec2-integProps = {}) {
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
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRole23116FA3', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898', {
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045ED7', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'autoscaling.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 = new sns.CfnTopic(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263B30', {
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterEe43e89d = new ecs.CfnCluster(this, 'Ec2ClusterEE43E89D', {
    });

    const ec2ClusterVpc568127F1 = new ec2.CfnVPC(this, 'Ec2ClusterVpc568127F1', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc',
        },
      ],
    });

    const ec2ClusterVpcIgw605638eb = new ec2.CfnInternetGateway(this, 'Ec2ClusterVpcIGW605638EB', {
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc',
        },
      ],
    });

    const ec2ClusterVpcPublicSubnet1Eipd4b5d142 = new ec2.CfnEIP(this, 'Ec2ClusterVpcPublicSubnet1EIPD4B5D142', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet1',
        },
      ],
    });

    const ec2ClusterVpcPublicSubnet2Eip921925e6 = new ec2.CfnEIP(this, 'Ec2ClusterVpcPublicSubnet2EIP921925E6', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet2',
        },
      ],
    });

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

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

    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471 = new iam.CfnInstanceProfile(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceProfileDB232471', {
      roles: [
        ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898.ref,
      ],
    });

    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2DC2FD', {
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
      policyName: 'Ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2DC2FD',
      roles: [
        ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898.ref,
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e = new ec2.CfnSecurityGroup(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0A9E', {
      groupDescription: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: ec2ClusterVpc568127F1.ref,
    });

    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974B', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974B',
      roles: [
        ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7.ref,
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet1RouteTable50D391d1 = new ec2.CfnRouteTable(this, 'Ec2ClusterVpcPrivateSubnet1RouteTable50D391D1', {
      vpcId: ec2ClusterVpc568127F1.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet1Subnet0Ae9b91e = new ec2.CfnSubnet(this, 'Ec2ClusterVpcPrivateSubnet1Subnet0AE9B91E', {
      vpcId: ec2ClusterVpc568127F1.ref,
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6 = new ec2.CfnRouteTable(this, 'Ec2ClusterVpcPrivateSubnet2RouteTable22B9DAE6', {
      vpcId: ec2ClusterVpc568127F1.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet2Subnet16B68c19 = new ec2.CfnSubnet(this, 'Ec2ClusterVpcPrivateSubnet2Subnet16B68C19', {
      vpcId: ec2ClusterVpc568127F1.ref,
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet1RouteTableE30610f5 = new ec2.CfnRouteTable(this, 'Ec2ClusterVpcPublicSubnet1RouteTableE30610F5', {
      vpcId: ec2ClusterVpc568127F1.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet1SubnetD46fd92b = new ec2.CfnSubnet(this, 'Ec2ClusterVpcPublicSubnet1SubnetD46FD92B', {
      vpcId: ec2ClusterVpc568127F1.ref,
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet2RouteTable44A09188 = new ec2.CfnRouteTable(this, 'Ec2ClusterVpcPublicSubnet2RouteTable44A09188', {
      vpcId: ec2ClusterVpc568127F1.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet2Subnet207D9e5e = new ec2.CfnSubnet(this, 'Ec2ClusterVpcPublicSubnet2Subnet207D9E5E', {
      vpcId: ec2ClusterVpc568127F1.ref,
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
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ec2ClusterVpc568127F1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpc568127F1' to be undefined. Fixit.`); }
    if (ec2ClusterVpcIgw605638eb == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcIgw605638eb' to be undefined. Fixit.`); }
    const ec2ClusterVpcVpcgw24f3b413 = new ec2.CfnVPCGatewayAttachment(this, 'Ec2ClusterVpcVPCGW24F3B413', {
      vpcId: ec2ClusterVpc568127F1.ref,
      internetGatewayId: ec2ClusterVpcIgw605638eb.ref,
    });

    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTheContainerLogGroupD94c8ef5 == null) { throw new Error(`A combination of conditions caused 'taskDefTheContainerLogGroupD94c8ef5' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:7a4895bc694ae074467753dddb9a798e58f2f5eda62bcce5833d7d356b8a1da2`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': taskDefTheContainerLogGroupD94c8ef5.ref,
              'awslogs-stream-prefix': 'EventDemo',
              'awslogs-region': this.region,
            },
          },
          memory: 256,
          name: 'TheContainer',
        },
      ],
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awssfntasksecsec2integTaskDefFAFE2BE7',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
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

    if (ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be = new ec2.CfnLaunchTemplate(this, 'Ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58BE', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          ec2ClusterEe43e89d.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.addDependency(ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd);
    ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.addDependency(ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898);

    if (ec2ClusterVpcPrivateSubnet1RouteTable50D391d1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet1RouteTable50D391d1' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPrivateSubnet1Subnet0Ae9b91e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet1Subnet0Ae9b91e' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet1RouteTableAssociation1043Dbda = new ec2.CfnSubnetRouteTableAssociation(this, 'Ec2ClusterVpcPrivateSubnet1RouteTableAssociation1043DBDA', {
      routeTableId: ec2ClusterVpcPrivateSubnet1RouteTable50D391d1.ref,
      subnetId: ec2ClusterVpcPrivateSubnet1Subnet0Ae9b91e.ref,
    });

    if (ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPrivateSubnet2Subnet16B68c19 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet2Subnet16B68c19' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet2RouteTableAssociation3Afd70f4 = new ec2.CfnSubnetRouteTableAssociation(this, 'Ec2ClusterVpcPrivateSubnet2RouteTableAssociation3AFD70F4', {
      routeTableId: ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6.ref,
      subnetId: ec2ClusterVpcPrivateSubnet2Subnet16B68c19.ref,
    });

    if (ec2ClusterVpcIgw605638eb == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcIgw605638eb' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1RouteTableE30610f5 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1RouteTableE30610f5' to be undefined. Fixit.`); }
    if (ec2ClusterVpcVpcgw24f3b413 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcVpcgw24f3b413' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet1DefaultRouteC7fbe273 = new ec2.CfnRoute(this, 'Ec2ClusterVpcPublicSubnet1DefaultRouteC7FBE273', {
      routeTableId: ec2ClusterVpcPublicSubnet1RouteTableE30610f5.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ec2ClusterVpcIgw605638eb.ref,
    });
    ec2ClusterVpcPublicSubnet1DefaultRouteC7fbe273.addDependency(ec2ClusterVpcVpcgw24f3b413);

    if (ec2ClusterVpcPublicSubnet1RouteTableE30610f5 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1RouteTableE30610f5' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1SubnetD46fd92b == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1SubnetD46fd92b' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet1RouteTableAssociation9C78f646 = new ec2.CfnSubnetRouteTableAssociation(this, 'Ec2ClusterVpcPublicSubnet1RouteTableAssociation9C78F646', {
      routeTableId: ec2ClusterVpcPublicSubnet1RouteTableE30610f5.ref,
      subnetId: ec2ClusterVpcPublicSubnet1SubnetD46fd92b.ref,
    });

    if (ec2ClusterVpcIgw605638eb == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcIgw605638eb' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2RouteTable44A09188 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2RouteTable44A09188' to be undefined. Fixit.`); }
    if (ec2ClusterVpcVpcgw24f3b413 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcVpcgw24f3b413' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet2DefaultRouteEba52256 = new ec2.CfnRoute(this, 'Ec2ClusterVpcPublicSubnet2DefaultRouteEBA52256', {
      routeTableId: ec2ClusterVpcPublicSubnet2RouteTable44A09188.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ec2ClusterVpcIgw605638eb.ref,
    });
    ec2ClusterVpcPublicSubnet2DefaultRouteEba52256.addDependency(ec2ClusterVpcVpcgw24f3b413);

    if (ec2ClusterVpcPublicSubnet2RouteTable44A09188 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2RouteTable44A09188' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2Subnet207D9e5e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2Subnet207D9e5e' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet2RouteTableAssociation7615C6b2 = new ec2.CfnSubnetRouteTableAssociation(this, 'Ec2ClusterVpcPublicSubnet2RouteTableAssociation7615C6B2', {
      routeTableId: ec2ClusterVpcPublicSubnet2RouteTable44A09188.ref,
      subnetId: ec2ClusterVpcPublicSubnet2Subnet207D9e5e.ref,
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecs:RunTask',
            Effect: 'Allow',
            Resource: [
              'arn:',
              cdk.Fn.select(1, cdk.Fn.split(':', taskDef54694570.ref)),
              ':',
              cdk.Fn.select(2, cdk.Fn.split(':', taskDef54694570.ref)),
              ':',
              cdk.Fn.select(3, cdk.Fn.split(':', taskDef54694570.ref)),
              ':',
              cdk.Fn.select(4, cdk.Fn.split(':', taskDef54694570.ref)),
              ':',
              cdk.Fn.select(0, cdk.Fn.split('/', cdk.Fn.select(5, cdk.Fn.split(':', taskDef54694570.ref)))),
              '/',
              cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.select(5, cdk.Fn.split(':', taskDef54694570.ref)))),
            ].join(''),
          },
          {
            Action: [
              'ecs:DescribeTasks',
              'ecs:StopTask',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: [
              taskDefExecutionRoleB4775c97.attrArn,
              taskDefTaskRole1Edb4a67.attrArn,
            ],
          },
          {
            Action: [
              'events:DescribeRule',
              'events:PutRule',
              'events:PutTargets',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':rule/StepFunctionsGetEventsForECSTaskRule',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1SubnetD46fd92b == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1SubnetD46fd92b' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2Subnet207D9e5e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2Subnet207D9e5e' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 = new autoscaling.CfnAutoScalingGroup(this, 'Ec2ClusterDefaultAutoScalingGroupASGC5A6D4C0', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.ref,
        version: ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        ec2ClusterVpcPublicSubnet1SubnetD46fd92b.ref,
        ec2ClusterVpcPublicSubnet2Subnet207D9e5e.ref,
      ],
    });
    ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (ec2ClusterVpcPublicSubnet1DefaultRouteC7fbe273 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1DefaultRouteC7fbe273' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1Eipd4b5d142 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1Eipd4b5d142' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1RouteTableAssociation9C78f646 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1RouteTableAssociation9C78f646' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1SubnetD46fd92b == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1SubnetD46fd92b' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet1NatGateway79A8a839 = new ec2.CfnNatGateway(this, 'Ec2ClusterVpcPublicSubnet1NATGateway79A8A839', {
      subnetId: ec2ClusterVpcPublicSubnet1SubnetD46fd92b.ref,
      allocationId: ec2ClusterVpcPublicSubnet1Eipd4b5d142.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet1',
        },
      ],
    });
    ec2ClusterVpcPublicSubnet1NatGateway79A8a839.addDependency(ec2ClusterVpcPublicSubnet1DefaultRouteC7fbe273);
    ec2ClusterVpcPublicSubnet1NatGateway79A8a839.addDependency(ec2ClusterVpcPublicSubnet1RouteTableAssociation9C78f646);

    if (ec2ClusterVpcPublicSubnet2DefaultRouteEba52256 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2DefaultRouteEba52256' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2Eip921925e6 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2Eip921925e6' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2RouteTableAssociation7615C6b2 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2RouteTableAssociation7615C6b2' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2Subnet207D9e5e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2Subnet207D9e5e' to be undefined. Fixit.`); }
    const ec2ClusterVpcPublicSubnet2NatGateway302F96c0 = new ec2.CfnNatGateway(this, 'Ec2ClusterVpcPublicSubnet2NATGateway302F96C0', {
      subnetId: ec2ClusterVpcPublicSubnet2Subnet207D9e5e.ref,
      allocationId: ec2ClusterVpcPublicSubnet2Eip921925e6.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/Vpc/PublicSubnet2',
        },
      ],
    });
    ec2ClusterVpcPublicSubnet2NatGateway302F96c0.addDependency(ec2ClusterVpcPublicSubnet2DefaultRouteEba52256);
    ec2ClusterVpcPublicSubnet2NatGateway302F96c0.addDependency(ec2ClusterVpcPublicSubnet2RouteTableAssociation7615C6b2);

    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"SomeKey\":\"SomeValue\"},\"Next\":\"Run\"},\"Run\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::ecs:runTask.sync\",\"Parameters\":{\"Cluster\":\"',
        ec2ClusterEe43e89d.attrArn,
        '\",\"TaskDefinition\":\"awssfntasksecsec2integTaskDefFAFE2BE7\",\"Overrides\":{\"ContainerOverrides\":[{\"Name\":\"TheContainer\",\"Environment\":[{\"Name\":\"SOME_KEY\",\"Value.$\":\"$.SomeKey\"}]}]},\"LaunchType\":\"EC2\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33 = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy638C9E33', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ec2:DescribeHosts',
              'ec2:DescribeInstanceAttribute',
              'ec2:DescribeInstanceStatus',
              'ec2:DescribeInstances',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'autoscaling:CompleteLifecycleAction',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':autoscaling:',
              this.region,
              ':',
              this.account,
              ':autoScalingGroup:*:autoScalingGroupName/',
              ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.ref,
            ].join(''),
          },
          {
            Action: [
              'ecs:DescribeContainerInstances',
              'ecs:DescribeTasks',
              'ecs:ListTasks',
              'ecs:UpdateContainerInstancesState',
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
              'ecs:ListContainerInstances',
              'ecs:SubmitContainerStateChange',
              'ecs:SubmitTaskStateChange',
            ],
            Effect: 'Allow',
            Resource: ec2ClusterEe43e89d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy638C9E33',
      roles: [
        ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3.ref,
      ],
    });

    if (ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e = new autoscaling.CfnLifecycleHook(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5CB1467E', {
      autoScalingGroupName: ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
      roleArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7.attrArn,
    });
    ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e.addDependency(ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b);
    ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e.addDependency(ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7);

    if (ec2ClusterVpcPrivateSubnet1RouteTable50D391d1 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet1RouteTable50D391d1' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet1NatGateway79A8a839 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet1NatGateway79A8a839' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet1DefaultRouteD31a76f0 = new ec2.CfnRoute(this, 'Ec2ClusterVpcPrivateSubnet1DefaultRouteD31A76F0', {
      routeTableId: ec2ClusterVpcPrivateSubnet1RouteTable50D391d1.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ec2ClusterVpcPublicSubnet1NatGateway79A8a839.ref,
    });

    if (ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6' to be undefined. Fixit.`); }
    if (ec2ClusterVpcPublicSubnet2NatGateway302F96c0 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterVpcPublicSubnet2NatGateway302F96c0' to be undefined. Fixit.`); }
    const ec2ClusterVpcPrivateSubnet2DefaultRoute22B3073e = new ec2.CfnRoute(this, 'Ec2ClusterVpcPrivateSubnet2DefaultRoute22B3073E', {
      routeTableId: ec2ClusterVpcPrivateSubnet2RouteTable22B9dae6.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ec2ClusterVpcPublicSubnet2NatGateway302F96c0.ref,
    });

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 = new lambda.CfnFunction(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionE0DEFB31', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3.attrArn,
      environment: {
        variables: {
          CLUSTER: ec2ClusterEe43e89d.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-ec2-integ/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.addDependency(ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33);
    ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.addDependency(ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3);

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawssfntasksecsec2integEc2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicEe9e39a29acceea3 = new lambda.CfnPermission(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawssfntasksecsec2integEc2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicEE9E39A29ACCEEA3', {
      action: 'lambda:InvokeFunction',
      functionName: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
    });

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionTopic4795E0f6 = new sns.CfnSubscription(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionTopic4795E0F6', {
      protocol: 'lambda',
      topicArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
      endpoint: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.attrArn,
    });

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

