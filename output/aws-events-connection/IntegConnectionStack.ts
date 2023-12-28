import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';

export interface IntegConnectionStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegConnectionStack extends cdk.Stack {
  public readonly exportsOutputRefConnection07624Bcd5a8a23c8;

  public constructor(scope: cdk.App, id: string, props: IntegConnectionStackProps = {}) {
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
    const connection07624Bcd = new events.CfnConnection(this, 'Connection07624BCD', {
      authorizationType: 'API_KEY',
      authParameters: {
        apiKeyAuthParameters: {
          apiKeyName: 'keyname',
          apiKeyValue: 'keyvalue',
        },
        invocationHttpParameters: {
          headerParameters: [
            {
              isValueSecret: false,
              key: 'content-type',
              value: 'application/json',
            },
          ],
        },
      },
    });

    // Outputs
    this.exportsOutputRefConnection07624Bcd5a8a23c8 = connection07624Bcd.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefConnection07624BCD5A8A23C8', {
      key: 'ExportsOutputRefConnection07624BCD5A8A23C8',
      exportName: 'IntegConnectionStack:ExportsOutputRefConnection07624BCD5A8A23C8',
      value: this.exportsOutputRefConnection07624Bcd5a8a23c8!.toString(),
    });
  }
}

