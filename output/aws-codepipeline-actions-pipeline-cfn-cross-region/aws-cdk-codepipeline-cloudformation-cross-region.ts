import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codepipeline-cloudformation-cross-regionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-cloudformation-cross-region extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-cloudformation-cross-regionProps = {}) {
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
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      versioningConfiguration: {
        status: 'Enabled',
      },
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myPipelineCfncfnDeployCodePipelineActionRole31B1904c = new iam.CfnRole(this, 'MyPipelineCFNCFNDeployCodePipelineActionRole31B1904C', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:aws:iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineCfncfnDeployRole9Cc99b3f = new iam.CfnRole(this, 'MyPipelineCFNCFNDeployRole9CC99B3F', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudformation.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineRoleC0d47ca4 = new iam.CfnRole(this, 'MyPipelineRoleC0D47CA4', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codepipeline.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineSourceS3CodePipelineActionRole9F003087 = new iam.CfnRole(this, 'MyPipelineSourceS3CodePipelineActionRole9F003087', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:aws:iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployCodePipelineActionRole31B1904c == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployCodePipelineActionRole31B1904c' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployRole9Cc99b3f == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployRole9Cc99b3f' to be undefined. Fixit.`); }
    const myPipelineCfncfnDeployCodePipelineActionRoleDefaultPolicyD67537cb = new iam.CfnPolicy(this, 'MyPipelineCFNCFNDeployCodePipelineActionRoleDefaultPolicyD67537CB', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: myPipelineCfncfnDeployRole9Cc99b3f.attrArn,
          },
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'cloudformation:CreateStack',
              'cloudformation:DescribeStack*',
              'cloudformation:GetStackPolicy',
              'cloudformation:GetTemplate*',
              'cloudformation:SetStackPolicy',
              'cloudformation:UpdateStack',
              'cloudformation:ValidateTemplate',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:aws:cloudformation:us-west-2:',
              this.account,
              ':stack/aws-cdk-codepipeline-cross-region-deploy-stack/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineCFNCFNDeployCodePipelineActionRoleDefaultPolicyD67537CB',
      roles: [
        myPipelineCfncfnDeployCodePipelineActionRole31B1904c.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployRole9Cc99b3f == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployRole9Cc99b3f' to be undefined. Fixit.`); }
    const myPipelineCfncfnDeployRoleDefaultPolicy65876Ba0 = new iam.CfnPolicy(this, 'MyPipelineCFNCFNDeployRoleDefaultPolicy65876BA0', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineCFNCFNDeployRoleDefaultPolicy65876BA0',
      roles: [
        myPipelineCfncfnDeployRole9Cc99b3f.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployCodePipelineActionRole31B1904c == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployCodePipelineActionRole31B1904c' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineSourceS3CodePipelineActionRole9F003087 == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceS3CodePipelineActionRole9F003087' to be undefined. Fixit.`); }
    const myPipelineRoleDefaultPolicy34F09efa = new iam.CfnPolicy(this, 'MyPipelineRoleDefaultPolicy34F09EFA', {
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
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Resource: [
              myPipelineCfncfnDeployCodePipelineActionRole31B1904c.attrArn,
              myPipelineSourceS3CodePipelineActionRole9F003087.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineRoleDefaultPolicy34F09EFA',
      roles: [
        myPipelineRoleC0d47ca4.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineSourceS3CodePipelineActionRole9F003087 == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceS3CodePipelineActionRole9F003087' to be undefined. Fixit.`); }
    const myPipelineSourceS3CodePipelineActionRoleDefaultPolicyF838ee0b = new iam.CfnPolicy(this, 'MyPipelineSourceS3CodePipelineActionRoleDefaultPolicyF838EE0B', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/some/path',
              ].join(''),
            ],
          },
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              myBucketF68f3ff0.attrArn,
              [
                myBucketF68f3ff0.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineSourceS3CodePipelineActionRoleDefaultPolicyF838EE0B',
      roles: [
        myPipelineSourceS3CodePipelineActionRole9F003087.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployCodePipelineActionRole31B1904c == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployCodePipelineActionRole31B1904c' to be undefined. Fixit.`); }
    if (myPipelineCfncfnDeployRole9Cc99b3f == null) { throw new Error(`A combination of conditions caused 'myPipelineCfncfnDeployRole9Cc99b3f' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineRoleDefaultPolicy34F09efa == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleDefaultPolicy34F09efa' to be undefined. Fixit.`); }
    if (myPipelineSourceS3CodePipelineActionRole9F003087 == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceS3CodePipelineActionRole9F003087' to be undefined. Fixit.`); }
    const myPipelineAed38ecf = new codepipeline.CfnPipeline(this, 'MyPipelineAED38ECF', {
      roleArn: myPipelineRoleC0d47ca4.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'S3',
                version: '1',
              },
              configuration: {
                S3Bucket: myBucketF68f3ff0.ref,
                S3ObjectKey: 'some/path',
              },
              name: 'S3',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              roleArn: myPipelineSourceS3CodePipelineActionRole9F003087.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Source',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Deploy',
                owner: 'AWS',
                provider: 'CloudFormation',
                version: '1',
              },
              configuration: {
                StackName: 'aws-cdk-codepipeline-cross-region-deploy-stack',
                RoleArn: myPipelineCfncfnDeployRole9Cc99b3f.attrArn,
                ActionMode: 'CREATE_UPDATE',
                TemplatePath: 'Artifact_Source_S3::template.yml',
              },
              inputArtifacts: [
                {
                  name: 'Artifact_Source_S3',
                },
              ],
              name: 'CFN_Deploy',
              region: 'us-west-2',
              roleArn: myPipelineCfncfnDeployCodePipelineActionRole31B1904c.attrArn,
              runOrder: 1,
            },
          ],
          name: 'CFN',
        },
      ],
      artifactStores: [
        {
          artifactStore: {
            location: myBucketF68f3ff0.ref,
            type: 'S3',
          },
          region: 'us-west-2',
        },
      ],
    });
    myPipelineAed38ecf.addDependency(myPipelineRoleDefaultPolicy34F09efa);
    myPipelineAed38ecf.addDependency(myPipelineRoleC0d47ca4);
  }
}

