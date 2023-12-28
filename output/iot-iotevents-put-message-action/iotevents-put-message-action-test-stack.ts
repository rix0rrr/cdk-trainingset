import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as iotevents from 'aws-cdk-lib/aws-iotevents';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface IoteventsPutMessageActionTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IoteventsPutMessageActionTestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IoteventsPutMessageActionTestStackProps = {}) {
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
    const myDetectorModelDetectorModelRoleF2fb4d88 = new iam.CfnRole(this, 'MyDetectorModelDetectorModelRoleF2FB4D88', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iotevents.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myInput08947B23 = new iotevents.CfnInput(this, 'MyInput08947B23', {
      inputDefinition: {
        attributes: [
          {
            jsonPath: 'payload.deviceId',
          },
        ],
      },
    });

    const topicRuleTopicRuleActionRole246C4f77 = new iam.CfnRole(this, 'TopicRuleTopicRuleActionRole246C4F77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iot.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const logs0B6081b1 = new logs.CfnLogGroup(this, 'logs0B6081B1', {
      retentionInDays: 731,
    });
    logs0B6081b1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myDetectorModelDetectorModelRoleF2fb4d88 == null) { throw new Error(`A combination of conditions caused 'myDetectorModelDetectorModelRoleF2fb4d88' to be undefined. Fixit.`); }
    if (myInput08947B23 == null) { throw new Error(`A combination of conditions caused 'myInput08947B23' to be undefined. Fixit.`); }
    const myDetectorModel559C0b0e = new iotevents.CfnDetectorModel(this, 'MyDetectorModel559C0B0E', {
      detectorModelDefinition: {
        initialStateName: 'initialState',
        states: [
          {
            onEnter: {
              events: [
                {
                  condition: [
                    'currentInput(\"',
                    myInput08947B23.ref,
                    '\")',
                  ].join(''),
                  eventName: 'enter',
                },
              ],
            },
            stateName: 'initialState',
          },
        ],
      },
      roleArn: myDetectorModelDetectorModelRoleF2fb4d88.attrArn,
      key: 'payload.deviceId',
    });

    if (myInput08947B23 == null) { throw new Error(`A combination of conditions caused 'myInput08947B23' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    if (logs0B6081b1 == null) { throw new Error(`A combination of conditions caused 'logs0B6081b1' to be undefined. Fixit.`); }
    const topicRule40A4ea44 = new iot.CfnTopicRule(this, 'TopicRule40A4EA44', {
      topicRulePayload: {
        actions: [
          {
            iotEvents: {
              batchMode: true,
              inputName: myInput08947B23.ref,
              roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
            },
          },
        ],
        awsIotSqlVersion: '2016-03-23',
        errorAction: {
          cloudwatchLogs: {
            logGroupName: logs0B6081b1.ref,
            roleArn: topicRuleTopicRuleActionRole246C4f77.attrArn,
          },
        },
        sql: 'SELECT * FROM \'device/+/data\'',
      },
    });

    if (myInput08947B23 == null) { throw new Error(`A combination of conditions caused 'myInput08947B23' to be undefined. Fixit.`); }
    if (topicRuleTopicRuleActionRole246C4f77 == null) { throw new Error(`A combination of conditions caused 'topicRuleTopicRuleActionRole246C4f77' to be undefined. Fixit.`); }
    if (logs0B6081b1 == null) { throw new Error(`A combination of conditions caused 'logs0B6081b1' to be undefined. Fixit.`); }
    const topicRuleTopicRuleActionRoleDefaultPolicy99Add687 = new iam.CfnPolicy(this, 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:DescribeLogStreams',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: logs0B6081b1.attrArn,
          },
          {
            Action: 'iotevents:BatchPutMessage',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':iotevents:',
              this.region,
              ':',
              this.account,
              ':input/',
              myInput08947B23.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TopicRuleTopicRuleActionRoleDefaultPolicy99ADD687',
      roles: [
        topicRuleTopicRuleActionRole246C4f77.ref,
      ],
    });
  }
}

