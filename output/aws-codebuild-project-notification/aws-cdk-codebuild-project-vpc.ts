import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codestarnotifications from 'aws-cdk-lib/aws-codestarnotifications';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface aws-cdk-codebuild-project-vpcProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codebuild-project-vpc extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codebuild-project-vpcProps = {}) {
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

    const myTopic86869434 = new sns.CfnTopic(this, 'MyTopic86869434', {
    });

    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
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
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"echo \\\"Nothing to do!\\\"\"\n      ]\n    }\n  }\n}',
        type: 'NO_SOURCE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myTopicPolicy12A5ec17 = new sns.CfnTopicPolicy(this, 'MyTopicPolicy12A5EC17', {
      policyDocument: {
        Statement: [
          {
            Action: 'sns:Publish',
            Effect: 'Allow',
            Principal: {
              Service: 'codestar-notifications.amazonaws.com',
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
    if (myTopic86869434 == null) { throw new Error(`A combination of conditions caused 'myTopic86869434' to be undefined. Fixit.`); }
    const myProjectNotifyOnBuildSucceeded225C467f = new codestarnotifications.CfnNotificationRule(this, 'MyProjectNotifyOnBuildSucceeded225C467F', {
      detailType: 'FULL',
      eventTypeIds: [
        'codebuild-project-build-state-succeeded',
      ],
      name: 'awscdkcodebuildprojectvpcMyProjectNotifyOnBuildSucceeded3BC28121',
      resource: myProject39F7b0ae.attrArn,
      targets: [
        {
          targetAddress: myTopic86869434.ref,
          targetType: 'SNS',
        },
      ],
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    const myProjectRoleDefaultPolicyB19b7c29 = new iam.CfnPolicy(this, 'MyProjectRoleDefaultPolicyB19B7C29', {
      policyDocument: {
        Statement: [
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
  }
}

