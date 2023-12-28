import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface AwsCdkElbv2IntegStackundertestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkElbv2IntegStackundertest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkElbv2IntegStackundertestProps = {}) {
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
    const nlbByCfnOutputsFromAnotherStackOutsideCdkAlarmFlowCountD9a1d5ac = new cloudwatch.CfnAlarm(this, 'NlbByCfnOutputsFromAnotherStackOutsideCdkAlarmFlowCountD9A1D5AC', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
          ].join(''),
        },
      ],
      metricName: 'ActiveFlowCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });

    const nlbByCfnOutputsFromAnotherStackWithinCdkAlarmFlowCountD865db84 = new cloudwatch.CfnAlarm(this, 'NlbByCfnOutputsFromAnotherStackWithinCdkAlarmFlowCountD865DB84', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
          ].join(''),
        },
      ],
      metricName: 'ActiveFlowCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });

    const nlbByHardcodedArnAlarmFlowCount60A46641 = new cloudwatch.CfnAlarm(this, 'NlbByHardcodedArnAlarmFlowCount60A46641', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: 'network/my-load-balancer/50dc6c495c0c9188',
        },
      ],
      metricName: 'ActiveFlowCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });

    const tgByCfnOutputsFromAnotherStackOutsideCdkHealthyHostCount3Da06734 = new cloudwatch.CfnAlarm(this, 'TgByCfnOutputsFromAnotherStackOutsideCdkHealthyHostCount3DA06734', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', cdk.Fn.importValue('NlbArn'))),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: cdk.Fn.select(5, cdk.Fn.split(':', cdk.Fn.importValue('TgArn'))),
        },
      ],
      metricName: 'HealthyHostCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });

    const tgByCfnOutputsFromAnotherStackWithinCdkHealthyHostCountD4851e85 = new cloudwatch.CfnAlarm(this, 'TgByCfnOutputsFromAnotherStackWithinCdkHealthyHostCountD4851E85', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: [
            cdk.Fn.select(1, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
            '/',
            cdk.Fn.select(2, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
            '/',
            cdk.Fn.select(3, cdk.Fn.split('/', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLB8A12904C1150D6A6'))),
          ].join(''),
        },
        {
          name: 'TargetGroup',
          value: cdk.Fn.select(5, cdk.Fn.split(':', cdk.Fn.importValue('aws-cdk-elbv2-StackWithLb:ExportsOutputRefLBListenerTargetGroupGroup07C223BF73476D0D'))),
        },
      ],
      metricName: 'HealthyHostCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });

    const tgByHardcodedArnHealthyHostCount433C0e6e = new cloudwatch.CfnAlarm(this, 'TgByHardcodedArnHealthyHostCount433C0E6E', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'LoadBalancer',
          value: 'net/my-load-balancer/50dc6c495c0c9188',
        },
        {
          name: 'TargetGroup',
          value: 'targetgroup/my-target-group/50dc6c495c0c9188',
        },
      ],
      metricName: 'HealthyHostCount',
      namespace: 'AWS/NetworkELB',
      period: 300,
      statistic: 'Average',
      threshold: 0,
    });
  }
}

