import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-cdk-ecs-integration-test-stackProps extends cdk.StackProps {
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

export class aws-cdk-ecs-integration-test-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-ecs-integration-test-stackProps = {}) {
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 = new sns.CfnTopic(this, 'EcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicACD2D4A4', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
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

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet2',
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

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231 = new ec2.CfnSecurityGroup(this, 'EcsClusterDefaultAutoScalingGroupInstanceSecurityGroup912E1231', {
      groupDescription: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
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

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          memory: 256,
          name: 'web',
        },
      ],
      family: 'awscdkecsintegrationteststackTaskDefF811D259',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2SubnetCfcdaa7a = new ec2.CfnSubnet(this, 'VPCPrivateSubnet2SubnetCFCDAA7A', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
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
                value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
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
              value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.addDependency(ecsClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy04Dc6c80);
    ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A.addDependency(ecsClusterDefaultAutoScalingGroupInstanceRole3C026863);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const testStackService5548C840 = new ecs.CfnService(this, 'TestStackService5548C840', {
      cluster: ecsCluster97242B84.ref,
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
      launchType: 'EC2',
      placementStrategies: [
        {
          field: 'CPU',
          type: 'binpack',
        },
        {
          field: 'MEMORY',
          type: 'binpack',
        },
      ],
      schedulingStrategy: 'REPLICA',
      taskDefinition: taskDef54694570.ref,
    });
    testStackService5548C840.addDependency(taskDefTaskRole1Edb4a67);

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

    if (ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLaunchTemplate3719972A' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet8Bca10e0.ref,
        vpcPrivateSubnet2SubnetCfcdaa7a.ref,
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
    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet1',
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
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
      allocationId: vpcPublicSubnet2Eip4947bc00.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ecs-integration-test-stack/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

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

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway3C070193 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway3C070193' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteF4f5cfd2 = new ec2.CfnRoute(this, 'VPCPrivateSubnet2DefaultRouteF4F5CFD2', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway3C070193.ref,
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
          value: 'aws-cdk-ecs-integration-test-stack/EcsCluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.addDependency(ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicyA45bf396);
    ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e.addDependency(ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole94543Eda);

    if (ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionE17a5f5e' to be undefined. Fixit.`); }
    if (ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicAcd2d4a4' to be undefined. Fixit.`); }
    const ecsClusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawscdkecsintegrationteststackEcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicD01b2572f6ccd921 = new lambda.CfnPermission(this, 'EcsClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawscdkecsintegrationteststackEcsClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicD01B2572F6CCD921', {
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

