import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsCdkCodepipelineManualApprovalProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineManualApproval extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineManualApprovalProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const pipelineApproveManualApprovalCodePipelineActionRole51D669a5 = new iam.CfnRole(this, 'PipelineApproveManualApprovalCodePipelineActionRole51D669A5', {
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

    const pipelineApproveManualApprovalTopicResourceF5a35b20 = new sns.CfnTopic(this, 'PipelineApproveManualApprovalTopicResourceF5A35B20', {
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

    if (pipelineApproveManualApprovalCodePipelineActionRole51D669a5 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalCodePipelineActionRole51D669a5' to be undefined. Fixit.`); }
    if (pipelineApproveManualApprovalTopicResourceF5a35b20 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalTopicResourceF5a35b20' to be undefined. Fixit.`); }
    const pipelineApproveManualApprovalCodePipelineActionRoleDefaultPolicyB6418282 = new iam.CfnPolicy(this, 'PipelineApproveManualApprovalCodePipelineActionRoleDefaultPolicyB6418282', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: pipelineApproveManualApprovalTopicResourceF5a35b20.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineApproveManualApprovalCodePipelineActionRoleDefaultPolicyB6418282',
      roles: [
        pipelineApproveManualApprovalCodePipelineActionRole51D669a5.ref,
      ],
    });

    if (pipelineApproveManualApprovalTopicResourceF5a35b20 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalTopicResourceF5a35b20' to be undefined. Fixit.`); }
    const pipelineApproveManualApprovalTopicResourceadamruka85gmailcom202874Cd = new sns.CfnSubscription(this, 'PipelineApproveManualApprovalTopicResourceadamruka85gmailcom202874CD', {
      protocol: 'email',
      topicArn: pipelineApproveManualApprovalTopicResourceF5a35b20.ref,
      endpoint: 'adamruka85@gmail.com',
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (pipelineApproveManualApprovalCodePipelineActionRole51D669a5 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalCodePipelineActionRole51D669a5' to be undefined. Fixit.`); }
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
              bucket83908E77.attrArn,
              [
                bucket83908E77.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineApproveManualApprovalCodePipelineActionRole51D669a5.attrArn,
              pipelineSourceS3CodePipelineActionRole3Cafd08f.attrArn,
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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
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
              bucket83908E77.attrArn,
              [
                bucket83908E77.attrArn,
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
              bucket83908E77.attrArn,
              [
                bucket83908E77.attrArn,
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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (pipelineApproveManualApprovalCodePipelineActionRole51D669a5 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalCodePipelineActionRole51D669a5' to be undefined. Fixit.`); }
    if (pipelineApproveManualApprovalTopicResourceF5a35b20 == null) { throw new Error(`A combination of conditions caused 'pipelineApproveManualApprovalTopicResourceF5a35b20' to be undefined. Fixit.`); }
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
                S3Bucket: bucket83908E77.ref,
                S3ObjectKey: 'file.zip',
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
                category: 'Approval',
                owner: 'AWS',
                provider: 'Manual',
                version: '1',
              },
              configuration: {
                NotificationArn: pipelineApproveManualApprovalTopicResourceF5a35b20.ref,
              },
              name: 'ManualApproval',
              roleArn: pipelineApproveManualApprovalCodePipelineActionRole51D669a5.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Approve',
        },
      ],
      artifactStore: {
        location: bucket83908E77.ref,
        type: 'S3',
      },
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);
  }
}

