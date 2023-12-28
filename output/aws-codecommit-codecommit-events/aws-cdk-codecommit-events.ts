import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as events from 'aws-cdk-lib/aws-events';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsCdkCodecommitEventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodecommitEvents extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodecommitEventsProps = {}) {
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
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    const repo02Ac86cf = new codecommit.CfnRepository(this, 'Repo02AC86CF', {
      repositoryName: 'aws-cdk-codecommit-events',
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    const repoOnReferenceCreatedF1c66ff1 = new events.CfnRule(this, 'RepoOnReferenceCreatedF1C66FF1', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          repo02Ac86cf.attrArn,
        ],
        'detail-type': [
          'CodeCommit Repository State Change',
        ],
        detail: {
          event: [
            'referenceCreated',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
        },
      ],
    });
  }
}

