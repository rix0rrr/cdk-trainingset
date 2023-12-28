import * as cdk from 'aws-cdk-lib';
import * as gamelift from 'aws-cdk-lib/aws-gamelift';

export interface aws-gamelift-buildProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-gamelift-build extends cdk.Stack {
  public readonly matchmakingRuleSetArn;
  public readonly matchmakingRuleSetName;

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
    const matchmakingRuleSet360A3710 = new gamelift.CfnMatchmakingRuleSet(this, 'MatchmakingRuleSet360A3710', {
      name: 'my-test-ruleset',
      ruleSetBody: '{\"name\":\"three_team_game\",\"ruleLanguageVersion\":\"1.0\",\"playerAttributes\":[{\"name\":\"skill\",\"type\":\"number\",\"default\":10},{\"name\":\"character\",\"type\":\"string_list\",\"default\":[\"peasant\"]}],\"teams\":[{\"name\":\"trio\",\"minPlayers\":3,\"maxPlayers\":5,\"quantity\":3}],\"rules\":[{\"name\":\"FairTeamSkill\",\"description\":\"The average skill of players in each team is within 10 points from the average skill of players in the match\",\"type\":\"distance\",\"measurements\":[\"avg(teams[*].players.attributes[skill])\"],\"referenceValue\":\"avg(flatten(teams[*].players.attributes[skill]))\",\"maxDistance\":10},{\"name\":\"CloseTeamSizes\",\"description\":\"Only launch a game when the team sizes are within 1 of each other.  e.g. 3 v 3 v 4 is okay, but not 3 v 5 v 5\",\"type\":\"distance\",\"measurements\":[\"max(count(teams[*].players))\"],\"referenceValue\":\"min(count(teams[*].players))\",\"maxDistance\":1},{\"name\":\"OverallMedicLimit\",\"description\":\"Don\'t allow more than 5 medics in the game\",\"type\":\"collection\",\"measurements\":[\"flatten(teams[*].players.attributes[character])\"],\"operation\":\"contains\",\"referenceValue\":\"medic\",\"maxCount\":5},{\"name\":\"FastConnection\",\"description\":\"Prefer matches with fast player connections first\",\"type\":\"latency\",\"maxLatency\":50}],\"expansions\":[{\"target\":\"rules[FastConnection].maxLatency\",\"steps\":[{\"waitTimeSeconds\":10,\"value\":100},{\"waitTimeSeconds\":20,\"value\":150}]}]}',
    });

    // Outputs
    this.matchmakingRuleSetArn = matchmakingRuleSet360A3710.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingRuleSetArn', {
      key: 'MatchmakingRuleSetArn',
      value: this.matchmakingRuleSetArn!.toString(),
    });
    this.matchmakingRuleSetName = matchmakingRuleSet360A3710.ref;
    new cdk.CfnOutput(this, 'CfnOutputMatchmakingRuleSetName', {
      key: 'MatchmakingRuleSetName',
      value: this.matchmakingRuleSetName!.toString(),
    });
  }
}

