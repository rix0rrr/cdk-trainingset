import * as cdk from 'aws-cdk-lib';
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsLambdaAutoscalingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsLambdaAutoscaling extends cdk.Stack {
  public readonly functionName;

  public constructor(scope: cdk.App, id: string, props: AwsLambdaAutoscalingProps = {}) {
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
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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
      ],
    });

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        zipFile: 'exports.handler = async () => { console.log(\'hello world\'); };',
      },
      description: 'version-hash:0b9cb8a47f6ac9ffda0262eb768e70b8',
      handler: 'index.handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaCurrentVersionE7a382cCe371c9697d7882d1bd7bf42e0dece697 = new lambda.CfnVersion(this, 'MyLambdaCurrentVersionE7A382CCe371c9697d7882d1bd7bf42e0dece697', {
      functionName: myLambdaCce802fb.ref,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaCurrentVersionE7a382cCe371c9697d7882d1bd7bf42e0dece697 == null) { throw new Error(`A combination of conditions caused 'myLambdaCurrentVersionE7a382cCe371c9697d7882d1bd7bf42e0dece697' to be undefined. Fixit.`); }
    const alias325C5727 = new lambda.CfnAlias(this, 'Alias325C5727', {
      functionName: myLambdaCce802fb.ref,
      functionVersion: myLambdaCurrentVersionE7a382cCe371c9697d7882d1bd7bf42e0dece697.attrVersion,
      name: 'prod',
    });

    if (alias325C5727 == null) { throw new Error(`A combination of conditions caused 'alias325C5727' to be undefined. Fixit.`); }
    const aliasAliasScalingTarget7449Ff0e = new applicationautoscaling.CfnScalableTarget(this, 'AliasAliasScalingTarget7449FF0E', {
      maxCapacity: 50,
      minCapacity: 3,
      resourceId: [
        'function:',
        cdk.Fn.select(6, cdk.Fn.split(':', alias325C5727.ref)),
        ':prod',
      ].join(''),
      roleArn: [
        'arn:',
        this.partition,
        ':iam::',
        this.account,
        ':role/aws-service-role/lambda.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_LambdaConcurrency',
      ].join(''),
      scalableDimension: 'lambda:function:ProvisionedConcurrency',
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
        {
          endTime: '2023-12-26T00:00:00Z',
          scalableTargetAction: {
            maxCapacity: 20,
          },
          schedule: 'cron(0 20 * * ? *)',
          scheduledActionName: 'WithStartAndEnd',
          startTime: '2023-12-25T00:00:00Z',
        },
      ],
      serviceNamespace: 'lambda',
    });

    if (aliasAliasScalingTarget7449Ff0e == null) { throw new Error(`A combination of conditions caused 'aliasAliasScalingTarget7449Ff0e' to be undefined. Fixit.`); }
    const aliasAliasScalingTargetTrackingA7718d48 = new applicationautoscaling.CfnScalingPolicy(this, 'AliasAliasScalingTargetTrackingA7718D48', {
      policyName: 'awslambdaautoscalingAliasAliasScalingTargetTrackingD339330D',
      policyType: 'TargetTrackingScaling',
      scalingTargetId: aliasAliasScalingTarget7449Ff0e.ref,
      targetTrackingScalingPolicyConfiguration: {
        predefinedMetricSpecification: {
          predefinedMetricType: 'LambdaProvisionedConcurrencyUtilization',
        },
        targetValue: 0.5,
      },
    });

    // Outputs
    this.functionName = myLambdaCce802fb.ref;
    new cdk.CfnOutput(this, 'CfnOutputFunctionName', {
      key: 'FunctionName',
      value: this.functionName!.toString(),
    });
  }
}

