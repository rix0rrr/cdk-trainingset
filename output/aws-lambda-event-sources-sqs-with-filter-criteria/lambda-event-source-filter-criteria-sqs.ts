import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface LambdaEventSourceFilterCriteriaSqsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaEventSourceFilterCriteriaSqs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaEventSourceFilterCriteriaSqsProps = {}) {
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

    const q63c6e3ab = new sqs.CfnQueue(this, 'Q63C6E3AB', {
    });
    q63c6e3ab.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (q63c6e3ab == null) { throw new Error(`A combination of conditions caused 'q63c6e3ab' to be undefined. Fixit.`); }
    const fServiceRoleDefaultPolicy17A19bfa = new iam.CfnPolicy(this, 'FServiceRoleDefaultPolicy17A19BFA', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'sqs:ChangeMessageVisibility',
              'sqs:DeleteMessage',
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:ReceiveMessage',
            ],
            Effect: 'Allow',
            Resource: q63c6e3ab.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FServiceRoleDefaultPolicy17A19BFA',
      roles: [
        fServiceRole3Ac82ee1.ref,
      ],
    });

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (fServiceRoleDefaultPolicy17A19bfa == null) { throw new Error(`A combination of conditions caused 'fServiceRoleDefaultPolicy17A19bfa' to be undefined. Fixit.`); }
    const fc4345940 = new lambda.CfnFunction(this, 'FC4345940', {
      code: {
        zipFile: 'exports.handler = async function handler(event) {\n    console.log(\'event:\', JSON.stringify(event, undefined, 2));\n    return { event };\n}',
      },
      handler: 'index.handler',
      role: fServiceRole3Ac82ee1.attrArn,
      runtime: 'nodejs18.x',
    });
    fc4345940.addDependency(fServiceRoleDefaultPolicy17A19bfa);
    fc4345940.addDependency(fServiceRole3Ac82ee1);

    if (fc4345940 == null) { throw new Error(`A combination of conditions caused 'fc4345940' to be undefined. Fixit.`); }
    if (q63c6e3ab == null) { throw new Error(`A combination of conditions caused 'q63c6e3ab' to be undefined. Fixit.`); }
    const fSqsEventSourcelambdaeventsourcefiltercriteriasqsQa0fc5c93ebf98b38 = new lambda.CfnEventSourceMapping(this, 'FSqsEventSourcelambdaeventsourcefiltercriteriasqsQA0FC5C93EBF98B38', {
      batchSize: 5,
      eventSourceArn: q63c6e3ab.attrArn,
      filterCriteria: {
        filters: [
          {
            pattern: '{\"body\":{\"id\":[{\"exists\":true}]}}',
          },
        ],
      },
      functionName: fc4345940.ref,
    });
  }
}

