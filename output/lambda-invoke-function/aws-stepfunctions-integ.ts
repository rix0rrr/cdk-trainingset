import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
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
    const callbackHandlerServiceRole3689695E = new iam.CfnRole(this, 'CallbackHandlerServiceRole3689695E', {
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

    const handlerServiceRoleFcdc14ae = new iam.CfnRole(this, 'HandlerServiceRoleFCDC14AE', {
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

    if (callbackHandlerServiceRole3689695E == null) { throw new Error(`A combination of conditions caused 'callbackHandlerServiceRole3689695E' to be undefined. Fixit.`); }
    const callbackHandler4434C38d = new lambda.CfnFunction(this, 'CallbackHandler4434C38D', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '9678c34eca93259d11f2d714177347afd66c50116e1e08996eff893d3ca81232.zip',
      },
      role: callbackHandlerServiceRole3689695E.attrArn,
      handler: 'index.main',
      runtime: 'python3.9',
    });
    callbackHandler4434C38d.addDependency(callbackHandlerServiceRole3689695E);

    if (handlerServiceRoleFcdc14ae == null) { throw new Error(`A combination of conditions caused 'handlerServiceRoleFcdc14ae' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '9678c34eca93259d11f2d714177347afd66c50116e1e08996eff893d3ca81232.zip',
      },
      role: handlerServiceRoleFcdc14ae.attrArn,
      handler: 'index.main',
      runtime: 'python3.9',
    });
    handler886Cb40b.addDependency(handlerServiceRoleFcdc14ae);

    if (callbackHandler4434C38d == null) { throw new Error(`A combination of conditions caused 'callbackHandler4434C38d' to be undefined. Fixit.`); }
    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              callbackHandler4434C38d.attrArn,
              handler886Cb40b.attrArn,
              [
                callbackHandler4434C38d.attrArn,
                ':*',
              ].join(''),
              [
                handler886Cb40b.attrArn,
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

    if (callbackHandler4434C38d == null) { throw new Error(`A combination of conditions caused 'callbackHandler4434C38d' to be undefined. Fixit.`); }
    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Invoke Handler\",\"States\":{\"Invoke Handler\":{\"Next\":\"Invoke Handler with task token\",\"Type\":\"Task\",\"Resource\":\"',
        handler886Cb40b.attrArn,
        '\"},\"Invoke Handler with task token\":{\"Next\":\"Job Complete?\",\"InputPath\":\"$.guid\",\"Parameters\":{\"FunctionName\":\"',
        callbackHandler4434C38d.ref,
        '\",\"Payload\":{\"token.$\":\"$$.Task.Token\"}},\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::lambda:invoke.waitForTaskToken\",\"ResultPath\":\"$.status\"},\"Job Complete?\":{\"Type\":\"Choice\",\"Choices\":[{\"Variable\":\"$.status\",\"StringEquals\":\"FAILED\",\"Next\":\"Job Failed\"},{\"Variable\":\"$.status\",\"StringEquals\":\"SUCCEEDED\",\"Next\":\"Final step\"}]},\"Job Failed\":{\"Type\":\"Fail\",\"Error\":\"DescribeJob returned FAILED\",\"Cause\":\"AWS Batch Job Failed\"},\"Final step\":{\"Type\":\"Pass\",\"End\":true}},\"TimeoutSeconds\":30}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);
  }
}

