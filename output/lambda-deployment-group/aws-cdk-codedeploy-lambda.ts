import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkCodedeployLambdaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodedeployLambda extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodedeployLambdaProps = {}) {
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
    const blueGreenDeploymentApplication36C892c0 = new codedeploy.CfnApplication(this, 'BlueGreenDeploymentApplication36C892C0', {
      computePlatform: 'Lambda',
    });

    const blueGreenDeploymentServiceRole225851Fb = new iam.CfnRole(this, 'BlueGreenDeploymentServiceRole225851FB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codedeploy.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSCodeDeployRoleForLambdaLimited',
        ].join(''),
      ],
    });

    const handlerServiceRoleFcdc14ae = new iam.CfnRole(this, 'HandlerServiceRoleFCDC14AE', {
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

    const postHookServiceRoleE8a6aac2 = new iam.CfnRole(this, 'PostHookServiceRoleE8A6AAC2', {
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

    const preHookServiceRoleC724b9ba = new iam.CfnRole(this, 'PreHookServiceRoleC724B9BA', {
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

    const secondDeploymentApplication1F8c51fe = new codedeploy.CfnApplication(this, 'SecondDeploymentApplication1F8C51FE', {
      computePlatform: 'Lambda',
    });

    const secondDeploymentServiceRoleAff1ecd5 = new iam.CfnRole(this, 'SecondDeploymentServiceRoleAFF1ECD5', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codedeploy.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSCodeDeployRoleForLambdaLimited',
        ].join(''),
      ],
    });

    if (handlerServiceRoleFcdc14ae == null) { throw new Error(`A combination of conditions caused 'handlerServiceRoleFcdc14ae' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'edb7466707eb899fbaee22c1e67f9443e9edcc2eeda0b58d8448f7c4157746b3.zip',
      },
      handler: 'index.handler',
      role: handlerServiceRoleFcdc14ae.attrArn,
      runtime: 'nodejs18.x',
    });
    handler886Cb40b.addDependency(handlerServiceRoleFcdc14ae);

    if (secondDeploymentApplication1F8c51fe == null) { throw new Error(`A combination of conditions caused 'secondDeploymentApplication1F8c51fe' to be undefined. Fixit.`); }
    if (secondDeploymentServiceRoleAff1ecd5 == null) { throw new Error(`A combination of conditions caused 'secondDeploymentServiceRoleAff1ecd5' to be undefined. Fixit.`); }
    const secondDeploymentC270a23d = new codedeploy.CfnDeploymentGroup(this, 'SecondDeploymentC270A23D', {
      alarmConfiguration: {
        enabled: false,
      },
      applicationName: secondDeploymentApplication1F8c51fe.ref,
      autoRollbackConfiguration: {
        enabled: true,
        events: [
          'DEPLOYMENT_FAILURE',
        ],
      },
      deploymentConfigName: 'CodeDeployDefault.LambdaCanary10Percent5Minutes',
      deploymentStyle: {
        deploymentOption: 'WITH_TRAFFIC_CONTROL',
        deploymentType: 'BLUE_GREEN',
      },
      serviceRoleArn: secondDeploymentServiceRoleAff1ecd5.attrArn,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    const blueGreenErrors60C27452 = new cloudwatch.CfnAlarm(this, 'BlueGreenErrors60C27452', {
      comparisonOperator: 'GreaterThanThreshold',
      dimensions: [
        {
          name: 'FunctionName',
          value: handler886Cb40b.ref,
        },
        {
          name: 'Resource',
          value: [
            handler886Cb40b.ref,
            ':alias',
          ].join(''),
        },
      ],
      evaluationPeriods: 1,
      metricName: 'Errors',
      namespace: 'AWS/Lambda',
      period: 300,
      statistic: 'Sum',
      threshold: 1,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    const handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a = new lambda.CfnVersion(this, 'HandlerCurrentVersion93FB80BF7274e06dc68914926264fc8b4f358f0a', {
      functionName: handler886Cb40b.ref,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a == null) { throw new Error(`A combination of conditions caused 'handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a' to be undefined. Fixit.`); }
    const alias325C5727 = new lambda.CfnAlias(this, 'Alias325C5727', {
      functionName: handler886Cb40b.ref,
      functionVersion: handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a.attrVersion,
      name: 'alias',
    });
    alias325C5727.cfnOptions.updatePolicy = {
      CodeDeployLambdaAliasUpdate: {
        ApplicationName: blueGreenDeploymentApplication36C892c0.ref,
        DeploymentGroupName: blueGreenDeployment5C188134.ref,
        BeforeAllowTrafficHook: preHook8B53f672.ref,
        AfterAllowTrafficHook: postHookF2e49b30.ref,
      },
    };
    if (blueGreenDeploymentApplication36C892c0 == null) { throw new Error(`A combination of conditions caused 'blueGreenDeploymentApplication36C892c0' to be undefined. Fixit.`); }
    if (blueGreenDeploymentServiceRole225851Fb == null) { throw new Error(`A combination of conditions caused 'blueGreenDeploymentServiceRole225851Fb' to be undefined. Fixit.`); }
    if (blueGreenErrors60C27452 == null) { throw new Error(`A combination of conditions caused 'blueGreenErrors60C27452' to be undefined. Fixit.`); }
    const blueGreenDeployment5C188134 = new codedeploy.CfnDeploymentGroup(this, 'BlueGreenDeployment5C188134', {
      alarmConfiguration: {
        alarms: [
          {
            name: blueGreenErrors60C27452.ref,
          },
        ],
        enabled: true,
      },
      applicationName: blueGreenDeploymentApplication36C892c0.ref,
      autoRollbackConfiguration: {
        enabled: true,
        events: [
          'DEPLOYMENT_FAILURE',
          'DEPLOYMENT_STOP_ON_ALARM',
        ],
      },
      deploymentConfigName: 'CodeDeployDefault.LambdaLinear10PercentEvery1Minute',
      deploymentStyle: {
        deploymentOption: 'WITH_TRAFFIC_CONTROL',
        deploymentType: 'BLUE_GREEN',
      },
      serviceRoleArn: blueGreenDeploymentServiceRole225851Fb.attrArn,
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a == null) { throw new Error(`A combination of conditions caused 'handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a' to be undefined. Fixit.`); }
    const secondAlias33D63566 = new lambda.CfnAlias(this, 'SecondAlias33D63566', {
      functionName: handler886Cb40b.ref,
      functionVersion: handlerCurrentVersion93Fb80bf7274e06dc68914926264fc8b4f358f0a.attrVersion,
      name: 'secondAlias',
    });
    secondAlias33D63566.cfnOptions.updatePolicy = {
      CodeDeployLambdaAliasUpdate: {
        ApplicationName: secondDeploymentApplication1F8c51fe.ref,
        DeploymentGroupName: secondDeploymentC270a23d.ref,
      },
    };
    if (blueGreenDeployment5C188134 == null) { throw new Error(`A combination of conditions caused 'blueGreenDeployment5C188134' to be undefined. Fixit.`); }
    if (blueGreenDeploymentApplication36C892c0 == null) { throw new Error(`A combination of conditions caused 'blueGreenDeploymentApplication36C892c0' to be undefined. Fixit.`); }
    if (postHookServiceRoleE8a6aac2 == null) { throw new Error(`A combination of conditions caused 'postHookServiceRoleE8a6aac2' to be undefined. Fixit.`); }
    const postHookServiceRoleDefaultPolicy82Aee758 = new iam.CfnPolicy(this, 'PostHookServiceRoleDefaultPolicy82AEE758', {
      policyDocument: {
        Statement: [
          {
            Action: 'codedeploy:PutLifecycleEventHookExecutionStatus',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codedeploy:',
              this.region,
              ':',
              this.account,
              ':deploymentgroup:',
              blueGreenDeploymentApplication36C892c0.ref,
              '/',
              blueGreenDeployment5C188134.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PostHookServiceRoleDefaultPolicy82AEE758',
      roles: [
        postHookServiceRoleE8a6aac2.ref,
      ],
    });

    if (blueGreenDeployment5C188134 == null) { throw new Error(`A combination of conditions caused 'blueGreenDeployment5C188134' to be undefined. Fixit.`); }
    if (blueGreenDeploymentApplication36C892c0 == null) { throw new Error(`A combination of conditions caused 'blueGreenDeploymentApplication36C892c0' to be undefined. Fixit.`); }
    if (preHookServiceRoleC724b9ba == null) { throw new Error(`A combination of conditions caused 'preHookServiceRoleC724b9ba' to be undefined. Fixit.`); }
    const preHookServiceRoleDefaultPolicy65358F76 = new iam.CfnPolicy(this, 'PreHookServiceRoleDefaultPolicy65358F76', {
      policyDocument: {
        Statement: [
          {
            Action: 'codedeploy:PutLifecycleEventHookExecutionStatus',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codedeploy:',
              this.region,
              ':',
              this.account,
              ':deploymentgroup:',
              blueGreenDeploymentApplication36C892c0.ref,
              '/',
              blueGreenDeployment5C188134.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PreHookServiceRoleDefaultPolicy65358F76',
      roles: [
        preHookServiceRoleC724b9ba.ref,
      ],
    });

    if (postHookServiceRoleDefaultPolicy82Aee758 == null) { throw new Error(`A combination of conditions caused 'postHookServiceRoleDefaultPolicy82Aee758' to be undefined. Fixit.`); }
    if (postHookServiceRoleE8a6aac2 == null) { throw new Error(`A combination of conditions caused 'postHookServiceRoleE8a6aac2' to be undefined. Fixit.`); }
    const postHookF2e49b30 = new lambda.CfnFunction(this, 'PostHookF2E49B30', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '93dbd8c02dbfca9077c9d83cb6d3a94659988c7d143988da4a554033a58f963c.zip',
      },
      handler: 'index.handler',
      role: postHookServiceRoleE8a6aac2.attrArn,
      runtime: 'nodejs18.x',
    });
    postHookF2e49b30.addDependency(postHookServiceRoleDefaultPolicy82Aee758);
    postHookF2e49b30.addDependency(postHookServiceRoleE8a6aac2);

    if (preHookServiceRoleC724b9ba == null) { throw new Error(`A combination of conditions caused 'preHookServiceRoleC724b9ba' to be undefined. Fixit.`); }
    if (preHookServiceRoleDefaultPolicy65358F76 == null) { throw new Error(`A combination of conditions caused 'preHookServiceRoleDefaultPolicy65358F76' to be undefined. Fixit.`); }
    const preHook8B53f672 = new lambda.CfnFunction(this, 'PreHook8B53F672', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '87da351d4c9de5eead78cb80dde66bcbb6c42c418c3368747f32a4e9c013a2e1.zip',
      },
      handler: 'index.handler',
      role: preHookServiceRoleC724b9ba.attrArn,
      runtime: 'nodejs18.x',
    });
    preHook8B53f672.addDependency(preHookServiceRoleDefaultPolicy65358F76);
    preHook8B53f672.addDependency(preHookServiceRoleC724b9ba);

    if (blueGreenDeploymentServiceRole225851Fb == null) { throw new Error(`A combination of conditions caused 'blueGreenDeploymentServiceRole225851Fb' to be undefined. Fixit.`); }
    if (postHookF2e49b30 == null) { throw new Error(`A combination of conditions caused 'postHookF2e49b30' to be undefined. Fixit.`); }
    if (preHook8B53f672 == null) { throw new Error(`A combination of conditions caused 'preHook8B53f672' to be undefined. Fixit.`); }
    const blueGreenDeploymentServiceRoleDefaultPolicy7008Fb0a = new iam.CfnPolicy(this, 'BlueGreenDeploymentServiceRoleDefaultPolicy7008FB0A', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              postHookF2e49b30.attrArn,
              preHook8B53f672.attrArn,
              [
                postHookF2e49b30.attrArn,
                ':*',
              ].join(''),
              [
                preHook8B53f672.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'BlueGreenDeploymentServiceRoleDefaultPolicy7008FB0A',
      roles: [
        blueGreenDeploymentServiceRole225851Fb.ref,
      ],
    });
  }
}

