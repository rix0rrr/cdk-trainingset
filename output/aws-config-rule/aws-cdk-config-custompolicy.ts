import * as cdk from 'aws-cdk-lib';
import * as config from 'aws-cdk-lib/aws-config';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

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
    const complianceTopic0229448B = new sns.CfnTopic(this, 'ComplianceTopic0229448B', {
    });

    const customFunctionServiceRoleD3f73b79 = new iam.CfnRole(this, 'CustomFunctionServiceRoleD3F73B79', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSConfigRulesExecutionRole',
        ].join(''),
      ],
    });

    const driftRole8A5fb833 = new iam.CfnRole(this, 'DriftRole8A5FB833', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'config.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/ReadOnlyAccess',
        ].join(''),
      ],
    });

    if (complianceTopic0229448B == null) { throw new Error(`A combination of conditions caused 'complianceTopic0229448B' to be undefined. Fixit.`); }
    const complianceTopicPolicyF8bc46f0 = new sns.CfnTopicPolicy(this, 'ComplianceTopicPolicyF8BC46F0', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: complianceTopic0229448B.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        complianceTopic0229448B.ref,
      ],
    });

    if (customFunctionServiceRoleD3f73b79 == null) { throw new Error(`A combination of conditions caused 'customFunctionServiceRoleD3f73b79' to be undefined. Fixit.`); }
    const customFunctionBadd59e7 = new lambda.CfnFunction(this, 'CustomFunctionBADD59E7', {
      code: {
        zipFile: 'exports.handler = (event) => console.log(event);',
      },
      handler: 'index.handler',
      role: customFunctionServiceRoleD3f73b79.attrArn,
      runtime: 'nodejs18.x',
    });
    customFunctionBadd59e7.addDependency(customFunctionServiceRoleD3f73b79);

    if (driftRole8A5fb833 == null) { throw new Error(`A combination of conditions caused 'driftRole8A5fb833' to be undefined. Fixit.`); }
    const drift34D3210f = new config.CfnConfigRule(this, 'Drift34D3210F', {
      inputParameters: {
        cloudformationRoleArn: driftRole8A5fb833.attrArn,
      },
      scope: {
        complianceResourceTypes: [
          'AWS::CloudFormation::Stack',
        ],
      },
      source: {
        owner: 'AWS',
        sourceIdentifier: 'CLOUDFORMATION_STACK_DRIFT_DETECTION_CHECK',
      },
    });

    if (customFunctionBadd59e7 == null) { throw new Error(`A combination of conditions caused 'customFunctionBadd59e7' to be undefined. Fixit.`); }
    const customFunctionCustomRulePermissionbM1jVaicvRo9sdCiAbsQcYrOlEsEtMwrrF9zqqRvd5Qed54a3f8 = new lambda.CfnPermission(this, 'CustomFunctionCustomRulePermissionbM1jVaicvRO9SDCiAbsQcYrOlESEtMwrrF9ZQQRvd5QED54A3F8', {
      action: 'lambda:InvokeFunction',
      functionName: customFunctionBadd59e7.attrArn,
      principal: 'config.amazonaws.com',
      sourceAccount: this.account,
    });

    if (complianceTopic0229448B == null) { throw new Error(`A combination of conditions caused 'complianceTopic0229448B' to be undefined. Fixit.`); }
    if (drift34D3210f == null) { throw new Error(`A combination of conditions caused 'drift34D3210f' to be undefined. Fixit.`); }
    const driftComplianceChange4C0f2b82 = new events.CfnRule(this, 'DriftComplianceChange4C0F2B82', {
      eventPattern: {
        source: [
          'aws.config',
        ],
        detail: {
          configRuleName: [
            drift34D3210f.ref,
          ],
        },
        'detail-type': [
          'Config Rules Compliance Change',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: complianceTopic0229448B.ref,
          id: 'Target0',
        },
      ],
    });

    if (customFunctionBadd59e7 == null) { throw new Error(`A combination of conditions caused 'customFunctionBadd59e7' to be undefined. Fixit.`); }
    if (customFunctionCustomRulePermissionbM1jVaicvRo9sdCiAbsQcYrOlEsEtMwrrF9zqqRvd5Qed54a3f8 == null) { throw new Error(`A combination of conditions caused 'customFunctionCustomRulePermissionbM1jVaicvRo9sdCiAbsQcYrOlEsEtMwrrF9zqqRvd5Qed54a3f8' to be undefined. Fixit.`); }
    if (customFunctionServiceRoleD3f73b79 == null) { throw new Error(`A combination of conditions caused 'customFunctionServiceRoleD3f73b79' to be undefined. Fixit.`); }
    const custom8166710A = new config.CfnConfigRule(this, 'Custom8166710A', {
      scope: {
        complianceResourceTypes: [
          'AWS::EC2::Instance',
        ],
      },
      source: {
        owner: 'CUSTOM_LAMBDA',
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
        sourceIdentifier: customFunctionBadd59e7.attrArn,
      },
    });
    custom8166710A.addDependency(customFunctionCustomRulePermissionbM1jVaicvRo9sdCiAbsQcYrOlEsEtMwrrF9zqqRvd5Qed54a3f8);
    custom8166710A.addDependency(customFunctionBadd59e7);
    custom8166710A.addDependency(customFunctionServiceRoleD3f73b79);
  }
}

