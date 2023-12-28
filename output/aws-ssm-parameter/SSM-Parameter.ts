import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface SSM-ParameterProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class SSM-Parameter extends cdk.Stack {
  public readonly stringListOutput;
  public readonly paramArn;

  public constructor(scope: cdk.App, id: string, props: SSM-ParameterProps = {}) {
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
    const stringListParameterFac8eddc = new ssm.CfnParameter(this, 'StringListParameterFAC8EDDC', {
      type: 'StringList',
      value: 'Initial parameter value A,Initial parameter value B',
    });

    const stringParameter472Eed0e = new ssm.CfnParameter(this, 'StringParameter472EED0E', {
      type: 'String',
      value: 'Initial parameter value',
    });

    const userRoleB7c3739b = new iam.CfnRole(this, 'UserRoleB7C3739B', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (stringParameter472Eed0e == null) { throw new Error(`A combination of conditions caused 'stringParameter472Eed0e' to be undefined. Fixit.`); }
    if (userRoleB7c3739b == null) { throw new Error(`A combination of conditions caused 'userRoleB7c3739b' to be undefined. Fixit.`); }
    const userRoleDefaultPolicyBc5e062b = new iam.CfnPolicy(this, 'UserRoleDefaultPolicyBC5E062B', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ssm:DescribeParameters',
              'ssm:GetParameter',
              'ssm:GetParameterHistory',
              'ssm:GetParameters',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/',
              stringParameter472Eed0e.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'UserRoleDefaultPolicyBC5E062B',
      roles: [
        userRoleB7c3739b.ref,
      ],
    });

    // Outputs
    this.stringListOutput = [
      cdk.Fn.split(',', stringListParameterFac8eddc.attrValue),
    ].join('+');
    new cdk.CfnOutput(this, 'CfnOutputStringListOutput', {
      key: 'StringListOutput',
      value: this.stringListOutput!.toString(),
    });
    this.paramArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      stringParameter472Eed0e.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputParamArn', {
      key: 'ParamArn',
      value: this.paramArn!.toString(),
    });
  }
}

