import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkLambdaRuntimeInlinecodeProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambdaRuntimeInlinecode extends cdk.Stack {
  public readonly python37functionName;
  public readonly python38functionName;
  public readonly python39functionName;
  public readonly python310functionName;
  public readonly python312functionName;
  public readonly nodejs14XfunctionName;
  public readonly nodejs16XfunctionName;
  public readonly nodejs18XfunctionName;
  public readonly nodejs20XfunctionName;

  public constructor(scope: cdk.App, id: string, props: AwsCdkLambdaRuntimeInlinecodeProps = {}) {
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
    const nodejs14xServiceRole4523Ecdb = new iam.CfnRole(this, 'NODEJS14XServiceRole4523ECDB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const nodejs16xServiceRoleB9dafdfd = new iam.CfnRole(this, 'NODEJS16XServiceRoleB9DAFDFD', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const nodejs18xServiceRole4D18036a = new iam.CfnRole(this, 'NODEJS18XServiceRole4D18036A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const nodejs20xServiceRole188A4e38 = new iam.CfnRole(this, 'NODEJS20XServiceRole188A4E38', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const python310ServiceRole65985Cc8 = new iam.CfnRole(this, 'PYTHON310ServiceRole65985CC8', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const python312ServiceRoleBeb03378 = new iam.CfnRole(this, 'PYTHON312ServiceRoleBEB03378', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const python37ServiceRoleDe7e561e = new iam.CfnRole(this, 'PYTHON37ServiceRoleDE7E561E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const python38ServiceRole3Ea86bbe = new iam.CfnRole(this, 'PYTHON38ServiceRole3EA86BBE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const python39ServiceRole53E964df = new iam.CfnRole(this, 'PYTHON39ServiceRole53E964DF', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (nodejs14xServiceRole4523Ecdb == null) { throw new Error(`A combination of conditions caused 'nodejs14xServiceRole4523Ecdb' to be undefined. Fixit.`); }
    const nodejs14x930214a3 = new lambda.CfnFunction(this, 'NODEJS14X930214A3', {
      code: {
        zipFile: 'exports.handler = async function(event) { return \"success\" }',
      },
      handler: 'index.handler',
      role: nodejs14xServiceRole4523Ecdb.attrArn,
      runtime: 'nodejs14.x',
    });
    nodejs14x930214a3.addDependency(nodejs14xServiceRole4523Ecdb);

    if (nodejs16xServiceRoleB9dafdfd == null) { throw new Error(`A combination of conditions caused 'nodejs16xServiceRoleB9dafdfd' to be undefined. Fixit.`); }
    const nodejs16xde5dd82d = new lambda.CfnFunction(this, 'NODEJS16XDE5DD82D', {
      code: {
        zipFile: 'exports.handler = async function(event) { return \"success\" }',
      },
      handler: 'index.handler',
      role: nodejs16xServiceRoleB9dafdfd.attrArn,
      runtime: 'nodejs16.x',
    });
    nodejs16xde5dd82d.addDependency(nodejs16xServiceRoleB9dafdfd);

    if (nodejs18xServiceRole4D18036a == null) { throw new Error(`A combination of conditions caused 'nodejs18xServiceRole4D18036a' to be undefined. Fixit.`); }
    const nodejs18x7b6e6033 = new lambda.CfnFunction(this, 'NODEJS18X7B6E6033', {
      code: {
        zipFile: 'exports.handler = async function(event) { return \"success\" }',
      },
      handler: 'index.handler',
      role: nodejs18xServiceRole4D18036a.attrArn,
      runtime: 'nodejs18.x',
    });
    nodejs18x7b6e6033.addDependency(nodejs18xServiceRole4D18036a);

    if (nodejs20xServiceRole188A4e38 == null) { throw new Error(`A combination of conditions caused 'nodejs20xServiceRole188A4e38' to be undefined. Fixit.`); }
    const nodejs20x70a25ade = new lambda.CfnFunction(this, 'NODEJS20X70A25ADE', {
      code: {
        zipFile: 'exports.handler = async function(event) { return \"success\" }',
      },
      handler: 'index.handler',
      role: nodejs20xServiceRole188A4e38.attrArn,
      runtime: 'nodejs20.x',
    });
    nodejs20x70a25ade.addDependency(nodejs20xServiceRole188A4e38);

    if (python310ServiceRole65985Cc8 == null) { throw new Error(`A combination of conditions caused 'python310ServiceRole65985Cc8' to be undefined. Fixit.`); }
    const python310431c418b = new lambda.CfnFunction(this, 'PYTHON310431C418B', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      handler: 'index.handler',
      role: python310ServiceRole65985Cc8.attrArn,
      runtime: 'python3.10',
    });
    python310431c418b.addDependency(python310ServiceRole65985Cc8);

    if (python312ServiceRoleBeb03378 == null) { throw new Error(`A combination of conditions caused 'python312ServiceRoleBeb03378' to be undefined. Fixit.`); }
    const python3127b62731d = new lambda.CfnFunction(this, 'PYTHON3127B62731D', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      handler: 'index.handler',
      role: python312ServiceRoleBeb03378.attrArn,
      runtime: 'python3.12',
    });
    python3127b62731d.addDependency(python312ServiceRoleBeb03378);

    if (python37ServiceRoleDe7e561e == null) { throw new Error(`A combination of conditions caused 'python37ServiceRoleDe7e561e' to be undefined. Fixit.`); }
    const python37d3a10e04 = new lambda.CfnFunction(this, 'PYTHON37D3A10E04', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      handler: 'index.handler',
      role: python37ServiceRoleDe7e561e.attrArn,
      runtime: 'python3.7',
    });
    python37d3a10e04.addDependency(python37ServiceRoleDe7e561e);

    if (python38ServiceRole3Ea86bbe == null) { throw new Error(`A combination of conditions caused 'python38ServiceRole3Ea86bbe' to be undefined. Fixit.`); }
    const python38a180ae47 = new lambda.CfnFunction(this, 'PYTHON38A180AE47', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      handler: 'index.handler',
      role: python38ServiceRole3Ea86bbe.attrArn,
      runtime: 'python3.8',
    });
    python38a180ae47.addDependency(python38ServiceRole3Ea86bbe);

    if (python39ServiceRole53E964df == null) { throw new Error(`A combination of conditions caused 'python39ServiceRole53E964df' to be undefined. Fixit.`); }
    const python39143bf976 = new lambda.CfnFunction(this, 'PYTHON39143BF976', {
      code: {
        zipFile: 'def handler(event, context):\n  return \"success\"',
      },
      handler: 'index.handler',
      role: python39ServiceRole53E964df.attrArn,
      runtime: 'python3.9',
    });
    python39143bf976.addDependency(python39ServiceRole53E964df);

    // Outputs
    this.python37functionName = python37d3a10e04.ref;
    new cdk.CfnOutput(this, 'CfnOutputPYTHON37functionName', {
      key: 'PYTHON37functionName',
      value: this.python37functionName!.toString(),
    });
    this.python38functionName = python38a180ae47.ref;
    new cdk.CfnOutput(this, 'CfnOutputPYTHON38functionName', {
      key: 'PYTHON38functionName',
      value: this.python38functionName!.toString(),
    });
    this.python39functionName = python39143bf976.ref;
    new cdk.CfnOutput(this, 'CfnOutputPYTHON39functionName', {
      key: 'PYTHON39functionName',
      value: this.python39functionName!.toString(),
    });
    this.python310functionName = python310431c418b.ref;
    new cdk.CfnOutput(this, 'CfnOutputPYTHON310functionName', {
      key: 'PYTHON310functionName',
      value: this.python310functionName!.toString(),
    });
    this.python312functionName = python3127b62731d.ref;
    new cdk.CfnOutput(this, 'CfnOutputPYTHON312functionName', {
      key: 'PYTHON312functionName',
      value: this.python312functionName!.toString(),
    });
    this.nodejs14XfunctionName = nodejs14x930214a3.ref;
    new cdk.CfnOutput(this, 'CfnOutputNODEJS14XfunctionName', {
      key: 'NODEJS14XfunctionName',
      value: this.nodejs14XfunctionName!.toString(),
    });
    this.nodejs16XfunctionName = nodejs16xde5dd82d.ref;
    new cdk.CfnOutput(this, 'CfnOutputNODEJS16XfunctionName', {
      key: 'NODEJS16XfunctionName',
      value: this.nodejs16XfunctionName!.toString(),
    });
    this.nodejs18XfunctionName = nodejs18x7b6e6033.ref;
    new cdk.CfnOutput(this, 'CfnOutputNODEJS18XfunctionName', {
      key: 'NODEJS18XfunctionName',
      value: this.nodejs18XfunctionName!.toString(),
    });
    this.nodejs20XfunctionName = nodejs20x70a25ade.ref;
    new cdk.CfnOutput(this, 'CfnOutputNODEJS20XfunctionName', {
      key: 'NODEJS20XfunctionName',
      value: this.nodejs20XfunctionName!.toString(),
    });
  }
}

