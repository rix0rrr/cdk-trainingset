import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface integ-parameter-arnsProps extends cdk.StackProps {
  /**
   * @default 'myParamName'
   */
  readonly parameterNameParameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-parameter-arns extends cdk.Stack {
  public readonly stringAutogenArn;
  public readonly stringSimpleArn;
  public readonly stringPathArn;
  public readonly listAutogenArn;
  public readonly listSimpleArn;
  public readonly listPathArn;
  public readonly parameterizedSimpleArn;
  public readonly parameterizedNonSimpleArn;

  public constructor(scope: cdk.App, id: string, props: integ-parameter-arnsProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      parameterNameParameter: props.parameterNameParameter ?? 'myParamName',
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const listAutogenC5da1cae = new ssm.CfnParameter(this, 'ListAutogenC5DA1CAE', {
      type: 'StringList',
      value: 'hello,world',
    });

    const listPath120D6fab = new ssm.CfnParameter(this, 'ListPath120D6FAB', {
      type: 'StringList',
      value: 'hello,world',
      name: '/list/path/name',
    });

    const listSimple9Db641cb = new ssm.CfnParameter(this, 'ListSimple9DB641CB', {
      type: 'StringList',
      value: 'hello,world',
      name: 'list-simple-name',
    });

    const parameterizedNonSimple23C44bf6 = new ssm.CfnParameter(this, 'ParameterizedNonSimple23C44BF6', {
      type: 'String',
      value: 'hello, world',
      name: [
        '/',
        props.parameterNameParameter!,
        '/non/simple',
      ].join(''),
    });

    const parameterizedSimpleB6311859 = new ssm.CfnParameter(this, 'ParameterizedSimpleB6311859', {
      type: 'String',
      value: 'hello, world',
      name: props.parameterNameParameter!,
    });

    const stringAutogenE7e896e4 = new ssm.CfnParameter(this, 'StringAutogenE7E896E4', {
      type: 'String',
      value: 'hello, world',
    });

    const stringPathD8120137 = new ssm.CfnParameter(this, 'StringPathD8120137', {
      type: 'String',
      value: 'hello, world',
      name: '/path/name/foo/bar',
    });

    const stringSimpleA681514d = new ssm.CfnParameter(this, 'StringSimpleA681514D', {
      type: 'String',
      value: 'hello, world',
      name: 'simple-name',
    });

    // Outputs
    this.stringAutogenArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      stringAutogenE7e896e4.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputStringAutogenArn', {
      key: 'StringAutogenArn',
      value: this.stringAutogenArn!.toString(),
    });
    this.stringSimpleArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      stringSimpleA681514d.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputStringSimpleArn', {
      key: 'StringSimpleArn',
      value: this.stringSimpleArn!.toString(),
    });
    this.stringPathArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter',
      stringPathD8120137.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputStringPathArn', {
      key: 'StringPathArn',
      value: this.stringPathArn!.toString(),
    });
    this.listAutogenArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      listAutogenC5da1cae.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputListAutogenArn', {
      key: 'ListAutogenArn',
      value: this.listAutogenArn!.toString(),
    });
    this.listSimpleArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      listSimple9Db641cb.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputListSimpleArn', {
      key: 'ListSimpleArn',
      value: this.listSimpleArn!.toString(),
    });
    this.listPathArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter',
      listPath120D6fab.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputListPathArn', {
      key: 'ListPathArn',
      value: this.listPathArn!.toString(),
    });
    this.parameterizedSimpleArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter/',
      parameterizedSimpleB6311859.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputParameterizedSimpleArn', {
      key: 'ParameterizedSimpleArn',
      value: this.parameterizedSimpleArn!.toString(),
    });
    this.parameterizedNonSimpleArn = [
      'arn:',
      this.partition,
      ':ssm:',
      this.region,
      ':',
      this.account,
      ':parameter',
      parameterizedNonSimple23C44bf6.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputParameterizedNonSimpleArn', {
      key: 'ParameterizedNonSimpleArn',
      value: this.parameterizedNonSimpleArn!.toString(),
    });
  }
}

