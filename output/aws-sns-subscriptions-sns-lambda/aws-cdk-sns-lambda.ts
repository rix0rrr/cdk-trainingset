import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface aws-cdk-sns-lambdaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-sns-lambda extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-sns-lambdaProps = {}) {
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
    const deadLetterQueue9F481546 = new sqs.CfnQueue(this, 'DeadLetterQueue9F481546', {
    });
    deadLetterQueue9F481546.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const echoServiceRoleBe28060b = new iam.CfnRole(this, 'EchoServiceRoleBE28060B', {
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

    const filteredMessageBodyServiceRoleB2eb82b3 = new iam.CfnRole(this, 'FilteredMessageBodyServiceRoleB2EB82B3', {
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

    const filteredServiceRole16D9ddc1 = new iam.CfnRole(this, 'FilteredServiceRole16D9DDC1', {
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

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const deadLetterQueuePolicyB1fb890c = new sqs.CfnQueuePolicy(this, 'DeadLetterQueuePolicyB1FB890C', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myTopic86869434.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: deadLetterQueue9F481546.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        deadLetterQueue9F481546.ref,
      ],
    });

    if (echoServiceRoleBe28060b == null) { throw new Error(`A combination of conditions caused 'echoServiceRoleBe28060b' to be undefined. Fixit.`); }
    const echo11F3fb29 = new lambda.CfnFunction(this, 'Echo11F3FB29', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    /* eslint-disable no-console */\n    console.log(\'====================================================\');\n    console.log(JSON.stringify(event, undefined, 2));\n    console.log(\'====================================================\');\n    return callback(undefined, event);\n}',
      },
      handler: 'index.handler',
      role: echoServiceRoleBe28060b.attrArn,
      runtime: 'nodejs18.x',
    });
    echo11F3fb29.addDependency(echoServiceRoleBe28060b);

    if (filteredServiceRole16D9ddc1 == null) { throw new Error(`A combination of conditions caused 'filteredServiceRole16D9ddc1' to be undefined. Fixit.`); }
    const filtered186C0d0a = new lambda.CfnFunction(this, 'Filtered186C0D0A', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    /* eslint-disable no-console */\n    console.log(\'====================================================\');\n    console.log(JSON.stringify(event, undefined, 2));\n    console.log(\'====================================================\');\n    return callback(undefined, event);\n}',
      },
      handler: 'index.handler',
      role: filteredServiceRole16D9ddc1.attrArn,
      runtime: 'nodejs18.x',
    });
    filtered186C0d0a.addDependency(filteredServiceRole16D9ddc1);

    if (filteredMessageBodyServiceRoleB2eb82b3 == null) { throw new Error(`A combination of conditions caused 'filteredMessageBodyServiceRoleB2eb82b3' to be undefined. Fixit.`); }
    const filteredMessageBody222Ae8f1 = new lambda.CfnFunction(this, 'FilteredMessageBody222AE8F1', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    /* eslint-disable no-console */\n    console.log(\'====================================================\');\n    console.log(JSON.stringify(event, undefined, 2));\n    console.log(\'====================================================\');\n    return callback(undefined, event);\n}',
      },
      handler: 'index.handler',
      role: filteredMessageBodyServiceRoleB2eb82b3.attrArn,
      runtime: 'nodejs18.x',
    });
    filteredMessageBody222Ae8f1.addDependency(filteredMessageBodyServiceRoleB2eb82b3);

    if (echo11F3fb29 == null) { throw new Error(`A combination of conditions caused 'echo11F3fb29' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const echoAllowInvokeawscdksnslambdaMyTopic6C62ab907f727cda = new lambda.CfnPermission(this, 'EchoAllowInvokeawscdksnslambdaMyTopic6C62AB907F727CDA', {
      action: 'lambda:InvokeFunction',
      functionName: echo11F3fb29.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: myTopic86869434.ref,
    });

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (echo11F3fb29 == null) { throw new Error(`A combination of conditions caused 'echo11F3fb29' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const echoMyTopic4Cb8819e = new sns.CfnSubscription(this, 'EchoMyTopic4CB8819E', {
      endpoint: echo11F3fb29.attrArn,
      protocol: 'lambda',
      redrivePolicy: {
        deadLetterTargetArn: deadLetterQueue9F481546.attrArn,
      },
      topicArn: myTopic86869434.ref,
    });

    if (filtered186C0d0a == null) { throw new Error(`A combination of conditions caused 'filtered186C0d0a' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const filteredAllowInvokeawscdksnslambdaMyTopic6C62ab90a2ea1666 = new lambda.CfnPermission(this, 'FilteredAllowInvokeawscdksnslambdaMyTopic6C62AB90A2EA1666', {
      action: 'lambda:InvokeFunction',
      functionName: filtered186C0d0a.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: myTopic86869434.ref,
    });

    if (filteredMessageBody222Ae8f1 == null) { throw new Error(`A combination of conditions caused 'filteredMessageBody222Ae8f1' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const filteredMessageBodyAllowInvokeawscdksnslambdaMyTopic6C62ab90fb54cea4 = new lambda.CfnPermission(this, 'FilteredMessageBodyAllowInvokeawscdksnslambdaMyTopic6C62AB90FB54CEA4', {
      action: 'lambda:InvokeFunction',
      functionName: filteredMessageBody222Ae8f1.attrArn,
      principal: 'sns.amazonaws.com',
      sourceArn: myTopic86869434.ref,
    });

    if (filteredMessageBody222Ae8f1 == null) { throw new Error(`A combination of conditions caused 'filteredMessageBody222Ae8f1' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const filteredMessageBodyMyTopicAd1f55c4 = new sns.CfnSubscription(this, 'FilteredMessageBodyMyTopicAD1F55C4', {
      endpoint: filteredMessageBody222Ae8f1.attrArn,
      filterPolicy: {
        background: {
          color: [
            'red',
            {
              prefix: 'bl',
            },
            {
              prefix: 'ye',
            },
          ],
        },
      },
      filterPolicyScope: 'MessageBody',
      protocol: 'lambda',
      topicArn: myTopic86869434.ref,
    });

    if (filtered186C0d0a == null) { throw new Error(`A combination of conditions caused 'filtered186C0d0a' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const filteredMyTopicC8395c27 = new sns.CfnSubscription(this, 'FilteredMyTopicC8395C27', {
      endpoint: filtered186C0d0a.attrArn,
      filterPolicy: {
        color: [
          'red',
          {
            prefix: 'bl',
          },
          {
            prefix: 'ye',
          },
        ],
        size: [
          {
            'anything-but': [
              'small',
              'medium',
            ],
          },
        ],
        price: [
          {
            numeric: [
              '>=',
              100,
              '<=',
              200,
            ],
          },
        ],
      },
      protocol: 'lambda',
      topicArn: myTopic86869434.ref,
    });
  }
}

