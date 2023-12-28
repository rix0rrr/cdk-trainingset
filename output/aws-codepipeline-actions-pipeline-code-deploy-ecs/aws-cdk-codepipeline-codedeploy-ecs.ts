import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineCodedeployEcsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineCodedeployEcs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineCodedeployEcsProps = {}) {
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
    const codeDeployPipelineIntegTest9F618d61 = new s3.CfnBucket(this, 'CodeDeployPipelineIntegTest9F618D61', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    codeDeployPipelineIntegTest9F618d61.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef = new iam.CfnRole(this, 'PipelineDeployCodeDeployCodePipelineActionRoleFA7F8EEF', {
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

    const pipelineSourceS3SourceCodePipelineActionRole8De11a40 = new iam.CfnRole(this, 'PipelineSourceS3SourceCodePipelineActionRole8DE11A40', {
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

    if (codeDeployPipelineIntegTest9F618d61 == null) { throw new Error(`A combination of conditions caused 'codeDeployPipelineIntegTest9F618d61' to be undefined. Fixit.`); }
    if (pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef == null) { throw new Error(`A combination of conditions caused 'pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef' to be undefined. Fixit.`); }
    const pipelineDeployCodeDeployCodePipelineActionRoleDefaultPolicy7B34e673 = new iam.CfnPolicy(this, 'PipelineDeployCodeDeployCodePipelineActionRoleDefaultPolicy7B34E673', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codedeploy:GetApplication',
              'codedeploy:GetApplicationRevision',
              'codedeploy:RegisterApplicationRevision',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codedeploy:',
              this.region,
              ':',
              this.account,
              ':application:IntegTestDeployApp',
            ].join(''),
          },
          {
            Action: [
              'codedeploy:CreateDeployment',
              'codedeploy:GetDeployment',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codedeploy:',
              this.region,
              ':',
              this.account,
              ':deploymentgroup:IntegTestDeployApp/IntegTestDeploymentGroup',
            ].join(''),
          },
          {
            Action: 'codedeploy:GetDeploymentConfig',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codedeploy:',
              this.region,
              ':',
              this.account,
              ':deploymentconfig:CodeDeployDefault.ECSAllAtOnce',
            ].join(''),
          },
          {
            Action: 'ecs:RegisterTaskDefinition',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Condition: {
              StringEqualsIfExists: {
                'iam:PassedToService': [
                  'ecs-tasks.amazonaws.com',
                ],
              },
            },
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              codeDeployPipelineIntegTest9F618d61.attrArn,
              [
                codeDeployPipelineIntegTest9F618d61.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineDeployCodeDeployCodePipelineActionRoleDefaultPolicy7B34E673',
      roles: [
        pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef.ref,
      ],
    });

    if (codeDeployPipelineIntegTest9F618d61 == null) { throw new Error(`A combination of conditions caused 'codeDeployPipelineIntegTest9F618d61' to be undefined. Fixit.`); }
    if (pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef == null) { throw new Error(`A combination of conditions caused 'pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineSourceS3SourceCodePipelineActionRole8De11a40 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3SourceCodePipelineActionRole8De11a40' to be undefined. Fixit.`); }
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
              codeDeployPipelineIntegTest9F618d61.attrArn,
              [
                codeDeployPipelineIntegTest9F618d61.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef.attrArn,
              pipelineSourceS3SourceCodePipelineActionRole8De11a40.attrArn,
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

    if (codeDeployPipelineIntegTest9F618d61 == null) { throw new Error(`A combination of conditions caused 'codeDeployPipelineIntegTest9F618d61' to be undefined. Fixit.`); }
    if (pipelineSourceS3SourceCodePipelineActionRole8De11a40 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3SourceCodePipelineActionRole8De11a40' to be undefined. Fixit.`); }
    const pipelineSourceS3SourceCodePipelineActionRoleDefaultPolicy352A3912 = new iam.CfnPolicy(this, 'PipelineSourceS3SourceCodePipelineActionRoleDefaultPolicy352A3912', {
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
              codeDeployPipelineIntegTest9F618d61.attrArn,
              [
                codeDeployPipelineIntegTest9F618d61.attrArn,
                '/application.zip',
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
              codeDeployPipelineIntegTest9F618d61.attrArn,
              [
                codeDeployPipelineIntegTest9F618d61.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineSourceS3SourceCodePipelineActionRoleDefaultPolicy352A3912',
      roles: [
        pipelineSourceS3SourceCodePipelineActionRole8De11a40.ref,
      ],
    });

    if (codeDeployPipelineIntegTest9F618d61 == null) { throw new Error(`A combination of conditions caused 'codeDeployPipelineIntegTest9F618d61' to be undefined. Fixit.`); }
    if (pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef == null) { throw new Error(`A combination of conditions caused 'pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceS3SourceCodePipelineActionRole8De11a40 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceS3SourceCodePipelineActionRole8De11a40' to be undefined. Fixit.`); }
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
                S3Bucket: codeDeployPipelineIntegTest9F618d61.ref,
                S3ObjectKey: 'application.zip',
              },
              name: 'S3Source',
              outputArtifacts: [
                {
                  name: 'SourceOutput',
                },
              ],
              roleArn: pipelineSourceS3SourceCodePipelineActionRole8De11a40.attrArn,
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
                provider: 'CodeDeployToECS',
                version: '1',
              },
              configuration: {
                ApplicationName: 'IntegTestDeployApp',
                DeploymentGroupName: 'IntegTestDeploymentGroup',
                TaskDefinitionTemplateArtifact: 'SourceOutput',
                TaskDefinitionTemplatePath: 'task-definition-test.json',
                AppSpecTemplateArtifact: 'SourceOutput',
                AppSpecTemplatePath: 'appspec-test.json',
                Image1ArtifactName: 'SourceOutput',
                Image1ContainerName: 'PLACEHOLDER',
              },
              inputArtifacts: [
                {
                  name: 'SourceOutput',
                },
              ],
              name: 'CodeDeploy',
              roleArn: pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Deploy',
        },
      ],
      artifactStore: {
        location: codeDeployPipelineIntegTest9F618d61.ref,
        type: 'S3',
      },
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);
  }
}

