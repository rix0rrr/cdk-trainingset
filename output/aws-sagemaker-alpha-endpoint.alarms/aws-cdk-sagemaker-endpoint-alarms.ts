import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sagemaker from 'aws-cdk-lib/aws-sagemaker';

export interface AwsCdkSagemakerEndpointAlarmsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSagemakerEndpointAlarms extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSagemakerEndpointAlarmsProps = {}) {
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
    const invoker060A9026 = new iam.CfnRole(this, 'Invoker060A9026', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
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
          },
        ],
        Version: '2012-10-17',
      },
    });

    const modelWithArtifactRole854Ed848 = new iam.CfnRole(this, 'ModelWithArtifactRole854ED848', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSageMakerFullAccess',
        ].join(''),
      ],
    });

    if (modelWithArtifactRole854Ed848 == null) { throw new Error(`A combination of conditions caused 'modelWithArtifactRole854Ed848' to be undefined. Fixit.`); }
    const modelWithArtifactRoleDefaultPolicy63A6f076 = new iam.CfnPolicy(this, 'ModelWithArtifactRoleDefaultPolicy63A6F076', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ModelWithArtifactRoleDefaultPolicy63A6F076',
      roles: [
        modelWithArtifactRole854Ed848.ref,
      ],
    });

    if (modelWithArtifactRole854Ed848 == null) { throw new Error(`A combination of conditions caused 'modelWithArtifactRole854Ed848' to be undefined. Fixit.`); }
    if (modelWithArtifactRoleDefaultPolicy63A6f076 == null) { throw new Error(`A combination of conditions caused 'modelWithArtifactRoleDefaultPolicy63A6f076' to be undefined. Fixit.`); }
    const modelWithArtifactModel7Ebc6421 = new sagemaker.CfnModel(this, 'ModelWithArtifactModel7EBC6421', {
      executionRoleArn: modelWithArtifactRole854Ed848.attrArn,
      primaryContainer: {
        image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a`,
        modelDataUrl: `https://s3.${this.region}.${this.urlSuffix}/cdk-hnb659fds-assets-${this.account}-${this.region}/126d48fa0e32fbef5078b9d88658b35ad29d4291eb86675a64c75fa4f1338916.gz`,
      },
    });
    modelWithArtifactModel7Ebc6421.addDependency(modelWithArtifactRoleDefaultPolicy63A6f076);
    modelWithArtifactModel7Ebc6421.addDependency(modelWithArtifactRole854Ed848);

    if (modelWithArtifactModel7Ebc6421 == null) { throw new Error(`A combination of conditions caused 'modelWithArtifactModel7Ebc6421' to be undefined. Fixit.`); }
    const endpointConfigFd7b6f91 = new sagemaker.CfnEndpointConfig(this, 'EndpointConfigFD7B6F91', {
      productionVariants: [
        {
          initialInstanceCount: 1,
          initialVariantWeight: 1,
          instanceType: 'ml.t2.medium',
          modelName: modelWithArtifactModel7Ebc6421.attrModelName,
          variantName: 'firstVariant',
        },
      ],
    });

    if (endpointConfigFd7b6f91 == null) { throw new Error(`A combination of conditions caused 'endpointConfigFd7b6f91' to be undefined. Fixit.`); }
    const endpoint8024A810 = new sagemaker.CfnEndpoint(this, 'Endpoint8024A810', {
      endpointConfigName: endpointConfigFd7b6f91.attrEndpointConfigName,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const cpuUtilizationAlarm4D91b4d0 = new cloudwatch.CfnAlarm(this, 'CPUUtilizationAlarm4D91B4D0', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 20,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'CPUUtilization',
      namespace: '/aws/sagemaker/Endpoints',
      period: 300,
      statistic: 'Average',
      threshold: 19,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const diskUtilizationAlarmE19e4184 = new cloudwatch.CfnAlarm(this, 'DiskUtilizationAlarmE19E4184', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 17,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'DiskUtilization',
      namespace: '/aws/sagemaker/Endpoints',
      period: 300,
      statistic: 'Average',
      threshold: 16,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const gpuMemoryUtilizationAlarmD03813bc = new cloudwatch.CfnAlarm(this, 'GPUMemoryUtilizationAlarmD03813BC', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 29,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'GPUMemoryUtilization',
      namespace: '/aws/sagemaker/Endpoints',
      period: 300,
      statistic: 'Average',
      threshold: 28,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const gpuUtilizationAlarmEc9bec6f = new cloudwatch.CfnAlarm(this, 'GPUUtilizationAlarmEC9BEC6F', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 26,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'GPUUtilization',
      namespace: '/aws/sagemaker/Endpoints',
      period: 300,
      statistic: 'Average',
      threshold: 25,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const invocation5XxErrorsAlarmF9baf026 = new cloudwatch.CfnAlarm(this, 'Invocation5XXErrorsAlarmF9BAF026', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 14,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'Invocation5XXErrors',
      namespace: 'AWS/SageMaker',
      period: 300,
      statistic: 'Sum',
      threshold: 13,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const invocationsAlarmBc3830bd = new cloudwatch.CfnAlarm(this, 'InvocationsAlarmBC3830BD', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 2,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'Invocations',
      namespace: 'AWS/SageMaker',
      period: 300,
      statistic: 'Sum',
      threshold: 1,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const invocationsPerInstanceAlarm82Cbcf29 = new cloudwatch.CfnAlarm(this, 'InvocationsPerInstanceAlarm82CBCF29', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 5,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'InvocationsPerInstance',
      namespace: 'AWS/SageMaker',
      period: 300,
      statistic: 'Sum',
      threshold: 4,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    if (invoker060A9026 == null) { throw new Error(`A combination of conditions caused 'invoker060A9026' to be undefined. Fixit.`); }
    const invokerDefaultPolicy3Ff8208d = new iam.CfnPolicy(this, 'InvokerDefaultPolicy3FF8208D', {
      policyDocument: {
        Statement: [
          {
            Action: 'sagemaker:InvokeEndpoint',
            Effect: 'Allow',
            Resource: endpoint8024A810.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'InvokerDefaultPolicy3FF8208D',
      roles: [
        invoker060A9026.ref,
      ],
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const memoryUtilizationAlarm544270Bf = new cloudwatch.CfnAlarm(this, 'MemoryUtilizationAlarm544270BF', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 23,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'MemoryUtilization',
      namespace: '/aws/sagemaker/Endpoints',
      period: 300,
      statistic: 'Average',
      threshold: 22,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const modelLatencyAlarm96Ac7d24 = new cloudwatch.CfnAlarm(this, 'ModelLatencyAlarm96AC7D24', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 8,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'ModelLatency',
      namespace: 'AWS/SageMaker',
      period: 300,
      statistic: 'Average',
      threshold: 7,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const overheadLatencyAlarm10D8981b = new cloudwatch.CfnAlarm(this, 'OverheadLatencyAlarm10D8981B', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 11,
      dimensions: [
        {
          name: 'EndpointName',
          value: endpoint8024A810.attrEndpointName,
        },
        {
          name: 'VariantName',
          value: 'firstVariant',
        },
      ],
      metricName: 'OverheadLatency',
      namespace: 'AWS/SageMaker',
      period: 300,
      statistic: 'Average',
      threshold: 10,
    });
  }
}

