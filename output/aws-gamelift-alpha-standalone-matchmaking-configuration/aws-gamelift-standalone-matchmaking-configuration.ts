import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsGameliftStandaloneMatchmakingConfigurationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsGameliftStandaloneMatchmakingConfiguration extends cdk.Stack {
  public readonly matchmakingConfigurationArn;
  public readonly matchmakingConfigurationName;

  public constructor(scope: cdk.App, id: string, props: AwsGameliftStandaloneMatchmakingConfigurationProps = {}) {
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
    const myStandaloneMatchmakingConfigurationTopicDef24815 = new sns.CfnTopic(this, 'MyStandaloneMatchmakingConfigurationTopicDEF24815', {
    });

    const standaloneMatchmakingConfigurationC77f3149 = new gamelift.CfnMatchmakingRuleSet(this, 'StandaloneMatchmakingConfigurationC77F3149', {
      name: 'my-test-ruleset',
      ruleSetBody: '{\"name\":\"three_team_game\",\"ruleLanguageVersion\":\"1.0\",\"playerAttributes\":[{\"name\":\"skill\",\"type\":\"number\",\"default\":10},{\"name\":\"character\",\"type\":\"string_list\",\"default\":[\"peasant\"]}],\"teams\":[{\"name\":\"trio\",\"minPlayers\":3,\"maxPlayers\":5,\"quantity\":3}],\"rules\":[{\"name\":\"FairTeamSkill\",\"description\":\"The average skill of players in each team is within 10 points from the average skill of players in the match\",\"type\":\"distance\",\"measurements\":[\"avg(teams[*].players.attributes[skill])\"],\"referenceValue\":\"avg(flatten(teams[*].players.attributes[skill]))\",\"maxDistance\":10},{\"name\":\"CloseTeamSizes\",\"description\":\"Only launch a game when the team sizes are within 1 of each other.  e.g. 3 v 3 v 4 is okay, but not 3 v 5 v 5\",\"type\":\"distance\",\"measurements\":[\"max(count(teams[*].players))\"],\"referenceValue\":\"min(count(teams[*].players))\",\"maxDistance\":1},{\"name\":\"OverallMedicLimit\",\"description\":\"Don\'t allow more than 5 medics in the game\",\"type\":\"collection\",\"measurements\":[\"flatten(teams[*].players.attributes[character])\"],\"operation\":\"contains\",\"referenceValue\":\"medic\",\"maxCount\":5},{\"name\":\"FastConnection\",\"description\":\"Prefer matches with fast player connections first\",\"type\":\"latency\",\"maxLatency\":50}],\"expansions\":[{\"target\":\"rules[FastConnection].maxLatency\",\"steps\":[{\"waitTimeSeconds\":10,\"value\":100},{\"waitTimeSeconds\":20,\"value\":150}]}]}',
    });

    if (myStandaloneMatchmakingConfigurationTopicDef24815 == null) { throw new Error(`A combination of conditions caused 'myStandaloneMatchmakingConfigurationTopicDef24815' to be undefined. Fixit.`); }
    if (standaloneMatchmakingConfigurationC77f3149 == null) { throw new Error(`A combination of conditions caused 'standaloneMatchmakingConfigurationC77f3149' to be undefined. Fixit.`); }
    const myStandaloneMatchmakingConfiguration01Aa1dfd = new gamelift.CfnMatchmakingConfiguration(this, 'MyStandaloneMatchmakingConfiguration01AA1DFD', {
      acceptanceRequired: true,
      name: 'test-config-name',
      requestTimeoutSeconds: 30,
      ruleSetName: standaloneMatchmakingConfigurationC77f3149.ref,
      acceptanceTimeoutSeconds: 30,
      customEventData: 'event-data',
      description: 'test description',
      flexMatchMode: 'STANDALONE',
      notificationTarget: myStandaloneMatchmakingConfigurationTopicDef24815.ref,
    });

    if (myStandaloneMatchmakingConfigurationTopicDef24815 == null) { throw new Error(`A combination of conditions caused 'myStandaloneMatchmakingConfigurationTopicDef24815' to be undefined. Fixit.`); }
    const myStandaloneMatchmakingConfigurationTopicPolicy9Fa21bce = new sns.CfnTopicPolicy(this, 'MyStandaloneMatchmakingConfigurationTopicPolicy9FA21BCE', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'gamelift.amazonaws.com',
            },
            Resource: myStandaloneMatchmakingConfigurationTopicDef24815.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myStandaloneMatchmakingConfigurationTopicDef24815.ref,
      ],
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
      myStandaloneMatchmakingConfiguration01Aa1dfd.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingConfigurationArn', {
      key: 'MatchmakingConfigurationArn',
      value: this.matchmakingConfigurationArn!.toString(),
    });
    this.matchmakingConfigurationName = myStandaloneMatchmakingConfiguration01Aa1dfd.ref;
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingConfigurationName', {
      key: 'MatchmakingConfigurationName',
      value: this.matchmakingConfigurationName!.toString(),
    });
  }
}

