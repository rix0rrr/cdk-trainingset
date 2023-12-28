import * as cdk from 'aws-cdk-lib';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface Application-AppRegistryAssociatedApplication-StackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

/**
 * Stack to create AppRegistry application
 */
export class Application-AppRegistryAssociatedApplication-Stack extends cdk.Stack {
  /**
   * Application manager url for the application created.
   */
  public readonly defaultCdkApplicationApplicationManagerUrl27C138ef;

  public constructor(scope: cdk.App, id: string, props: Application-AppRegistryAssociatedApplication-StackProps = {}) {
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
      tags: {
        managedBy: 'CDK_Application_Associator',
      },
    });

    if (defaultCdkApplication4573D5a3 == null) { throw new Error(`A combination of conditions caused 'defaultCdkApplication4573D5a3' to be undefined. Fixit.`); }
    const appRegistryAssociation = new servicecatalogappregistry.CfnResourceAssociation(this, 'AppRegistryAssociation', {
      application: defaultCdkApplication4573D5a3.attrId,
      resource: this.stackId,
      resourceType: 'CFN_STACK',
    });

    // Outputs
    this.defaultCdkApplicationApplicationManagerUrl27C138ef = 'https://us-east-1.console.aws.amazon.com/systems-manager/appmanager/application/AWS_AppRegistry_Application-AppRegistryAssociatedApplication';
    new cdk.CfnOutput(this, 'CfnOutputDefaultCdkApplicationApplicationManagerUrl27C138EF', {
      key: 'DefaultCdkApplicationApplicationManagerUrl27C138EF',
      description: 'Application manager url for the application created.',
      value: this.defaultCdkApplicationApplicationManagerUrl27C138ef!.toString(),
    });
  }
}

