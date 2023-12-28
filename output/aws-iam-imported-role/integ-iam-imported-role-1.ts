import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegIamImportedRole1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegIamImportedRole1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegIamImportedRole1Props = {}) {
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
    const rolePolicyintegiamimportedrole1RoleC415c68d134df661 = new iam.CfnPolicy(this, 'RolePolicyintegiamimportedrole1RoleC415C68D134DF661', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Effect: 'Allow',
            Resource: 'arn:aws:sqs:*:*:firstQueue',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Policyintegiamimportedrole1RoleC415C68D',
      roles: [
        cdk.Fn.importValue('integ-iam-imported-role-role-stack:ExportsOutputRefTestRole6C9272DF9DD89F08'),
      ],
    });

    const rolexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxPolicyintegiamimportedrole1Rolexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1Cfa08db = new iam.CfnPolicy(this, 'RolexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxPolicyintegiamimportedrole1Rolexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1CFA08DB', {
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
      policyName: 'Policyintegiamimportedrole1RolexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxF0A88E6A',
      roles: [
        cdk.Fn.importValue('integ-iam-imported-role-role-stack:ExportsOutputRefTestRole6C9272DF9DD89F08'),
      ],
    });
  }
}

