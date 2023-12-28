import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface aws-cdk-dynamodbProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-dynamodb extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-dynamodbProps = {}) {
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
          attributeName: 'hashKey',
          keyType: 'HASH',
        },
      ],
      attributeDefinitions: [
        {
          attributeName: 'hashKey',
          attributeType: 'S',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const tableReadScalingTargetF96e9f76 = new applicationautoscaling.CfnScalableTarget(this, 'TableReadScalingTargetF96E9F76', {
      maxCapacity: 50,
      minCapacity: 1,
      resourceId: [
        'table/',
        tableCd117fa1.ref,
      ].join(''),
      roleArn: [
        'arn:',
        this.partition,
        ':iam::',
        this.account,
        ':role/aws-service-role/dynamodb.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_DynamoDBTable',
      ].join(''),
      scalableDimension: 'dynamodb:table:ReadCapacityUnits',
      serviceNamespace: 'dynamodb',
      scheduledActions: [
        {
          scalableTargetAction: {
            minCapacity: 20,
          },
          schedule: 'cron(0 8 * * ? *)',
          scheduledActionName: 'ScaleUpInTheMorning',
        },
        {
          scalableTargetAction: {
            maxCapacity: 20,
          },
          schedule: 'cron(0 20 * * ? *)',
          scheduledActionName: 'ScaleDownAtNight',
        },
      ],
    });

    if (tableReadScalingTargetF96e9f76 == null) { throw new Error(`A combination of conditions caused 'tableReadScalingTargetF96e9f76' to be undefined. Fixit.`); }
    const tableReadScalingTargetTracking67Df0596 = new applicationautoscaling.CfnScalingPolicy(this, 'TableReadScalingTargetTracking67DF0596', {
      policyName: 'awscdkdynamodbTableReadScalingTargetTrackingC9729D9C',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: tableReadScalingTargetF96e9f76.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'DynamoDBReadCapacityUtilization',
        },
        targetValue: 50,
      },
    });
  }
}

