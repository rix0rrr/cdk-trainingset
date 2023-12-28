import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface Cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovider02396C99NestedProps extends cdk.StackProps {
}

export class Cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovider02396C99Nested extends cdk.Stack {
  public readonly cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovideramplifyassetdeploymenthandlerproviderframeworkonEventC3c43e44Arn;

  public constructor(scope: cdk.App, id: string, props: Cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovider02396C99NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e = new iam.CfnRole(this, 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDDB7490E', {
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

    const amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f = new iam.CfnRole(this, 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19D99F', {
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

    const amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81 = new iam.CfnRole(this, 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3CF0B81', {
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

    const amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4bdac97 = new logs.CfnLogGroup(this, 'amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4BDAC97', {
      retentionInDays: 731,
    });
    amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4bdac97.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb = new iam.CfnRole(this, 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014FC0BB', {
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

    const amplifyassetdeploymentiscompleteServiceRole007B2ab6 = new iam.CfnRole(this, 'amplifyassetdeploymentiscompleteServiceRole007B2AB6', {
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

    const amplifyassetdeploymentoneventServiceRoleB6658cd9 = new iam.CfnRole(this, 'amplifyassetdeploymentoneventServiceRoleB6658CD9', {
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

    if (amplifyassetdeploymentiscompleteServiceRole007B2ab6 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscompleteServiceRole007B2ab6' to be undefined. Fixit.`); }
    const amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0d08321 = new iam.CfnPolicy(this, 'amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0D08321', {
      policyDocument: {
        Statement: [
          {
            Action: 'amplify:GetJob*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0D08321',
      roles: [
        amplifyassetdeploymentiscompleteServiceRole007B2ab6.ref,
      ],
    });

    if (amplifyassetdeploymentoneventServiceRoleB6658cd9 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentoneventServiceRoleB6658cd9' to be undefined. Fixit.`); }
    const amplifyassetdeploymentoneventServiceRoleDefaultPolicy2Df60b3e = new iam.CfnPolicy(this, 'amplifyassetdeploymentoneventServiceRoleDefaultPolicy2DF60B3E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'amplify:ListJobs',
              'amplify:StartDeployment',
              's3:GetObject',
              's3:GetSignedUrl',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'amplifyassetdeploymentoneventServiceRoleDefaultPolicy2DF60B3E',
      roles: [
        amplifyassetdeploymentoneventServiceRoleB6658cd9.ref,
      ],
    });

    if (amplifyassetdeploymentiscompleteServiceRole007B2ab6 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscompleteServiceRole007B2ab6' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0d08321 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0d08321' to be undefined. Fixit.`); }
    const amplifyassetdeploymentiscomplete236D9453 = new lambda.CfnFunction(this, 'amplifyassetdeploymentiscomplete236D9453', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f1cd1efb56dda0c089bb165da8d17672c95bee7815d051d25ee7d1934cc99640.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.isComplete',
      role: amplifyassetdeploymentiscompleteServiceRole007B2ab6.attrArn,
      runtime: 'nodejs18.x',
    });
    amplifyassetdeploymentiscomplete236D9453.addDependency(amplifyassetdeploymentiscompleteServiceRoleDefaultPolicyC0d08321);
    amplifyassetdeploymentiscomplete236D9453.addDependency(amplifyassetdeploymentiscompleteServiceRole007B2ab6);

    if (amplifyassetdeploymentoneventServiceRoleB6658cd9 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentoneventServiceRoleB6658cd9' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentoneventServiceRoleDefaultPolicy2Df60b3e == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentoneventServiceRoleDefaultPolicy2Df60b3e' to be undefined. Fixit.`); }
    const amplifyassetdeploymentonevent974704Da = new lambda.CfnFunction(this, 'amplifyassetdeploymentonevent974704DA', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'f1cd1efb56dda0c089bb165da8d17672c95bee7815d051d25ee7d1934cc99640.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.onEvent',
      role: amplifyassetdeploymentoneventServiceRoleB6658cd9.attrArn,
      runtime: 'nodejs18.x',
    });
    amplifyassetdeploymentonevent974704Da.addDependency(amplifyassetdeploymentoneventServiceRoleDefaultPolicy2Df60b3e);
    amplifyassetdeploymentonevent974704Da.addDependency(amplifyassetdeploymentoneventServiceRoleB6658cd9);

    if (amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7e0eb = new iam.CfnPolicy(this, 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7E0EB', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              amplifyassetdeploymentiscomplete236D9453.attrArn,
              amplifyassetdeploymentonevent974704Da.attrArn,
              [
                amplifyassetdeploymentiscomplete236D9453.attrArn,
                ':*',
              ].join(''),
              [
                amplifyassetdeploymentonevent974704Da.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7E0EB',
      roles: [
        amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e.ref,
      ],
    });

    if (amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1f3 = new iam.CfnPolicy(this, 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1F3', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              amplifyassetdeploymentiscomplete236D9453.attrArn,
              amplifyassetdeploymentonevent974704Da.attrArn,
              [
                amplifyassetdeploymentiscomplete236D9453.attrArn,
                ':*',
              ].join(''),
              [
                amplifyassetdeploymentonevent974704Da.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1F3',
      roles: [
        amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81.ref,
      ],
    });

    if (amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7e0eb == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7e0eb' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873 = new lambda.CfnFunction(this, 'amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - isComplete (cdk-amplify-app-asset-deployment/com.amazonaws.cdk.custom-resources.amplify-asset-deployment-provider/amplify-asset-deployment-handler-provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': amplifyassetdeploymentonevent974704Da.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': amplifyassetdeploymentiscomplete236D9453.attrArn,
        },
      },
      handler: 'framework.isComplete',
      role: amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873.addDependency(amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDefaultPolicy59E7e0eb);
    amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873.addDependency(amplifyassetdeploymenthandlerproviderframeworkisCompleteServiceRoleDdb7490e);

    if (amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1f3 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1f3' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70 = new lambda.CfnFunction(this, 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14D3B70', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onTimeout (cdk-amplify-app-asset-deployment/com.amazonaws.cdk.custom-resources.amplify-asset-deployment-provider/amplify-asset-deployment-handler-provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': amplifyassetdeploymentonevent974704Da.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': amplifyassetdeploymentiscomplete236D9453.attrArn,
        },
      },
      handler: 'framework.onTimeout',
      role: amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70.addDependency(amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleDefaultPolicy9257A1f3);
    amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70.addDependency(amplifyassetdeploymenthandlerproviderframeworkonTimeoutServiceRoleE3cf0b81);

    if (amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAe36e156 = new iam.CfnPolicy(this, 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAE36E156', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873.attrArn,
              amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70.attrArn,
              [
                amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873.attrArn,
                ':*',
              ].join(''),
              [
                amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70.attrArn,
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
      policyName: 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAE36E156',
      roles: [
        amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb.ref,
      ],
    });

    if (amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4bdac97 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4bdac97' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAe36e156 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAe36e156' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe = new stepfunctions.CfnStateMachine(this, 'amplifyassetdeploymenthandlerproviderwaiterstatemachineB3C2FCBE', {
      definitionString: [
        '{\"StartAt\":\"framework-isComplete-task\",\"States\":{\"framework-isComplete-task\":{\"End\":true,\"Retry\":[{\"ErrorEquals\":[\"States.ALL\"],\"IntervalSeconds\":5,\"MaxAttempts\":60,\"BackoffRate\":1}],\"Catch\":[{\"ErrorEquals\":[\"States.ALL\"],\"Next\":\"framework-onTimeout-task\"}],\"Type\":\"Task\",\"Resource\":\"',
        amplifyassetdeploymenthandlerproviderframeworkisComplete2A696873.attrArn,
        '\"},\"framework-onTimeout-task\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"',
        amplifyassetdeploymenthandlerproviderframeworkonTimeoutF14d3b70.attrArn,
        '\"}}}',
      ].join(''),
      loggingConfiguration: {
        destinations: [
          {
            cloudWatchLogsLogGroup: {
              logGroupArn: amplifyassetdeploymenthandlerproviderwaiterstatemachineLogGroupC4bdac97.attrArn,
            },
          },
        ],
        includeExecutionData: false,
        level: 'ERROR',
      },
      roleArn: amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb.attrArn,
    });
    amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe.addDependency(amplifyassetdeploymenthandlerproviderwaiterstatemachineRoleDefaultPolicyAe36e156);
    amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe.addDependency(amplifyassetdeploymenthandlerproviderwaiterstatemachineRole014Fc0bb);

    if (amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166d14 = new iam.CfnPolicy(this, 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166D14', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              amplifyassetdeploymentiscomplete236D9453.attrArn,
              amplifyassetdeploymentonevent974704Da.attrArn,
              [
                amplifyassetdeploymentiscomplete236D9453.attrArn,
                ':*',
              ].join(''),
              [
                amplifyassetdeploymentonevent974704Da.attrArn,
                ':*',
              ].join(''),
            ],
          },
          {
            Action: 'states:StartExecution',
            Effect: 'Allow',
            Resource: amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166D14',
      roles: [
        amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f.ref,
      ],
    });

    if (amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166d14 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166d14' to be undefined. Fixit.`); }
    if (amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentiscomplete236D9453 == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentiscomplete236D9453' to be undefined. Fixit.`); }
    if (amplifyassetdeploymentonevent974704Da == null) { throw new Error(`A combination of conditions caused 'amplifyassetdeploymentonevent974704Da' to be undefined. Fixit.`); }
    const amplifyassetdeploymenthandlerproviderframeworkonEvent35Ffcb5c = new lambda.CfnFunction(this, 'amplifyassetdeploymenthandlerproviderframeworkonEvent35FFCB5C', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (cdk-amplify-app-asset-deployment/com.amazonaws.cdk.custom-resources.amplify-asset-deployment-provider/amplify-asset-deployment-handler-provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': amplifyassetdeploymentonevent974704Da.attrArn,
          'USER_IS_COMPLETE_FUNCTION_ARN': amplifyassetdeploymentiscomplete236D9453.attrArn,
          'WAITER_STATE_MACHINE_ARN': amplifyassetdeploymenthandlerproviderwaiterstatemachineB3c2fcbe.ref,
        },
      },
      handler: 'framework.onEvent',
      role: amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    amplifyassetdeploymenthandlerproviderframeworkonEvent35Ffcb5c.addDependency(amplifyassetdeploymenthandlerproviderframeworkonEventServiceRoleDefaultPolicy1E166d14);
    amplifyassetdeploymenthandlerproviderframeworkonEvent35Ffcb5c.addDependency(amplifyassetdeploymenthandlerproviderframeworkonEventServiceRole8F19d99f);

    // Outputs
    this.cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovideramplifyassetdeploymenthandlerproviderframeworkonEventC3c43e44Arn = amplifyassetdeploymenthandlerproviderframeworkonEvent35Ffcb5c.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputcdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovideramplifyassetdeploymenthandlerproviderframeworkonEventC3C43E44Arn', {
      key: 'cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovideramplifyassetdeploymenthandlerproviderframeworkonEventC3C43E44Arn',
      value: this.cdkamplifyappassetdeploymentcomamazonawscdkcustomresourcesamplifyassetdeploymentprovideramplifyassetdeploymenthandlerproviderframeworkonEventC3c43e44Arn!.toString(),
    });
  }
}

