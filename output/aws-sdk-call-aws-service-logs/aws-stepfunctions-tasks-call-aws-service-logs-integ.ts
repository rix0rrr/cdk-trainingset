import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksCallAwsServiceLogsIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksCallAwsServiceLogsInteg extends cdk.Stack {
  public readonly exportsOutputRefStateMachine2E01a3a5ba46f753;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksCallAwsServiceLogsIntegProps = {}) {
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
    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'logs:createLogStream',
            Effect: 'Allow',
            Resource: logGroupF5b46931.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"SendTaskSuccess\",\"States\":{\"SendTaskSuccess\":{\"End\":true,\"Type\":\"Task\",\"ResultPath\":null,\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:cloudwatchlogs:createLogStream\",\"Parameters\":{\"LogGroupName\":\"',
        logGroupF5b46931.ref,
        '\",\"LogStreamName.$\":\"$$.Execution.Name\"}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.exportsOutputRefStateMachine2E01a3a5ba46f753 = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefStateMachine2E01A3A5BA46F753', {
      key: 'ExportsOutputRefStateMachine2E01A3A5BA46F753',
      exportName: 'aws-stepfunctions-tasks-call-aws-service-logs-integ:ExportsOutputRefStateMachine2E01A3A5BA46F753',
      value: this.exportsOutputRefStateMachine2E01a3a5ba46f753!.toString(),
    });
  }
}

