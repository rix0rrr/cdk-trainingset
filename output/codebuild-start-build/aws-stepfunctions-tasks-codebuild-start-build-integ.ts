import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsTasksCodebuildStartBuildIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsTasksCodebuildStartBuildInteg extends cdk.Stack {
  public readonly projectName;
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsTasksCodebuildStartBuildIntegProps = {}) {
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
    const projectRole4Ccb274e = new iam.CfnRole(this, 'ProjectRole4CCB274E', {
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

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
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

    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectC78d97ad = new codebuild.CfnProject(this, 'ProjectC78D97AD', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        environmentVariables: [
          {
            name: 'zone',
            type: 'PLAINTEXT',
            value: 'defaultZone',
          },
        ],
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: false,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: projectRole4Ccb274e.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"echo \\\"Hello, CodeBuild!\\\"\"\n      ]\n    }\n  }\n}',
        type: 'NO_SOURCE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
      name: 'MyTestProject',
    });

    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectRoleDefaultPolicy7F29461b = new iam.CfnPolicy(this, 'ProjectRoleDefaultPolicy7F29461B', {
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
                projectC78d97ad.ref,
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
                projectC78d97ad.ref,
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
              projectC78d97ad.ref,
              '-*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProjectRoleDefaultPolicy7F29461B',
      roles: [
        projectRole4Ccb274e.ref,
      ],
    });

    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'codebuild:BatchGetBuilds',
              'codebuild:BatchGetReports',
              'codebuild:StartBuild',
              'codebuild:StopBuild',
            ],
            Effect: 'Allow',
            Resource: projectC78d97ad.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (projectC78d97ad == null) { throw new Error(`A combination of conditions caused 'projectC78d97ad' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"bar\":\"SomeValue\"},\"Next\":\"build-task\"},\"build-task\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::codebuild:startBuild\",\"Parameters\":{\"ProjectName\":\"',
        projectC78d97ad.ref,
        '\",\"EnvironmentVariablesOverride\":[{\"Name\":\"ZONE\",\"Type\":\"PLAINTEXT\",\"Value.$\":\"$.envVariables.zone\"}]}}}}',
      ].join(''),
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.projectName = projectC78d97ad.ref;
    new cdk.CfnOutput(this, 'CfnOutputProjectName', {
      key: 'ProjectName',
      value: this.projectName!.toString(),
    });
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineArn', {
      key: 'StateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

