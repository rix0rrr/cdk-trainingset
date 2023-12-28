import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsGameliftAliasProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsGameliftAlias extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsGameliftAliasProps = {}) {
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
    const buildFleetServiceRole32D49fb4 = new iam.CfnRole(this, 'BuildFleetServiceRole32D49FB4', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: [
                'ec2.amazonaws.com',
                'gamelift.amazonaws.com',
              ],
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

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

    const terminalAliasF1014036 = new gamelift.CfnAlias(this, 'TerminalAliasF1014036', {
      name: 'test-alias',
      routingStrategy: {
        message: 'a terminal message',
        type: 'TERMINAL',
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
    });
    build45A36621.addDependency(buildServiceRoleDefaultPolicyCb7101c6);
    build45A36621.addDependency(buildServiceRole1F57e904);

    if (build45A36621 == null) { throw new Error(`A combination of conditions caused 'build45A36621' to be undefined. Fixit.`); }
    if (buildFleetServiceRole32D49fb4 == null) { throw new Error(`A combination of conditions caused 'buildFleetServiceRole32D49fb4' to be undefined. Fixit.`); }
    const buildFleet027Ed403 = new gamelift.CfnFleet(this, 'BuildFleet027ED403', {
      buildId: build45A36621.ref,
      certificateConfiguration: {
        certificateType: 'DISABLED',
      },
      ec2InboundPermissions: [
        {
          fromPort: 1935,
          ipRange: '0.0.0.0/0',
          protocol: 'TCP',
          toPort: 1935,
        },
      ],
      ec2InstanceType: 'c5.large',
      fleetType: 'ON_DEMAND',
      instanceRoleArn: buildFleetServiceRole32D49fb4.attrArn,
      maxSize: 1,
      minSize: 0,
      name: 'test-fleet',
      newGameSessionProtectionPolicy: 'NoProtection',
      runtimeConfiguration: {
        gameSessionActivationTimeoutSeconds: 300,
        maxConcurrentGameSessionActivations: 1,
        serverProcesses: [
          {
            concurrentExecutions: 1,
            launchPath: '/local/game/TestApplicationServer',
            parameters: 'port:1935 gameSessionLengthSeconds:20',
          },
        ],
      },
    });

    if (buildFleet027Ed403 == null) { throw new Error(`A combination of conditions caused 'buildFleet027Ed403' to be undefined. Fixit.`); }
    const fleetAlias81A5a097 = new gamelift.CfnAlias(this, 'FleetAlias81A5A097', {
      name: 'test-alias',
      routingStrategy: {
        fleetId: buildFleet027Ed403.ref,
        type: 'SIMPLE',
      },
    });
  }
}

