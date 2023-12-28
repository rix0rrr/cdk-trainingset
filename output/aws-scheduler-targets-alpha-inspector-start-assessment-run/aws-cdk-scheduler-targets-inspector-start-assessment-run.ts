import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as inspector from 'aws-cdk-lib/aws-inspector';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';

export interface aws-cdk-scheduler-targets-inspector-start-assessment-runProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-scheduler-targets-inspector-start-assessment-run extends cdk.Stack {
  public readonly exportsOutputFnGetAttMyAssessmentTemplateArn495Ba409;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-scheduler-targets-inspector-start-assessment-runProps = {}) {
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
    const myAssessmentTarget = new inspector.CfnAssessmentTarget(this, 'MyAssessmentTarget', {
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

    if (myAssessmentTarget == null) { throw new Error(`A combination of conditions caused 'myAssessmentTarget' to be undefined. Fixit.`); }
    const myAssessmentTemplate = new inspector.CfnAssessmentTemplate(this, 'MyAssessmentTemplate', {
      assessmentTargetArn: myAssessmentTarget.attrArn,
      durationInSeconds: 3600,
      rulesPackageArns: [
        'arn:aws:inspector:us-east-1:316112463485:rulespackage/0-gEjTy7T7',
      ],
    });

    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedulerRoleForTarget1441a7DefaultPolicy885B6bfd = new iam.CfnPolicy(this, 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD', {
      policyDocument: {
        Statement: [
          {
            Action: 'inspector:StartAssessmentRun',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SchedulerRoleForTarget1441a7DefaultPolicy885B6BFD',
      roles: [
        schedulerRoleForTarget1441a743A31888.ref,
      ],
    });

    if (myAssessmentTemplate == null) { throw new Error(`A combination of conditions caused 'myAssessmentTemplate' to be undefined. Fixit.`); }
    if (schedulerRoleForTarget1441a743A31888 == null) { throw new Error(`A combination of conditions caused 'schedulerRoleForTarget1441a743A31888' to be undefined. Fixit.`); }
    const schedule83A77fd1 = new scheduler.CfnSchedule(this, 'Schedule83A77FD1', {
      flexibleTimeWindow: {
        mode: 'OFF',
      },
      scheduleExpression: 'rate(10 minutes)',
      scheduleExpressionTimezone: 'Etc/UTC',
      state: 'ENABLED',
      target: {
        arn: myAssessmentTemplate.attrArn,
        retryPolicy: {
          maximumEventAgeInSeconds: 86400,
          maximumRetryAttempts: 185,
        },
        roleArn: schedulerRoleForTarget1441a743A31888.attrArn,
      },
    });

    // Outputs
    this.exportsOutputFnGetAttMyAssessmentTemplateArn495Ba409 = myAssessmentTemplate.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttMyAssessmentTemplateArn495BA409', {
      key: 'ExportsOutputFnGetAttMyAssessmentTemplateArn495BA409',
      exportName: 'aws-cdk-scheduler-targets-inspector-start-assessment-run:ExportsOutputFnGetAttMyAssessmentTemplateArn495BA409',
      value: this.exportsOutputFnGetAttMyAssessmentTemplateArn495Ba409!.toString(),
    });
  }
}

