import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineCloudformationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineCloudformation extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineCloudformationProps = {}) {
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

    const pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b = new iam.CfnRole(this, 'PipelineDeployApproveChangesCodePipelineActionRole5AA6E21B', {
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

    const pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f = new iam.CfnRole(this, 'PipelineDeployExecuteChangesCodePipelineActionRole6AA2756F', {
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

    const pipelineDeployPrepareChangesCodePipelineActionRole41931444 = new iam.CfnRole(this, 'PipelineDeployPrepareChangesCodePipelineActionRole41931444', {
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

    const pipelineDeployPrepareChangesRoleD28c853c = new iam.CfnRole(this, 'PipelineDeployPrepareChangesRoleD28C853C', {
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

    const templateRepo2326F199 = new codecommit.CfnRepository(this, 'TemplateRepo2326F199', {
      repositoryName: 'template-repo',
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
      aliasName: 'alias/codepipeline-aws-cdk-codepipeline-cloudformation-pipeline-7dbde619',
      targetKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias5C510eee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f == null) { throw new Error(`A combination of conditions caused 'pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f' to be undefined. Fixit.`); }
    const pipelineDeployExecuteChangesCodePipelineActionRoleDefaultPolicy70764525 = new iam.CfnPolicy(this, 'PipelineDeployExecuteChangesCodePipelineActionRoleDefaultPolicy70764525', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'cloudformation:DescribeChangeSet',
              'cloudformation:DescribeStacks',
              'cloudformation:ExecuteChangeSet',
            ],
            Condition: {
              StringEqualsIfExists: {
                'cloudformation:ChangeSetName': 'StagedChangeSet',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':cloudformation:',
              this.region,
              ':',
              this.account,
              ':stack/OurStack/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineDeployExecuteChangesCodePipelineActionRoleDefaultPolicy70764525',
      roles: [
        pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f.ref,
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
    if (pipelineDeployPrepareChangesCodePipelineActionRole41931444 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesCodePipelineActionRole41931444' to be undefined. Fixit.`); }
    if (pipelineDeployPrepareChangesRoleD28c853c == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesRoleD28c853c' to be undefined. Fixit.`); }
    const pipelineDeployPrepareChangesCodePipelineActionRoleDefaultPolicyAd3c24a3 = new iam.CfnPolicy(this, 'PipelineDeployPrepareChangesCodePipelineActionRoleDefaultPolicyAD3C24A3', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: pipelineDeployPrepareChangesRoleD28c853c.attrArn,
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
              'cloudformation:CreateChangeSet',
              'cloudformation:DeleteChangeSet',
              'cloudformation:DescribeChangeSet',
              'cloudformation:DescribeStacks',
            ],
            Condition: {
              StringEqualsIfExists: {
                'cloudformation:ChangeSetName': 'StagedChangeSet',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':cloudformation:',
              this.region,
              ':',
              this.account,
              ':stack/OurStack/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineDeployPrepareChangesCodePipelineActionRoleDefaultPolicyAD3C24A3',
      roles: [
        pipelineDeployPrepareChangesCodePipelineActionRole41931444.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineDeployPrepareChangesRoleD28c853c == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesRoleD28c853c' to be undefined. Fixit.`); }
    const pipelineDeployPrepareChangesRoleDefaultPolicy8Cdccd73 = new iam.CfnPolicy(this, 'PipelineDeployPrepareChangesRoleDefaultPolicy8CDCCD73', {
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
      policyName: 'PipelineDeployPrepareChangesRoleDefaultPolicy8CDCCD73',
      roles: [
        pipelineDeployPrepareChangesRoleD28c853c.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b == null) { throw new Error(`A combination of conditions caused 'pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b' to be undefined. Fixit.`); }
    if (pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f == null) { throw new Error(`A combination of conditions caused 'pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f' to be undefined. Fixit.`); }
    if (pipelineDeployPrepareChangesCodePipelineActionRole41931444 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesCodePipelineActionRole41931444' to be undefined. Fixit.`); }
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
              pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b.attrArn,
              pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f.attrArn,
              pipelineDeployPrepareChangesCodePipelineActionRole41931444.attrArn,
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
    if (templateRepo2326F199 == null) { throw new Error(`A combination of conditions caused 'templateRepo2326F199' to be undefined. Fixit.`); }
    const pipelineSourceCodePipelineActionRoleDefaultPolicy2D565925 = new iam.CfnPolicy(this, 'PipelineSourceCodePipelineActionRoleDefaultPolicy2D565925', {
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
            Resource: templateRepo2326F199.attrArn,
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
    if (pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b == null) { throw new Error(`A combination of conditions caused 'pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b' to be undefined. Fixit.`); }
    if (pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f == null) { throw new Error(`A combination of conditions caused 'pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f' to be undefined. Fixit.`); }
    if (pipelineDeployPrepareChangesCodePipelineActionRole41931444 == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesCodePipelineActionRole41931444' to be undefined. Fixit.`); }
    if (pipelineDeployPrepareChangesRoleD28c853c == null) { throw new Error(`A combination of conditions caused 'pipelineDeployPrepareChangesRoleD28c853c' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
    if (templateRepo2326F199 == null) { throw new Error(`A combination of conditions caused 'templateRepo2326F199' to be undefined. Fixit.`); }
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
                RepositoryName: templateRepo2326F199.attrName,
                BranchName: 'main',
                PollForSourceChanges: true,
              },
              name: 'Source',
              outputArtifacts: [
                {
                  name: 'SourceArtifact',
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
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'OurStack',
                Capabilities: 'CAPABILITY_NAMED_IAM',
                RoleArn: pipelineDeployPrepareChangesRoleD28c853c.attrArn,
                ActionMode: 'CHANGE_SET_REPLACE',
                ChangeSetName: 'StagedChangeSet',
                TemplatePath: 'SourceArtifact::template.yaml',
              },
              inputArtifacts: [
                {
                  name: 'SourceArtifact',
                },
              ],
              name: 'PrepareChanges',
              roleArn: pipelineDeployPrepareChangesCodePipelineActionRole41931444.attrArn,
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Approval',
                owner: 'AWS',
                provider: 'Manual',
                version: '1',
              },
              name: 'ApproveChanges',
              roleArn: pipelineDeployApproveChangesCodePipelineActionRole5Aa6e21b.attrArn,
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
                StackName: 'OurStack',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'StagedChangeSet',
              },
              name: 'ExecuteChanges',
              roleArn: pipelineDeployExecuteChangesCodePipelineActionRole6Aa2756f.attrArn,
              runOrder: 3,
            },
          ],
          name: 'Deploy',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);
  }
}

