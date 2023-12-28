import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface consumerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class consumer extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: consumerProps = {}) {
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
    const getAtt0B6aca40 = new ssm.CfnParameter(this, 'GetAtt0B6ACA40', {
      type: 'StringList',
      value: [
        cdk.Fn.split('||', cdk.Fn.importValue('producer:ExportsOutputFnGetAttendpointE7B9679BDnsEntries62080A34')),
      ].join(','),
    });

    const manualEb2ecd12 = new ssm.CfnParameter(this, 'ManualEB2ECD12', {
      type: 'StringList',
      value: [
        cdk.Fn.split('||', cdk.Fn.importValue('ManualExport')),
      ].join(','),
    });

    const ref47C32af2 = new ssm.CfnParameter(this, 'Ref47C32AF2', {
      type: 'StringList',
      value: [
        cdk.Fn.split('||', cdk.Fn.importValue('producer:ExportsOutputRefstringListParam77B646D6')),
      ].join(','),
    });
  }
}

