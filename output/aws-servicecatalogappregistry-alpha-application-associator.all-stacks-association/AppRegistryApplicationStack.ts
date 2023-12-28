import * as cdk from 'aws-cdk-lib';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface AppregistryapplicationstackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

/**
 * Stack that holds the AppRegistryAssociatedApplication application
 */
export class Appregistryapplicationstack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AppregistryapplicationstackProps = {}) {
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
    const defaultCdkApplication4573D5a3 = new servicecatalogappregistry.CfnApplication(this, 'DefaultCdkApplication4573D5A3', {
      name: 'AppRegistryAssociatedApplication',
      description: 'Application containing stacks deployed via CDK.',
    });

    if (defaultCdkApplication4573D5a3 == null) { throw new Error(`A combination of conditions caused 'defaultCdkApplication4573D5a3' to be undefined. Fixit.`); }
    const appRegistryAssociation = new servicecatalogappregistry.CfnResourceAssociation(this, 'AppRegistryAssociation', {
      application: defaultCdkApplication4573D5a3.attrId,
      resource: this.stackId,
      resourceType: 'CFN_STACK',
    });
  }
}

