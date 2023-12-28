import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-cdk-logs-insights-querydefinition-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-logs-insights-querydefinition-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-logs-insights-querydefinition-integProps = {}) {
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
    logGroupF5b46931.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const queryDefinition4190Bc36 = new logs.CfnQueryDefinition(this, 'QueryDefinition4190BC36', {
      name: 'QueryDefinition',
      queryString: 'fields @timestamp, @message\n| parse @message \"[*] *\" as loggingType, loggingMessage\n| filter loggingType = \"ERROR\"\n| sort @timestamp desc\n| limit 20\n| display loggingMessage',
      logGroupNames: [
        logGroupF5b46931.ref,
      ],
    });

    if (logGroupF5b46931 == null) { throw new Error(`A combination of conditions caused 'logGroupF5b46931' to be undefined. Fixit.`); }
    const queryDefinitionWithMultipleStatements58A3ef74 = new logs.CfnQueryDefinition(this, 'QueryDefinitionWithMultipleStatements58A3EF74', {
      name: 'QueryDefinitionWithMultipleStatements',
      queryString: 'fields @timestamp, @message\n| parse @message \"[*] *\" as loggingType, loggingMessage\n| parse @message \"<*>: *\" as differentLoggingType, differentLoggingMessage\n| filter loggingType = \"ERROR\"\n| filter loggingMessage = \"A very strange error occurred!\"\n| sort @timestamp desc\n| limit 20\n| display loggingMessage',
      logGroupNames: [
        logGroupF5b46931.ref,
      ],
    });
  }
}

