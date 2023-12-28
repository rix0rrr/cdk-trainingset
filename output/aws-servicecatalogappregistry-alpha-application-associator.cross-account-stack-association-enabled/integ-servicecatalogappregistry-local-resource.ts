import * as cdk from 'aws-cdk-lib';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface IntegServicecatalogappregistryLocalResourceProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegServicecatalogappregistryLocalResource extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegServicecatalogappregistryLocalResourceProps = {}) {
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
    const appRegistryAssociation = new servicecatalogappregistry.CfnResourceAssociation(this, 'AppRegistryAssociation', {
      application: 'AppRegistryAssociatedApplication',
      resource: this.stackId,
      resourceType: 'CFN_STACK',
    });
  }
}

