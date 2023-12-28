import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsIntegSagemakerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsIntegSagemaker extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsIntegSagemakerProps = {}) {
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
    const createModelSagemakerRoleC2e07fc0 = new iam.CfnRole(this, 'CreateModelSagemakerRoleC2E07FC0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: [
                  'cloudwatch:PutMetricData',
                  'ecr:GetAuthorizationToken',
                  'logs:CreateLogGroup',
                  'logs:CreateLogStream',
                  'logs:DescribeLogStreams',
                  'logs:PutLogEvents',
                ],
                Effect: 'Allow',
                Resource: '*',
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'CreateModel',
        },
      ],
    });

    const encryptionKey1B843e66 = new kms.CfnKey(this, 'EncryptionKey1B843E66', {
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
    encryptionKey1B843e66.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
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

    const trainTaskSagemakerRoleD5a6f967 = new iam.CfnRole(this, 'TrainTaskSagemakerRoleD5A6F967', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: [
                  'cloudwatch:PutMetricData',
                  'ecr:GetAuthorizationToken',
                  'logs:CreateLogGroup',
                  'logs:CreateLogStream',
                  'logs:DescribeLogStreams',
                  'logs:PutLogEvents',
                ],
                Effect: 'Allow',
                Resource: '*',
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'CreateTrainingJob',
        },
      ],
    });

    if (createModelSagemakerRoleC2e07fc0 == null) { throw new Error(`A combination of conditions caused 'createModelSagemakerRoleC2e07fc0' to be undefined. Fixit.`); }
    const createModelSagemakerRoleDefaultPolicyD7eaa79e = new iam.CfnPolicy(this, 'CreateModelSagemakerRoleDefaultPolicyD7EAA79E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
              's3:GetObject',
              's3:ListBucket',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CreateModelSagemakerRoleDefaultPolicyD7EAA79E',
      roles: [
        createModelSagemakerRoleC2e07fc0.ref,
      ],
    });

    if (createModelSagemakerRoleC2e07fc0 == null) { throw new Error(`A combination of conditions caused 'createModelSagemakerRoleC2e07fc0' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRoleD5a6f967 == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRoleD5a6f967' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sagemaker:CreateTrainingJob',
              'sagemaker:DescribeTrainingJob',
              'sagemaker:StopTrainingJob',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':sagemaker:',
              this.region,
              ':',
              this.account,
              ':training-job/mytrainingjob*',
            ].join(''),
          },
          {
            Action: 'sagemaker:ListTags',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Condition: {
              StringEquals: {
                'iam:PassedToService': 'sagemaker.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Resource: [
              createModelSagemakerRoleC2e07fc0.attrArn,
              trainTaskSagemakerRoleD5a6f967.attrArn,
            ],
          },
          {
            Action: 'sagemaker:CreateModel',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':sagemaker:',
              this.region,
              ':',
              this.account,
              ':model/*',
            ].join(''),
          },
          {
            Action: 'sagemaker:CreateEndpointConfig',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':sagemaker:',
              this.region,
              ':',
              this.account,
              ':endpoint-config/*',
            ].join(''),
          },
          {
            Action: [
              'sagemaker:createEndpoint',
              'sagemaker:updateEndpoint',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':sagemaker:',
                this.region,
                ':',
                this.account,
                ':endpoint-config/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':sagemaker:',
                this.region,
                ':',
                this.account,
                ':endpoint/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    const trainingData3Fdb6d34 = new s3.CfnBucket(this, 'TrainingData3FDB6D34', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: encryptionKey1B843e66.attrArn,
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    trainingData3Fdb6d34.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (createModelSagemakerRoleC2e07fc0 == null) { throw new Error(`A combination of conditions caused 'createModelSagemakerRoleC2e07fc0' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRoleD5a6f967 == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRoleD5a6f967' to be undefined. Fixit.`); }
    if (trainingData3Fdb6d34 == null) { throw new Error(`A combination of conditions caused 'trainingData3Fdb6d34' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"Endpoint\":{\"Image\":\"ImageArn\",\"Config\":\"MyEndpointConfig\",\"Name\":\"MyEndpointName\",\"Model\":\"MyEndpointModelName\"}},\"Next\":\"Train Task\"},\"Train Task\":{\"Next\":\"Create Model\",\"Type\":\"Task\",\"ResultPath\":\"$.TrainingJob\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createTrainingJob\",\"Parameters\":{\"TrainingJobName\":\"mytrainingjob\",\"RoleArn\":\"',
        trainTaskSagemakerRoleD5a6f967.attrArn,
        '\",\"AlgorithmSpecification\":{\"TrainingInputMode\":\"File\",\"AlgorithmName\":\"arn:aws:sagemaker:us-east-1:865070037744:algorithm/scikit-decision-trees-15423055-57b73412d2e93e9239e4e16f83298b8f\"},\"InputDataConfig\":[{\"ChannelName\":\"InputData\",\"DataSource\":{\"S3DataSource\":{\"S3Uri\":\"https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        trainingData3Fdb6d34.ref,
        '/data/\",\"S3DataType\":\"S3Prefix\"}}}],\"OutputDataConfig\":{\"S3OutputPath\":\"https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        trainingData3Fdb6d34.ref,
        '/result/\"},\"ResourceConfig\":{\"InstanceCount\":1,\"InstanceType\":\"ml.m4.xlarge\",\"VolumeSizeInGB\":10},\"StoppingCondition\":{\"MaxRuntimeInSeconds\":3600}}},\"Create Model\":{\"Next\":\"Create enpoint config\",\"Type\":\"Task\",\"ResultPath\":\"$.Model\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createModel\",\"Parameters\":{\"ExecutionRoleArn\":\"',
        createModelSagemakerRoleC2e07fc0.attrArn,
        '\",\"ModelName.$\":\"$.Endpoint.Model\",\"PrimaryContainer\":{\"Image.$\":\"$.Endpoint.Image\",\"Mode\":\"SingleModel\",\"ModelDataUrl.$\":\"$.TrainingJob.ModelArtifacts.S3ModelArtifacts\"}}},\"Create enpoint config\":{\"Next\":\"Create endpoint\",\"Type\":\"Task\",\"ResultPath\":\"$.EndpointConfig\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createEndpointConfig\",\"Parameters\":{\"EndpointConfigName.$\":\"$.Endpoint.Config\",\"ProductionVariants\":[{\"InitialInstanceCount\":1,\"InstanceType\":\"ml.m5.xlarge\",\"ModelName.$\":\"$.Endpoint.Model\",\"VariantName\":\"awesome-variant\"}]}},\"Create endpoint\":{\"End\":true,\"Catch\":[{\"ErrorEquals\":[\"States.TaskFailed\"],\"ResultPath\":\"$.EndpointDeployed\",\"Next\":\"Update endpoint\"}],\"Type\":\"Task\",\"ResultPath\":\"$.EndpointDeployed\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createEndpoint\",\"Parameters\":{\"EndpointConfigName.$\":\"$.Endpoint.Config\",\"EndpointName.$\":\"$.Endpoint.Name\",\"Tags\":[{\"Key\":\"Endpoint\",\"Value\":\"New\"}]}},\"Update endpoint\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:updateEndpoint\",\"Parameters\":{\"EndpointConfigName.$\":\"$.Endpoint.Config\",\"EndpointName.$\":\"$.Endpoint.Name\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRoleD5a6f967 == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRoleD5a6f967' to be undefined. Fixit.`); }
    if (trainingData3Fdb6d34 == null) { throw new Error(`A combination of conditions caused 'trainingData3Fdb6d34' to be undefined. Fixit.`); }
    const trainTaskSagemakerRoleDefaultPolicy163Ccc72 = new iam.CfnPolicy(this, 'TrainTaskSagemakerRoleDefaultPolicy163CCC72', {
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
              trainingData3Fdb6d34.attrArn,
              [
                trainingData3Fdb6d34.attrArn,
                '/data/*',
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
            Resource: encryptionKey1B843e66.attrArn,
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
              trainingData3Fdb6d34.attrArn,
              [
                trainingData3Fdb6d34.attrArn,
                '/result/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TrainTaskSagemakerRoleDefaultPolicy163CCC72',
      roles: [
        trainTaskSagemakerRoleD5a6f967.ref,
      ],
    });

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineArn', {
      key: 'StateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

