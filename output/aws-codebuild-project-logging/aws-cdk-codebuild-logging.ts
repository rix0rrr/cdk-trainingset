import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codebuild-loggingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codebuild-logging extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codebuild-loggingProps = {}) {
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
    const loggingBucket1E5a6f3b = new s3.CfnBucket(this, 'LoggingBucket1E5A6F3B', {
    });
    loggingBucket1E5a6f3b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const logingGroupE599b53b = new logs.CfnLogGroup(this, 'LogingGroupE599B53B', {
      retentionInDays: 731,
    });
    logingGroupE599b53b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const projectRole4Ccb274e = new iam.CfnRole(this, 'ProjectRole4CCB274E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codebuild.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (loggingBucket1E5a6f3b == null) { throw new Error(`A combination of conditions caused 'loggingBucket1E5a6f3b' to be undefined. Fixit.`); }
    if (logingGroupE599b53b == null) { throw new Error(`A combination of conditions caused 'logingGroupE599b53b' to be undefined. Fixit.`); }
    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectC78d97ad = new codebuild.CfnProject(this, 'ProjectC78D97AD', {
      artifacts: {
        type: 'CODEPIPELINE',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: projectRole4Ccb274e.attrArn,
      source: {
        type: 'CODEPIPELINE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
      logsConfig: {
        cloudWatchLogs: {
          groupName: logingGroupE599b53b.ref,
          status: 'ENABLED',
        },
        s3Logs: {
          location: loggingBucket1E5a6f3b.ref,
          status: 'ENABLED',
        },
      },
    });

    if (loggingBucket1E5a6f3b == null) { throw new Error(`A combination of conditions caused 'loggingBucket1E5a6f3b' to be undefined. Fixit.`); }
    if (logingGroupE599b53b == null) { throw new Error(`A combination of conditions caused 'logingGroupE599b53b' to be undefined. Fixit.`); }
    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectRoleDefaultPolicy7F29461b = new iam.CfnPolicy(this, 'ProjectRoleDefaultPolicy7F29461B', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              loggingBucket1E5a6f3b.attrArn,
              [
                loggingBucket1E5a6f3b.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: logingGroupE599b53b.attrArn,
          },
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
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProjectRoleDefaultPolicy7F29461B',
      roles: [
        projectRole4Ccb274e.ref,
      ],
    });
  }
}

