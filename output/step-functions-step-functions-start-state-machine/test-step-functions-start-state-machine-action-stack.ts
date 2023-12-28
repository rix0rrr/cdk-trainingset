import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface TestStepFunctionsStartStateMachineActionStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TestStepFunctionsStartStateMachineActionStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestStepFunctionsStartStateMachineActionStackProps = {}) {
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
    const smRole49C19c48 = new iam.CfnRole(this, 'SMRole49C19C48', {
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

    const topicRuleTopicRuleActionRole246C4f77 = new iam.CfnRole(this, 'TopicRuleTopicRuleActionRole246C4F77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iot.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (smRole49C19c48 == null) { throw new Error(`A combination of conditions caused 'smRole49C19c48' to be undefined. Fixit.`); }
    const sm934e715a = new stepfunctions.CfnStateMachine(this, 'SM934E715A', {
      roleArn: smRole49C19c48.attrArn,
      definitionString: '{\"StartAt\":\"Hello\",\"States\":{\"Hello\":{\"Type\":\"Wait\",\"Seconds\":10,\"End\":true}}}',
    });
    sm934e715a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    sm934e715a.addDependency(smRole49C19c48);

    if (sm934e715a == null) { throw new Error(`A combination of conditions caused 'sm934e715a' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            stepFunctions: {
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
              stateMachineName: cdk.Fn.select(6, cdk.Fn.split(':', sm934e715a.ref)),
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        sql: 'SELECT * FROM \'device/+/data\'',
      },
    });

    if (sm934e715a == null) { throw new Error(`A combination of conditions caused 'sm934e715a' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: sm934e715a.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687',
      roles: [
        topicRuleTopicRuleActionRole246C4f77.ref,
      ],
    });
  }
}

