import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkCodebuildProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodebuild extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodebuildProps = {}) {
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
    const cacheBucket41D9d0b0 = new s3.CfnBucket(this, 'CacheBucket41D9D0B0', {
    });
    cacheBucket41D9d0b0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (cacheBucket41D9d0b0 == null) { throw new Error(`A combination of conditions caused 'cacheBucket41D9d0b0' to be undefined. Fixit.`); }
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
        buildSpec: '{\n  \"build\": {\n    \"commands\": [\n      \"echo Hello\"\n    ]\n  },\n  \"cache\": {\n    \"paths\": [\n      \"/root/.cache/pip/**/*\"\n    ]\n  }\n}',
        type: 'NO_SOURCE',
      },
      cache: {
        location: [
          cacheBucket41D9d0b0.ref,
          undefined,
        ].join('/'),
        type: 'S3',
      },
      encryptionKey: 'alias/aws/s3',
    });

    if (cacheBucket41D9d0b0 == null) { throw new Error(`A combination of conditions caused 'cacheBucket41D9d0b0' to be undefined. Fixit.`); }
    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    const myProjectRoleDefaultPolicyB19b7c29 = new iam.CfnPolicy(this, 'MyProjectRoleDefaultPolicyB19B7C29', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              cacheBucket41D9d0b0.attrArn,
              [
                cacheBucket41D9d0b0.attrArn,
                '/*',
              ].join(''),
            ],
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

