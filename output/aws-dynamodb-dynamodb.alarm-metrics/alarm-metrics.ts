import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface alarm-metricsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class alarm-metrics extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: alarm-metricsProps = {}) {
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
    const tableCd117fa1 = new dynamodb.CfnTable(this, 'TableCD117FA1', {
      keySchema: [
        {
          attributeName: 'metric',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'metric',
          attributeType: 'S',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const tableErrorAlarm12A4e2f3 = new cloudwatch.CfnAlarm(this, 'TableErrorAlarm12A4E2F3', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      metrics: [
        {
          expression: 'putitem + scan',
          id: 'expr_1',
          label: 'Sum of errors across all operations',
        },
        {
          id: 'putitem',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'Operation',
                  value: 'PutItem',
                },
                {
                  name: 'TableName',
                  value: tableCd117fa1.ref,
                },
              ],
              metricName: 'SystemErrors',
              namespace: 'AWS/DynamoDB',
            },
            period: 60,
            stat: 'Sum',
          },
          returnData: false,
        },
        {
          id: 'scan',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'Operation',
                  value: 'Scan',
                },
                {
                  name: 'TableName',
                  value: tableCd117fa1.ref,
                },
              ],
              metricName: 'SystemErrors',
              namespace: 'AWS/DynamoDB',
            },
            period: 60,
            stat: 'Sum',
          },
          returnData: false,
        },
      ],
      threshold: 1,
    });

    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const tableThrottleAlarm606592Bc = new cloudwatch.CfnAlarm(this, 'TableThrottleAlarm606592BC', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      metrics: [
        {
          expression: 'putitem + scan',
          id: 'expr_1',
          label: 'Sum of throttled requests across all operations',
        },
        {
          id: 'putitem',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'Operation',
                  value: 'PutItem',
                },
                {
                  name: 'TableName',
                  value: tableCd117fa1.ref,
                },
              ],
              metricName: 'ThrottledRequests',
              namespace: 'AWS/DynamoDB',
            },
            period: 60,
            stat: 'Sum',
          },
          returnData: false,
        },
        {
          id: 'scan',
          metricStat: {
            metric: {
              dimensions: [
                {
                  name: 'Operation',
                  value: 'Scan',
                },
                {
                  name: 'TableName',
                  value: tableCd117fa1.ref,
                },
              ],
              metricName: 'ThrottledRequests',
              namespace: 'AWS/DynamoDB',
            },
            period: 60,
            stat: 'Sum',
          },
          returnData: false,
        },
      ],
      threshold: 1,
    });
  }
}

