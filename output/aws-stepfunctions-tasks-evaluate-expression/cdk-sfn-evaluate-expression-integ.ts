import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface CdkSfnEvaluateExpressionIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkSfnEvaluateExpressionInteg extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: CdkSfnEvaluateExpressionIntegProps = {}) {
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
    const eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDd279e15 = new iam.CfnRole(this, 'Eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDD279E15', {
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

    const eval41256dc5445742738ed917bc818694e5ServiceRoleA1ab6027 = new iam.CfnRole(this, 'Eval41256dc5445742738ed917bc818694e5ServiceRoleA1AB6027', {
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

    if (eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDd279e15 == null) { throw new Error(`A combination of conditions caused 'eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDd279e15' to be undefined. Fixit.`); }
    const eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4 = new lambda.CfnFunction(this, 'Eval078d40d3fb4e4d5394a79c46fc11fe029D0ED2B4', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b8cec122f25692e8b194663d25a2ee5e0b65e55df966120791d6a3ddc08fc136.zip',
      },
      handler: 'index.handler',
      role: eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDd279e15.attrArn,
      runtime: 'nodejs18.x',
    });
    eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4.addDependency(eval078d40d3fb4e4d5394a79c46fc11fe02ServiceRoleDd279e15);

    if (eval41256dc5445742738ed917bc818694e5ServiceRoleA1ab6027 == null) { throw new Error(`A combination of conditions caused 'eval41256dc5445742738ed917bc818694e5ServiceRoleA1ab6027' to be undefined. Fixit.`); }
    const eval41256dc5445742738ed917bc818694e54Eb1134f = new lambda.CfnFunction(this, 'Eval41256dc5445742738ed917bc818694e54EB1134F', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b8cec122f25692e8b194663d25a2ee5e0b65e55df966120791d6a3ddc08fc136.zip',
      },
      handler: 'index.handler',
      role: eval41256dc5445742738ed917bc818694e5ServiceRoleA1ab6027.attrArn,
      runtime: 'nodejs18.x',
    });
    eval41256dc5445742738ed917bc818694e54Eb1134f.addDependency(eval41256dc5445742738ed917bc818694e5ServiceRoleA1ab6027);

    if (eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4 == null) { throw new Error(`A combination of conditions caused 'eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4' to be undefined. Fixit.`); }
    if (eval41256dc5445742738ed917bc818694e54Eb1134f == null) { throw new Error(`A combination of conditions caused 'eval41256dc5445742738ed917bc818694e54Eb1134f' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4.attrArn,
              eval41256dc5445742738ed917bc818694e54Eb1134f.attrArn,
              [
                eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4.attrArn,
                ':*',
              ].join(''),
              [
                eval41256dc5445742738ed917bc818694e54Eb1134f.attrArn,
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

    if (eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4 == null) { throw new Error(`A combination of conditions caused 'eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4' to be undefined. Fixit.`); }
    if (eval41256dc5445742738ed917bc818694e54Eb1134f == null) { throw new Error(`A combination of conditions caused 'eval41256dc5445742738ed917bc818694e54Eb1134f' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"Sum\",\"States\":{\"Sum\":{\"Next\":\"Multiply\",\"Type\":\"Task\",\"ResultPath\":\"$.c\",\"Resource\":\"',
        eval41256dc5445742738ed917bc818694e54Eb1134f.attrArn,
        '\",\"Parameters\":{\"expression\":\"$.a + $.b\",\"expressionAttributeValues\":{\"$.a.$\":\"$.a\",\"$.b.$\":\"$.b\"}}},\"Multiply\":{\"Next\":\"Wait\",\"Type\":\"Task\",\"ResultPath\":\"$.d\",\"Resource\":\"',
        eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4.attrArn,
        '\",\"Parameters\":{\"expression\":\"$.c * 2\",\"expressionAttributeValues\":{\"$.c.$\":\"$.c\"}}},\"Wait\":{\"Type\":\"Wait\",\"SecondsPath\":\"$.d\",\"Next\":\"Now\"},\"Now\":{\"End\":true,\"Type\":\"Task\",\"ResultPath\":\"$.now\",\"Resource\":\"',
        eval078d40d3fb4e4d5394a79c46fc11fe029D0ed2b4.attrArn,
        '\",\"Parameters\":{\"expression\":\"(new Date()).toUTCString()\",\"expressionAttributeValues\":{}}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineARN', {
      key: 'StateMachineARN',
      value: this.stateMachineArn!.toString(),
    });
  }
}

