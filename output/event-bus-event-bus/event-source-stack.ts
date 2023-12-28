import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface EventSourceStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class EventSourceStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: EventSourceStackProps = {}) {
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
    const queue4A7e3555 = new sqs.CfnQueue(this, 'Queue4A7E3555', {
    });
    queue4A7e3555.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const ruleEventsRoleC51a4248 = new iam.CfnRole(this, 'RuleEventsRoleC51A4248', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (ruleEventsRoleC51a4248 == null) { throw new Error(`A combination of conditions caused 'ruleEventsRoleC51a4248' to be undefined. Fixit.`); }
    const rule4C995b7f = new events.CfnRule(this, 'Rule4C995B7F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: [
            'arn:aws:events:',
            this.region,
            ':999999999999:event-bus/test-bus',
          ].join(''),
          deadLetterConfig: {
            arn: queue4A7e3555.attrArn,
          },
          id: 'Target0',
          roleArn: ruleEventsRoleC51a4248.attrArn,
        },
      ],
    });

    if (ruleEventsRoleC51a4248 == null) { throw new Error(`A combination of conditions caused 'ruleEventsRoleC51a4248' to be undefined. Fixit.`); }
    const ruleEventsRoleDefaultPolicy0510525D = new iam.CfnPolicy(this, 'RuleEventsRoleDefaultPolicy0510525D', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: [
              'arn:aws:events:',
              this.region,
              ':999999999999:event-bus/test-bus',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'RuleEventsRoleDefaultPolicy0510525D',
      roles: [
        ruleEventsRoleC51a4248.ref,
      ],
    });

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (rule4C995b7f == null) { throw new Error(`A combination of conditions caused 'rule4C995b7f' to be undefined. Fixit.`); }
    const queuePolicy25439813 = new sqs.CfnQueuePolicy(this, 'QueuePolicy25439813', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': rule4C995b7f.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: queue4A7e3555.attrArn,
            Sid: 'AllowEventRuleeventsourcestackRuleFCA41174',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        queue4A7e3555.ref,
      ],
    });
  }
}

