import * as cdk from 'aws-cdk-lib';
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
    const cfnChangeSetRole6F05f6fc = new iam.CfnRole(this, 'CfnChangeSetRole6F05F6FC', {
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

    const pipelineBucketB967bd35 = new s3.CfnBucket(this, 'PipelineBucketB967BD35', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    pipelineBucketB967bd35.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd = new iam.CfnRole(this, 'PipelineCFNDeployCFNCodePipelineActionRole444CF5DD', {
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

    const pipelineSourceAdditionalSourceCodePipelineActionRole0897461A = new iam.CfnRole(this, 'PipelineSourceAdditionalSourceCodePipelineActionRole0897461A', {
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

    if (cfnChangeSetRole6F05f6fc == null) { throw new Error(`A combination of conditions caused 'cfnChangeSetRole6F05f6fc' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd == null) { throw new Error(`A combination of conditions caused 'pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd' to be undefined. Fixit.`); }
    const pipelineCfnDeployCfnCodePipelineActionRoleDefaultPolicy9C068517 = new iam.CfnPolicy(this, 'PipelineCFNDeployCFNCodePipelineActionRoleDefaultPolicy9C068517', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: cfnChangeSetRole6F05f6fc.attrArn,
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
                'cloudformation:ChangeSetName': 'ChangeSetIntegTest',
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
              ':stack/IntegTest-TestActionStack/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineCFNDeployCFNCodePipelineActionRoleDefaultPolicy9C068517',
      roles: [
        pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd == null) { throw new Error(`A combination of conditions caused 'pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineSourceAdditionalSourceCodePipelineActionRole0897461A == null) { throw new Error(`A combination of conditions caused 'pipelineSourceAdditionalSourceCodePipelineActionRole0897461A' to be undefined. Fixit.`); }
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
              pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd.attrArn,
              pipelineSourceAdditionalSourceCodePipelineActionRole0897461A.attrArn,
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
    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
    if (pipelineSourceAdditionalSourceCodePipelineActionRole0897461A == null) { throw new Error(`A combination of conditions caused 'pipelineSourceAdditionalSourceCodePipelineActionRole0897461A' to be undefined. Fixit.`); }
    const pipelineSourceAdditionalSourceCodePipelineActionRoleDefaultPolicy9B326ccb = new iam.CfnPolicy(this, 'PipelineSourceAdditionalSourceCodePipelineActionRoleDefaultPolicy9B326CCB', {
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
              pipelineBucketB967bd35.attrArn,
              [
                pipelineBucketB967bd35.attrArn,
                '/additional/key',
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
      policyName: 'PipelineSourceAdditionalSourceCodePipelineActionRoleDefaultPolicy9B326CCB',
      roles: [
        pipelineSourceAdditionalSourceCodePipelineActionRole0897461A.ref,
      ],
    });

    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
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
              pipelineBucketB967bd35.attrArn,
              [
                pipelineBucketB967bd35.attrArn,
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

    if (cfnChangeSetRole6F05f6fc == null) { throw new Error(`A combination of conditions caused 'cfnChangeSetRole6F05f6fc' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
    if (pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd == null) { throw new Error(`A combination of conditions caused 'pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceAdditionalSourceCodePipelineActionRole0897461A == null) { throw new Error(`A combination of conditions caused 'pipelineSourceAdditionalSourceCodePipelineActionRole0897461A' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
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
                S3Bucket: pipelineBucketB967bd35.ref,
                S3ObjectKey: 'key',
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
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'S3',
                version: '1',
              },
              configuration: {
                S3Bucket: pipelineBucketB967bd35.ref,
                S3ObjectKey: 'additional/key',
              },
              name: 'AdditionalSource',
              outputArtifacts: [
                {
                  name: 'AdditionalArtifact',
                },
              ],
              roleArn: pipelineSourceAdditionalSourceCodePipelineActionRole0897461A.attrArn,
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
                StackName: 'IntegTest-TestActionStack',
                RoleArn: cfnChangeSetRole6F05f6fc.attrArn,
                ParameterOverrides: '{\"BucketName\":{\"Fn::GetArtifactAtt\":[\"SourceArtifact\",\"BucketName\"]},\"ObjectKey\":{\"Fn::GetArtifactAtt\":[\"SourceArtifact\",\"ObjectKey\"]},\"Url\":{\"Fn::GetArtifactAtt\":[\"AdditionalArtifact\",\"URL\"]},\"OtherParam\":{\"Fn::GetParam\":[\"SourceArtifact\",\"params.json\",\"OtherParam\"]}}',
                ActionMode: 'CHANGE_SET_REPLACE',
                ChangeSetName: 'ChangeSetIntegTest',
                TemplatePath: 'SourceArtifact::test.yaml',
              },
              inputArtifacts: [
                {
                  name: 'AdditionalArtifact',
                },
                {
                  name: 'SourceArtifact',
                },
              ],
              name: 'DeployCFN',
              roleArn: pipelineCfnDeployCfnCodePipelineActionRole444Cf5dd.attrArn,
              runOrder: 1,
            },
          ],
          name: 'CFN',
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
  }
}

