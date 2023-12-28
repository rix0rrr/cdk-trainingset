import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';

export interface NestedStacksMultiProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class NestedStacksMulti extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: NestedStacksMultiProps = {}) {
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
    const nestedStackNestedStackNestedStackNestedStackResourceB70834fd = new cloudformation.CfnStack(this, 'NestedStackNestedStackNestedStackNestedStackResourceB70834FD', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/02e1d355a08f27a90a39ccff4659a30be80f54c06d1907ec317d28a823e5cf56.json',
      ].join(''),
    });
    nestedStackNestedStackNestedStackNestedStackResourceB70834fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

