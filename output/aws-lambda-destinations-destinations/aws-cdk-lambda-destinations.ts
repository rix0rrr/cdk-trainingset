import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkLambdaDestinationsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambdaDestinations extends cdk.Stack {
  public readonly exportsOutputRefSnsSqsC4810b27404a5aff;
  public readonly exportsOutputRefQueue4A7e3555425e8bd3;

  public constructor(scope: cdk.App, id: string, props: AwsCdkLambdaDestinationsProps = {}) {
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
    const eventBusLambdaServiceRole9Bc8901f = new iam.CfnRole(this, 'EventBusLambdaServiceRole9BC8901F', {
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

    const onSuccesServiceRole75E399cf = new iam.CfnRole(this, 'OnSuccesServiceRole75E399CF', {
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

    const queue4A7e3555 = new sqs.CfnQueue(this, 'Queue4A7E3555', {
    });
    queue4A7e3555.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const snsSqsServiceRole869866F7 = new iam.CfnRole(this, 'SnsSqsServiceRole869866F7', {
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

    const topicBfc7af6e = new sns.CfnTopic(this, 'TopicBFC7AF6E', {
    });

    if (onSuccesServiceRole75E399cf == null) { throw new Error(`A combination of conditions caused 'onSuccesServiceRole75E399cf' to be undefined. Fixit.`); }
    const onSucces8F9c946b = new lambda.CfnFunction(this, 'OnSucces8F9C946B', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        console.log(event);\n      };',
      },
      handler: 'index.handler',
      role: onSuccesServiceRole75E399cf.attrArn,
      runtime: 'nodejs18.x',
    });
    onSucces8F9c946b.addDependency(onSuccesServiceRole75E399cf);

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (snsSqsServiceRole869866F7 == null) { throw new Error(`A combination of conditions caused 'snsSqsServiceRole869866F7' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const snsSqsServiceRoleDefaultPolicy82E7b09f = new iam.CfnPolicy(this, 'SnsSqsServiceRoleDefaultPolicy82E7B09F', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Resource: topicBfc7af6e.ref,
          },
          {
            Action: [
              'sqs:GetQueueAttributes',
              'sqs:GetQueueUrl',
              'sqs:SendMessage',
            ],
            Effect: 'Allow',
            Resource: queue4A7e3555.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SnsSqsServiceRoleDefaultPolicy82E7B09F',
      roles: [
        snsSqsServiceRole869866F7.ref,
      ],
    });

    if (eventBusLambdaServiceRole9Bc8901f == null) { throw new Error(`A combination of conditions caused 'eventBusLambdaServiceRole9Bc8901f' to be undefined. Fixit.`); }
    if (onSucces8F9c946b == null) { throw new Error(`A combination of conditions caused 'onSucces8F9c946b' to be undefined. Fixit.`); }
    const eventBusLambdaServiceRoleDefaultPolicy5Bb7feb6 = new iam.CfnPolicy(this, 'EventBusLambdaServiceRoleDefaultPolicy5BB7FEB6', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':event-bus/default',
            ].join(''),
          },
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              onSucces8F9c946b.attrArn,
              [
                onSucces8F9c946b.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EventBusLambdaServiceRoleDefaultPolicy5BB7FEB6',
      roles: [
        eventBusLambdaServiceRole9Bc8901f.ref,
      ],
    });

    if (snsSqsServiceRole869866F7 == null) { throw new Error(`A combination of conditions caused 'snsSqsServiceRole869866F7' to be undefined. Fixit.`); }
    if (snsSqsServiceRoleDefaultPolicy82E7b09f == null) { throw new Error(`A combination of conditions caused 'snsSqsServiceRoleDefaultPolicy82E7b09f' to be undefined. Fixit.`); }
    const snsSqsC4810b27 = new lambda.CfnFunction(this, 'SnsSqsC4810B27', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        if (event.status === \'OK\') return \'success\';\n        throw new Error(\'failure\');\n      };',
      },
      handler: 'index.handler',
      role: snsSqsServiceRole869866F7.attrArn,
      runtime: 'nodejs18.x',
    });
    snsSqsC4810b27.addDependency(snsSqsServiceRoleDefaultPolicy82E7b09f);
    snsSqsC4810b27.addDependency(snsSqsServiceRole869866F7);

    if (eventBusLambdaServiceRole9Bc8901f == null) { throw new Error(`A combination of conditions caused 'eventBusLambdaServiceRole9Bc8901f' to be undefined. Fixit.`); }
    if (eventBusLambdaServiceRoleDefaultPolicy5Bb7feb6 == null) { throw new Error(`A combination of conditions caused 'eventBusLambdaServiceRoleDefaultPolicy5Bb7feb6' to be undefined. Fixit.`); }
    const eventBusLambda4Aa26499 = new lambda.CfnFunction(this, 'EventBusLambda4AA26499', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        if (event.status === \'OK\') return \'success\';\n        throw new Error(\'failure\');\n      };',
      },
      handler: 'index.handler',
      role: eventBusLambdaServiceRole9Bc8901f.attrArn,
      runtime: 'nodejs18.x',
    });
    eventBusLambda4Aa26499.addDependency(eventBusLambdaServiceRoleDefaultPolicy5Bb7feb6);
    eventBusLambda4Aa26499.addDependency(eventBusLambdaServiceRole9Bc8901f);

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (snsSqsC4810b27 == null) { throw new Error(`A combination of conditions caused 'snsSqsC4810b27' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const snsSqsEventInvokeConfigDc664368 = new lambda.CfnEventInvokeConfig(this, 'SnsSqsEventInvokeConfigDC664368', {
      destinationConfig: {
        onFailure: {
          destination: topicBfc7af6e.ref,
        },
        onSuccess: {
          destination: queue4A7e3555.attrArn,
        },
      },
      functionName: snsSqsC4810b27.ref,
      maximumEventAgeInSeconds: 10800,
      maximumRetryAttempts: 1,
      qualifier: '$LATEST',
    });

    if (snsSqsC4810b27 == null) { throw new Error(`A combination of conditions caused 'snsSqsC4810b27' to be undefined. Fixit.`); }
    const snsSqsVersionMySpecialVersion08136Bd6 = new lambda.CfnVersion(this, 'SnsSqsVersionMySpecialVersion08136BD6', {
      functionName: snsSqsC4810b27.ref,
    });

    if (eventBusLambda4Aa26499 == null) { throw new Error(`A combination of conditions caused 'eventBusLambda4Aa26499' to be undefined. Fixit.`); }
    if (onSucces8F9c946b == null) { throw new Error(`A combination of conditions caused 'onSucces8F9c946b' to be undefined. Fixit.`); }
    const eventBusLambdaEventInvokeConfig52Cf8b9b = new lambda.CfnEventInvokeConfig(this, 'EventBusLambdaEventInvokeConfig52CF8B9B', {
      destinationConfig: {
        onFailure: {
          destination: [
            'arn:',
            this.partition,
            ':events:',
            this.region,
            ':',
            this.account,
            ':event-bus/default',
          ].join(''),
        },
        onSuccess: {
          destination: onSucces8F9c946b.attrArn,
        },
      },
      functionName: eventBusLambda4Aa26499.ref,
      qualifier: '$LATEST',
    });

    if (snsSqsC4810b27 == null) { throw new Error(`A combination of conditions caused 'snsSqsC4810b27' to be undefined. Fixit.`); }
    if (snsSqsVersionMySpecialVersion08136Bd6 == null) { throw new Error(`A combination of conditions caused 'snsSqsVersionMySpecialVersion08136Bd6' to be undefined. Fixit.`); }
    const mySpecialAliasC0f04207 = new lambda.CfnAlias(this, 'MySpecialAliasC0F04207', {
      functionName: snsSqsC4810b27.ref,
      functionVersion: snsSqsVersionMySpecialVersion08136Bd6.attrVersion,
      name: 'MySpecialAlias',
    });

    if (mySpecialAliasC0f04207 == null) { throw new Error(`A combination of conditions caused 'mySpecialAliasC0f04207' to be undefined. Fixit.`); }
    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (snsSqsC4810b27 == null) { throw new Error(`A combination of conditions caused 'snsSqsC4810b27' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const mySpecialAliasEventInvokeConfig05Ff4e2f = new lambda.CfnEventInvokeConfig(this, 'MySpecialAliasEventInvokeConfig05FF4E2F', {
      destinationConfig: {
        onFailure: {
          destination: topicBfc7af6e.ref,
        },
        onSuccess: {
          destination: queue4A7e3555.attrArn,
        },
      },
      functionName: snsSqsC4810b27.ref,
      maximumEventAgeInSeconds: 7200,
      maximumRetryAttempts: 0,
      qualifier: cdk.Fn.select(7, cdk.Fn.split(':', mySpecialAliasC0f04207.ref)),
    });

    // Outputs
    this.exportsOutputRefSnsSqsC4810b27404a5aff = snsSqsC4810b27.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefSnsSqsC4810B27404A5AFF', {
      key: 'ExportsOutputRefSnsSqsC4810B27404A5AFF',
      exportName: 'aws-cdk-lambda-destinations:ExportsOutputRefSnsSqsC4810B27404A5AFF',
      value: this.exportsOutputRefSnsSqsC4810b27404a5aff!.toString(),
    });
    this.exportsOutputRefQueue4A7e3555425e8bd3 = queue4A7e3555.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefQueue4A7E3555425E8BD3', {
      key: 'ExportsOutputRefQueue4A7E3555425E8BD3',
      exportName: 'aws-cdk-lambda-destinations:ExportsOutputRefQueue4A7E3555425E8BD3',
      value: this.exportsOutputRefQueue4A7e3555425e8bd3!.toString(),
    });
  }
}

