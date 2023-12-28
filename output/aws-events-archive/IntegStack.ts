import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface IntegStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegStackProps = {}) {
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
    const eventBridgeF6d0cf9d = new events.CfnEventBus(this, 'EventBridgeF6D0CF9D', {
      name: 'IntegStackEventBridgeF828A2C9',
    });

    if (eventBridgeF6d0cf9d == null) { throw new Error(`A combination of conditions caused 'eventBridgeF6d0cf9d' to be undefined. Fixit.`); }
    const myCustomArchive = new events.CfnArchive(this, 'MyCustomArchive', {
      sourceArn: eventBridgeF6d0cf9d.attrArn,
      eventPattern: {
        account: [
          this.account,
        ],
      },
      retentionDays: 0,
    });
  }
}

