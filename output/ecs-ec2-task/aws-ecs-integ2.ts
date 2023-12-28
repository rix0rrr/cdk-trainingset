import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-ecs-integ2Props extends cdk.StackProps {
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

export class aws-ecs-integ2 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ2Props = {}) {
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
    const fargateCluster7Ccd5f93 = new ecs.CfnCluster(this, 'FargateCluster7CCD5F93', {
    });

    const fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32 = new iam.CfnRole(this, 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRole7FEDCD32', {
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
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7 = new iam.CfnRole(this, 'FargateClusterDefaultAutoScalingGroupInstanceRole0C1F7FF7', {
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
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d = new iam.CfnRole(this, 'FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556D', {
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
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10 = new sns.CfnTopic(this, 'FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const fargateClusterVpc377E8024 = new ec2.CfnVPC(this, 'FargateClusterVpc377E8024', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc',
        },
      ],
    });

    const fargateClusterVpcIgw827638cb = new ec2.CfnInternetGateway(this, 'FargateClusterVpcIGW827638CB', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc',
        },
      ],
    });

    const fargateClusterVpcPublicSubnet1Eipf91909d0 = new ec2.CfnEIP(this, 'FargateClusterVpcPublicSubnet1EIPF91909D0', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    const fargateClusterVpcPublicSubnet2Eipbbb24774 = new ec2.CfnEIP(this, 'FargateClusterVpcPublicSubnet2EIPBBB24774', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet2',
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

    if (fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupInstanceProfile2C0fef3b = new iam.CfnInstanceProfile(this, 'FargateClusterDefaultAutoScalingGroupInstanceProfile2C0FEF3B', {
      roles: [
        fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7.ref,
      ],
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3Bd78f3e = new iam.CfnPolicy(this, 'FargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3BD78F3E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: fargateCluster7Ccd5f93.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': fargateCluster7Ccd5f93.attrArn,
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
      policyName: 'FargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3BD78F3E',
      roles: [
        fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7.ref,
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupInstanceSecurityGroup42Af8a40 = new ec2.CfnSecurityGroup(this, 'FargateClusterDefaultAutoScalingGroupInstanceSecurityGroup42AF8A40', {
      groupDescription: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: fargateClusterVpc377E8024.ref,
    });

    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19d = new iam.CfnPolicy(this, 'FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19D', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19D',
      roles: [
        fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d.ref,
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet1RouteTable21B3ceae = new ec2.CfnRouteTable(this, 'FargateClusterVpcPrivateSubnet1RouteTable21B3CEAE', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet1Subnet9127625F = new ec2.CfnSubnet(this, 'FargateClusterVpcPrivateSubnet1Subnet9127625F', {
      vpcId: fargateClusterVpc377E8024.ref,
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
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet2RouteTable7B7f9678 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPrivateSubnet2RouteTable7B7F9678', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet2Subnet307Cee57 = new ec2.CfnSubnet(this, 'FargateClusterVpcPrivateSubnet2Subnet307CEE57', {
      vpcId: fargateClusterVpc377E8024.ref,
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
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1RouteTable1D7fa747 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPublicSubnet1RouteTable1D7FA747', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1SubnetB9c24bc7 = new ec2.CfnSubnet(this, 'FargateClusterVpcPublicSubnet1SubnetB9C24BC7', {
      vpcId: fargateClusterVpc377E8024.ref,
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
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2RouteTable1493C5d6 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPublicSubnet2RouteTable1493C5D6', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2Subnet24C0f9d8 = new ec2.CfnSubnet(this, 'FargateClusterVpcPublicSubnet2Subnet24C0F9D8', {
      vpcId: fargateClusterVpc377E8024.ref,
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
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    if (fargateClusterVpcIgw827638cb == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcIgw827638cb' to be undefined. Fixit.`); }
    const fargateClusterVpcVpcgw38717255 = new ec2.CfnVPCGatewayAttachment(this, 'FargateClusterVpcVPCGW38717255', {
      vpcId: fargateClusterVpc377E8024.ref,
      internetGatewayId: fargateClusterVpcIgw827638cb.ref,
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
      family: 'awsecsinteg2TaskDef1F38909D',
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

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupInstanceProfile2C0fef3b == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceProfile2C0fef3b' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3Bd78f3e == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3Bd78f3e' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupInstanceSecurityGroup42Af8a40 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupInstanceSecurityGroup42Af8a40' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a = new ec2.CfnLaunchTemplate(this, 'FargateClusterDefaultAutoScalingGroupLaunchTemplate7BE88B5A', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: fargateClusterDefaultAutoScalingGroupInstanceProfile2C0fef3b.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          fargateClusterDefaultAutoScalingGroupInstanceSecurityGroup42Af8a40.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          fargateCluster7Ccd5f93.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a.addDependency(fargateClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy3Bd78f3e);
    fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a.addDependency(fargateClusterDefaultAutoScalingGroupInstanceRole0C1f7ff7);

    if (fargateClusterVpcPrivateSubnet1RouteTable21B3ceae == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet1RouteTable21B3ceae' to be undefined. Fixit.`); }
    if (fargateClusterVpcPrivateSubnet1Subnet9127625F == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet1Subnet9127625F' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet1RouteTableAssociation78F6e213 = new ec2.CfnSubnetRouteTableAssociation(this, 'FargateClusterVpcPrivateSubnet1RouteTableAssociation78F6E213', {
      routeTableId: fargateClusterVpcPrivateSubnet1RouteTable21B3ceae.ref,
      subnetId: fargateClusterVpcPrivateSubnet1Subnet9127625F.ref,
    });

    if (fargateClusterVpcPrivateSubnet2RouteTable7B7f9678 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet2RouteTable7B7f9678' to be undefined. Fixit.`); }
    if (fargateClusterVpcPrivateSubnet2Subnet307Cee57 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet2Subnet307Cee57' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet2RouteTableAssociation3A46964c = new ec2.CfnSubnetRouteTableAssociation(this, 'FargateClusterVpcPrivateSubnet2RouteTableAssociation3A46964C', {
      routeTableId: fargateClusterVpcPrivateSubnet2RouteTable7B7f9678.ref,
      subnetId: fargateClusterVpcPrivateSubnet2Subnet307Cee57.ref,
    });

    if (fargateClusterVpcIgw827638cb == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcIgw827638cb' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1RouteTable1D7fa747 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1RouteTable1D7fa747' to be undefined. Fixit.`); }
    if (fargateClusterVpcVpcgw38717255 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcVpcgw38717255' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1DefaultRoute80086690 = new ec2.CfnRoute(this, 'FargateClusterVpcPublicSubnet1DefaultRoute80086690', {
      routeTableId: fargateClusterVpcPublicSubnet1RouteTable1D7fa747.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: fargateClusterVpcIgw827638cb.ref,
    });
    fargateClusterVpcPublicSubnet1DefaultRoute80086690.addDependency(fargateClusterVpcVpcgw38717255);

    if (fargateClusterVpcPublicSubnet1RouteTable1D7fa747 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1RouteTable1D7fa747' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1SubnetB9c24bc7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1SubnetB9c24bc7' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1RouteTableAssociation80F1442f = new ec2.CfnSubnetRouteTableAssociation(this, 'FargateClusterVpcPublicSubnet1RouteTableAssociation80F1442F', {
      routeTableId: fargateClusterVpcPublicSubnet1RouteTable1D7fa747.ref,
      subnetId: fargateClusterVpcPublicSubnet1SubnetB9c24bc7.ref,
    });

    if (fargateClusterVpcIgw827638cb == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcIgw827638cb' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2RouteTable1493C5d6 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2RouteTable1493C5d6' to be undefined. Fixit.`); }
    if (fargateClusterVpcVpcgw38717255 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcVpcgw38717255' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2 = new ec2.CfnRoute(this, 'FargateClusterVpcPublicSubnet2DefaultRoute8E847CD2', {
      routeTableId: fargateClusterVpcPublicSubnet2RouteTable1493C5d6.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: fargateClusterVpcIgw827638cb.ref,
    });
    fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2.addDependency(fargateClusterVpcVpcgw38717255);

    if (fargateClusterVpcPublicSubnet2RouteTable1493C5d6 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2RouteTable1493C5d6' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2Subnet24C0f9d8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2Subnet24C0f9d8' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2RouteTableAssociation3Efa74dc = new ec2.CfnSubnetRouteTableAssociation(this, 'FargateClusterVpcPublicSubnet2RouteTableAssociation3EFA74DC', {
      routeTableId: fargateClusterVpcPublicSubnet2RouteTable1493C5d6.ref,
      subnetId: fargateClusterVpcPublicSubnet2Subnet24C0f9d8.ref,
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
            Resource: taskDef54694570.ref,
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

    if (fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1SubnetB9c24bc7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1SubnetB9c24bc7' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2Subnet24C0f9d8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2Subnet24C0f9d8' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupAsg36a4948f = new autoscaling.CfnAutoScalingGroup(this, 'FargateClusterDefaultAutoScalingGroupASG36A4948F', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a.ref,
        version: fargateClusterDefaultAutoScalingGroupLaunchTemplate7Be88b5a.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        fargateClusterVpcPublicSubnet1SubnetB9c24bc7.ref,
        fargateClusterVpcPublicSubnet2Subnet24C0f9d8.ref,
      ],
    });
    fargateClusterDefaultAutoScalingGroupAsg36a4948f.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (fargateClusterVpcPublicSubnet1DefaultRoute80086690 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1DefaultRoute80086690' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1Eipf91909d0 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1Eipf91909d0' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1RouteTableAssociation80F1442f == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1RouteTableAssociation80F1442f' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1SubnetB9c24bc7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1SubnetB9c24bc7' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1NatGateway5202D86a = new ec2.CfnNatGateway(this, 'FargateClusterVpcPublicSubnet1NATGateway5202D86A', {
      subnetId: fargateClusterVpcPublicSubnet1SubnetB9c24bc7.ref,
      allocationId: fargateClusterVpcPublicSubnet1Eipf91909d0.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });
    fargateClusterVpcPublicSubnet1NatGateway5202D86a.addDependency(fargateClusterVpcPublicSubnet1DefaultRoute80086690);
    fargateClusterVpcPublicSubnet1NatGateway5202D86a.addDependency(fargateClusterVpcPublicSubnet1RouteTableAssociation80F1442f);

    if (fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2Eipbbb24774 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2Eipbbb24774' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2RouteTableAssociation3Efa74dc == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2RouteTableAssociation3Efa74dc' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2Subnet24C0f9d8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2Subnet24C0f9d8' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2 = new ec2.CfnNatGateway(this, 'FargateClusterVpcPublicSubnet2NATGatewayFFEC8ED2', {
      subnetId: fargateClusterVpcPublicSubnet2Subnet24C0f9d8.ref,
      allocationId: fargateClusterVpcPublicSubnet2Eipbbb24774.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/Vpc/PublicSubnet2',
        },
      ],
    });
    fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2.addDependency(fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2);
    fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2.addDependency(fargateClusterVpcPublicSubnet2RouteTableAssociation3Efa74dc);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"SomeKey\":\"SomeValue\"},\"Next\":\"Run\"},\"Run\":{\"End\":true,\"Parameters\":{\"Cluster\":\"',
        fargateCluster7Ccd5f93.attrArn,
        '\",\"TaskDefinition\":\"',
        taskDef54694570.ref,
        '\",\"Overrides\":{\"ContainerOverrides\":[{\"Name\":\"TheContainer\",\"Environment\":[{\"Name\":\"SOME_KEY\",\"Value.$\":\"$.SomeKey\"}]}]},\"LaunchType\":\"EC2\"},\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::ecs:runTask.sync\"}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupAsg36a4948f == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupAsg36a4948f' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyB91c5343 = new iam.CfnPolicy(this, 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicyB91C5343', {
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
              fargateClusterDefaultAutoScalingGroupAsg36a4948f.ref,
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
                'ecs:cluster': fargateCluster7Ccd5f93.attrArn,
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
            Resource: fargateCluster7Ccd5f93.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicyB91C5343',
      roles: [
        fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32.ref,
      ],
    });

    if (fargateClusterDefaultAutoScalingGroupAsg36a4948f == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupAsg36a4948f' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19d == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19d' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHook2Ae13680 = new autoscaling.CfnLifecycleHook(this, 'FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHook2AE13680', {
      autoScalingGroupName: fargateClusterDefaultAutoScalingGroupAsg36a4948f.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10.ref,
      roleArn: fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d.attrArn,
    });
    fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHook2Ae13680.addDependency(fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy4958D19d);
    fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHook2Ae13680.addDependency(fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole410D556d);

    if (fargateClusterVpcPrivateSubnet1RouteTable21B3ceae == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet1RouteTable21B3ceae' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1NatGateway5202D86a == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1NatGateway5202D86a' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet1DefaultRoute0438Dcba = new ec2.CfnRoute(this, 'FargateClusterVpcPrivateSubnet1DefaultRoute0438DCBA', {
      routeTableId: fargateClusterVpcPrivateSubnet1RouteTable21B3ceae.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: fargateClusterVpcPublicSubnet1NatGateway5202D86a.ref,
    });

    if (fargateClusterVpcPrivateSubnet2RouteTable7B7f9678 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet2RouteTable7B7f9678' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet2DefaultRoute35Fdd29d = new ec2.CfnRoute(this, 'FargateClusterVpcPrivateSubnet2DefaultRoute35FDD29D', {
      routeTableId: fargateClusterVpcPrivateSubnet2RouteTable7B7f9678.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2.ref,
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyB91c5343 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyB91c5343' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8 = new lambda.CfnFunction(this, 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionE3D5BEE8', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32.attrArn,
      environment: {
        variables: {
          CLUSTER: fargateCluster7Ccd5f93.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ2/FargateCluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8.addDependency(fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyB91c5343);
    fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8.addDependency(fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole7Fedcd32);

    if (fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawsecsinteg2FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic9C6ec468c75b1f21 = new lambda.CfnPermission(this, 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawsecsinteg2FargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic9C6EC468C75B1F21', {
      action: 'lambda:InvokeFunction',
      functionName: fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10.ref,
    });

    if (fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8' to be undefined. Fixit.`); }
    if (fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10 == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10' to be undefined. Fixit.`); }
    const fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionTopic37856E82 = new sns.CfnSubscription(this, 'FargateClusterDefaultAutoScalingGroupDrainECSHookFunctionTopic37856E82', {
      protocol: 'lambda',
      topicArn: fargateClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic49146C10.ref,
      endpoint: fargateClusterDefaultAutoScalingGroupDrainEcsHookFunctionE3d5bee8.attrArn,
    });
  }
}

