import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineCodebuildBatchProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineCodebuildBatch extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineCodebuildBatchProps = {}) {
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
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myBuildProjectBatchServiceRole531F3056 = new iam.CfnRole(this, 'MyBuildProjectBatchServiceRole531F3056', {
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
      repositoryName: 'MyIntegTestTempRepo',
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

    if (myBuildProjectBatchServiceRole531F3056 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectBatchServiceRole531F3056' to be undefined. Fixit.`); }
    if (myBuildProjectRole6B7e2258 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectRole6B7e2258' to be undefined. Fixit.`); }
    const myBuildProject30Db9d6e = new codebuild.CfnProject(this, 'MyBuildProject30DB9D6E', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      buildBatchConfig: {
        serviceRole: myBuildProjectBatchServiceRole531F3056.attrArn,
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
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

    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myBuildProjectBatchServiceRole531F3056 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectBatchServiceRole531F3056' to be undefined. Fixit.`); }
    const myBuildProjectBatchServiceRoleDefaultPolicy816785Fc = new iam.CfnPolicy(this, 'MyBuildProjectBatchServiceRoleDefaultPolicy816785FC', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:RetryBuild',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: myBuildProject30Db9d6e.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyBuildProjectBatchServiceRoleDefaultPolicy816785FC',
      roles: [
        myBuildProjectBatchServiceRole531F3056.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myBuildProjectRole6B7e2258 == null) { throw new Error(`A combination of conditions caused 'myBuildProjectRole6B7e2258' to be undefined. Fixit.`); }
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
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyBuildProjectRoleDefaultPolicy5604AA87',
      roles: [
        myBuildProjectRole6B7e2258.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: pipelineRoleD68726f7.attrArn,
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
          {
            Action: [
              'codebuild:BatchGetBuildBatches',
              'codebuild:StartBuildBatch',
              'codebuild:StopBuildBatch',
            ],
            Effect: 'Allow',
            Resource: myBuildProject30Db9d6e.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineRoleDefaultPolicyC7A05455',
      roles: [
        pipelineRoleD68726f7.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myBuildProject30Db9d6e == null) { throw new Error(`A combination of conditions caused 'myBuildProject30Db9d6e' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    const pipelineC660917d = new codepipeline.CfnPipeline(this, 'PipelineC660917D', {
      artifactStore: {
        location: myBucketF68f3ff0.ref,
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
              name: 'Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_Source',
                },
              ],
              roleArn: pipelineRoleD68726f7.attrArn,
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
                ProjectName: myBuildProject30Db9d6e.ref,
                BatchEnabled: 'true',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_Source',
                },
              ],
              name: 'Build',
              roleArn: pipelineRoleD68726f7.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);

    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const myRepoawscdkcodepipelinecodebuildbatchPipeline674F06d4EventRuleD3de52e7 = new events.CfnRule(this, 'MyRepoawscdkcodepipelinecodebuildbatchPipeline674F06D4EventRuleD3DE52E7', {
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

