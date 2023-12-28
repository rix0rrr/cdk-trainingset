import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface lambda-event-source-snsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class lambda-event-source-sns extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: lambda-event-source-snsProps = {}) {
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
    const fServiceRole3Ac82ee1 = new iam.CfnRole(this, 'FServiceRole3AC82EE1', {
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

    const td925bc7e = new sns.CfnTopic(this, 'TD925BC7E', {
    });

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    const fc4345940 = new lambda.CfnFunction(this, 'FC4345940', {
      code: {
        zipFile: 'exports.handler = async function handler(event) {\n    console.log(\'event:\', JSON.stringify(event, undefined, 2));\n    return { event };\n}',
      },
      handler: 'index.handler',
      role: fServiceRole3Ac82ee1.attrArn,
      runtime: 'nodejs18.x',
    });
    fc4345940.addDependency(fServiceRole3Ac82ee1);

    if (fc4345940 == null) { throw new Error(`A combination of conditions caused 'fc4345940' to be undefined. Fixit.`); }
    if (td925bc7e == null) { throw new Error(`A combination of conditions caused 'td925bc7e' to be undefined. Fixit.`); }
    const fAllowInvokelambdaeventsourcesnsT85539bb11b51a88e = new lambda.CfnPermission(this, 'FAllowInvokelambdaeventsourcesnsT85539BB11B51A88E', {
      action: 'lambda:InvokeFunction',
      functionName: fc4345940.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: td925bc7e.ref,
    });

    if (fc4345940 == null) { throw new Error(`A combination of conditions caused 'fc4345940' to be undefined. Fixit.`); }
    if (td925bc7e == null) { throw new Error(`A combination of conditions caused 'td925bc7e' to be undefined. Fixit.`); }
    const fta788ee87 = new sns.CfnSubscription(this, 'FTA788EE87', {
      endpoint: fc4345940.attrArn,
      protocol: 'lambda',
      topicArn: td925bc7e.ref,
    });
  }
}

