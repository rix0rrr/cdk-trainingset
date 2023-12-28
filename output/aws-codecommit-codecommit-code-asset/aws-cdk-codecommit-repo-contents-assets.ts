import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';

export interface AwsCdkCodecommitRepoContentsAssetsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkCodecommitRepoContentsAssets extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodecommitRepoContentsAssetsProps = {}) {
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
    const repo02Ac86cf = new codecommit.CfnRepository(this, 'Repo02AC86CF', {
      repositoryName: 'aws-cdk-codecommit-repo-contents-assets',
      code: {
        s3: {
          bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          key: '32b8e8a8b79a84deb31e4d456dbcf3e40937f201633ae38c9e90e15b82084ae3.zip',
        },
      },
    });
  }
}

