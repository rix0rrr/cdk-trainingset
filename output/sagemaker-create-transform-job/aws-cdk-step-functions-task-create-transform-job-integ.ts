import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-cdk-step-functions-task-create-transform-job-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-step-functions-task-create-transform-job-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-step-functions-task-create-transform-job-integProps = {}) {
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
    const batchInferenceTaskSagemakerTransformRoleEabcce1a = new iam.CfnRole(this, 'BatchInferenceTaskSagemakerTransformRoleEABCCE1A', {
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
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSageMakerFullAccess',
        ].join(''),
      ],
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

    if (batchInferenceTaskSagemakerTransformRoleEabcce1a == null) { throw new Error(`A combination of conditions caused 'batchInferenceTaskSagemakerTransformRoleEabcce1a' to be undefined. Fixit.`); }
    if (simpleStateMachineRole0Cbc135a == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineRole0Cbc135a' to be undefined. Fixit.`); }
    const simpleStateMachineRoleDefaultPolicyF5e1cb8e = new iam.CfnPolicy(this, 'SimpleStateMachineRoleDefaultPolicyF5E1CB8E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sagemaker:AddTags',
              'sagemaker:CreateTransformJob',
              'sagemaker:DescribeTransformJob',
              'sagemaker:StopTransformJob',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':sagemaker:',
              this.region,
              ':',
              this.account,
              ':transform-job/*',
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
            Resource: batchInferenceTaskSagemakerTransformRoleEabcce1a.attrArn,
          },
          {
            Action: [
              'events:DescribeRule',
              'events:PutRule',
              'events:PutTargets',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':rule/StepFunctionsGetEventsForSageMakerTransformJobsRule',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SimpleStateMachineRoleDefaultPolicyF5E1CB8E',
      roles: [
        simpleStateMachineRole0Cbc135a.ref,
      ],
    });

    if (simpleStateMachineRole0Cbc135a == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineRole0Cbc135a' to be undefined. Fixit.`); }
    if (simpleStateMachineRoleDefaultPolicyF5e1cb8e == null) { throw new Error(`A combination of conditions caused 'simpleStateMachineRoleDefaultPolicyF5e1cb8e' to be undefined. Fixit.`); }
    const simpleStateMachineE8e2cf40 = new stepfunctions.CfnStateMachine(this, 'SimpleStateMachineE8E2CF40', {
      definitionString: [
        '{\"StartAt\":\"BatchInferenceTask\",\"States\":{\"BatchInferenceTask\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::sagemaker:createTransformJob.sync\",\"Parameters\":{\"ModelName\":\"MyModelName\",\"TransformInput\":{\"DataSource\":{\"S3DataSource\":{\"S3Uri\":\"s3://inputbucket/prefix\",\"S3DataType\":\"S3Prefix\"}}},\"TransformJobName\":\"MyTransformJob\",\"TransformOutput\":{\"S3OutputPath\":\"s3://outputbucket/result\"},\"TransformResources\":{\"InstanceCount\":1,\"InstanceType\":\"ml.m4.xlarge\"}}}}}',
      ].join(''),
      roleArn: simpleStateMachineRole0Cbc135a.attrArn,
    });
    simpleStateMachineE8e2cf40.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    simpleStateMachineE8e2cf40.addDependency(simpleStateMachineRoleDefaultPolicyF5e1cb8e);
    simpleStateMachineE8e2cf40.addDependency(simpleStateMachineRole0Cbc135a);
  }
}

