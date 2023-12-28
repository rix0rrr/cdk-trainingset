import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as ssmincidents from 'aws-cdk-lib/aws-ssmincidents';

export interface SsmincidentalarmactionintegrationteststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Ssmincidentalarmactionintegrationteststack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: SsmincidentalarmactionintegrationteststackProps = {}) {
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
    const key961B73fd = new kms.CfnKey(this, 'Key961B73FD', {
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
      pendingWindowInDays: 7,
    });
    key961B73fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (key961B73fd == null) { throw new Error(`A combination of conditions caused 'key961B73fd' to be undefined. Fixit.`); }
    const replicationSet = new ssmincidents.CfnReplicationSet(this, 'ReplicationSet', {
      regions: [
        {
          regionConfiguration: {
            sseKmsKeyId: key961B73fd.attrArn,
          },
          regionName: this.region,
        },
      ],
      deletionProtected: false,
    });

    if (replicationSet == null) { throw new Error(`A combination of conditions caused 'replicationSet' to be undefined. Fixit.`); }
    const responsePlan = new ssmincidents.CfnResponsePlan(this, 'ResponsePlan', {
      incidentTemplate: {
        impact: 1,
        title: 'Incident Title',
      },
      name: 'test-response-plan',
    });
    responsePlan.addDependency(replicationSet);

    if (responsePlan == null) { throw new Error(`A combination of conditions caused 'responsePlan' to be undefined. Fixit.`); }
    const alarm1F9009d71 = new cloudwatch.CfnAlarm(this, 'Alarm1F9009D71', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 3,
      alarmActions: [
        [
          'arn:',
          this.partition,
          ':ssm-incidents::',
          this.account,
          ':response-plan/test-response-plan',
        ].join(''),
      ],
      metrics: [
        {
          id: 'm1',
          label: 'Metric [AVG: ${AVG}]',
          metricStat: {
            metric: {
              metricName: 'Metric',
              namespace: 'CDK/Test',
            },
            period: 300,
            stat: 'Average',
          },
          returnData: true,
        },
      ],
      threshold: 100,
    });
    alarm1F9009d71.addDependency(responsePlan);
  }
}

