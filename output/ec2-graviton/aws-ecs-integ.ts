import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsEcsIntegProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ecs/optimized-ami/amazon-linux-2/arm64/recommended/image_id'
   */
  readonly ssmParameterValueawsserviceecsoptimizedamiamazonlinux2arm64recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsserviceecsoptimizedamiamazonlinux2arm64recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsserviceecsoptimizedamiamazonlinux2arm64recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2arm64recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/ecs/optimized-ami/amazon-linux-2/arm64/recommended/image_id',
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

    const ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764 = new iam.CfnRole(this, 'EcsClustergravitonclusterDrainECSHookFunctionServiceRole26D97764', {
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
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
    });

    const ecsClustergravitonclusterInstanceRole0D0e0f94 = new iam.CfnRole(this, 'EcsClustergravitonclusterInstanceRole0D0E0F94', {
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
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
    });

    const ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad = new iam.CfnRole(this, 'EcsClustergravitonclusterLifecycleHookDrainHookRoleA16C85AD', {
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
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
    });

    const ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac = new sns.CfnTopic(this, 'EcsClustergravitonclusterLifecycleHookDrainHookTopic0A778AAC', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsClustergravitonclusterInstanceRole0D0e0f94 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceRole0D0e0f94' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterInstanceProfileD1bbfaae = new iam.CfnInstanceProfile(this, 'EcsClustergravitonclusterInstanceProfileD1BBFAAE', {
      roles: [
        ecsClustergravitonclusterInstanceRole0D0e0f94.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterInstanceRole0D0e0f94 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceRole0D0e0f94' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterInstanceRoleDefaultPolicyB89db33f = new iam.CfnPolicy(this, 'EcsClustergravitonclusterInstanceRoleDefaultPolicyB89DB33F', {
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
      policyName: 'EcsClustergravitonclusterInstanceRoleDefaultPolicyB89DB33F',
      roles: [
        ecsClustergravitonclusterInstanceRole0D0e0f94.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterInstanceSecurityGroup0187E9bb = new ec2.CfnSecurityGroup(this, 'EcsClustergravitonclusterInstanceSecurityGroup0187E9BB', {
      groupDescription: 'aws-ecs-integ/EcsCluster/graviton-cluster/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6da7 = new iam.CfnPolicy(this, 'EcsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6DA7', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6DA7',
      roles: [
        ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ/Vpc/PublicSubnet2',
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
    if (ecsClustergravitonclusterInstanceProfileD1bbfaae == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceProfileD1bbfaae' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterInstanceRole0D0e0f94 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceRole0D0e0f94' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterInstanceRoleDefaultPolicyB89db33f == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceRoleDefaultPolicyB89db33f' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterInstanceSecurityGroup0187E9bb == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterInstanceSecurityGroup0187E9bb' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterLaunchTemplate46854Ea7 = new ec2.CfnLaunchTemplate(this, 'EcsClustergravitonclusterLaunchTemplate46854EA7', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ecsClustergravitonclusterInstanceProfileD1bbfaae.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2arm64recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 'c6g.large',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ecsClustergravitonclusterInstanceSecurityGroup0187E9bb.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ/EcsCluster/graviton-cluster/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ/EcsCluster/graviton-cluster/LaunchTemplate',
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
              value: 'aws-ecs-integ/EcsCluster/graviton-cluster/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClustergravitonclusterLaunchTemplate46854Ea7.addDependency(ecsClustergravitonclusterInstanceRoleDefaultPolicyB89db33f);
    ecsClustergravitonclusterLaunchTemplate46854Ea7.addDependency(ecsClustergravitonclusterInstanceRole0D0e0f94);

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

    if (ecsClustergravitonclusterLaunchTemplate46854Ea7 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLaunchTemplate46854Ea7' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterAsg869f3168 = new autoscaling.CfnAutoScalingGroup(this, 'EcsClustergravitonclusterASG869F3168', {
      maxSize: '2',
      minSize: '2',
      launchTemplate: {
        launchTemplateId: ecsClustergravitonclusterLaunchTemplate46854Ea7.ref,
        version: ecsClustergravitonclusterLaunchTemplate46854Ea7.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    ecsClustergravitonclusterAsg869f3168.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
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
          value: 'aws-ecs-integ/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterAsg869f3168 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterAsg869f3168' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterDrainEcsHookFunctionServiceRoleDefaultPolicy1563Dc6b = new iam.CfnPolicy(this, 'EcsClustergravitonclusterDrainECSHookFunctionServiceRoleDefaultPolicy1563DC6B', {
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
              ecsClustergravitonclusterAsg869f3168.ref,
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
      policyName: 'EcsClustergravitonclusterDrainECSHookFunctionServiceRoleDefaultPolicy1563DC6B',
      roles: [
        ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764.ref,
      ],
    });

    if (ecsClustergravitonclusterAsg869f3168 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterAsg869f3168' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6da7 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6da7' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterLifecycleHookDrainHookA1f91b1b = new autoscaling.CfnLifecycleHook(this, 'EcsClustergravitonclusterLifecycleHookDrainHookA1F91B1B', {
      autoScalingGroupName: ecsClustergravitonclusterAsg869f3168.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac.ref,
      roleArn: ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad.attrArn,
    });
    ecsClustergravitonclusterLifecycleHookDrainHookA1f91b1b.addDependency(ecsClustergravitonclusterLifecycleHookDrainHookRoleDefaultPolicy516A6da7);
    ecsClustergravitonclusterLifecycleHookDrainHookA1f91b1b.addDependency(ecsClustergravitonclusterLifecycleHookDrainHookRoleA16c85ad);

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

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterDrainEcsHookFunctionServiceRoleDefaultPolicy1563Dc6b == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterDrainEcsHookFunctionServiceRoleDefaultPolicy1563Dc6b' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterDrainEcsHookFunctionB606e681 = new lambda.CfnFunction(this, 'EcsClustergravitonclusterDrainECSHookFunctionB606E681', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764.attrArn,
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
          value: 'aws-ecs-integ/EcsCluster/graviton-cluster',
        },
      ],
      timeout: 310,
    });
    ecsClustergravitonclusterDrainEcsHookFunctionB606e681.addDependency(ecsClustergravitonclusterDrainEcsHookFunctionServiceRoleDefaultPolicy1563Dc6b);
    ecsClustergravitonclusterDrainEcsHookFunctionB606e681.addDependency(ecsClustergravitonclusterDrainEcsHookFunctionServiceRole26D97764);

    if (ecsClustergravitonclusterDrainEcsHookFunctionB606e681 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterDrainEcsHookFunctionB606e681' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterDrainEcsHookFunctionAllowInvokeawsecsintegEcsClustergravitonclusterLifecycleHookDrainHookTopicF44e68aa50d91ba3 = new lambda.CfnPermission(this, 'EcsClustergravitonclusterDrainECSHookFunctionAllowInvokeawsecsintegEcsClustergravitonclusterLifecycleHookDrainHookTopicF44E68AA50D91BA3', {
      action: 'lambda:InvokeFunction',
      functionName: ecsClustergravitonclusterDrainEcsHookFunctionB606e681.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac.ref,
    });

    if (ecsClustergravitonclusterDrainEcsHookFunctionB606e681 == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterDrainEcsHookFunctionB606e681' to be undefined. Fixit.`); }
    if (ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac == null) { throw new Error(`A combination of conditions caused 'ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac' to be undefined. Fixit.`); }
    const ecsClustergravitonclusterDrainEcsHookFunctionTopic65B3fd43 = new sns.CfnSubscription(this, 'EcsClustergravitonclusterDrainECSHookFunctionTopic65B3FD43', {
      protocol: 'lambda',
      topicArn: ecsClustergravitonclusterLifecycleHookDrainHookTopic0A778aac.ref,
      endpoint: ecsClustergravitonclusterDrainEcsHookFunctionB606e681.attrArn,
    });
  }
}

