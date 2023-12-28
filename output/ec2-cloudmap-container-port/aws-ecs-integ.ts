import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface AwsEcsIntegProps extends cdk.StackProps {
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

export class AwsEcsInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegProps = {}) {
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
    const fargateCluster7Ccd5f93 = new ecs.CfnCluster(this, 'FargateCluster7CCD5F93', {
    });

    const fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9 = new iam.CfnRole(this, 'FargateClustercapacityDrainECSHookFunctionServiceRoleA28505D9', {
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
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
    });

    const fargateClustercapacityInstanceRoleBe253d2d = new iam.CfnRole(this, 'FargateClustercapacityInstanceRoleBE253D2D', {
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
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
    });

    const fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b = new iam.CfnRole(this, 'FargateClustercapacityLifecycleHookDrainHookRoleDD26E39B', {
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
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
    });

    const fargateClustercapacityLifecycleHookDrainHookTopic390A0e34 = new sns.CfnTopic(this, 'FargateClustercapacityLifecycleHookDrainHookTopic390A0E34', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/FargateCluster/capacity',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateClusterDefaultServiceDiscoveryNamespace04381E1e = new servicediscovery.CfnPrivateDnsNamespace(this, 'FargateClusterDefaultServiceDiscoveryNamespace04381E1E', {
      name: 'aws-ecs-integ',
      vpc: vpc8378Eb38.ref,
    });

    if (fargateClustercapacityInstanceRoleBe253d2d == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceRoleBe253d2d' to be undefined. Fixit.`); }
    const fargateClustercapacityInstanceProfile8294296C = new iam.CfnInstanceProfile(this, 'FargateClustercapacityInstanceProfile8294296C', {
      roles: [
        fargateClustercapacityInstanceRoleBe253d2d.ref,
      ],
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClustercapacityInstanceRoleBe253d2d == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceRoleBe253d2d' to be undefined. Fixit.`); }
    const fargateClustercapacityInstanceRoleDefaultPolicy90B38927 = new iam.CfnPolicy(this, 'FargateClustercapacityInstanceRoleDefaultPolicy90B38927', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DeregisterContainerInstance',
              'ecs:RegisterContainerInstance',
              'ecs:Submit*',
            ],
            Effect: 'Allow',
            Resource: fargateCluster7Ccd5f93.attrArn,
          },
          {
            Action: [
              'ecs:Poll',
              'ecs:StartTelemetrySession',
            ],
            Condition: {
              ArnEquals: {
                'ecs:cluster': fargateCluster7Ccd5f93.attrArn,
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
      policyName: 'FargateClustercapacityInstanceRoleDefaultPolicy90B38927',
      roles: [
        fargateClustercapacityInstanceRoleBe253d2d.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateClustercapacityInstanceSecurityGroupCb3aeda1 = new ec2.CfnSecurityGroup(this, 'FargateClustercapacityInstanceSecurityGroupCB3AEDA1', {
      groupDescription: 'aws-ecs-integ/FargateCluster/capacity/InstanceSecurityGroup',
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
          description: 'from 0.0.0.0/0:32768-61000',
          fromPort: 32768,
          ipProtocol: 'tcp',
          toPort: 61000,
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookTopic390A0e34 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookTopic390A0e34' to be undefined. Fixit.`); }
    const fargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyAccddb70 = new iam.CfnPolicy(this, 'FargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyACCDDB70', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: fargateClustercapacityLifecycleHookDrainHookTopic390A0e34.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyACCDDB70',
      roles: [
        fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b.ref,
      ],
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'nginx',
          memory: 512,
          memoryReservation: 32,
          name: 'nginx',
          portMappings: [
            {
              containerPort: 80,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
        {
          environment: [
            {
              name: 'PORT',
              value: '81',
            },
          ],
          essential: true,
          image: 'nathanpeck/name',
          memory: 512,
          memoryReservation: 32,
          name: 'name',
          portMappings: [
            {
              containerPort: 81,
              hostPort: 0,
              protocol: 'tcp',
            },
          ],
        },
      ],
      family: 'awsecsintegTaskDef6FDFB69A',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcpubSubnet1RouteTableE0483fda = new ec2.CfnRouteTable(this, 'VpcpubSubnet1RouteTableE0483FDA', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/pubSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcpubSubnet1Subnet410C08cf = new ec2.CfnSubnet(this, 'VpcpubSubnet1Subnet410C08CF', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/24',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'pub',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/pubSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcpubSubnet2RouteTable5A29df40 = new ec2.CfnRouteTable(this, 'VpcpubSubnet2RouteTable5A29DF40', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/pubSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcpubSubnet2Subnet44A37a0d = new ec2.CfnSubnet(this, 'VpcpubSubnet2Subnet44A37A0D', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.1.0/24',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'pub',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'aws-ecs-integ/Vpc/pubSubnet2',
        },
      ],
    });

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClustercapacityInstanceProfile8294296C == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceProfile8294296C' to be undefined. Fixit.`); }
    if (fargateClustercapacityInstanceRoleBe253d2d == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceRoleBe253d2d' to be undefined. Fixit.`); }
    if (fargateClustercapacityInstanceRoleDefaultPolicy90B38927 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceRoleDefaultPolicy90B38927' to be undefined. Fixit.`); }
    if (fargateClustercapacityInstanceSecurityGroupCb3aeda1 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityInstanceSecurityGroupCb3aeda1' to be undefined. Fixit.`); }
    const fargateClustercapacityLaunchTemplateD01e44db = new ec2.CfnLaunchTemplate(this, 'FargateClustercapacityLaunchTemplateD01E44DB', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: fargateClustercapacityInstanceProfile8294296C.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceecsoptimizedamiamazonlinux2recommendedimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 't3.micro',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          fargateClustercapacityInstanceSecurityGroupCb3aeda1.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ/FargateCluster/capacity/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ/FargateCluster/capacity/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\necho ECS_CLUSTER=',
          fargateCluster7Ccd5f93.ref,
          ' >> /etc/ecs/ecs.config\nsudo iptables --insert FORWARD 1 --in-interface docker+ --destination 169.254.169.254/32 --jump DROP\nsudo service iptables save\necho ECS_AWSVPC_BLOCK_IMDS=true >> /etc/ecs/ecs.config',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ/FargateCluster/capacity/LaunchTemplate',
            },
          ],
        },
      ],
    });
    fargateClustercapacityLaunchTemplateD01e44db.addDependency(fargateClustercapacityInstanceRoleDefaultPolicy90B38927);
    fargateClustercapacityLaunchTemplateD01e44db.addDependency(fargateClustercapacityInstanceRoleBe253d2d);

    if (fargateClusterDefaultServiceDiscoveryNamespace04381E1e == null) { throw new Error(`A combination of conditions caused 'fargateClusterDefaultServiceDiscoveryNamespace04381E1e' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const serviceCloudmapService046058A4 = new servicediscovery.CfnService(this, 'ServiceCloudmapService046058A4', {
      dnsConfig: {
        dnsRecords: [
          {
            ttl: 60,
            type: 'SRV',
          },
        ],
        namespaceId: fargateClusterDefaultServiceDiscoveryNamespace04381E1e.attrId,
        routingPolicy: 'MULTIVALUE',
      },
      healthCheckCustomConfig: {
        failureThreshold: 1,
      },
      namespaceId: fargateClusterDefaultServiceDiscoveryNamespace04381E1e.attrId,
    });
    serviceCloudmapService046058A4.addDependency(taskDefTaskRole1Edb4a67);

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    if (vpcpubSubnet1RouteTableE0483fda == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet1RouteTableE0483fda' to be undefined. Fixit.`); }
    const vpcpubSubnet1DefaultRouteF020a9ef = new ec2.CfnRoute(this, 'VpcpubSubnet1DefaultRouteF020A9EF', {
      routeTableId: vpcpubSubnet1RouteTableE0483fda.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcpubSubnet1DefaultRouteF020a9ef.addDependency(vpcVpcgwbf912b6e);

    if (vpcpubSubnet1RouteTableE0483fda == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet1RouteTableE0483fda' to be undefined. Fixit.`); }
    if (vpcpubSubnet1Subnet410C08cf == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet1Subnet410C08cf' to be undefined. Fixit.`); }
    const vpcpubSubnet1RouteTableAssociation68036D8c = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcpubSubnet1RouteTableAssociation68036D8C', {
      routeTableId: vpcpubSubnet1RouteTableE0483fda.ref,
      subnetId: vpcpubSubnet1Subnet410C08cf.ref,
    });

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    if (vpcpubSubnet2RouteTable5A29df40 == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet2RouteTable5A29df40' to be undefined. Fixit.`); }
    const vpcpubSubnet2DefaultRouteE6d48ba4 = new ec2.CfnRoute(this, 'VpcpubSubnet2DefaultRouteE6D48BA4', {
      routeTableId: vpcpubSubnet2RouteTable5A29df40.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcpubSubnet2DefaultRouteE6d48ba4.addDependency(vpcVpcgwbf912b6e);

    if (vpcpubSubnet2RouteTable5A29df40 == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet2RouteTable5A29df40' to be undefined. Fixit.`); }
    if (vpcpubSubnet2Subnet44A37a0d == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet2Subnet44A37a0d' to be undefined. Fixit.`); }
    const vpcpubSubnet2RouteTableAssociationFb826925 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcpubSubnet2RouteTableAssociationFB826925', {
      routeTableId: vpcpubSubnet2RouteTable5A29df40.ref,
      subnetId: vpcpubSubnet2Subnet44A37a0d.ref,
    });

    if (fargateClustercapacityLaunchTemplateD01e44db == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLaunchTemplateD01e44db' to be undefined. Fixit.`); }
    if (vpcpubSubnet1Subnet410C08cf == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet1Subnet410C08cf' to be undefined. Fixit.`); }
    if (vpcpubSubnet2Subnet44A37a0d == null) { throw new Error(`A combination of conditions caused 'vpcpubSubnet2Subnet44A37a0d' to be undefined. Fixit.`); }
    const fargateClustercapacityAsge4034f96 = new autoscaling.CfnAutoScalingGroup(this, 'FargateClustercapacityASGE4034F96', {
      maxSize: '1',
      minSize: '1',
      desiredCapacity: '1',
      launchTemplate: {
        launchTemplateId: fargateClustercapacityLaunchTemplateD01e44db.ref,
        version: fargateClustercapacityLaunchTemplateD01e44db.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
      vpcZoneIdentifier: [
        vpcpubSubnet1Subnet410C08cf.ref,
        vpcpubSubnet2Subnet44A37a0d.ref,
      ],
    });
    fargateClustercapacityAsge4034f96.cfnOptions.updatePolicy = {
      AutoScalingReplacingUpdate: {
        WillReplace: true,
      },
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (serviceCloudmapService046058A4 == null) { throw new Error(`A combination of conditions caused 'serviceCloudmapService046058A4' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const serviceD69d759b = new ecs.CfnService(this, 'ServiceD69D759B', {
      cluster: fargateCluster7Ccd5f93.ref,
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
      desiredCount: 3,
      enableEcsManagedTags: false,
      launchType: 'EC2',
      schedulingStrategy: 'REPLICA',
      serviceRegistries: [
        {
          containerName: 'name',
          containerPort: 81,
          registryArn: serviceCloudmapService046058A4.attrArn,
        },
      ],
      taskDefinition: taskDef54694570.ref,
    });
    serviceD69d759b.addDependency(taskDefTaskRole1Edb4a67);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClustercapacityAsge4034f96 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityAsge4034f96' to be undefined. Fixit.`); }
    if (fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9' to be undefined. Fixit.`); }
    const fargateClustercapacityDrainEcsHookFunctionServiceRoleDefaultPolicy53Cd1145 = new iam.CfnPolicy(this, 'FargateClustercapacityDrainECSHookFunctionServiceRoleDefaultPolicy53CD1145', {
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
              fargateClustercapacityAsge4034f96.ref,
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
                'ecs:cluster': fargateCluster7Ccd5f93.attrArn,
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
            Resource: fargateCluster7Ccd5f93.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateClustercapacityDrainECSHookFunctionServiceRoleDefaultPolicy53CD1145',
      roles: [
        fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9.ref,
      ],
    });

    if (fargateClustercapacityAsge4034f96 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityAsge4034f96' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyAccddb70 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyAccddb70' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookTopic390A0e34 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookTopic390A0e34' to be undefined. Fixit.`); }
    const fargateClustercapacityLifecycleHookDrainHook8Aede53b = new autoscaling.CfnLifecycleHook(this, 'FargateClustercapacityLifecycleHookDrainHook8AEDE53B', {
      autoScalingGroupName: fargateClustercapacityAsge4034f96.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: fargateClustercapacityLifecycleHookDrainHookTopic390A0e34.ref,
      roleArn: fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b.attrArn,
    });
    fargateClustercapacityLifecycleHookDrainHook8Aede53b.addDependency(fargateClustercapacityLifecycleHookDrainHookRoleDefaultPolicyAccddb70);
    fargateClustercapacityLifecycleHookDrainHook8Aede53b.addDependency(fargateClustercapacityLifecycleHookDrainHookRoleDd26e39b);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9' to be undefined. Fixit.`); }
    if (fargateClustercapacityDrainEcsHookFunctionServiceRoleDefaultPolicy53Cd1145 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityDrainEcsHookFunctionServiceRoleDefaultPolicy53Cd1145' to be undefined. Fixit.`); }
    const fargateClustercapacityDrainEcsHookFunction3E60e6d0 = new lambda.CfnFunction(this, 'FargateClustercapacityDrainECSHookFunction3E60E6D0', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9.attrArn,
      environment: {
        variables: {
          CLUSTER: fargateCluster7Ccd5f93.ref,
        },
      },
      handler: 'index.lambda_handler',
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ/FargateCluster/capacity',
        },
      ],
      timeout: 310,
    });
    fargateClustercapacityDrainEcsHookFunction3E60e6d0.addDependency(fargateClustercapacityDrainEcsHookFunctionServiceRoleDefaultPolicy53Cd1145);
    fargateClustercapacityDrainEcsHookFunction3E60e6d0.addDependency(fargateClustercapacityDrainEcsHookFunctionServiceRoleA28505d9);

    if (fargateClustercapacityDrainEcsHookFunction3E60e6d0 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityDrainEcsHookFunction3E60e6d0' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookTopic390A0e34 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookTopic390A0e34' to be undefined. Fixit.`); }
    const fargateClustercapacityDrainEcsHookFunctionAllowInvokeawsecsintegFargateClustercapacityLifecycleHookDrainHookTopic07C1229f3b6ff246 = new lambda.CfnPermission(this, 'FargateClustercapacityDrainECSHookFunctionAllowInvokeawsecsintegFargateClustercapacityLifecycleHookDrainHookTopic07C1229F3B6FF246', {
      action: 'lambda:InvokeFunction',
      functionName: fargateClustercapacityDrainEcsHookFunction3E60e6d0.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: fargateClustercapacityLifecycleHookDrainHookTopic390A0e34.ref,
    });

    if (fargateClustercapacityDrainEcsHookFunction3E60e6d0 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityDrainEcsHookFunction3E60e6d0' to be undefined. Fixit.`); }
    if (fargateClustercapacityLifecycleHookDrainHookTopic390A0e34 == null) { throw new Error(`A combination of conditions caused 'fargateClustercapacityLifecycleHookDrainHookTopic390A0e34' to be undefined. Fixit.`); }
    const fargateClustercapacityDrainEcsHookFunctionTopic7D6c4884 = new sns.CfnSubscription(this, 'FargateClustercapacityDrainECSHookFunctionTopic7D6C4884', {
      protocol: 'lambda',
      topicArn: fargateClustercapacityLifecycleHookDrainHookTopic390A0e34.ref,
      endpoint: fargateClustercapacityDrainEcsHookFunction3E60e6d0.attrArn,
    });
  }
}

