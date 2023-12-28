import * as cdk from 'aws-cdk-lib';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodepipelineCodedeployProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodepipelineCodedeploy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodepipelineCodedeployProps = {}) {
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
    const codeDeployApplicationE587c27c = new codedeploy.CfnApplication(this, 'CodeDeployApplicationE587C27C', {
      applicationName: 'IntegTestDeployApp',
      computePlatform: 'Server',
    });

    const codeDeployGroupRole1D304f7a = new iam.CfnRole(this, 'CodeDeployGroupRole1D304F7A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codedeploy.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSCodeDeployRole',
        ].join(''),
      ],
    });

    const codeDeployPipelineIntegTest9F618d61 = new s3.CfnBucket(this, 'CodeDeployPipelineIntegTest9F618D61', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    codeDeployPipelineIntegTest9F618d61.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const customDeployConfig52Eebc13 = new codedeploy.CfnDeploymentConfig(this, 'CustomDeployConfig52EEBC13', {
      minimumHealthyHosts: {
        type: 'HOST_COUNT',
        value: 0,
      },
    });

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

    if (codeDeployApplicationE587c27c == null) { throw new Error(`A combination of conditions caused 'codeDeployApplicationE587c27c' to be undefined. Fixit.`); }
    if (codeDeployGroupRole1D304f7a == null) { throw new Error(`A combination of conditions caused 'codeDeployGroupRole1D304f7a' to be undefined. Fixit.`); }
    if (customDeployConfig52Eebc13 == null) { throw new Error(`A combination of conditions caused 'customDeployConfig52Eebc13' to be undefined. Fixit.`); }
    const codeDeployGroup58220Fc8 = new codedeploy.CfnDeploymentGroup(this, 'CodeDeployGroup58220FC8', {
      applicationName: codeDeployApplicationE587c27c.ref,
      serviceRoleArn: codeDeployGroupRole1D304f7a.attrArn,
      alarmConfiguration: {
        enabled: false,
      },
      autoRollbackConfiguration: {
        enabled: true,
        events: [
          'DEPLOYMENT_FAILURE',
        ],
      },
      deploymentConfigName: customDeployConfig52Eebc13.ref,
      deploymentGroupName: 'IntegTestDeploymentGroup',
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

    if (codeDeployApplicationE587c27c == null) { throw new Error(`A combination of conditions caused 'codeDeployApplicationE587c27c' to be undefined. Fixit.`); }
    if (codeDeployGroup58220Fc8 == null) { throw new Error(`A combination of conditions caused 'codeDeployGroup58220Fc8' to be undefined. Fixit.`); }
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
                provider: 'CodeDeploy',
                version: '1',
              },
              configuration: {
                ApplicationName: codeDeployApplicationE587c27c.ref,
                DeploymentGroupName: codeDeployGroup58220Fc8.ref,
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

    if (codeDeployApplicationE587c27c == null) { throw new Error(`A combination of conditions caused 'codeDeployApplicationE587c27c' to be undefined. Fixit.`); }
    if (codeDeployGroup58220Fc8 == null) { throw new Error(`A combination of conditions caused 'codeDeployGroup58220Fc8' to be undefined. Fixit.`); }
    if (codeDeployPipelineIntegTest9F618d61 == null) { throw new Error(`A combination of conditions caused 'codeDeployPipelineIntegTest9F618d61' to be undefined. Fixit.`); }
    if (customDeployConfig52Eebc13 == null) { throw new Error(`A combination of conditions caused 'customDeployConfig52Eebc13' to be undefined. Fixit.`); }
    if (pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef == null) { throw new Error(`A combination of conditions caused 'pipelineDeployCodeDeployCodePipelineActionRoleFa7f8eef' to be undefined. Fixit.`); }
    const pipelineDeployCodeDeployCodePipelineActionRoleDefaultPolicy7B34e673 = new iam.CfnPolicy(this, 'PipelineDeployCodeDeployCodePipelineActionRoleDefaultPolicy7B34E673', {
      policyDocument: {
        Statement: [
          {
            Action: [
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
              ':application:',
              codeDeployApplicationE587c27c.ref,
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
              ':deploymentgroup:',
              codeDeployApplicationE587c27c.ref,
              '/',
              codeDeployGroup58220Fc8.ref,
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
              ':deploymentconfig:',
              customDeployConfig52Eebc13.ref,
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
  }
}

