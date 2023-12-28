import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsEcsRuntimeIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsRuntimeInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsRuntimeIntegProps = {}) {
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
    const fargateCluster7Ccd5f93 = new ecs.CfnCluster(this, 'FargateCluster7CCD5F93', {
    });

    const scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522 = new iam.CfnRole(this, 'ScheduledFargateTaskScheduledTaskDefEventsRole6CE19522', {
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

    const scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5 = new iam.CfnRole(this, 'ScheduledFargateTaskScheduledTaskDefExecutionRoleD37356D5', {
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

    const scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c = new logs.CfnLogGroup(this, 'ScheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16C', {
    });
    scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad = new iam.CfnRole(this, 'ScheduledFargateTaskScheduledTaskDefTaskRoleD0FF16AD', {
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
          value: 'aws-ecs-runtime-integ/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-runtime-integ/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-runtime-integ/Vpc/PublicSubnet1',
        },
      ],
    });

    if (scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad' to be undefined. Fixit.`); }
    const scheduledFargateTaskScheduledTaskDef521Fa675 = new ecs.CfnTaskDefinition(this, 'ScheduledFargateTaskScheduledTaskDef521FA675', {
      containerDefinitions: [
        {
          environment: [
            {
              name: 'TRIGGER',
              value: 'CloudWatch Events',
            },
          ],
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c.ref,
              'awslogs-stream-prefix': 'ScheduledFargateTask',
              'awslogs-region': this.region,
            },
          },
          name: 'ScheduledContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5.attrArn,
      family: 'awsecsruntimeintegScheduledFargateTaskScheduledTaskDef2C9C1AED',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad.attrArn,
    });

    if (scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c' to be undefined. Fixit.`); }
    const scheduledFargateTaskScheduledTaskDefExecutionRoleDefaultPolicy3E3aee49 = new iam.CfnPolicy(this, 'ScheduledFargateTaskScheduledTaskDefExecutionRoleDefaultPolicy3E3AEE49', {
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
            Resource: scheduledFargateTaskScheduledTaskDefScheduledContainerLogGroup4134B16c.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ScheduledFargateTaskScheduledTaskDefExecutionRoleDefaultPolicy3E3AEE49',
      roles: [
        scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const scheduledFargateTaskScheduledTaskDefSecurityGroupE075bc19 = new ec2.CfnSecurityGroup(this, 'ScheduledFargateTaskScheduledTaskDefSecurityGroupE075BC19', {
      groupDescription: 'aws-ecs-runtime-integ/ScheduledFargateTask/ScheduledTaskDef/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
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
          value: 'aws-ecs-runtime-integ/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-runtime-integ/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-runtime-integ/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-runtime-integ/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDef521Fa675 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDef521Fa675' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefSecurityGroupE075bc19 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefSecurityGroupE075bc19' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const scheduledFargateTaskScheduledEventRule2B79e34f = new events.CfnRule(this, 'ScheduledFargateTaskScheduledEventRule2B79E34F', {
      scheduleExpression: 'rate(2 minutes)',
      state: 'ENABLED',
      targets: [
        {
          arn: fargateCluster7Ccd5f93.attrArn,
          ecsParameters: {
            launchType: 'FARGATE',
            networkConfiguration: {
              awsVpcConfiguration: {
                assignPublicIp: 'DISABLED',
                securityGroups: [
                  scheduledFargateTaskScheduledTaskDefSecurityGroupE075bc19.attrGroupId,
                ],
                subnets: [
                  vpcPrivateSubnet1Subnet536B997a.ref,
                ],
              },
            },
            taskCount: 2,
            taskDefinitionArn: scheduledFargateTaskScheduledTaskDef521Fa675.ref,
          },
          id: 'Target0',
          input: '{}',
          roleArn: scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522.attrArn,
        },
      ],
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDef521Fa675 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDef521Fa675' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5 == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5' to be undefined. Fixit.`); }
    if (scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad == null) { throw new Error(`A combination of conditions caused 'scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad' to be undefined. Fixit.`); }
    const scheduledFargateTaskScheduledTaskDefEventsRoleDefaultPolicy4903Ed72 = new iam.CfnPolicy(this, 'ScheduledFargateTaskScheduledTaskDefEventsRoleDefaultPolicy4903ED72', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecs:RunTask',
            Condition: {
              ArnEquals: {
                'ecs:cluster': fargateCluster7Ccd5f93.attrArn,
              },
            },
            Effect: 'Allow',
            Resource: scheduledFargateTaskScheduledTaskDef521Fa675.ref,
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: [
              scheduledFargateTaskScheduledTaskDefExecutionRoleD37356d5.attrArn,
              scheduledFargateTaskScheduledTaskDefTaskRoleD0ff16ad.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ScheduledFargateTaskScheduledTaskDefEventsRoleDefaultPolicy4903ED72',
      roles: [
        scheduledFargateTaskScheduledTaskDefEventsRole6Ce19522.ref,
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
          value: 'aws-ecs-runtime-integ/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });
  }
}

