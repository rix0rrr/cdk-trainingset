import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-ecs-integ-bottlerocket-nvidia-amiProps extends cdk.StackProps {
  /**
   * @default '/aws/service/bottlerocket/aws-ecs-2-nvidia/x86_64/latest/image_id'
   */
  readonly ssmParameterValueawsservicebottlerocketawsecs2nvidiax8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-bottlerocket-nvidia-ami extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-bottlerocket-nvidia-amiProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsservicebottlerocketawsecs2nvidiax8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsservicebottlerocketawsecs2nvidiax8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsservicebottlerocketawsecs2nvidiax8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/bottlerocket/aws-ecs-2-nvidia/x86_64/latest/image_id',
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

    const clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3 = new iam.CfnRole(this, 'ClusterbottlerocketasgDrainECSHookFunctionServiceRole91B0C3B3', {
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
    });

    const clusterbottlerocketasgInstanceRoleD105aca5 = new iam.CfnRole(this, 'ClusterbottlerocketasgInstanceRoleD105ACA5', {
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
    });

    const clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11 = new iam.CfnRole(this, 'ClusterbottlerocketasgLifecycleHookDrainHookRole9E2A1D11', {
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
    });

    const clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02 = new sns.CfnTopic(this, 'ClusterbottlerocketasgLifecycleHookDrainHookTopic34DF3A02', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet2',
        },
      ],
    });

    if (clusterbottlerocketasgInstanceRoleD105aca5 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceRoleD105aca5' to be undefined. Fixit.`); }
    const clusterbottlerocketasgInstanceProfile424C4ac3 = new iam.CfnInstanceProfile(this, 'ClusterbottlerocketasgInstanceProfile424C4AC3', {
      roles: [
        clusterbottlerocketasgInstanceRoleD105aca5.ref,
      ],
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgInstanceRoleD105aca5 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceRoleD105aca5' to be undefined. Fixit.`); }
    const clusterbottlerocketasgInstanceRoleDefaultPolicyBb6119dc = new iam.CfnPolicy(this, 'ClusterbottlerocketasgInstanceRoleDefaultPolicyBB6119DC', {
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
      policyName: 'ClusterbottlerocketasgInstanceRoleDefaultPolicyBB6119DC',
      roles: [
        clusterbottlerocketasgInstanceRoleD105aca5.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const clusterbottlerocketasgInstanceSecurityGroupE1eaef75 = new ec2.CfnSecurityGroup(this, 'ClusterbottlerocketasgInstanceSecurityGroupE1EAEF75', {
      groupDescription: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg/InstanceSecurityGroup',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02' to be undefined. Fixit.`); }
    const clusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98dd9a = new iam.CfnPolicy(this, 'ClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98DD9A', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ClusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98DD9A',
      roles: [
        clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet2',
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

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgInstanceProfile424C4ac3 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceProfile424C4ac3' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgInstanceRoleD105aca5 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceRoleD105aca5' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgInstanceRoleDefaultPolicyBb6119dc == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceRoleDefaultPolicyBb6119dc' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgInstanceSecurityGroupE1eaef75 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgInstanceSecurityGroupE1eaef75' to be undefined. Fixit.`); }
    const clusterbottlerocketasgLaunchTemplate45A2fa5c = new ec2.CfnLaunchTemplate(this, 'ClusterbottlerocketasgLaunchTemplate45A2FA5C', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: clusterbottlerocketasgInstanceProfile424C4ac3.attrArn,
        },
        imageId: props.ssmParameterValueawsservicebottlerocketawsecs2nvidiax8664latestimageidC96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 'g3s.xlarge',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          clusterbottlerocketasgInstanceSecurityGroupE1eaef75.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '\n[settings.ecs]\ncluster = \"',
          clusterEb0386a7.ref,
          '\"',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg/LaunchTemplate',
            },
          ],
        },
      ],
    });
    clusterbottlerocketasgLaunchTemplate45A2fa5c.addDependency(clusterbottlerocketasgInstanceRoleDefaultPolicyBb6119dc);
    clusterbottlerocketasgLaunchTemplate45A2fa5c.addDependency(clusterbottlerocketasgInstanceRoleD105aca5);

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

    if (clusterbottlerocketasgLaunchTemplate45A2fa5c == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLaunchTemplate45A2fa5c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterbottlerocketasgAsg5424825a = new autoscaling.CfnAutoScalingGroup(this, 'ClusterbottlerocketasgASG5424825A', {
      launchTemplate: {
        launchTemplateId: clusterbottlerocketasgLaunchTemplate45A2fa5c.ref,
        version: clusterbottlerocketasgLaunchTemplate45A2fa5c.attrLatestVersionNumber,
      },
      maxSize: '1',
      minSize: '0',
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });
    clusterbottlerocketasgAsg5424825a.cfnOptions.updatePolicy = {
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgAsg5424825a == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgAsg5424825a' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3' to be undefined. Fixit.`); }
    const clusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyBd9c646c = new iam.CfnPolicy(this, 'ClusterbottlerocketasgDrainECSHookFunctionServiceRoleDefaultPolicyBD9C646C', {
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
              clusterbottlerocketasgAsg5424825a.ref,
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
      policyName: 'ClusterbottlerocketasgDrainECSHookFunctionServiceRoleDefaultPolicyBD9C646C',
      roles: [
        clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3.ref,
      ],
    });

    if (clusterbottlerocketasgAsg5424825a == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgAsg5424825a' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98dd9a == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98dd9a' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02' to be undefined. Fixit.`); }
    const clusterbottlerocketasgLifecycleHookDrainHook00055B9d = new autoscaling.CfnLifecycleHook(this, 'ClusterbottlerocketasgLifecycleHookDrainHook00055B9D', {
      autoScalingGroupName: clusterbottlerocketasgAsg5424825a.ref,
      defaultResult: 'CONTINUE',
      heartbeatTimeout: 300,
      lifecycleTransition: 'autoscaling:EC2_INSTANCE_TERMINATING',
      notificationTargetArn: clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02.ref,
      roleArn: clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11.attrArn,
    });
    clusterbottlerocketasgLifecycleHookDrainHook00055B9d.addDependency(clusterbottlerocketasgLifecycleHookDrainHookRoleDefaultPolicy2C98dd9a);
    clusterbottlerocketasgLifecycleHookDrainHook00055B9d.addDependency(clusterbottlerocketasgLifecycleHookDrainHookRole9E2a1d11);

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

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyBd9c646c == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyBd9c646c' to be undefined. Fixit.`); }
    const clusterbottlerocketasgDrainEcsHookFunctionFea27227 = new lambda.CfnFunction(this, 'ClusterbottlerocketasgDrainECSHookFunctionFEA27227', {
      code: {
        zipFile: 'import boto3, json, os, time\n\necs = boto3.client(\'ecs\')\nautoscaling = boto3.client(\'autoscaling\')\n\n\ndef lambda_handler(event, context):\n  print(json.dumps(dict(event, ResponseURL=\'...\')))\n  cluster = os.environ[\'CLUSTER\']\n  snsTopicArn = event[\'Records\'][0][\'Sns\'][\'TopicArn\']\n  lifecycle_event = json.loads(event[\'Records\'][0][\'Sns\'][\'Message\'])\n  instance_id = lifecycle_event.get(\'EC2InstanceId\')\n  if not instance_id:\n    print(\'Got event without EC2InstanceId: %s\', json.dumps(dict(event, ResponseURL=\'...\')))\n    return\n\n  instance_arn = container_instance_arn(cluster, instance_id)\n  print(\'Instance %s has container instance ARN %s\' % (lifecycle_event[\'EC2InstanceId\'], instance_arn))\n\n  if not instance_arn:\n    return\n\n  task_arns = container_instance_task_arns(cluster, instance_arn)\n\n  if task_arns:\n    print(\'Instance ARN %s has task ARNs %s\' % (instance_arn, \', \'.join(task_arns)))\n\n  while has_tasks(cluster, instance_arn, task_arns):\n    time.sleep(10)\n\n  try:\n    print(\'Terminating instance %s\' % instance_id)\n    autoscaling.complete_lifecycle_action(\n        LifecycleActionResult=\'CONTINUE\',\n        **pick(lifecycle_event, \'LifecycleHookName\', \'LifecycleActionToken\', \'AutoScalingGroupName\'))\n  except Exception as e:\n    # Lifecycle action may have already completed.\n    print(str(e))\n\n\ndef container_instance_arn(cluster, instance_id):\n  \"\"\"Turn an instance ID into a container instance ARN.\"\"\"\n  arns = ecs.list_container_instances(cluster=cluster, filter=\'ec2InstanceId==\' + instance_id)[\'containerInstanceArns\']\n  if not arns:\n    return None\n  return arns[0]\n\ndef container_instance_task_arns(cluster, instance_arn):\n  \"\"\"Fetch tasks for a container instance ARN.\"\"\"\n  arns = ecs.list_tasks(cluster=cluster, containerInstance=instance_arn)[\'taskArns\']\n  return arns\n\ndef has_tasks(cluster, instance_arn, task_arns):\n  \"\"\"Return True if the instance is running tasks for the given cluster.\"\"\"\n  instances = ecs.describe_container_instances(cluster=cluster, containerInstances=[instance_arn])[\'containerInstances\']\n  if not instances:\n    return False\n  instance = instances[0]\n\n  if instance[\'status\'] == \'ACTIVE\':\n    # Start draining, then try again later\n    set_container_instance_to_draining(cluster, instance_arn)\n    return True\n\n  task_count = None\n\n  if task_arns:\n    # Fetch details for tasks running on the container instance\n    tasks = ecs.describe_tasks(cluster=cluster, tasks=task_arns)[\'tasks\']\n    if tasks:\n      # Consider any non-stopped tasks as running\n      task_count = sum(task[\'lastStatus\'] != \'STOPPED\' for task in tasks) + instance[\'pendingTasksCount\']\n\n  if not task_count:\n    # Fallback to instance task counts if detailed task information is unavailable\n    task_count = instance[\'runningTasksCount\'] + instance[\'pendingTasksCount\']\n\n  print(\'Instance %s has %s tasks\' % (instance_arn, task_count))\n\n  return task_count > 0\n\ndef set_container_instance_to_draining(cluster, instance_arn):\n  ecs.update_container_instances_state(\n      cluster=cluster,\n      containerInstances=[instance_arn], status=\'DRAINING\')\n\n\ndef pick(dct, *keys):\n  \"\"\"Pick a subset of a dict.\"\"\"\n  return {k: v for k, v in dct.items() if k in keys}\n',
      },
      environment: {
        variables: {
          CLUSTER: clusterEb0386a7.ref,
        },
      },
      handler: 'index.lambda_handler',
      role: clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3.attrArn,
      runtime: 'python3.9',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-bottlerocket-nvidia-ami/Cluster/bottlerocket-asg',
        },
      ],
      timeout: 310,
    });
    clusterbottlerocketasgDrainEcsHookFunctionFea27227.addDependency(clusterbottlerocketasgDrainEcsHookFunctionServiceRoleDefaultPolicyBd9c646c);
    clusterbottlerocketasgDrainEcsHookFunctionFea27227.addDependency(clusterbottlerocketasgDrainEcsHookFunctionServiceRole91B0c3b3);

    if (clusterbottlerocketasgDrainEcsHookFunctionFea27227 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgDrainEcsHookFunctionFea27227' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02' to be undefined. Fixit.`); }
    const clusterbottlerocketasgDrainEcsHookFunctionAllowInvokeawsecsintegbottlerocketnvidiaamiClusterbottlerocketasgLifecycleHookDrainHookTopic46897984C264a0a5 = new lambda.CfnPermission(this, 'ClusterbottlerocketasgDrainECSHookFunctionAllowInvokeawsecsintegbottlerocketnvidiaamiClusterbottlerocketasgLifecycleHookDrainHookTopic46897984C264A0A5', {
      action: 'lambda:InvokeFunction',
      functionName: clusterbottlerocketasgDrainEcsHookFunctionFea27227.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02.ref,
    });

    if (clusterbottlerocketasgDrainEcsHookFunctionFea27227 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgDrainEcsHookFunctionFea27227' to be undefined. Fixit.`); }
    if (clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02 == null) { throw new Error(`A combination of conditions caused 'clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02' to be undefined. Fixit.`); }
    const clusterbottlerocketasgDrainEcsHookFunctionTopicC875173c = new sns.CfnSubscription(this, 'ClusterbottlerocketasgDrainECSHookFunctionTopicC875173C', {
      endpoint: clusterbottlerocketasgDrainEcsHookFunctionFea27227.attrArn,
      protocol: 'lambda',
      topicArn: clusterbottlerocketasgLifecycleHookDrainHookTopic34Df3a02.ref,
    });
  }
}

