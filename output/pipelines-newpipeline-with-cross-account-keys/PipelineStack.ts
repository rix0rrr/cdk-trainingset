import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
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
    const pipelineArtifactsBucketEncryptionKeyF5bf0670 = new kms.CfnKey(this, 'PipelineArtifactsBucketEncryptionKeyF5BF0670', {
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
              'kms:Decrypt',
              'kms:DescribeKey',
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
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      enableKeyRotation: true,
    });
    pipelineArtifactsBucketEncryptionKeyF5bf0670.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketAea9a052 = new s3.CfnBucket(this, 'PipelineArtifactsBucketAEA9A052', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
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

    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketEncryptionKeyAlias94A07392 = new kms.CfnAlias(this, 'PipelineArtifactsBucketEncryptionKeyAlias94A07392', {
      aliasName: 'alias/codepipeline-pipelinestack-pipeline-e95eedaa',
      targetKeyId: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias94A07392.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
      encryptionKey: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
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

    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
      encryptionKey: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
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

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
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

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
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

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineUpdatePipelineSelfMutationRoleDefaultPolicyA225DA4E',
      roles: [
        pipelineUpdatePipelineSelfMutationRole57E559e8.ref,
      ],
    });

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKeyF5bf0670 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKeyF5bf0670' to be undefined. Fixit.`); }
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
                Owner: 'tkglaser',
                Repo: 'cdk-pipelines-demo',
                Branch: 'main',
                OAuthToken: '{{resolve:secretsmanager:github-token:SecretString:::}}',
                PollForSourceChanges: false,
              },
              name: 'tkglaser_cdk-pipelines-demo',
              outputArtifacts: [
                {
                  name: 'tkglaser_cdk_pipelines_demo_Source',
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
                  name: 'tkglaser_cdk_pipelines_demo_Source',
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
              name: 'Stack1.Prepare',
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
              name: 'Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Beta-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Beta/PipelineStackBetaStack2C79AD00A.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Beta-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Stack2.Deploy',
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
              runOrder: 4,
            },
          ],
          name: 'Beta',
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
                StackName: 'Prod1-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod1/PipelineStackProd1Stack14013D698.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod1.Stack1.Prepare',
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
                StackName: 'Prod2-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod2/PipelineStackProd2Stack1FD464162.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod2.Stack1.Prepare',
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
                StackName: 'Prod1-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod1.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod2-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod2.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod1-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod1/PipelineStackProd1Stack2F0681AFF.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod1.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod2-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod2/PipelineStackProd2Stack2176123EB.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod2.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod1-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod1.Stack2.Deploy',
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
              runOrder: 4,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod2-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod2.Stack2.Deploy',
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
              runOrder: 4,
            },
          ],
          name: 'Wave1',
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
                StackName: 'Prod3-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod3/PipelineStackProd3Stack1795F3D43.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod3.Stack1.Prepare',
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
                StackName: 'Prod4-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod4/PipelineStackProd4Stack118F74ADB.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod4.Stack1.Prepare',
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
                StackName: 'Prod5-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod5/PipelineStackProd5Stack1E7E4E4C6.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod5.Stack1.Prepare',
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
                StackName: 'Prod6-Stack1',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod6/PipelineStackProd6Stack1E7C34314.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod6.Stack1.Prepare',
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
                StackName: 'Prod3-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod3.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod4-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod4.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod5-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod5.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod6-Stack1',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod6.Stack1.Deploy',
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
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod3-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod3/PipelineStackProd3Stack2DFBBA0B2.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod3.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod4-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod4/PipelineStackProd4Stack2E2CB4ED3.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod4.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod5-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod5/PipelineStackProd5Stack2C39BEE5B.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod5.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod6-Stack2',
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
                TemplatePath: 'Synth_Output::assembly-PipelineStack-Prod6/PipelineStackProd6Stack2BED1BBCE.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Prod6.Stack2.Prepare',
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
              runOrder: 3,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod3-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod3.Stack2.Deploy',
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
              runOrder: 4,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod4-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod4.Stack2.Deploy',
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
              runOrder: 4,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod5-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod5.Stack2.Deploy',
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
              runOrder: 4,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'Prod6-Stack2',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Prod6.Stack2.Deploy',
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
              runOrder: 4,
            },
          ],
          name: 'Wave2',
        },
      ],
      artifactStore: {
        encryptionKey: {
          id: pipelineArtifactsBucketEncryptionKeyF5bf0670.attrArn,
          type: 'KMS',
        },
        location: pipelineArtifactsBucketAea9a052.ref,
        type: 'S3',
      },
      restartExecutionOnUpdate: true,
    });
    pipeline9850B417.addDependency(pipelineRoleDefaultPolicy7Bdc1abb);
    pipeline9850B417.addDependency(pipelineRoleB27faa37);

    if (pipeline9850B417 == null) { throw new Error(`A combination of conditions caused 'pipeline9850B417' to be undefined. Fixit.`); }
    const pipelineSourcetkglasercdkpipelinesdemoWebhookResource54Ee51be = new codepipeline.CfnWebhook(this, 'PipelineSourcetkglasercdkpipelinesdemoWebhookResource54EE51BE', {
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
      targetAction: 'tkglaser_cdk-pipelines-demo',
      targetPipeline: pipeline9850B417.ref,
      targetPipelineVersion: 1,
      registerWithThirdParty: true,
    });
  }
}

