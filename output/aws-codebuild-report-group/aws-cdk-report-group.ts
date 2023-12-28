import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkReportGroupProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkReportGroup extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkReportGroupProps = {}) {
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
    const coverageReportGroupE23151cf = new codebuild.CfnReportGroup(this, 'CoverageReportGroupE23151CF', {
      exportConfig: {
        exportConfigType: 'NO_EXPORT',
      },
      type: 'CODE_COVERAGE',
    });
    coverageReportGroupE23151cf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    const testReportGroup1F49a500 = new codebuild.CfnReportGroup(this, 'TestReportGroup1F49A500', {
      exportConfig: {
        exportConfigType: 'NO_EXPORT',
      },
      type: 'TEST',
    });
    testReportGroup1F49a500.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (coverageReportGroupE23151cf == null) { throw new Error(`A combination of conditions caused 'coverageReportGroupE23151cf' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (testReportGroup1F49a500 == null) { throw new Error(`A combination of conditions caused 'testReportGroup1F49a500' to be undefined. Fixit.`); }
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
        buildSpec: [
          '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"echo \\\"Nothing to do!\\\"\"\n      ]\n    }\n  },\n  \"reports\": {\n    \"',
          testReportGroup1F49a500.attrArn,
          '\": {\n      \"base-directory\": \"test-reports\",\n      \"file-format\": \"JUNITXML\",\n      \"files\": [\n        \"**/*\"\n      ]\n    },\n    \"',
          coverageReportGroupE23151cf.attrArn,
          '\": {\n      \"base-directory\": \"coverage\",\n      \"file-format\": \"CLOVERXML\",\n      \"files\": [\n        \"clover.xml\"\n      ]\n    }\n  }\n}',
        ].join(''),
        type: 'NO_SOURCE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (coverageReportGroupE23151cf == null) { throw new Error(`A combination of conditions caused 'coverageReportGroupE23151cf' to be undefined. Fixit.`); }
    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (testReportGroup1F49a500 == null) { throw new Error(`A combination of conditions caused 'testReportGroup1F49a500' to be undefined. Fixit.`); }
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
              'codebuild:CreateReport',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: coverageReportGroupE23151cf.attrArn,
          },
          {
            Action: [
              'codebuild:BatchPutTestCases',
              'codebuild:CreateReport',
              'codebuild:UpdateReport',
            ],
            Effect: 'Allow',
            Resource: testReportGroup1F49a500.attrArn,
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

