import * as cdk from 'aws-cdk-lib';
import * as cloudtrail from 'aws-cdk-lib/aws-cloudtrail';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codepipeline-lambdaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-lambda extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-lambdaProps = {}) {
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
    const cloudTrailS310cd22f2 = new s3.CfnBucket(this, 'CloudTrailS310CD22F2', {
    });
    cloudTrailS310cd22f2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const lambdaFunServiceRoleF0979767 = new iam.CfnRole(this, 'LambdaFunServiceRoleF0979767', {
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

    const pipelineLambdaCodePipelineActionRoleC6032822 = new iam.CfnRole(this, 'PipelineLambdaCodePipelineActionRoleC6032822', {
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

    if (cloudTrailS310cd22f2 == null) { throw new Error(`A combination of conditions caused 'cloudTrailS310cd22f2' to be undefined. Fixit.`); }
    const cloudTrailS3PolicyEa49a03e = new s3.CfnBucketPolicy(this, 'CloudTrailS3PolicyEA49A03E', {
      bucket: cloudTrailS310cd22f2.ref,
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
              cloudTrailS310cd22f2.attrArn,
              [
                cloudTrailS310cd22f2.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 's3:GetBucketAcl',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudtrail.amazonaws.com',
            },
            Resource: cloudTrailS310cd22f2.attrArn,
          },
          {
            Action: 's3:PutObject',
            Condition: {
              StringEquals: {
                's3:x-amz-acl': 'bucket-owner-full-control',
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'cloudtrail.amazonaws.com',
            },
            Resource: [
              cloudTrailS310cd22f2.attrArn,
              '/AWSLogs/',
              this.account,
              '/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (lambdaFunServiceRoleF0979767 == null) { throw new Error(`A combination of conditions caused 'lambdaFunServiceRoleF0979767' to be undefined. Fixit.`); }
    const lambdaFunServiceRoleDefaultPolicy217Fed83 = new iam.CfnPolicy(this, 'LambdaFunServiceRoleDefaultPolicy217FED83', {
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
      policyName: 'LambdaFunServiceRoleDefaultPolicy217FED83',
      roles: [
        lambdaFunServiceRoleF0979767.ref,
      ],
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
      aliasName: 'alias/codepipeline-aws-cdk-codepipeline-lambda-pipeline-87a4b3d3',
      targetKeyId: pipelineArtifactsBucketEncryptionKey01D58d69.attrArn,
    });
    pipelineArtifactsBucketEncryptionKeyAlias5C510eee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (cloudTrailS310cd22f2 == null) { throw new Error(`A combination of conditions caused 'cloudTrailS310cd22f2' to be undefined. Fixit.`); }
    if (cloudTrailS3PolicyEa49a03e == null) { throw new Error(`A combination of conditions caused 'cloudTrailS3PolicyEa49a03e' to be undefined. Fixit.`); }
    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
    const cloudTrailA62d711d = new cloudtrail.CfnTrail(this, 'CloudTrailA62D711D', {
      enableLogFileValidation: true,
      eventSelectors: [
        {
          dataResources: [
            {
              type: 'AWS::S3::Object',
              values: [
                [
                  pipelineBucketB967bd35.attrArn,
                  '/key',
                ].join(''),
              ],
            },
          ],
          includeManagementEvents: false,
          readWriteType: 'WriteOnly',
        },
      ],
      includeGlobalServiceEvents: true,
      isLogging: true,
      isMultiRegionTrail: true,
      s3BucketName: cloudTrailS310cd22f2.ref,
    });
    cloudTrailA62d711d.addDependency(cloudTrailS3PolicyEa49a03e);

    if (lambdaFunServiceRoleDefaultPolicy217Fed83 == null) { throw new Error(`A combination of conditions caused 'lambdaFunServiceRoleDefaultPolicy217Fed83' to be undefined. Fixit.`); }
    if (lambdaFunServiceRoleF0979767 == null) { throw new Error(`A combination of conditions caused 'lambdaFunServiceRoleF0979767' to be undefined. Fixit.`); }
    const lambdaFun98622869 = new lambda.CfnFunction(this, 'LambdaFun98622869', {
      code: {
        zipFile: '\n    exports.handler = function () {\n      console.log(\"Hello, world!\");\n    };\n  ',
      },
      handler: 'index.handler',
      role: lambdaFunServiceRoleF0979767.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaFun98622869.addDependency(lambdaFunServiceRoleDefaultPolicy217Fed83);
    lambdaFun98622869.addDependency(lambdaFunServiceRoleF0979767);

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
    if (pipelineLambdaCodePipelineActionRoleC6032822 == null) { throw new Error(`A combination of conditions caused 'pipelineLambdaCodePipelineActionRoleC6032822' to be undefined. Fixit.`); }
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
              pipelineLambdaCodePipelineActionRoleC6032822.attrArn,
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

    if (lambdaFun98622869 == null) { throw new Error(`A combination of conditions caused 'lambdaFun98622869' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucket22248F97 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucket22248F97' to be undefined. Fixit.`); }
    if (pipelineArtifactsBucketEncryptionKey01D58d69 == null) { throw new Error(`A combination of conditions caused 'pipelineArtifactsBucketEncryptionKey01D58d69' to be undefined. Fixit.`); }
    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
    if (pipelineLambdaCodePipelineActionRoleC6032822 == null) { throw new Error(`A combination of conditions caused 'pipelineLambdaCodePipelineActionRoleC6032822' to be undefined. Fixit.`); }
    if (pipelineRoleD68726f7 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleD68726f7' to be undefined. Fixit.`); }
    if (pipelineRoleDefaultPolicyC7a05455 == null) { throw new Error(`A combination of conditions caused 'pipelineRoleDefaultPolicyC7a05455' to be undefined. Fixit.`); }
    if (pipelineSourceCodePipelineActionRoleC6f9e7f5 == null) { throw new Error(`A combination of conditions caused 'pipelineSourceCodePipelineActionRoleC6f9e7f5' to be undefined. Fixit.`); }
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
                provider: 'S3',
                version: '1',
              },
              configuration: {
                S3Bucket: pipelineBucketB967bd35.ref,
                S3ObjectKey: 'key',
                PollForSourceChanges: false,
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
                category: 'Invoke',
                owner: 'AWS',
                provider: 'Lambda',
                version: '1',
              },
              configuration: {
                FunctionName: lambdaFun98622869.ref,
              },
              name: 'Lambda',
              roleArn: pipelineLambdaCodePipelineActionRoleC6032822.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Lambda',
        },
      ],
    });
    pipelineC660917d.addDependency(pipelineRoleDefaultPolicyC7a05455);
    pipelineC660917d.addDependency(pipelineRoleD68726f7);

    if (lambdaFun98622869 == null) { throw new Error(`A combination of conditions caused 'lambdaFun98622869' to be undefined. Fixit.`); }
    if (pipelineLambdaCodePipelineActionRoleC6032822 == null) { throw new Error(`A combination of conditions caused 'pipelineLambdaCodePipelineActionRoleC6032822' to be undefined. Fixit.`); }
    const pipelineLambdaCodePipelineActionRoleDefaultPolicyFee90f93 = new iam.CfnPolicy(this, 'PipelineLambdaCodePipelineActionRoleDefaultPolicyFEE90F93', {
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
              lambdaFun98622869.attrArn,
              [
                lambdaFun98622869.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PipelineLambdaCodePipelineActionRoleDefaultPolicyFEE90F93',
      roles: [
        pipelineLambdaCodePipelineActionRoleC6032822.ref,
      ],
    });

    if (pipelineBucketB967bd35 == null) { throw new Error(`A combination of conditions caused 'pipelineBucketB967bd35' to be undefined. Fixit.`); }
    if (pipelineC660917d == null) { throw new Error(`A combination of conditions caused 'pipelineC660917d' to be undefined. Fixit.`); }
    if (pipelineEventsRole46Beea7c == null) { throw new Error(`A combination of conditions caused 'pipelineEventsRole46Beea7c' to be undefined. Fixit.`); }
    const pipelineBucketawscdkcodepipelinelambdaPipeline87A4b3d3SourceEventRulekey23D3c004 = new events.CfnRule(this, 'PipelineBucketawscdkcodepipelinelambdaPipeline87A4B3D3SourceEventRulekey23D3C004', {
      eventPattern: {
        source: [
          'aws.s3',
        ],
        'detail-type': [
          'AWS API Call via CloudTrail',
        ],
        detail: {
          resources: {
            ARN: [
              [
                pipelineBucketB967bd35.attrArn,
                '/key',
              ].join(''),
            ],
          },
          eventName: [
            'CompleteMultipartUpload',
            'CopyObject',
            'PutObject',
          ],
          requestParameters: {
            bucketName: [
              pipelineBucketB967bd35.ref,
            ],
            key: [
              'key',
            ],
          },
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

