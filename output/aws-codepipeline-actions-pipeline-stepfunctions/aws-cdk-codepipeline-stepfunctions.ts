import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-cdk-codepipeline-stepfunctionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-stepfunctions extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-stepfunctionsProps = {}) {
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
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 = new kms.CfnKey(this, 'MyPipelineArtifactsBucketEncryptionKey8BF0A7F3', {
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
    myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myPipelineInvokeCodePipelineActionRole006B5bad = new iam.CfnRole(this, 'MyPipelineInvokeCodePipelineActionRole006B5BAD', {
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

    const myPipelineRoleC0d47ca4 = new iam.CfnRole(this, 'MyPipelineRoleC0D47CA4', {
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

    const myPipelineSourceCodePipelineActionRoleAa05d76f = new iam.CfnRole(this, 'MyPipelineSourceCodePipelineActionRoleAA05D76F', {
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

    const simpleStateMachineRole0Cbc135a = new iam.CfnRole(this, 'SimpleStateMachineRole0CBC135A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucket727923Dd = new s3.CfnBucket(this, 'MyPipelineArtifactsBucket727923DD', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
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
    myPipelineArtifactsBucket727923Dd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucketEncryptionKeyAlias9D4f8c59 = new kms.CfnAlias(this, 'MyPipelineArtifactsBucketEncryptionKeyAlias9D4F8C59', {
      aliasName: 'alias/codepipeline-aws-cdk-codepipeline-stepfunctions-mypipeline-ce88aa28',
      targetKeyId: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
    });
    myPipelineArtifactsBucketEncryptionKeyAlias9D4f8c59.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (simpleStateMachineRole0Cbc135a == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineRole0Cbc135a' to be undefined. Fixit.`); }
    const simpleStateMachineE8e2cf40 = new stepfunctions.CfnStateMachine(this, 'SimpleStateMachineE8E2CF40', {
      roleArn: simpleStateMachineRole0Cbc135a.attrArn,
      definitionString: '{\"StartAt\":\"StartState\",\"States\":{\"StartState\":{\"Type\":\"Pass\",\"End\":true}}}',
    });
    simpleStateMachineE8e2cf40.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    simpleStateMachineE8e2cf40.addDependency(simpleStateMachineRole0Cbc135a);

    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    const myPipelineArtifactsBucketPolicyDfda675b = new s3.CfnBucketPolicy(this, 'MyPipelineArtifactsBucketPolicyDFDA675B', {
      bucket: myPipelineArtifactsBucket727923Dd.ref,
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myPipelineInvokeCodePipelineActionRole006B5bad == null) { throw new Error(`A combination of conditions caused 'myPipelineInvokeCodePipelineActionRole006B5bad' to be undefined. Fixit.`); }
    if (simpleStateMachineE8e2cf40 == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineE8e2cf40' to be undefined. Fixit.`); }
    const myPipelineInvokeCodePipelineActionRoleDefaultPolicy07A602b1 = new iam.CfnPolicy(this, 'MyPipelineInvokeCodePipelineActionRoleDefaultPolicy07A602B1', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'states:DescribeStateMachine',
              'states:StartExecution',
            ],
            Effect: 'Allow',
            Resource: simpleStateMachineE8e2cf40.ref,
          },
          {
            Action: 'states:DescribeExecution',
            Effect: 'Allow',
            Resource: [
              'arn:',
              cdk.Fn.select(1, cdk.Fn.split(':', simpleStateMachineE8e2cf40.ref)),
              ':states:',
              cdk.Fn.select(3, cdk.Fn.split(':', simpleStateMachineE8e2cf40.ref)),
              ':',
              cdk.Fn.select(4, cdk.Fn.split(':', simpleStateMachineE8e2cf40.ref)),
              ':execution:',
              cdk.Fn.select(6, cdk.Fn.split(':', simpleStateMachineE8e2cf40.ref)),
              ':*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineInvokeCodePipelineActionRoleDefaultPolicy07A602B1',
      roles: [
        myPipelineInvokeCodePipelineActionRole006B5bad.ref,
      ],
    });

    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineInvokeCodePipelineActionRole006B5bad == null) { throw new Error(`A combination of conditions caused 'myPipelineInvokeCodePipelineActionRole006B5bad' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    const myPipelineRoleDefaultPolicy34F09efa = new iam.CfnPolicy(this, 'MyPipelineRoleDefaultPolicy34F09EFA', {
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
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
            Resource: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              myPipelineInvokeCodePipelineActionRole006B5bad.attrArn,
              myPipelineSourceCodePipelineActionRoleAa05d76f.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineRoleDefaultPolicy34F09EFA',
      roles: [
        myPipelineRoleC0d47ca4.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    const myPipelineSourceCodePipelineActionRoleDefaultPolicy10C831a9 = new iam.CfnPolicy(this, 'MyPipelineSourceCodePipelineActionRoleDefaultPolicy10C831A9', {
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
                '/some/path/to',
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
              myPipelineArtifactsBucket727923Dd.attrArn,
              [
                myPipelineArtifactsBucket727923Dd.attrArn,
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
            Resource: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineSourceCodePipelineActionRoleDefaultPolicy10C831A9',
      roles: [
        myPipelineSourceCodePipelineActionRoleAa05d76f.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucket727923Dd == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucket727923Dd' to be undefined. Fixit.`); }
    if (myPipelineArtifactsBucketEncryptionKey8Bf0a7f3 == null) { throw new Error(`A combination of conditions caused 'myPipelineArtifactsBucketEncryptionKey8Bf0a7f3' to be undefined. Fixit.`); }
    if (myPipelineInvokeCodePipelineActionRole006B5bad == null) { throw new Error(`A combination of conditions caused 'myPipelineInvokeCodePipelineActionRole006B5bad' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineRoleDefaultPolicy34F09efa == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleDefaultPolicy34F09efa' to be undefined. Fixit.`); }
    if (myPipelineSourceCodePipelineActionRoleAa05d76f == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceCodePipelineActionRoleAa05d76f' to be undefined. Fixit.`); }
    if (simpleStateMachineE8e2cf40 == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineE8e2cf40' to be undefined. Fixit.`); }
    const myPipelineAed38ecf = new codepipeline.CfnPipeline(this, 'MyPipelineAED38ECF', {
      roleArn: myPipelineRoleC0d47ca4.attrArn,
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
                S3ObjectKey: 'some/path/to',
                PollForSourceChanges: true,
              },
              name: 'Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_Source',
                },
              ],
              roleArn: myPipelineSourceCodePipelineActionRoleAa05d76f.attrArn,
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
                provider: 'StepFunctions',
                version: '1',
              },
              configuration: {
                StateMachineArn: simpleStateMachineE8e2cf40.ref,
                Input: '{\"IsHelloWorldExample\":true}',
                InputType: 'Literal',
              },
              name: 'Invoke',
              roleArn: myPipelineInvokeCodePipelineActionRole006B5bad.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Invoke',
        },
      ],
      artifactStore: {
        encryptionKey: {
          id: myPipelineArtifactsBucketEncryptionKey8Bf0a7f3.attrArn,
          type: 'KMS',
        },
        location: myPipelineArtifactsBucket727923Dd.ref,
        type: 'S3',
      },
    });
    myPipelineAed38ecf.addDependency(myPipelineRoleDefaultPolicy34F09efa);
    myPipelineAed38ecf.addDependency(myPipelineRoleC0d47ca4);
  }
}

