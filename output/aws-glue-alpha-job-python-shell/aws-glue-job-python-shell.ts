import * as cdk from 'aws-cdk-lib';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsGlueJobPythonShellProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsGlueJobPythonShell extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsGlueJobPythonShellProps = {}) {
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
    const shellJob39ServiceRole2F6f3768 = new iam.CfnRole(this, 'ShellJob39ServiceRole2F6F3768', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'glue.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSGlueServiceRole',
        ].join(''),
      ],
    });

    const shellJobServiceRoleCf97bc4b = new iam.CfnRole(this, 'ShellJobServiceRoleCF97BC4B', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'glue.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSGlueServiceRole',
        ].join(''),
      ],
    });

    if (shellJob39ServiceRole2F6f3768 == null) { throw new Error(`A combination of conditions caused 'shellJob39ServiceRole2F6f3768' to be undefined. Fixit.`); }
    const shellJob390C141361 = new glue.CfnJob(this, 'ShellJob390C141361', {
      command: {
        name: 'pythonshell',
        pythonVersion: '3.9',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '3.0',
      maxCapacity: 1,
      name: 'ShellJob39',
      role: shellJob39ServiceRole2F6f3768.attrArn,
      tags: {
        key: 'value',
      },
    });

    if (shellJob39ServiceRole2F6f3768 == null) { throw new Error(`A combination of conditions caused 'shellJob39ServiceRole2F6f3768' to be undefined. Fixit.`); }
    const shellJob39ServiceRoleDefaultPolicy38A33919 = new iam.CfnPolicy(this, 'ShellJob39ServiceRoleDefaultPolicy38A33919', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ShellJob39ServiceRoleDefaultPolicy38A33919',
      roles: [
        shellJob39ServiceRole2F6f3768.ref,
      ],
    });

    if (shellJobServiceRoleCf97bc4b == null) { throw new Error(`A combination of conditions caused 'shellJobServiceRoleCf97bc4b' to be undefined. Fixit.`); }
    const shellJob42E81f95 = new glue.CfnJob(this, 'ShellJob42E81F95', {
      command: {
        name: 'pythonshell',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '1.0',
      maxCapacity: 0.0625,
      name: 'ShellJob',
      role: shellJobServiceRoleCf97bc4b.attrArn,
      tags: {
        key: 'value',
      },
    });

    if (shellJobServiceRoleCf97bc4b == null) { throw new Error(`A combination of conditions caused 'shellJobServiceRoleCf97bc4b' to be undefined. Fixit.`); }
    const shellJobServiceRoleDefaultPolicy7F22d315 = new iam.CfnPolicy(this, 'ShellJobServiceRoleDefaultPolicy7F22D315', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ShellJobServiceRoleDefaultPolicy7F22D315',
      roles: [
        shellJobServiceRoleCf97bc4b.ref,
      ],
    });
  }
}

