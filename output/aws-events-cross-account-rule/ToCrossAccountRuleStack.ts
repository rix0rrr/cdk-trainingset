import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface ToCrossAccountRuleStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ToCrossAccountRuleStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ToCrossAccountRuleStackProps = {}) {
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
    const fromCrossAccountRuleStackMyRule68A189edsqs1a422535 = new events.CfnRule(this, 'FromCrossAccountRuleStackMyRule68A189EDSQS1A422535', {
      eventPattern: {
        detail: {
          foo: [
            'bar',
          ],
        },
        'detail-type': [
          'cdk-integ-custom-rule',
        ],
        source: [
          'cdk-integ',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: [
            'arn:',
            this.partition,
            ':sqs:test-region:12345678:IntegTestCrossEnvRule',
          ].join(''),
          id: 'SQS',
        },
      ],
    });

    const queue = new sqs.CfnQueue(this, 'Queue', {
      queueName: 'IntegTestCrossEnvRule',
      receiveMessageWaitTimeSeconds: 20,
    });
  }
}

