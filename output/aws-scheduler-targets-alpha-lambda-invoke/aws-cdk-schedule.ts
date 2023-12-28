import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface aws-cdk-scheduleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-schedule extends cdk.Stack {
  public readonly exportsOutputFnGetAttMyLambdaCce802fbArn91287F74;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-scheduleProps = {}) {
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
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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

    const schedulerRoleForTarget1441a743A31888 = new iam.CfnRole(this, 'SchedulerRoleForTarget1441a743A31888', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Condition: {
              StringEquals: {
                'aws:SourceAccount': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'scheduler.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaServiceRoleDefaultPolicy5Bbc6f68 = new iam.CfnPolicy(this, 'MyLambdaServiceRoleDefaultPolicy5BBC6F68', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:TagResource',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambdaServiceRoleDefaultPolicy5BBC6F68',
      roles: [
        myLambdaServiceRole4539Ecb6.ref,
      ],
    });

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '7f6fc8a416807b6be0ca2397479cd45d43dfe989a95bc81708f269e993296d34.zip',
      },
      environment: {
        variables: {
          'FUNC_ARN': [
            'arn:',
            this.partition,
            ':lambda:',
            this.region,
            ':',
            this.account,
            ':function:TestSchedulerLambdaInvokeTarget',
          ].join(''),
        },
      },
      functionName: 'TestSchedulerLambdaInvokeTarget',
      handler: 'index.handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'nodejs18.x',
      timeout: 30,
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(1 minute)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: myLambdaCce802fb.attrArn,
        input: '\"test\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              myLambdaCce802fb.attrArn,
              [
                myLambdaCce802fb.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });

    // Outputs
    this.exportsOutputFnGetAttMyLambdaCce802fbArn91287F74 = myLambdaCce802fb.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttMyLambdaCCE802FBArn91287F74', {
      key: 'ExportsOutputFnGetAttMyLambdaCCE802FBArn91287F74',
      exportName: 'aws-cdk-schedule:ExportsOutputFnGetAttMyLambdaCCE802FBArn91287F74',
      value: this.exportsOutputFnGetAttMyLambdaCce802fbArn91287F74!.toString(),
    });
  }
}

