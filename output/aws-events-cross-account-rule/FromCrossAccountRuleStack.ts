import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface FromCrossAccountRuleStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class FromCrossAccountRuleStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: FromCrossAccountRuleStackProps = {}) {
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
    const myRuleA44ab831 = new events.CfnRule(this, 'MyRuleA44AB831', {
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
            ':events:test-region:12345678:event-bus/default',
          ].join(''),
          id: 'SQS',
        },
      ],
    });
  }
}

