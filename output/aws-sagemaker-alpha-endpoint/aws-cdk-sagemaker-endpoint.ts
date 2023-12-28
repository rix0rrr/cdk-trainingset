import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sagemaker from 'aws-cdk-lib/aws-sagemaker';

export interface aws-cdk-sagemaker-endpointProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-sagemaker-endpoint extends cdk.Stack {
  public readonly exportsOutputFnGetAttEndpoint8024A810EndpointNameC77e4eff;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-sagemaker-endpointProps = {}) {
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

    const modelWithoutArtifactRoleB9ef84fd = new iam.CfnRole(this, 'ModelWithoutArtifactRoleB9EF84FD', {
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

    if (modelWithoutArtifactRoleB9ef84fd == null) { throw new Error(`A combination of conditions caused 'modelWithoutArtifactRoleB9ef84fd' to be undefined. Fixit.`); }
    const modelWithoutArtifactRoleDefaultPolicyCfdf486f = new iam.CfnPolicy(this, 'ModelWithoutArtifactRoleDefaultPolicyCFDF486F', {
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
        ],
        Version: '2012-10-17',
      },
      policyName: 'ModelWithoutArtifactRoleDefaultPolicyCFDF486F',
      roles: [
        modelWithoutArtifactRoleB9ef84fd.ref,
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

    if (modelWithoutArtifactRoleB9ef84fd == null) { throw new Error(`A combination of conditions caused 'modelWithoutArtifactRoleB9ef84fd' to be undefined. Fixit.`); }
    if (modelWithoutArtifactRoleDefaultPolicyCfdf486f == null) { throw new Error(`A combination of conditions caused 'modelWithoutArtifactRoleDefaultPolicyCfdf486f' to be undefined. Fixit.`); }
    const modelWithoutArtifactModel9Ab56fa5 = new sagemaker.CfnModel(this, 'ModelWithoutArtifactModel9AB56FA5', {
      executionRoleArn: modelWithoutArtifactRoleB9ef84fd.attrArn,
      primaryContainer: {
        image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a`,
      },
    });
    modelWithoutArtifactModel9Ab56fa5.addDependency(modelWithoutArtifactRoleDefaultPolicyCfdf486f);
    modelWithoutArtifactModel9Ab56fa5.addDependency(modelWithoutArtifactRoleB9ef84fd);

    if (modelWithArtifactModel7Ebc6421 == null) { throw new Error(`A combination of conditions caused 'modelWithArtifactModel7Ebc6421' to be undefined. Fixit.`); }
    if (modelWithoutArtifactModel9Ab56fa5 == null) { throw new Error(`A combination of conditions caused 'modelWithoutArtifactModel9Ab56fa5' to be undefined. Fixit.`); }
    const endpointConfigFd7b6f91 = new sagemaker.CfnEndpointConfig(this, 'EndpointConfigFD7B6F91', {
      productionVariants: [
        {
          initialInstanceCount: 1,
          initialVariantWeight: 1,
          instanceType: 'ml.m5.large',
          modelName: modelWithArtifactModel7Ebc6421.attrModelName,
          variantName: 'firstVariant',
        },
        {
          initialInstanceCount: 1,
          initialVariantWeight: 1,
          instanceType: 'ml.t2.medium',
          modelName: modelWithArtifactModel7Ebc6421.attrModelName,
          variantName: 'secondVariant',
        },
        {
          initialInstanceCount: 1,
          initialVariantWeight: 2,
          instanceType: 'ml.t2.medium',
          modelName: modelWithoutArtifactModel9Ab56fa5.attrModelName,
          variantName: 'thirdVariant',
        },
      ],
    });

    if (endpointConfigFd7b6f91 == null) { throw new Error(`A combination of conditions caused 'endpointConfigFd7b6f91' to be undefined. Fixit.`); }
    const endpoint8024A810 = new sagemaker.CfnEndpoint(this, 'Endpoint8024A810', {
      endpointConfigName: endpointConfigFd7b6f91.attrEndpointConfigName,
    });

    if (endpoint8024A810 == null) { throw new Error(`A combination of conditions caused 'endpoint8024A810' to be undefined. Fixit.`); }
    const endpointInstanceCountTargetDa8c8edb = new applicationautoscaling.CfnScalableTarget(this, 'EndpointInstanceCountTargetDA8C8EDB', {
      maxCapacity: 3,
      minCapacity: 1,
      resourceId: [
        'endpoint/',
        endpoint8024A810.attrEndpointName,
        '/variant/firstVariant',
      ].join(''),
      roleArn: [
        'arn:',
        this.partition,
        ':iam::',
        this.account,
        ':role/aws-service-role/sagemaker.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_SageMakerEndpoint',
      ].join(''),
      scalableDimension: 'sagemaker:variant:DesiredInstanceCount',
      serviceNamespace: 'sagemaker',
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

    if (endpointInstanceCountTargetDa8c8edb == null) { throw new Error(`A combination of conditions caused 'endpointInstanceCountTargetDa8c8edb' to be undefined. Fixit.`); }
    const endpointInstanceCountTargetLimitRpse1d92db6 = new applicationautoscaling.CfnScalingPolicy(this, 'EndpointInstanceCountTargetLimitRPSE1D92DB6', {
      policyName: 'awscdksagemakerendpointEndpointInstanceCountTargetLimitRPSCC857664',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: endpointInstanceCountTargetDa8c8edb.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'SageMakerVariantInvocationsPerInstance',
        },
        targetValue: 900,
      },
    });

    // Outputs
    this.exportsOutputFnGetAttEndpoint8024A810EndpointNameC77e4eff = endpoint8024A810.attrEndpointName;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttEndpoint8024A810EndpointNameC77E4EFF', {
      key: 'ExportsOutputFnGetAttEndpoint8024A810EndpointNameC77E4EFF',
      exportName: 'aws-cdk-sagemaker-endpoint:ExportsOutputFnGetAttEndpoint8024A810EndpointNameC77E4EFF',
      value: this.exportsOutputFnGetAttEndpoint8024A810EndpointNameC77e4eff!.toString(),
    });
  }
}

