import * as cdk from 'aws-cdk-lib';
import * as codeguruprofiler from 'aws-cdk-lib/aws-codeguruprofiler';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface ProfilingGroupTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ProfilingGroupTestStack extends cdk.Stack {
  public readonly explicitlySetProfilingGroupName;
  public readonly implicitlySetProfilingGroupName;
  public readonly importedFromArnProfilingGroupName;
  public readonly importedFromArnProfilingGroupArn;

  public constructor(scope: cdk.App, id: string, props: ProfilingGroupTestStackProps = {}) {
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
    const profilingGroupWithExplicitlySetNameProfilingGroup20552Eae = new codeguruprofiler.CfnProfilingGroup(this, 'ProfilingGroupWithExplicitlySetNameProfilingGroup20552EAE', {
      profilingGroupName: 'ExplicitlySetName',
    });

    const profilingGroupWithImplicitlySetNameProfilingGroup21Cdf1fc = new codeguruprofiler.CfnProfilingGroup(this, 'ProfilingGroupWithImplicitlySetNameProfilingGroup21CDF1FC', {
      profilingGroupName: 'ProfilingGroupTestStackProfilingGroupWithImplicitlySetName98463923',
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

    if (profilingGroupWithExplicitlySetNameProfilingGroup20552Eae == null) { throw new Error(`A combination of conditions caused 'profilingGroupWithExplicitlySetNameProfilingGroup20552Eae' to be undefined. Fixit.`); }
    if (profilingGroupWithImplicitlySetNameProfilingGroup21Cdf1fc == null) { throw new Error(`A combination of conditions caused 'profilingGroupWithImplicitlySetNameProfilingGroup21Cdf1fc' to be undefined. Fixit.`); }
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
            Resource: [
              profilingGroupWithExplicitlySetNameProfilingGroup20552Eae.attrArn,
              profilingGroupWithImplicitlySetNameProfilingGroup21Cdf1fc.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PublishAppRoleDefaultPolicyCA1E15C3',
      roles: [
        publishAppRole9Febd682.ref,
      ],
    });

    // Outputs
    this.explicitlySetProfilingGroupName = profilingGroupWithExplicitlySetNameProfilingGroup20552Eae.ref;
    new cdk.CfnOutput(this, 'CfnOutputExplicitlySetProfilingGroupName', {
      key: 'ExplicitlySetProfilingGroupName',
      value: this.explicitlySetProfilingGroupName!.toString(),
    });
    this.implicitlySetProfilingGroupName = profilingGroupWithImplicitlySetNameProfilingGroup21Cdf1fc.ref;
    new cdk.CfnOutput(this, 'CfnOutputImplicitlySetProfilingGroupName', {
      key: 'ImplicitlySetProfilingGroupName',
      value: this.implicitlySetProfilingGroupName!.toString(),
    });
    this.importedFromArnProfilingGroupName = 'MyAwesomeProfilingGroup';
    new cdk.CfnOutput(this, 'CfnOutputImportedFromArnProfilingGroupName', {
      key: 'ImportedFromArnProfilingGroupName',
      value: this.importedFromArnProfilingGroupName!.toString(),
    });
    this.importedFromArnProfilingGroupArn = 'arn:aws:codeguru-profiler:a-region-1:1234567890:profilingGroup/MyAwesomeProfilingGroup';
    new cdk.CfnOutput(this, 'CfnOutputImportedFromArnProfilingGroupArn', {
      key: 'ImportedFromArnProfilingGroupArn',
      value: this.importedFromArnProfilingGroupArn!.toString(),
    });
  }
}

