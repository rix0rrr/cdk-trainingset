import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkCodebuildEventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodebuildEvents extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodebuildEventsProps = {}) {
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
    const deadLetterQueue9F481546 = new sqs.CfnQueue(this, 'DeadLetterQueue9F481546', {
    });
    deadLetterQueue9F481546.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myProjectEventsRole5B7d93f5 = new iam.CfnRole(this, 'MyProjectEventsRole5B7D93F5', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myProjectRole9Bbe5233 = new iam.CfnRole(this, 'MyProjectRole9BBE5233', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codebuild.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myQueueE6ca6235 = new sqs.CfnQueue(this, 'MyQueueE6CA6235', {
    });
    myQueueE6ca6235.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myRepoF4f48043 = new codecommit.CfnRepository(this, 'MyRepoF4F48043', {
      repositoryName: 'aws-cdk-codebuild-events',
    });

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    const myProject39F7b0ae = new codebuild.CfnProject(this, 'MyProject39F7B0AE', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: myProjectRole9Bbe5233.attrArn,
      source: {
        location: myRepoF4f48043.attrCloneUrlHttp,
        type: 'CODECOMMIT',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myQueuePolicy6Bbeddac = new sqs.CfnQueuePolicy(this, 'MyQueuePolicy6BBEDDAC', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myTopic86869434.ref,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'sns.amazonaws.com',
            },
            Resource: myQueueE6ca6235.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        myQueueE6ca6235.ref,
      ],
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myTopicPolicy12A5ec17 = new sns.CfnTopicPolicy(this, 'MyTopicPolicy12A5EC17', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: myTopic86869434.ref,
            Sid: '0',
          },
        ],
        Version: '2012-10-17',
      },
      topics: [
        myTopic86869434.ref,
      ],
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectEventsRole5B7d93f5 == null) { throw new Error(`A combination of conditions caused 'myProjectEventsRole5B7d93f5' to be undefined. Fixit.`); }
    const myProjectEventsRoleDefaultPolicy397Dcbf8 = new iam.CfnPolicy(this, 'MyProjectEventsRoleDefaultPolicy397DCBF8', {
      policyDocument: {
        Statement: [
          {
            Action: 'codebuild:StartBuild',
            Effect: 'Allow',
            Resource: myProject39F7b0ae.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyProjectEventsRoleDefaultPolicy397DCBF8',
      roles: [
        myProjectEventsRole5B7d93f5.ref,
      ],
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myProjectPhaseChangeCe6728a3 = new events.CfnRule(this, 'MyProjectPhaseChangeCE6728A3', {
      eventPattern: {
        source: [
          'aws.codebuild',
        ],
        detail: {
          'project-name': [
            myProject39F7b0ae.ref,
          ],
        },
        'detail-type': [
          'CodeBuild Build Phase Change',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
          inputTransformer: {
            inputPathsMap: {
              'detail-completed-phase': '$.detail.completed-phase',
            },
            inputTemplate: '\"Build phase changed to <detail-completed-phase>\"',
          },
        },
      ],
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    const myProjectRoleDefaultPolicyB19b7c29 = new iam.CfnPolicy(this, 'MyProjectRoleDefaultPolicyB19B7C29', {
      policyDocument: {
        Statement: [
          {
            Action: 'codecommit:GitPull',
            Effect: 'Allow',
            Resource: myRepoF4f48043.attrArn,
          },
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                myProject39F7b0ae.ref,
                ':*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                myProject39F7b0ae.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              'codebuild:BatchPutCodeCoverages',
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:CreateReportGroup',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codebuild:',
              this.region,
              ':',
              this.account,
              ':report-group/',
              myProject39F7b0ae.ref,
              '-*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyProjectRoleDefaultPolicyB19B7C29',
      roles: [
        myProjectRole9Bbe5233.ref,
      ],
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myProjectStateChange2Dab75b7 = new events.CfnRule(this, 'MyProjectStateChange2DAB75B7', {
      eventPattern: {
        source: [
          'aws.codebuild',
        ],
        detail: {
          'project-name': [
            myProject39F7b0ae.ref,
          ],
        },
        'detail-type': [
          'CodeBuild Build State Change',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myTopic86869434.ref,
          id: 'Target0',
        },
      ],
    });

    if (myQueueE6ca6235 == null) { throw new Error(`A combination of conditions caused 'myQueueE6ca6235' to be undefined. Fixit.`); }
    if (myQueuePolicy6Bbeddac == null) { throw new Error(`A combination of conditions caused 'myQueuePolicy6Bbeddac' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myQueueawscdkcodebuildeventsMyTopic550011Dcf72de3ed = new sns.CfnSubscription(this, 'MyQueueawscdkcodebuildeventsMyTopic550011DCF72DE3ED', {
      protocol: 'sqs',
      topicArn: myTopic86869434.ref,
      endpoint: myQueueE6ca6235.attrArn,
    });
    myQueueawscdkcodebuildeventsMyTopic550011Dcf72de3ed.addDependency(myQueuePolicy6Bbeddac);

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectEventsRole5B7d93f5 == null) { throw new Error(`A combination of conditions caused 'myProjectEventsRole5B7d93f5' to be undefined. Fixit.`); }
    if (myRepoF4f48043 == null) { throw new Error(`A combination of conditions caused 'myRepoF4f48043' to be undefined. Fixit.`); }
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myRepoOnCommit0E80b304 = new events.CfnRule(this, 'MyRepoOnCommit0E80B304', {
      eventPattern: {
        source: [
          'aws.codecommit',
        ],
        resources: [
          myRepoF4f48043.attrArn,
        ],
        'detail-type': [
          'CodeCommit Repository State Change',
        ],
        detail: {
          event: [
            'referenceCreated',
            'referenceUpdated',
          ],
          referenceName: [
            'master',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: myProject39F7b0ae.attrArn,
          deadLetterConfig: {
            arn: deadLetterQueue9F481546.attrArn,
          },
          id: 'Target0',
          retryPolicy: {
            maximumEventAgeInSeconds: 7200,
            maximumRetryAttempts: 2,
          },
          roleArn: myProjectEventsRole5B7d93f5.attrArn,
        },
        {
          arn: myTopic86869434.ref,
          id: 'Target1',
          inputTransformer: {
            inputPathsMap: {
              'detail-repositoryName': '$.detail.repositoryName',
              'detail-referenceName': '$.detail.referenceName',
            },
            inputTemplate: '\"A commit was pushed to the repository <detail-repositoryName> on branch <detail-referenceName>\"',
          },
        },
      ],
    });

    if (deadLetterQueue9F481546 == null) { throw new Error(`A combination of conditions caused 'deadLetterQueue9F481546' to be undefined. Fixit.`); }
    if (myRepoOnCommit0E80b304 == null) { throw new Error(`A combination of conditions caused 'myRepoOnCommit0E80b304' to be undefined. Fixit.`); }
    const deadLetterQueuePolicyB1fb890c = new sqs.CfnQueuePolicy(this, 'DeadLetterQueuePolicyB1FB890C', {
      policyDocument: {
        Statement: [
          {
            Action: 'sqs:SendMessage',
            Condition: {
              ArnEquals: {
                'aws:SourceArn': myRepoOnCommit0E80b304.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'events.amazonaws.com',
            },
            Resource: deadLetterQueue9F481546.attrArn,
            Sid: 'AllowEventRuleawscdkcodebuildeventsMyRepoOnCommit0ED1137A',
          },
        ],
        Version: '2012-10-17',
      },
      queues: [
        deadLetterQueue9F481546.ref,
      ],
    });
  }
}

