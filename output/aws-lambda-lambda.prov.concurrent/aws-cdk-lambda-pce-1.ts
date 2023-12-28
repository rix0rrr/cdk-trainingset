import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface aws-cdk-lambda-pce-1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-lambda-pce-1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-lambda-pce-1Props = {}) {
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
    const myLambdaAliasPceServiceRoleF7c9f212 = new iam.CfnRole(this, 'MyLambdaAliasPCEServiceRoleF7C9F212', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const myLambdaVersionPceServiceRole2Acfb73e = new iam.CfnRole(this, 'MyLambdaVersionPCEServiceRole2ACFB73E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    if (myLambdaAliasPceServiceRoleF7c9f212 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPceServiceRoleF7c9f212' to be undefined. Fixit.`); }
    const myLambdaAliasPceServiceRoleDefaultPolicyE7418d56 = new iam.CfnPolicy(this, 'MyLambdaAliasPCEServiceRoleDefaultPolicyE7418D56', {
      policyDocument: {
        Statement: [
          {
            Action: '*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambdaAliasPCEServiceRoleDefaultPolicyE7418D56',
      roles: [
        myLambdaAliasPceServiceRoleF7c9f212.ref,
      ],
    });

    if (myLambdaVersionPceServiceRole2Acfb73e == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPceServiceRole2Acfb73e' to be undefined. Fixit.`); }
    const myLambdaVersionPceServiceRoleDefaultPolicy229A1552 = new iam.CfnPolicy(this, 'MyLambdaVersionPCEServiceRoleDefaultPolicy229A1552', {
      policyDocument: {
        Statement: [
          {
            Action: '*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambdaVersionPCEServiceRoleDefaultPolicy229A1552',
      roles: [
        myLambdaVersionPceServiceRole2Acfb73e.ref,
      ],
    });

    if (myLambdaAliasPceServiceRoleDefaultPolicyE7418d56 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPceServiceRoleDefaultPolicyE7418d56' to be undefined. Fixit.`); }
    if (myLambdaAliasPceServiceRoleF7c9f212 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPceServiceRoleF7c9f212' to be undefined. Fixit.`); }
    const myLambdaAliasPced0b8d751 = new lambda.CfnFunction(this, 'MyLambdaAliasPCED0B8D751', {
      code: {
        zipFile: 'exports.handler =  async function(event, context) { console.log(\"Hello from CDK! with Alias Provisioned Concurrent Exec!\");}',
      },
      description: 'version-hash:6edd36d5267cdb0f390cb01156472adb',
      handler: 'index.handler',
      role: myLambdaAliasPceServiceRoleF7c9f212.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaAliasPced0b8d751.addDependency(myLambdaAliasPceServiceRoleDefaultPolicyE7418d56);
    myLambdaAliasPced0b8d751.addDependency(myLambdaAliasPceServiceRoleF7c9f212);

    if (myLambdaVersionPceServiceRole2Acfb73e == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPceServiceRole2Acfb73e' to be undefined. Fixit.`); }
    if (myLambdaVersionPceServiceRoleDefaultPolicy229A1552 == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPceServiceRoleDefaultPolicy229A1552' to be undefined. Fixit.`); }
    const myLambdaVersionPcea3a0d86b = new lambda.CfnFunction(this, 'MyLambdaVersionPCEA3A0D86B', {
      code: {
        zipFile: 'exports.handler =  async function(event, context) { console.log(\"Hello from CDK! with Version Provisioned Concurrent Exec!\");}',
      },
      description: 'version-hash:8745aba9848094b2b0522a3211700aad',
      handler: 'index.handler',
      role: myLambdaVersionPceServiceRole2Acfb73e.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaVersionPcea3a0d86b.addDependency(myLambdaVersionPceServiceRoleDefaultPolicy229A1552);
    myLambdaVersionPcea3a0d86b.addDependency(myLambdaVersionPceServiceRole2Acfb73e);

    if (myLambdaAliasPced0b8d751 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPced0b8d751' to be undefined. Fixit.`); }
    const myLambdaAliasPceCurrentVersion072335D3abd7022526e1eae404a6f2a50ba64569 = new lambda.CfnVersion(this, 'MyLambdaAliasPCECurrentVersion072335D3abd7022526e1eae404a6f2a50ba64569', {
      functionName: myLambdaAliasPced0b8d751.ref,
    });

    if (myLambdaVersionPcea3a0d86b == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPcea3a0d86b' to be undefined. Fixit.`); }
    const myLambdaVersionPceCurrentVersion27Fc3932e3372865403c1e027068d9691afe3f3f = new lambda.CfnVersion(this, 'MyLambdaVersionPCECurrentVersion27FC3932e3372865403c1e027068d9691afe3f3f', {
      functionName: myLambdaVersionPcea3a0d86b.ref,
      provisionedConcurrencyConfig: {
        provisionedConcurrentExecutions: 5,
      },
    });

    if (myLambdaVersionPcea3a0d86b == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPcea3a0d86b' to be undefined. Fixit.`); }
    if (myLambdaVersionPceCurrentVersion27Fc3932e3372865403c1e027068d9691afe3f3f == null) { throw new Error(`A combination of conditions caused 'myLambdaVersionPceCurrentVersion27Fc3932e3372865403c1e027068d9691afe3f3f' to be undefined. Fixit.`); }
    const alias29455D932 = new lambda.CfnAlias(this, 'Alias29455D932', {
      functionName: myLambdaVersionPcea3a0d86b.ref,
      functionVersion: myLambdaVersionPceCurrentVersion27Fc3932e3372865403c1e027068d9691afe3f3f.attrVersion,
      name: 'prod',
    });

    if (myLambdaAliasPceCurrentVersion072335D3abd7022526e1eae404a6f2a50ba64569 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPceCurrentVersion072335D3abd7022526e1eae404a6f2a50ba64569' to be undefined. Fixit.`); }
    if (myLambdaAliasPced0b8d751 == null) { throw new Error(`A combination of conditions caused 'myLambdaAliasPced0b8d751' to be undefined. Fixit.`); }
    const alias325C5727 = new lambda.CfnAlias(this, 'Alias325C5727', {
      functionName: myLambdaAliasPced0b8d751.ref,
      functionVersion: myLambdaAliasPceCurrentVersion072335D3abd7022526e1eae404a6f2a50ba64569.attrVersion,
      name: 'prod',
      provisionedConcurrencyConfig: {
        provisionedConcurrentExecutions: 5,
      },
    });

    if (alias29455D932 == null) { throw new Error(`A combination of conditions caused 'alias29455D932' to be undefined. Fixit.`); }
    const alias2AliasPermission2448514B6 = new lambda.CfnPermission(this, 'Alias2AliasPermission2448514B6', {
      action: 'lambda:InvokeFunction',
      functionName: alias29455D932.ref,
      principal: 'cloudformation.amazonaws.com',
    });

    if (alias325C5727 == null) { throw new Error(`A combination of conditions caused 'alias325C5727' to be undefined. Fixit.`); }
    const aliasAliasPermissionAf30f9e8 = new lambda.CfnPermission(this, 'AliasAliasPermissionAF30F9E8', {
      action: 'lambda:InvokeFunction',
      functionName: alias325C5727.ref,
      principal: 'cloudformation.amazonaws.com',
    });
  }
}

