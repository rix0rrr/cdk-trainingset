import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsEcsIntegFargateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegFargate extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegFargateProps = {}) {
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
    const ecsCluster97242B84 = new ecs.CfnCluster(this, 'EcsCluster97242B84', {
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
          value: 'aws-ecs-integ-fargate/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate/Vpc/PublicSubnet1',
        },
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
          name: 'TheContainer',
        },
      ],
      cpu: '256',
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awsecsintegfargateTaskDef8878AF94',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const taskDefSecurityGroupD50e7cf0 = new ec2.CfnSecurityGroup(this, 'TaskDefSecurityGroupD50E7CF0', {
      groupDescription: 'aws-ecs-integ-fargate/TaskDef/SecurityGroup',
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
          value: 'aws-ecs-integ-fargate/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-fargate/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-fargate/Vpc/PublicSubnet1',
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
    if (myDeadLetterQueueD997968a == null) { throw new Error(`A combination of conditions caused 'myDeadLetterQueueD997968a' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefEventsRoleFb3b67b8 == null) { throw new Error(`A combination of conditions caused 'taskDefEventsRoleFb3b67b8' to be undefined. Fixit.`); }
    if (taskDefSecurityGroupD50e7cf0 == null) { throw new Error(`A combination of conditions caused 'taskDefSecurityGroupD50e7cf0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
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
            enableExecuteCommand: true,
            launchType: 'FARGATE',
            networkConfiguration: {
              awsVpcConfiguration: {
                assignPublicIp: 'DISABLED',
                securityGroups: [
                  taskDefSecurityGroupD50e7cf0.attrGroupId,
                ],
                subnets: [
                  vpcPrivateSubnet1Subnet536B997a.ref,
                ],
              },
            },
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
        {
          arn: ecsCluster97242B84.attrArn,
          ecsParameters: {
            launchType: 'FARGATE',
            networkConfiguration: {
              awsVpcConfiguration: {
                assignPublicIp: 'ENABLED',
                securityGroups: [
                  taskDefSecurityGroupD50e7cf0.attrGroupId,
                ],
                subnets: [
                  vpcPublicSubnet1Subnet5C2d37c4.ref,
                ],
              },
            },
            taskCount: 1,
            taskDefinitionArn: taskDef54694570.ref,
          },
          id: 'Target1',
          input: '{}',
          roleArn: taskDefEventsRoleFb3b67b8.attrArn,
        },
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefEventsRoleFb3b67b8 == null) { throw new Error(`A combination of conditions caused 'taskDefEventsRoleFb3b67b8' to be undefined. Fixit.`); }
    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
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
            Resource: [
              taskDefExecutionRoleB4775c97.attrArn,
              taskDefTaskRole1Edb4a67.attrArn,
            ],
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
            Sid: 'AllowEventRuleawsecsintegfargateRule16FD584B',
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
          value: 'aws-ecs-integ-fargate/Vpc/PublicSubnet1',
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

