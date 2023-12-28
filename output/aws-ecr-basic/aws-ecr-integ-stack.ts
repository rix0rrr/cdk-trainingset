import * as cdk from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-ecr-integ-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecr-integ-stack extends cdk.Stack {
  public readonly repositoryUri;

  public constructor(scope: cdk.App, id: string, props: aws-ecr-integ-stackProps = {}) {
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
    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    const repo02Ac86cf = new ecr.CfnRepository(this, 'Repo02AC86CF', {
      lifecyclePolicy: {
        lifecyclePolicyText: '{\"rules\":[{\"rulePriority\":1,\"selection\":{\"tagStatus\":\"tagged\",\"tagPrefixList\":[\"abc\"],\"countType\":\"imageCountMoreThan\",\"countNumber\":3},\"action\":{\"type\":\"expire\"}},{\"rulePriority\":2,\"selection\":{\"tagStatus\":\"tagged\",\"tagPatternList\":[\"abc*\"],\"countType\":\"imageCountMoreThan\",\"countNumber\":3},\"action\":{\"type\":\"expire\"}},{\"rulePriority\":3,\"selection\":{\"tagStatus\":\"any\",\"countType\":\"imageCountMoreThan\",\"countNumber\":5},\"action\":{\"type\":\"expire\"}}]}',
      },
      repositoryPolicyText: {
        Statement: [
          {
            Action: 'ecr:GetDownloadUrlForLayer',
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });
    repo02Ac86cf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const repoWithEmptyOnDeleteCa5c67fa = new ecr.CfnRepository(this, 'RepoWithEmptyOnDeleteCA5C67FA', {
      emptyOnDelete: true,
    });
    repoWithEmptyOnDeleteCa5c67fa.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    const myUserDefaultPolicy7B897426 = new iam.CfnPolicy(this, 'MyUserDefaultPolicy7B897426', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:CompleteLayerUpload',
              'ecr:DescribeImages',
              'ecr:DescribeRepositories',
              'ecr:GetDownloadUrlForLayer',
              'ecr:InitiateLayerUpload',
              'ecr:PutImage',
              'ecr:UploadLayerPart',
            ],
            Effect: 'Allow',
            Resource: repo02Ac86cf.attrArn,
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyUserDefaultPolicy7B897426',
      users: [
        myUserDc45028b.ref,
      ],
    });

    // Outputs
    this.repositoryUri = [
      cdk.Fn.select(4, cdk.Fn.split(':', repo02Ac86cf.attrArn)),
      '.dkr.ecr.',
      cdk.Fn.select(3, cdk.Fn.split(':', repo02Ac86cf.attrArn)),
      '.',
      this.urlSuffix,
      '/',
      repo02Ac86cf.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputRepositoryURI', {
      key: 'RepositoryURI',
      value: this.repositoryUri!.toString(),
    });
  }
}

