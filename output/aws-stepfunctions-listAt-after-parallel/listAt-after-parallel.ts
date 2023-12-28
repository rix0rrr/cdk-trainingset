import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface ListatAfterParallelProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ListatAfterParallel extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ListatAfterParallelProps = {}) {
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
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: '{\"StartAt\":\"PRL\",\"States\":{\"PRL\":{\"Type\":\"Parallel\",\"ResultPath\":\"$\",\"Next\":\"JP\",\"Branches\":[{\"StartAt\":\"PSL\",\"States\":{\"PSL\":{\"Type\":\"Pass\",\"Parameters\":{\"newStringList.$\":\"$.stringList\"},\"End\":true}}},{\"StartAt\":\"PSS\",\"States\":{\"PSS\":{\"Type\":\"Pass\",\"Parameters\":{\"newSingleString.$\":\"$.singleString\"},\"End\":true}}}]},\"JP\":{\"Type\":\"Pass\",\"Parameters\":{\"resultStringList.$.$\":\"$[0].newStringList\",\"newSingleString.$\":\"$[1].newSingleString\"},\"End\":true}},\"TimeoutSeconds\":30}',
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);
  }
}

