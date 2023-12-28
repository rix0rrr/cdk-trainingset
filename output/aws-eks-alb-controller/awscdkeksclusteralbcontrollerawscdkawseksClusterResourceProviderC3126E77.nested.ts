import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderC3126E77.nestedProps extends cdk.StackProps {
}

export class awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderC3126E77.nested extends cdk.Stack {
  public readonly awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderOnEventHandlerServiceRoleD37d32b7Arn;
  public readonly awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderIsCompleteHandlerServiceRole75085195Arn;
  public readonly awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderframeworkonEvent9A4dbd44Arn;

  public constructor(scope: cdk.App, id: string, props: awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderC3126E77.nestedProps = {}) {
    super(scope, id, props);

    // Resources
    const isCompleteHandlerServiceRole5810Cc58 = new iam.CfnRole(this, 'IsCompleteHandlerServiceRole5810CC58', {
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

    const nodeProxyAgentLayer924C1971 = new lambda.CfnLayerVersion(this, 'NodeProxyAgentLayer924C1971', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '9202bb21d52e07810fc1da0f6acf2dcb75a40a43a9a2efbcfc9ae39535c6260c.zip',
      },
      description: '/opt/nodejs/node_modules/proxy-agent',
    });

    const onEventHandlerServiceRole15A26729 = new iam.CfnRole(this, 'OnEventHandlerServiceRole15A26729', {
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

    const providerframeworkisCompleteServiceRoleB1087139 = new iam.CfnRole(this, 'ProviderframeworkisCompleteServiceRoleB1087139', {
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

    const providerframeworkonEventServiceRole9Ff04296 = new iam.CfnRole(this, 'ProviderframeworkonEventServiceRole9FF04296', {
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

    const providerframeworkonTimeoutServiceRole28643D26 = new iam.CfnRole(this, 'ProviderframeworkonTimeoutServiceRole28643D26', {
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

    const providerwaiterstatemachineLogGroupDd693a98 = new logs.CfnLogGroup(this, 'ProviderwaiterstatemachineLogGroupDD693A98', {
      retentionInDays: 731,
    });
    providerwaiterstatemachineLogGroupDd693a98.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const providerwaiterstatemachineRole0C7159f9 = new iam.CfnRole(this, 'ProviderwaiterstatemachineRole0C7159F9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (isCompleteHandlerServiceRole5810Cc58 == null) { throw new Error(`A combination of conditions caused 'isCompleteHandlerServiceRole5810Cc58' to be undefined. Fixit.`); }
    if (nodeProxyAgentLayer924C1971 == null) { throw new Error(`A combination of conditions caused 'nodeProxyAgentLayer924C1971' to be undefined. Fixit.`); }
    const isCompleteHandler7073F4da = new lambda.CfnFunction(this, 'IsCompleteHandler7073F4DA', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '61942cf3327d6ed09088c3ef6dc3323ede4f78254d605dda7068fd1de5dd704f.zip',
      },
      description: 'isComplete handler for EKS cluster resource provider',
      environment: {
        variables: {
          'AWS_STS_REGIONAL_ENDPOINTS': 'regional',
        },
      },
      handler: 'index.isComplete',
      layers: [
        nodeProxyAgentLayer924C1971.ref,
      ],
      role: isCompleteHandlerServiceRole5810Cc58.attrArn,
      runtime: 'nodejs18.x',
      timeout: 60,
    });
    isCompleteHandler7073F4da.addDependency(isCompleteHandlerServiceRole5810Cc58);

    if (nodeProxyAgentLayer924C1971 == null) { throw new Error(`A combination of conditions caused 'nodeProxyAgentLayer924C1971' to be undefined. Fixit.`); }
    if (onEventHandlerServiceRole15A26729 == null) { throw new Error(`A combination of conditions caused 'onEventHandlerServiceRole15A26729' to be undefined. Fixit.`); }
    const onEventHandler42Bebae0 = new lambda.CfnFunction(this, 'OnEventHandler42BEBAE0', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '61942cf3327d6ed09088c3ef6dc3323ede4f78254d605dda7068fd1de5dd704f.zip',
      },
      description: 'onEvent handler for EKS cluster resource provider',
      environment: {
        variables: {
          'AWS_STS_REGIONAL_ENDPOINTS': 'regional',
        },
      },
      handler: 'index.onEvent',
      layers: [
        nodeProxyAgentLayer924C1971.ref,
      ],
      role: onEventHandlerServiceRole15A26729.attrArn,
      runtime: 'nodejs18.x',
      timeout: 60,
    });
    onEventHandler42Bebae0.addDependency(onEventHandlerServiceRole15A26729);

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkisCompleteServiceRoleB1087139 == null) { throw new Error(`A combination of conditions caused 'providerframeworkisCompleteServiceRoleB1087139' to be undefined. Fixit.`); }
    const providerframeworkisCompleteServiceRoleDefaultPolicy2E7140ac = new iam.CfnPolicy(this, 'ProviderframeworkisCompleteServiceRoleDefaultPolicy2E7140AC', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              isCompleteHandler7073F4da.attrArn,
              onEventHandler42Bebae0.attrArn,
              [
                isCompleteHandler7073F4da.attrArn,
                ':*',
              ].join(''),
              [
                onEventHandler42Bebae0.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderframeworkisCompleteServiceRoleDefaultPolicy2E7140AC',
      roles: [
        providerframeworkisCompleteServiceRoleB1087139.ref,
      ],
    });

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkonTimeoutServiceRole28643D26 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonTimeoutServiceRole28643D26' to be undefined. Fixit.`); }
    const providerframeworkonTimeoutServiceRoleDefaultPolicy2688969F = new iam.CfnPolicy(this, 'ProviderframeworkonTimeoutServiceRoleDefaultPolicy2688969F', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              isCompleteHandler7073F4da.attrArn,
              onEventHandler42Bebae0.attrArn,
              [
                isCompleteHandler7073F4da.attrArn,
                ':*',
              ].join(''),
              [
                onEventHandler42Bebae0.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderframeworkonTimeoutServiceRoleDefaultPolicy2688969F',
      roles: [
        providerframeworkonTimeoutServiceRole28643D26.ref,
      ],
    });

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkisCompleteServiceRoleB1087139 == null) { throw new Error(`A combination of conditions caused 'providerframeworkisCompleteServiceRoleB1087139' to be undefined. Fixit.`); }
    if (providerframeworkisCompleteServiceRoleDefaultPolicy2E7140ac == null) { throw new Error(`A combination of conditions caused 'providerframeworkisCompleteServiceRoleDefaultPolicy2E7140ac' to be undefined. Fixit.`); }
    const providerframeworkisComplete26D7b0cb = new lambda.CfnFunction(this, 'ProviderframeworkisComplete26D7B0CB', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - isComplete (aws-cdk-eks-cluster-alb-controller/@aws-cdk--aws-eks.ClusterResourceProvider/Provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': onEventHandler42Bebae0.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': isCompleteHandler7073F4da.attrArn,
        },
      },
      handler: 'framework.isComplete',
      role: providerframeworkisCompleteServiceRoleB1087139.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerframeworkisComplete26D7b0cb.addDependency(providerframeworkisCompleteServiceRoleDefaultPolicy2E7140ac);
    providerframeworkisComplete26D7b0cb.addDependency(providerframeworkisCompleteServiceRoleB1087139);

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkonTimeoutServiceRole28643D26 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonTimeoutServiceRole28643D26' to be undefined. Fixit.`); }
    if (providerframeworkonTimeoutServiceRoleDefaultPolicy2688969F == null) { throw new Error(`A combination of conditions caused 'providerframeworkonTimeoutServiceRoleDefaultPolicy2688969F' to be undefined. Fixit.`); }
    const providerframeworkonTimeout0B47ca38 = new lambda.CfnFunction(this, 'ProviderframeworkonTimeout0B47CA38', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onTimeout (aws-cdk-eks-cluster-alb-controller/@aws-cdk--aws-eks.ClusterResourceProvider/Provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': onEventHandler42Bebae0.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': isCompleteHandler7073F4da.attrArn,
        },
      },
      handler: 'framework.onTimeout',
      role: providerframeworkonTimeoutServiceRole28643D26.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerframeworkonTimeout0B47ca38.addDependency(providerframeworkonTimeoutServiceRoleDefaultPolicy2688969F);
    providerframeworkonTimeout0B47ca38.addDependency(providerframeworkonTimeoutServiceRole28643D26);

    if (providerframeworkisComplete26D7b0cb == null) { throw new Error(`A combination of conditions caused 'providerframeworkisComplete26D7b0cb' to be undefined. Fixit.`); }
    if (providerframeworkonTimeout0B47ca38 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonTimeout0B47ca38' to be undefined. Fixit.`); }
    if (providerwaiterstatemachineRole0C7159f9 == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachineRole0C7159f9' to be undefined. Fixit.`); }
    const providerwaiterstatemachineRoleDefaultPolicyD3c3da1a = new iam.CfnPolicy(this, 'ProviderwaiterstatemachineRoleDefaultPolicyD3C3DA1A', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              providerframeworkisComplete26D7b0cb.attrArn,
              providerframeworkonTimeout0B47ca38.attrArn,
              [
                providerframeworkisComplete26D7b0cb.attrArn,
                ':*',
              ].join(''),
              [
                providerframeworkonTimeout0B47ca38.attrArn,
                ':*',
              ].join(''),
            ],
          },
          {
            Action: [
              'logs:CreateLogDelivery',
              'logs:CreateLogStream',
              'logs:DeleteLogDelivery',
              'logs:DescribeLogGroups',
              'logs:DescribeResourcePolicies',
              'logs:GetLogDelivery',
              'logs:ListLogDeliveries',
              'logs:PutLogEvents',
              'logs:PutResourcePolicy',
              'logs:UpdateLogDelivery',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderwaiterstatemachineRoleDefaultPolicyD3C3DA1A',
      roles: [
        providerwaiterstatemachineRole0C7159f9.ref,
      ],
    });

    if (providerframeworkisComplete26D7b0cb == null) { throw new Error(`A combination of conditions caused 'providerframeworkisComplete26D7b0cb' to be undefined. Fixit.`); }
    if (providerframeworkonTimeout0B47ca38 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonTimeout0B47ca38' to be undefined. Fixit.`); }
    if (providerwaiterstatemachineLogGroupDd693a98 == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachineLogGroupDd693a98' to be undefined. Fixit.`); }
    if (providerwaiterstatemachineRole0C7159f9 == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachineRole0C7159f9' to be undefined. Fixit.`); }
    if (providerwaiterstatemachineRoleDefaultPolicyD3c3da1a == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachineRoleDefaultPolicyD3c3da1a' to be undefined. Fixit.`); }
    const providerwaiterstatemachine5D4a9df0 = new stepfunctions.CfnStateMachine(this, 'Providerwaiterstatemachine5D4A9DF0', {
      definitionString: [
        '{\"StartAt\":\"framework-isComplete-task\",\"States\":{\"framework-isComplete-task\":{\"End\":true,\"Retry\":[{\"ErrorEquals\":[\"States.ALL\"],\"IntervalSeconds\":60,\"MaxAttempts\":60,\"BackoffRate\":1}],\"Catch\":[{\"ErrorEquals\":[\"States.ALL\"],\"Next\":\"framework-onTimeout-task\"}],\"Type\":\"Task\",\"Resource\":\"',
        providerframeworkisComplete26D7b0cb.attrArn,
        '\"},\"framework-onTimeout-task\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"',
        providerframeworkonTimeout0B47ca38.attrArn,
        '\"}}}',
      ].join(''),
      loggingConfiguration: {
        destinations: [
          {
            cloudWatchLogsLogGroup: {
              logGroupArn: providerwaiterstatemachineLogGroupDd693a98.attrArn,
            },
          },
        ],
        includeExecutionData: false,
        level: 'ERROR',
      },
      roleArn: providerwaiterstatemachineRole0C7159f9.attrArn,
    });
    providerwaiterstatemachine5D4a9df0.addDependency(providerwaiterstatemachineRoleDefaultPolicyD3c3da1a);
    providerwaiterstatemachine5D4a9df0.addDependency(providerwaiterstatemachineRole0C7159f9);

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRole9Ff04296 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRole9Ff04296' to be undefined. Fixit.`); }
    if (providerwaiterstatemachine5D4a9df0 == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachine5D4a9df0' to be undefined. Fixit.`); }
    const providerframeworkonEventServiceRoleDefaultPolicy48Cd2133 = new iam.CfnPolicy(this, 'ProviderframeworkonEventServiceRoleDefaultPolicy48CD2133', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              isCompleteHandler7073F4da.attrArn,
              onEventHandler42Bebae0.attrArn,
              [
                isCompleteHandler7073F4da.attrArn,
                ':*',
              ].join(''),
              [
                onEventHandler42Bebae0.attrArn,
                ':*',
              ].join(''),
            ],
          },
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: providerwaiterstatemachine5D4a9df0.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderframeworkonEventServiceRoleDefaultPolicy48CD2133',
      roles: [
        providerframeworkonEventServiceRole9Ff04296.ref,
      ],
    });

    if (isCompleteHandler7073F4da == null) { throw new Error(`A combination of conditions caused 'isCompleteHandler7073F4da' to be undefined. Fixit.`); }
    if (onEventHandler42Bebae0 == null) { throw new Error(`A combination of conditions caused 'onEventHandler42Bebae0' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRole9Ff04296 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRole9Ff04296' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRoleDefaultPolicy48Cd2133 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRoleDefaultPolicy48Cd2133' to be undefined. Fixit.`); }
    if (providerwaiterstatemachine5D4a9df0 == null) { throw new Error(`A combination of conditions caused 'providerwaiterstatemachine5D4a9df0' to be undefined. Fixit.`); }
    const providerframeworkonEvent83C1d0a7 = new lambda.CfnFunction(this, 'ProviderframeworkonEvent83C1D0A7', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (aws-cdk-eks-cluster-alb-controller/@aws-cdk--aws-eks.ClusterResourceProvider/Provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': onEventHandler42Bebae0.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': isCompleteHandler7073F4da.attrArn,
          'WAITER_STATE_MACHINE_ARN': providerwaiterstatemachine5D4a9df0.ref,
        },
      },
      handler: 'framework.onEvent',
      role: providerframeworkonEventServiceRole9Ff04296.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRoleDefaultPolicy48Cd2133);
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRole9Ff04296);

    // Outputs
    this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderOnEventHandlerServiceRoleD37d32b7Arn = onEventHandlerServiceRole15A26729.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderOnEventHandlerServiceRoleD37D32B7Arn', {
      key: 'awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderOnEventHandlerServiceRoleD37D32B7Arn',
      value: this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderOnEventHandlerServiceRoleD37d32b7Arn!.toString(),
    });
    this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderIsCompleteHandlerServiceRole75085195Arn = isCompleteHandlerServiceRole5810Cc58.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderIsCompleteHandlerServiceRole75085195Arn', {
      key: 'awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderIsCompleteHandlerServiceRole75085195Arn',
      value: this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderIsCompleteHandlerServiceRole75085195Arn!.toString(),
    });
    this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderframeworkonEvent9A4dbd44Arn = providerframeworkonEvent83C1d0a7.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderframeworkonEvent9A4DBD44Arn', {
      key: 'awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderframeworkonEvent9A4DBD44Arn',
      value: this.awscdkeksclusteralbcontrollerawscdkawseksClusterResourceProviderframeworkonEvent9A4dbd44Arn!.toString(),
    });
  }
}

