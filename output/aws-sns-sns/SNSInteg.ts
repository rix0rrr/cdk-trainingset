import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface SnsintegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Snsinteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: SnsintegProps = {}) {
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
    const customKey1E6d0d07 = new kms.CfnKey(this, 'CustomKey1E6D0D07', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    customKey1E6d0d07.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const feedbackRoleCaf84e5c = new iam.CfnRole(this, 'FeedbackRoleCAF84E5C', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (customKey1E6d0d07 == null) { throw new Error(`A combination of conditions caused 'customKey1E6d0d07' to be undefined. Fixit.`); }
    if (feedbackRoleCaf84e5c == null) { throw new Error(`A combination of conditions caused 'feedbackRoleCaf84e5c' to be undefined. Fixit.`); }
    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
      deliveryStatusLogging: [
        {
          failureFeedbackRoleArn: feedbackRoleCaf84e5c.attrArn,
          protocol: 'http/s',
          successFeedbackRoleArn: feedbackRoleCaf84e5c.attrArn,
          successFeedbackSampleRate: '50',
        },
      ],
      displayName: 'fooDisplayName',
      kmsMasterKeyId: customKey1E6d0d07.attrArn,
      topicName: 'fooTopic',
    });

    if (feedbackRoleCaf84e5c == null) { throw new Error(`A combination of conditions caused 'feedbackRoleCaf84e5c' to be undefined. Fixit.`); }
    const policy23B91518 = new iam.CfnManagedPolicy(this, 'Policy23B91518', {
      description: '',
      path: '/',
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
              'logs:PutMetricFilter',
              'logs:PutRetentionPolicy',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      roles: [
        feedbackRoleCaf84e5c.ref,
      ],
    });
  }
}

