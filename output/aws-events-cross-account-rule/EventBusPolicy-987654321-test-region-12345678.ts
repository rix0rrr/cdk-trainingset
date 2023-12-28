import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface Eventbuspolicy987654321TestRegion12345678Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Eventbuspolicy987654321TestRegion12345678 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Eventbuspolicy987654321TestRegion12345678Props = {}) {
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
    const givePermToOtherAccount = new events.CfnEventBusPolicy(this, 'GivePermToOtherAccount', {
      statementId: 'Allow-account-987654321-FromCrossAccountRuleStackMyRule68A189ED',
      action: 'events:PutEvents',
      principal: '987654321',
    });
  }
}

