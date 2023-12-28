import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-deep-learning-container-build-imageProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-deep-learning-container-build-image extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-deep-learning-container-build-imageProps = {}) {
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

    // Mappings
    const dlcRepositoryAccountMap: Record<string, Record<string, string>> = {
      'ap-east-1': {
        'value': '871362719292',
      },
      'ap-northeast-1': {
        'value': '763104351884',
      },
      'ap-northeast-2': {
        'value': '763104351884',
      },
      'ap-south-1': {
        'value': '763104351884',
      },
      'ap-southeast-1': {
        'value': '763104351884',
      },
      'ap-southeast-2': {
        'value': '763104351884',
      },
      'ca-central-1': {
        'value': '763104351884',
      },
      'cn-north-1': {
        'value': '727897471807',
      },
      'cn-northwest-1': {
        'value': '727897471807',
      },
      'eu-central-1': {
        'value': '763104351884',
      },
      'eu-north-1': {
        'value': '763104351884',
      },
      'eu-west-1': {
        'value': '763104351884',
      },
      'eu-west-2': {
        'value': '763104351884',
      },
      'eu-west-3': {
        'value': '763104351884',
      },
      'me-south-1': {
        'value': '217643126080',
      },
      'sa-east-1': {
        'value': '763104351884',
      },
      'us-east-1': {
        'value': '763104351884',
      },
      'us-east-2': {
        'value': '763104351884',
      },
      'us-west-1': {
        'value': '763104351884',
      },
      'us-west-2': {
        'value': '763104351884',
      },
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

    if (projectRole4Ccb274e == null) { throw new Error(`A combination of conditions caused 'projectRole4Ccb274e' to be undefined. Fixit.`); }
    const projectC78d97ad = new codebuild.CfnProject(this, 'ProjectC78D97AD', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_LARGE',
        image: [
          dlcRepositoryAccountMap[this.region]['value'],
          '.dkr.ecr.',
          this.region,
          '.',
          this.urlSuffix,
          '/mxnet-training:1.4.1-gpu-py36-cu100-ubuntu16.04',
        ].join(''),
        imagePullCredentialsType: 'SERVICE_ROLE',
        privilegedMode: false,
        type: 'LINUX_GPU_CONTAINER',
      },
      serviceRole: projectRole4Ccb274e.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\",\n  \"phases\": {\n    \"build\": {\n      \"commands\": [\n        \"ls\"\n      ]\n    }\n  }\n}',
        type: 'NO_SOURCE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
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
              dlcRepositoryAccountMap[this.region]['value'],
              ':repository/mxnet-training',
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
      policyName: 'ProjectRoleDefaultPolicy7F29461B',
      roles: [
        projectRole4Ccb274e.ref,
      ],
    });
  }
}

