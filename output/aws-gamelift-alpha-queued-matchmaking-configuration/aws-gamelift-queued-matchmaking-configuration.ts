import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-gamelift-queued-matchmaking-configurationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-gamelift-queued-matchmaking-configuration extends cdk.Stack {
  public readonly matchmakingConfigurationArn;
  public readonly matchmakingConfigurationName;

  public constructor(scope: cdk.App, id: string, props: aws-gamelift-queued-matchmaking-configurationProps = {}) {
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

    const myQueuedMatchmakingConfigurationTopicBac3e679 = new sns.CfnTopic(this, 'MyQueuedMatchmakingConfigurationTopicBAC3E679', {
    });

    const queuedMatchmakingConfiguration84Bdfe18 = new gamelift.CfnMatchmakingRuleSet(this, 'QueuedMatchmakingConfiguration84BDFE18', {
      name: 'my-test-ruleset',
      ruleSetBody: '{\"name\":\"three_team_game\",\"ruleLanguageVersion\":\"1.0\",\"playerAttributes\":[{\"name\":\"skill\",\"type\":\"number\",\"default\":10},{\"name\":\"character\",\"type\":\"string_list\",\"default\":[\"peasant\"]}],\"teams\":[{\"name\":\"trio\",\"minPlayers\":3,\"maxPlayers\":5,\"quantity\":3}],\"rules\":[{\"name\":\"FairTeamSkill\",\"description\":\"The average skill of players in each team is within 10 points from the average skill of players in the match\",\"type\":\"distance\",\"measurements\":[\"avg(teams[*].players.attributes[skill])\"],\"referenceValue\":\"avg(flatten(teams[*].players.attributes[skill]))\",\"maxDistance\":10},{\"name\":\"CloseTeamSizes\",\"description\":\"Only launch a game when the team sizes are within 1 of each other.  e.g. 3 v 3 v 4 is okay, but not 3 v 5 v 5\",\"type\":\"distance\",\"measurements\":[\"max(count(teams[*].players))\"],\"referenceValue\":\"min(count(teams[*].players))\",\"maxDistance\":1},{\"name\":\"OverallMedicLimit\",\"description\":\"Don\'t allow more than 5 medics in the game\",\"type\":\"collection\",\"measurements\":[\"flatten(teams[*].players.attributes[character])\"],\"operation\":\"contains\",\"referenceValue\":\"medic\",\"maxCount\":5},{\"name\":\"FastConnection\",\"description\":\"Prefer matches with fast player connections first\",\"type\":\"latency\",\"maxLatency\":50}],\"expansions\":[{\"target\":\"rules[FastConnection].maxLatency\",\"steps\":[{\"waitTimeSeconds\":10,\"value\":100},{\"waitTimeSeconds\":20,\"value\":150}]}]}',
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

    if (myQueuedMatchmakingConfigurationTopicBac3e679 == null) { throw new Error(`A combination of conditions caused 'myQueuedMatchmakingConfigurationTopicBac3e679' to be undefined. Fixit.`); }
    const myQueuedMatchmakingConfigurationTopicPolicy17A129ea = new sns.CfnTopicPolicy(this, 'MyQueuedMatchmakingConfigurationTopicPolicy17A129EA', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'gamelift.amazonaws.com',
            },
            Resource: myQueuedMatchmakingConfigurationTopicBac3e679.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myQueuedMatchmakingConfigurationTopicBac3e679.ref,
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
    const myGameSessionQueue1A15ce31 = new gamelift.CfnGameSessionQueue(this, 'MyGameSessionQueue1A15CE31', {
      name: 'test-gameSessionQueue',
      destinations: [
        {
          destinationArn: [
            'arn:',
            this.partition,
            ':gamelift:',
            this.region,
            ':',
            this.account,
            ':fleet/',
            buildFleet027Ed403.ref,
          ].join(''),
        },
      ],
    });

    if (myGameSessionQueue1A15ce31 == null) { throw new Error(`A combination of conditions caused 'myGameSessionQueue1A15ce31' to be undefined. Fixit.`); }
    if (myQueuedMatchmakingConfigurationTopicBac3e679 == null) { throw new Error(`A combination of conditions caused 'myQueuedMatchmakingConfigurationTopicBac3e679' to be undefined. Fixit.`); }
    if (queuedMatchmakingConfiguration84Bdfe18 == null) { throw new Error(`A combination of conditions caused 'queuedMatchmakingConfiguration84Bdfe18' to be undefined. Fixit.`); }
    const myQueuedMatchmakingConfiguration94A9fd4e = new gamelift.CfnMatchmakingConfiguration(this, 'MyQueuedMatchmakingConfiguration94A9FD4E', {
      acceptanceRequired: true,
      name: 'test-config-name',
      requestTimeoutSeconds: 30,
      ruleSetName: queuedMatchmakingConfiguration84Bdfe18.ref,
      acceptanceTimeoutSeconds: 30,
      additionalPlayerCount: 3,
      backfillMode: 'MANUAL',
      customEventData: 'event-data',
      description: 'test description',
      flexMatchMode: 'WITH_QUEUE',
      gameProperties: [
        {
          key: 'test-key',
          value: 'test-value',
        },
      ],
      gameSessionData: 'test-session-data',
      gameSessionQueueArns: [
        [
          'arn:',
          this.partition,
          ':gamelift:',
          this.region,
          ':',
          this.account,
          ':gamesessionqueue/',
          myGameSessionQueue1A15ce31.ref,
        ].join(''),
      ],
      notificationTarget: myQueuedMatchmakingConfigurationTopicBac3e679.ref,
    });

    // Outputs
    this.matchmakingConfigurationArn = [
      'arn:',
      this.partition,
      ':gamelift:',
      this.region,
      ':',
      this.account,
      ':matchmakingconfiguration/',
      myQueuedMatchmakingConfiguration94A9fd4e.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingConfigurationArn', {
      key: 'MatchmakingConfigurationArn',
      value: this.matchmakingConfigurationArn!.toString(),
    });
    this.matchmakingConfigurationName = myQueuedMatchmakingConfiguration94A9fd4e.ref;
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingConfigurationName', {
      key: 'MatchmakingConfigurationName',
      value: this.matchmakingConfigurationName!.toString(),
    });
  }
}

