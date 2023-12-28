import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsEcsIntegEcsProps extends cdk.StackProps {
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

export class AwsEcsIntegEcs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegEcsProps = {}) {
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
    const ecsCluster97242B84 = new ecs.CfnCluster(this, 'EcsCluster97242B84', {
    });

    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda = new iam.CfnRole(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRole94543EDA', {
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
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ecsClusterDefaultAutoScalingGroupInstanceRole3C026863 = new iam.CfnRole(this, 'EcsClusterDefaultAutoScalingGroupInstanceRole3C026863', {
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
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b = new iam.CfnRole(this, 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38EC83B', {
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
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 = new sns.CfnTopic(this, 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicACD2D4A4', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const myDeadLetterQueueD997968a = new sqs.CfnQueue(this, 'MyDeadLetterQueueD997968A', {
    });
    myDeadLetterQueueD997968a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const taskDefEventsRoleFb3b67b8 = new iam.CfnRole(this, 'TaskDefEventsRoleFB3B67B8', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
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

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsClusterDefaultAutoScalingGroupInstanceRole3C026863 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceRole3C026863' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupInstanceProfile2Ce606b3 = new iam.CfnInstanceProfile(this, 'EcsClusterDefaultAutoScalingGroupInstanceProfile2CE606B3', {
      roles: [
        ecsClusterDefaultAutoScalingGroupInstanceRole3C026863.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupInstanceRole3C026863 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceRole3C026863' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04Dc6c80 = new iam.CfnPolicy(this, 'EcsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04DC6C80', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: ecsCluster97242B84.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': ecsCluster97242B84.attrArn,
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
      policyName: 'EcsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04DC6C80',
      roles: [
        ecsClusterDefaultAutoScalingGroupInstanceRole3C026863.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231 = new ec2.CfnSecurityGroup(this, 'EcsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231', {
      groupDescription: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88 = new iam.CfnPolicy(this, 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88',
      roles: [
        ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b.ref,
      ],
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
      family: 'awsecsintegecsTaskDef8DD0C801',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/17',
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
          value: 'aws-ecs-integ-ecs/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/17',
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
          value: 'aws-ecs-integ-ecs/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupInstanceProfile2Ce606b3 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceProfile2Ce606b3' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupInstanceRole3C026863 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceRole3C026863' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04Dc6c80 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04Dc6c80' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A = new ec2.CfnLaunchTemplate(this, 'EcsClusterDefaultAutoScalingGroupLaunchTemplate3719972A', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ecsClusterDefaultAutoScalingGroupInstanceProfile2Ce606b3.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ecsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          ecsCluster97242B84.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.addDependency(ecsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04Dc6c80);
    ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.addDependency(ecsClusterDefaultAutoScalingGroupInstanceRole3C026863);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefEventsRoleFb3b67b8 == null) { throw new Error(`A combination of conditions caused 'taskDefEventsRoleFb3b67b8' to be undefined. Fixit.`); }
    const rule4C995b7f = new events.CfnRule(this, 'Rule4C995B7F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: ecsCluster97242B84.attrArn,
          deadLetterConfig: {
            arn: myDeadLetterQueueD997968a.attrArn,
          },
          ecsParameters: {
            propagateTags: 'TASK_DEFINITION',
            tagList: [
              {
                key: 'my-tag',
                value: 'my-tag-value',
              },
            ],
            taskCount: 1,
            taskDefinitionArn: taskDef54694570.ref,
          },
          id: 'Target0',
          input: '{\"containerOverrides\":[{\"name\":\"TheContainer\",\"environment\":[{\"name\":\"I_WAS_TRIGGERED\",\"value\":\"From CloudWatch Events\"}]}]}',
          roleArn: taskDefEventsRoleFb3b67b8.attrArn,
        },
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefEventsRoleFb3b67b8 == null) { throw new Error(`A combination of conditions caused 'taskDefEventsRoleFb3b67b8' to be undefined. Fixit.`); }
    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    const taskDefEventsRoleDefaultPolicyA124e85b = new iam.CfnPolicy(this, 'TaskDefEventsRoleDefaultPolicyA124E85B', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecs:RunTask',
            Condition: {
              ArnEquals: {
                'ecs:cluster': ecsCluster97242B84.attrArn,
              },
            },
            Effect: 'Allow',
            Resource: taskDef54694570.ref,
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: taskDefExecutionRoleB4775c97.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefEventsRoleDefaultPolicyA124E85B',
      roles: [
        taskDefEventsRoleFb3b67b8.ref,
      ],
    });

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation70C59fa6 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet1RouteTableAssociation70C59FA6', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      subnetId: vpcPrivateSubnet1Subnet536B997a.ref,
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

    if (ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupAsgc1a785db = new autoscaling.CfnAutoScalingGroup(this, 'EcsClusterDefaultAutoScalingGroupASGC1A785DB', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.ref,
        version: ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
      ],
    });
    ecsClusterDefaultAutoScalingGroupAsgc1a785db.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (rule4C995b7f == null) { throw new Error(`A combination of conditions caused 'rule4C995b7f' to be undefined. Fixit.`); }
    const myDeadLetterQueuePolicyCc35d52c = new sqs.CfnQueuePolicy(this, 'MyDeadLetterQueuePolicyCC35D52C', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': rule4C995b7f.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myDeadLetterQueueD997968a.attrArn,
            Sid: 'AllowEventRuleawsecsintegecsRuleB8841E8B',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myDeadLetterQueueD997968a.ref,
      ],
    });

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
          value: 'aws-ecs-integ-ecs/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupAsgc1a785db == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupAsgc1a785db' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyA45bf396 = new iam.CfnPolicy(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicyA45BF396', {
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
              ecsClusterDefaultAutoScalingGroupAsgc1a785db.ref,
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
                'ecs:cluster': ecsCluster97242B84.attrArn,
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
            Resource: ecsCluster97242B84.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicyA45BF396',
      roles: [
        ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda.ref,
      ],
    });

    if (ecsClusterDefaultAutoScalingGroupAsgc1a785db == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupAsgc1a785db' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookFfa63029 = new autoscaling.CfnLifecycleHook(this, 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookFFA63029', {
      autoScalingGroupName: ecsClusterDefaultAutoScalingGroupAsgc1a785db.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4.ref,
      roleArn: ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b.attrArn,
    });
    ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookFfa63029.addDependency(ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicy75002F88);
    ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookFfa63029.addDependency(ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleA38ec83b);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyA45bf396 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyA45bf396' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e = new lambda.CfnFunction(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionE17A5F5E', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda.attrArn,
      environment: {
        variables: {
          CLUSTER: ecsCluster97242B84.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-ecs/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.addDependency(ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyA45bf396);
    ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.addDependency(ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda);

    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawsecsintegecsEcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic0C4958afba77e328 = new lambda.CfnPermission(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawsecsintegecsEcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic0C4958AFBA77E328', {
      action: 'lambda:InvokeFunction',
      functionName: ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4.ref,
    });

    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionTopic8F34e394 = new sns.CfnSubscription(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionTopic8F34E394', {
      protocol: 'lambda',
      topicArn: ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4.ref,
      endpoint: ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.attrArn,
    });
  }
}

