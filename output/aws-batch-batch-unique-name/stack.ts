import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface StackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackProps = {}) {
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
    const computeEnvironmentBatchServiceRole3533Be31 = new iam.CfnRole(this, 'ComputeEnvironmentBatchServiceRole3533BE31', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'batch.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSBatchServiceRole',
        ].join(''),
      ],
    });

    const myJobEventsRoleCf43c336 = new iam.CfnRole(this, 'MyJobEventsRoleCF43C336', {
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

    const containerExecutionRoleFd602179 = new iam.CfnRole(this, 'containerExecutionRoleFD602179', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (computeEnvironmentBatchServiceRole3533Be31 == null) { throw new Error(`A combination of conditions caused 'computeEnvironmentBatchServiceRole3533Be31' to be undefined. Fixit.`); }
    const computeEnvironmentC570994d = new batch.CfnComputeEnvironment(this, 'ComputeEnvironmentC570994D', {
      serviceRole: computeEnvironmentBatchServiceRole3533Be31.attrArn,
      state: 'ENABLED',
      type: 'unmanaged',
    });

    if (containerExecutionRoleFd602179 == null) { throw new Error(`A combination of conditions caused 'containerExecutionRoleFd602179' to be undefined. Fixit.`); }
    const myJob8719E923 = new batch.CfnJobDefinition(this, 'MyJob8719E923', {
      containerProperties: {
        environment: [
        ],
        executionRoleArn: containerExecutionRoleFd602179.attrArn,
        image: 'test-repo',
        readonlyRootFilesystem: false,
        resourceRequirements: [
          {
            type: 'MEMORY',
            value: '2048',
          },
          {
            type: 'VCPU',
            value: '256',
          },
        ],
      },
      platformCapabilities: [
        'EC2',
      ],
      retryStrategy: {
      },
      timeout: {
      },
      type: 'container',
    });

    if (containerExecutionRoleFd602179 == null) { throw new Error(`A combination of conditions caused 'containerExecutionRoleFd602179' to be undefined. Fixit.`); }
    const containerExecutionRoleDefaultPolicyF00da4d6 = new iam.CfnPolicy(this, 'containerExecutionRoleDefaultPolicyF00DA4D6', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:/aws/batch/job:*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'containerExecutionRoleDefaultPolicyF00DA4D6',
      roles: [
        containerExecutionRoleFd602179.ref,
      ],
    });

    if (computeEnvironmentC570994d == null) { throw new Error(`A combination of conditions caused 'computeEnvironmentC570994d' to be undefined. Fixit.`); }
    const myQueueE6ca6235 = new batch.CfnJobQueue(this, 'MyQueueE6CA6235', {
      computeEnvironmentOrder: [
        {
          computeEnvironment: computeEnvironmentC570994d.attrComputeEnvironmentArn,
          order: 1,
        },
      ],
      priority: 1,
      state: 'ENABLED',
    });

    if (myJob8719E923 == null) { throw new Error(`A combination of conditions caused 'myJob8719E923' to be undefined. Fixit.`); }
    if (myJobEventsRoleCf43c336 == null) { throw new Error(`A combination of conditions caused 'myJobEventsRoleCf43c336' to be undefined. Fixit.`); }
    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    const myJobEventsRoleDefaultPolicy7266D3a7 = new iam.CfnPolicy(this, 'MyJobEventsRoleDefaultPolicy7266D3A7', {
      policyDocument: {
        Statement: [
          {
            Action: 'batch:SubmitJob',
            Effect: 'Allow',
            Resource: [
              myQueueE6ca6235.attrJobQueueArn,
              myJob8719E923.ref,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyJobEventsRoleDefaultPolicy7266D3A7',
      roles: [
        myJobEventsRoleCf43c336.ref,
      ],
    });

    if (myJob8719E923 == null) { throw new Error(`A combination of conditions caused 'myJob8719E923' to be undefined. Fixit.`); }
    if (myJobEventsRoleCf43c336 == null) { throw new Error(`A combination of conditions caused 'myJobEventsRoleCf43c336' to be undefined. Fixit.`); }
    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    const rule4C995b7f = new events.CfnRule(this, 'Rule4C995B7F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myQueueE6ca6235.attrJobQueueArn,
          batchParameters: {
            jobDefinition: myJob8719E923.ref,
            jobName: 'stackRuleD7D0AD75',
          },
          id: 'Target0',
          roleArn: myJobEventsRoleCf43c336.attrArn,
        },
      ],
    });
  }
}

