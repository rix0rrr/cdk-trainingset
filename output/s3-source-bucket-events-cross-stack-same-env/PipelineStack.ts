import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
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

    const pipelineBuildCodePipelineActionRoleD77a08e6 = new iam.CfnRole(this, 'PipelineBuildCodePipelineActionRoleD77A08E6', {
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

    const pipelineSourceCodePipelineActionRoleC6f9e7f5 = new iam.CfnRole(this, 'PipelineSourceCodePipelineActionRoleC6F9E7F5', {
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

    const projectRole4Ccb274e = new iam.CfnRole(this, 'ProjectRole4CCB274E', {
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

    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectC78d97ad = new codebuild.CfnProject(this, 'ProjectC78D97AD', {
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
      serviceRole: projectRole4Ccb274e.attrArn,
      source: {
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
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

    if (pipelineBuildCodePipelineActionRoleD77a08e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCodePipelineActionRoleD77a08e6' to be undefined. Fixit.`); }
    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    const pipelineBuildCodePipelineActionRoleDefaultPolicyC9cb73f8 = new iam.CfnPolicy(this, 'PipelineBuildCodePipelineActionRoleDefaultPolicyC9CB73F8', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: projectC78d97ad.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildCodePipelineActionRoleDefaultPolicyC9CB73F8',
      roles: [
        pipelineBuildCodePipelineActionRoleD77a08e6.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBuildCodePipelineActionRoleD77a08e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCodePipelineActionRoleD77a08e6' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
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
              pipelineBuildCodePipelineActionRoleD77a08e6.attrArn,
              pipelineSourceCodePipelineActionRoleC6f9e7f5.attrArn,
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

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
    const pipelineSourceCodePipelineActionRoleDefaultPolicy2D565925 = new iam.CfnPolicy(this, 'PipelineSourceCodePipelineActionRoleDefaultPolicy2D565925', {
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
              cdk.Fn.importValue('BucketStack:ExportsOutputFnGetAttBucket83908E77Arn063C8555'),
              [
                cdk.Fn.importValue('BucketStack:ExportsOutputFnGetAttBucket83908E77Arn063C8555'),
                '/file.zip',
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
      policyName: 'PipelineSourceCodePipelineActionRoleDefaultPolicy2D565925',
      roles: [
        pipelineSourceCodePipelineActionRoleC6f9e7f5.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectRoleDefaultPolicy7F29461b = new iam.CfnPolicy(this, 'ProjectRoleDefaultPolicy7F29461B', {
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
                projectC78d97ad.ref,
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
                projectC78d97ad.ref,
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
              projectC78d97ad.ref,
              '-*',
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
      policyName: 'ProjectRoleDefaultPolicy7F29461B',
      roles: [
        projectRole4Ccb274e.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBuildCodePipelineActionRoleD77a08e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildCodePipelineActionRoleD77a08e6' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    const pipelineC660917d = new codepipeline.CfnPipeline(this, 'PipelineC660917D', {
      roleArn: pipelineRoleD68726f7.attrArn,
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
                S3Bucket: cdk.Fn.importValue('BucketStack:ExportsOutputRefBucket83908E7781C90AC0'),
                S3ObjectKey: 'file.zip',
                PollForSourceChanges: false,
              },
              name: 'Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_Source',
                },
              ],
              roleArn: pipelineSourceCodePipelineActionRoleC6f9e7f5.attrArn,
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
                ProjectName: projectC78d97ad.ref,
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_Source',
                },
              ],
              name: 'Build',
              roleArn: pipelineBuildCodePipelineActionRoleD77a08e6.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
      ],
      artifactStore: {
        encryptionKey: {
          id: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
          type: 'KMS',
        },
        location: pipelineArtifactsBucket22248F97.ref,
        type: 'S3',
      },
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);

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

    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const pipelinePipelineStackPipeline9Db740afSourceEventRulefilezipE8d1f0ef = new events.CfnRule(this, 'PipelinePipelineStackPipeline9DB740AFSourceEventRulefilezipE8D1F0EF', {
      eventPattern: {
        source: [
          'aws.s3',
        ],
        'detail-type': [
          'AWS API Call via CloudTrail',
        ],
        detail: {
          resources: {
            ARN: [
              [
                cdk.Fn.importValue('BucketStack:ExportsOutputFnGetAttBucket83908E77Arn063C8555'),
                '/file.zip',
              ].join(''),
            ],
          },
          eventName: [
            'CompleteMultipartUpload',
            'CopyObject',
            'PutObject',
          ],
          requestParameters: {
            bucketName: [
              cdk.Fn.importValue('BucketStack:ExportsOutputRefBucket83908E7781C90AC0'),
            ],
            key: [
              'file.zip',
            ],
          },
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
  }
}

