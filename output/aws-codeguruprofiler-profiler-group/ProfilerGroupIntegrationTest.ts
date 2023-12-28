import * as cdk from 'aws-cdk-lib';
import * as codeguruprofiler from 'aws-cdk-lib/aws-codeguruprofiler';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface ProfilerGroupIntegrationTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ProfilerGroupIntegrationTest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ProfilerGroupIntegrationTestProps = {}) {
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
    const myProfilingGroup829F0507 = new codeguruprofiler.CfnProfilingGroup(this, 'MyProfilingGroup829F0507', {
      profilingGroupName: 'ProfilerGroupIntegrationTestMyProfilingGroup81DA69A3',
    });

    const publishAppRole9Febd682 = new iam.CfnRole(this, 'PublishAppRole9FEBD682', {
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

    const readAppRole52Fe6317 = new iam.CfnRole(this, 'ReadAppRole52FE6317', {
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

    if (myProfilingGroup829F0507 == null) { throw new Error(`A combination of conditions caused 'myProfilingGroup829F0507' to be undefined. Fixit.`); }
    if (publishAppRole9Febd682 == null) { throw new Error(`A combination of conditions caused 'publishAppRole9Febd682' to be undefined. Fixit.`); }
    const publishAppRoleDefaultPolicyCa1e15c3 = new iam.CfnPolicy(this, 'PublishAppRoleDefaultPolicyCA1E15C3', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codeguru-profiler:ConfigureAgent',
              'codeguru-profiler:PostAgentProfile',
            ],
            Effect: 'Allow',
            Resource: myProfilingGroup829F0507.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PublishAppRoleDefaultPolicyCA1E15C3',
      roles: [
        publishAppRole9Febd682.ref,
      ],
    });

    if (myProfilingGroup829F0507 == null) { throw new Error(`A combination of conditions caused 'myProfilingGroup829F0507' to be undefined. Fixit.`); }
    if (readAppRole52Fe6317 == null) { throw new Error(`A combination of conditions caused 'readAppRole52Fe6317' to be undefined. Fixit.`); }
    const readAppRoleDefaultPolicy4Bb8955c = new iam.CfnPolicy(this, 'ReadAppRoleDefaultPolicy4BB8955C', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codeguru-profiler:DescribeProfilingGroup',
              'codeguru-profiler:GetProfile',
            ],
            Effect: 'Allow',
            Resource: myProfilingGroup829F0507.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ReadAppRoleDefaultPolicy4BB8955C',
      roles: [
        readAppRole52Fe6317.ref,
      ],
    });
  }
}

