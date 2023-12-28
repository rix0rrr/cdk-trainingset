import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-codepipeline-ecr-sourceProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codepipeline-ecr-source extends cdk.Stack {
  public readonly loginCommand;
  public readonly pushCommand;
  public readonly pipelineConsoleLink;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-codepipeline-ecr-sourceProps = {}) {
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
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myEcrRepo767466D0 = new ecr.CfnRepository(this, 'MyEcrRepo767466D0', {
    });
    myEcrRepo767466D0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myPipelineApproveManualApprovalCodePipelineActionRole9E338f01 = new iam.CfnRole(this, 'MyPipelineApproveManualApprovalCodePipelineActionRole9E338F01', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myPipelineEventsRoleFab99f32 = new iam.CfnRole(this, 'MyPipelineEventsRoleFAB99F32', {
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

    const myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee = new iam.CfnRole(this, 'MyPipelineSourceECRSourceCodePipelineActionRole4C6714EE', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
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
    if (myPipelineApproveManualApprovalCodePipelineActionRole9E338f01 == null) { throw new Error(`A combination of conditions caused 'myPipelineApproveManualApprovalCodePipelineActionRole9E338f01' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee' to be undefined. Fixit.`); }
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
              myPipelineApproveManualApprovalCodePipelineActionRole9E338f01.attrArn,
              myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee.attrArn,
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
    if (myEcrRepo767466D0 == null) { throw new Error(`A combination of conditions caused 'myEcrRepo767466D0' to be undefined. Fixit.`); }
    if (myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee' to be undefined. Fixit.`); }
    const myPipelineSourceEcrSourceCodePipelineActionRoleDefaultPolicy7646B7fe = new iam.CfnPolicy(this, 'MyPipelineSourceECRSourceCodePipelineActionRoleDefaultPolicy7646B7FE', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecr:DescribeImages',
            Effect: 'Allow',
            Resource: myEcrRepo767466D0.attrArn,
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
      policyName: 'MyPipelineSourceECRSourceCodePipelineActionRoleDefaultPolicy7646B7FE',
      roles: [
        myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (myEcrRepo767466D0 == null) { throw new Error(`A combination of conditions caused 'myEcrRepo767466D0' to be undefined. Fixit.`); }
    if (myPipelineApproveManualApprovalCodePipelineActionRole9E338f01 == null) { throw new Error(`A combination of conditions caused 'myPipelineApproveManualApprovalCodePipelineActionRole9E338f01' to be undefined. Fixit.`); }
    if (myPipelineRoleC0d47ca4 == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleC0d47ca4' to be undefined. Fixit.`); }
    if (myPipelineRoleDefaultPolicy34F09efa == null) { throw new Error(`A combination of conditions caused 'myPipelineRoleDefaultPolicy34F09efa' to be undefined. Fixit.`); }
    if (myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee == null) { throw new Error(`A combination of conditions caused 'myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee' to be undefined. Fixit.`); }
    const myPipelineAed38ecf = new codepipeline.CfnPipeline(this, 'MyPipelineAED38ECF', {
      roleArn: myPipelineRoleC0d47ca4.attrArn,
      stages: [
        {
          actions: [
            {
              actionTypeId: {
                category: 'Source',
                owner: 'AWS',
                provider: 'ECR',
                version: '1',
              },
              configuration: {
                RepositoryName: myEcrRepo767466D0.ref,
              },
              name: 'ECR_Source',
              outputArtifacts: [
                {
                  name: 'Artifact_Source_ECR_Source',
                },
              ],
              roleArn: myPipelineSourceEcrSourceCodePipelineActionRole4C6714ee.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Source',
        },
        {
          actions: [
            {
              actionTypeId: {
                category: 'Approval',
                owner: 'AWS',
                provider: 'Manual',
                version: '1',
              },
              name: 'ManualApproval',
              roleArn: myPipelineApproveManualApprovalCodePipelineActionRole9E338f01.attrArn,
              runOrder: 1,
            },
          ],
          name: 'Approve',
        },
      ],
      artifactStore: {
        location: myBucketF68f3ff0.ref,
        type: 'S3',
      },
    });
    myPipelineAed38ecf.addDependency(myPipelineRoleDefaultPolicy34F09efa);
    myPipelineAed38ecf.addDependency(myPipelineRoleC0d47ca4);

    if (myPipelineAed38ecf == null) { throw new Error(`A combination of conditions caused 'myPipelineAed38ecf' to be undefined. Fixit.`); }
    if (myPipelineEventsRoleFab99f32 == null) { throw new Error(`A combination of conditions caused 'myPipelineEventsRoleFab99f32' to be undefined. Fixit.`); }
    const myPipelineEventsRoleDefaultPolicyF045f033 = new iam.CfnPolicy(this, 'MyPipelineEventsRoleDefaultPolicyF045F033', {
      policyDocument: {
        Statement: [
          {
            Action: 'codepipeline:StartPipelineExecution',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':codepipeline:',
              this.region,
              ':',
              this.account,
              ':',
              myPipelineAed38ecf.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPipelineEventsRoleDefaultPolicyF045F033',
      roles: [
        myPipelineEventsRoleFab99f32.ref,
      ],
    });

    if (myEcrRepo767466D0 == null) { throw new Error(`A combination of conditions caused 'myEcrRepo767466D0' to be undefined. Fixit.`); }
    if (myPipelineAed38ecf == null) { throw new Error(`A combination of conditions caused 'myPipelineAed38ecf' to be undefined. Fixit.`); }
    if (myPipelineEventsRoleFab99f32 == null) { throw new Error(`A combination of conditions caused 'myPipelineEventsRoleFab99f32' to be undefined. Fixit.`); }
    const myPipelineSourceEcrSourceawscdkcodepipelineecrsourceMyPipeline63Cf3194SourceEventRuleF3b28b14 = new events.CfnRule(this, 'MyPipelineSourceECRSourceawscdkcodepipelineecrsourceMyPipeline63CF3194SourceEventRuleF3B28B14', {
      eventPattern: {
        'detail-type': [
          'ECR Image Action',
        ],
        source: [
          'aws.ecr',
        ],
        detail: {
          result: [
            'SUCCESS',
          ],
          'repository-name': [
            myEcrRepo767466D0.ref,
          ],
          'image-tag': [
            'latest',
          ],
          'action-type': [
            'PUSH',
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: [
            'arn:',
            this.partition,
            ':codepipeline:',
            this.region,
            ':',
            this.account,
            ':',
            myPipelineAed38ecf.ref,
          ].join(''),
          id: 'Target0',
          roleArn: myPipelineEventsRoleFab99f32.attrArn,
        },
      ],
    });

    // Outputs
    this.loginCommand = [
      'aws ecr get-login-password --region ',
      this.region,
      ' | docker login --username AWS --password-stdin ',
      this.account,
      '.dkr.ecr.',
      this.region,
      '.amazonaws.com',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputLoginCommand', {
      key: 'LoginCommand',
      value: this.loginCommand!.toString(),
    });
    this.pushCommand = [
      'docker tag public.ecr.aws/lambda/provided ',
      cdk.Fn.select(4, cdk.Fn.split(':', myEcrRepo767466D0.attrArn)),
      '.dkr.ecr.',
      cdk.Fn.select(3, cdk.Fn.split(':', myEcrRepo767466D0.attrArn)),
      '.',
      this.urlSuffix,
      '/',
      myEcrRepo767466D0.ref,
      ':latest && docker push ',
      cdk.Fn.select(4, cdk.Fn.split(':', myEcrRepo767466D0.attrArn)),
      '.dkr.ecr.',
      cdk.Fn.select(3, cdk.Fn.split(':', myEcrRepo767466D0.attrArn)),
      '.',
      this.urlSuffix,
      '/',
      myEcrRepo767466D0.ref,
      ':latest',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputPushCommand', {
      key: 'PushCommand',
      value: this.pushCommand!.toString(),
    });
    this.pipelineConsoleLink = [
      'https://',
      this.region,
      '.console.aws.amazon.com/codesuite/codepipeline/pipelines/',
      myPipelineAed38ecf.ref,
      '/view?region=',
      this.region,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputPipelineConsoleLink', {
      key: 'PipelineConsoleLink',
      value: this.pipelineConsoleLink!.toString(),
    });
  }
}

