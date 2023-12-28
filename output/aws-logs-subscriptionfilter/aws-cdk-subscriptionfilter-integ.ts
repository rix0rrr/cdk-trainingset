import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-cdk-subscriptionfilter-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-subscriptionfilter-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-subscriptionfilter-integProps = {}) {
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
    const functionServiceRole675Bb04a = new iam.CfnRole(this, 'FunctionServiceRole675BB04A', {
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

    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (functionServiceRole675Bb04a == null) { throw new Error(`A combination of conditions caused 'functionServiceRole675Bb04a' to be undefined. Fixit.`); }
    const function76856677 = new lambda.CfnFunction(this, 'Function76856677', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: functionServiceRole675Bb04a.attrArn,
      runtime: 'nodejs18.x',
    });
    function76856677.addDependency(functionServiceRole675Bb04a);

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const logGroupSubscriptionCanInvokeLambdaE05ac235 = new lambda.CfnPermission(this, 'LogGroupSubscriptionCanInvokeLambdaE05AC235', {
      action: 'lambda:InvokeFunction',
      functionName: function76856677.attrArn,
      principal: 'logs.amazonaws.com',
      sourceArn: logGroupF5b46931.attrArn,
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    if (logGroupSubscriptionCanInvokeLambdaE05ac235 == null) { throw new Error(`A combination of conditions caused 'logGroupSubscriptionCanInvokeLambdaE05ac235' to be undefined. Fixit.`); }
    const logGroupSubscriptionE3573e29 = new logs.CfnSubscriptionFilter(this, 'LogGroupSubscriptionE3573E29', {
      destinationArn: function76856677.attrArn,
      filterName: 'CustomSubscriptionFilterName',
      filterPattern: '\"ERROR\" \"MainThread\"',
      logGroupName: logGroupF5b46931.ref,
    });
    logGroupSubscriptionE3573e29.addDependency(logGroupSubscriptionCanInvokeLambdaE05ac235);
  }
}

