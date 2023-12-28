import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsCdkLambdaLoggingConfigProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambdaLoggingConfig extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkLambdaLoggingConfigProps = {}) {
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
    const lambdaWithJsonFormatServiceRole37Ffb486 = new iam.CfnRole(this, 'LambdaWithJSONFormatServiceRole37FFB486', {
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

    const lambdaWithLogGroupAndNoLogGroupNameServiceRoleFee6af87 = new iam.CfnRole(this, 'LambdaWithLogGroupAndNoLogGroupNameServiceRoleFEE6AF87', {
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

    const lambdaWithLogGroupServiceRoleC5ddb031 = new iam.CfnRole(this, 'LambdaWithLogGroupServiceRoleC5DDB031', {
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

    const lambdaWithLogLevelServiceRole90A45743 = new iam.CfnRole(this, 'LambdaWithLogLevelServiceRole90A45743', {
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

    const lambdaWithTextFormatServiceRoleAbcc0e93 = new iam.CfnRole(this, 'LambdaWithTextFormatServiceRoleABCC0E93', {
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

    const myLogGroupWithLogGroupNameB577eb65 = new logs.CfnLogGroup(this, 'MyLogGroupWithLogGroupNameB577EB65', {
      logGroupName: 'customLogGroup',
      retentionInDays: 731,
    });
    myLogGroupWithLogGroupNameB577eb65.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myLogGroupWithoutLogGroupName385E46b7 = new logs.CfnLogGroup(this, 'MyLogGroupWithoutLogGroupName385E46B7', {
      retentionInDays: 731,
    });
    myLogGroupWithoutLogGroupName385E46b7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (lambdaWithJsonFormatServiceRole37Ffb486 == null) { throw new Error(`A combination of conditions caused 'lambdaWithJsonFormatServiceRole37Ffb486' to be undefined. Fixit.`); }
    const lambdaWithJsonFormat20E01c00 = new lambda.CfnFunction(this, 'LambdaWithJSONFormat20E01C00', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      loggingConfig: {
        logFormat: 'JSON',
      },
      role: lambdaWithJsonFormatServiceRole37Ffb486.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaWithJsonFormat20E01c00.addDependency(lambdaWithJsonFormatServiceRole37Ffb486);

    if (lambdaWithLogGroupAndNoLogGroupNameServiceRoleFee6af87 == null) { throw new Error(`A combination of conditions caused 'lambdaWithLogGroupAndNoLogGroupNameServiceRoleFee6af87' to be undefined. Fixit.`); }
    if (myLogGroupWithoutLogGroupName385E46b7 == null) { throw new Error(`A combination of conditions caused 'myLogGroupWithoutLogGroupName385E46b7' to be undefined. Fixit.`); }
    const lambdaWithLogGroupAndNoLogGroupName1F5c7375 = new lambda.CfnFunction(this, 'LambdaWithLogGroupAndNoLogGroupName1F5C7375', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      loggingConfig: {
        logGroup: myLogGroupWithoutLogGroupName385E46b7.ref,
      },
      role: lambdaWithLogGroupAndNoLogGroupNameServiceRoleFee6af87.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaWithLogGroupAndNoLogGroupName1F5c7375.addDependency(lambdaWithLogGroupAndNoLogGroupNameServiceRoleFee6af87);

    if (lambdaWithLogGroupServiceRoleC5ddb031 == null) { throw new Error(`A combination of conditions caused 'lambdaWithLogGroupServiceRoleC5ddb031' to be undefined. Fixit.`); }
    if (myLogGroupWithLogGroupNameB577eb65 == null) { throw new Error(`A combination of conditions caused 'myLogGroupWithLogGroupNameB577eb65' to be undefined. Fixit.`); }
    const lambdaWithLogGroupC3b62a1a = new lambda.CfnFunction(this, 'LambdaWithLogGroupC3B62A1A', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      loggingConfig: {
        logGroup: myLogGroupWithLogGroupNameB577eb65.ref,
      },
      role: lambdaWithLogGroupServiceRoleC5ddb031.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaWithLogGroupC3b62a1a.addDependency(lambdaWithLogGroupServiceRoleC5ddb031);

    if (lambdaWithLogLevelServiceRole90A45743 == null) { throw new Error(`A combination of conditions caused 'lambdaWithLogLevelServiceRole90A45743' to be undefined. Fixit.`); }
    const lambdaWithLogLevelCbbbeffc = new lambda.CfnFunction(this, 'LambdaWithLogLevelCBBBEFFC', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      loggingConfig: {
        applicationLogLevel: 'INFO',
        logFormat: 'JSON',
        systemLogLevel: 'INFO',
      },
      role: lambdaWithLogLevelServiceRole90A45743.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaWithLogLevelCbbbeffc.addDependency(lambdaWithLogLevelServiceRole90A45743);

    if (lambdaWithTextFormatServiceRoleAbcc0e93 == null) { throw new Error(`A combination of conditions caused 'lambdaWithTextFormatServiceRoleAbcc0e93' to be undefined. Fixit.`); }
    const lambdaWithTextFormatA0ede227 = new lambda.CfnFunction(this, 'LambdaWithTextFormatA0EDE227', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      loggingConfig: {
        logFormat: 'Text',
      },
      role: lambdaWithTextFormatServiceRoleAbcc0e93.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaWithTextFormatA0ede227.addDependency(lambdaWithTextFormatServiceRoleAbcc0e93);
  }
}

