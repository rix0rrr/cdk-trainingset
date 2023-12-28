import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface PipelinestackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Pipelinestack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: PipelinestackProps = {}) {
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
    const customArtifact20Bdcf79 = new s3.CfnBucket(this, 'CustomArtifact20BDCF79', {
    });
    customArtifact20Bdcf79.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    const pipelineSourceS3CodePipelineActionRole83895A58 = new iam.CfnRole(this, 'PipelineSourceS3CodePipelineActionRole83895A58', {
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

    const sourceBucketDdd2130a = new s3.CfnBucket(this, 'SourceBucketDDD2130A', {
    });
    sourceBucketDdd2130a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
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

    if (customArtifact20Bdcf79 == null) { throw new Error(`A combination of conditions caused 'customArtifact20Bdcf79' to be undefined. Fixit.`); }
    if (pipelineSourceS3CodePipelineActionRole83895A58 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole83895A58' to be undefined. Fixit.`); }
    if (sourceBucketDdd2130a == null) { throw new Error(`A combination of conditions caused 'sourceBucketDdd2130a' to be undefined. Fixit.`); }
    const pipelineSourceS3CodePipelineActionRoleDefaultPolicyB176a07f = new iam.CfnPolicy(this, 'PipelineSourceS3CodePipelineActionRoleDefaultPolicyB176A07F', {
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
              sourceBucketDdd2130a.attrArn,
              [
                sourceBucketDdd2130a.attrArn,
                '/key',
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
              customArtifact20Bdcf79.attrArn,
              [
                customArtifact20Bdcf79.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineSourceS3CodePipelineActionRoleDefaultPolicyB176A07F',
      roles: [
        pipelineSourceS3CodePipelineActionRole83895A58.ref,
      ],
    });

    if (pipelineUpdatePipelineSelfMutationRole57E559e8 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationRole57E559e8' to be undefined. Fixit.`); }
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
    });

    if (customArtifact20Bdcf79 == null) { throw new Error(`A combination of conditions caused 'customArtifact20Bdcf79' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFb6c941c = new iam.CfnPolicy(this, 'PipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFB6C941C', {
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
              customArtifact20Bdcf79.attrArn,
              [
                customArtifact20Bdcf79.attrArn,
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

    if (customArtifact20Bdcf79 == null) { throw new Error(`A combination of conditions caused 'customArtifact20Bdcf79' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    if (pipelineSourceS3CodePipelineActionRole83895A58 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole83895A58' to be undefined. Fixit.`); }
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
              customArtifact20Bdcf79.attrArn,
              [
                customArtifact20Bdcf79.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineCodeBuildActionRole226Db0cb.attrArn,
              pipelineSourceS3CodePipelineActionRole83895A58.attrArn,
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

    if (customArtifact20Bdcf79 == null) { throw new Error(`A combination of conditions caused 'customArtifact20Bdcf79' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationDaa41400 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationDaa41400' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationRole57E559e8 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationRole57E559e8' to be undefined. Fixit.`); }
    const pipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225da4e = new iam.CfnPolicy(this, 'PipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225DA4E', {
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
              customArtifact20Bdcf79.attrArn,
              [
                customArtifact20Bdcf79.attrArn,
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

    if (customArtifact20Bdcf79 == null) { throw new Error(`A combination of conditions caused 'customArtifact20Bdcf79' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicy7Bdc1abb == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicy7Bdc1abb' to be undefined. Fixit.`); }
    if (pipelineSourceS3CodePipelineActionRole83895A58 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole83895A58' to be undefined. Fixit.`); }
    if (pipelineUpdatePipelineSelfMutationDaa41400 == null) { throw new Error(`A combination of conditions caused 'pipelineUpdatePipelineSelfMutationDaa41400' to be undefined. Fixit.`); }
    if (sourceBucketDdd2130a == null) { throw new Error(`A combination of conditions caused 'sourceBucketDdd2130a' to be undefined. Fixit.`); }
    const pipeline9850B417 = new codepipeline.CfnPipeline(this, 'Pipeline9850B417', {
      roleArn: pipelineRoleB27faa37.attrArn,
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
                S3Bucket: sourceBucketDdd2130a.ref,
                S3ObjectKey: 'key',
              },
              name: sourceBucketDdd2130a.ref,
              outputArtifacts: [
                {
                  name: 'c82506a27b454f271b71bfc81dcc633cd314f52071_Source',
                },
              ],
              roleArn: pipelineSourceS3CodePipelineActionRole83895A58.attrArn,
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
                  name: 'c82506a27b454f271b71bfc81dcc633cd314f52071_Source',
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
      ],
      artifactStore: {
        location: customArtifact20Bdcf79.ref,
        type: 'S3',
      },
      restartExecutionOnUpdate: true,
    });
    pipeline9850B417.addDependency(pipelineRoleDefaultPolicy7Bdc1abb);
    pipeline9850B417.addDependency(pipelineRoleB27faa37);
  }
}

