import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsEcsIntegNlbProps extends cdk.StackProps {
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

export class AwsEcsIntegNlb extends cdk.Stack {
  public readonly myServiceLoadBalancerDns3a083e9f;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegNlbProps = {}) {
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
    const clusterEb0386a7 = new ecs.CfnCluster(this, 'ClusterEB0386A7', {
    });

    const firstAutoScalingGroupInstanceRoleC3260ebe = new iam.CfnRole(this, 'FirstAutoScalingGroupInstanceRoleC3260EBE', {
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
          value: 'aws-ecs-integ-nlb/FirstAutoScalingGroup',
        },
      ],
    });

    const secondAutoScalingGroupInstanceRoleB7de61a1 = new iam.CfnRole(this, 'SecondAutoScalingGroupInstanceRoleB7DE61A1', {
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
          value: 'aws-ecs-integ-nlb/SecondAutoScalingGroup',
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
          value: 'aws-ecs-integ-nlb/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet2',
        },
      ],
    });

    const myServiceTaskDefExecutionRole618Cd311 = new iam.CfnRole(this, 'myServiceTaskDefExecutionRole618CD311', {
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

    const myServiceTaskDefTaskRole1C1de6cc = new iam.CfnRole(this, 'myServiceTaskDefTaskRole1C1DE6CC', {
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

    const myServiceTaskDefwebLogGroupA1767f2c = new logs.CfnLogGroup(this, 'myServiceTaskDefwebLogGroupA1767F2C', {
    });
    myServiceTaskDefwebLogGroupA1767f2c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (firstAutoScalingGroupInstanceRoleC3260ebe == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupInstanceRoleC3260ebe' to be undefined. Fixit.`); }
    const firstAutoScalingGroupInstanceProfileA7ab0d44 = new iam.CfnInstanceProfile(this, 'FirstAutoScalingGroupInstanceProfileA7AB0D44', {
      roles: [
        firstAutoScalingGroupInstanceRoleC3260ebe.ref,
      ],
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (firstAutoScalingGroupInstanceRoleC3260ebe == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupInstanceRoleC3260ebe' to be undefined. Fixit.`); }
    const firstAutoScalingGroupInstanceRoleDefaultPolicy4848Aea5 = new iam.CfnPolicy(this, 'FirstAutoScalingGroupInstanceRoleDefaultPolicy4848AEA5', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: clusterEb0386a7.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': clusterEb0386a7.attrArn,
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
      policyName: 'FirstAutoScalingGroupInstanceRoleDefaultPolicy4848AEA5',
      roles: [
        firstAutoScalingGroupInstanceRoleC3260ebe.ref,
      ],
    });

    if (secondAutoScalingGroupInstanceRoleB7de61a1 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupInstanceRoleB7de61a1' to be undefined. Fixit.`); }
    const secondAutoScalingGroupInstanceProfileF37ff7a1 = new iam.CfnInstanceProfile(this, 'SecondAutoScalingGroupInstanceProfileF37FF7A1', {
      roles: [
        secondAutoScalingGroupInstanceRoleB7de61a1.ref,
      ],
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (secondAutoScalingGroupInstanceRoleB7de61a1 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupInstanceRoleB7de61a1' to be undefined. Fixit.`); }
    const secondAutoScalingGroupInstanceRoleDefaultPolicyAaa3bd7d = new iam.CfnPolicy(this, 'SecondAutoScalingGroupInstanceRoleDefaultPolicyAAA3BD7D', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: clusterEb0386a7.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': clusterEb0386a7.attrArn,
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
      policyName: 'SecondAutoScalingGroupInstanceRoleDefaultPolicyAAA3BD7D',
      roles: [
        secondAutoScalingGroupInstanceRoleB7de61a1.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const securityGroupDd263621 = new ec2.CfnSecurityGroup(this, 'SecurityGroupDD263621', {
      groupDescription: 'aws-ecs-integ-nlb/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'from 0.0.0.0/0:32768-65535',
          fromPort: 32768,
          ipProtocol: 'tcp',
          toPort: 65535,
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-nlb/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-nlb/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerEcsGroup17E9bbc1 = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServiceLBPublicListenerECSGroup17E9BBC1', {
      port: 80,
      protocol: 'TCP',
      targetType: 'instance',
      vpcId: vpc8378Eb38.ref,
    });

    if (myServiceTaskDefExecutionRole618Cd311 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefExecutionRole618Cd311' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefwebLogGroupA1767f2c == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefwebLogGroupA1767f2c' to be undefined. Fixit.`); }
    const myServiceTaskDef7Fb8322a = new ecs.CfnTaskDefinition(this, 'myServiceTaskDef7FB8322A', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': myServiceTaskDefwebLogGroupA1767f2c.ref,
              'awslogs-stream-prefix': 'myService',
              'awslogs-region': this.region,
            },
          },
          memory: 256,
          name: 'web',
          portMappings: [
            {
              containerPort: 80,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
      ],
      executionRoleArn: myServiceTaskDefExecutionRole618Cd311.attrArn,
      family: 'awsecsintegnlbmyServiceTaskDef30681002',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: myServiceTaskDefTaskRole1C1de6cc.attrArn,
    });

    if (myServiceTaskDefExecutionRole618Cd311 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefExecutionRole618Cd311' to be undefined. Fixit.`); }
    if (myServiceTaskDefwebLogGroupA1767f2c == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefwebLogGroupA1767f2c' to be undefined. Fixit.`); }
    const myServiceTaskDefExecutionRoleDefaultPolicyBdaec571 = new iam.CfnPolicy(this, 'myServiceTaskDefExecutionRoleDefaultPolicyBDAEC571', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: myServiceTaskDefwebLogGroupA1767f2c.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myServiceTaskDefExecutionRoleDefaultPolicyBDAEC571',
      roles: [
        myServiceTaskDefExecutionRole618Cd311.ref,
      ],
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (firstAutoScalingGroupInstanceProfileA7ab0d44 == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupInstanceProfileA7ab0d44' to be undefined. Fixit.`); }
    if (firstAutoScalingGroupInstanceRoleC3260ebe == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupInstanceRoleC3260ebe' to be undefined. Fixit.`); }
    if (firstAutoScalingGroupInstanceRoleDefaultPolicy4848Aea5 == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupInstanceRoleDefaultPolicy4848Aea5' to be undefined. Fixit.`); }
    if (securityGroupDd263621 == null) { throw new Error(`A combination of conditions caused 'securityGroupDd263621' to be undefined. Fixit.`); }
    const firstAutoScalingGroupLaunchTemplate8C808bc8 = new ec2.CfnLaunchTemplate(this, 'FirstAutoScalingGroupLaunchTemplate8C808BC8', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: firstAutoScalingGroupInstanceProfileA7ab0d44.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          securityGroupDd263621.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-nlb/FirstAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-nlb/FirstAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          clusterEb0386a7.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-nlb/FirstAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    firstAutoScalingGroupLaunchTemplate8C808bc8.addDependency(firstAutoScalingGroupInstanceRoleDefaultPolicy4848Aea5);
    firstAutoScalingGroupLaunchTemplate8C808bc8.addDependency(firstAutoScalingGroupInstanceRoleC3260ebe);

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (secondAutoScalingGroupInstanceProfileF37ff7a1 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupInstanceProfileF37ff7a1' to be undefined. Fixit.`); }
    if (secondAutoScalingGroupInstanceRoleB7de61a1 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupInstanceRoleB7de61a1' to be undefined. Fixit.`); }
    if (secondAutoScalingGroupInstanceRoleDefaultPolicyAaa3bd7d == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupInstanceRoleDefaultPolicyAaa3bd7d' to be undefined. Fixit.`); }
    if (securityGroupDd263621 == null) { throw new Error(`A combination of conditions caused 'securityGroupDd263621' to be undefined. Fixit.`); }
    const secondAutoScalingGroupLaunchTemplateD3548173 = new ec2.CfnLaunchTemplate(this, 'SecondAutoScalingGroupLaunchTemplateD3548173', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: secondAutoScalingGroupInstanceProfileF37ff7a1.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't3.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          securityGroupDd263621.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-nlb/SecondAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-nlb/SecondAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          clusterEb0386a7.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-nlb/SecondAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    secondAutoScalingGroupLaunchTemplateD3548173.addDependency(secondAutoScalingGroupInstanceRoleDefaultPolicyAaa3bd7d);
    secondAutoScalingGroupLaunchTemplateD3548173.addDependency(secondAutoScalingGroupInstanceRoleB7de61a1);

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

    if (firstAutoScalingGroupLaunchTemplate8C808bc8 == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupLaunchTemplate8C808bc8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const firstAutoScalingGroupAsg3b34ca43 = new autoscaling.CfnAutoScalingGroup(this, 'FirstAutoScalingGroupASG3B34CA43', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: firstAutoScalingGroupLaunchTemplate8C808bc8.ref,
        version: firstAutoScalingGroupLaunchTemplate8C808bc8.attrLatestVersionNumber,
      },
      newInstancesProtectedFromScaleIn: true,
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-nlb/FirstAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    firstAutoScalingGroupAsg3b34ca43.cfnOptions.updatePolicy = {
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (secondAutoScalingGroupLaunchTemplateD3548173 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupLaunchTemplateD3548173' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const secondAutoScalingGroupAsg6483ddb2 = new autoscaling.CfnAutoScalingGroup(this, 'SecondAutoScalingGroupASG6483DDB2', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: secondAutoScalingGroupLaunchTemplateD3548173.ref,
        version: secondAutoScalingGroupLaunchTemplateD3548173.attrLatestVersionNumber,
      },
      newInstancesProtectedFromScaleIn: true,
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-nlb/SecondAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    secondAutoScalingGroupAsg6483ddb2.cfnOptions.updatePolicy = {
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
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-nlb/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const myServiceLb168895e1 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'myServiceLB168895E1', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'network',
    });
    myServiceLb168895e1.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    myServiceLb168895e1.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (firstAutoScalingGroupAsg3b34ca43 == null) { throw new Error(`A combination of conditions caused 'firstAutoScalingGroupAsg3b34ca43' to be undefined. Fixit.`); }
    const firstCapacityProvider4F40d887 = new ecs.CfnCapacityProvider(this, 'FirstCapacityProvider4F40D887', {
      autoScalingGroupProvider: {
        autoScalingGroupArn: firstAutoScalingGroupAsg3b34ca43.ref,
        managedScaling: {
          status: 'ENABLED',
          targetCapacity: 100,
        },
        managedTerminationProtection: 'ENABLED',
      },
      name: 'first-capacity-provider',
    });

    if (secondAutoScalingGroupAsg6483ddb2 == null) { throw new Error(`A combination of conditions caused 'secondAutoScalingGroupAsg6483ddb2' to be undefined. Fixit.`); }
    const secondCapacityProvider85378C3e = new ecs.CfnCapacityProvider(this, 'SecondCapacityProvider85378C3E', {
      autoScalingGroupProvider: {
        autoScalingGroupArn: secondAutoScalingGroupAsg6483ddb2.ref,
        managedScaling: {
          status: 'ENABLED',
          targetCapacity: 100,
        },
        managedTerminationProtection: 'ENABLED',
      },
      name: 'second-capacity-provider',
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

    if (myServiceLb168895e1 == null) { throw new Error(`A combination of conditions caused 'myServiceLb168895e1' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsGroup17E9bbc1 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsGroup17E9bbc1' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerC78ae8a0 = new elasticloadbalancingv2.CfnListener(this, 'myServiceLBPublicListenerC78AE8A0', {
      defaultActions: [
        {
          targetGroupArn: myServiceLbPublicListenerEcsGroup17E9bbc1.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: myServiceLb168895e1.ref,
      port: 80,
      protocol: 'TCP',
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (firstCapacityProvider4F40d887 == null) { throw new Error(`A combination of conditions caused 'firstCapacityProvider4F40d887' to be undefined. Fixit.`); }
    if (secondCapacityProvider85378C3e == null) { throw new Error(`A combination of conditions caused 'secondCapacityProvider85378C3e' to be undefined. Fixit.`); }
    const cluster3Da9ccba = new ecs.CfnClusterCapacityProviderAssociations(this, 'Cluster3DA9CCBA', {
      capacityProviders: [
        firstCapacityProvider4F40d887.ref,
        secondCapacityProvider85378C3e.ref,
      ],
      cluster: clusterEb0386a7.ref,
      defaultCapacityProviderStrategy: [
      ],
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (firstCapacityProvider4F40d887 == null) { throw new Error(`A combination of conditions caused 'firstCapacityProvider4F40d887' to be undefined. Fixit.`); }
    if (secondCapacityProvider85378C3e == null) { throw new Error(`A combination of conditions caused 'secondCapacityProvider85378C3e' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerC78ae8a0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerC78ae8a0' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsGroup17E9bbc1 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsGroup17E9bbc1' to be undefined. Fixit.`); }
    if (myServiceTaskDef7Fb8322a == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDef7Fb8322a' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    const myServiceB0b6faa0 = new ecs.CfnService(this, 'myServiceB0B6FAA0', {
      capacityProviderStrategy: [
        {
          base: 1,
          capacityProvider: firstCapacityProvider4F40d887.ref,
          weight: 1,
        },
        {
          base: 0,
          capacityProvider: secondCapacityProvider85378C3e.ref,
          weight: 2,
        },
      ],
      cluster: clusterEb0386a7.ref,
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
      healthCheckGracePeriodSeconds: 60,
      loadBalancers: [
        {
          containerName: 'web',
          containerPort: 80,
          targetGroupArn: myServiceLbPublicListenerEcsGroup17E9bbc1.ref,
        },
      ],
      schedulingStrategy: 'REPLICA',
      taskDefinition: myServiceTaskDef7Fb8322a.ref,
    });
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerEcsGroup17E9bbc1);
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerC78ae8a0);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    // Outputs
    this.myServiceLoadBalancerDns3a083e9f = myServiceLb168895e1.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputmyServiceLoadBalancerDNS3A083E9F', {
      key: 'myServiceLoadBalancerDNS3A083E9F',
      value: this.myServiceLoadBalancerDns3a083e9f!.toString(),
    });
  }
}

