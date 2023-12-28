import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codestarnotifications from 'aws-cdk-lib/aws-codestarnotifications';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-cdk-codecommitProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codecommit extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codecommitProps = {}) {
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
    const myCodecommitRepository26Db372b = new codecommit.CfnRepository(this, 'MyCodecommitRepository26DB372B', {
      repositoryName: 'my-test-repository',
    });

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (myCodecommitRepository26Db372b == null) { throw new Error(`A combination of conditions caused 'myCodecommitRepository26Db372b' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myCodecommitRepositoryNotifyOnPullRequestCreated4Cab0621 = new codestarnotifications.CfnNotificationRule(this, 'MyCodecommitRepositoryNotifyOnPullRequestCreated4CAB0621', {
      detailType: 'FULL',
      eventTypeIds: [
        'codecommit-repository-pull-request-created',
      ],
      name: 'decommitMyCodecommitRepositoryNotifyOnPullRequestCreated65969BCB',
      resource: myCodecommitRepository26Db372b.attrArn,
      targets: [
        {
          targetAddress: myTopic86869434.ref,
          targetType: 'SNS',
        },
      ],
    });

    if (myCodecommitRepository26Db372b == null) { throw new Error(`A combination of conditions caused 'myCodecommitRepository26Db372b' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myCodecommitRepositoryNotifyOnPullRequestMerged80574Fed = new codestarnotifications.CfnNotificationRule(this, 'MyCodecommitRepositoryNotifyOnPullRequestMerged80574FED', {
      detailType: 'FULL',
      eventTypeIds: [
        'codecommit-repository-pull-request-merged',
      ],
      name: 'odecommitMyCodecommitRepositoryNotifyOnPullRequestMergedF426197C',
      resource: myCodecommitRepository26Db372b.attrArn,
      targets: [
        {
          targetAddress: myTopic86869434.ref,
          targetType: 'SNS',
        },
      ],
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myTopicPolicy12A5ec17 = new sns.CfnTopicPolicy(this, 'MyTopicPolicy12A5EC17', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'codestar-notifications.amazonaws.com',
            },
            Resource: myTopic86869434.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myTopic86869434.ref,
      ],
    });
  }
}

