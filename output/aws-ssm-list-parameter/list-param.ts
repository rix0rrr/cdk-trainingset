import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface ListParamProps extends cdk.StackProps {
  /**
   * @default 'integ-list-param'
   */
  readonly fromAttrsParameter?: string[];
  /**
   * @default 'integ-list-param'
   */
  readonly ssmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter?: string[];
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ListParam extends cdk.Stack {
  public readonly output;
  public readonly exportsOutputRefversionvaluetestB139b4aa;
  public readonly exportsOutputRefvaluetest4Dd5ff9d;
  public readonly exportsOutputRefattrstestCca64863;

  public constructor(scope: cdk.App, id: string, props: ListParamProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      fromAttrsParameter: new cdk.CfnParameter(this, 'FromAttrsParameter', {
        type: 'AWS::SSM::Parameter::Value<List<String>>',
        default: props.fromAttrsParameter?.join(',') ?? 'integ-list-param',
      }).valueAsList,
      ssmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<List<String>>',
        default: props.ssmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter?.join(',') ?? 'integ-list-param',
      }).valueAsList,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const attrstest = new ssm.CfnParameter(this, 'attrstest', {
      type: 'StringList',
      value: [
        props.fromAttrsParameter!,
      ].join(','),
    });

    const valuetest = new ssm.CfnParameter(this, 'valuetest', {
      type: 'StringList',
      value: [
        props.ssmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter!,
      ].join(','),
    });

    const versionvaluetest = new ssm.CfnParameter(this, 'versionvaluetest', {
      type: 'StringList',
      value: [
        props.ssmParameterValueinteglistparamC96584b6f00a464ead1953aff4b05118Parameter!,
      ].join(','),
    });

    // Outputs
    this.output = [
      cdk.Fn.split(',', cdk.Fn.importValue('base:ExportsOutputFnGetAttListParam66ABDC3FValue8C623E22')),
    ].join(',');
    new cdk.CfnOutput(this, 'CfnOutputOutput', {
      key: 'Output',
      value: this.output!.toString(),
    });
    this.exportsOutputRefversionvaluetestB139b4aa = versionvaluetest.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefversionvaluetestB139B4AA', {
      key: 'ExportsOutputRefversionvaluetestB139B4AA',
      exportName: 'list-param:ExportsOutputRefversionvaluetestB139B4AA',
      value: this.exportsOutputRefversionvaluetestB139b4aa!.toString(),
    });
    this.exportsOutputRefvaluetest4Dd5ff9d = valuetest.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefvaluetest4DD5FF9D', {
      key: 'ExportsOutputRefvaluetest4DD5FF9D',
      exportName: 'list-param:ExportsOutputRefvaluetest4DD5FF9D',
      value: this.exportsOutputRefvaluetest4Dd5ff9d!.toString(),
    });
    this.exportsOutputRefattrstestCca64863 = attrstest.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefattrstestCCA64863', {
      key: 'ExportsOutputRefattrstestCCA64863',
      exportName: 'list-param:ExportsOutputRefattrstestCCA64863',
      value: this.exportsOutputRefattrstestCca64863!.toString(),
    });
  }
}

