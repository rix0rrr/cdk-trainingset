import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsEcsIntegBottlerocketProps extends cdk.StackProps {
  /**
   * @default '/aws/service/bottlerocket/aws-ecs-1/x86_64/latest/image_id'
   */
  readonly ssmParameterValueawsservicebottlerocketawsecs1x8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegBottlerocket extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegBottlerocketProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsservicebottlerocketawsecs1x8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsservicebottlerocketawsecs1x8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsservicebottlerocketawsecs1x8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/bottlerocket/aws-ecs-1/x86_64/latest/image_id',
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

    const ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab = new iam.CfnRole(this, 'EcsClusterbottlerocketasgDrainECSHookFunctionServiceRole2F16AFAB', {
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
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
    });

    const ecsClusterbottlerocketasgInstanceRole96Aa2acf = new iam.CfnRole(this, 'EcsClusterbottlerocketasgInstanceRole96AA2ACF', {
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
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSSMManagedInstanceCore',
        ].join(''),
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
    });

    const ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb = new iam.CfnRole(this, 'EcsClusterbottlerocketasgLifecycleHookDrainHookRoleDE4D94EB', {
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
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
    });

    const ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74 = new sns.CfnTopic(this, 'EcsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
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
          value: 'aws-ecs-integ-bottlerocket/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsClusterbottlerocketasgInstanceRole96Aa2acf == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceRole96Aa2acf' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgInstanceProfile22A89b9d = new iam.CfnInstanceProfile(this, 'EcsClusterbottlerocketasgInstanceProfile22A89B9D', {
      roles: [
        ecsClusterbottlerocketasgInstanceRole96Aa2acf.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgInstanceRole96Aa2acf == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceRole96Aa2acf' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598 = new iam.CfnPolicy(this, 'EcsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598', {
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
      policyName: 'EcsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598',
      roles: [
        ecsClusterbottlerocketasgInstanceRole96Aa2acf.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgInstanceSecurityGroupD754bc23 = new ec2.CfnSecurityGroup(this, 'EcsClusterbottlerocketasgInstanceSecurityGroupD754BC23', {
      groupDescription: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06edb = new iam.CfnPolicy(this, 'EcsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06EDB', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06EDB',
      roles: [
        ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-bottlerocket/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-bottlerocket/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet2',
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
    if (ecsClusterbottlerocketasgInstanceProfile22A89b9d == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceProfile22A89b9d' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgInstanceRole96Aa2acf == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceRole96Aa2acf' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgInstanceSecurityGroupD754bc23 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgInstanceSecurityGroupD754bc23' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgLaunchTemplateE141adc4 = new ec2.CfnLaunchTemplate(this, 'EcsClusterbottlerocketasgLaunchTemplateE141ADC4', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: ecsClusterbottlerocketasgInstanceProfile22A89b9d.attrArn,
        },
        imageId: props.ssmParameterValueawsservicebottlerocketawsecs1x8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 'c5.large',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          ecsClusterbottlerocketasgInstanceSecurityGroupD754bc23.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '\n[settings.ecs]\ncluster = \"',
          ecsCluster97242B84.ref,
          '\"',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg/LaunchTemplate',
            },
          ],
        },
      ],
    });
    ecsClusterbottlerocketasgLaunchTemplateE141adc4.addDependency(ecsClusterbottlerocketasgInstanceRoleDefaultPolicy8523C598);
    ecsClusterbottlerocketasgLaunchTemplateE141adc4.addDependency(ecsClusterbottlerocketasgInstanceRole96Aa2acf);

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

    if (ecsClusterbottlerocketasgLaunchTemplateE141adc4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLaunchTemplateE141adc4' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgAsgcb222a6e = new autoscaling.CfnAutoScalingGroup(this, 'EcsClusterbottlerocketasgASGCB222A6E', {
      maxSize: '2',
      minSize: '2',
      launchTemplate: {
        launchTemplateId: ecsClusterbottlerocketasgLaunchTemplateE141adc4.ref,
        version: ecsClusterbottlerocketasgLaunchTemplateE141adc4.attrLatestVersionNumber,
      },
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    ecsClusterbottlerocketasgAsgcb222a6e.cfnOptions.updatePolicy = {
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
          value: 'aws-ecs-integ-bottlerocket/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgAsgcb222a6e == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgAsgcb222a6e' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyD5fbb46e = new iam.CfnPolicy(this, 'EcsClusterbottlerocketasgDrainECSHookFunctionServiceRoleDefaultPolicyD5FBB46E', {
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
              ecsClusterbottlerocketasgAsgcb222a6e.ref,
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
      policyName: 'EcsClusterbottlerocketasgDrainECSHookFunctionServiceRoleDefaultPolicyD5FBB46E',
      roles: [
        ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab.ref,
      ],
    });

    if (ecsClusterbottlerocketasgAsgcb222a6e == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgAsgcb222a6e' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06edb == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06edb' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgLifecycleHookDrainHook59C31812 = new autoscaling.CfnLifecycleHook(this, 'EcsClusterbottlerocketasgLifecycleHookDrainHook59C31812', {
      autoScalingGroupName: ecsClusterbottlerocketasgAsgcb222a6e.ref,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      notificationTargetArn: ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74.ref,
      roleArn: ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb.attrArn,
    });
    ecsClusterbottlerocketasgLifecycleHookDrainHook59C31812.addDependency(ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy95E06edb);
    ecsClusterbottlerocketasgLifecycleHookDrainHook59C31812.addDependency(ecsClusterbottlerocketasgLifecycleHookDrainHookRoleDe4d94eb);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyD5fbb46e == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyD5fbb46e' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4 = new lambda.CfnFunction(this, 'EcsClusterbottlerocketasgDrainECSHookFunction7A8CD0E4', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      role: ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab.attrArn,
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
          value: 'aws-ecs-integ-bottlerocket/EcsCluster/bottlerocket-asg',
        },
      ],
      timeout: 310,
    });
    ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4.addDependency(ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyD5fbb46e);
    ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4.addDependency(ecsClusterbottlerocketasgDrainEcsHookFunctionServiceRole2F16afab);

    if (ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgDrainEcsHookFunctionAllowInvokeawsecsintegbottlerocketEcsClusterbottlerocketasgLifecycleHookDrainHookTopicD05837a873ebb93d = new lambda.CfnPermission(this, 'EcsClusterbottlerocketasgDrainECSHookFunctionAllowInvokeawsecsintegbottlerocketEcsClusterbottlerocketasgLifecycleHookDrainHookTopicD05837A873EBB93D', {
      action: 'lambda:InvokeFunction',
      functionName: ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74.ref,
    });

    if (ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4' to be undefined. Fixit.`); }
    if (ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74 == null) { throw new Error(`A combination of conditions caused 'ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74' to be undefined. Fixit.`); }
    const ecsClusterbottlerocketasgDrainEcsHookFunctionTopic1953D6f0 = new sns.CfnSubscription(this, 'EcsClusterbottlerocketasgDrainECSHookFunctionTopic1953D6F0', {
      protocol: 'lambda',
      topicArn: ecsClusterbottlerocketasgLifecycleHookDrainHookTopic64509A74.ref,
      endpoint: ecsClusterbottlerocketasgDrainEcsHookFunction7A8cd0e4.attrArn,
    });
  }
}

