import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-gamelift-buildProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-gamelift-build extends cdk.Stack {
  public readonly buildArn;
  public readonly buildId;

  public constructor(scope: cdk.App, id: string, props: aws-gamelift-buildProps = {}) {
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
    const buildServiceRole1F57e904 = new iam.CfnRole(this, 'BuildServiceRole1F57E904', {
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

    if (buildServiceRole1F57e904 == null) { throw new Error(`A combination of conditions caused 'buildServiceRole1F57e904' to be undefined. Fixit.`); }
    const buildServiceRoleDefaultPolicyCb7101c6 = new iam.CfnPolicy(this, 'BuildServiceRoleDefaultPolicyCB7101C6', {
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
              '/b95e4173bc399a8f686a4951aa26e01de1ed1e9d981ee1a7f18a15512dbdcb37.zip',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'BuildServiceRoleDefaultPolicyCB7101C6',
      roles: [
        buildServiceRole1F57e904.ref,
      ],
    });

    if (buildServiceRole1F57e904 == null) { throw new Error(`A combination of conditions caused 'buildServiceRole1F57e904' to be undefined. Fixit.`); }
    if (buildServiceRoleDefaultPolicyCb7101c6 == null) { throw new Error(`A combination of conditions caused 'buildServiceRoleDefaultPolicyCb7101c6' to be undefined. Fixit.`); }
    const build45A36621 = new gamelift.CfnBuild(this, 'Build45A36621', {
      operatingSystem: 'AMAZON_LINUX_2',
      storageLocation: {
        bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        key: 'b95e4173bc399a8f686a4951aa26e01de1ed1e9d981ee1a7f18a15512dbdcb37.zip',
        roleArn: buildServiceRole1F57e904.attrArn,
      },
      version: '1.0',
      serverSdkVersion: '5.0.0',
    });
    build45A36621.addDependency(buildServiceRoleDefaultPolicyCb7101c6);
    build45A36621.addDependency(buildServiceRole1F57e904);

    // Outputs
    this.buildArn = [
      'arn:',
      this.partition,
      ':gamelift:',
      this.region,
      ':',
      this.account,
      ':build/',
      build45A36621.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputBuildArn', {
      key: 'BuildArn',
      value: this.buildArn!.toString(),
    });
    this.buildId = build45A36621.ref;
    new cdk.CfnOutput(this, 'CfnOutputBuildId', {
      key: 'BuildId',
      value: this.buildId!.toString(),
    });
  }
}

