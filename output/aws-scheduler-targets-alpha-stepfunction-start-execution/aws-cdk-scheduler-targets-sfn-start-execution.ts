import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsCdkSchedulerTargetsSfnStartExecutionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSchedulerTargetsSfnStartExecution extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSchedulerTargetsSfnStartExecutionProps = {}) {
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
    const myParameter18Ba547d = new ssm.CfnParameter(this, 'MyParameter18BA547D', {
      name: 'MyParameter',
      type: 'String',
      value: '🌧️',
    });

    const schedulerRoleForTarget1441a743A31888 = new iam.CfnRole(this, 'SchedulerRoleForTarget1441a743A31888', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'scheduler.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'ssm:putParameter',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"PutParameter\",\"States\":{\"PutParameter\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:ssm:putParameter\",\"Parameters\":{\"Name.$\":\"$.Name\",\"Value.$\":\"$.Value\",\"Type\":\"String\",\"Overwrite\":true}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(10 minutes)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: stateMachine2E01a3a5.ref,
        input: '{\"Name\":\"MyParameter\",\"Value\":\"🌈\"}',
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });

    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: stateMachine2E01a3a5.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });
  }
}

