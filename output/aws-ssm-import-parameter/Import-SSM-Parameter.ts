import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface Import-SSM-ParameterProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-ebs'
   */
  readonly importedWithNameParameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Import-SSM-Parameter extends cdk.Stack {
  public readonly importedWithNameOutput;
  public readonly importedWithIntrinsicOutput;
  public readonly importedWithForceFlagOutput;

  public constructor(scope: cdk.App, id: string, props: Import-SSM-ParameterProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      importedWithNameParameter: new cdk.CfnParameter(this, 'ImportedWithNameParameter', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.importedWithNameParameter?.toString() ?? '/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-ebs',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const stringParameter472Eed0e = new ssm.CfnParameter(this, 'StringParameter472EED0E', {
      type: 'String',
      value: 'Initial parameter value',
      name: 'import-parameter-test',
    });

    // Outputs
    this.importedWithNameOutput = props.importedWithNameParameter!;
    new cdk.CfnOutput(this, 'CfnOutputImportedWithNameOutput', {
      key: 'ImportedWithNameOutput',
      value: this.importedWithNameOutput!.toString(),
    });
    this.importedWithIntrinsicOutput = [
      '{{resolve:ssm:',
      stringParameter472Eed0e.ref,
      '}}',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputImportedWithIntrinsicOutput', {
      key: 'ImportedWithIntrinsicOutput',
      value: this.importedWithIntrinsicOutput!.toString(),
    });
    this.importedWithForceFlagOutput = [
      '{{resolve:ssm:',
      stringParameter472Eed0e.ref,
      '}}',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputImportedWithForceFlagOutput', {
      key: 'ImportedWithForceFlagOutput',
      value: this.importedWithForceFlagOutput!.toString(),
    });
  }
}

