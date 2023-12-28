import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface integ-stepfunctions-sagemakerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-stepfunctions-sagemaker extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: integ-stepfunctions-sagemakerProps = {}) {
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

    const trainTaskSagemakerRole0A9b1cdd = new iam.CfnRole(this, 'TrainTaskSagemakerRole0A9B1CDD', {
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRole0A9b1cdd == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRole0A9b1cdd' to be undefined. Fixit.`); }
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
            Resource: trainTaskSagemakerRole0A9b1cdd.attrArn,
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRole0A9b1cdd == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRole0A9b1cdd' to be undefined. Fixit.`); }
    if (trainingData3Fdb6d34 == null) { throw new Error(`A combination of conditions caused 'trainingData3Fdb6d34' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"TrainTask\",\"States\":{\"TrainTask\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createTrainingJob\",\"Parameters\":{\"TrainingJobName\":\"mytrainingjob\",\"RoleArn\":\"',
        trainTaskSagemakerRole0A9b1cdd.attrArn,
        '\",\"AlgorithmSpecification\":{\"TrainingInputMode\":\"FastFile\",\"AlgorithmName\":\"BlazingText\"},\"InputDataConfig\":[{\"ChannelName\":\"InputData\",\"DataSource\":{\"S3DataSource\":{\"S3Uri\":\"https://s3.',
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
        '/result/\"},\"ResourceConfig\":{\"InstanceCount\":1,\"InstanceType\":\"ml.m4.xlarge\",\"VolumeSizeInGB\":10},\"StoppingCondition\":{\"MaxRuntimeInSeconds\":3600}}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    if (trainTaskSagemakerRole0A9b1cdd == null) { throw new Error(`A combination of conditions caused 'trainTaskSagemakerRole0A9b1cdd' to be undefined. Fixit.`); }
    if (trainingData3Fdb6d34 == null) { throw new Error(`A combination of conditions caused 'trainingData3Fdb6d34' to be undefined. Fixit.`); }
    const trainTaskSagemakerRoleDefaultPolicyA28f72fa = new iam.CfnPolicy(this, 'TrainTaskSagemakerRoleDefaultPolicyA28F72FA', {
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
      policyName: 'TrainTaskSagemakerRoleDefaultPolicyA28F72FA',
      roles: [
        trainTaskSagemakerRole0A9b1cdd.ref,
      ],
    });

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

