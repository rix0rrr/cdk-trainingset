import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-log-group-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-log-group-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-log-group-integProps = {}) {
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
    const logGroupLambdaAuditF8f47f46 = new logs.CfnLogGroup(this, 'LogGroupLambdaAuditF8F47F46', {
      retentionInDays: 731,
    });
    logGroupLambdaAuditF8f47f46.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const auditbucketidE6660ebd = new s3.CfnBucket(this, 'auditbucketidE6660EBD', {
    });
    auditbucketidE6660ebd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (logGroupLambdaAuditF8f47f46 == null) { throw new Error(`A combination of conditions caused 'logGroupLambdaAuditF8f47f46' to be undefined. Fixit.`); }
    if (auditbucketidE6660ebd == null) { throw new Error(`A combination of conditions caused 'auditbucketidE6660ebd' to be undefined. Fixit.`); }
    const logGroupLambdaAc756c5b = new logs.CfnLogGroup(this, 'LogGroupLambdaAC756C5B', {
      dataProtectionPolicy: {
        name: 'policy-name',
        description: 'policy description',
        version: '2021-06-01',
        statement: [
          {
            sid: 'audit-statement-cdk',
            dataIdentifier: [
              [
                'arn:',
                this.partition,
                ':dataprotection::aws:data-identifier/DriversLicense-US',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':dataprotection::aws:data-identifier/EmailAddress',
              ].join(''),
            ],
            operation: {
              audit: {
                findingsDestination: {
                  cloudWatchLogs: {
                    logGroup: logGroupLambdaAuditF8f47f46.ref,
                  },
                  s3: {
                    bucket: auditbucketidE6660ebd.ref,
                  },
                },
              },
            },
          },
          {
            sid: 'redact-statement-cdk',
            dataIdentifier: [
              [
                'arn:',
                this.partition,
                ':dataprotection::aws:data-identifier/DriversLicense-US',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':dataprotection::aws:data-identifier/EmailAddress',
              ].join(''),
            ],
            operation: {
              deidentify: {
                maskConfig: {
                },
              },
            },
          },
        ],
      },
      retentionInDays: 731,
    });
    logGroupLambdaAc756c5b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}

