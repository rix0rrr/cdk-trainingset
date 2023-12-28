import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksCallAwsServiceSfnIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksCallAwsServiceSfnInteg extends cdk.Stack {
  public readonly exportsOutputRefParentStateMachine74Ea937a758ecf42;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksCallAwsServiceSfnIntegProps = {}) {
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
    const childStateMachineRoleA7f7ab78 = new iam.CfnRole(this, 'ChildStateMachineRoleA7F7AB78', {
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

    const parentStateMachineRoleE902d002 = new iam.CfnRole(this, 'ParentStateMachineRoleE902D002', {
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

    if (childStateMachineRoleA7f7ab78 == null) { throw new Error(`A combination of conditions caused 'childStateMachineRoleA7f7ab78' to be undefined. Fixit.`); }
    const childStateMachineRoleDefaultPolicy8B4560f0 = new iam.CfnPolicy(this, 'ChildStateMachineRoleDefaultPolicy8B4560F0', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:sendTaskSuccess',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ChildStateMachineRoleDefaultPolicy8B4560F0',
      roles: [
        childStateMachineRoleA7f7ab78.ref,
      ],
    });

    if (childStateMachineRoleA7f7ab78 == null) { throw new Error(`A combination of conditions caused 'childStateMachineRoleA7f7ab78' to be undefined. Fixit.`); }
    if (childStateMachineRoleDefaultPolicy8B4560f0 == null) { throw new Error(`A combination of conditions caused 'childStateMachineRoleDefaultPolicy8B4560f0' to be undefined. Fixit.`); }
    const childStateMachine9133117F = new stepfunctions.CfnStateMachine(this, 'ChildStateMachine9133117F', {
      roleArn: childStateMachineRoleA7f7ab78.attrArn,
      definitionString: [
        '{\"StartAt\":\"SendTaskSuccess\",\"States\":{\"SendTaskSuccess\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:sfn:sendTaskSuccess\",\"Parameters\":{\"Output.$\":\"$.output\",\"TaskToken.$\":\"$.taskToken\"}}}}',
      ].join(''),
    });
    childStateMachine9133117F.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    childStateMachine9133117F.addDependency(childStateMachineRoleDefaultPolicy8B4560f0);
    childStateMachine9133117F.addDependency(childStateMachineRoleA7f7ab78);

    if (childStateMachine9133117F == null) { throw new Error(`A combination of conditions caused 'childStateMachine9133117F' to be undefined. Fixit.`); }
    if (parentStateMachineRoleE902d002 == null) { throw new Error(`A combination of conditions caused 'parentStateMachineRoleE902d002' to be undefined. Fixit.`); }
    const parentStateMachineRoleDefaultPolicyA368a0ba = new iam.CfnPolicy(this, 'ParentStateMachineRoleDefaultPolicyA368A0BA', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: childStateMachine9133117F.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ParentStateMachineRoleDefaultPolicyA368A0BA',
      roles: [
        parentStateMachineRoleE902d002.ref,
      ],
    });

    if (childStateMachine9133117F == null) { throw new Error(`A combination of conditions caused 'childStateMachine9133117F' to be undefined. Fixit.`); }
    if (parentStateMachineRoleDefaultPolicyA368a0ba == null) { throw new Error(`A combination of conditions caused 'parentStateMachineRoleDefaultPolicyA368a0ba' to be undefined. Fixit.`); }
    if (parentStateMachineRoleE902d002 == null) { throw new Error(`A combination of conditions caused 'parentStateMachineRoleE902d002' to be undefined. Fixit.`); }
    const parentStateMachine74Ea937a = new stepfunctions.CfnStateMachine(this, 'ParentStateMachine74EA937A', {
      roleArn: parentStateMachineRoleE902d002.attrArn,
      definitionString: [
        '{\"StartAt\":\"StepFunctionsStartExecution\",\"States\":{\"StepFunctionsStartExecution\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::states:startExecution.waitForTaskToken\",\"Parameters\":{\"Input\":{\"output.$\":\"$\",\"taskToken.$\":\"$$.Task.Token\"},\"StateMachineArn\":\"',
        childStateMachine9133117F.ref,
        '\"}}}}',
      ].join(''),
    });
    parentStateMachine74Ea937a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    parentStateMachine74Ea937a.addDependency(parentStateMachineRoleDefaultPolicyA368a0ba);
    parentStateMachine74Ea937a.addDependency(parentStateMachineRoleE902d002);

    // Outputs
    this.exportsOutputRefParentStateMachine74Ea937a758ecf42 = parentStateMachine74Ea937a.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefParentStateMachine74EA937A758ECF42', {
      key: 'ExportsOutputRefParentStateMachine74EA937A758ECF42',
      exportName: 'aws-stepfunctions-tasks-call-aws-service-sfn-integ:ExportsOutputRefParentStateMachine74EA937A758ECF42',
      value: this.exportsOutputRefParentStateMachine74Ea937a758ecf42!.toString(),
    });
  }
}

