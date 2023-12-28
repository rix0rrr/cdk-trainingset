import * as cdk from 'aws-cdk-lib';
import * as rds from 'aws-cdk-lib/aws-rds';

export interface aws-cdk-sls-cluster-no-vpc-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-sls-cluster-no-vpc-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-sls-cluster-no-vpc-integProps = {}) {
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
    const serverlessDatabaseWithoutVpc93f9a752 = new rds.CfnDBCluster(this, 'ServerlessDatabaseWithoutVPC93F9A752', {
      engine: 'aurora-mysql',
      copyTagsToSnapshot: true,
      dbClusterParameterGroupName: 'default.aurora-mysql5.7',
      engineMode: 'serverless',
      masterUsername: 'admin',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      storageEncrypted: true,
      vpcSecurityGroupIds: [
      ],
    });
    serverlessDatabaseWithoutVpc93f9a752.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const serverlessDatabaseWithoutVpCandCopyTags216Ac6c7 = new rds.CfnDBCluster(this, 'ServerlessDatabaseWithoutVPCandCopyTags216AC6C7', {
      engine: 'aurora-mysql',
      copyTagsToSnapshot: false,
      dbClusterParameterGroupName: 'default.aurora-mysql5.7',
      engineMode: 'serverless',
      masterUsername: 'admin',
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      storageEncrypted: true,
      vpcSecurityGroupIds: [
      ],
    });
    serverlessDatabaseWithoutVpCandCopyTags216Ac6c7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

