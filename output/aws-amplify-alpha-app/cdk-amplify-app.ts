import * as cdk from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface cdk-amplify-appProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-amplify-app extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-amplify-appProps = {}) {
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
    const appAppBasicAuthE743f015 = new secretsmanager.CfnSecret(this, 'AppAppBasicAuthE743F015', {
      generateSecretString: {
        generateStringKey: 'password',
        secretStringTemplate: '{\"username\":\"aws\"}',
      },
    });
    appAppBasicAuthE743f015.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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

    if (appAppBasicAuthE743f015 == null) { throw new Error(`A combination of conditions caused 'appAppBasicAuthE743f015' to be undefined. Fixit.`); }
    if (appRole1Af9b530 == null) { throw new Error(`A combination of conditions caused 'appRole1Af9b530' to be undefined. Fixit.`); }
    const appF1b96344 = new amplify.CfnApp(this, 'AppF1B96344', {
      name: 'App',
      autoBranchCreationConfig: {
        basicAuthConfig: {
          enableBasicAuth: false,
        },
        enableAutoBranchCreation: true,
        enableAutoBuild: true,
        enablePullRequestPreview: true,
      },
      basicAuthConfig: {
        enableBasicAuth: true,
        password: [
          '{{resolve:secretsmanager:',
          appAppBasicAuthE743f015.ref,
          ':SecretString:password::}}',
        ].join(''),
        username: 'aws',
      },
      customHeaders: [
        'customHeaders:\n  - pattern: \"*.json\"\n    headers:\n      - key: \"custom-header-name-1\"\n        value: \"custom-header-value-1\"\n      - key: \"custom-header-name-2\"\n        value: \"custom-header-value-2\"\n  - pattern: \"/path/*\"\n    headers:\n      - key: \"custom-header-name-1\"\n        value: \"custom-header-value-2\"\n      - key: \"x-aws-url-suffix\"\n        value: \"this-is-the-suffix-',
        this.urlSuffix,
        '\"\n',
      ].join(''),
      customRules: [
        {
          source: '/source',
          target: '/target',
        },
      ],
      iamServiceRole: appRole1Af9b530.attrArn,
      platform: 'WEB_COMPUTE',
    });

    if (appF1b96344 == null) { throw new Error(`A combination of conditions caused 'appF1b96344' to be undefined. Fixit.`); }
    const appmainF505baed = new amplify.CfnBranch(this, 'AppmainF505BAED', {
      appId: appF1b96344.attrAppId,
      branchName: 'main',
      enableAutoBuild: true,
      enablePullRequestPreview: true,
      environmentVariables: [
        {
          name: 'key',
          value: 'value',
        },
      ],
    });
  }
}

