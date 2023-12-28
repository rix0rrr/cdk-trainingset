import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsEcsIntegMultipleAlbProps extends cdk.StackProps {
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

export class AwsEcsIntegMultipleAlb extends cdk.Stack {
  public readonly myServiceLoadBalancerDns3a083e9f;
  public readonly myServiceServiceUrl1258c56b;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegMultipleAlbProps = {}) {
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
    const clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1 = new iam.CfnRole(this, 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRole2AC250B1', {
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
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const clusterDefaultAutoScalingGroupInstanceRole9A14b384 = new iam.CfnRole(this, 'ClusterDefaultAutoScalingGroupInstanceRole9A14B384', {
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
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663 = new iam.CfnRole(this, 'ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663', {
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
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb = new sns.CfnTopic(this, 'ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFE5437FB', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const clusterEb0386a7 = new ecs.CfnCluster(this, 'ClusterEB0386A7', {
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet2',
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

    if (clusterDefaultAutoScalingGroupInstanceRole9A14b384 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceRole9A14b384' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupInstanceProfile2Bb4fe55 = new iam.CfnInstanceProfile(this, 'ClusterDefaultAutoScalingGroupInstanceProfile2BB4FE55', {
      roles: [
        clusterDefaultAutoScalingGroupInstanceRole9A14b384.ref,
      ],
    });

    if (clusterDefaultAutoScalingGroupInstanceRole9A14b384 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceRole9A14b384' to be undefined. Fixit.`); }
    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81 = new iam.CfnPolicy(this, 'ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81', {
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
      policyName: 'ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81',
      roles: [
        clusterDefaultAutoScalingGroupInstanceRole9A14b384.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a = new ec2.CfnSecurityGroup(this, 'ClusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236A', {
      groupDescription: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFffd6ea5 = new iam.CfnPolicy(this, 'ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFFFD6EA5', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFFFD6EA5',
      roles: [
        clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet2',
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
    const myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0 = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServiceLBPublicListenerECSTargetGroupweb80GroupCA306BD0', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'instance',
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5 = new elasticloadbalancingv2.CfnTargetGroup(this, 'myServiceLBPublicListenerECSTargetGroupweb90Group6388E5B5', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'instance',
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const myServiceLbSecurityGroupFe0ed608 = new ec2.CfnSecurityGroup(this, 'myServiceLBSecurityGroupFE0ED608', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegmultiplealbmyServiceLB809BE588',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
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
            {
              containerPort: 90,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
      ],
      executionRoleArn: myServiceTaskDefExecutionRole618Cd311.attrArn,
      family: 'awsecsintegmultiplealbmyServiceTaskDefC0AB61D5',
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

    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    const myServiceTaskDefTaskRoleDefaultPolicyD48473c0 = new iam.CfnPolicy(this, 'myServiceTaskDefTaskRoleDefaultPolicyD48473C0', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:DescribeLogGroups',
              'logs:DescribeLogStreams',
              'logs:PutLogEvents',
              'ssmmessages:CreateControlChannel',
              'ssmmessages:CreateDataChannel',
              'ssmmessages:OpenControlChannel',
              'ssmmessages:OpenDataChannel',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myServiceTaskDefTaskRoleDefaultPolicyD48473C0',
      roles: [
        myServiceTaskDefTaskRole1C1de6cc.ref,
      ],
    });

    if (clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a' to be undefined. Fixit.`); }
    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupInstanceSecurityGroupfromawsecsintegmultiplealbmyServiceLbSecurityGroupA7380e2532768655354cb88e99 = new ec2.CfnSecurityGroupIngress(this, 'ClusterDefaultAutoScalingGroupInstanceSecurityGroupfromawsecsintegmultiplealbmyServiceLBSecurityGroupA7380E2532768655354CB88E99', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 32768,
      groupId: clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a.attrGroupId,
      sourceSecurityGroupId: myServiceLbSecurityGroupFe0ed608.attrGroupId,
      toPort: 65535,
    });

    if (clusterDefaultAutoScalingGroupInstanceProfile2Bb4fe55 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceProfile2Bb4fe55' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupInstanceRole9A14b384 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceRole9A14b384' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a' to be undefined. Fixit.`); }
    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupLaunchConfig81Ea5466 = new autoscaling.CfnLaunchConfiguration(this, 'ClusterDefaultAutoScalingGroupLaunchConfig81EA5466', {
      imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
      instanceType: 't2.micro',
      iamInstanceProfile: clusterDefaultAutoScalingGroupInstanceProfile2Bb4fe55.ref,
      securityGroups: [
        clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a.attrGroupId,
      ],
      userData: cdk.Fn.base64([
        '#!/bin/bash\necho ECS_CLUSTER=',
        clusterEb0386a7.ref,
        ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
      ].join('')),
    });
    clusterDefaultAutoScalingGroupLaunchConfig81Ea5466.addDependency(clusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy06157A81);
    clusterDefaultAutoScalingGroupLaunchConfig81Ea5466.addDependency(clusterDefaultAutoScalingGroupInstanceRole9A14b384);

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

    if (clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a' to be undefined. Fixit.`); }
    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    const myServiceLbSecurityGrouptoawsecsintegmultiplealbClusterDefaultAutoScalingGroupInstanceSecurityGroup9E5900fd3276865535cbc5454c = new ec2.CfnSecurityGroupEgress(this, 'myServiceLBSecurityGrouptoawsecsintegmultiplealbClusterDefaultAutoScalingGroupInstanceSecurityGroup9E5900FD3276865535CBC5454C', {
      groupId: myServiceLbSecurityGroupFe0ed608.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: clusterDefaultAutoScalingGroupInstanceSecurityGroup1D15236a.attrGroupId,
      fromPort: 32768,
      toPort: 65535,
    });

    if (clusterDefaultAutoScalingGroupLaunchConfig81Ea5466 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLaunchConfig81Ea5466' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupAsg0f98e147 = new autoscaling.CfnAutoScalingGroup(this, 'ClusterDefaultAutoScalingGroupASG0F98E147', {
      maxSize: '1',
      minSize: '1',
      launchConfigurationName: clusterDefaultAutoScalingGroupLaunchConfig81Ea5466.ref,
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    clusterDefaultAutoScalingGroupAsg0f98e147.cfnOptions.updatePolicy = {
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-multiple-alb/Vpc/PublicSubnet2',
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
    if (myServiceLbSecurityGroupFe0ed608 == null) { throw new Error(`A combination of conditions caused 'myServiceLbSecurityGroupFe0ed608' to be undefined. Fixit.`); }
    const myServiceLb168895e1 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'myServiceLB168895E1', {
      name: 'LB',
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        myServiceLbSecurityGroupFe0ed608.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    myServiceLb168895e1.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    myServiceLb168895e1.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    myServiceLb168895e1.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (clusterDefaultAutoScalingGroupAsg0f98e147 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupAsg0f98e147' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1' to be undefined. Fixit.`); }
    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy221F6e5e = new iam.CfnPolicy(this, 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy221F6E5E', {
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
              clusterDefaultAutoScalingGroupAsg0f98e147.ref,
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
                'ecs:cluster': clusterEb0386a7.attrArn,
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
            Resource: clusterEb0386a7.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy221F6E5E',
      roles: [
        clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1.ref,
      ],
    });

    if (clusterDefaultAutoScalingGroupAsg0f98e147 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupAsg0f98e147' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFffd6ea5 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFffd6ea5' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupLifecycleHookDrainHook4A9a4325 = new autoscaling.CfnLifecycleHook(this, 'ClusterDefaultAutoScalingGroupLifecycleHookDrainHook4A9A4325', {
      autoScalingGroupName: clusterDefaultAutoScalingGroupAsg0f98e147.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb.ref,
      roleArn: clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663.attrArn,
    });
    clusterDefaultAutoScalingGroupLifecycleHookDrainHook4A9a4325.addDependency(clusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyFffd6ea5);
    clusterDefaultAutoScalingGroupLifecycleHookDrainHook4A9a4325.addDependency(clusterDefaultAutoScalingGroupLifecycleHookDrainHookRole70201663);

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
    if (myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerC78ae8a0 = new elasticloadbalancingv2.CfnListener(this, 'myServiceLBPublicListenerC78AE8A0', {
      defaultActions: [
        {
          targetGroupArn: myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: myServiceLb168895e1.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy221F6e5e == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy221F6e5e' to be undefined. Fixit.`); }
    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865 = new lambda.CfnFunction(this, 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionFE918865', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1.attrArn,
      environment: {
        variables: {
          CLUSTER: clusterEb0386a7.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-multiple-alb/Cluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865.addDependency(clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy221F6e5e);
    clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865.addDependency(clusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole2Ac250b1);

    if (myServiceLbPublicListenerC78ae8a0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerC78ae8a0' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5' to be undefined. Fixit.`); }
    const myServiceLbPublicListenerEcsTargetGroupweb90Rule0Caa997d = new elasticloadbalancingv2.CfnListenerRule(this, 'myServiceLBPublicListenerECSTargetGroupweb90Rule0CAA997D', {
      actions: [
        {
          targetGroupArn: myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5.ref,
          type: 'forward',
        },
      ],
      conditions: [
        {
          field: 'path-pattern',
          pathPatternConfig: {
            values: [
              'a/b/c',
            ],
          },
        },
      ],
      priority: 10,
      listenerArn: myServiceLbPublicListenerC78ae8a0.ref,
    });

    if (clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawsecsintegmultiplealbClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic69A3f5ed8878bc87 = new lambda.CfnPermission(this, 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawsecsintegmultiplealbClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic69A3F5ED8878BC87', {
      action: 'lambda:InvokeFunction',
      functionName: clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb.ref,
    });

    if (clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865 == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865' to be undefined. Fixit.`); }
    if (clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb == null) { throw new Error(`A combination of conditions caused 'clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb' to be undefined. Fixit.`); }
    const clusterDefaultAutoScalingGroupDrainEcsHookFunctionTopic3B6438ec = new sns.CfnSubscription(this, 'ClusterDefaultAutoScalingGroupDrainECSHookFunctionTopic3B6438EC', {
      protocol: 'lambda',
      topicArn: clusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicFe5437fb.ref,
      endpoint: clusterDefaultAutoScalingGroupDrainEcsHookFunctionFe918865.attrArn,
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerC78ae8a0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerC78ae8a0' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5 == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5' to be undefined. Fixit.`); }
    if (myServiceLbPublicListenerEcsTargetGroupweb90Rule0Caa997d == null) { throw new Error(`A combination of conditions caused 'myServiceLbPublicListenerEcsTargetGroupweb90Rule0Caa997d' to be undefined. Fixit.`); }
    if (myServiceTaskDef7Fb8322a == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDef7Fb8322a' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRole1C1de6cc == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRole1C1de6cc' to be undefined. Fixit.`); }
    if (myServiceTaskDefTaskRoleDefaultPolicyD48473c0 == null) { throw new Error(`A combination of conditions caused 'myServiceTaskDefTaskRoleDefaultPolicyD48473c0' to be undefined. Fixit.`); }
    const myServiceB0b6faa0 = new ecs.CfnService(this, 'myServiceB0B6FAA0', {
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
      enableExecuteCommand: true,
      healthCheckGracePeriodSeconds: 60,
      launchType: 'EC2',
      loadBalancers: [
        {
          containerName: 'web',
          containerPort: 80,
          targetGroupArn: myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0.ref,
        },
        {
          containerName: 'web',
          containerPort: 90,
          targetGroupArn: myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5.ref,
        },
      ],
      schedulingStrategy: 'REPLICA',
      taskDefinition: myServiceTaskDef7Fb8322a.ref,
    });
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerEcsTargetGroupweb80GroupCa306bd0);
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerEcsTargetGroupweb90Group6388E5b5);
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerEcsTargetGroupweb90Rule0Caa997d);
    myServiceB0b6faa0.addDependency(myServiceLbPublicListenerC78ae8a0);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRoleDefaultPolicyD48473c0);
    myServiceB0b6faa0.addDependency(myServiceTaskDefTaskRole1C1de6cc);

    // Outputs
    this.myServiceLoadBalancerDns3a083e9f = myServiceLb168895e1.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputmyServiceLoadBalancerDNS3A083E9F', {
      key: 'myServiceLoadBalancerDNS3A083E9F',
      value: this.myServiceLoadBalancerDns3a083e9f!.toString(),
    });
    this.myServiceServiceUrl1258c56b = [
      'http://',
      myServiceLb168895e1.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyServiceServiceURL1258C56B', {
      key: 'myServiceServiceURL1258C56B',
      value: this.myServiceServiceUrl1258c56b!.toString(),
    });
  }
}

