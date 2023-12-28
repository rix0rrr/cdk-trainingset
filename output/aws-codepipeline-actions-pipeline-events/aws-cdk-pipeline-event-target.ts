import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-cdk-pipeline-event-targetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-pipeline-event-target extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-pipeline-event-targetProps = {}) {
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
    const buildProjectRoleAa92c755 = new iam.CfnRole(this, 'BuildProjectRoleAA92C755', {
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

    const codeCommitRepoDc6a41f9 = new codecommit.CfnRepository(this, 'CodeCommitRepoDC6A41F9', {
      repositoryName: 'foo',
    });

    const myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 = new kms.CfnKey(this, 'MyPipelineArtifactsBucketEncryptionKey8BF0A7F3', {
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
    myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7 = new iam.CfnRole(this, 'MyPipelineBuildCodeBuildActionCodePipelineActionRole3185ADC7', {
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

    const myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f = new iam.CfnRole(this, 'MyPipelineSourceCodeCommitSourceCodePipelineActionRole0B6D0F4F', {
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

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (buildProjectRoleAa92c755 == null) { throw new Error(`A combination of conditions caused 'buildProjectRoleAa92c755' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const buildProject097C5db7 = new codebuild.CfnProject(this, 'BuildProject097C5DB7', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: buildProjectRoleAa92c755.attrArn,
      source: {
        type: 'CODEPIPELINE',
      },
    });

    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucket727923Dd = new s3.CfnBucket(this, 'MyPipelineArtifactsBucket727923DD', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
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
    myPipelineArtifactsBucket727923Dd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucketEncryptionKeyAlias9D4f8c59 = new kms.CfnAlias(this, 'MyPipelineArtifactsBucketEncryptionKeyAlias9D4F8C59', {
      aliasName: 'alias/codepipeline-aws-cdk-pipeline-event-target-mypipeline-4ae5d407',
      targetKeyId: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
    });
    myPipelineArtifactsBucketEncryptionKeyAlias9D4f8c59.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myTopicPolicy12A5ec17 = new sns.CfnTopicPolicy(this, 'MyTopicPolicy12A5EC17', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myTopic86869434.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myTopic86869434.ref,
      ],
    });

    if (buildProject097C5db7 == null) { throw new Error(`A combination of conditions caused 'buildProject097C5db7' to be undefined. Fixit.`); }
    if (buildProjectRoleAa92c755 == null) { throw new Error(`A combination of conditions caused 'buildProjectRoleAa92c755' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const buildProjectRoleDefaultPolicy3E9f248c = new iam.CfnPolicy(this, 'BuildProjectRoleDefaultPolicy3E9F248C', {
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
                buildProject097C5db7.ref,
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
                buildProject097C5db7.ref,
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
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
            Resource: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'BuildProjectRoleDefaultPolicy3E9F248C',
      roles: [
        buildProjectRoleAa92c755.ref,
      ],
    });

    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucketPolicyDfda675b = new s3.CfnBucketPolicy(this, 'MyPipelineArtifactsBucketPolicyDFDA675B', {
      bucket: myPipelineArtifactsBucket727923Dd.ref,
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (buildProject097C5db7 == null) { throw new Error(`A combination of conditions caused 'buildProject097C5db7' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7 == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7' to be undefined. Fixit.`); }
    const myPipelineBuildCodeBuildActionCodePipelineActionRoleDefaultPolicy96378Df6 = new iam.CfnPolicy(this, 'MyPipelineBuildCodeBuildActionCodePipelineActionRoleDefaultPolicy96378DF6', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: buildProject097C5db7.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineBuildCodeBuildActionCodePipelineActionRoleDefaultPolicy96378DF6',
      roles: [
        myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7.ref,
      ],
    });

    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7 == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f' to be undefined. Fixit.`); }
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
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
            Resource: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7.attrArn,
              myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f.attrArn,
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

    if (codeCommitRepoDc6a41f9 == null) { throw new Error(`A combination of conditions caused 'codeCommitRepoDc6a41f9' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f' to be undefined. Fixit.`); }
    const myPipelineSourceCodeCommitSourceCodePipelineActionRoleDefaultPolicyE6664925 = new iam.CfnPolicy(this, 'MyPipelineSourceCodeCommitSourceCodePipelineActionRoleDefaultPolicyE6664925', {
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
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
            Resource: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
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
            Resource: codeCommitRepoDc6a41f9.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineSourceCodeCommitSourceCodePipelineActionRoleDefaultPolicyE6664925',
      roles: [
        myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f.ref,
      ],
    });

    if (buildProject097C5db7 == null) { throw new Error(`A combination of conditions caused 'buildProject097C5db7' to be undefined. Fixit.`); }
    if (codeCommitRepoDc6a41f9 == null) { throw new Error(`A combination of conditions caused 'codeCommitRepoDc6a41f9' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7 == null) { throw new Error(`A combination of conditions caused 'myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineRoleDefaultPolicy34F09efa == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleDefaultPolicy34F09efa' to be undefined. Fixit.`); }
    if (myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f' to be undefined. Fixit.`); }
    const myPipelineAed38ecf = new codepipeline.CfnPipeline(this, 'MyPipelineAED38ECF', {
      artifactStore: {
        encryptionKey: {
          id: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          type: 'KMS',
        },
        location: myPipelineArtifactsBucket727923Dd.ref,
        type: 'S3',
      },
      roleArn: myPipelineRoleC0d47ca4.attrArn,
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
                RepositoryName: codeCommitRepoDc6a41f9.attrName,
                BranchName: 'main',
                PollForSourceChanges: true,
              },
              name: 'CodeCommitSource',
              outputArtifacts: [
                {
                  name: 'Source',
                },
              ],
              roleArn: myPipelineSourceCodeCommitSourceCodePipelineActionRole0B6d0f4f.attrArn,
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
                ProjectName: buildProject097C5db7.ref,
              },
              inputArtifacts: [
                {
                  name: 'Source',
                },
              ],
              name: 'CodeBuildAction',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_CodeBuildAction',
                },
              ],
              roleArn: myPipelineBuildCodeBuildActionCodePipelineActionRole3185Adc7.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
      ],
    });
    myPipelineAed38ecf.addDependency(myPipelineRoleDefaultPolicy34F09efa);
    myPipelineAed38ecf.addDependency(myPipelineRoleC0d47ca4);

    if (myPipelineAed38ecf == null) { throw new Error(`A combination of conditions caused 'myPipelineAed38ecf' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myPipelineOnPipelineStateChangeA017e4b1 = new events.CfnRule(this, 'MyPipelineOnPipelineStateChangeA017E4B1', {
      eventPattern: {
        source: [
          'aws.codepipeline',
        ],
        resources: [
          [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            myPipelineAed38ecf.ref,
          ].join(''),
        ],
        'detail-type': [
          'CodePipeline Pipeline Execution State Change',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
          inputTransformer: {
            inputPathsMap: {
              'detail-pipeline': '$.detail.pipeline',
              'detail-state': '$.detail.state',
            },
            inputTemplate: '\"Pipeline <detail-pipeline> changed state to <detail-state>\"',
          },
        },
      ],
    });

    if (myPipelineAed38ecf == null) { throw new Error(`A combination of conditions caused 'myPipelineAed38ecf' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myPipelineSourceCodeCommitSourceOnActionStateChangeDcaf781a = new events.CfnRule(this, 'MyPipelineSourceCodeCommitSourceOnActionStateChangeDCAF781A', {
      eventPattern: {
        'detail-type': [
          'CodePipeline Action Execution State Change',
        ],
        source: [
          'aws.codepipeline',
        ],
        resources: [
          [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            myPipelineAed38ecf.ref,
          ].join(''),
        ],
        detail: {
          stage: [
            'Source',
          ],
          action: [
            'CodeCommitSource',
          ],
          state: [
            'STARTED',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
        },
      ],
    });

    if (myPipelineAed38ecf == null) { throw new Error(`A combination of conditions caused 'myPipelineAed38ecf' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myPipelineSourceOnSourceStateChange6Dee3a75 = new events.CfnRule(this, 'MyPipelineSourceOnSourceStateChange6DEE3A75', {
      eventPattern: {
        'detail-type': [
          'CodePipeline Stage Execution State Change',
        ],
        source: [
          'aws.codepipeline',
        ],
        resources: [
          [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            myPipelineAed38ecf.ref,
          ].join(''),
        ],
        detail: {
          stage: [
            'Source',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
        },
      ],
    });
  }
}

