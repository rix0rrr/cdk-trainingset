import * as cdk from 'aws-cdk-lib';
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
    const checkJob5Ffc1d6f = new stepfunctions.CfnActivity(this, 'CheckJob5FFC1D6F', {
      name: 'awsstepfunctionsintegCheckJobC4AC762D',
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

    const submitJobFb773a16 = new stepfunctions.CfnActivity(this, 'SubmitJobFB773A16', {
      name: 'awsstepfunctionsintegSubmitJobA2508960',
    });

    if (checkJob5Ffc1d6f == null) { throw new Error(`A combination of conditions caused 'checkJob5Ffc1d6f' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (submitJobFb773a16 == null) { throw new Error(`A combination of conditions caused 'submitJobFb773a16' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Submit Job\",\"States\":{\"Submit Job\":{\"Next\":\"Wait X Seconds\",\"Type\":\"Task\",\"Resource\":\"',
        submitJobFb773a16.ref,
        '\",\"ResultPath\":\"$.guid\"},\"Wait X Seconds\":{\"Type\":\"Wait\",\"SecondsPath\":\"$.wait_time\",\"Next\":\"Get Job Status\"},\"Get Job Status\":{\"Next\":\"Job Complete?\",\"InputPath\":\"$.guid\",\"Type\":\"Task\",\"Resource\":\"',
        checkJob5Ffc1d6f.ref,
        '\",\"ResultPath\":\"$.status\"},\"Job Complete?\":{\"Type\":\"Choice\",\"Choices\":[{\"Variable\":\"$.status\",\"StringEquals\":\"FAILED\",\"Next\":\"Job Failed\"},{\"Variable\":\"$.status\",\"StringEquals\":\"SUCCEEDED\",\"Next\":\"Get Final Job Status\"}],\"Default\":\"Wait X Seconds\"},\"Job Failed\":{\"Type\":\"Fail\",\"Error\":\"DescribeJob returned FAILED\",\"Cause\":\"AWS Batch Job Failed\"},\"Get Final Job Status\":{\"End\":true,\"InputPath\":\"$.guid\",\"Type\":\"Task\",\"Resource\":\"',
        checkJob5Ffc1d6f.ref,
        '\"}},\"TimeoutSeconds\":30}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);
  }
}

