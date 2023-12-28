import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface NestedStacksTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class NestedStacksTest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: NestedStacksTestProps = {}) {
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
    const nestedStack2NestedStackNestedStack2NestedStackResourceFdf82e43 = new cloudformation.CfnStack(this, 'NestedStack2NestedStackNestedStack2NestedStackResourceFDF82E43', {
      parameters: {
        TopicNamePrefix: 'Prefix2',
      },
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/9f9659202ccc2bb279918da510b11586ae01bee77af0729c8a1f313489d7cc29.json',
      ].join(''),
    });
    nestedStack2NestedStackNestedStack2NestedStackResourceFdf82e43.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const subscriberQueueC193dc66 = new sqs.CfnQueue(this, 'SubscriberQueueC193DC66', {
    });
    subscriberQueueC193dc66.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (subscriberQueueC193dc66 == null) { throw new Error(`A combination of conditions caused 'subscriberQueueC193dc66' to be undefined. Fixit.`); }
    const nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52 = new cloudformation.CfnStack(this, 'NestedStack1NestedStackNestedStack1NestedStackResource7E64AD52', {
      parameters: {
        TopicNamePrefix: 'Prefix1',
        referencetonestedstackstestSubscriberQueue39409787Ref: subscriberQueueC193dc66.ref,
      },
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/209a4f17c5e4c8a0ffa92cb311261c77407a3a251824880418f7ed26d09f63be.json',
      ].join(''),
    });
    nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52 == null) { throw new Error(`A combination of conditions caused 'nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52' to be undefined. Fixit.`); }
    if (subscriberQueueC193dc66 == null) { throw new Error(`A combination of conditions caused 'subscriberQueueC193dc66' to be undefined. Fixit.`); }
    const subscriberQueuePolicy25A0799e = new sqs.CfnQueuePolicy(this, 'SubscriberQueuePolicy25A0799E', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic02C2d1254Ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: subscriberQueueC193dc66.attrArn,
          },
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic1474E5389Ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: subscriberQueueC193dc66.attrArn,
          },
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic22C710dc4Ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: subscriberQueueC193dc66.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        subscriberQueueC193dc66.ref,
      ],
    });

    if (nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52 == null) { throw new Error(`A combination of conditions caused 'nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52' to be undefined. Fixit.`); }
    if (subscriberQueueC193dc66 == null) { throw new Error(`A combination of conditions caused 'subscriberQueueC193dc66' to be undefined. Fixit.`); }
    if (subscriberQueuePolicy25A0799e == null) { throw new Error(`A combination of conditions caused 'subscriberQueuePolicy25A0799e' to be undefined. Fixit.`); }
    const subscriberQueuenestedstackstestNestedStack1topic089C5eb1396f65087 = new sns.CfnSubscription(this, 'SubscriberQueuenestedstackstestNestedStack1topic089C5EB1396F65087', {
      endpoint: subscriberQueueC193dc66.attrArn,
      protocol: 'sqs',
      topicArn: nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic02C2d1254Ref,
    });
    subscriberQueuenestedstackstestNestedStack1topic089C5eb1396f65087.addDependency(subscriberQueuePolicy25A0799e);

    if (nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52 == null) { throw new Error(`A combination of conditions caused 'nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52' to be undefined. Fixit.`); }
    if (subscriberQueueC193dc66 == null) { throw new Error(`A combination of conditions caused 'subscriberQueueC193dc66' to be undefined. Fixit.`); }
    if (subscriberQueuePolicy25A0799e == null) { throw new Error(`A combination of conditions caused 'subscriberQueuePolicy25A0799e' to be undefined. Fixit.`); }
    const subscriberQueuenestedstackstestNestedStack1topic1150E1a929a2c267e = new sns.CfnSubscription(this, 'SubscriberQueuenestedstackstestNestedStack1topic1150E1A929A2C267E', {
      endpoint: subscriberQueueC193dc66.attrArn,
      protocol: 'sqs',
      topicArn: nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic1474E5389Ref,
    });
    subscriberQueuenestedstackstestNestedStack1topic1150E1a929a2c267e.addDependency(subscriberQueuePolicy25A0799e);

    if (nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52 == null) { throw new Error(`A combination of conditions caused 'nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52' to be undefined. Fixit.`); }
    if (subscriberQueueC193dc66 == null) { throw new Error(`A combination of conditions caused 'subscriberQueueC193dc66' to be undefined. Fixit.`); }
    if (subscriberQueuePolicy25A0799e == null) { throw new Error(`A combination of conditions caused 'subscriberQueuePolicy25A0799e' to be undefined. Fixit.`); }
    const subscriberQueuenestedstackstestNestedStack1topic209B8719858511914 = new sns.CfnSubscription(this, 'SubscriberQueuenestedstackstestNestedStack1topic209B8719858511914', {
      endpoint: subscriberQueueC193dc66.attrArn,
      protocol: 'sqs',
      topicArn: nestedStack1NestedStackNestedStack1NestedStackResource7E64ad52.attrOutputsnestedstackstestNestedStack1topic22C710dc4Ref,
    });
    subscriberQueuenestedstackstestNestedStack1topic209B8719858511914.addDependency(subscriberQueuePolicy25A0799e);
  }
}

