import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsEcsIntegSpotProps extends cdk.StackProps {
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

export class AwsEcsIntegSpot extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegSpotProps = {}) {
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

    const ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55 = new iam.CfnRole(this, 'EcsClusterasgOdDrainECSHookFunctionServiceRoleFC088D55', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
    });

    const ecsClusterasgOdInstanceRoleC8290533 = new iam.CfnRole(this, 'EcsClusterasgOdInstanceRoleC8290533', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
    });

    const ecsClusterasgOdLifecycleHookDrainHookRole695B2df1 = new iam.CfnRole(this, 'EcsClusterasgOdLifecycleHookDrainHookRole695B2DF1', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
    });

    const ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202 = new sns.CfnTopic(this, 'EcsClusterasgOdLifecycleHookDrainHookTopic673CE202', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
    });

    const ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0 = new iam.CfnRole(this, 'EcsClusterasgSpotDrainECSHookFunctionServiceRole8EEDDFE0', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
    });

    const ecsClusterasgSpotInstanceRole84Ab6f93 = new iam.CfnRole(this, 'EcsClusterasgSpotInstanceRole84AB6F93', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
    });

    const ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77 = new iam.CfnRole(this, 'EcsClusterasgSpotLifecycleHookDrainHookRole1B427C77', {
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
    });

    const ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83 = new sns.CfnTopic(this, 'EcsClusterasgSpotLifecycleHookDrainHookTopic6212EC83', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
    });

    const taskTaskRoleE98524a1 = new iam.CfnRole(this, 'TaskTaskRoleE98524A1', {
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
          value: 'aws-ecs-integ-spot/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsClusterasgOdInstanceRoleC8290533 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceRoleC8290533' to be undefined. Fixit.`); }
    const ecsClusterasgOdInstanceProfileE5b88756 = new iam.CfnInstanceProfile(this, 'EcsClusterasgOdInstanceProfileE5B88756', {
      roles: [
        ecsClusterasgOdInstanceRoleC8290533.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgOdInstanceRoleC8290533 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceRoleC8290533' to be undefined. Fixit.`); }
    const ecsClusterasgOdInstanceRoleDefaultPolicy0Ae7fab2 = new iam.CfnPolicy(this, 'EcsClusterasgOdInstanceRoleDefaultPolicy0AE7FAB2', {
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
      policyName: 'EcsClusterasgOdInstanceRoleDefaultPolicy0AE7FAB2',
      roles: [
        ecsClusterasgOdInstanceRoleC8290533.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ecsClusterasgOdInstanceSecurityGroup301Dfbed = new ec2.CfnSecurityGroup(this, 'EcsClusterasgOdInstanceSecurityGroup301DFBED', {
      groupDescription: 'aws-ecs-integ-spot/EcsCluster/asgOd/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsClusterasgOdLifecycleHookDrainHookRole695B2df1 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookRole695B2df1' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202' to be undefined. Fixit.`); }
    const ecsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85Fa949a = new iam.CfnPolicy(this, 'EcsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85FA949A', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85FA949A',
      roles: [
        ecsClusterasgOdLifecycleHookDrainHookRole695B2df1.ref,
      ],
    });

    if (ecsClusterasgSpotInstanceRole84Ab6f93 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceRole84Ab6f93' to be undefined. Fixit.`); }
    const ecsClusterasgSpotInstanceProfile0D6dd08d = new iam.CfnInstanceProfile(this, 'EcsClusterasgSpotInstanceProfile0D6DD08D', {
      roles: [
        ecsClusterasgSpotInstanceRole84Ab6f93.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotInstanceRole84Ab6f93 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceRole84Ab6f93' to be undefined. Fixit.`); }
    const ecsClusterasgSpotInstanceRoleDefaultPolicyB1e3abfa = new iam.CfnPolicy(this, 'EcsClusterasgSpotInstanceRoleDefaultPolicyB1E3ABFA', {
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
      policyName: 'EcsClusterasgSpotInstanceRoleDefaultPolicyB1E3ABFA',
      roles: [
        ecsClusterasgSpotInstanceRole84Ab6f93.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ecsClusterasgSpotInstanceSecurityGroupEa17787d = new ec2.CfnSecurityGroup(this, 'EcsClusterasgSpotInstanceSecurityGroupEA17787D', {
      groupDescription: 'aws-ecs-integ-spot/EcsCluster/asgSpot/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83' to be undefined. Fixit.`); }
    const ecsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFc0e3482 = new iam.CfnPolicy(this, 'EcsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFC0E3482', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFC0E3482',
      roles: [
        ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77.ref,
      ],
    });

    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    const task79114B6b = new ecs.CfnTaskDefinition(this, 'Task79114B6B', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          memory: 512,
          name: 'PHP',
          portMappings: [
            {
              containerPort: 80,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
      ],
      family: 'awsecsintegspotTask1789BE14',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: taskTaskRoleE98524a1.attrArn,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
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
          value: 'aws-ecs-integ-spot/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
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
          value: 'aws-ecs-integ-spot/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
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
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
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
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      internetGatewayId: vpcIgwd7ba715c.ref,
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgOdInstanceProfileE5b88756 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceProfileE5b88756' to be undefined. Fixit.`); }
    if (ecsClusterasgOdInstanceRoleC8290533 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceRoleC8290533' to be undefined. Fixit.`); }
    if (ecsClusterasgOdInstanceRoleDefaultPolicy0Ae7fab2 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceRoleDefaultPolicy0Ae7fab2' to be undefined. Fixit.`); }
    if (ecsClusterasgOdInstanceSecurityGroup301Dfbed == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdInstanceSecurityGroup301Dfbed' to be undefined. Fixit.`); }
    const ecsClusterasgOdLaunchTemplate6065F652 = new ec2.CfnLaunchTemplate(this, 'EcsClusterasgOdLaunchTemplate6065F652', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ecsClusterasgOdInstanceProfileE5b88756.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't3.large',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ecsClusterasgOdInstanceSecurityGroup301Dfbed.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-spot/EcsCluster/asgOd/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-spot/EcsCluster/asgOd/LaunchTemplate',
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
              value: 'aws-ecs-integ-spot/EcsCluster/asgOd/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClusterasgOdLaunchTemplate6065F652.addDependency(ecsClusterasgOdInstanceRoleDefaultPolicy0Ae7fab2);
    ecsClusterasgOdLaunchTemplate6065F652.addDependency(ecsClusterasgOdInstanceRoleC8290533);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotInstanceProfile0D6dd08d == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceProfile0D6dd08d' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotInstanceRole84Ab6f93 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceRole84Ab6f93' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotInstanceRoleDefaultPolicyB1e3abfa == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceRoleDefaultPolicyB1e3abfa' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotInstanceSecurityGroupEa17787d == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotInstanceSecurityGroupEa17787d' to be undefined. Fixit.`); }
    const ecsClusterasgSpotLaunchTemplateA53ad60c = new ec2.CfnLaunchTemplate(this, 'EcsClusterasgSpotLaunchTemplateA53AD60C', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ecsClusterasgSpotInstanceProfile0D6dd08d.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceMarketOptions: {
          marketType: 'spot',
          spotOptions: {
            maxPrice: '0.0735',
          },
        },
        instanceType: 'c5.xlarge',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ecsClusterasgSpotInstanceSecurityGroupEa17787d.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-spot/EcsCluster/asgSpot/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-spot/EcsCluster/asgSpot/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          ecsCluster97242B84.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config\necho ECS_ENABLE_SPOT_INSTANCE_DRAINING=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-spot/EcsCluster/asgSpot/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClusterasgSpotLaunchTemplateA53ad60c.addDependency(ecsClusterasgSpotInstanceRoleDefaultPolicyB1e3abfa);
    ecsClusterasgSpotLaunchTemplateA53ad60c.addDependency(ecsClusterasgSpotInstanceRole84Ab6f93);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (task79114B6b == null) { throw new Error(`A combination of conditions caused 'task79114B6b' to be undefined. Fixit.`); }
    if (taskTaskRoleE98524a1 == null) { throw new Error(`A combination of conditions caused 'taskTaskRoleE98524a1' to be undefined. Fixit.`); }
    const serviceD69d759b = new ecs.CfnService(this, 'ServiceD69D759B', {
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
      schedulingStrategy: 'REPLICA',
      taskDefinition: task79114B6b.ref,
    });
    serviceD69d759b.addDependency(taskTaskRoleE98524a1);

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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });

    if (ecsClusterasgOdLaunchTemplate6065F652 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLaunchTemplate6065F652' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const ecsClusterasgOdAsg0e5c30ec = new autoscaling.CfnAutoScalingGroup(this, 'EcsClusterasgOdASG0E5C30EC', {
      desiredCapacity: '1',
      launchTemplate: {
        launchTemplateId: ecsClusterasgOdLaunchTemplate6065F652.ref,
        version: ecsClusterasgOdLaunchTemplate6065F652.attrLatestVersionNumber,
      },
      maxSize: '2',
      minSize: '1',
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    ecsClusterasgOdAsg0e5c30ec.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (ecsClusterasgSpotLaunchTemplateA53ad60c == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLaunchTemplateA53ad60c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const ecsClusterasgSpotAsg0d77f041 = new autoscaling.CfnAutoScalingGroup(this, 'EcsClusterasgSpotASG0D77F041', {
      desiredCapacity: '3',
      launchTemplate: {
        launchTemplateId: ecsClusterasgSpotLaunchTemplateA53ad60c.ref,
        version: ecsClusterasgSpotLaunchTemplateA53ad60c.attrLatestVersionNumber,
      },
      maxSize: '3',
      minSize: '3',
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    ecsClusterasgSpotAsg0d77f041.cfnOptions.updatePolicy = {
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
      allocationId: vpcPublicSubnet1Eipd7e02669.attrAllocationId,
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet1',
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
      allocationId: vpcPublicSubnet2Eip3c605a87.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgOdAsg0e5c30ec == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdAsg0e5c30ec' to be undefined. Fixit.`); }
    if (ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55' to be undefined. Fixit.`); }
    const ecsClusterasgOdDrainEcsHookFunctionServiceRoleDefaultPolicyE54f1794 = new iam.CfnPolicy(this, 'EcsClusterasgOdDrainECSHookFunctionServiceRoleDefaultPolicyE54F1794', {
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
              ecsClusterasgOdAsg0e5c30ec.ref,
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
      policyName: 'EcsClusterasgOdDrainECSHookFunctionServiceRoleDefaultPolicyE54F1794',
      roles: [
        ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55.ref,
      ],
    });

    if (ecsClusterasgOdAsg0e5c30ec == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdAsg0e5c30ec' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookRole695B2df1 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookRole695B2df1' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85Fa949a == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85Fa949a' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202' to be undefined. Fixit.`); }
    const ecsClusterasgOdLifecycleHookDrainHook03Ac5a9e = new autoscaling.CfnLifecycleHook(this, 'EcsClusterasgOdLifecycleHookDrainHook03AC5A9E', {
      autoScalingGroupName: ecsClusterasgOdAsg0e5c30ec.ref,
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      notificationTargetArn: ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202.ref,
      roleArn: ecsClusterasgOdLifecycleHookDrainHookRole695B2df1.attrArn,
    });
    ecsClusterasgOdLifecycleHookDrainHook03Ac5a9e.addDependency(ecsClusterasgOdLifecycleHookDrainHookRoleDefaultPolicy85Fa949a);
    ecsClusterasgOdLifecycleHookDrainHook03Ac5a9e.addDependency(ecsClusterasgOdLifecycleHookDrainHookRole695B2df1);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotAsg0d77f041 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotAsg0d77f041' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0' to be undefined. Fixit.`); }
    const ecsClusterasgSpotDrainEcsHookFunctionServiceRoleDefaultPolicy96377D7c = new iam.CfnPolicy(this, 'EcsClusterasgSpotDrainECSHookFunctionServiceRoleDefaultPolicy96377D7C', {
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
              ecsClusterasgSpotAsg0d77f041.ref,
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
      policyName: 'EcsClusterasgSpotDrainECSHookFunctionServiceRoleDefaultPolicy96377D7C',
      roles: [
        ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0.ref,
      ],
    });

    if (ecsClusterasgSpotAsg0d77f041 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotAsg0d77f041' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFc0e3482 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFc0e3482' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83' to be undefined. Fixit.`); }
    const ecsClusterasgSpotLifecycleHookDrainHook91178D34 = new autoscaling.CfnLifecycleHook(this, 'EcsClusterasgSpotLifecycleHookDrainHook91178D34', {
      autoScalingGroupName: ecsClusterasgSpotAsg0d77f041.ref,
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      notificationTargetArn: ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83.ref,
      roleArn: ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77.attrArn,
    });
    ecsClusterasgSpotLifecycleHookDrainHook91178D34.addDependency(ecsClusterasgSpotLifecycleHookDrainHookRoleDefaultPolicyFc0e3482);
    ecsClusterasgSpotLifecycleHookDrainHook91178D34.addDependency(ecsClusterasgSpotLifecycleHookDrainHookRole1B427c77);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgOdDrainEcsHookFunctionServiceRoleDefaultPolicyE54f1794 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdDrainEcsHookFunctionServiceRoleDefaultPolicyE54f1794' to be undefined. Fixit.`); }
    if (ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55' to be undefined. Fixit.`); }
    const ecsClusterasgOdDrainEcsHookFunction962490E0 = new lambda.CfnFunction(this, 'EcsClusterasgOdDrainECSHookFunction962490E0', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      environment: {
        variables: {
          CLUSTER: ecsCluster97242B84.ref,
        },
      },
      handler: 'index.lambda_handler',
      role: ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55.attrArn,
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/EcsCluster/asgOd',
        },
      ],
      timeout: 310,
    });
    ecsClusterasgOdDrainEcsHookFunction962490E0.addDependency(ecsClusterasgOdDrainEcsHookFunctionServiceRoleDefaultPolicyE54f1794);
    ecsClusterasgOdDrainEcsHookFunction962490E0.addDependency(ecsClusterasgOdDrainEcsHookFunctionServiceRoleFc088d55);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotDrainEcsHookFunctionServiceRoleDefaultPolicy96377D7c == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotDrainEcsHookFunctionServiceRoleDefaultPolicy96377D7c' to be undefined. Fixit.`); }
    const ecsClusterasgSpotDrainEcsHookFunction969F1553 = new lambda.CfnFunction(this, 'EcsClusterasgSpotDrainECSHookFunction969F1553', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      environment: {
        variables: {
          CLUSTER: ecsCluster97242B84.ref,
        },
      },
      handler: 'index.lambda_handler',
      role: ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0.attrArn,
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-spot/EcsCluster/asgSpot',
        },
      ],
      timeout: 310,
    });
    ecsClusterasgSpotDrainEcsHookFunction969F1553.addDependency(ecsClusterasgSpotDrainEcsHookFunctionServiceRoleDefaultPolicy96377D7c);
    ecsClusterasgSpotDrainEcsHookFunction969F1553.addDependency(ecsClusterasgSpotDrainEcsHookFunctionServiceRole8Eeddfe0);

    if (ecsClusterasgOdDrainEcsHookFunction962490E0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdDrainEcsHookFunction962490E0' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202' to be undefined. Fixit.`); }
    const ecsClusterasgOdDrainEcsHookFunctionAllowInvokeawsecsintegspotEcsClusterasgOdLifecycleHookDrainHookTopicB293d7d8b41b2d12 = new lambda.CfnPermission(this, 'EcsClusterasgOdDrainECSHookFunctionAllowInvokeawsecsintegspotEcsClusterasgOdLifecycleHookDrainHookTopicB293D7D8B41B2D12', {
      action: 'lambda:InvokeFunction',
      functionName: ecsClusterasgOdDrainEcsHookFunction962490E0.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202.ref,
    });

    if (ecsClusterasgOdDrainEcsHookFunction962490E0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdDrainEcsHookFunction962490E0' to be undefined. Fixit.`); }
    if (ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202' to be undefined. Fixit.`); }
    const ecsClusterasgOdDrainEcsHookFunctionTopicE6be4000 = new sns.CfnSubscription(this, 'EcsClusterasgOdDrainECSHookFunctionTopicE6BE4000', {
      endpoint: ecsClusterasgOdDrainEcsHookFunction962490E0.attrArn,
      protocol: 'lambda',
      topicArn: ecsClusterasgOdLifecycleHookDrainHookTopic673Ce202.ref,
    });

    if (ecsClusterasgSpotDrainEcsHookFunction969F1553 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotDrainEcsHookFunction969F1553' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83' to be undefined. Fixit.`); }
    const ecsClusterasgSpotDrainEcsHookFunctionAllowInvokeawsecsintegspotEcsClusterasgSpotLifecycleHookDrainHookTopic92E2845e8bd3fe4e = new lambda.CfnPermission(this, 'EcsClusterasgSpotDrainECSHookFunctionAllowInvokeawsecsintegspotEcsClusterasgSpotLifecycleHookDrainHookTopic92E2845E8BD3FE4E', {
      action: 'lambda:InvokeFunction',
      functionName: ecsClusterasgSpotDrainEcsHookFunction969F1553.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83.ref,
    });

    if (ecsClusterasgSpotDrainEcsHookFunction969F1553 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotDrainEcsHookFunction969F1553' to be undefined. Fixit.`); }
    if (ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83 == null) { throw new Error(`A combination of conditions caused 'ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83' to be undefined. Fixit.`); }
    const ecsClusterasgSpotDrainEcsHookFunctionTopic9648Cad4 = new sns.CfnSubscription(this, 'EcsClusterasgSpotDrainECSHookFunctionTopic9648CAD4', {
      endpoint: ecsClusterasgSpotDrainEcsHookFunction969F1553.attrArn,
      protocol: 'lambda',
      topicArn: ecsClusterasgSpotLifecycleHookDrainHookTopic6212Ec83.ref,
    });
  }
}

