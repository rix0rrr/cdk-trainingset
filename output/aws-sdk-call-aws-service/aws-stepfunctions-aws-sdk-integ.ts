import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsAwsSdkIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsAwsSdkInteg extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsAwsSdkIntegProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:deleteObject',
              's3:getObject',
              's3:putObject',
            ],
            Effect: 'Allow',
            Resource: [
              bucket83908E77.attrArn,
              '/*',
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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"PutObject\",\"States\":{\"PutObject\":{\"Next\":\"GetObject\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:s3:putObject\",\"Parameters\":{\"Body.$\":\"$.body\",\"Bucket\":\"',
        bucket83908E77.ref,
        '\",\"Key\":\"test.txt\"}},\"GetObject\":{\"Next\":\"DeleteObject\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:s3:getObject\",\"Parameters\":{\"Bucket\":\"',
        bucket83908E77.ref,
        '\",\"Key\":\"test.txt\"}},\"DeleteObject\":{\"End\":true,\"Type\":\"Task\",\"ResultPath\":null,\"Resource\":\"arn:',
        this.partition,
        ':states:::aws-sdk:s3:deleteObject\",\"Parameters\":{\"Bucket\":\"',
        bucket83908E77.ref,
        '\",\"Key\":\"test.txt\"}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineArn', {
      key: 'StateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

