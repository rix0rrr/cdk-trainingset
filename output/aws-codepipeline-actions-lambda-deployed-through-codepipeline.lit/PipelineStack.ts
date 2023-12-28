import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
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
    const cdkBuildProjectRoleE0b6feb0 = new iam.CfnRole(this, 'CdkBuildProjectRoleE0B6FEB0', {
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

    const cdkCodeRepo7D2ec742 = new codecommit.CfnRepository(this, 'CdkCodeRepo7D2EC742', {
      repositoryName: 'CdkCodeRepo',
    });

    const lambdaBuildProjectRoleD0c4f982 = new iam.CfnRole(this, 'LambdaBuildProjectRoleD0C4F982', {
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

    const lambdaCodeRepoE08dd409 = new codecommit.CfnRepository(this, 'LambdaCodeRepoE08DD409', {
      repositoryName: 'LambdaCodeRepo',
    });

    const pipelineArtifactsBucketEncryptionKey01D58d69 = new kms.CfnKey(this, 'PipelineArtifactsBucketEncryptionKey01D58D69', {
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
        ],
        Version: '2012-10-17',
      },
    });
    pipelineArtifactsBucketEncryptionKey01D58d69.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const pipelineBuildCdkBuildCodePipelineActionRole15F4b424 = new iam.CfnRole(this, 'PipelineBuildCDKBuildCodePipelineActionRole15F4B424', {
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

    const pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9 = new iam.CfnRole(this, 'PipelineBuildLambdaBuildCodePipelineActionRole2DAE39E9', {
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

    const pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488 = new iam.CfnRole(this, 'PipelineDeployLambdaCFNDeployCodePipelineActionRoleF8A74488', {
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

    const pipelineDeployLambdaCfnDeployRole89Ca1043 = new iam.CfnRole(this, 'PipelineDeployLambdaCFNDeployRole89CA1043', {
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

    const pipelineEventsRole46Beea7c = new iam.CfnRole(this, 'PipelineEventsRole46BEEA7C', {
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

    const pipelineRoleD68726f7 = new iam.CfnRole(this, 'PipelineRoleD68726F7', {
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

    const pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8 = new iam.CfnRole(this, 'PipelineSourceCdkCodeSourceCodePipelineActionRole237947B8', {
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

    const pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60 = new iam.CfnRole(this, 'PipelineSourceLambdaCodeSourceCodePipelineActionRole4E89EF60', {
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

    if (cdkBuildProjectRoleE0b6feb0 == null) { throw new Error(`A combination of conditions caused 'cdkBuildProjectRoleE0b6feb0' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const cdkBuildProject9382C38d = new codebuild.CfnProject(this, 'CdkBuildProject9382C38D', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: cdkBuildProjectRoleE0b6feb0.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": \"npm install\"\n    },\n    \"build\": {\n      \"commands\": [\n        \"npm run build\",\n        \"npm run cdk synth LambdaStack -- -o .\"\n      ]\n    }\n  },\n  \"artifacts\": {\n    \"files\": \"LambdaStack.template.yaml\"\n  }\n}',
        type: 'NO_SOURCE',
      },
    });

    if (lambdaBuildProjectRoleD0c4f982 == null) { throw new Error(`A combination of conditions caused 'lambdaBuildProjectRoleD0c4f982' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const lambdaBuildProject7E2dab11 = new codebuild.CfnProject(this, 'LambdaBuildProject7E2DAB11', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: lambdaBuildProjectRoleD0c4f982.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"install\": {\n      \"commands\": \"npm install\"\n    },\n    \"build\": {\n      \"commands\": \"npm run build\"\n    }\n  },\n  \"artifacts\": {\n    \"files\": [\n      \"index.js\",\n      \"node_modules/**/*\"\n    ]\n  }\n}',
        type: 'NO_SOURCE',
      },
    });

    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const pipelineArtifactsBucket22248F97 = new s3.CfnBucket(this, 'PipelineArtifactsBucket22248F97', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
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
    pipelineArtifactsBucket22248F97.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketEncryptionKeyAlias5C510eee = new kms.CfnAlias(this, 'PipelineArtifactsBucketEncryptionKeyAlias5C510EEE', {
      aliasName: 'alias/codepipeline-pipelinestack-pipeline-9db740af',
      targetKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias5C510eee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (cdkBuildProject9382C38d == null) { throw new Error(`A combination of conditions caused 'cdkBuildProject9382C38d' to be undefined. Fixit.`); }
    if (cdkBuildProjectRoleE0b6feb0 == null) { throw new Error(`A combination of conditions caused 'cdkBuildProjectRoleE0b6feb0' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const cdkBuildProjectRoleDefaultPolicy3C7ecb00 = new iam.CfnPolicy(this, 'CdkBuildProjectRoleDefaultPolicy3C7ECB00', {
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
                cdkBuildProject9382C38d.ref,
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
                cdkBuildProject9382C38d.ref,
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
              cdkBuildProject9382C38d.ref,
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
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
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CdkBuildProjectRoleDefaultPolicy3C7ECB00',
      roles: [
        cdkBuildProjectRoleE0b6feb0.ref,
      ],
    });

    if (lambdaBuildProject7E2dab11 == null) { throw new Error(`A combination of conditions caused 'lambdaBuildProject7E2dab11' to be undefined. Fixit.`); }
    if (lambdaBuildProjectRoleD0c4f982 == null) { throw new Error(`A combination of conditions caused 'lambdaBuildProjectRoleD0c4f982' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const lambdaBuildProjectRoleDefaultPolicyA3a66624 = new iam.CfnPolicy(this, 'LambdaBuildProjectRoleDefaultPolicyA3A66624', {
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
                lambdaBuildProject7E2dab11.ref,
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
                lambdaBuildProject7E2dab11.ref,
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
              lambdaBuildProject7E2dab11.ref,
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
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
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'LambdaBuildProjectRoleDefaultPolicyA3A66624',
      roles: [
        lambdaBuildProjectRoleD0c4f982.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketPolicyD4f9712a = new s3.CfnBucketPolicy(this, 'PipelineArtifactsBucketPolicyD4F9712A', {
      bucket: pipelineArtifactsBucket22248F97.ref,
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (cdkBuildProject9382C38d == null) { throw new Error(`A combination of conditions caused 'cdkBuildProject9382C38d' to be undefined. Fixit.`); }
    if (pipelineBuildCdkBuildCodePipelineActionRole15F4b424 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCdkBuildCodePipelineActionRole15F4b424' to be undefined. Fixit.`); }
    const pipelineBuildCdkBuildCodePipelineActionRoleDefaultPolicyE350f3f9 = new iam.CfnPolicy(this, 'PipelineBuildCDKBuildCodePipelineActionRoleDefaultPolicyE350F3F9', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: cdkBuildProject9382C38d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildCDKBuildCodePipelineActionRoleDefaultPolicyE350F3F9',
      roles: [
        pipelineBuildCdkBuildCodePipelineActionRole15F4b424.ref,
      ],
    });

    if (lambdaBuildProject7E2dab11 == null) { throw new Error(`A combination of conditions caused 'lambdaBuildProject7E2dab11' to be undefined. Fixit.`); }
    if (pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9' to be undefined. Fixit.`); }
    const pipelineBuildLambdaBuildCodePipelineActionRoleDefaultPolicy3Ca005f2 = new iam.CfnPolicy(this, 'PipelineBuildLambdaBuildCodePipelineActionRoleDefaultPolicy3CA005F2', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: lambdaBuildProject7E2dab11.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildLambdaBuildCodePipelineActionRoleDefaultPolicy3CA005F2',
      roles: [
        pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployRole89Ca1043 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployRole89Ca1043' to be undefined. Fixit.`); }
    const pipelineDeployLambdaCfnDeployCodePipelineActionRoleDefaultPolicy54A1ab67 = new iam.CfnPolicy(this, 'PipelineDeployLambdaCFNDeployCodePipelineActionRoleDefaultPolicy54A1AB67', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: pipelineDeployLambdaCfnDeployRole89Ca1043.attrArn,
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
            ],
            Effect: 'Allow',
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
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
              ':stack/LambdaStackDeployedName/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineDeployLambdaCFNDeployCodePipelineActionRoleDefaultPolicy54A1AB67',
      roles: [
        pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployRole89Ca1043 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployRole89Ca1043' to be undefined. Fixit.`); }
    const pipelineDeployLambdaCfnDeployRoleDefaultPolicyE83fd793 = new iam.CfnPolicy(this, 'PipelineDeployLambdaCFNDeployRoleDefaultPolicyE83FD793', {
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
            ],
            Effect: 'Allow',
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          },
          {
            Action: '*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineDeployLambdaCFNDeployRoleDefaultPolicyE83FD793',
      roles: [
        pipelineDeployLambdaCfnDeployRole89Ca1043.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBuildCdkBuildCodePipelineActionRole15F4b424 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCdkBuildCodePipelineActionRole15F4b424' to be undefined. Fixit.`); }
    if (pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8' to be undefined. Fixit.`); }
    if (pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60' to be undefined. Fixit.`); }
    const pipelineRoleDefaultPolicyC7a05455 = new iam.CfnPolicy(this, 'PipelineRoleDefaultPolicyC7A05455', {
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
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
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineBuildCdkBuildCodePipelineActionRole15F4b424.attrArn,
              pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9.attrArn,
              pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488.attrArn,
              pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8.attrArn,
              pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineRoleDefaultPolicyC7A05455',
      roles: [
        pipelineRoleD68726f7.ref,
      ],
    });

    if (cdkCodeRepo7D2ec742 == null) { throw new Error(`A combination of conditions caused 'cdkCodeRepo7D2ec742' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8' to be undefined. Fixit.`); }
    const pipelineSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicy219D4917 = new iam.CfnPolicy(this, 'PipelineSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicy219D4917', {
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
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
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
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
            Resource: cdkCodeRepo7D2ec742.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineSourceCdkCodeSourceCodePipelineActionRoleDefaultPolicy219D4917',
      roles: [
        pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8.ref,
      ],
    });

    if (lambdaCodeRepoE08dd409 == null) { throw new Error(`A combination of conditions caused 'lambdaCodeRepoE08dd409' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60' to be undefined. Fixit.`); }
    const pipelineSourceLambdaCodeSourceCodePipelineActionRoleDefaultPolicyAd234a91 = new iam.CfnPolicy(this, 'PipelineSourceLambdaCodeSourceCodePipelineActionRoleDefaultPolicyAD234A91', {
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
              pipelineArtifactsBucket22248F97.attrArn,
              [
                pipelineArtifactsBucket22248F97.attrArn,
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
            Resource: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
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
            Resource: lambdaCodeRepoE08dd409.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineSourceLambdaCodeSourceCodePipelineActionRoleDefaultPolicyAD234A91',
      roles: [
        pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60.ref,
      ],
    });

    if (cdkBuildProject9382C38d == null) { throw new Error(`A combination of conditions caused 'cdkBuildProject9382C38d' to be undefined. Fixit.`); }
    if (cdkCodeRepo7D2ec742 == null) { throw new Error(`A combination of conditions caused 'cdkCodeRepo7D2ec742' to be undefined. Fixit.`); }
    if (lambdaBuildProject7E2dab11 == null) { throw new Error(`A combination of conditions caused 'lambdaBuildProject7E2dab11' to be undefined. Fixit.`); }
    if (lambdaCodeRepoE08dd409 == null) { throw new Error(`A combination of conditions caused 'lambdaCodeRepoE08dd409' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBuildCdkBuildCodePipelineActionRole15F4b424 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCdkBuildCodePipelineActionRole15F4b424' to be undefined. Fixit.`); }
    if (pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488' to be undefined. Fixit.`); }
    if (pipelineDeployLambdaCfnDeployRole89Ca1043 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployLambdaCfnDeployRole89Ca1043' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8' to be undefined. Fixit.`); }
    if (pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60' to be undefined. Fixit.`); }
    const pipelineC660917d = new codepipeline.CfnPipeline(this, 'PipelineC660917D', {
      artifactStore: {
        encryptionKey: {
          id: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          type: 'KMS',
        },
        location: pipelineArtifactsBucket22248F97.ref,
        type: 'S3',
      },
      roleArn: pipelineRoleD68726f7.attrArn,
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
                RepositoryName: cdkCodeRepo7D2ec742.attrName,
                BranchName: 'main',
                PollForSourceChanges: false,
              },
              name: 'CdkCode_Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_CdkCode_Source',
                },
              ],
              roleArn: pipelineSourceCdkCodeSourceCodePipelineActionRole237947B8.attrArn,
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
                RepositoryName: lambdaCodeRepoE08dd409.attrName,
                BranchName: 'main',
                PollForSourceChanges: false,
              },
              name: 'LambdaCode_Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_LambdaCode_Source',
                },
              ],
              roleArn: pipelineSourceLambdaCodeSourceCodePipelineActionRole4E89ef60.attrArn,
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
                ProjectName: cdkBuildProject9382C38d.ref,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_CdkCode_Source',
                },
              ],
              name: 'CDK_Build',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_CDK_Build',
                },
              ],
              roleArn: pipelineBuildCdkBuildCodePipelineActionRole15F4b424.attrArn,
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
                ProjectName: lambdaBuildProject7E2dab11.ref,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_LambdaCode_Source',
                },
              ],
              name: 'Lambda_Build',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_Lambda_Build',
                },
              ],
              roleArn: pipelineBuildLambdaBuildCodePipelineActionRole2Dae39e9.attrArn,
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
                StackName: 'LambdaStackDeployedName',
                Capabilities: 'CAPABILITY_NAMED_IAM',
                RoleArn: pipelineDeployLambdaCfnDeployRole89Ca1043.attrArn,
                ParameterOverrides: '{\"LambdaLambdaSourceBucketNameParameter159473FC\":{\"Fn::GetArtifactAtt\":[\"Artifact_Build_Lambda_Build\",\"BucketName\"]},\"LambdaLambdaSourceObjectKeyParameter06573F1D\":{\"Fn::GetArtifactAtt\":[\"Artifact_Build_Lambda_Build\",\"ObjectKey\"]}}',
                ActionMode: 'CREATE_UPDATE',
                TemplatePath: 'Artifact_Build_CDK_Build::LambdaStack.template.yaml',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Build_Lambda_Build',
                },
                {
                  name: 'Artifact_Build_CDK_Build',
                },
              ],
              name: 'Lambda_CFN_Deploy',
              roleArn: pipelineDeployLambdaCfnDeployCodePipelineActionRoleF8a74488.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Deploy',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);

    if (cdkCodeRepo7D2ec742 == null) { throw new Error(`A combination of conditions caused 'cdkCodeRepo7D2ec742' to be undefined. Fixit.`); }
    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const cdkCodeRepoPipelineStackPipeline9Db740afEventRule97707F9a = new events.CfnRule(this, 'CdkCodeRepoPipelineStackPipeline9DB740AFEventRule97707F9A', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          cdkCodeRepo7D2ec742.attrArn,
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
            'main',
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
            pipelineC660917d.ref,
          ].join(''),
          id: 'Target0',
          roleArn: pipelineEventsRole46Beea7c.attrArn,
        },
      ],
    });

    if (lambdaCodeRepoE08dd409 == null) { throw new Error(`A combination of conditions caused 'lambdaCodeRepoE08dd409' to be undefined. Fixit.`); }
    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const lambdaCodeRepoPipelineStackPipeline9Db740afEventRule2C34743d = new events.CfnRule(this, 'LambdaCodeRepoPipelineStackPipeline9DB740AFEventRule2C34743D', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          lambdaCodeRepoE08dd409.attrArn,
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
            'main',
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
            pipelineC660917d.ref,
          ].join(''),
          id: 'Target0',
          roleArn: pipelineEventsRole46Beea7c.attrArn,
        },
      ],
    });

    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const pipelineEventsRoleDefaultPolicyFf4fcce0 = new iam.CfnPolicy(this, 'PipelineEventsRoleDefaultPolicyFF4FCCE0', {
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
              pipelineC660917d.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineEventsRoleDefaultPolicyFF4FCCE0',
      roles: [
        pipelineEventsRole46Beea7c.ref,
      ],
    });
  }
}

