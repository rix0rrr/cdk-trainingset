import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface batch-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class batch-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: batch-stackProps = {}) {
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
    const integServiceRole5Fcf74d8 = new iam.CfnRole(this, 'IntegServiceRole5FCF74D8', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'batch.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSBatchServiceRole',
        ].join(''),
      ],
    });

    const minimalPropsBatchServiceRole9654F574 = new iam.CfnRole(this, 'minimalPropsBatchServiceRole9654F574', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'batch.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSBatchServiceRole',
        ].join(''),
      ],
    });

    if (integServiceRole5Fcf74d8 == null) { throw new Error(`A combination of conditions caused 'integServiceRole5Fcf74d8' to be undefined. Fixit.`); }
    const maximalProps886802F8 = new batch.CfnComputeEnvironment(this, 'maximalProps886802F8', {
      computeEnvironmentName: 'unmanagedIntegTestCE',
      serviceRole: integServiceRole5Fcf74d8.attrArn,
      state: 'ENABLED',
      type: 'unmanaged',
      unmanagedvCpus: 256,
    });

    if (minimalPropsBatchServiceRole9654F574 == null) { throw new Error(`A combination of conditions caused 'minimalPropsBatchServiceRole9654F574' to be undefined. Fixit.`); }
    const minimalPropsAb6fcc72 = new batch.CfnComputeEnvironment(this, 'minimalPropsAB6FCC72', {
      serviceRole: minimalPropsBatchServiceRole9654F574.attrArn,
      state: 'ENABLED',
      type: 'unmanaged',
    });
  }
}

