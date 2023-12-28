import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface StackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackProps = {}) {
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
    const busEa82b648 = new events.CfnEventBus(this, 'BusEA82B648', {
      name: 'StackBusAA0A1E4B',
    });

    if (busEa82b648 == null) { throw new Error(`A combination of conditions caused 'busEa82b648' to be undefined. Fixit.`); }
    const busStatement1B4d0336c = new events.CfnEventBusPolicy(this, 'BusStatement1B4D0336C', {
      eventBusName: busEa82b648.ref,
      statement: {
        Action: 'events:PutEvents',
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
        Resource: busEa82b648.attrArn,
        Sid: 'Statement1',
      },
      statementId: 'Statement1',
    });

    if (busEa82b648 == null) { throw new Error(`A combination of conditions caused 'busEa82b648' to be undefined. Fixit.`); }
    const busStatement2B5fb314b = new events.CfnEventBusPolicy(this, 'BusStatement2B5FB314B', {
      eventBusName: busEa82b648.ref,
      statement: {
        Action: 'events:PutRule',
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
        Resource: busEa82b648.attrArn,
        Sid: 'Statement2',
      },
      statementId: 'Statement2',
    });
  }
}

