import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface nested-stacks-dockerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class nested-stacks-docker extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: nested-stacks-dockerProps = {}) {
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
    const nestedstackwithimageNestedStacknestedstackwithimageNestedStackResourceDf784fd5 = new cloudformation.CfnStack(this, 'nestedstackwithimageNestedStacknestedstackwithimageNestedStackResourceDF784FD5', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/eaf17d410c9c3958b50b406011121bab5f3147b4a61a0f93a9ab1db097033867.json',
      ].join(''),
    });
    nestedstackwithimageNestedStacknestedstackwithimageNestedStackResourceDf784fd5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

