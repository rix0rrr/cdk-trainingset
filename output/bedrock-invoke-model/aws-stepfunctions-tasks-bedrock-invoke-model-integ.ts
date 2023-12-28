import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksBedrockInvokeModelIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksBedrockInvokeModelInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksBedrockInvokeModelIntegProps = {}) {
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
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'bedrock:InvokeModel',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':bedrock:',
              this.region,
              '::foundation-model/amazon.titan-text-express-v1',
            ].join(''),
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
        '{\"StartAt\":\"Prompt1\",\"States\":{\"Prompt1\":{\"Next\":\"Prompt2\",\"Type\":\"Task\",\"ResultPath\":\"$\",\"ResultSelector\":{\"names.$\":\"$.Body.results[0].outputText\"},\"Resource\":\"arn:',
        this.partition,
        ':states:::bedrock:invokeModel\",\"Parameters\":{\"ModelId\":\"arn:',
        this.partition,
        ':bedrock:',
        this.region,
        '::foundation-model/amazon.titan-text-express-v1\",\"Body\":{\"inputText\":\"Generate a list of five first names.\",\"textGenerationConfig\":{\"maxTokenCount\":100,\"temperature\":1}}}},\"Prompt2\":{\"End\":true,\"Type\":\"Task\",\"ResultPath\":\"$\",\"ResultSelector\":{\"names.$\":\"$.Body.results[0].outputText\"},\"Resource\":\"arn:',
        this.partition,
        ':states:::bedrock:invokeModel\",\"Parameters\":{\"ModelId\":\"arn:',
        this.partition,
        ':bedrock:',
        this.region,
        '::foundation-model/amazon.titan-text-express-v1\",\"Body\":{\"inputText.$\":\"States.Format(\'Alphabetize this list of first names:\\n{}\', $.names)\",\"textGenerationConfig\":{\"maxTokenCount\":100,\"temperature\":1}}}}},\"TimeoutSeconds\":30}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);
  }
}

