import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codepipeline-ecs-deployProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-ecs-deploy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-ecs-deployProps = {}) {
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
    const ecrRepoBb83a592 = new ecr.CfnRepository(this, 'EcrRepoBB83A592', {
    });
    ecrRepoBb83a592.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const ecsCluster97242B84 = new ecs.CfnCluster(this, 'EcsCluster97242B84', {
    });

    const ecsProjectRoleE2f0e9d2 = new iam.CfnRole(this, 'EcsProjectRoleE2F0E9D2', {
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

    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca = new iam.CfnRole(this, 'MyPipelineBuildCodeBuildCodePipelineActionRoleCAE538CA', {
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
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineDeployDeployActionCodePipelineActionRole854184Ef = new iam.CfnRole(this, 'MyPipelineDeployDeployActionCodePipelineActionRole854184EF', {
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
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineRoleC0d47ca4 = new iam.CfnRole(this, 'MyPipelineRoleC0D47CA4', {
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

    const myPipelineSourceCodePipelineActionRoleAa05d76f = new iam.CfnRole(this, 'MyPipelineSourceCodePipelineActionRoleAA05D76F', {
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

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PublicSubnet1',
        },
      ],
    });

    if (ecrRepoBb83a592 == null) { throw new Error(`A combination of conditions caused 'ecrRepoBb83a592' to be undefined. Fixit.`); }
    if (ecsProjectRoleE2f0e9d2 == null) { throw new Error(`A combination of conditions caused 'ecsProjectRoleE2f0e9d2' to be undefined. Fixit.`); }
    const ecsProject54Efdca6 = new codebuild.CfnProject(this, 'EcsProject54EFDCA6', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        environmentVariables: [
          {
            name: 'REPOSITORY_URI',
            type: 'PLAINTEXT',
            value: [
              cdk.Fn.select(4, cdk.Fn.split(':', ecrRepoBb83a592.attrArn)),
              '.dkr.ecr.',
              cdk.Fn.select(3, cdk.Fn.split(':', ecrRepoBb83a592.attrArn)),
              '.',
              this.urlSuffix,
              '/',
              ecrRepoBb83a592.ref,
            ].join(''),
          },
        ],
        image: 'aws/codebuild/docker:17.09.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: true,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: ecsProjectRoleE2f0e9d2.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"pre_build\": {\n      \"commands\": \"$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)\"\n    },\n    \"build\": {\n      \"commands\": \"docker build -t $REPOSITORY_URI:latest .\"\n    },\n    \"post_build\": {\n      \"commands\": [\n        \"docker push $REPOSITORY_URI:latest\",\n        \"printf \'[{ \\\"name\\\": \\\"Container\\\", \\\"imageUri\\\": \\\"%s\\\" }]\' $REPOSITORY_URI:latest > imagedefinitions.json\"\n      ]\n    }\n  },\n  \"artifacts\": {\n    \"files\": \"imagedefinitions.json\"\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const fargateServiceSecurityGroup0A0e79cb = new ec2.CfnSecurityGroup(this, 'FargateServiceSecurityGroup0A0E79CB', {
      groupDescription: 'aws-cdk-codepipeline-ecs-deploy/FargateService/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });
    fargateServiceSecurityGroup0A0e79cb.addDependency(taskDefTaskRole1Edb4a67);

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineDeployDeployActionCodePipelineActionRole854184Ef == null) { throw new Error(`A combination of conditions caused 'myPipelineDeployDeployActionCodePipelineActionRole854184Ef' to be undefined. Fixit.`); }
    const myPipelineDeployDeployActionCodePipelineActionRoleDefaultPolicy8B712933 = new iam.CfnPolicy(this, 'MyPipelineDeployDeployActionCodePipelineActionRoleDefaultPolicy8B712933', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:DescribeServices',
              'ecs:DescribeTaskDefinition',
              'ecs:DescribeTasks',
              'ecs:ListTasks',
              'ecs:RegisterTaskDefinition',
              'ecs:UpdateService',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Condition: {
              StringEqualsIfExists: {
                'iam:PassedToService': [
                  'ec2.amazonaws.com',
                  'ecs-tasks.amazonaws.com',
                ],
              },
            },
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineDeployDeployActionCodePipelineActionRoleDefaultPolicy8B712933',
      roles: [
        myPipelineDeployDeployActionCodePipelineActionRole854184Ef.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca' to be undefined. Fixit.`); }
    if (myPipelineDeployDeployActionCodePipelineActionRole854184Ef == null) { throw new Error(`A combination of conditions caused 'myPipelineDeployDeployActionCodePipelineActionRole854184Ef' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    const myPipelineRoleDefaultPolicy34F09efa = new iam.CfnPolicy(this, 'MyPipelineRoleDefaultPolicy34F09EFA', {
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca.attrArn,
              myPipelineDeployDeployActionCodePipelineActionRole854184Ef.attrArn,
              myPipelineSourceCodePipelineActionRoleAa05d76f.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineRoleDefaultPolicy34F09EFA',
      roles: [
        myPipelineRoleC0d47ca4.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    const myPipelineSourceCodePipelineActionRoleDefaultPolicy10C831a9 = new iam.CfnPolicy(this, 'MyPipelineSourceCodePipelineActionRoleDefaultPolicy10C831A9', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/path/to/Dockerfile',
              ].join(''),
            ],
          },
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineSourceCodePipelineActionRoleDefaultPolicy10C831A9',
      roles: [
        myPipelineSourceCodePipelineActionRoleAa05d76f.ref,
      ],
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          name: 'Container',
        },
      ],
      cpu: '256',
      family: 'awscdkcodepipelineecsdeployTaskDefCF95BCAC',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (ecrRepoBb83a592 == null) { throw new Error(`A combination of conditions caused 'ecrRepoBb83a592' to be undefined. Fixit.`); }
    if (ecsProject54Efdca6 == null) { throw new Error(`A combination of conditions caused 'ecsProject54Efdca6' to be undefined. Fixit.`); }
    if (ecsProjectRoleE2f0e9d2 == null) { throw new Error(`A combination of conditions caused 'ecsProjectRoleE2f0e9d2' to be undefined. Fixit.`); }
    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const ecsProjectRoleDefaultPolicy1A8c91e0 = new iam.CfnPolicy(this, 'EcsProjectRoleDefaultPolicy1A8C91E0', {
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
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                ecsProject54Efdca6.ref,
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
                ecsProject54Efdca6.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:CompleteLayerUpload',
              'ecr:GetDownloadUrlForLayer',
              'ecr:InitiateLayerUpload',
              'ecr:PutImage',
              'ecr:UploadLayerPart',
            ],
            Effect: 'Allow',
            Resource: ecrRepoBb83a592.attrArn,
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EcsProjectRoleDefaultPolicy1A8C91E0',
      roles: [
        ecsProjectRoleE2f0e9d2.ref,
      ],
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (fargateServiceSecurityGroup0A0e79cb == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup0A0e79cb' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const fargateServiceAc2b3b85 = new ecs.CfnService(this, 'FargateServiceAC2B3B85', {
      cluster: ecsCluster97242B84.ref,
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
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            fargateServiceSecurityGroup0A0e79cb.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet8Bca10e0.ref,
          ],
        },
      },
      taskDefinition: taskDef54694570.ref,
    });
    fargateServiceAc2b3b85.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsProject54Efdca6 == null) { throw new Error(`A combination of conditions caused 'ecsProject54Efdca6' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca' to be undefined. Fixit.`); }
    const myPipelineBuildCodeBuildCodePipelineActionRoleDefaultPolicyD9654d9b = new iam.CfnPolicy(this, 'MyPipelineBuildCodeBuildCodePipelineActionRoleDefaultPolicyD9654D9B', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: ecsProject54Efdca6.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineBuildCodeBuildCodePipelineActionRoleDefaultPolicyD9654D9B',
      roles: [
        myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca.ref,
      ],
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation347902D1 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet1RouteTableAssociation347902D1', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute91Cef279 = new ec2.CfnRoute(this, 'VPCPublicSubnet1DefaultRoute91CEF279', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet1DefaultRoute91Cef279.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation0B0896dc = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet1RouteTableAssociation0B0896DC', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
    });

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsProject54Efdca6 == null) { throw new Error(`A combination of conditions caused 'ecsProject54Efdca6' to be undefined. Fixit.`); }
    if (fargateServiceAc2b3b85 == null) { throw new Error(`A combination of conditions caused 'fargateServiceAc2b3b85' to be undefined. Fixit.`); }
    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca' to be undefined. Fixit.`); }
    if (myPipelineDeployDeployActionCodePipelineActionRole854184Ef == null) { throw new Error(`A combination of conditions caused 'myPipelineDeployDeployActionCodePipelineActionRole854184Ef' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineRoleDefaultPolicy34F09efa == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleDefaultPolicy34F09efa' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    const myPipelineAed38ecf = new codepipeline.CfnPipeline(this, 'MyPipelineAED38ECF', {
      roleArn: myPipelineRoleC0d47ca4.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'S3',
                version: '1',
              },
              configuration: {
                S3Bucket: myBucketF68f3ff0.ref,
                S3ObjectKey: 'path/to/Dockerfile',
              },
              name: 'Source',
              outputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              roleArn: myPipelineSourceCodePipelineActionRoleAa05d76f.attrArn,
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
                ProjectName: ecsProject54Efdca6.ref,
              },
              inputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              name: 'CodeBuild',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_CodeBuild',
                },
              ],
              roleArn: myPipelineBuildCodeBuildCodePipelineActionRoleCae538ca.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'ECS',
                version: '1',
              },
              configuration: {
                ClusterName: ecsCluster97242B84.ref,
                ServiceName: fargateServiceAc2b3b85.attrName,
                DeploymentTimeout: 60,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Build_CodeBuild',
                },
              ],
              name: 'DeployAction',
              roleArn: myPipelineDeployDeployActionCodePipelineActionRole854184Ef.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Deploy',
        },
      ],
      artifactStore: {
        location: myBucketF68f3ff0.ref,
        type: 'S3',
      },
    });
    myPipelineAed38ecf.addDependency(myPipelineRoleDefaultPolicy34F09efa);
    myPipelineAed38ecf.addDependency(myPipelineRoleC0d47ca4);

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codepipeline-ecs-deploy/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
    });
  }
}

