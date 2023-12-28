import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface StackOutputPipelineStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class StackOutputPipelineStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackOutputPipelineStackProps = {}) {
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
    const pipelineAppStageCustomFunctionServiceRole3Cd45b89 = new iam.CfnRole(this, 'PipelineAppStageCustomFunctionServiceRole3CD45B89', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const pipelineAppStageCustomStepCodePipelineActionRoleE64091e3 = new iam.CfnRole(this, 'PipelineAppStageCustomStepCodePipelineActionRoleE64091E3', {
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

    const pipelineArtifactsBucketAea9a052 = new s3.CfnBucket(this, 'PipelineArtifactsBucketAEA9A052', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
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
    pipelineArtifactsBucketAea9a052.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const pipelineBuildSynthCdkBuildProjectRole231Eea2a = new iam.CfnRole(this, 'PipelineBuildSynthCdkBuildProjectRole231EEA2A', {
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

    const pipelineEventsRole96280D9b = new iam.CfnRole(this, 'PipelineEventsRole96280D9B', {
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

    const pipelineRoleB27faa37 = new iam.CfnRole(this, 'PipelineRoleB27FAA37', {
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

    const pipelineSourceEcrCodePipelineActionRole6C89f75d = new iam.CfnRole(this, 'PipelineSourceECRCodePipelineActionRole6C89F75D', {
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

    const source71E471f1 = new ecr.CfnRepository(this, 'Source71E471F1', {
    });
    source71E471f1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (pipelineAppStageCustomFunctionServiceRole3Cd45b89 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomFunctionServiceRole3Cd45b89' to be undefined. Fixit.`); }
    const pipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829 = new iam.CfnPolicy(this, 'PipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codepipeline:PutJobFailureResult',
              'codepipeline:PutJobSuccessResult',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829',
      roles: [
        pipelineAppStageCustomFunctionServiceRole3Cd45b89.ref,
      ],
    });

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    const pipelineArtifactsBucketPolicyF53ccc52 = new s3.CfnBucketPolicy(this, 'PipelineArtifactsBucketPolicyF53CCC52', {
      bucket: pipelineArtifactsBucketAea9a052.ref,
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
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
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
            },
            Resource: [
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProject6Befa8e6 = new codebuild.CfnProject(this, 'PipelineBuildSynthCdkBuildProject6BEFA8E6', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      description: 'Pipeline step StackOutputPipelineStack/Pipeline/Build/Synth',
      encryptionKey: 'alias/aws/s3',
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: pipelineBuildSynthCdkBuildProjectRole231Eea2a.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"mkdir cdk.out\",\n        \"touch cdk.out/dummy\"\n      ]\n    }\n  },\n  \"artifacts\": {\n    \"base-directory\": \"cdk.out\",\n    \"files\": \"**/*\"\n  }\n}',
        type: 'CODEPIPELINE',
      },
    });

    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    const pipelineCodeBuildActionRole226Db0cb = new iam.CfnRole(this, 'PipelineCodeBuildActionRole226DB0CB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: pipelineRoleB27faa37.attrArn,
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineSourceEcrCodePipelineActionRole6C89f75d == null) { throw new Error(`A combination of conditions caused 'pipelineSourceEcrCodePipelineActionRole6C89f75d' to be undefined. Fixit.`); }
    if (source71E471f1 == null) { throw new Error(`A combination of conditions caused 'source71E471f1' to be undefined. Fixit.`); }
    const pipelineSourceEcrCodePipelineActionRoleDefaultPolicy9A5c9fac = new iam.CfnPolicy(this, 'PipelineSourceECRCodePipelineActionRoleDefaultPolicy9A5C9FAC', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecr:DescribeImages',
            Effect: 'Allow',
            Resource: source71E471f1.attrArn,
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineSourceECRCodePipelineActionRoleDefaultPolicy9A5C9FAC',
      roles: [
        pipelineSourceEcrCodePipelineActionRole6C89f75d.ref,
      ],
    });

    if (pipelineAppStageCustomFunctionServiceRole3Cd45b89 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomFunctionServiceRole3Cd45b89' to be undefined. Fixit.`); }
    if (pipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829' to be undefined. Fixit.`); }
    const pipelineAppStageCustomFunction1C605d4d = new lambda.CfnFunction(this, 'PipelineAppStageCustomFunction1C605D4D', {
      code: {
        zipFile: '\n        exports.handler = async (event) => {\n          console.log(\'Hello world.\')\n        };\n      ',
      },
      handler: 'index.handler',
      role: pipelineAppStageCustomFunctionServiceRole3Cd45b89.attrArn,
      runtime: 'nodejs18.x',
    });
    pipelineAppStageCustomFunction1C605d4d.addDependency(pipelineAppStageCustomFunctionServiceRoleDefaultPolicy83E41829);
    pipelineAppStageCustomFunction1C605d4d.addDependency(pipelineAppStageCustomFunctionServiceRole3Cd45b89);

    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProjectRole231Eea2a == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProjectRole231Eea2a' to be undefined. Fixit.`); }
    const pipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFb6c941c = new iam.CfnPolicy(this, 'PipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFB6C941C', {
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
                pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
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
                pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
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
              pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
              '-*',
            ].join(''),
          },
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineBuildSynthCdkBuildProjectRoleDefaultPolicyFB6C941C',
      roles: [
        pipelineBuildSynthCdkBuildProjectRole231Eea2a.ref,
      ],
    });

    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    const pipelineCodeBuildActionRoleDefaultPolicy1D62a6fe = new iam.CfnPolicy(this, 'PipelineCodeBuildActionRoleDefaultPolicy1D62A6FE', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: pipelineBuildSynthCdkBuildProject6Befa8e6.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineCodeBuildActionRoleDefaultPolicy1D62A6FE',
      roles: [
        pipelineCodeBuildActionRole226Db0cb.ref,
      ],
    });

    if (pipelineAppStageCustomStepCodePipelineActionRoleE64091e3 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomStepCodePipelineActionRoleE64091e3' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    if (pipelineSourceEcrCodePipelineActionRole6C89f75d == null) { throw new Error(`A combination of conditions caused 'pipelineSourceEcrCodePipelineActionRole6C89f75d' to be undefined. Fixit.`); }
    const pipelineRoleDefaultPolicy7Bdc1abb = new iam.CfnPolicy(this, 'PipelineRoleDefaultPolicy7BDC1ABB', {
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
              pipelineArtifactsBucketAea9a052.attrArn,
              [
                pipelineArtifactsBucketAea9a052.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              pipelineAppStageCustomStepCodePipelineActionRoleE64091e3.attrArn,
              pipelineCodeBuildActionRole226Db0cb.attrArn,
              pipelineSourceEcrCodePipelineActionRole6C89f75d.attrArn,
              [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineRoleDefaultPolicy7BDC1ABB',
      roles: [
        pipelineRoleB27faa37.ref,
      ],
    });

    if (pipelineAppStageCustomFunction1C605d4d == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomFunction1C605d4d' to be undefined. Fixit.`); }
    if (pipelineAppStageCustomStepCodePipelineActionRoleE64091e3 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomStepCodePipelineActionRoleE64091e3' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketAea9a052 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketAea9a052' to be undefined. Fixit.`); }
    if (pipelineBuildSynthCdkBuildProject6Befa8e6 == null) { throw new Error(`A combination of conditions caused 'pipelineBuildSynthCdkBuildProject6Befa8e6' to be undefined. Fixit.`); }
    if (pipelineCodeBuildActionRole226Db0cb == null) { throw new Error(`A combination of conditions caused 'pipelineCodeBuildActionRole226Db0cb' to be undefined. Fixit.`); }
    if (pipelineRoleB27faa37 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleB27faa37' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicy7Bdc1abb == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicy7Bdc1abb' to be undefined. Fixit.`); }
    if (pipelineSourceEcrCodePipelineActionRole6C89f75d == null) { throw new Error(`A combination of conditions caused 'pipelineSourceEcrCodePipelineActionRole6C89f75d' to be undefined. Fixit.`); }
    if (source71E471f1 == null) { throw new Error(`A combination of conditions caused 'source71E471f1' to be undefined. Fixit.`); }
    const pipeline9850B417 = new codepipeline.CfnPipeline(this, 'Pipeline9850B417', {
      artifactStore: {
        location: pipelineArtifactsBucketAea9a052.ref,
        type: 'S3',
      },
      restartExecutionOnUpdate: true,
      roleArn: pipelineRoleB27faa37.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'ECR',
                version: '1',
              },
              configuration: {
                RepositoryName: source71E471f1.ref,
              },
              name: [
                cdk.Fn.split('/', source71E471f1.ref),
              ].join('_'),
              outputArtifacts: [
                {
                  name: 'c8c25a16b0aa1e8dca2f4c906a3af2cd762badd5ce_Source',
                },
              ],
              roleArn: pipelineSourceEcrCodePipelineActionRole6C89f75d.attrArn,
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
                ProjectName: pipelineBuildSynthCdkBuildProject6Befa8e6.ref,
              },
              inputArtifacts: [
                {
                  name: 'c8c25a16b0aa1e8dca2f4c906a3af2cd762badd5ce_Source',
                },
              ],
              name: 'Synth',
              outputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              roleArn: pipelineCodeBuildActionRole226Db0cb.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Build',
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
                StackName: 'AppStage-Stack',
                Capabilities: 'CAPABILITY_NAMED_IAM,CAPABILITY_AUTO_EXPAND',
                RoleArn: [
                  'arn:',
                  this.partition,
                  ':iam::',
                  this.account,
                  ':role/cdk-hnb659fds-cfn-exec-role-',
                  this.account,
                  '-',
                  this.region,
                ].join(''),
                ActionMode: 'CHANGE_SET_REPLACE',
                ChangeSetName: 'PipelineChange',
                TemplatePath: 'Synth_Output::assembly-StackOutputPipelineStack-AppStage/StackOutputPipelineStackAppStageStackB810E610.template.json',
              },
              inputArtifacts: [
                {
                  name: 'Synth_Output',
                },
              ],
              name: 'Stack.Prepare',
              roleArn: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
              runOrder: 1,
            },
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'AppStage-Stack',
                ActionMode: 'CHANGE_SET_EXECUTE',
                ChangeSetName: 'PipelineChange',
              },
              name: 'Stack.Deploy',
              namespace: 'StackOutputPipelineStackAppStageStackB810E610',
              roleArn: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':role/cdk-hnb659fds-deploy-role-',
                this.account,
                '-',
                this.region,
              ].join(''),
              runOrder: 2,
            },
            {
              actionTypeId: {
                category: 'Invoke',
                owner: 'AWS',
                provider: 'Lambda',
                version: '1',
              },
              configuration: {
                FunctionName: pipelineAppStageCustomFunction1C605d4d.ref,
                UserParameters: '{\"stackOutput\":\"#{StackOutputPipelineStackAppStageStackB810E610.OutputVariable}\"}',
              },
              name: 'CustomStep',
              roleArn: pipelineAppStageCustomStepCodePipelineActionRoleE64091e3.attrArn,
              runOrder: 3,
            },
          ],
          name: 'AppStage',
        },
      ],
    });
    pipeline9850B417.addDependency(pipelineRoleDefaultPolicy7Bdc1abb);
    pipeline9850B417.addDependency(pipelineRoleB27faa37);

    if (pipelineAppStageCustomFunction1C605d4d == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomFunction1C605d4d' to be undefined. Fixit.`); }
    if (pipelineAppStageCustomStepCodePipelineActionRoleE64091e3 == null) { throw new Error(`A combination of conditions caused 'pipelineAppStageCustomStepCodePipelineActionRoleE64091e3' to be undefined. Fixit.`); }
    const pipelineAppStageCustomStepCodePipelineActionRoleDefaultPolicy305D14fd = new iam.CfnPolicy(this, 'PipelineAppStageCustomStepCodePipelineActionRoleDefaultPolicy305D14FD', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:ListFunctions',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              pipelineAppStageCustomFunction1C605d4d.attrArn,
              [
                pipelineAppStageCustomFunction1C605d4d.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineAppStageCustomStepCodePipelineActionRoleDefaultPolicy305D14FD',
      roles: [
        pipelineAppStageCustomStepCodePipelineActionRoleE64091e3.ref,
      ],
    });

    if (pipeline9850B417 == null) { throw new Error(`A combination of conditions caused 'pipeline9850B417' to be undefined. Fixit.`); }
    if (pipelineEventsRole96280D9b == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole96280D9b' to be undefined. Fixit.`); }
    const pipelineEventsRoleDefaultPolicy62809D8f = new iam.CfnPolicy(this, 'PipelineEventsRoleDefaultPolicy62809D8F', {
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
              pipeline9850B417.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineEventsRoleDefaultPolicy62809D8F',
      roles: [
        pipelineEventsRole96280D9b.ref,
      ],
    });

    if (pipeline9850B417 == null) { throw new Error(`A combination of conditions caused 'pipeline9850B417' to be undefined. Fixit.`); }
    if (pipelineEventsRole96280D9b == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole96280D9b' to be undefined. Fixit.`); }
    if (source71E471f1 == null) { throw new Error(`A combination of conditions caused 'source71E471f1' to be undefined. Fixit.`); }
    const pipelineSourceEcrStackOutputPipelineStackPipeline381Bf9fbSourceEventRuleB5ecadef = new events.CfnRule(this, 'PipelineSourceECRStackOutputPipelineStackPipeline381BF9FBSourceEventRuleB5ECADEF', {
      eventPattern: {
        'detail-type': [
          'ECR Image Action',
        ],
        source: [
          'aws.ecr',
        ],
        detail: {
          result: [
            'SUCCESS',
          ],
          'repository-name': [
            source71E471f1.ref,
          ],
          'image-tag': [
            'latest',
          ],
          'action-type': [
            'PUSH',
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
            pipeline9850B417.ref,
          ].join(''),
          id: 'Target0',
          roleArn: pipelineEventsRole96280D9b.attrArn,
        },
      ],
    });
  }
}

