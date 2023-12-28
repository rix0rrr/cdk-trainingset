import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface AwsCdkSchedulerTargetsCodebuildStartBuildProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSchedulerTargetsCodebuildStartBuild extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSchedulerTargetsCodebuildStartBuildProps = {}) {
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
    const myParameter18Ba547d = new ssm.CfnParameter(this, 'MyParameter18BA547D', {
      name: 'MyParameter',
      type: 'String',
      value: '🌧️',
    });

    const schedulerRole59E73443 = new iam.CfnRole(this, 'SchedulerRole59E73443', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: [
                'codebuild.amazonaws.com',
                'scheduler.amazonaws.com',
              ],
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (schedulerRole59E73443 == null) { throw new Error(`A combination of conditions caused 'schedulerRole59E73443' to be undefined. Fixit.`); }
    const projectC78d97ad = new codebuild.CfnProject(this, 'ProjectC78D97AD', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:7.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: schedulerRole59E73443.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"aws ssm put-parameter --overwrite --name MyParameter --value 🌈\"\n      ]\n    }\n  }\n}',
        type: 'NO_SOURCE',
      },
    });

    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (schedulerRole59E73443 == null) { throw new Error(`A combination of conditions caused 'schedulerRole59E73443' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(1 minute)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: projectC78d97ad.attrArn,
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRole59E73443.attrArn,
      },
    });

    if (myParameter18Ba547d == null) { throw new Error(`A combination of conditions caused 'myParameter18Ba547d' to be undefined. Fixit.`); }
    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (schedulerRole59E73443 == null) { throw new Error(`A combination of conditions caused 'schedulerRole59E73443' to be undefined. Fixit.`); }
    const schedulerRoleDefaultPolicy66F774b8 = new iam.CfnPolicy(this, 'SchedulerRoleDefaultPolicy66F774B8', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                projectC78d97ad.ref,
                ':*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                projectC78d97ad.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              'codebuild:BatchPutCodeCoverages',
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:CreateReportGroup',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codebuild:',
              this.region,
              ':',
              this.account,
              ':report-group/',
              projectC78d97ad.ref,
              '-*',
            ].join(''),
          },
          {
            Action: 'codebuild:StartBuild',
            Effect: 'Allow',
            Resource: projectC78d97ad.attrArn,
          },
          {
            Action: 'ssm:PutParameter',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/',
              myParameter18Ba547d.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleDefaultPolicy66F774B8',
      roles: [
        schedulerRole59E73443.ref,
      ],
    });
  }
}

