import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codepipeline-codecommit-codebuildProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-codecommit-codebuild extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-codecommit-codebuildProps = {}) {
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
    const myBuildProjectRole6B7e2258 = new iam.CfnRole(this, 'MyBuildProjectRole6B7E2258', {
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

    const myRepoF4f48043 = new codecommit.CfnRepository(this, 'MyRepoF4F48043', {
      repositoryName: 'my-repo',
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

    const pipelinebuildCodePipelineActionRole11Bcd4ff = new iam.CfnRole(this, 'PipelinebuildCodePipelineActionRole11BCD4FF', {
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

    const pipelinebuildtestCodePipelineActionRole467D0dfa = new iam.CfnRole(this, 'PipelinebuildtestCodePipelineActionRole467D0DFA', {
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

    const pipelinesourceCodePipelineActionRoleB7e0306a = new iam.CfnRole(this, 'PipelinesourceCodePipelineActionRoleB7E0306A', {
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

    if (myBuildProjectRole6B7e2258 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectRole6B7e2258' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const myBuildProject30Db9d6e = new codebuild.CfnProject(this, 'MyBuildProject30DB9D6E', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: myBuildProjectRole6B7e2258.attrArn,
      source: {
        type: 'CODEPIPELINE',
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
      aliasName: 'alias/codepipeline-aws-cdk-codepipeline-codecommit-codebuild-pipeline-9540e1f5',
      targetKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias5C510eee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myBuildProjectRole6B7e2258 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectRole6B7e2258' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    const myBuildProjectRoleDefaultPolicy5604Aa87 = new iam.CfnPolicy(this, 'MyBuildProjectRoleDefaultPolicy5604AA87', {
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
                myBuildProject30Db9d6e.ref,
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
                myBuildProject30Db9d6e.ref,
              ].join(''),
            ],
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
          {
            Action: 'ssm:GetParameters',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/param_store',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyBuildProjectRoleDefaultPolicy5604AA87',
      roles: [
        myBuildProjectRole6B7e2258.ref,
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

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelinebuildCodePipelineActionRole11Bcd4ff == null) { throw new Error(`A combination of conditions caused 'pipelinebuildCodePipelineActionRole11Bcd4ff' to be undefined. Fixit.`); }
    if (pipelinebuildtestCodePipelineActionRole467D0dfa == null) { throw new Error(`A combination of conditions caused 'pipelinebuildtestCodePipelineActionRole467D0dfa' to be undefined. Fixit.`); }
    if (pipelinesourceCodePipelineActionRoleB7e0306a == null) { throw new Error(`A combination of conditions caused 'pipelinesourceCodePipelineActionRoleB7e0306a' to be undefined. Fixit.`); }
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
              pipelinebuildCodePipelineActionRole11Bcd4ff.attrArn,
              pipelinebuildtestCodePipelineActionRole467D0dfa.attrArn,
              pipelinesourceCodePipelineActionRoleB7e0306a.attrArn,
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

    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (pipelinebuildCodePipelineActionRole11Bcd4ff == null) { throw new Error(`A combination of conditions caused 'pipelinebuildCodePipelineActionRole11Bcd4ff' to be undefined. Fixit.`); }
    const pipelinebuildCodePipelineActionRoleDefaultPolicyDc80dbc3 = new iam.CfnPolicy(this, 'PipelinebuildCodePipelineActionRoleDefaultPolicyDC80DBC3', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: myBuildProject30Db9d6e.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelinebuildCodePipelineActionRoleDefaultPolicyDC80DBC3',
      roles: [
        pipelinebuildCodePipelineActionRole11Bcd4ff.ref,
      ],
    });

    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (pipelinebuildtestCodePipelineActionRole467D0dfa == null) { throw new Error(`A combination of conditions caused 'pipelinebuildtestCodePipelineActionRole467D0dfa' to be undefined. Fixit.`); }
    const pipelinebuildtestCodePipelineActionRoleDefaultPolicy319Ea326 = new iam.CfnPolicy(this, 'PipelinebuildtestCodePipelineActionRoleDefaultPolicy319EA326', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: myBuildProject30Db9d6e.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelinebuildtestCodePipelineActionRoleDefaultPolicy319EA326',
      roles: [
        pipelinebuildtestCodePipelineActionRole467D0dfa.ref,
      ],
    });

    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelinesourceCodePipelineActionRoleB7e0306a == null) { throw new Error(`A combination of conditions caused 'pipelinesourceCodePipelineActionRoleB7e0306a' to be undefined. Fixit.`); }
    const pipelinesourceCodePipelineActionRoleDefaultPolicy9E69de83 = new iam.CfnPolicy(this, 'PipelinesourceCodePipelineActionRoleDefaultPolicy9E69DE83', {
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
            Resource: myRepoF4f48043.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelinesourceCodePipelineActionRoleDefaultPolicy9E69DE83',
      roles: [
        pipelinesourceCodePipelineActionRoleB7e0306a.ref,
      ],
    });

    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelinebuildCodePipelineActionRole11Bcd4ff == null) { throw new Error(`A combination of conditions caused 'pipelinebuildCodePipelineActionRole11Bcd4ff' to be undefined. Fixit.`); }
    if (pipelinebuildtestCodePipelineActionRole467D0dfa == null) { throw new Error(`A combination of conditions caused 'pipelinebuildtestCodePipelineActionRole467D0dfa' to be undefined. Fixit.`); }
    if (pipelinesourceCodePipelineActionRoleB7e0306a == null) { throw new Error(`A combination of conditions caused 'pipelinesourceCodePipelineActionRoleB7e0306a' to be undefined. Fixit.`); }
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
                RepositoryName: myRepoF4f48043.attrName,
                BranchName: 'main',
                PollForSourceChanges: true,
              },
              name: 'source',
              outputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              roleArn: pipelinesourceCodePipelineActionRoleB7e0306a.attrArn,
              runOrder: 1,
            },
          ],
          name: 'source',
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
                ProjectName: myBuildProject30Db9d6e.ref,
                EnvironmentVariables: '[{\"name\":\"TEST_ENV_VARIABLE\",\"type\":\"PLAINTEXT\",\"value\":\"test env variable value\"},{\"name\":\"PARAM_STORE_VARIABLE\",\"type\":\"PARAMETER_STORE\",\"value\":\"param_store\"}]',
              },
              inputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              name: 'build',
              outputArtifacts: [
                {
                  name: 'Artifact_build_build',
                },
              ],
              roleArn: pipelinebuildCodePipelineActionRole11Bcd4ff.attrArn,
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Test',
                owner: 'AWS',
                provider: 'CodeBuild',
                version: '1',
              },
              configuration: {
                ProjectName: myBuildProject30Db9d6e.ref,
              },
              inputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              name: 'test',
              roleArn: pipelinebuildtestCodePipelineActionRole467D0dfa.attrArn,
              runOrder: 1,
            },
          ],
          name: 'build',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);
  }
}

