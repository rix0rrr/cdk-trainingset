import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface baseProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class base extends cdk.Stack {
  public readonly exportsOutputFnGetAttListParam66Abdc3fValue8C623e22;

  public constructor(scope: cdk.App, id: string, props: baseProps = {}) {
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
    const listParam66Abdc3f = new ssm.CfnParameter(this, 'ListParam66ABDC3F', {
      type: 'StringList',
      value: 'value1,value2',
      name: 'integ-list-param',
    });

    // Outputs
    this.exportsOutputFnGetAttListParam66Abdc3fValue8C623e22 = listParam66Abdc3f.attrValue;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttListParam66ABDC3FValue8C623E22', {
      key: 'ExportsOutputFnGetAttListParam66ABDC3FValue8C623E22',
      exportName: 'base:ExportsOutputFnGetAttListParam66ABDC3FValue8C623E22',
      value: this.exportsOutputFnGetAttListParam66Abdc3fValue8C623e22!.toString(),
    });
  }
}

