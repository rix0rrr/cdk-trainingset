import * as cdk from 'aws-cdk-lib';
import * as chatbot from 'aws-cdk-lib/aws-chatbot';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface ChatbotGuardrailsIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ChatbotGuardrailsInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ChatbotGuardrailsIntegProps = {}) {
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
    const mySlackChannelConfigurationRole1D3f23ae = new iam.CfnRole(this, 'MySlackChannelConfigurationRole1D3F23AE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'chatbot.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (mySlackChannelConfigurationRole1D3f23ae == null) { throw new Error(`A combination of conditions caused 'mySlackChannelConfigurationRole1D3f23ae' to be undefined. Fixit.`); }
    const mySlackChannelA8e0b56c = new chatbot.CfnSlackChannelConfiguration(this, 'MySlackChannelA8E0B56C', {
      configurationName: 'test-channel',
      iamRoleArn: mySlackChannelConfigurationRole1D3f23ae.attrArn,
      slackChannelId: 'C0187JABUE9',
      slackWorkspaceId: 'T49239U4W',
      guardrailPolicies: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchReadOnlyAccess',
        ].join(''),
      ],
    });
  }
}

