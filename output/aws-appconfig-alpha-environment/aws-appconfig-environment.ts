import * as cdk from 'aws-cdk-lib';
import * as appconfig from 'aws-cdk-lib/aws-appconfig';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-appconfig-environmentProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-appconfig-environment extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-appconfig-environmentProps = {}) {
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
    const myAlarm696658B6 = new cloudwatch.CfnAlarm(this, 'MyAlarm696658B6', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 5,
      metricName: 'dummy name',
      namespace: 'aws',
      period: 300,
      statistic: 'Average',
      threshold: 10,
    });

    const myApplicationForEnv1F597ed9 = new appconfig.CfnApplication(this, 'MyApplicationForEnv1F597ED9', {
      name: 'AppForEnvTest',
    });

    const myEnvironmentRoleCompositeAlarm8C2a0542 = new iam.CfnRole(this, 'MyEnvironmentRoleCompositeAlarm8C2A0542', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'appconfig.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: 'cloudwatch:DescribeAlarms',
                Effect: 'Allow',
                Resource: [
                  'arn:',
                  this.partition,
                  ':cloudwatch:',
                  this.region,
                  ':',
                  this.account,
                  ':alarm:*',
                ].join(''),
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'AllowAppConfigMonitorAlarmPolicy',
        },
      ],
    });

    const myRoleF48ffe04 = new iam.CfnRole(this, 'MyRoleF48FFE04', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'appconfig.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myAlarm696658B6 == null) { throw new Error(`A combination of conditions caused 'myAlarm696658B6' to be undefined. Fixit.`); }
    const myCompositeAlarm0F045229 = new cloudwatch.CfnCompositeAlarm(this, 'MyCompositeAlarm0F045229', {
      alarmName: 'awsappconfigenvironmentMyCompositeAlarm730A7A48',
      alarmRule: [
        'ALARM(\"',
        myAlarm696658B6.attrArn,
        '\")',
      ].join(''),
    });

    if (myAlarm696658B6 == null) { throw new Error(`A combination of conditions caused 'myAlarm696658B6' to be undefined. Fixit.`); }
    const myEnvironmentRole01C8c013f = new iam.CfnRole(this, 'MyEnvironmentRole01C8C013F', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'appconfig.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: 'cloudwatch:DescribeAlarms',
                Effect: 'Allow',
                Resource: myAlarm696658B6.attrArn,
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'AllowAppConfigMonitorAlarmPolicy',
        },
      ],
    });

    if (myAlarm696658B6 == null) { throw new Error(`A combination of conditions caused 'myAlarm696658B6' to be undefined. Fixit.`); }
    if (myApplicationForEnv1F597ed9 == null) { throw new Error(`A combination of conditions caused 'myApplicationForEnv1F597ed9' to be undefined. Fixit.`); }
    if (myCompositeAlarm0F045229 == null) { throw new Error(`A combination of conditions caused 'myCompositeAlarm0F045229' to be undefined. Fixit.`); }
    if (myEnvironmentRole01C8c013f == null) { throw new Error(`A combination of conditions caused 'myEnvironmentRole01C8c013f' to be undefined. Fixit.`); }
    if (myEnvironmentRoleCompositeAlarm8C2a0542 == null) { throw new Error(`A combination of conditions caused 'myEnvironmentRoleCompositeAlarm8C2a0542' to be undefined. Fixit.`); }
    if (myRoleF48ffe04 == null) { throw new Error(`A combination of conditions caused 'myRoleF48ffe04' to be undefined. Fixit.`); }
    const myEnvironment465E4dea = new appconfig.CfnEnvironment(this, 'MyEnvironment465E4DEA', {
      applicationId: myApplicationForEnv1F597ed9.ref,
      description: 'This is the environment for integ testing',
      monitors: [
        {
          alarmArn: myAlarm696658B6.attrArn,
          alarmRoleArn: myEnvironmentRole01C8c013f.attrArn,
        },
        {
          alarmArn: myAlarm696658B6.attrArn,
          alarmRoleArn: myRoleF48ffe04.attrArn,
        },
        {
          alarmArn: myCompositeAlarm0F045229.attrArn,
          alarmRoleArn: myEnvironmentRoleCompositeAlarm8C2a0542.attrArn,
        },
      ],
      name: 'awsappconfigenvironment-MyEnvironment-C8813182',
    });
  }
}

