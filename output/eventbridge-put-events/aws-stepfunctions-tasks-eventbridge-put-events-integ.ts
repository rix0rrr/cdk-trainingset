import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-stepfunctions-tasks-eventbridge-put-events-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-stepfunctions-tasks-eventbridge-put-events-integ extends cdk.Stack {
  public readonly exportsOutputRefStateMachine2E01a3a5ba46f753;

  public constructor(scope: cdk.App, id: string, props: aws-stepfunctions-tasks-eventbridge-put-events-integProps = {}) {
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
    const eventBus7B8748aa = new events.CfnEventBus(this, 'EventBus7B8748AA', {
      name: 'MyEventBus1',
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

    if (eventBus7B8748aa == null) { throw new Error(`A combination of conditions caused 'eventBus7B8748aa' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: [
              eventBus7B8748aa.attrArn,
              [
                'arn:',
                this.partition,
                ':events:',
                this.region,
                ':',
                this.account,
                ':event-bus/default',
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

    if (eventBus7B8748aa == null) { throw new Error(`A combination of conditions caused 'eventBus7B8748aa' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Put Custom Events\",\"States\":{\"Put Custom Events\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::events:putEvents\",\"Parameters\":{\"Entries\":[{\"Detail\":{\"Message\":\"Hello from Step Functions!\"},\"DetailType\":\"MessageFromStepFunctions\",\"Source\":\"step.functions\"},{\"Detail\":{\"Message\":\"Hello from Step Functions!\"},\"DetailType\":\"MessageFromStepFunctions\",\"EventBusName\":\"',
        eventBus7B8748aa.attrArn,
        '\",\"Source\":\"step.functions\"}]}}},\"TimeoutSeconds\":30}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.exportsOutputRefStateMachine2E01a3a5ba46f753 = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefStateMachine2E01A3A5BA46F753', {
      key: 'ExportsOutputRefStateMachine2E01A3A5BA46F753',
      exportName: 'aws-stepfunctions-tasks-eventbridge-put-events-integ:ExportsOutputRefStateMachine2E01A3A5BA46F753',
      value: this.exportsOutputRefStateMachine2E01a3a5ba46f753!.toString(),
    });
  }
}

