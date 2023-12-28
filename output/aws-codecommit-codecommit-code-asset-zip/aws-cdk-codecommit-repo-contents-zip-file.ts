import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';

export interface aws-cdk-codecommit-repo-contents-zip-fileProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codecommit-repo-contents-zip-file extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codecommit-repo-contents-zip-fileProps = {}) {
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
      repositoryName: 'aws-cdk-codecommit-repo-contents-zip-file',
      code: {
        s3: {
          bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          key: 'ea7c70c09e0d23ef6105931ee931effc8b607184343aebf5e45e972807b3fc18.zip',
        },
      },
    });
  }
}

