import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface integ-ec2-capacity-providerProps extends cdk.StackProps {
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

export class integ-ec2-capacity-provider extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-ec2-capacity-providerProps = {}) {
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
    const asgDrainEcsHookFunctionServiceRoleC12963bb = new iam.CfnRole(this, 'ASGDrainECSHookFunctionServiceRoleC12963BB', {
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
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
    });

    const asgInstanceRoleE263a41b = new iam.CfnRole(this, 'ASGInstanceRoleE263A41B', {
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
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
    });

    const asgLifecycleHookDrainHookRoleD640316c = new iam.CfnRole(this, 'ASGLifecycleHookDrainHookRoleD640316C', {
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
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
    });

    const asgLifecycleHookDrainHookTopicA8ad4acb = new sns.CfnTopic(this, 'ASGLifecycleHookDrainHookTopicA8AD4ACB', {
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
    });

    const ec2cpClusterD5f0fd32 = new ecs.CfnCluster(this, 'EC2CPClusterD5F0FD32', {
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

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet2',
        },
      ],
    });

    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    const asgInstanceProfile0A2834d7 = new iam.CfnInstanceProfile(this, 'ASGInstanceProfile0A2834D7', {
      roles: [
        asgInstanceRoleE263a41b.ref,
      ],
    });

    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    const asgInstanceRoleDefaultPolicy7636D8bf = new iam.CfnPolicy(this, 'ASGInstanceRoleDefaultPolicy7636D8BF', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: ec2cpClusterD5f0fd32.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': ec2cpClusterD5f0fd32.attrArn,
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
      policyName: 'ASGInstanceRoleDefaultPolicy7636D8BF',
      roles: [
        asgInstanceRoleE263a41b.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const asgInstanceSecurityGroup0525485D = new ec2.CfnSecurityGroup(this, 'ASGInstanceSecurityGroup0525485D', {
      groupDescription: 'integ-ec2-capacity-provider/ASG/InstanceSecurityGroup',
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
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (asgLifecycleHookDrainHookRoleD640316c == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookRoleD640316c' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookTopicA8ad4acb == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookTopicA8ad4acb' to be undefined. Fixit.`); }
    const asgLifecycleHookDrainHookRoleDefaultPolicy3Eefde57 = new iam.CfnPolicy(this, 'ASGLifecycleHookDrainHookRoleDefaultPolicy3EEFDE57', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: asgLifecycleHookDrainHookTopicA8ad4acb.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ASGLifecycleHookDrainHookRoleDefaultPolicy3EEFDE57',
      roles: [
        asgLifecycleHookDrainHookRoleD640316c.ref,
      ],
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          memoryReservation: 256,
          name: 'web',
        },
      ],
      family: 'integec2capacityproviderTaskDefA6140A6B',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PrivateSubnet1',
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
          value: 'integ-ec2-capacity-provider/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PrivateSubnet2',
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
          value: 'integ-ec2-capacity-provider/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet1',
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
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet2',
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
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (asgInstanceProfile0A2834d7 == null) { throw new Error(`A combination of conditions caused 'asgInstanceProfile0A2834d7' to be undefined. Fixit.`); }
    if (asgInstanceRoleDefaultPolicy7636D8bf == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleDefaultPolicy7636D8bf' to be undefined. Fixit.`); }
    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    if (asgInstanceSecurityGroup0525485D == null) { throw new Error(`A combination of conditions caused 'asgInstanceSecurityGroup0525485D' to be undefined. Fixit.`); }
    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    const asgLaunchTemplate0Ca92847 = new ec2.CfnLaunchTemplate(this, 'ASGLaunchTemplate0CA92847', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: asgInstanceProfile0A2834d7.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          asgInstanceSecurityGroup0525485D.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'integ-ec2-capacity-provider/ASG/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'integ-ec2-capacity-provider/ASG/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          ec2cpClusterD5f0fd32.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'integ-ec2-capacity-provider/ASG/LaunchTemplate',
            },
          ],
        },
      ],
    });
    asgLaunchTemplate0Ca92847.addDependency(asgInstanceRoleDefaultPolicy7636D8bf);
    asgLaunchTemplate0Ca92847.addDependency(asgInstanceRoleE263a41b);

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

    if (asgLaunchTemplate0Ca92847 == null) { throw new Error(`A combination of conditions caused 'asgLaunchTemplate0Ca92847' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const asg46ed3070 = new autoscaling.CfnAutoScalingGroup(this, 'ASG46ED3070', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: asgLaunchTemplate0Ca92847.ref,
        version: asgLaunchTemplate0Ca92847.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    asg46ed3070.cfnOptions.updatePolicy = {
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
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet1',
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
          value: 'integ-ec2-capacity-provider/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (asg46ed3070 == null) { throw new Error(`A combination of conditions caused 'asg46ed3070' to be undefined. Fixit.`); }
    if (asgDrainEcsHookFunctionServiceRoleC12963bb == null) { throw new Error(`A combination of conditions caused 'asgDrainEcsHookFunctionServiceRoleC12963bb' to be undefined. Fixit.`); }
    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    const asgDrainEcsHookFunctionServiceRoleDefaultPolicy16848A27 = new iam.CfnPolicy(this, 'ASGDrainECSHookFunctionServiceRoleDefaultPolicy16848A27', {
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
              asg46ed3070.ref,
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
                'ecs:cluster': ec2cpClusterD5f0fd32.attrArn,
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
            Resource: ec2cpClusterD5f0fd32.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ASGDrainECSHookFunctionServiceRoleDefaultPolicy16848A27',
      roles: [
        asgDrainEcsHookFunctionServiceRoleC12963bb.ref,
      ],
    });

    if (asg46ed3070 == null) { throw new Error(`A combination of conditions caused 'asg46ed3070' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookRoleD640316c == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookRoleD640316c' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookRoleDefaultPolicy3Eefde57 == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookRoleDefaultPolicy3Eefde57' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookTopicA8ad4acb == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookTopicA8ad4acb' to be undefined. Fixit.`); }
    const asgLifecycleHookDrainHookFe4afebe = new autoscaling.CfnLifecycleHook(this, 'ASGLifecycleHookDrainHookFE4AFEBE', {
      autoScalingGroupName: asg46ed3070.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: asgLifecycleHookDrainHookTopicA8ad4acb.ref,
      roleArn: asgLifecycleHookDrainHookRoleD640316c.attrArn,
    });
    asgLifecycleHookDrainHookFe4afebe.addDependency(asgLifecycleHookDrainHookRoleDefaultPolicy3Eefde57);
    asgLifecycleHookDrainHookFe4afebe.addDependency(asgLifecycleHookDrainHookRoleD640316c);

    if (asg46ed3070 == null) { throw new Error(`A combination of conditions caused 'asg46ed3070' to be undefined. Fixit.`); }
    const ec2CapacityProvider5A2e35cd = new ecs.CfnCapacityProvider(this, 'EC2CapacityProvider5A2E35CD', {
      autoScalingGroupProvider: {
        autoScalingGroupArn: asg46ed3070.ref,
        managedScaling: {
          status: 'ENABLED',
          targetCapacity: 100,
        },
        managedTerminationProtection: 'DISABLED',
      },
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

    if (asgDrainEcsHookFunctionServiceRoleC12963bb == null) { throw new Error(`A combination of conditions caused 'asgDrainEcsHookFunctionServiceRoleC12963bb' to be undefined. Fixit.`); }
    if (asgDrainEcsHookFunctionServiceRoleDefaultPolicy16848A27 == null) { throw new Error(`A combination of conditions caused 'asgDrainEcsHookFunctionServiceRoleDefaultPolicy16848A27' to be undefined. Fixit.`); }
    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    const asgDrainEcsHookFunction5F24cf4d = new lambda.CfnFunction(this, 'ASGDrainECSHookFunction5F24CF4D', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: asgDrainEcsHookFunctionServiceRoleC12963bb.attrArn,
      environment: {
        variables: {
          CLUSTER: ec2cpClusterD5f0fd32.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'integ-ec2-capacity-provider/ASG',
        },
      ],
      timeout: 310,
    });
    asgDrainEcsHookFunction5F24cf4d.addDependency(asgDrainEcsHookFunctionServiceRoleDefaultPolicy16848A27);
    asgDrainEcsHookFunction5F24cf4d.addDependency(asgDrainEcsHookFunctionServiceRoleC12963bb);

    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    if (ec2CapacityProvider5A2e35cd == null) { throw new Error(`A combination of conditions caused 'ec2CapacityProvider5A2e35cd' to be undefined. Fixit.`); }
    const ec2cpCluster4Cfed4dd = new ecs.CfnClusterCapacityProviderAssociations(this, 'EC2CPCluster4CFED4DD', {
      capacityProviders: [
        'FARGATE',
        'FARGATE_SPOT',
        ec2CapacityProvider5A2e35cd.ref,
      ],
      cluster: ec2cpClusterD5f0fd32.ref,
      defaultCapacityProviderStrategy: [
      ],
    });

    if (ec2cpClusterD5f0fd32 == null) { throw new Error(`A combination of conditions caused 'ec2cpClusterD5f0fd32' to be undefined. Fixit.`); }
    if (ec2CapacityProvider5A2e35cd == null) { throw new Error(`A combination of conditions caused 'ec2CapacityProvider5A2e35cd' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const ec2Service5392Ef94 = new ecs.CfnService(this, 'EC2Service5392EF94', {
      capacityProviderStrategy: [
        {
          capacityProvider: ec2CapacityProvider5A2e35cd.ref,
          weight: 1,
        },
      ],
      cluster: ec2cpClusterD5f0fd32.ref,
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
      schedulingStrategy: 'REPLICA',
      taskDefinition: taskDef54694570.ref,
    });
    ec2Service5392Ef94.addDependency(taskDefTaskRole1Edb4a67);

    if (asgDrainEcsHookFunction5F24cf4d == null) { throw new Error(`A combination of conditions caused 'asgDrainEcsHookFunction5F24cf4d' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookTopicA8ad4acb == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookTopicA8ad4acb' to be undefined. Fixit.`); }
    const asgDrainEcsHookFunctionAllowInvokeintegec2capacityproviderAsgLifecycleHookDrainHookTopic4714B3c1eb63e78f = new lambda.CfnPermission(this, 'ASGDrainECSHookFunctionAllowInvokeintegec2capacityproviderASGLifecycleHookDrainHookTopic4714B3C1EB63E78F', {
      action: 'lambda:InvokeFunction',
      functionName: asgDrainEcsHookFunction5F24cf4d.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: asgLifecycleHookDrainHookTopicA8ad4acb.ref,
    });

    if (asgDrainEcsHookFunction5F24cf4d == null) { throw new Error(`A combination of conditions caused 'asgDrainEcsHookFunction5F24cf4d' to be undefined. Fixit.`); }
    if (asgLifecycleHookDrainHookTopicA8ad4acb == null) { throw new Error(`A combination of conditions caused 'asgLifecycleHookDrainHookTopicA8ad4acb' to be undefined. Fixit.`); }
    const asgDrainEcsHookFunctionTopicD6fc59f7 = new sns.CfnSubscription(this, 'ASGDrainECSHookFunctionTopicD6FC59F7', {
      protocol: 'lambda',
      topicArn: asgLifecycleHookDrainHookTopicA8ad4acb.ref,
      endpoint: asgDrainEcsHookFunction5F24cf4d.attrArn,
    });
  }
}

