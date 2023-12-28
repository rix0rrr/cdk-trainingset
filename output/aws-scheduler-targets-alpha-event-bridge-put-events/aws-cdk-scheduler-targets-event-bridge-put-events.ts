import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsCdkSchedulerTargetsEventBridgePutEventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSchedulerTargetsEventBridgePutEvents extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSchedulerTargetsEventBridgePutEventsProps = {}) {
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
      name: 'EmojisTransformationEventBus',
    });

    const myParameter18Ba547d = new ssm.CfnParameter(this, 'MyParameter18BA547D', {
      name: 'MyEventBridgePutParameter',
      type: 'String',
      value: '🐶',
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

    const stateMachineEventsRoleDbcdecd1 = new iam.CfnRole(this, 'StateMachineEventsRoleDBCDECD1', {
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
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: eventBus7B8748aa.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
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

    if (eventBus7B8748aa == null) { throw new Error(`A combination of conditions caused 'eventBus7B8748aa' to be undefined. Fixit.`); }
    if (myParameter18Ba547d == null) { throw new Error(`A combination of conditions caused 'myParameter18Ba547d' to be undefined. Fixit.`); }
    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (stateMachineEventsRoleDbcdecd1 == null) { throw new Error(`A combination of conditions caused 'stateMachineEventsRoleDbcdecd1' to be undefined. Fixit.`); }
    const rule4C995b7f = new events.CfnRule(this, 'Rule4C995B7F', {
      description: [
        'Trigger the step function ',
        stateMachine2E01a3a5.attrName,
        ' every 10 minutes, which transforms the value of the parameter ',
        myParameter18Ba547d.ref,
        ' from 🐶 to 😺',
      ].join(''),
      eventBusName: eventBus7B8748aa.ref,
      eventPattern: {
        'detail-type': [
          '🐶➡️😺',
        ],
      },
      name: 'Transforms_dog_to_cat',
      state: 'ENABLED',
      targets: [
        {
          arn: stateMachine2E01a3a5.ref,
          id: 'Target0',
          input: '{\"Name\":\"MyEventBridgePutParameter\",\"Value\":\"😺\"}',
          roleArn: stateMachineEventsRoleDbcdecd1.attrArn,
        },
      ],
    });

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (stateMachineEventsRoleDbcdecd1 == null) { throw new Error(`A combination of conditions caused 'stateMachineEventsRoleDbcdecd1' to be undefined. Fixit.`); }
    const stateMachineEventsRoleDefaultPolicyFb602ca9 = new iam.CfnPolicy(this, 'StateMachineEventsRoleDefaultPolicyFB602CA9', {
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
      policyName: 'StateMachineEventsRoleDefaultPolicyFB602CA9',
      roles: [
        stateMachineEventsRoleDbcdecd1.ref,
      ],
    });

    if (eventBus7B8748aa == null) { throw new Error(`A combination of conditions caused 'eventBus7B8748aa' to be undefined. Fixit.`); }
    if (rule4C995b7f == null) { throw new Error(`A combination of conditions caused 'rule4C995b7f' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(10 minutes)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: eventBus7B8748aa.attrArn,
        eventBridgeParameters: {
          detailType: '🐶➡️😺',
          source: 'emoji-transformation',
        },
        input: '{\"foo\":\"bar\"}',
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });
    schedule83A77fd1.addDependency(rule4C995b7f);
  }
}

