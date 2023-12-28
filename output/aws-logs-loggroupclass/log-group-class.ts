import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface LogGroupClassProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LogGroupClass extends cdk.Stack {
  public readonly exportsOutputRefloggroupdefaultAf2b13aea68e3e99;
  public readonly exportsOutputRefloggroupstandard035A0c267ef270a0;
  public readonly exportsOutputRefloggroupinfrequentaccessBe348c18d714344d;

  public constructor(scope: cdk.App, id: string, props: LogGroupClassProps = {}) {
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
    const loggroupdefaultAf2b13ae = new logs.CfnLogGroup(this, 'loggroupdefaultAF2B13AE', {
      retentionInDays: 731,
    });
    loggroupdefaultAf2b13ae.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const loggroupinfrequentaccessBe348c18 = new logs.CfnLogGroup(this, 'loggroupinfrequentaccessBE348C18', {
      logGroupClass: 'INFREQUENT_ACCESS',
      retentionInDays: 731,
    });
    loggroupinfrequentaccessBe348c18.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const loggroupstandard035A0c26 = new logs.CfnLogGroup(this, 'loggroupstandard035A0C26', {
      logGroupClass: 'STANDARD',
      retentionInDays: 731,
    });
    loggroupstandard035A0c26.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    // Outputs
    this.exportsOutputRefloggroupdefaultAf2b13aea68e3e99 = loggroupdefaultAf2b13ae.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefloggroupdefaultAF2B13AEA68E3E99', {
      key: 'ExportsOutputRefloggroupdefaultAF2B13AEA68E3E99',
      exportName: 'log-group-class:ExportsOutputRefloggroupdefaultAF2B13AEA68E3E99',
      value: this.exportsOutputRefloggroupdefaultAf2b13aea68e3e99!.toString(),
    });
    this.exportsOutputRefloggroupstandard035A0c267ef270a0 = loggroupstandard035A0c26.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefloggroupstandard035A0C267EF270A0', {
      key: 'ExportsOutputRefloggroupstandard035A0C267EF270A0',
      exportName: 'log-group-class:ExportsOutputRefloggroupstandard035A0C267EF270A0',
      value: this.exportsOutputRefloggroupstandard035A0c267ef270a0!.toString(),
    });
    this.exportsOutputRefloggroupinfrequentaccessBe348c18d714344d = loggroupinfrequentaccessBe348c18.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefloggroupinfrequentaccessBE348C18D714344D', {
      key: 'ExportsOutputRefloggroupinfrequentaccessBE348C18D714344D',
      exportName: 'log-group-class:ExportsOutputRefloggroupinfrequentaccessBE348C18D714344D',
      value: this.exportsOutputRefloggroupinfrequentaccessBe348c18d714344d!.toString(),
    });
  }
}

