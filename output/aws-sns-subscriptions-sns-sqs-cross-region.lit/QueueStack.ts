import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface QueuestackProps extends cdk.StackProps {
}

export class Queuestack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: QueuestackProps = {}) {
    super(scope, id, props);

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
                'aws:SourceArn': [
                  'arn:',
                  this.partition,
                  ':sns:us-east-1:12345678:topicstackopicstackmytopicc43e67afb24f28bb94f9',
                ].join(''),
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
    const myQueueTopicStackMyTopicC43e67afc8dc8b4a = new sns.CfnSubscription(this, 'MyQueueTopicStackMyTopicC43E67AFC8DC8B4A', {
      protocol: 'sqs',
      topicArn: [
        'arn:',
        this.partition,
        ':sns:us-east-1:12345678:topicstackopicstackmytopicc43e67afb24f28bb94f9',
      ].join(''),
      endpoint: myQueueE6ca6235.attrArn,
      region: 'us-east-1',
    });
  }
}

