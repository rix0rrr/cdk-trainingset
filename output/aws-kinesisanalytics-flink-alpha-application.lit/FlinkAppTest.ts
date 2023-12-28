import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kinesisanalyticsv2 from 'aws-cdk-lib/aws-kinesisanalyticsv2';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface FlinkapptestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Flinkapptest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: FlinkapptestProps = {}) {
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
    const appLogGroupC72eec8c = new logs.CfnLogGroup(this, 'AppLogGroupC72EEC8C', {
      retentionInDays: 731,
    });
    appLogGroupC72eec8c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const appRole1Af9b530 = new iam.CfnRole(this, 'AppRole1AF9B530', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'kinesisanalytics.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (appLogGroupC72eec8c == null) { throw new Error(`A combination of conditions caused 'appLogGroupC72eec8c' to be undefined. Fixit.`); }
    const appLogStream3Caf66a7 = new logs.CfnLogStream(this, 'AppLogStream3CAF66A7', {
      logGroupName: appLogGroupC72eec8c.ref,
    });
    appLogStream3Caf66a7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (appLogGroupC72eec8c == null) { throw new Error(`A combination of conditions caused 'appLogGroupC72eec8c' to be undefined. Fixit.`); }
    if (appLogStream3Caf66a7 == null) { throw new Error(`A combination of conditions caused 'appLogStream3Caf66a7' to be undefined. Fixit.`); }
    if (appRole1Af9b530 == null) { throw new Error(`A combination of conditions caused 'appRole1Af9b530' to be undefined. Fixit.`); }
    const appRoleDefaultPolicy9Cadbaa1 = new iam.CfnPolicy(this, 'AppRoleDefaultPolicy9CADBAA1', {
      policyDocument: {
        Statement: [
          {
            Action: 'cloudwatch:PutMetricData',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
          {
            Action: 'logs:DescribeLogGroups',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:*',
            ].join(''),
          },
          {
            Action: 'logs:DescribeLogStreams',
            Effect: 'Allow',
            Resource: appLogGroupC72eec8c.attrArn,
          },
          {
            Action: 'logs:PutLogEvents',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:',
              appLogGroupC72eec8c.ref,
              ':log-stream:',
              appLogStream3Caf66a7.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AppRoleDefaultPolicy9CADBAA1',
      roles: [
        appRole1Af9b530.ref,
      ],
    });

    if (appRole1Af9b530 == null) { throw new Error(`A combination of conditions caused 'appRole1Af9b530' to be undefined. Fixit.`); }
    if (appRoleDefaultPolicy9Cadbaa1 == null) { throw new Error(`A combination of conditions caused 'appRoleDefaultPolicy9Cadbaa1' to be undefined. Fixit.`); }
    const appF1b96344 = new kinesisanalyticsv2.CfnApplication(this, 'AppF1B96344', {
      runtimeEnvironment: 'FLINK-1_11',
      serviceExecutionRole: appRole1Af9b530.attrArn,
      applicationConfiguration: {
        applicationCodeConfiguration: {
          codeContent: {
            s3ContentLocation: {
              bucketArn: [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
              fileKey: '8be9e0b5f53d41e9a3b1d51c9572c65f24f8170a7188d0ed57fb7d571de4d577.zip',
            },
          },
          codeContentType: 'ZIPFILE',
        },
        applicationSnapshotConfiguration: {
          snapshotsEnabled: true,
        },
      },
    });
    appF1b96344.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    appF1b96344.addDependency(appRoleDefaultPolicy9Cadbaa1);
    appF1b96344.addDependency(appRole1Af9b530);

    if (appF1b96344 == null) { throw new Error(`A combination of conditions caused 'appF1b96344' to be undefined. Fixit.`); }
    const alarm7103F465 = new cloudwatch.CfnAlarm(this, 'Alarm7103F465', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'Application',
          value: appF1b96344.ref,
        },
      ],
      metricName: 'fullRestarts',
      namespace: 'AWS/KinesisAnalytics',
      period: 300,
      statistic: 'Sum',
      threshold: 3,
    });

    if (appF1b96344 == null) { throw new Error(`A combination of conditions caused 'appF1b96344' to be undefined. Fixit.`); }
    if (appLogGroupC72eec8c == null) { throw new Error(`A combination of conditions caused 'appLogGroupC72eec8c' to be undefined. Fixit.`); }
    if (appLogStream3Caf66a7 == null) { throw new Error(`A combination of conditions caused 'appLogStream3Caf66a7' to be undefined. Fixit.`); }
    const appLoggingOption75Be995e = new kinesisanalyticsv2.CfnApplicationCloudWatchLoggingOption(this, 'AppLoggingOption75BE995E', {
      applicationName: appF1b96344.ref,
      cloudWatchLoggingOption: {
        logStreamArn: [
          'arn:',
          this.partition,
          ':logs:',
          this.region,
          ':',
          this.account,
          ':log-group:',
          appLogGroupC72eec8c.ref,
          ':log-stream:',
          appLogStream3Caf66a7.ref,
        ].join(''),
      },
    });
  }
}

