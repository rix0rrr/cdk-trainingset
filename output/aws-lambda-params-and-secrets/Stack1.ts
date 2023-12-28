import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface Stack1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Stack1Props = {}) {
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

    // Mappings
    const paramsandsecretslayerMap: Record<string, Record<string, string>> = {
      'af-south-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:af-south-1:317013901791:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-east-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-east-1:768336418462:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-northeast-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-northeast-1:133490724326:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-northeast-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-northeast-2:738900069198:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-northeast-3': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-northeast-3:576959938190:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-south-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-south-1:176022468876:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-south-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-south-2:070087711984:layer:AWS-Parameters-and-Secrets-Lambda-Extension:1',
      },
      'ap-southeast-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-southeast-1:044395824272:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-southeast-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-southeast-2:665172237481:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ap-southeast-3': {
        '1x0x103xx86x64': 'arn:aws:lambda:ap-southeast-3:490737872127:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'ca-central-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:ca-central-1:200266452380:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'cn-north-1': {
        '1x0x103xx86x64': 'arn:aws-cn:lambda:cn-north-1:287114880934:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'cn-northwest-1': {
        '1x0x103xx86x64': 'arn:aws-cn:lambda:cn-northwest-1:287310001119:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-central-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-central-1:187925254637:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-central-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-central-2:772501565639:layer:AWS-Parameters-and-Secrets-Lambda-Extension:1',
      },
      'eu-north-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-north-1:427196147048:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-south-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-south-1:325218067255:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-south-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-south-2:524103009944:layer:AWS-Parameters-and-Secrets-Lambda-Extension:1',
      },
      'eu-west-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-west-1:015030872274:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-west-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-west-2:133256977650:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'eu-west-3': {
        '1x0x103xx86x64': 'arn:aws:lambda:eu-west-3:780235371811:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'me-central-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:me-central-1:858974508948:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'me-south-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:me-south-1:832021897121:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'sa-east-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:sa-east-1:933737806257:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-east-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:us-east-1:177933569100:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-east-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:us-east-2:590474943231:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-gov-east-1': {
        '1x0x103xx86x64': 'arn:aws-us-gov:lambda:us-gov-east-1:129776340158:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-gov-west-1': {
        '1x0x103xx86x64': 'arn:aws-us-gov:lambda:us-gov-west-1:127562683043:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-west-1': {
        '1x0x103xx86x64': 'arn:aws:lambda:us-west-1:997803712105:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
      'us-west-2': {
        '1x0x103xx86x64': 'arn:aws:lambda:us-west-2:345057560386:layer:AWS-Parameters-and-Secrets-Lambda-Extension:4',
      },
    };

    // Resources
    const myFuncServiceRole54065130 = new iam.CfnRole(this, 'MyFuncServiceRole54065130', {
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

    const mySecret8Fe80b51 = new secretsmanager.CfnSecret(this, 'MySecret8FE80B51', {
      generateSecretString: {
      },
    });
    mySecret8Fe80b51.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const parameter9E1b4fba = new ssm.CfnParameter(this, 'Parameter9E1B4FBA', {
      type: 'String',
      value: 'api.example.com',
      name: 'email_url_Stack1',
    });

    if (myFuncServiceRole54065130 == null) { throw new Error(`A combination of conditions caused 'myFuncServiceRole54065130' to be undefined. Fixit.`); }
    if (mySecret8Fe80b51 == null) { throw new Error(`A combination of conditions caused 'mySecret8Fe80b51' to be undefined. Fixit.`); }
    if (parameter9E1b4fba == null) { throw new Error(`A combination of conditions caused 'parameter9E1b4fba' to be undefined. Fixit.`); }
    const myFuncServiceRoleDefaultPolicyF3c36699 = new iam.CfnPolicy(this, 'MyFuncServiceRoleDefaultPolicyF3C36699', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: mySecret8Fe80b51.ref,
          },
          {
            Action: [
              'ssm:DescribeParameters',
              'ssm:GetParameter',
              'ssm:GetParameterHistory',
              'ssm:GetParameters',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/',
              parameter9E1b4fba.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFuncServiceRoleDefaultPolicyF3C36699',
      roles: [
        myFuncServiceRole54065130.ref,
      ],
    });

    if (myFuncServiceRole54065130 == null) { throw new Error(`A combination of conditions caused 'myFuncServiceRole54065130' to be undefined. Fixit.`); }
    if (myFuncServiceRoleDefaultPolicyF3c36699 == null) { throw new Error(`A combination of conditions caused 'myFuncServiceRoleDefaultPolicyF3c36699' to be undefined. Fixit.`); }
    const myFunc8A243a2c = new lambda.CfnFunction(this, 'MyFunc8A243A2C', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b375dfd7699947c404936c2d1c4a0b91bd2bb49158ce52f6064bda6d3a7e0ead.zip',
      },
      role: myFuncServiceRole54065130.attrArn,
      architectures: [
        'x86_64',
      ],
      environment: {
        variables: {
          'PARAMETERS_SECRETS_EXTENSION_CACHE_ENABLED': 'true',
          'PARAMETERS_SECRETS_EXTENSION_CACHE_SIZE': '100',
          'PARAMETERS_SECRETS_EXTENSION_HTTP_PORT': '8080',
          'PARAMETERS_SECRETS_EXTENSION_LOG_LEVEL': 'debug',
          'PARAMETERS_SECRETS_EXTENSION_MAX_CONNECTIONS': '5',
          'SECRETS_MANAGER_TIMEOUT_MILLIS': '0',
          'SECRETS_MANAGER_TTL': '100',
          'SSM_PARAMETER_STORE_TIMEOUT_MILLIS': '0',
          'SSM_PARAMETER_STORE_TTL': '100',
        },
      },
      handler: 'index.handler',
      layers: [
        paramsandsecretslayerMap[this.region]['1x0x103xx86x64'],
      ],
      runtime: 'nodejs18.x',
    });
    myFunc8A243a2c.addDependency(myFuncServiceRoleDefaultPolicyF3c36699);
    myFunc8A243a2c.addDependency(myFuncServiceRole54065130);
  }
}

