import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface QueueStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class QueueStack extends cdk.Stack {
  public readonly exportsOutputRefMyQueueE6ca623512a57419;

  public constructor(scope: cdk.App, id: string, props: QueueStackProps = {}) {
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
    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    const myQueuePolicy6Bbeddac = new sqs.CfnQueuePolicy(this, 'MyQueuePolicy6BBEDDAC', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': cdk.Fn.importValue('SnsToSqsStack:ExportsOutputRefMyTopic868694349D03D60F'),
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: myQueueE6ca6235.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myQueueE6ca6235.ref,
      ],
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myQueuePolicy6Bbeddac == null) { throw new Error(`A combination of conditions caused 'myQueuePolicy6Bbeddac' to be undefined. Fixit.`); }
    const myQueueSnsToSqsStackMyTopic3F1182c25e300a0f = new sns.CfnSubscription(this, 'MyQueueSnsToSqsStackMyTopic3F1182C25E300A0F', {
      protocol: 'sqs',
      topicArn: cdk.Fn.importValue('SnsToSqsStack:ExportsOutputRefMyTopic868694349D03D60F'),
      endpoint: myQueueE6ca6235.attrArn,
      filterPolicy: {
        background: {
          color: [
            'red',
            'green',
            {
              'anything-but': [
                'white',
                'orange',
              ],
            },
          ],
        },
        price: [
          {
            numeric: [
              '=',
              100,
            ],
          },
          {
            numeric: [
              '=',
              200,
            ],
          },
          {
            numeric: [
              '>',
              500,
            ],
          },
          {
            numeric: [
              '<',
              1000,
            ],
          },
          {
            numeric: [
              '>=',
              300,
              '<=',
              350,
            ],
          },
          {
            numeric: [
              '>',
              2000,
              '<',
              3000,
            ],
          },
        ],
      },
      filterPolicyScope: 'MessageBody',
    });
    myQueueSnsToSqsStackMyTopic3F1182c25e300a0f.addDependency(myQueuePolicy6Bbeddac);

    // Outputs
    this.exportsOutputRefMyQueueE6ca623512a57419 = myQueueE6ca6235.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyQueueE6CA623512A57419', {
      key: 'ExportsOutputRefMyQueueE6CA623512A57419',
      exportName: 'QueueStack:ExportsOutputRefMyQueueE6CA623512A57419',
      value: this.exportsOutputRefMyQueueE6ca623512a57419!.toString(),
    });
  }
}

