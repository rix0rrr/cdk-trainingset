import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface BatchStackProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ami-amazon-linux-latest/amzn-ami-hvm-x86_64-gp2'
   */
  readonly ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class BatchStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: BatchStackProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/ami-amazon-linux-latest/amzn-ami-hvm-x86_64-gp2',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const allocationStrategySpotcapacityInstanceProfileRoleA6211395 = new iam.CfnRole(this, 'AllocationStrategySPOTCAPACITYInstanceProfileRoleA6211395', {
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
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const launchTemplateInstanceProfileRole037F2415 = new iam.CfnRole(this, 'LaunchTemplateInstanceProfileRole037F2415', {
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
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const spotEc2InstanceProfileRoleBa254130 = new iam.CfnRole(this, 'SpotEc2InstanceProfileRoleBA254130', {
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
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const spotFleetRole6D4f7558 = new iam.CfnRole(this, 'SpotFleetRole6D4F7558', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'batch.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const launchTemplateDee5742d = new ec2.CfnLaunchTemplate(this, 'launchTemplateDEE5742D', {
      launchTemplateData: {
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'batch-stack/launchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'batch-stack/launchTemplate',
              },
            ],
          },
        ],
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'batch-stack/launchTemplate',
            },
          ],
        },
      ],
    });

    const minimalPropsEc2InstanceProfileRole1B9873c1 = new iam.CfnRole(this, 'minimalPropsEc2InstanceProfileRole1B9873C1', {
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
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const placementGroupD973c950 = new ec2.CfnPlacementGroup(this, 'placementGroupD973C950', {
    });

    const taggedCeInstanceProfileRoleC239daf9 = new iam.CfnRole(this, 'taggedCEInstanceProfileRoleC239DAF9', {
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
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
      tags: [
        {
          key: 'foo',
          value: 'bar',
        },
        {
          key: 'super',
          value: 'salamander',
        },
      ],
    });

    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip9b3743b1 = new ec2.CfnEIP(this, 'vpcPublicSubnet2EIP9B3743B1', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet2',
        },
      ],
    });

    if (allocationStrategySpotcapacityInstanceProfileRoleA6211395 == null) { throw new Error(`A combination of conditions caused 'allocationStrategySpotcapacityInstanceProfileRoleA6211395' to be undefined. Fixit.`); }
    const allocationStrategySpotcapacityInstanceProfile0B71f375 = new iam.CfnInstanceProfile(this, 'AllocationStrategySPOTCAPACITYInstanceProfile0B71F375', {
      roles: [
        allocationStrategySpotcapacityInstanceProfileRoleA6211395.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const allocationStrategySpotcapacitySecurityGroupA581eb8c = new ec2.CfnSecurityGroup(this, 'AllocationStrategySPOTCAPACITYSecurityGroupA581EB8C', {
      groupDescription: 'batch-stack/AllocationStrategySPOT_CAPACITY/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (launchTemplateInstanceProfileRole037F2415 == null) { throw new Error(`A combination of conditions caused 'launchTemplateInstanceProfileRole037F2415' to be undefined. Fixit.`); }
    const launchTemplateInstanceProfile81A7ef12 = new iam.CfnInstanceProfile(this, 'LaunchTemplateInstanceProfile81A7EF12', {
      roles: [
        launchTemplateInstanceProfileRole037F2415.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const launchTemplateSecurityGroup02438453 = new ec2.CfnSecurityGroup(this, 'LaunchTemplateSecurityGroup02438453', {
      groupDescription: 'batch-stack/LaunchTemplate/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (spotEc2InstanceProfileRoleBa254130 == null) { throw new Error(`A combination of conditions caused 'spotEc2InstanceProfileRoleBa254130' to be undefined. Fixit.`); }
    const spotEc2InstanceProfileD921aba1 = new iam.CfnInstanceProfile(this, 'SpotEc2InstanceProfileD921ABA1', {
      roles: [
        spotEc2InstanceProfileRoleBa254130.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const spotEc2SecurityGroup1225E163 = new ec2.CfnSecurityGroup(this, 'SpotEc2SecurityGroup1225E163', {
      groupDescription: 'batch-stack/SpotEc2/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const maximalPropsFargateSecurityGroup94D64250 = new ec2.CfnSecurityGroup(this, 'maximalPropsFargateSecurityGroup94D64250', {
      groupDescription: 'batch-stack/maximalPropsFargate/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (minimalPropsEc2InstanceProfileRole1B9873c1 == null) { throw new Error(`A combination of conditions caused 'minimalPropsEc2InstanceProfileRole1B9873c1' to be undefined. Fixit.`); }
    const minimalPropsEc2InstanceProfile635Fb12d = new iam.CfnInstanceProfile(this, 'minimalPropsEc2InstanceProfile635FB12D', {
      roles: [
        minimalPropsEc2InstanceProfileRole1B9873c1.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const minimalPropsEc2SecurityGroup50Cbe4dc = new ec2.CfnSecurityGroup(this, 'minimalPropsEc2SecurityGroup50CBE4DC', {
      groupDescription: 'batch-stack/minimalPropsEc2/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const minimalPropsFargateSecurityGroupA8d5cdd1 = new ec2.CfnSecurityGroup(this, 'minimalPropsFargateSecurityGroupA8D5CDD1', {
      groupDescription: 'batch-stack/minimalPropsFargate/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (taggedCeInstanceProfileRoleC239daf9 == null) { throw new Error(`A combination of conditions caused 'taggedCeInstanceProfileRoleC239daf9' to be undefined. Fixit.`); }
    const taggedCeInstanceProfileB29f2197 = new iam.CfnInstanceProfile(this, 'taggedCEInstanceProfileB29F2197', {
      roles: [
        taggedCeInstanceProfileRoleC239daf9.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const taggedCeSecurityGroup82Ccf59f = new ec2.CfnSecurityGroup(this, 'taggedCESecurityGroup82CCF59F', {
      groupDescription: 'batch-stack/taggedCE/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      tags: [
        {
          key: 'foo',
          value: 'bar',
        },
        {
          key: 'super',
          value: 'salamander',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet934893E8 = new ec2.CfnSubnet(this, 'vpcPrivateSubnet1Subnet934893E8', {
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
          value: 'batch-stack/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet7031C2ba = new ec2.CfnSubnet(this, 'vpcPrivateSubnet2Subnet7031C2BA', {
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
          value: 'batch-stack/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet2E65531e = new ec2.CfnSubnet(this, 'vpcPublicSubnet1Subnet2E65531E', {
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
          value: 'batch-stack/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet009B674f = new ec2.CfnSubnet(this, 'vpcPublicSubnet2Subnet009B674F', {
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
          value: 'batch-stack/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    const vpcVpcgw7984c166 = new ec2.CfnVPCGatewayAttachment(this, 'vpcVPCGW7984C166', {
      internetGatewayId: vpcIgwe57cbdca.ref,
      vpcId: vpcA2121c38.ref,
    });

    if (allocationStrategySpotcapacityInstanceProfile0B71f375 == null) { throw new Error(`A combination of conditions caused 'allocationStrategySpotcapacityInstanceProfile0B71f375' to be undefined. Fixit.`); }
    if (allocationStrategySpotcapacitySecurityGroupA581eb8c == null) { throw new Error(`A combination of conditions caused 'allocationStrategySpotcapacitySecurityGroupA581eb8c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const allocationStrategySpotcapacityee4582c5 = new batch.CfnComputeEnvironment(this, 'AllocationStrategySPOTCAPACITYEE4582C5', {
      computeResources: {
        allocationStrategy: 'SPOT_CAPACITY_OPTIMIZED',
        bidPercentage: 95,
        ec2Configuration: [
          {
            imageIdOverride: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
            imageType: 'ECS_AL2',
          },
        ],
        instanceRole: allocationStrategySpotcapacityInstanceProfile0B71f375.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          allocationStrategySpotcapacitySecurityGroupA581eb8c.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'SPOT',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (launchTemplateInstanceProfile81A7ef12 == null) { throw new Error(`A combination of conditions caused 'launchTemplateInstanceProfile81A7ef12' to be undefined. Fixit.`); }
    if (launchTemplateSecurityGroup02438453 == null) { throw new Error(`A combination of conditions caused 'launchTemplateSecurityGroup02438453' to be undefined. Fixit.`); }
    if (launchTemplateDee5742d == null) { throw new Error(`A combination of conditions caused 'launchTemplateDee5742d' to be undefined. Fixit.`); }
    if (placementGroupD973c950 == null) { throw new Error(`A combination of conditions caused 'placementGroupD973c950' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const launchTemplate04Ec5460 = new batch.CfnComputeEnvironment(this, 'LaunchTemplate04EC5460', {
      computeResources: {
        allocationStrategy: 'BEST_FIT',
        ec2Configuration: [
          {
            imageIdOverride: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
            imageType: 'ECS_AL2',
          },
        ],
        instanceRole: launchTemplateInstanceProfile81A7ef12.attrArn,
        instanceTypes: [
          'optimal',
        ],
        launchTemplate: {
          launchTemplateId: launchTemplateDee5742d.ref,
        },
        maxvCpus: 512,
        minvCpus: 256,
        placementGroup: placementGroupD973c950.attrGroupName,
        securityGroupIds: [
          launchTemplateSecurityGroup02438453.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'EC2',
      },
      replaceComputeEnvironment: true,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
        jobExecutionTimeoutMinutes: 60,
        terminateJobsOnUpdate: false,
      },
    });

    if (spotEc2InstanceProfileD921aba1 == null) { throw new Error(`A combination of conditions caused 'spotEc2InstanceProfileD921aba1' to be undefined. Fixit.`); }
    if (spotEc2SecurityGroup1225E163 == null) { throw new Error(`A combination of conditions caused 'spotEc2SecurityGroup1225E163' to be undefined. Fixit.`); }
    if (spotFleetRole6D4f7558 == null) { throw new Error(`A combination of conditions caused 'spotFleetRole6D4f7558' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const spotEc2A0470c83 = new batch.CfnComputeEnvironment(this, 'SpotEc2A0470C83', {
      computeResources: {
        allocationStrategy: 'SPOT_PRICE_CAPACITY_OPTIMIZED',
        bidPercentage: 95,
        ec2Configuration: [
          {
            imageIdOverride: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
            imageType: 'ECS_AL2',
          },
        ],
        instanceRole: spotEc2InstanceProfileD921aba1.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          spotEc2SecurityGroup1225E163.attrGroupId,
        ],
        spotIamFleetRole: spotFleetRole6D4f7558.attrArn,
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'SPOT',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (maximalPropsFargateSecurityGroup94D64250 == null) { throw new Error(`A combination of conditions caused 'maximalPropsFargateSecurityGroup94D64250' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const maximalPropsFargate2D7d8138 = new batch.CfnComputeEnvironment(this, 'maximalPropsFargate2D7D8138', {
      computeEnvironmentName: 'maxPropsFargateCE',
      computeResources: {
        maxvCpus: 512,
        securityGroupIds: [
          maximalPropsFargateSecurityGroup94D64250.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'FARGATE_SPOT',
        updateToLatestImageVersion: false,
      },
      replaceComputeEnvironment: true,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
        jobExecutionTimeoutMinutes: 30,
        terminateJobsOnUpdate: true,
      },
    });

    if (minimalPropsEc2InstanceProfile635Fb12d == null) { throw new Error(`A combination of conditions caused 'minimalPropsEc2InstanceProfile635Fb12d' to be undefined. Fixit.`); }
    if (minimalPropsEc2SecurityGroup50Cbe4dc == null) { throw new Error(`A combination of conditions caused 'minimalPropsEc2SecurityGroup50Cbe4dc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const minimalPropsEc200Aecc55 = new batch.CfnComputeEnvironment(this, 'minimalPropsEc200AECC55', {
      computeResources: {
        allocationStrategy: 'BEST_FIT_PROGRESSIVE',
        ec2Configuration: [
          {
            imageIdOverride: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
            imageType: 'ECS_AL2',
          },
        ],
        instanceRole: minimalPropsEc2InstanceProfile635Fb12d.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          minimalPropsEc2SecurityGroup50Cbe4dc.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'EC2',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (minimalPropsFargateSecurityGroupA8d5cdd1 == null) { throw new Error(`A combination of conditions caused 'minimalPropsFargateSecurityGroupA8d5cdd1' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const minimalPropsFargate58449235 = new batch.CfnComputeEnvironment(this, 'minimalPropsFargate58449235', {
      computeResources: {
        maxvCpus: 512,
        securityGroupIds: [
          minimalPropsFargateSecurityGroupA8d5cdd1.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'FARGATE',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (taggedCeInstanceProfileB29f2197 == null) { throw new Error(`A combination of conditions caused 'taggedCeInstanceProfileB29f2197' to be undefined. Fixit.`); }
    if (taggedCeSecurityGroup82Ccf59f == null) { throw new Error(`A combination of conditions caused 'taggedCeSecurityGroup82Ccf59f' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const taggedCe5029e6f8 = new batch.CfnComputeEnvironment(this, 'taggedCE5029E6F8', {
      computeResources: {
        allocationStrategy: 'BEST_FIT_PROGRESSIVE',
        ec2Configuration: [
          {
            imageIdOverride: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
            imageType: 'ECS_AL2',
          },
        ],
        instanceRole: taggedCeInstanceProfileB29f2197.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          taggedCeSecurityGroup82Ccf59f.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        tags: {
          foo: 'bar',
          super: 'salamander',
        },
        type: 'EC2',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      tags: {
        foo: 'bar',
        super: 'salamander',
      },
      type: 'managed',
      updatePolicy: {
      },
    });

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation67945127 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet1RouteTableAssociation67945127', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      subnetId: vpcPrivateSubnet1Subnet934893E8.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation007E94d3 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet2RouteTableAssociation007E94D3', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      subnetId: vpcPrivateSubnet2Subnet7031C2ba.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute10708846 = new ec2.CfnRoute(this, 'vpcPublicSubnet1DefaultRoute10708846', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
    });
    vpcPublicSubnet1DefaultRoute10708846.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation5D3f4579 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet1RouteTableAssociation5D3F4579', {
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteA1ec0f60 = new ec2.CfnRoute(this, 'vpcPublicSubnet2DefaultRouteA1EC0F60', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
    });
    vpcPublicSubnet2DefaultRouteA1ec0f60.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation21F81b59 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet2RouteTableAssociation21F81B59', {
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
    });

    if (vpcPublicSubnet1DefaultRoute10708846 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute10708846' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipda49dcbe == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipda49dcbe' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation5D3f4579 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation5D3f4579' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway9C16659e = new ec2.CfnNatGateway(this, 'vpcPublicSubnet1NATGateway9C16659E', {
      allocationId: vpcPublicSubnet1Eipda49dcbe.attrAllocationId,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1DefaultRoute10708846);
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1RouteTableAssociation5D3f4579);

    if (vpcPublicSubnet2DefaultRouteA1ec0f60 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteA1ec0f60' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip9b3743b1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip9b3743b1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation21F81b59 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation21F81b59' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9B8ae11a = new ec2.CfnNatGateway(this, 'vpcPublicSubnet2NATGateway9B8AE11A', {
      allocationId: vpcPublicSubnet2Eip9b3743b1.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
      tags: [
        {
          key: 'Name',
          value: 'batch-stack/vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2DefaultRouteA1ec0f60);
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2RouteTableAssociation21F81b59);

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRoute1Aa8e2e5 = new ec2.CfnRoute(this, 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9B8ae11a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9B8ae11a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteB0e07f99 = new ec2.CfnRoute(this, 'vpcPrivateSubnet2DefaultRouteB0E07F99', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9B8ae11a.ref,
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
    });
  }
}

