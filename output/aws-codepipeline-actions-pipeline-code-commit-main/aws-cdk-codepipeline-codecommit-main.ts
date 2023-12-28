import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineCodecommitMainProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineCodecommitMain extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineCodecommitMainProps = {}) {
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

    const pipelinebuildmanualCodePipelineActionRoleE3306ab0 = new iam.CfnRole(this, 'PipelinebuildmanualCodePipelineActionRoleE3306AB0', {
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
      aliasName: 'alias/codepipeline-aws-cdk-codepipeline-codecommit-main-pipeline-f8d5f90e',
      targetKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias5C510eee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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
    if (pipelinebuildmanualCodePipelineActionRoleE3306ab0 == null) { throw new Error(`A combination of conditions caused 'pipelinebuildmanualCodePipelineActionRoleE3306ab0' to be undefined. Fixit.`); }
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
              pipelinebuildmanualCodePipelineActionRoleE3306ab0.attrArn,
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

    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelinebuildmanualCodePipelineActionRoleE3306ab0 == null) { throw new Error(`A combination of conditions caused 'pipelinebuildmanualCodePipelineActionRoleE3306ab0' to be undefined. Fixit.`); }
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
                PollForSourceChanges: false,
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
                category: 'Approval',
                owner: 'AWS',
                provider: 'Manual',
                version: '1',
              },
              name: 'manual',
              roleArn: pipelinebuildmanualCodePipelineActionRoleE3306ab0.attrArn,
              runOrder: 1,
            },
          ],
          name: 'build',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);

    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const myRepoawscdkcodepipelinecodecommitmainPipelineF8d5f90eEventRuleE781b91a = new events.CfnRule(this, 'MyRepoawscdkcodepipelinecodecommitmainPipelineF8D5F90EEventRuleE781B91A', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          myRepoF4f48043.attrArn,
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

