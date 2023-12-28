import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface AwsCdkSchedulerScheduleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSchedulerSchedule extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSchedulerScheduleProps = {}) {
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
    const allSchedulerErrorsAlarmA3246f8c = new cloudwatch.CfnAlarm(this, 'AllSchedulerErrorsAlarmA3246F8C', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      metricName: 'TargetErrorCount',
      namespace: 'AWS/Scheduler',
      period: 300,
      statistic: 'Sum',
      threshold: 1,
    });

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

    const namedGroupA3abc879 = new scheduler.CfnScheduleGroup(this, 'NamedGroupA3ABC879', {
      name: 'TestGroup',
    });
    namedGroupA3abc879.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const role1Abcc5f0 = new iam.CfnRole(this, 'Role1ABCC5F0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'scheduler.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const scheduleKey7E6b3a92 = new kms.CfnKey(this, 'ScheduleKey7E6B3A92', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    scheduleKey7E6b3a92.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const unnamedGroupBe3e48ee = new scheduler.CfnScheduleGroup(this, 'UnnamedGroupBE3E48EE', {
      name: 'awscdkschedulerschedule-UnnamedGroup-97DBE50D',
    });
    unnamedGroupBe3e48ee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (scheduleKey7E6b3a92 == null) { throw new Error(`A combination of conditions caused 'scheduleKey7E6b3a92' to be undefined. Fixit.`); }
    const roleDefaultPolicy5Ffb7dab = new iam.CfnPolicy(this, 'RoleDefaultPolicy5FFB7DAB', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'kms:Decrypt',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: scheduleKey7E6b3a92.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'RoleDefaultPolicy5FFB7DAB',
      roles: [
        role1Abcc5f0.ref,
      ],
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    if (scheduleKey7E6b3a92 == null) { throw new Error(`A combination of conditions caused 'scheduleKey7E6b3a92' to be undefined. Fixit.`); }
    const customerKmsSchedule12B1fefe = new scheduler.CfnSchedule(this, 'CustomerKmsSchedule12B1FEFE', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      kmsKeyArn: scheduleKey7E6b3a92.attrArn,
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const defaultSchedule597B0b2c = new scheduler.CfnSchedule(this, 'DefaultSchedule597B0B2C', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const disabledScheduleA1df7f0f = new scheduler.CfnSchedule(this, 'DisabledScheduleA1DF7F0F', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'DISABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const namedGroupScheduleD7eefebc = new scheduler.CfnSchedule(this, 'NamedGroupScheduleD7EEFEBC', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      groupName: 'TestGroup',
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const scheduleWithTimeFrameC1c8bdcc = new scheduler.CfnSchedule(this, 'ScheduleWithTimeFrameC1C8BDCC', {
      endDate: '2025-10-01T00:00:00.000Z',
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      startDate: '2024-04-15T06:30:00.000Z',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const targetOverrideScheduleFf8cb184 = new scheduler.CfnSchedule(this, 'TargetOverrideScheduleFF8CB184', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Changed Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 360,
          maximumRetryAttempts: 5,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const unnamedGroupSchedule19260E9b = new scheduler.CfnSchedule(this, 'UnnamedGroupSchedule19260E9B', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      groupName: 'awscdkschedulerschedule-UnnamedGroup-97DBE50D',
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (role1Abcc5f0 == null) { throw new Error(`A combination of conditions caused 'role1Abcc5f0' to be undefined. Fixit.`); }
    const useFlexibleTimeWindowBf55d3ed = new scheduler.CfnSchedule(this, 'UseFlexibleTimeWindowBF55D3ED', {
      flexibleTimeWindow: {
        maximumWindowInMinutes: 10,
        mode: 'FLEXIBLE',
      },
      scheduleExpression: 'rate(12 hours)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: function76856677.attrArn,
        input: '\"Input Text\"',
        retryPolicy: {
          maximumEventAgeInSeconds: 180,
          maximumRetryAttempts: 3,
        },
        roleArn: role1Abcc5f0.attrArn,
      },
    });
  }
}

