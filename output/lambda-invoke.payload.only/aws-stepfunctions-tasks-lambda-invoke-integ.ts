import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksLambdaInvokeIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksLambdaInvokeInteg extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksLambdaInvokeIntegProps = {}) {
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

    const checkJobStateLambdaServiceRoleB8b57b65 = new iam.CfnRole(this, 'checkJobStateLambdaServiceRoleB8B57B65', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const submitJobLambdaServiceRole4D897abd = new iam.CfnRole(this, 'submitJobLambdaServiceRole4D897ABD', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (checkJobStateLambdaServiceRoleB8b57b65 == null) { throw new Error(`A combination of conditions caused 'checkJobStateLambdaServiceRoleB8b57b65' to be undefined. Fixit.`); }
    const checkJobStateLambda4618B7b7 = new lambda.CfnFunction(this, 'checkJobStateLambda4618B7B7', {
      code: {
        zipFile: 'exports.handler = async function(event, context) {\n        return {\n          status: event.statusCode === \'200\' ? \'SUCCEEDED\' : \'FAILED\'\n        };\n  };',
      },
      handler: 'index.handler',
      role: checkJobStateLambdaServiceRoleB8b57b65.attrArn,
      runtime: 'nodejs18.x',
    });
    checkJobStateLambda4618B7b7.addDependency(checkJobStateLambdaServiceRoleB8b57b65);

    if (submitJobLambdaServiceRole4D897abd == null) { throw new Error(`A combination of conditions caused 'submitJobLambdaServiceRole4D897abd' to be undefined. Fixit.`); }
    const submitJobLambdaEfb00f3c = new lambda.CfnFunction(this, 'submitJobLambdaEFB00F3C', {
      code: {
        zipFile: 'exports.handler = async () => {\n        return {\n          statusCode: \'200\',\n          body: \'hello, world!\'\n        };\n      };',
      },
      handler: 'index.handler',
      role: submitJobLambdaServiceRole4D897abd.attrArn,
      runtime: 'nodejs18.x',
    });
    submitJobLambdaEfb00f3c.addDependency(submitJobLambdaServiceRole4D897abd);

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (checkJobStateLambda4618B7b7 == null) { throw new Error(`A combination of conditions caused 'checkJobStateLambda4618B7b7' to be undefined. Fixit.`); }
    if (submitJobLambdaEfb00f3c == null) { throw new Error(`A combination of conditions caused 'submitJobLambdaEfb00f3c' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              checkJobStateLambda4618B7b7.attrArn,
              submitJobLambdaEfb00f3c.attrArn,
              [
                checkJobStateLambda4618B7b7.attrArn,
                ':*',
              ].join(''),
              [
                submitJobLambdaEfb00f3c.attrArn,
                ':*',
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (checkJobStateLambda4618B7b7 == null) { throw new Error(`A combination of conditions caused 'checkJobStateLambda4618B7b7' to be undefined. Fixit.`); }
    if (submitJobLambdaEfb00f3c == null) { throw new Error(`A combination of conditions caused 'submitJobLambdaEfb00f3c' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"Invoke Handler\",\"States\":{\"Invoke Handler\":{\"Next\":\"Check the job state\",\"Retry\":[{\"ErrorEquals\":[\"Lambda.ClientExecutionTimeoutException\",\"Lambda.ServiceException\",\"Lambda.AWSLambdaException\",\"Lambda.SdkClientException\"],\"IntervalSeconds\":2,\"MaxAttempts\":6,\"BackoffRate\":2}],\"Type\":\"Task\",\"Resource\":\"',
        submitJobLambdaEfb00f3c.attrArn,
        '\"},\"Check the job state\":{\"Next\":\"Job Complete?\",\"Retry\":[{\"ErrorEquals\":[\"Lambda.ClientExecutionTimeoutException\",\"Lambda.ServiceException\",\"Lambda.AWSLambdaException\",\"Lambda.SdkClientException\"],\"IntervalSeconds\":2,\"MaxAttempts\":6,\"BackoffRate\":2}],\"Type\":\"Task\",\"Resource\":\"',
        checkJobStateLambda4618B7b7.attrArn,
        '\"},\"Job Complete?\":{\"Type\":\"Choice\",\"Choices\":[{\"Variable\":\"$.status\",\"StringEquals\":\"FAILED\",\"Next\":\"Job Failed\"},{\"Variable\":\"$.status\",\"StringEquals\":\"SUCCEEDED\",\"Next\":\"Final step\"}]},\"Job Failed\":{\"Type\":\"Fail\",\"Error\":\"Received a status that was not 200\",\"Cause\":\"Job Failed\"},\"Final step\":{\"Type\":\"Pass\",\"End\":true}},\"TimeoutSeconds\":30}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

