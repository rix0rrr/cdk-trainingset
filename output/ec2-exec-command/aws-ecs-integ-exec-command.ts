import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-ecs-integ-exec-commandProps extends cdk.StackProps {
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

export class aws-ecs-integ-exec-command extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-exec-commandProps = {}) {
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
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRole23116FA3', {
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
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898', {
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
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 = new iam.CfnRole(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045ED7', {
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
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 = new sns.CfnTopic(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263B30', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
    });

    const kmsKey46693Add = new kms.CfnKey(this, 'KmsKey46693ADD', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
          {
            Action: [
              'kms:Decrypt*',
              'kms:Describe*',
              'kms:Encrypt*',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Condition: {
              ArnLike: {
                'kms:EncryptionContext:aws:logs:arn': [
                  'arn:',
                  this.partition,
                  ':logs:',
                  this.region,
                  ':',
                  this.account,
                  ':*',
                ].join(''),
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: [
                'logs.',
                this.region,
                '.amazonaws.com',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    kmsKey46693Add.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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
          value: 'aws-ecs-integ-exec-command/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471 = new iam.CfnInstanceProfile(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceProfileDB232471', {
      roles: [
        ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e = new ec2.CfnSecurityGroup(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0A9E', {
      groupDescription: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974B', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974B',
      roles: [
        ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7.ref,
      ],
    });

    if (kmsKey46693Add == null) { throw new Error(`A combination of conditions caused 'kmsKey46693Add' to be undefined. Fixit.`); }
    const ecsExecBucket4F468651 = new s3.CfnBucket(this, 'EcsExecBucket4F468651', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: kmsKey46693Add.attrArn,
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    ecsExecBucket4F468651.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (kmsKey46693Add == null) { throw new Error(`A combination of conditions caused 'kmsKey46693Add' to be undefined. Fixit.`); }
    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      kmsKeyId: kmsKey46693Add.attrArn,
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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
      family: 'awsecsintegexeccommandTaskDef44709274',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (ecsExecBucket4F468651 == null) { throw new Error(`A combination of conditions caused 'ecsExecBucket4F468651' to be undefined. Fixit.`); }
    if (kmsKey46693Add == null) { throw new Error(`A combination of conditions caused 'kmsKey46693Add' to be undefined. Fixit.`); }
    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const ec2ClusterEe43e89d = new ecs.CfnCluster(this, 'Ec2ClusterEE43E89D', {
      configuration: {
        executeCommandConfiguration: {
          kmsKeyId: kmsKey46693Add.attrArn,
          logConfiguration: {
            cloudWatchEncryptionEnabled: true,
            cloudWatchLogGroupName: logGroupF5b46931.ref,
            s3BucketName: ecsExecBucket4F468651.ref,
            s3EncryptionEnabled: true,
            s3KeyPrefix: 'exec-output',
          },
          logging: 'OVERRIDE',
        },
      },
    });

    if (ecsExecBucket4F468651 == null) { throw new Error(`A combination of conditions caused 'ecsExecBucket4F468651' to be undefined. Fixit.`); }
    if (kmsKey46693Add == null) { throw new Error(`A combination of conditions caused 'kmsKey46693Add' to be undefined. Fixit.`); }
    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDefTaskRoleDefaultPolicyA592cb18 = new iam.CfnPolicy(this, 'TaskDefTaskRoleDefaultPolicyA592CB18', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:DescribeLogGroups',
              's3:GetBucketLocation',
              'ssmmessages:CreateControlChannel',
              'ssmmessages:CreateDataChannel',
              'ssmmessages:OpenControlChannel',
              'ssmmessages:OpenDataChannel',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:GenerateDataKey',
            ],
            Effect: 'Allow',
            Resource: kmsKey46693Add.attrArn,
          },
          {
            Action: [
              'logs:CreateLogStream',
              'logs:DescribeLogStreams',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:',
              logGroupF5b46931.ref,
              ':*',
            ].join(''),
          },
          {
            Action: 's3:PutObject',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':s3:::',
              ecsExecBucket4F468651.ref,
              '/*',
            ].join(''),
          },
          {
            Action: 's3:GetEncryptionConfiguration',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':s3:::',
              ecsExecBucket4F468651.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefTaskRoleDefaultPolicyA592CB18',
      roles: [
        taskDefTaskRole1Edb4a67.ref,
      ],
    });

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

    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2DC2FD', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: ec2ClusterEe43e89d.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': ec2ClusterEe43e89d.attrArn,
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
      policyName: 'Ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2DC2FD',
      roles: [
        ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898.ref,
      ],
    });

    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefTaskRoleDefaultPolicyA592cb18 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRoleDefaultPolicyA592cb18' to be undefined. Fixit.`); }
    const ec2Service04A33183 = new ecs.CfnService(this, 'Ec2Service04A33183', {
      cluster: ec2ClusterEe43e89d.ref,
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
      launchType: 'EC2',
      schedulingStrategy: 'REPLICA',
      taskDefinition: taskDef54694570.ref,
    });
    ec2Service04A33183.addDependency(taskDefTaskRoleDefaultPolicyA592cb18);
    ec2Service04A33183.addDependency(taskDefTaskRole1Edb4a67);

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
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-exec-command/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be = new ec2.CfnLaunchTemplate(this, 'Ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58BE', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ec2ClusterDefaultAutoScalingGroupInstanceProfileDb232471.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't2.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ec2ClusterDefaultAutoScalingGroupInstanceSecurityGroup149B0a9e.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          ec2ClusterEe43e89d.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.addDependency(ec2ClusterDefaultAutoScalingGroupInstanceRoleDefaultPolicy6D2dc2fd);
    ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.addDependency(ec2ClusterDefaultAutoScalingGroupInstanceRole73D80898);

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

    if (ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 = new autoscaling.CfnAutoScalingGroup(this, 'Ec2ClusterDefaultAutoScalingGroupASGC5A6D4C0', {
      maxSize: '1',
      minSize: '1',
      launchTemplate: {
        launchTemplateId: ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.ref,
        version: ec2ClusterDefaultAutoScalingGroupLaunchTemplate346F58be.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33 = new iam.CfnPolicy(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy638C9E33', {
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
              ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.ref,
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
                'ecs:cluster': ec2ClusterEe43e89d.attrArn,
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
            Resource: ec2ClusterEe43e89d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionServiceRoleDefaultPolicy638C9E33',
      roles: [
        ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3.ref,
      ],
    });

    if (ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e = new autoscaling.CfnLifecycleHook(this, 'Ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5CB1467E', {
      autoScalingGroupName: ec2ClusterDefaultAutoScalingGroupAsgc5a6d4c0.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
      roleArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7.attrArn,
    });
    ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e.addDependency(ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRoleDefaultPolicyE499974b);
    ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHook5Cb1467e.addDependency(ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookRole71045Ed7);

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33' to be undefined. Fixit.`); }
    if (ec2ClusterEe43e89d == null) { throw new Error(`A combination of conditions caused 'ec2ClusterEe43e89d' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 = new lambda.CfnFunction(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionE0DEFB31', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3.attrArn,
      environment: {
        variables: {
          CLUSTER: ec2ClusterEe43e89d.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-exec-command/Ec2Cluster/DefaultAutoScalingGroup',
        },
      ],
      timeout: 310,
    });
    ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.addDependency(ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRoleDefaultPolicy638C9e33);
    ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.addDependency(ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionServiceRole23116Fa3);

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionAllowInvokeawsecsintegexeccommandEc2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic05F8c92983e1ad32 = new lambda.CfnPermission(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionAllowInvokeawsecsintegexeccommandEc2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopic05F8C92983E1AD32', {
      action: 'lambda:InvokeFunction',
      functionName: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
    });

    if (ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31' to be undefined. Fixit.`); }
    if (ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30 == null) { throw new Error(`A combination of conditions caused 'ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30' to be undefined. Fixit.`); }
    const ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionTopic4795E0f6 = new sns.CfnSubscription(this, 'Ec2ClusterDefaultAutoScalingGroupDrainECSHookFunctionTopic4795E0F6', {
      protocol: 'lambda',
      topicArn: ec2ClusterDefaultAutoScalingGroupLifecycleHookDrainHookTopicF7263b30.ref,
      endpoint: ec2ClusterDefaultAutoScalingGroupDrainEcsHookFunctionE0defb31.attrArn,
    });
  }
}

