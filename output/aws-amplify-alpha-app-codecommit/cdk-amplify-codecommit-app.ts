import * as cdk from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface cdk-amplify-codecommit-appProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-amplify-codecommit-app extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-amplify-codecommit-appProps = {}) {
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
    const appRole1Af9b530 = new iam.CfnRole(this, 'AppRole1AF9B530', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'amplify.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const repo02Ac86cf = new codecommit.CfnRepository(this, 'Repo02AC86CF', {
      repositoryName: 'integ-amplify-app',
    });

    if (appRole1Af9b530 == null) { throw new Error(`A combination of conditions caused 'appRole1Af9b530' to be undefined. Fixit.`); }
    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    const appF1b96344 = new amplify.CfnApp(this, 'AppF1B96344', {
      name: 'App',
      basicAuthConfig: {
        enableBasicAuth: false,
      },
      iamServiceRole: appRole1Af9b530.attrArn,
      repository: repo02Ac86cf.attrCloneUrlHttp,
      platform: 'WEB',
    });

    if (appRole1Af9b530 == null) { throw new Error(`A combination of conditions caused 'appRole1Af9b530' to be undefined. Fixit.`); }
    if (repo02Ac86cf == null) { throw new Error(`A combination of conditions caused 'repo02Ac86cf' to be undefined. Fixit.`); }
    const appRoleDefaultPolicy9Cadbaa1 = new iam.CfnPolicy(this, 'AppRoleDefaultPolicy9CADBAA1', {
      policyDocument: {
        Statement: [
          {
            Action: 'codecommit:GitPull',
            Effect: 'Allow',
            Resource: repo02Ac86cf.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AppRoleDefaultPolicy9CADBAA1',
      roles: [
        appRole1Af9b530.ref,
      ],
    });

    if (appF1b96344 == null) { throw new Error(`A combination of conditions caused 'appF1b96344' to be undefined. Fixit.`); }
    const appmainF505baed = new amplify.CfnBranch(this, 'AppmainF505BAED', {
      appId: appF1b96344.attrAppId,
      branchName: 'main',
      enableAutoBuild: true,
      enablePullRequestPreview: true,
    });
  }
}

