import * as cdk from 'aws-cdk-lib';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsInteg extends cdk.Stack {
  public readonly stateMachineArnOutput;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsIntegProps = {}) {
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
    const glueJobRole1Cd031e0 = new iam.CfnRole(this, 'GlueJobRole1CD031E0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'glue',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSGlueServiceRole',
        ].join(''),
      ],
    });

    const stateMachineRole543B9670 = new iam.CfnRole(this, 'StateMachineRole543B9670', {
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

    if (glueJobRole1Cd031e0 == null) { throw new Error(`A combination of conditions caused 'glueJobRole1Cd031e0' to be undefined. Fixit.`); }
    const glueJob = new glue.CfnJob(this, 'GlueJob', {
      command: {
        name: 'glueetl',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/d030bb7913ca422df69f29b2ea678ab4e5085bb3cbb17029e4b101d2dc4e3e0d.py',
        ].join(''),
      },
      role: glueJobRole1Cd031e0.attrArn,
      glueVersion: '1.0',
      name: 'My Glue Job',
    });

    if (glueJobRole1Cd031e0 == null) { throw new Error(`A combination of conditions caused 'glueJobRole1Cd031e0' to be undefined. Fixit.`); }
    const glueJobRoleDefaultPolicy3D94d6f1 = new iam.CfnPolicy(this, 'GlueJobRoleDefaultPolicy3D94D6F1', {
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
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'GlueJobRoleDefaultPolicy3D94D6F1',
      roles: [
        glueJobRole1Cd031e0.ref,
      ],
    });

    if (stateMachineRole543B9670 == null) { throw new Error(`A combination of conditions caused 'stateMachineRole543B9670' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDa5f7da8 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDA5F7DA8', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'glue:BatchStopJobRun',
              'glue:GetJobRun',
              'glue:GetJobRuns',
              'glue:StartJobRun',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':glue:',
              this.region,
              ':',
              this.account,
              ':job/My Glue Job',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDA5F7DA8',
      roles: [
        stateMachineRole543B9670.ref,
      ],
    });

    if (stateMachineRole543B9670 == null) { throw new Error(`A combination of conditions caused 'stateMachineRole543B9670' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDa5f7da8 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDa5f7da8' to be undefined. Fixit.`); }
    const stateMachine81935E76 = new stepfunctions.CfnStateMachine(this, 'StateMachine81935E76', {
      roleArn: stateMachineRole543B9670.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start Task\",\"States\":{\"Start Task\":{\"Type\":\"Pass\",\"Next\":\"Glue Job Task\"},\"Glue Job Task\":{\"Next\":\"End Task\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::glue:startJobRun.sync\",\"Parameters\":{\"JobName\":\"My Glue Job\",\"Arguments\":{\"--enable-metrics\":\"true\"}}},\"End Task\":{\"Type\":\"Pass\",\"End\":true}}}',
      ].join(''),
    });
    stateMachine81935E76.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine81935E76.addDependency(stateMachineRoleDefaultPolicyDa5f7da8);
    stateMachine81935E76.addDependency(stateMachineRole543B9670);

    // Outputs
    this.stateMachineArnOutput = stateMachine81935E76.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineARNOutput', {
      key: 'StateMachineARNOutput',
      value: this.stateMachineArnOutput!.toString(),
    });
  }
}

