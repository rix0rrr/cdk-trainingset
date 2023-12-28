import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIamImportedRole2Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIamImportedRole2 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegIamImportedRole2Props = {}) {
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
    const rolePolicyintegiamimportedrole2Role396F2f48cb4a54dc = new iam.CfnPolicy(this, 'RolePolicyintegiamimportedrole2Role396F2F48CB4A54DC', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: 'arn:aws:sqs:*:*:secondQueue',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Policyintegiamimportedrole2Role396F2F48',
      roles: [
        cdk.Fn.importValue('integ-iam-imported-role-role-stack:ExportsOutputRefTestRole6C9272DF9DD89F08'),
      ],
    });

    const roleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyPolicyintegiamimportedrole2Roleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy9B3a4e53 = new iam.CfnPolicy(this, 'RoleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyPolicyintegiamimportedrole2Roleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy9B3A4E53', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: 'arn:aws:sqs:*:*:secondQueue',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Policyintegiamimportedrole2RoleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyBE9857E5',
      roles: [
        cdk.Fn.importValue('integ-iam-imported-role-role-stack:ExportsOutputRefTestRole6C9272DF9DD89F08'),
      ],
    });
  }
}

