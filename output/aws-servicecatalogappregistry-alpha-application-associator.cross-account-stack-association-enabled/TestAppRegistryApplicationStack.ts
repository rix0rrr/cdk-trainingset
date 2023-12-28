import * as cdk from 'aws-cdk-lib';
import * as ram from 'aws-cdk-lib/aws-ram';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface TestAppRegistryApplicationStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

/**
 * Stack to create AppRegistry application
 */
export class TestAppRegistryApplicationStack extends cdk.Stack {
  /**
   * System Manager Application Manager URL for the application created.
   */
  public readonly defaultCdkApplicationApplicationManagerUrl27C138ef;

  public constructor(scope: cdk.App, id: string, props: TestAppRegistryApplicationStackProps = {}) {
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

    if (defaultCdkApplication4573D5a3 == null) { throw new Error(`A combination of conditions caused 'defaultCdkApplication4573D5a3' to be undefined. Fixit.`); }
    const defaultCdkApplicationRamShare60b7c88c45feCe472d79 = new ram.CfnResourceShare(this, 'DefaultCdkApplicationRAMShare60b7c88c45feCE472D79', {
      name: 'RAMShare60b7c88c45fe',
      allowExternalPrincipals: false,
      permissionArns: [
        'arn:aws:ram::aws:permission/AWSRAMPermissionServiceCatalogAppRegistryApplicationAllowAssociation',
      ],
      principals: [
        '111111111111',
      ],
      resourceArns: [
        defaultCdkApplication4573D5a3.attrArn,
      ],
    });

    // Outputs
    this.defaultCdkApplicationApplicationManagerUrl27C138ef = [
      'https://',
      this.region,
      '.console.aws.amazon.com/systems-manager/appmanager/application/AWS_AppRegistry_Application-AppRegistryAssociatedApplication',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputDefaultCdkApplicationApplicationManagerUrl27C138EF', {
      key: 'DefaultCdkApplicationApplicationManagerUrl27C138EF',
      description: 'System Manager Application Manager URL for the application created.',
      value: this.defaultCdkApplicationApplicationManagerUrl27C138ef!.toString(),
    });
  }
}

