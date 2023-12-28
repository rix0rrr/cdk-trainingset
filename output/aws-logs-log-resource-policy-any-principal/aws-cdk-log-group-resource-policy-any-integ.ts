import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-cdk-log-group-resource-policy-any-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-log-group-resource-policy-any-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-log-group-resource-policy-any-integProps = {}) {
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
    const logGroupF5b46931 = new logs.CfnLogGroup(this, 'LogGroupF5B46931', {
      retentionInDays: 731,
    });
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const logGroupPolicyResourcePolicy6Fa18555 = new logs.CfnResourcePolicy(this, 'LogGroupPolicyResourcePolicy6FA18555', {
      policyDocument: [
        '{\"Statement\":[{\"Action\":\"logs:PutLogEvents\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"*\"},\"Resource\":\"',
        logGroupF5b46931.attrArn,
        '\"}],\"Version\":\"2012-10-17\"}',
      ].join(''),
      policyName: 'awscdkloggroupresourcepolicyanyintegLogGroupPolicy69400813',
    });
  }
}

