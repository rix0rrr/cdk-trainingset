import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-iam-instance-profileProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-iam-instance-profile extends cdk.Stack {
  public readonly nameForProfileImportedByArn;
  public readonly nameForProfileImportedByArnPath;
  public readonly nameForProfileImportedByArnPathMultiple;
  public readonly nameForProfileImportedByAttributesWithRole;
  public readonly nameForProfileImportedByAttributesPathMultiple;
  public readonly nameForProfileImportedByName;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-iam-instance-profileProps = {}) {
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
    const myRoleF48ffe04 = new iam.CfnRole(this, 'MyRoleF48FFE04', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myRoleF48ffe04 == null) { throw new Error(`A combination of conditions caused 'myRoleF48ffe04' to be undefined. Fixit.`); }
    const myInstanceProfile7C3f6bf1 = new iam.CfnInstanceProfile(this, 'MyInstanceProfile7C3F6BF1', {
      roles: [
        myRoleF48ffe04.ref,
      ],
      instanceProfileName: 'my-instance-profile',
      path: '/sample/path/',
    });

    // Outputs
    this.nameForProfileImportedByArn = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByArn', {
      key: 'NameForProfileImportedByArn',
      value: this.nameForProfileImportedByArn!.toString(),
    });
    this.nameForProfileImportedByArnPath = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByArnPath', {
      key: 'NameForProfileImportedByArnPath',
      value: this.nameForProfileImportedByArnPath!.toString(),
    });
    this.nameForProfileImportedByArnPathMultiple = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByArnPathMultiple', {
      key: 'NameForProfileImportedByArnPathMultiple',
      value: this.nameForProfileImportedByArnPathMultiple!.toString(),
    });
    this.nameForProfileImportedByAttributesWithRole = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByAttributesWithRole', {
      key: 'NameForProfileImportedByAttributesWithRole',
      value: this.nameForProfileImportedByAttributesWithRole!.toString(),
    });
    this.nameForProfileImportedByAttributesPathMultiple = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByAttributesPathMultiple', {
      key: 'NameForProfileImportedByAttributesPathMultiple',
      value: this.nameForProfileImportedByAttributesPathMultiple!.toString(),
    });
    this.nameForProfileImportedByName = 'MyInstanceProfile';
    new cdk.CfnOutput(this, 'CfnOutputNameForProfileImportedByName', {
      key: 'NameForProfileImportedByName',
      value: this.nameForProfileImportedByName!.toString(),
    });
  }
}

