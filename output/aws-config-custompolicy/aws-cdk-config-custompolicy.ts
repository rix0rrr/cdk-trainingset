import * as cdk from 'aws-cdk-lib';
import * as config from 'aws-cdk-lib/aws-config';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkConfigCustompolicyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkConfigCustompolicy extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkConfigCustompolicyProps = {}) {
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
    const custom8166710A = new config.CfnConfigRule(this, 'Custom8166710A', {
      source: {
        customPolicyDetails: {
          enableDebugLogDelivery: true,
          policyRuntime: 'guard-2.x.x',
          policyText: '\n# This rule checks if point in time recovery (PITR) is enabled on active Amazon DynamoDB tables\nlet status = [\'ACTIVE\']\n\nrule tableisactive when\n    resourceType == \"AWS::DynamoDB::Table\" {\n    configuration.tableStatus == %status\n}\n\nrule checkcompliance when\n    resourceType == \"AWS::DynamoDB::Table\"\n    tableisactive {\n        let pitr = supplementaryConfiguration.ContinuousBackupsDescription.pointInTimeRecoveryDescription.pointInTimeRecoveryStatus\n        %pitr == \"ENABLED\"\n}\n',
        },
        owner: 'CUSTOM_POLICY',
        sourceDetails: [
          {
            eventSource: 'aws.config',
            messageType: 'ConfigurationItemChangeNotification',
          },
          {
            eventSource: 'aws.config',
            messageType: 'OversizedConfigurationItemChangeNotification',
          },
        ],
      },
      scope: {
        complianceResourceTypes: [
          'AWS::DynamoDB::Table',
        ],
      },
    });

    const sampleuser2D3a0b43 = new iam.CfnUser(this, 'sampleuser2D3A0B43', {
    });

    if (sampleuser2D3a0b43 == null) { throw new Error(`A combination of conditions caused 'sampleuser2D3a0b43' to be undefined. Fixit.`); }
    const customlazy5E6c8ae4 = new config.CfnConfigRule(this, 'Customlazy5E6C8AE4', {
      source: {
        customPolicyDetails: {
          enableDebugLogDelivery: true,
          policyRuntime: 'guard-2.x.x',
          policyText: 'lazy-create-test',
        },
        owner: 'CUSTOM_POLICY',
        sourceDetails: [
          {
            eventSource: 'aws.config',
            messageType: 'ConfigurationItemChangeNotification',
          },
          {
            eventSource: 'aws.config',
            messageType: 'OversizedConfigurationItemChangeNotification',
          },
        ],
      },
      scope: {
        complianceResourceId: sampleuser2D3a0b43.ref,
        complianceResourceTypes: [
          'AWS::IAM::User',
        ],
      },
    });
  }
}

