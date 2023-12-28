import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-iam-userProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-iam-user extends cdk.Stack {
  public readonly nameForUserImportedByArn;
  public readonly nameForUserImportedByArnPath;
  public readonly nameForUserImportedByArnPathMultiple;
  public readonly nameForUserImportedByAttributes;
  public readonly nameForUserImportedByAttributesPath;
  public readonly nameForUserImportedByAttributesPathMultiple;
  public readonly nameForUserImportedByName;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-iam-userProps = {}) {
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
      loginProfile: {
        password: 'Test1234567890!',
        passwordResetRequired: true,
      },
      userName: 'benisrae',
    });

    // Outputs
    this.nameForUserImportedByArn = 'rossrhodes';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByArn', {
      key: 'NameForUserImportedByArn',
      value: this.nameForUserImportedByArn!.toString(),
    });
    this.nameForUserImportedByArnPath = 'johndoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByArnPath', {
      key: 'NameForUserImportedByArnPath',
      value: this.nameForUserImportedByArnPath!.toString(),
    });
    this.nameForUserImportedByArnPathMultiple = 'johndoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByArnPathMultiple', {
      key: 'NameForUserImportedByArnPathMultiple',
      value: this.nameForUserImportedByArnPathMultiple!.toString(),
    });
    this.nameForUserImportedByAttributes = 'johndoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByAttributes', {
      key: 'NameForUserImportedByAttributes',
      value: this.nameForUserImportedByAttributes!.toString(),
    });
    this.nameForUserImportedByAttributesPath = 'johndoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByAttributesPath', {
      key: 'NameForUserImportedByAttributesPath',
      value: this.nameForUserImportedByAttributesPath!.toString(),
    });
    this.nameForUserImportedByAttributesPathMultiple = 'johndoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByAttributesPathMultiple', {
      key: 'NameForUserImportedByAttributesPathMultiple',
      value: this.nameForUserImportedByAttributesPathMultiple!.toString(),
    });
    this.nameForUserImportedByName = 'janedoe';
    new cdk.CfnOutput(this, 'CfnOutputNameForUserImportedByName', {
      key: 'NameForUserImportedByName',
      value: this.nameForUserImportedByName!.toString(),
    });
  }
}

