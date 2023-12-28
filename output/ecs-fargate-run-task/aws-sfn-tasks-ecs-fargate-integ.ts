import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsSfnTasksEcsFargateIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsSfnTasksEcsFargateInteg extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsSfnTasksEcsFargateIntegProps = {}) {
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

    const fargateClusterVpc377E8024 = new ec2.CfnVPC(this, 'FargateClusterVpc377E8024', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc',
        },
      ],
    });

    const fargateClusterVpcIgw827638cb = new ec2.CfnInternetGateway(this, 'FargateClusterVpcIGW827638CB', {
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc',
        },
      ],
    });

    const fargateClusterVpcPublicSubnet1Eipf91909d0 = new ec2.CfnEIP(this, 'FargateClusterVpcPublicSubnet1EIPF91909D0', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    const fargateClusterVpcPublicSubnet2Eipbbb24774 = new ec2.CfnEIP(this, 'FargateClusterVpcPublicSubnet2EIPBBB24774', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet2',
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

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet1RouteTable21B3ceae = new ec2.CfnRouteTable(this, 'FargateClusterVpcPrivateSubnet1RouteTable21B3CEAE', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PrivateSubnet1',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPrivateSubnet2RouteTable7B7f9678 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPrivateSubnet2RouteTable7B7F9678', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PrivateSubnet2',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet1RouteTable1D7fa747 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPublicSubnet1RouteTable1D7FA747', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet1',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateClusterVpcPublicSubnet2RouteTable1493C5d6 = new ec2.CfnRouteTable(this, 'FargateClusterVpcPublicSubnet2RouteTable1493C5D6', {
      vpcId: fargateClusterVpc377E8024.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet2',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    if (fargateClusterVpcIgw827638cb == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcIgw827638cb' to be undefined. Fixit.`); }
    const fargateClusterVpcVpcgw38717255 = new ec2.CfnVPCGatewayAttachment(this, 'FargateClusterVpcVPCGW38717255', {
      vpcId: fargateClusterVpc377E8024.ref,
      internetGatewayId: fargateClusterVpcIgw827638cb.ref,
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargateTaskSecurityGroup0Bbb27cb = new ec2.CfnSecurityGroup(this, 'FargateTaskSecurityGroup0BBB27CB', {
      groupDescription: 'aws-sfn-tasks-ecs-fargate-integ/FargateTask/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: fargateClusterVpc377E8024.ref,
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargeateTaskSetRevisionNumberSecurityGroup916C9b0b = new ec2.CfnSecurityGroup(this, 'FargeateTaskSetRevisionNumberSecurityGroup916C9B0B', {
      groupDescription: 'aws-sfn-tasks-ecs-fargate-integ/FargeateTaskSetRevisionNumber/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: fargateClusterVpc377E8024.ref,
    });

    if (fargateClusterVpc377E8024 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpc377E8024' to be undefined. Fixit.`); }
    const fargeateTaskWithPropagatedTagSecurityGroup94A6ae70 = new ec2.CfnSecurityGroup(this, 'FargeateTaskWithPropagatedTagSecurityGroup94A6AE70', {
      groupDescription: 'aws-sfn-tasks-ecs-fargate-integ/FargeateTaskWithPropagatedTag/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: fargateClusterVpc377E8024.ref,
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
      cpu: '256',
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awssfntasksecsfargateintegTaskDefD0F4AD10',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet1',
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
          value: 'aws-sfn-tasks-ecs-fargate-integ/FargateCluster/Vpc/PublicSubnet2',
        },
      ],
    });
    fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2.addDependency(fargateClusterVpcPublicSubnet2DefaultRoute8E847cd2);
    fargateClusterVpcPublicSubnet2NatGatewayFfec8ed2.addDependency(fargateClusterVpcPublicSubnet2RouteTableAssociation3Efa74dc);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClusterVpcPrivateSubnet1Subnet9127625F == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet1Subnet9127625F' to be undefined. Fixit.`); }
    if (fargateClusterVpcPrivateSubnet2Subnet307Cee57 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPrivateSubnet2Subnet307Cee57' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet1SubnetB9c24bc7 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet1SubnetB9c24bc7' to be undefined. Fixit.`); }
    if (fargateClusterVpcPublicSubnet2Subnet24C0f9d8 == null) { throw new Error(`A combination of conditions caused 'fargateClusterVpcPublicSubnet2Subnet24C0f9d8' to be undefined. Fixit.`); }
    if (fargateTaskSecurityGroup0Bbb27cb == null) { throw new Error(`A combination of conditions caused 'fargateTaskSecurityGroup0Bbb27cb' to be undefined. Fixit.`); }
    if (fargeateTaskSetRevisionNumberSecurityGroup916C9b0b == null) { throw new Error(`A combination of conditions caused 'fargeateTaskSetRevisionNumberSecurityGroup916C9b0b' to be undefined. Fixit.`); }
    if (fargeateTaskWithPropagatedTagSecurityGroup94A6ae70 == null) { throw new Error(`A combination of conditions caused 'fargeateTaskWithPropagatedTagSecurityGroup94A6ae70' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"SomeKey\":\"SomeValue\",\"Timeout\":900},\"Next\":\"FargateTask\"},\"FargateTask\":{\"Next\":\"FargeateTaskSetRevisionNumber\",\"Type\":\"Task\",\"TimeoutSecondsPath\":\"$.Timeout\",\"Resource\":\"arn:',
        this.partition,
        ':states:::ecs:runTask.sync\",\"Parameters\":{\"Cluster\":\"',
        fargateCluster7Ccd5f93.attrArn,
        '\",\"TaskDefinition\":\"awssfntasksecsfargateintegTaskDefD0F4AD10\",\"NetworkConfiguration\":{\"AwsvpcConfiguration\":{\"AssignPublicIp\":\"ENABLED\",\"Subnets\":[\"',
        fargateClusterVpcPublicSubnet1SubnetB9c24bc7.ref,
        '\",\"',
        fargateClusterVpcPublicSubnet2Subnet24C0f9d8.ref,
        '\"],\"SecurityGroups\":[\"',
        fargateTaskSecurityGroup0Bbb27cb.attrGroupId,
        '\"]}},\"Overrides\":{\"ContainerOverrides\":[{\"Name\":\"TheContainer\",\"Environment\":[{\"Name\":\"SOME_KEY\",\"Value.$\":\"$.SomeKey\"}]}]},\"LaunchType\":\"FARGATE\",\"PlatformVersion\":\"1.4.0\"}},\"FargeateTaskSetRevisionNumber\":{\"Next\":\"FargeateTaskWithPropagatedTag\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::ecs:runTask\",\"Parameters\":{\"Cluster\":\"',
        fargateCluster7Ccd5f93.attrArn,
        '\",\"TaskDefinition\":\"awssfntasksecsfargateintegTaskDefD0F4AD10:1\",\"NetworkConfiguration\":{\"AwsvpcConfiguration\":{\"Subnets\":[\"',
        fargateClusterVpcPrivateSubnet1Subnet9127625F.ref,
        '\",\"',
        fargateClusterVpcPrivateSubnet2Subnet307Cee57.ref,
        '\"],\"SecurityGroups\":[\"',
        fargeateTaskSetRevisionNumberSecurityGroup916C9b0b.attrGroupId,
        '\"]}},\"LaunchType\":\"FARGATE\",\"PlatformVersion\":\"1.4.0\"}},\"FargeateTaskWithPropagatedTag\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::ecs:runTask\",\"Parameters\":{\"Cluster\":\"',
        fargateCluster7Ccd5f93.attrArn,
        '\",\"TaskDefinition\":\"awssfntasksecsfargateintegTaskDefD0F4AD10\",\"NetworkConfiguration\":{\"AwsvpcConfiguration\":{\"Subnets\":[\"',
        fargateClusterVpcPrivateSubnet1Subnet9127625F.ref,
        '\",\"',
        fargateClusterVpcPrivateSubnet2Subnet307Cee57.ref,
        '\"],\"SecurityGroups\":[\"',
        fargeateTaskWithPropagatedTagSecurityGroup94A6ae70.attrGroupId,
        '\"]}},\"PropagateTags\":\"TASK_DEFINITION\",\"LaunchType\":\"FARGATE\",\"PlatformVersion\":\"1.4.0\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

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

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

