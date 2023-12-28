import * as cdk from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as events from 'aws-cdk-lib/aws-events';

export interface AwsEcrIntegStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcrIntegStack extends cdk.Stack {
  public readonly repositoryUri;

  public constructor(scope: cdk.App, id: string, props: AwsEcrIntegStackProps = {}) {
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
    const repo02Ac86cf = new ecr.CfnRepository(this, 'Repo02AC86CF', {
      imageScanningConfiguration: {
        scanOnPush: true,
      },
    });
    repo02Ac86cf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    const repoImageScanComplete7Bc71935 = new events.CfnRule(this, 'RepoImageScanComplete7BC71935', {
      eventPattern: {
        source: [
          'aws.ecr',
        ],
        'detail-type': [
          'ECR Image Scan',
        ],
        detail: {
          'repository-name': [
            repo02Ac86cf.ref,
          ],
          'scan-status': [
            'COMPLETE',
          ],
        },
      },
      state: 'ENABLED',
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

