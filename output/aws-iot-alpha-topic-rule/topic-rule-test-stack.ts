import * as cdk from 'aws-cdk-lib';
import * as iot from 'aws-cdk-lib/aws-iot';

export interface TopicRuleTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class TopicRuleTestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TopicRuleTestStackProps = {}) {
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
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            http: {
              url: 'https://example.com',
            },
          },
        ],
        awsIotSqlVersion: '2015-10-08',
        sql: 'SELECT topic(2) as device_id FROM \'device/+/data\'',
      },
    });
  }
}

