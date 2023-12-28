import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface IntegSfnStartExecutionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegSfnStartExecution extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: IntegSfnStartExecutionProps = {}) {
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
    const childRole1E3e0ef5 = new iam.CfnRole(this, 'ChildRole1E3E0EF5', {
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

    const parentRole5F0c366c = new iam.CfnRole(this, 'ParentRole5F0C366C', {
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

    if (childRole1E3e0ef5 == null) { throw new Error(`A combination of conditions caused 'childRole1E3e0ef5' to be undefined. Fixit.`); }
    const childDab30558 = new stepfunctions.CfnStateMachine(this, 'ChildDAB30558', {
      roleArn: childRole1E3e0ef5.attrArn,
      definitionString: '{\"StartAt\":\"Pass\",\"States\":{\"Pass\":{\"Type\":\"Pass\",\"End\":true}}}',
    });
    childDab30558.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    childDab30558.addDependency(childRole1E3e0ef5);

    if (childDab30558 == null) { throw new Error(`A combination of conditions caused 'childDab30558' to be undefined. Fixit.`); }
    if (parentRole5F0c366c == null) { throw new Error(`A combination of conditions caused 'parentRole5F0c366c' to be undefined. Fixit.`); }
    const parentRoleDefaultPolicy9Bdc56dc = new iam.CfnPolicy(this, 'ParentRoleDefaultPolicy9BDC56DC', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: childDab30558.ref,
          },
          {
            Action: [
              'states:DescribeExecution',
              'states:StopExecution',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':states:',
              this.region,
              ':',
              this.account,
              ':execution:',
              cdk.Fn.select(6, cdk.Fn.split(':', childDab30558.ref)),
              '*',
            ].join(''),
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
              ':rule/StepFunctionsGetEventsForStepFunctionsExecutionRule',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ParentRoleDefaultPolicy9BDC56DC',
      roles: [
        parentRole5F0c366c.ref,
      ],
    });

    if (childDab30558 == null) { throw new Error(`A combination of conditions caused 'childDab30558' to be undefined. Fixit.`); }
    if (parentRole5F0c366c == null) { throw new Error(`A combination of conditions caused 'parentRole5F0c366c' to be undefined. Fixit.`); }
    if (parentRoleDefaultPolicy9Bdc56dc == null) { throw new Error(`A combination of conditions caused 'parentRoleDefaultPolicy9Bdc56dc' to be undefined. Fixit.`); }
    const parent8B210403 = new stepfunctions.CfnStateMachine(this, 'Parent8B210403', {
      roleArn: parentRole5F0c366c.attrArn,
      definitionString: [
        '{\"StartAt\":\"Task\",\"States\":{\"Task\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::states:startExecution.sync:2\",\"Parameters\":{\"Input\":{\"hello.$\":\"$.hello\"},\"StateMachineArn\":\"',
        childDab30558.ref,
        '\"}}}}',
      ].join(''),
    });
    parent8B210403.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    parent8B210403.addDependency(parentRoleDefaultPolicy9Bdc56dc);
    parent8B210403.addDependency(parentRole5F0c366c);

    // Outputs
    this.stateMachineArn = parent8B210403.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineARN', {
      key: 'StateMachineARN',
      value: this.stateMachineArn!.toString(),
    });
  }
}

