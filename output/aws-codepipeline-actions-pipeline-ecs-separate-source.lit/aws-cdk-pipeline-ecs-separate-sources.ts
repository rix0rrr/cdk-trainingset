import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-pipeline-ecs-separate-sourcesProps extends cdk.StackProps {
}

export class aws-cdk-pipeline-ecs-separate-sources extends cdk.Stack {
  public readonly exportsOutputFnGetAttEcsDeployRepositoryE7a569c0ArnCcace9dd;
  public readonly exportsOutputRefEcsDeployRepositoryE7a569c04ec3eb5e;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-pipeline-ecs-separate-sourcesProps = {}) {
    super(scope, id, props);

    // Resources
    const appCodeDockerImageBuildAndPushProjectRole991Cf4d7 = new iam.CfnRole(this, 'AppCodeDockerImageBuildAndPushProjectRole991CF4D7', {
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

    const appCodeSourceRepository9F7363a1 = new codecommit.CfnRepository(this, 'AppCodeSourceRepository9F7363A1', {
      repositoryName: 'AppCodeSourceRepository',
    });

    const artifactBucket7410C9ef = new s3.CfnBucket(this, 'ArtifactBucket7410C9EF', {
    });
    artifactBucket7410C9ef.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const cdkCodeBuildProjectRole6830A58a = new iam.CfnRole(this, 'CdkCodeBuildProjectRole6830A58A', {
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

    const cdkCodeSourceRepositoryF10b9dc6 = new codecommit.CfnRepository(this, 'CdkCodeSourceRepositoryF10B9DC6', {
      repositoryName: 'CdkCodeSourceRepository',
    });

    const codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737', {
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

    const codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521', {
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

    const codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationDeployCFNDeployCodePipelineActionRoleC97FFCE2', {
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

    const codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationDeployCFNDeployRole71BFA647', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudformation.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const codePipelineDeployingEcsApplicationEventsRoleEeea39e5 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationEventsRoleEEEA39E5', {
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

    const codePipelineDeployingEcsApplicationRole138Cdc17 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationRole138CDC17', {
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

    const codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88B36F', {
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

    const codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9 = new iam.CfnRole(this, 'CodePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1E3A5E9', {
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

    const ecsDeployRepositoryE7a569c0 = new ecr.CfnRepository(this, 'EcsDeployRepositoryE7A569C0', {
    });
    ecsDeployRepositoryE7a569c0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (appCodeDockerImageBuildAndPushProjectRole991Cf4d7 == null) { throw new Error(`A combination of conditions caused 'appCodeDockerImageBuildAndPushProjectRole991Cf4d7' to be undefined. Fixit.`); }
    if (ecsDeployRepositoryE7a569c0 == null) { throw new Error(`A combination of conditions caused 'ecsDeployRepositoryE7a569c0' to be undefined. Fixit.`); }
    const appCodeDockerImageBuildAndPushProject00Dd6671 = new codebuild.CfnProject(this, 'AppCodeDockerImageBuildAndPushProject00DD6671', {
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
              cdk.Fn.select(4, cdk.Fn.split(':', ecsDeployRepositoryE7a569c0.attrArn)),
              '.dkr.ecr.',
              cdk.Fn.select(3, cdk.Fn.split(':', ecsDeployRepositoryE7a569c0.attrArn)),
              '.',
              this.urlSuffix,
              '/',
              ecsDeployRepositoryE7a569c0.ref,
            ].join(''),
          },
        ],
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: true,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: appCodeDockerImageBuildAndPushProjectRole991Cf4d7.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)\",\n        \"docker build -t $REPOSITORY_URI:$CODEBUILD_RESOLVED_SOURCE_VERSION .\"\n      ]\n    },\n    \"post_build\": {\n      \"commands\": [\n        \"docker push $REPOSITORY_URI:$CODEBUILD_RESOLVED_SOURCE_VERSION\",\n        \"export imageTag=$CODEBUILD_RESOLVED_SOURCE_VERSION\"\n      ]\n    }\n  },\n  \"env\": {\n    \"exported-variables\": [\n      \"imageTag\"\n    ]\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (cdkCodeBuildProjectRole6830A58a == null) { throw new Error(`A combination of conditions caused 'cdkCodeBuildProjectRole6830A58a' to be undefined. Fixit.`); }
    const cdkCodeBuildProject98C8cab8 = new codebuild.CfnProject(this, 'CdkCodeBuildProject98C8CAB8', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: cdkCodeBuildProjectRole6830A58a.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": [\n        \"npm install\"\n      ]\n    },\n    \"build\": {\n      \"commands\": [\n        \"npx cdk synth --verbose\"\n      ]\n    }\n  },\n  \"artifacts\": {\n    \"base-directory\": \"cdk.out\",\n    \"files\": \"**/*\"\n  }\n}',
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleDefaultPolicy39F9a0a0 = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationDeployCFNDeployCodePipelineActionRoleDefaultPolicy39F9A0A0', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647.attrArn,
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'cloudformation:CreateStack',
              'cloudformation:DescribeStack*',
              'cloudformation:GetStackPolicy',
              'cloudformation:GetTemplate*',
              'cloudformation:SetStackPolicy',
              'cloudformation:UpdateStack',
              'cloudformation:ValidateTemplate',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':cloudformation:',
              this.region,
              ':',
              this.account,
              ':stack/SampleEcsStackDeployedFromCodePipeline/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationDeployCFNDeployCodePipelineActionRoleDefaultPolicy39F9A0A0',
      roles: [
        codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2.ref,
      ],
    });

    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationDeployCfnDeployRoleDefaultPolicy859D7b9f = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationDeployCFNDeployRoleDefaultPolicy859D7B9F', {
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: '*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationDeployCFNDeployRoleDefaultPolicy859D7B9F',
      roles: [
        codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647.ref,
      ],
    });

    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationRole138Cdc17 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationRole138Cdc17' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationRoleDefaultPolicyDbdc1339 = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationRoleDefaultPolicyDBDC1339', {
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737.attrArn,
              codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521.attrArn,
              codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2.attrArn,
              codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f.attrArn,
              codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationRoleDefaultPolicyDBDC1339',
      roles: [
        codePipelineDeployingEcsApplicationRole138Cdc17.ref,
      ],
    });

    if (appCodeSourceRepository9F7363a1 == null) { throw new Error(`A combination of conditions caused 'appCodeSourceRepository9F7363a1' to be undefined. Fixit.`); }
    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRoleDefaultPolicy9Dff92d6 = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRoleDefaultPolicy9DFF92D6', {
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'codecommit:CancelUploadArchive',
              'codecommit:GetBranch',
              'codecommit:GetCommit',
              'codecommit:GetUploadArchiveStatus',
              'codecommit:UploadArchive',
            ],
            Effect: 'Allow',
            Resource: appCodeSourceRepository9F7363a1.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRoleDefaultPolicy9DFF92D6',
      roles: [
        codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f.ref,
      ],
    });

    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (cdkCodeSourceRepositoryF10b9dc6 == null) { throw new Error(`A combination of conditions caused 'cdkCodeSourceRepositoryF10b9dc6' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicyB5dfa55d = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicyB5DFA55D', {
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'codecommit:CancelUploadArchive',
              'codecommit:GetBranch',
              'codecommit:GetCommit',
              'codecommit:GetUploadArchiveStatus',
              'codecommit:UploadArchive',
            ],
            Effect: 'Allow',
            Resource: cdkCodeSourceRepositoryF10b9dc6.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicyB5DFA55D',
      roles: [
        codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9.ref,
      ],
    });

    if (appCodeDockerImageBuildAndPushProject00Dd6671 == null) { throw new Error(`A combination of conditions caused 'appCodeDockerImageBuildAndPushProject00Dd6671' to be undefined. Fixit.`); }
    if (appCodeDockerImageBuildAndPushProjectRole991Cf4d7 == null) { throw new Error(`A combination of conditions caused 'appCodeDockerImageBuildAndPushProjectRole991Cf4d7' to be undefined. Fixit.`); }
    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (ecsDeployRepositoryE7a569c0 == null) { throw new Error(`A combination of conditions caused 'ecsDeployRepositoryE7a569c0' to be undefined. Fixit.`); }
    const appCodeDockerImageBuildAndPushProjectRoleDefaultPolicyDdf56e3f = new iam.CfnPolicy(this, 'AppCodeDockerImageBuildAndPushProjectRoleDefaultPolicyDDF56E3F', {
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
                appCodeDockerImageBuildAndPushProject00Dd6671.ref,
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
                appCodeDockerImageBuildAndPushProject00Dd6671.ref,
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
              appCodeDockerImageBuildAndPushProject00Dd6671.ref,
              '-*',
            ].join(''),
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
            Resource: ecsDeployRepositoryE7a569c0.attrArn,
          },
          {
            Action: 'ecr:GetAuthorizationToken',
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AppCodeDockerImageBuildAndPushProjectRoleDefaultPolicyDDF56E3F',
      roles: [
        appCodeDockerImageBuildAndPushProjectRole991Cf4d7.ref,
      ],
    });

    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (cdkCodeBuildProject98C8cab8 == null) { throw new Error(`A combination of conditions caused 'cdkCodeBuildProject98C8cab8' to be undefined. Fixit.`); }
    if (cdkCodeBuildProjectRole6830A58a == null) { throw new Error(`A combination of conditions caused 'cdkCodeBuildProjectRole6830A58a' to be undefined. Fixit.`); }
    const cdkCodeBuildProjectRoleDefaultPolicyA531d3be = new iam.CfnPolicy(this, 'CdkCodeBuildProjectRoleDefaultPolicyA531D3BE', {
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
                cdkCodeBuildProject98C8cab8.ref,
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
                cdkCodeBuildProject98C8cab8.ref,
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
              cdkCodeBuildProject98C8cab8.ref,
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
              artifactBucket7410C9ef.attrArn,
              [
                artifactBucket7410C9ef.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CdkCodeBuildProjectRoleDefaultPolicyA531D3BE',
      roles: [
        cdkCodeBuildProjectRole6830A58a.ref,
      ],
    });

    if (appCodeDockerImageBuildAndPushProject00Dd6671 == null) { throw new Error(`A combination of conditions caused 'appCodeDockerImageBuildAndPushProject00Dd6671' to be undefined. Fixit.`); }
    if (appCodeSourceRepository9F7363a1 == null) { throw new Error(`A combination of conditions caused 'appCodeSourceRepository9F7363a1' to be undefined. Fixit.`); }
    if (artifactBucket7410C9ef == null) { throw new Error(`A combination of conditions caused 'artifactBucket7410C9ef' to be undefined. Fixit.`); }
    if (cdkCodeBuildProject98C8cab8 == null) { throw new Error(`A combination of conditions caused 'cdkCodeBuildProject98C8cab8' to be undefined. Fixit.`); }
    if (cdkCodeSourceRepositoryF10b9dc6 == null) { throw new Error(`A combination of conditions caused 'cdkCodeSourceRepositoryF10b9dc6' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationRole138Cdc17 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationRole138Cdc17' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationRoleDefaultPolicyDbdc1339 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationRoleDefaultPolicyDbdc1339' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplication81Eb9383 = new codepipeline.CfnPipeline(this, 'CodePipelineDeployingEcsApplication81EB9383', {
      roleArn: codePipelineDeployingEcsApplicationRole138Cdc17.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'CodeCommit',
                version: '1',
              },
              configuration: {
                RepositoryName: appCodeSourceRepository9F7363a1.attrName,
                BranchName: 'master',
                PollForSourceChanges: false,
              },
              name: 'AppCodeSource',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_AppCodeSource',
                },
              ],
              roleArn: codePipelineDeployingEcsApplicationSourceAppCodeSourceCodePipelineActionRole6D88b36f.attrArn,
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'CodeCommit',
                version: '1',
              },
              configuration: {
                RepositoryName: cdkCodeSourceRepositoryF10b9dc6.attrName,
                BranchName: 'master',
                PollForSourceChanges: false,
              },
              name: 'CdkCodeSource',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_CdkCodeSource',
                },
              ],
              roleArn: codePipelineDeployingEcsApplicationSourceCdkCodeSourceCodePipelineActionRoleA1e3a5e9.attrArn,
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
                ProjectName: appCodeDockerImageBuildAndPushProject00Dd6671.ref,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_AppCodeSource',
                },
              ],
              name: 'AppCodeDockerImageBuildAndPush',
              namespace: 'Build_AppCodeDockerImageBuildAndPush_NS',
              roleArn: codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737.attrArn,
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
                ProjectName: cdkCodeBuildProject98C8cab8.ref,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_CdkCodeSource',
                },
              ],
              name: 'CdkCodeBuildAndSynth',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_CdkCodeBuildAndSynth',
                },
              ],
              roleArn: codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521.attrArn,
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
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'SampleEcsStackDeployedFromCodePipeline',
                Capabilities: 'CAPABILITY_NAMED_IAM',
                RoleArn: codePipelineDeployingEcsApplicationDeployCfnDeployRole71Bfa647.attrArn,
                ParameterOverrides: '{\"TaskDefinitionAppContainerImageTagParam6DBCD720\":\"#{Build_AppCodeDockerImageBuildAndPush_NS.imageTag}\"}',
                ActionMode: 'CREATE_UPDATE',
                TemplatePath: 'Artifact_Build_CdkCodeBuildAndSynth::EcsStackDeployedInPipeline.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Build_CdkCodeBuildAndSynth',
                },
              ],
              name: 'CFN_Deploy',
              roleArn: codePipelineDeployingEcsApplicationDeployCfnDeployCodePipelineActionRoleC97ffce2.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Deploy',
        },
      ],
      artifactStore: {
        location: artifactBucket7410C9ef.ref,
        type: 'S3',
      },
    });
    codePipelineDeployingEcsApplication81Eb9383.addDependency(codePipelineDeployingEcsApplicationRoleDefaultPolicyDbdc1339);
    codePipelineDeployingEcsApplication81Eb9383.addDependency(codePipelineDeployingEcsApplicationRole138Cdc17);

    if (appCodeDockerImageBuildAndPushProject00Dd6671 == null) { throw new Error(`A combination of conditions caused 'appCodeDockerImageBuildAndPushProject00Dd6671' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRoleDefaultPolicyE8804de5 = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRoleDefaultPolicyE8804DE5', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: appCodeDockerImageBuildAndPushProject00Dd6671.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRoleDefaultPolicyE8804DE5',
      roles: [
        codePipelineDeployingEcsApplicationBuildAppCodeDockerImageBuildAndPushCodePipelineActionRole9B025737.ref,
      ],
    });

    if (cdkCodeBuildProject98C8cab8 == null) { throw new Error(`A combination of conditions caused 'cdkCodeBuildProject98C8cab8' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRoleDefaultPolicy5Be54b75 = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRoleDefaultPolicy5BE54B75', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: cdkCodeBuildProject98C8cab8.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRoleDefaultPolicy5BE54B75',
      roles: [
        codePipelineDeployingEcsApplicationBuildCdkCodeBuildAndSynthCodePipelineActionRole54094521.ref,
      ],
    });

    if (appCodeSourceRepository9F7363a1 == null) { throw new Error(`A combination of conditions caused 'appCodeSourceRepository9F7363a1' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplication81Eb9383 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplication81Eb9383' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationEventsRoleEeea39e5 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationEventsRoleEeea39e5' to be undefined. Fixit.`); }
    const appCodeSourceRepositoryawscdkpipelineecsseparatesourcesCodePipelineDeployingEcsApplicationF8e9e764EventRuleA9d5e83b = new events.CfnRule(this, 'AppCodeSourceRepositoryawscdkpipelineecsseparatesourcesCodePipelineDeployingEcsApplicationF8E9E764EventRuleA9D5E83B', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          appCodeSourceRepository9F7363a1.attrArn,
        ],
        'detail-type': [
          'CodeCommit Repository State Change',
        ],
        detail: {
          event: [
            'referenceCreated',
            'referenceUpdated',
          ],
          referenceName: [
            'master',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            codePipelineDeployingEcsApplication81Eb9383.ref,
          ].join(''),
          id: 'Target0',
          roleArn: codePipelineDeployingEcsApplicationEventsRoleEeea39e5.attrArn,
        },
      ],
    });

    if (cdkCodeSourceRepositoryF10b9dc6 == null) { throw new Error(`A combination of conditions caused 'cdkCodeSourceRepositoryF10b9dc6' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplication81Eb9383 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplication81Eb9383' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationEventsRoleEeea39e5 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationEventsRoleEeea39e5' to be undefined. Fixit.`); }
    const cdkCodeSourceRepositoryawscdkpipelineecsseparatesourcesCodePipelineDeployingEcsApplicationF8e9e764EventRule94D5ee4b = new events.CfnRule(this, 'CdkCodeSourceRepositoryawscdkpipelineecsseparatesourcesCodePipelineDeployingEcsApplicationF8E9E764EventRule94D5EE4B', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          cdkCodeSourceRepositoryF10b9dc6.attrArn,
        ],
        'detail-type': [
          'CodeCommit Repository State Change',
        ],
        detail: {
          event: [
            'referenceCreated',
            'referenceUpdated',
          ],
          referenceName: [
            'master',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            codePipelineDeployingEcsApplication81Eb9383.ref,
          ].join(''),
          id: 'Target0',
          roleArn: codePipelineDeployingEcsApplicationEventsRoleEeea39e5.attrArn,
        },
      ],
    });

    if (codePipelineDeployingEcsApplication81Eb9383 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplication81Eb9383' to be undefined. Fixit.`); }
    if (codePipelineDeployingEcsApplicationEventsRoleEeea39e5 == null) { throw new Error(`A combination of conditions caused 'codePipelineDeployingEcsApplicationEventsRoleEeea39e5' to be undefined. Fixit.`); }
    const codePipelineDeployingEcsApplicationEventsRoleDefaultPolicy19Afd1bd = new iam.CfnPolicy(this, 'CodePipelineDeployingEcsApplicationEventsRoleDefaultPolicy19AFD1BD', {
      policyDocument: {
        Statement: [
          {
            Action: 'codepipeline:StartPipelineExecution',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codepipeline:',
              this.region,
              ':',
              this.account,
              ':',
              codePipelineDeployingEcsApplication81Eb9383.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CodePipelineDeployingEcsApplicationEventsRoleDefaultPolicy19AFD1BD',
      roles: [
        codePipelineDeployingEcsApplicationEventsRoleEeea39e5.ref,
      ],
    });

    // Outputs
    this.exportsOutputFnGetAttEcsDeployRepositoryE7a569c0ArnCcace9dd = ecsDeployRepositoryE7a569c0.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttEcsDeployRepositoryE7A569C0ArnCCACE9DD', {
      key: 'ExportsOutputFnGetAttEcsDeployRepositoryE7A569C0ArnCCACE9DD',
      exportName: 'aws-cdk-pipeline-ecs-separate-sources:ExportsOutputFnGetAttEcsDeployRepositoryE7A569C0ArnCCACE9DD',
      value: this.exportsOutputFnGetAttEcsDeployRepositoryE7a569c0ArnCcace9dd!.toString(),
    });
    this.exportsOutputRefEcsDeployRepositoryE7a569c04ec3eb5e = ecsDeployRepositoryE7a569c0.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefEcsDeployRepositoryE7A569C04EC3EB5E', {
      key: 'ExportsOutputRefEcsDeployRepositoryE7A569C04EC3EB5E',
      exportName: 'aws-cdk-pipeline-ecs-separate-sources:ExportsOutputRefEcsDeployRepositoryE7A569C04EC3EB5E',
      value: this.exportsOutputRefEcsDeployRepositoryE7a569c04ec3eb5e!.toString(),
    });
  }
}

