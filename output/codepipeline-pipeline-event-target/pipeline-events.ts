import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface pipeline-eventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class pipeline-events extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: pipeline-eventsProps = {}) {
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
    const repo02Ac86cf = new codecommit.CfnRepository(this, 'Repo02AC86CF', {
      repositoryName: 'TestRepository',
    });

    const dlq09C78acc = new sqs.CfnQueue(this, 'dlq09C78ACC', {
    });
    dlq09C78acc.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2 = new kms.CfnKey(this, 'pipelinePipeline22F2A91DArtifactsBucketEncryptionKey87C796D2', {
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
    pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116 = new iam.CfnRole(this, 'pipelinePipeline22F2A91DBuildHelloCodePipelineActionRoleA9729116', {
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

    const pipelinePipeline22F2a91dEventsRole048D7f59 = new iam.CfnRole(this, 'pipelinePipeline22F2A91DEventsRole048D7F59', {
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

    const pipelinePipeline22F2a91dRole58B7b05e = new iam.CfnRole(this, 'pipelinePipeline22F2A91DRole58B7B05E', {
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

    const pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5 = new iam.CfnRole(this, 'pipelinePipeline22F2A91DSourceCodeCommitCodePipelineActionRoleE54633E5', {
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

    if (pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91dArtifactsBucketC1799dcd = new s3.CfnBucket(this, 'pipelinePipeline22F2A91DArtifactsBucketC1799DCD', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2.attrArn,
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
    pipelinePipeline22F2a91dArtifactsBucketC1799dcd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91dArtifactsBucketEncryptionKeyAlias9530209A = new kms.CfnAlias(this, 'pipelinePipeline22F2A91DArtifactsBucketEncryptionKeyAlias9530209A', {
      aliasName: 'alias/codepipeline-pipeline-events-pipelinepipeline22f2a91d-fbb66895',
      targetKeyId: pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2.attrArn,
    });
    pipelinePipeline22F2a91dArtifactsBucketEncryptionKeyAlias9530209A.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (pipelinePipeline22F2a91dArtifactsBucketC1799dcd == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketC1799dcd' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91dArtifactsBucketPolicy269103C2 = new s3.CfnBucketPolicy(this, 'pipelinePipeline22F2A91DArtifactsBucketPolicy269103C2', {
      bucket: pipelinePipeline22F2a91dArtifactsBucketC1799dcd.ref,
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
              pipelinePipeline22F2a91dArtifactsBucketC1799dcd.attrArn,
              [
                pipelinePipeline22F2a91dArtifactsBucketC1799dcd.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (pipelinePipeline22F2a91dArtifactsBucketC1799dcd == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketC1799dcd' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dRole58B7b05e == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dRole58B7b05e' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91dRoleDefaultPolicyCdee9d19 = new iam.CfnPolicy(this, 'pipelinePipeline22F2A91DRoleDefaultPolicyCDEE9D19', {
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
              pipelinePipeline22F2a91dArtifactsBucketC1799dcd.attrArn,
              [
                pipelinePipeline22F2a91dArtifactsBucketC1799dcd.attrArn,
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
            Resource: pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2.attrArn,
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116.attrArn,
              pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'pipelinePipeline22F2A91DRoleDefaultPolicyCDEE9D19',
      roles: [
        pipelinePipeline22F2a91dRole58B7b05e.ref,
      ],
    });

    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dArtifactsBucketC1799dcd == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketC1799dcd' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dRole58B7b05e == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dRole58B7b05e' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dRoleDefaultPolicyCdee9d19 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dRoleDefaultPolicyCdee9d19' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91deb5d089b = new codepipeline.CfnPipeline(this, 'pipelinePipeline22F2A91DEB5D089B', {
      roleArn: pipelinePipeline22F2a91dRole58B7b05e.attrArn,
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
                RepositoryName: repo02Ac86cf.attrName,
                BranchName: 'master',
              },
              name: 'CodeCommit',
              outputArtifacts: [
                {
                  name: 'Src',
                },
              ],
              roleArn: pipelinePipeline22F2a91dSourceCodeCommitCodePipelineActionRoleE54633e5.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Source',
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
              name: 'Hello',
              roleArn: pipelinePipeline22F2a91dBuildHelloCodePipelineActionRoleA9729116.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
      ],
      artifactStore: {
        encryptionKey: {
          id: pipelinePipeline22F2a91dArtifactsBucketEncryptionKey87C796d2.attrArn,
          type: 'KMS',
        },
        location: pipelinePipeline22F2a91dArtifactsBucketC1799dcd.ref,
        type: 'S3',
      },
    });
    pipelinePipeline22F2a91deb5d089b.addDependency(pipelinePipeline22F2a91dRoleDefaultPolicyCdee9d19);
    pipelinePipeline22F2a91deb5d089b.addDependency(pipelinePipeline22F2a91dRole58B7b05e);

    if (pipelinePipeline22F2a91deb5d089b == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91deb5d089b' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dEventsRole048D7f59 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dEventsRole048D7f59' to be undefined. Fixit.`); }
    const pipelinePipeline22F2a91dEventsRoleDefaultPolicyEed1010f = new iam.CfnPolicy(this, 'pipelinePipeline22F2A91DEventsRoleDefaultPolicyEED1010F', {
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
              pipelinePipeline22F2a91deb5d089b.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'pipelinePipeline22F2A91DEventsRoleDefaultPolicyEED1010F',
      roles: [
        pipelinePipeline22F2a91dEventsRole048D7f59.ref,
      ],
    });

    if (dlq09C78acc == null) { throw new Error(`A combination of conditions caused 'dlq09C78acc' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91deb5d089b == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91deb5d089b' to be undefined. Fixit.`); }
    if (pipelinePipeline22F2a91dEventsRole048D7f59 == null) { throw new Error(`A combination of conditions caused 'pipelinePipeline22F2a91dEventsRole048D7f59' to be undefined. Fixit.`); }
    const ruleF2c1dcdc = new events.CfnRule(this, 'ruleF2C1DCDC', {
      scheduleExpression: 'rate(1 minute)',
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
            pipelinePipeline22F2a91deb5d089b.ref,
          ].join(''),
          deadLetterConfig: {
            arn: dlq09C78acc.attrArn,
          },
          id: 'Target0',
          retryPolicy: {
            maximumEventAgeInSeconds: 7200,
            maximumRetryAttempts: 2,
          },
          roleArn: pipelinePipeline22F2a91dEventsRole048D7f59.attrArn,
        },
      ],
    });
  }
}

