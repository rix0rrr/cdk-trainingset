import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-gamelift-scriptProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-gamelift-script extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-gamelift-scriptProps = {}) {
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
    const scriptServiceRole23Dd8079 = new iam.CfnRole(this, 'ScriptServiceRole23DD8079', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'gamelift.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (scriptServiceRole23Dd8079 == null) { throw new Error(`A combination of conditions caused 'scriptServiceRole23Dd8079' to be undefined. Fixit.`); }
    const script09016516 = new gamelift.CfnScript(this, 'Script09016516', {
      storageLocation: {
        bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        key: '6019bfc8ab05a24b0ae9b5d8f4585cbfc7d1c30a23286d0b25ce7066a368a5d7.zip',
        roleArn: scriptServiceRole23Dd8079.attrArn,
      },
    });

    if (scriptServiceRole23Dd8079 == null) { throw new Error(`A combination of conditions caused 'scriptServiceRole23Dd8079' to be undefined. Fixit.`); }
    const scriptServiceRoleDefaultPolicyEe85dae7 = new iam.CfnPolicy(this, 'ScriptServiceRoleDefaultPolicyEE85DAE7', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetObject',
              's3:GetObjectVersion',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':s3:::',
              `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              '/6019bfc8ab05a24b0ae9b5d8f4585cbfc7d1c30a23286d0b25ce7066a368a5d7.zip',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ScriptServiceRoleDefaultPolicyEE85DAE7',
      roles: [
        scriptServiceRole23Dd8079.ref,
      ],
    });
  }
}

