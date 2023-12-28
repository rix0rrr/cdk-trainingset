import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface LambdaEventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaEvents extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaEventsProps = {}) {
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
    const myFuncServiceRole54065130 = new iam.CfnRole(this, 'MyFuncServiceRole54065130', {
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

    if (myFuncServiceRole54065130 == null) { throw new Error(`A combination of conditions caused 'myFuncServiceRole54065130' to be undefined. Fixit.`); }
    const myFunc8A243a2c = new lambda.CfnFunction(this, 'MyFunc8A243A2C', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      role: myFuncServiceRole54065130.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc8A243a2c.addDependency(myFuncServiceRole54065130);

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    const timer2B6f162e9 = new events.CfnRule(this, 'Timer2B6F162E9', {
      scheduleExpression: 'rate(2 minutes)',
      state: 'ENABLED',
      targets: [
        {
          arn: myFunc8A243a2c.attrArn,
          id: 'Target0',
        },
      ],
    });

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    const timer30894E3bb = new events.CfnRule(this, 'Timer30894E3BB', {
      scheduleExpression: 'rate(2 minutes)',
      state: 'ENABLED',
      targets: [
        {
          arn: myFunc8A243a2c.attrArn,
          deadLetterConfig: {
            arn: queue4A7e3555.attrArn,
          },
          id: 'Target0',
          retryPolicy: {
            maximumEventAgeInSeconds: 7200,
            maximumRetryAttempts: 0,
          },
        },
      ],
    });

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    const timerBf6f831f = new events.CfnRule(this, 'TimerBF6F831F', {
      scheduleExpression: 'rate(1 minute)',
      state: 'ENABLED',
      targets: [
        {
          arn: myFunc8A243a2c.attrArn,
          id: 'Target0',
        },
      ],
    });

    if (queue4A7e3555 == null) { throw new Error(`A combination of conditions caused 'queue4A7e3555' to be undefined. Fixit.`); }
    if (timer30894E3bb == null) { throw new Error(`A combination of conditions caused 'timer30894E3bb' to be undefined. Fixit.`); }
    const queuePolicy25439813 = new sqs.CfnQueuePolicy(this, 'QueuePolicy25439813', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': timer30894E3bb.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: queue4A7e3555.attrArn,
            Sid: 'AllowEventRulelambdaeventsTimer3107B9373',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        queue4A7e3555.ref,
      ],
    });

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    if (timer2B6f162e9 == null) { throw new Error(`A combination of conditions caused 'timer2B6f162e9' to be undefined. Fixit.`); }
    const timer2AllowEventRulelambdaeventsMyFunc910E580fccd9cdce = new lambda.CfnPermission(this, 'Timer2AllowEventRulelambdaeventsMyFunc910E580FCCD9CDCE', {
      action: 'lambda:InvokeFunction',
      functionName: myFunc8A243a2c.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: timer2B6f162e9.attrArn,
    });

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    if (timer30894E3bb == null) { throw new Error(`A combination of conditions caused 'timer30894E3bb' to be undefined. Fixit.`); }
    const timer3AllowEventRulelambdaeventsMyFunc910E580f79317f73 = new lambda.CfnPermission(this, 'Timer3AllowEventRulelambdaeventsMyFunc910E580F79317F73', {
      action: 'lambda:InvokeFunction',
      functionName: myFunc8A243a2c.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: timer30894E3bb.attrArn,
    });

    if (myFunc8A243a2c == null) { throw new Error(`A combination of conditions caused 'myFunc8A243a2c' to be undefined. Fixit.`); }
    if (timerBf6f831f == null) { throw new Error(`A combination of conditions caused 'timerBf6f831f' to be undefined. Fixit.`); }
    const timerAllowEventRulelambdaeventsMyFunc910E580f793d7bbb = new lambda.CfnPermission(this, 'TimerAllowEventRulelambdaeventsMyFunc910E580F793D7BBB', {
      action: 'lambda:InvokeFunction',
      functionName: myFunc8A243a2c.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: timerBf6f831f.attrArn,
    });
  }
}

