import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface IntegBinaryPayloadProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegBinaryPayload extends cdk.Stack {
  public readonly exportsOutputReffn5Ff616e3be1a8bd6;

  public constructor(scope: cdk.App, id: string, props: IntegBinaryPayloadProps = {}) {
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
    const fnServiceRole5D180afd = new iam.CfnRole(this, 'fnServiceRole5D180AFD', {
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

    if (fnServiceRole5D180afd == null) { throw new Error(`A combination of conditions caused 'fnServiceRole5D180afd' to be undefined. Fixit.`); }
    const fn5Ff616e3 = new lambda.CfnFunction(this, 'fn5FF616E3', {
      code: {
        zipFile: '\n    exports.handler = async (event) => {\n      return event;\n    };\n  ',
      },
      handler: 'index.handler',
      role: fnServiceRole5D180afd.attrArn,
      runtime: 'nodejs18.x',
    });
    fn5Ff616e3.addDependency(fnServiceRole5D180afd);

    // Outputs
    this.exportsOutputReffn5Ff616e3be1a8bd6 = fn5Ff616e3.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputReffn5FF616E3BE1A8BD6', {
      key: 'ExportsOutputReffn5FF616E3BE1A8BD6',
      exportName: 'IntegBinaryPayload:ExportsOutputReffn5FF616E3BE1A8BD6',
      value: this.exportsOutputReffn5Ff616e3be1a8bd6!.toString(),
    });
  }
}

