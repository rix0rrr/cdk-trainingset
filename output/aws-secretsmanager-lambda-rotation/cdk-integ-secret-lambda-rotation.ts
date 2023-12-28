import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface CdkIntegSecretLambdaRotationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegSecretLambdaRotation extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkIntegSecretLambdaRotationProps = {}) {
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
    const lambdaServiceRoleA8ed4d3b = new iam.CfnRole(this, 'LambdaServiceRoleA8ED4D3B', {
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

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    const key961B73fd = new kms.CfnKey(this, 'Key961B73FD', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
          {
            Action: [
              'kms:CreateGrant',
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Condition: {
              StringEquals: {
                'kms:ViaService': [
                  'secretsmanager.',
                  this.region,
                  '.amazonaws.com',
                ].join(''),
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Condition: {
              StringEquals: {
                'kms:ViaService': [
                  'secretsmanager.',
                  this.region,
                  '.amazonaws.com',
                ].join(''),
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: lambdaServiceRoleA8ed4d3b.attrArn,
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    key961B73fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (key961B73fd == null) { throw new Error(`A combination of conditions caused 'key961B73fd' to be undefined. Fixit.`); }
    const secretA720ef05 = new secretsmanager.CfnSecret(this, 'SecretA720EF05', {
      generateSecretString: {
      },
      kmsKeyId: key961B73fd.attrArn,
    });
    secretA720ef05.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const lambdaServiceRoleDefaultPolicyDae46e21 = new iam.CfnPolicy(this, 'LambdaServiceRoleDefaultPolicyDAE46E21', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
              'secretsmanager:PutSecretValue',
              'secretsmanager:UpdateSecretVersionStage',
            ],
            Effect: 'Allow',
            Resource: secretA720ef05.ref,
          },
          {
            Action: 'secretsmanager:GetRandomPassword',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'LambdaServiceRoleDefaultPolicyDAE46E21',
      roles: [
        lambdaServiceRoleA8ed4d3b.ref,
      ],
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const secretPolicy06C9821c = new secretsmanager.CfnResourcePolicy(this, 'SecretPolicy06C9821C', {
      resourcePolicy: {
        Statement: [
          {
            Action: 'secretsmanager:DeleteSecret',
            Effect: 'Deny',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      secretId: secretA720ef05.ref,
    });

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    if (lambdaServiceRoleDefaultPolicyDae46e21 == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleDefaultPolicyDae46e21' to be undefined. Fixit.`); }
    const lambdaD247545b = new lambda.CfnFunction(this, 'LambdaD247545B', {
      code: {
        zipFile: 'NOOP',
      },
      handler: 'index.handler',
      role: lambdaServiceRoleA8ed4d3b.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaD247545b.addDependency(lambdaServiceRoleDefaultPolicyDae46e21);
    lambdaD247545b.addDependency(lambdaServiceRoleA8ed4d3b);

    if (lambdaD247545b == null) { throw new Error(`A combination of conditions caused 'lambdaD247545b' to be undefined. Fixit.`); }
    const lambdaInvokeN0a2GKfZp0JmDqDeVhhu6A0tUv3NyNbk4YmfkNc69846677 = new lambda.CfnPermission(this, 'LambdaInvokeN0a2GKfZP0JmDqDEVhhu6A0TUv3NyNbk4YMFKNc69846677', {
      action: 'lambda:InvokeFunction',
      functionName: lambdaD247545b.attrArn,
      principal: 'secretsmanager.amazonaws.com',
    });

    if (lambdaD247545b == null) { throw new Error(`A combination of conditions caused 'lambdaD247545b' to be undefined. Fixit.`); }
    if (lambdaInvokeN0a2GKfZp0JmDqDeVhhu6A0tUv3NyNbk4YmfkNc69846677 == null) { throw new Error(`A combination of conditions caused 'lambdaInvokeN0a2GKfZp0JmDqDeVhhu6A0tUv3NyNbk4YmfkNc69846677' to be undefined. Fixit.`); }
    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    const secretSchedule18F2cb66 = new secretsmanager.CfnRotationSchedule(this, 'SecretSchedule18F2CB66', {
      rotationLambdaArn: lambdaD247545b.attrArn,
      rotationRules: {
        scheduleExpression: 'rate(4 hours)',
      },
      secretId: secretA720ef05.ref,
    });
    secretSchedule18F2cb66.addDependency(lambdaInvokeN0a2GKfZp0JmDqDeVhhu6A0tUv3NyNbk4YmfkNc69846677);
  }
}

