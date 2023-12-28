import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineJenkinsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineJenkins extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineJenkinsProps = {}) {
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
    const jenkinsProviderJenkinsBuildProviderResourceD9231cac = new codepipeline.CfnCustomActionType(this, 'JenkinsProviderJenkinsBuildProviderResourceD9231CAC', {
      category: 'Build',
      inputArtifactDetails: {
        maximumCount: 5,
        minimumCount: 0,
      },
      outputArtifactDetails: {
        maximumCount: 5,
        minimumCount: 0,
      },
      provider: 'JenkinsProvider',
      version: '2',
      configurationProperties: [
        {
          key: true,
          name: 'ProjectName',
          queryable: true,
          required: true,
          secret: false,
        },
      ],
      settings: {
        entityUrlTemplate: 'http://myjenkins.com:8080/job/{Config:ProjectName}',
        executionUrlTemplate: 'http://myjenkins.com:8080/job/{Config:ProjectName}/{ExternalExecutionId}',
      },
    });

    const jenkinsProviderJenkinsTestProviderResourceF0cf8f0e = new codepipeline.CfnCustomActionType(this, 'JenkinsProviderJenkinsTestProviderResourceF0CF8F0E', {
      category: 'Test',
      inputArtifactDetails: {
        maximumCount: 5,
        minimumCount: 0,
      },
      outputArtifactDetails: {
        maximumCount: 5,
        minimumCount: 0,
      },
      provider: 'JenkinsProvider',
      version: '2',
      configurationProperties: [
        {
          key: true,
          name: 'ProjectName',
          queryable: true,
          required: true,
          secret: false,
        },
      ],
      settings: {
        entityUrlTemplate: 'http://myjenkins.com:8080/job/{Config:ProjectName}',
        executionUrlTemplate: 'http://myjenkins.com:8080/job/{Config:ProjectName}/{ExternalExecutionId}',
      },
    });

    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    const pipelineSourceS3CodePipelineActionRole3Cafd08f = new iam.CfnRole(this, 'PipelineSourceS3CodePipelineActionRole3CAFD08F', {
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

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineSourceS3CodePipelineActionRole3Cafd08f == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole3Cafd08f' to be undefined. Fixit.`); }
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
            Resource: pipelineSourceS3CodePipelineActionRole3Cafd08f.attrArn,
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
    if (pipelineSourceS3CodePipelineActionRole3Cafd08f == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole3Cafd08f' to be undefined. Fixit.`); }
    const pipelineSourceS3CodePipelineActionRoleDefaultPolicy8B9dcbcf = new iam.CfnPolicy(this, 'PipelineSourceS3CodePipelineActionRoleDefaultPolicy8B9DCBCF', {
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/some/path',
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
      policyName: 'PipelineSourceS3CodePipelineActionRoleDefaultPolicy8B9DCBCF',
      roles: [
        pipelineSourceS3CodePipelineActionRole3Cafd08f.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceS3CodePipelineActionRole3Cafd08f == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3CodePipelineActionRole3Cafd08f' to be undefined. Fixit.`); }
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
                S3Bucket: myBucketF68f3ff0.ref,
                S3ObjectKey: 'some/path',
              },
              name: 'S3',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              roleArn: pipelineSourceS3CodePipelineActionRole3Cafd08f.attrArn,
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
                owner: 'Custom',
                provider: 'JenkinsProvider',
                version: '2',
              },
              configuration: {
                ProjectName: 'JenkinsProject1',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              name: 'JenkinsBuild',
              outputArtifacts: [
                {
                  name: 'Artifact_Build_JenkinsBuild',
                },
              ],
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Test',
                owner: 'Custom',
                provider: 'JenkinsProvider',
                version: '2',
              },
              configuration: {
                ProjectName: 'JenkinsProject2',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              name: 'JenkinsTest',
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Test',
                owner: 'Custom',
                provider: 'JenkinsProvider',
                version: '2',
              },
              configuration: {
                ProjectName: 'JenkinsProject3',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              name: 'JenkinsTest2',
              runOrder: 1,
            },
          ],
          name: 'Build',
        },
      ],
      artifactStore: {
        location: myBucketF68f3ff0.ref,
        type: 'S3',
      },
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);
  }
}

