import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface PipelineStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class PipelineStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: PipelineStackProps = {}) {
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
    const pipelineArtifactsBucketAea9a052 = new s3.CfnBucket(this, 'PipelineArtifactsBucketAEA9A052', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
      publicAccessBlockConfiguration: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      },
    });
    pipelineArtifactsBucketAea9a052.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const pipelineAssetsFileRole59943A77 = new iam.CfnRole(this, 'PipelineAssetsFileRole59943A77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
              Service: 'codebuild.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const pipelineBuildSynthCdkBuildProjectRole231Eea2a = new iam.CfnRole(this, 'PipelineBuildSynthCdkBuildProjectRole231EEA2A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codebuild.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const pipelineRoleB27faa37 = new iam.CfnRole(this, 'PipelineRoleB27FAA37', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codepipeline.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const pipelineUpdatePipelineSelfMutationRole57E559e8 = new iam.CfnRole(this, 'PipelineUpdatePipelineSelfMutationRole57E559E8', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codebuild.amazonaws.com',
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
          value: 'PipelineStack/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc/PublicSubnet2',
        },
      ],
    });

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketPolicyF53ccc52 = new s3.CfnBucketPolicy(this, 'PipelineArtifactsBucketPolicyF53CCC52', {
      bucket: pipelineArtifactsBucketAea9a052.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:*',
            Condition: {
              Bool: {
                'aws:SecureTransport': 'false',
              },
            },
            Effect: 'Deny',
            Principal: {
              AWS: '*',
            },
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
            },
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (pipelineAssetsFileRole59943A77 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileRole59943A77' to be undefined. Fixit.`); }
    const pipelineAssetsFileAsset1PolicyDocument4681543E = new iam.CfnPolicy(this, 'PipelineAssetsFileAsset1PolicyDocument4681543E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ec2:CreateNetworkInterface',
              'ec2:DeleteNetworkInterface',
              'ec2:DescribeDhcpOptions',
              'ec2:DescribeNetworkInterfaces',
              'ec2:DescribeSecurityGroups',
              'ec2:DescribeSubnets',
              'ec2:DescribeVpcs',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineAssetsFileAsset1PolicyDocument4681543E',
      roles: [
        pipelineAssetsFileRole59943A77.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const pipelineAssetsFileAsset1SecurityGroupF04f1ad4 = new ec2.CfnSecurityGroup(this, 'PipelineAssetsFileAsset1SecurityGroupF04F1AD4', {
      groupDescription: 'Automatic generated security group for CodeBuild PipelineStackPipelineAssetsFileAsset10191BEFB',
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
    const pipelineAssetsFileAsset2SecurityGroupA400c1a5 = new ec2.CfnSecurityGroup(this, 'PipelineAssetsFileAsset2SecurityGroupA400C1A5', {
      groupDescription: 'Automatic generated security group for CodeBuild PipelineStackPipelineAssetsFileAsset24DB856A2',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProjectPolicyDocument4D16371a = new iam.CfnPolicy(this, 'PipelineBuildSynthCdkBuildProjectPolicyDocument4D16371A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ec2:CreateNetworkInterface',
              'ec2:DeleteNetworkInterface',
              'ec2:DescribeDhcpOptions',
              'ec2:DescribeNetworkInterfaces',
              'ec2:DescribeSecurityGroups',
              'ec2:DescribeSubnets',
              'ec2:DescribeVpcs',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildSynthCdkBuildProjectPolicyDocument4D16371A',
      roles: [
        pipelineBuildSynthCdkBuildProjectRole231Eea2a.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProjectSecurityGroup84F92459 = new ec2.CfnSecurityGroup(this, 'PipelineBuildSynthCdkBuildProjectSecurityGroup84F92459', {
      groupDescription: 'Automatic generated security group for CodeBuild PipelineStackPipelineBuildSynthCdkBuildProject225CEB2C',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    const pipelineCodeBuildActionRole226Db0cb = new iam.CfnRole(this, 'PipelineCodeBuildActionRole226DB0CB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: pipelineRoleB27faa37.attrArn,
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (pipelineUpdatePipelineSelfMutationRole57E559e8 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationRole57E559e8' to be undefined. Fixit.`); }
    const pipelineUpdatePipelineSelfMutationPolicyDocumentD327dc74 = new iam.CfnPolicy(this, 'PipelineUpdatePipelineSelfMutationPolicyDocumentD327DC74', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ec2:CreateNetworkInterface',
              'ec2:DeleteNetworkInterface',
              'ec2:DescribeDhcpOptions',
              'ec2:DescribeNetworkInterfaces',
              'ec2:DescribeSecurityGroups',
              'ec2:DescribeSubnets',
              'ec2:DescribeVpcs',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineUpdatePipelineSelfMutationPolicyDocumentD327DC74',
      roles: [
        pipelineUpdatePipelineSelfMutationRole57E559e8.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const pipelineUpdatePipelineSelfMutationSecurityGroup94164Edc = new ec2.CfnSecurityGroup(this, 'PipelineUpdatePipelineSelfMutationSecurityGroup94164EDC', {
      groupDescription: 'Automatic generated security group for CodeBuild PipelineStackPipelineUpdatePipelineSelfMutationE51045FC',
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
          value: 'PipelineStack/Vpc/PrivateSubnet1',
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
          value: 'PipelineStack/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc/PrivateSubnet2',
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
          value: 'PipelineStack/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc/PublicSubnet1',
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
          value: 'PipelineStack/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'PipelineStack/Vpc/PublicSubnet2',
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
          value: 'PipelineStack/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (pipelineAssetsFileAsset1PolicyDocument4681543E == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset1PolicyDocument4681543E' to be undefined. Fixit.`); }
    if (pipelineAssetsFileAsset1SecurityGroupF04f1ad4 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset1SecurityGroupF04f1ad4' to be undefined. Fixit.`); }
    if (pipelineAssetsFileRole59943A77 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileRole59943A77' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineAssetsFileAsset185A67cb4 = new codebuild.CfnProject(this, 'PipelineAssetsFileAsset185A67CB4', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: pipelineAssetsFileRole59943A77.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": [\n        \"npm install -g cdk-assets@2\"\n      ]\n    },\n    \"build\": {\n      \"commands\": [\n        \"cdk-assets --path \\\"assembly-PipelineStack-Beta/PipelineStackBetaStack1E6541489.assets.json\\\" --verbose publish \\\"8289faf53c7da377bb2b90615999171adef5e1d8f6b88810e5fef75e6ca09ba5:current_account-current_region\\\"\"\n      ]\n    }\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      description: 'Pipeline step PipelineStack/Pipeline/Assets/FileAsset1',
      encryptionKey: 'alias/aws/s3',
      vpcConfig: {
        securityGroupIds: [
          pipelineAssetsFileAsset1SecurityGroupF04f1ad4.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        vpcId: vpc8378Eb38.ref,
      },
    });
    pipelineAssetsFileAsset185A67cb4.addDependency(pipelineAssetsFileAsset1PolicyDocument4681543E);

    if (pipelineAssetsFileAsset1PolicyDocument4681543E == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset1PolicyDocument4681543E' to be undefined. Fixit.`); }
    if (pipelineAssetsFileAsset2SecurityGroupA400c1a5 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset2SecurityGroupA400c1a5' to be undefined. Fixit.`); }
    if (pipelineAssetsFileRole59943A77 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileRole59943A77' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineAssetsFileAsset24D2d639b = new codebuild.CfnProject(this, 'PipelineAssetsFileAsset24D2D639B', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: pipelineAssetsFileRole59943A77.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": [\n        \"npm install -g cdk-assets@2\"\n      ]\n    },\n    \"build\": {\n      \"commands\": [\n        \"cdk-assets --path \\\"assembly-PipelineStack-Beta/PipelineStackBetaStack1E6541489.assets.json\\\" --verbose publish \\\"ac76997971c3f6ddf37120660003f1ced72b4fc58c498dfd99c78fa77e721e0e:current_account-current_region\\\"\"\n      ]\n    }\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      description: 'Pipeline step PipelineStack/Pipeline/Assets/FileAsset2',
      encryptionKey: 'alias/aws/s3',
      vpcConfig: {
        securityGroupIds: [
          pipelineAssetsFileAsset2SecurityGroupA400c1a5.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        vpcId: vpc8378Eb38.ref,
      },
    });
    pipelineAssetsFileAsset24D2d639b.addDependency(pipelineAssetsFileAsset1PolicyDocument4681543E);

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineAssetsFileRole59943A77 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileRole59943A77' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineAssetsFileRoleDefaultPolicy14Db8755 = new iam.CfnPolicy(this, 'PipelineAssetsFileRoleDefaultPolicy14DB8755', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
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
              ':log-group:/aws/codebuild/*',
            ].join(''),
          },
          {
            Action: [
              'codebuild:BatchPutCodeCoverages',
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:CreateReportGroup',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codebuild:',
              this.region,
              ':',
              this.account,
              ':report-group/*',
            ].join(''),
          },
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: `arn:${this.partition}:iam::${this.account}:role/cdk-hnb659fds-file-publishing-role-${this.account}-${this.region}`,
          },
          {
            Action: 'ec2:CreateNetworkInterfacePermission',
            Condition: {
              StringEquals: {
                'ec2:Subnet': [
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet1Subnet536B997a.ref,
                  ].join(''),
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet2Subnet3788Aaa1.ref,
                  ].join(''),
                ],
                'ec2:AuthorizedService': 'codebuild.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ec2:',
              this.region,
              ':',
              this.account,
              ':network-interface/*',
            ].join(''),
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineAssetsFileRoleDefaultPolicy14DB8755',
      roles: [
        pipelineAssetsFileRole59943A77.ref,
      ],
    });

    if (pipelineBuildSynthCdkBuildProjectPolicyDocument4D16371a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectPolicyDocument4D16371a' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProjectSecurityGroup84F92459 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectSecurityGroup84F92459' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProject6Befa8e6 = new codebuild.CfnProject(this, 'PipelineBuildSynthCdkBuildProject6BEFA8E6', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: pipelineBuildSynthCdkBuildProjectRole231Eea2a.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"npm ci\",\n        \"npm run build\",\n        \"npx cdk synth\"\n      ]\n    }\n  },\n  \"artifacts\": {\n    \"base-directory\": \"cdk.out\",\n    \"files\": \"**/*\"\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      description: 'Pipeline step PipelineStack/Pipeline/Build/Synth',
      encryptionKey: 'alias/aws/s3',
      vpcConfig: {
        securityGroupIds: [
          pipelineBuildSynthCdkBuildProjectSecurityGroup84F92459.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        vpcId: vpc8378Eb38.ref,
      },
    });
    pipelineBuildSynthCdkBuildProject6Befa8e6.addDependency(pipelineBuildSynthCdkBuildProjectPolicyDocument4D16371a);

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    const pipelineRoleDefaultPolicy7Bdc1abb = new iam.CfnPolicy(this, 'PipelineRoleDefaultPolicy7BDC1ABB', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineCodeBuildActionRole226Db0cb.attrArn,
              [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineRoleDefaultPolicy7BDC1ABB',
      roles: [
        pipelineRoleB27faa37.ref,
      ],
    });

    if (pipelineUpdatePipelineSelfMutationPolicyDocumentD327dc74 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationPolicyDocumentD327dc74' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationRole57E559e8 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationRole57E559e8' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationSecurityGroup94164Edc == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationSecurityGroup94164Edc' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineUpdatePipelineSelfMutationDaa41400 = new codebuild.CfnProject(this, 'PipelineUpdatePipelineSelfMutationDAA41400', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: pipelineUpdatePipelineSelfMutationRole57E559e8.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": [\n        \"npm install -g aws-cdk@2\"\n      ]\n    },\n    \"build\": {\n      \"commands\": [\n        \"cdk -a . deploy PipelineStack --require-approval=never --verbose\"\n      ]\n    }\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      description: 'Pipeline step PipelineStack/Pipeline/UpdatePipeline/SelfMutate',
      encryptionKey: 'alias/aws/s3',
      vpcConfig: {
        securityGroupIds: [
          pipelineUpdatePipelineSelfMutationSecurityGroup94164Edc.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        vpcId: vpc8378Eb38.ref,
      },
    });
    pipelineUpdatePipelineSelfMutationDaa41400.addDependency(pipelineUpdatePipelineSelfMutationPolicyDocumentD327dc74);

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

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineAssetsFileAsset185A67cb4 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset185A67cb4' to be undefined. Fixit.`); }
    if (pipelineAssetsFileAsset24D2d639b == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset24D2d639b' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicy7Bdc1abb == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicy7Bdc1abb' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationDaa41400 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationDaa41400' to be undefined. Fixit.`); }
    const pipeline9850B417 = new codepipeline.CfnPipeline(this, 'Pipeline9850B417', {
      roleArn: pipelineRoleB27faa37.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'ThirdParty',
                provider: 'GitHub',
                version: '1',
              },
              configuration: {
                Owner: 'aws',
                Repo: 'aws-cdk',
                Branch: 'v2-main',
                OAuthToken: '{{resolve:secretsmanager:github-token:SecretString:::}}',
                PollForSourceChanges: false,
              },
              name: 'aws_aws-cdk',
              outputArtifacts: [
                {
                  name: 'aws_aws_cdk_Source',
                },
              ],
              runOrder: 1,
            },
          ],
          name: 'Source',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Build',
                owner: 'AWS',
                provider: 'CodeBuild',
                version: '1',
              },
              configuration: {
                ProjectName: pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
                EnvironmentVariables: '[{\"name\":\"_PROJECT_CONFIG_HASH\",\"type\":\"PLAINTEXT\",\"value\":\"9846e726ec481ed25679c0170187f40b4920586fd0e7314d24f56620d9f53f5b\"}]',
              },
              inputArtifacts: [
                {
                  name: 'aws_aws_cdk_Source',
                },
              ],
              name: 'Synth',
              outputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              roleArn: pipelineCodeBuildActionRole226Db0cb.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Build',
                owner: 'AWS',
                provider: 'CodeBuild',
                version: '1',
              },
              configuration: {
                ProjectName: pipelineUpdatePipelineSelfMutationDaa41400.ref,
                EnvironmentVariables: '[{\"name\":\"_PROJECT_CONFIG_HASH\",\"type\":\"PLAINTEXT\",\"value\":\"167eef1378d6e6ad8c4c8da3461f900d6e066cd0916052ee812a8d94b87ad38c\"}]',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'SelfMutate',
              roleArn: pipelineCodeBuildActionRole226Db0cb.attrArn,
              runOrder: 1,
            },
          ],
          name: 'UpdatePipeline',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Build',
                owner: 'AWS',
                provider: 'CodeBuild',
                version: '1',
              },
              configuration: {
                ProjectName: pipelineAssetsFileAsset185A67cb4.ref,
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'FileAsset1',
              roleArn: pipelineCodeBuildActionRole226Db0cb.attrArn,
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Build',
                owner: 'AWS',
                provider: 'CodeBuild',
                version: '1',
              },
              configuration: {
                ProjectName: pipelineAssetsFileAsset24D2d639b.ref,
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'FileAsset2',
              roleArn: pipelineCodeBuildActionRole226Db0cb.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Assets',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Beta-Stack1',
                Capabilities: 'CAPABILITY_NAMED_IAM,CAPABILITY_AUTO_EXPAND',
                RoleArn: [
                  'arn:',
                  this.partition,
                  ':iam::',
                  this.account,
                  ':role/cdk-hnb659fds-cfn-exec-role-',
                  this.account,
                  '-',
                  this.region,
                ].join(''),
                ActionMode: 'CHANGE_SET_REPLACE',
                ChangeSetName: 'PipelineChange',
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Beta/PipelineStackBetaStack1E6541489.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prepare',
              roleArn: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Beta-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Deploy',
              roleArn: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
              runOrder: 2,
            },
          ],
          name: 'Beta',
        },
      ],
      artifactStore: {
        location: pipelineArtifactsBucketAea9a052.ref,
        type: 'S3',
      },
      restartExecutionOnUpdate: true,
    });
    pipeline9850B417.addDependency(pipelineRoleDefaultPolicy7Bdc1abb);
    pipeline9850B417.addDependency(pipelineRoleB27faa37);

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFb6c941c = new iam.CfnPolicy(this, 'PipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFB6C941C', {
      policyDocument: {
        Statement: [
          {
            Action: 'ec2:CreateNetworkInterfacePermission',
            Condition: {
              StringEquals: {
                'ec2:Subnet': [
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet1Subnet536B997a.ref,
                  ].join(''),
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet2Subnet3788Aaa1.ref,
                  ].join(''),
                ],
                'ec2:AuthorizedService': 'codebuild.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ec2:',
              this.region,
              ':',
              this.account,
              ':network-interface/*',
            ].join(''),
          },
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
                ':*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              'codebuild:BatchPutCodeCoverages',
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:CreateReportGroup',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codebuild:',
              this.region,
              ':',
              this.account,
              ':report-group/',
              pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
              '-*',
            ].join(''),
          },
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFB6C941C',
      roles: [
        pipelineBuildSynthCdkBuildProjectRole231Eea2a.ref,
      ],
    });

    if (pipelineAssetsFileAsset185A67cb4 == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset185A67cb4' to be undefined. Fixit.`); }
    if (pipelineAssetsFileAsset24D2d639b == null) { throw new Error(`A combination of conditions caused 'pipelineAssetsFileAsset24D2d639b' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationDaa41400 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationDaa41400' to be undefined. Fixit.`); }
    const pipelineCodeBuildActionRoleDefaultPolicy1D62a6fe = new iam.CfnPolicy(this, 'PipelineCodeBuildActionRoleDefaultPolicy1D62A6FE', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineAssetsFileAsset185A67cb4.attrArn,
              pipelineAssetsFileAsset24D2d639b.attrArn,
              pipelineBuildSynthCdkBuildProject6Befa8e6.attrArn,
              pipelineUpdatePipelineSelfMutationDaa41400.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineCodeBuildActionRoleDefaultPolicy1D62A6FE',
      roles: [
        pipelineCodeBuildActionRole226Db0cb.ref,
      ],
    });

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationDaa41400 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationDaa41400' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationRole57E559e8 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationRole57E559e8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const pipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225da4e = new iam.CfnPolicy(this, 'PipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225DA4E', {
      policyDocument: {
        Statement: [
          {
            Action: 'ec2:CreateNetworkInterfacePermission',
            Condition: {
              StringEquals: {
                'ec2:Subnet': [
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet1Subnet536B997a.ref,
                  ].join(''),
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    vpcPrivateSubnet2Subnet3788Aaa1.ref,
                  ].join(''),
                ],
                'ec2:AuthorizedService': 'codebuild.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ec2:',
              this.region,
              ':',
              this.account,
              ':network-interface/*',
            ].join(''),
          },
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                pipelineUpdatePipelineSelfMutationDaa41400.ref,
                ':*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                pipelineUpdatePipelineSelfMutationDaa41400.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              'codebuild:BatchPutCodeCoverages',
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:CreateReportGroup',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codebuild:',
              this.region,
              ':',
              this.account,
              ':report-group/',
              pipelineUpdatePipelineSelfMutationDaa41400.ref,
              '-*',
            ].join(''),
          },
          {
            Action: 'sts:AssumeRole',
            Condition: {
              'ForAnyValue:StringEquals': {
                'iam:ResourceTag/aws-cdk:bootstrap-role': [
                  'image-publishing',
                  'file-publishing',
                  'deploy',
                ],
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:*:iam::',
              this.account,
              ':role/*',
            ].join(''),
          },
          {
            Action: [
              'cloudformation:DescribeStacks',
              's3:ListBucket',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225DA4E',
      roles: [
        pipelineUpdatePipelineSelfMutationRole57E559e8.ref,
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
          value: 'PipelineStack/Vpc/PublicSubnet1',
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
          value: 'PipelineStack/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (pipeline9850B417 == null) { throw new Error(`A combination of conditions caused 'pipeline9850B417' to be undefined. Fixit.`); }
    const pipelineSourceawsawscdkWebhookResource46Ec529b = new codepipeline.CfnWebhook(this, 'PipelineSourceawsawscdkWebhookResource46EC529B', {
      authentication: 'GITHUB_HMAC',
      authenticationConfiguration: {
        secretToken: '{{resolve:secretsmanager:github-token:SecretString:::}}',
      },
      filters: [
        {
          jsonPath: '$.ref',
          matchEquals: 'refs/heads/{Branch}',
        },
      ],
      targetAction: 'aws_aws-cdk',
      targetPipeline: pipeline9850B417.ref,
      targetPipelineVersion: 1,
      registerWithThirdParty: true,
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
  }
}

