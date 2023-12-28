import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-glue-jobProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-glue-job extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-glue-jobProps = {}) {
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
    const etlJob20ServiceRoleD520ca20 = new iam.CfnRole(this, 'EtlJob20ServiceRoleD520CA20', {
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

    const etlJob20SparkUiBucketFd07fbd8 = new s3.CfnBucket(this, 'EtlJob20SparkUIBucketFD07FBD8', {
    });
    etlJob20SparkUiBucketFd07fbd8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const etlJob30ServiceRole8E675579 = new iam.CfnRole(this, 'EtlJob30ServiceRole8E675579', {
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

    const etlJob30SparkUiBucket9D789346 = new s3.CfnBucket(this, 'EtlJob30SparkUIBucket9D789346', {
    });
    etlJob30SparkUiBucket9D789346.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const etlJob40ServiceRoleBdd9998a = new iam.CfnRole(this, 'EtlJob40ServiceRoleBDD9998A', {
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

    const etlJob40SparkUiBucket02F50b0d = new s3.CfnBucket(this, 'EtlJob40SparkUIBucket02F50B0D', {
    });
    etlJob40SparkUiBucket02F50b0d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const etlJobWithFlexServiceRoleBa7c99a5 = new iam.CfnRole(this, 'EtlJobWithFLEXServiceRoleBA7C99A5', {
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

    const rayJobServiceRole51433C3d = new iam.CfnRole(this, 'RayJobServiceRole51433C3D', {
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

    const streamingJob20ServiceRole491E0fff = new iam.CfnRole(this, 'StreamingJob20ServiceRole491E0FFF', {
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

    const streamingJob30ServiceRole443B2fde = new iam.CfnRole(this, 'StreamingJob30ServiceRole443B2FDE', {
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

    const streamingJob40ServiceRole034Bdebd = new iam.CfnRole(this, 'StreamingJob40ServiceRole034BDEBD', {
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

    if (etlJob20ServiceRoleD520ca20 == null) { throw new Error(`A combination of conditions caused 'etlJob20ServiceRoleD520ca20' to be undefined. Fixit.`); }
    if (etlJob20SparkUiBucketFd07fbd8 == null) { throw new Error(`A combination of conditions caused 'etlJob20SparkUiBucketFd07fbd8' to be undefined. Fixit.`); }
    const etlJob20134354Dc = new glue.CfnJob(this, 'EtlJob20134354DC', {
      command: {
        name: 'glueetl',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: etlJob20ServiceRoleD520ca20.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        '--enable-continuous-cloudwatch-log': 'true',
        '--enable-continuous-log-filter': 'true',
        '--continuous-log-logStreamPrefix': 'EtlJob',
        '--enable-spark-ui': 'true',
        '--spark-event-logs-path': [
          's3://',
          etlJob20SparkUiBucketFd07fbd8.ref,
        ].join(''),
        arg1: 'value1',
        arg2: 'value2',
        '--conf': 'valueConf',
      },
      executionClass: 'STANDARD',
      executionProperty: {
        maxConcurrentRuns: 2,
      },
      glueVersion: '2.0',
      maxRetries: 2,
      name: 'EtlJob2.0',
      notificationProperty: {
        notifyDelayAfter: 1,
      },
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      timeout: 5,
      workerType: 'G.1X',
    });

    if (etlJob20ServiceRoleD520ca20 == null) { throw new Error(`A combination of conditions caused 'etlJob20ServiceRoleD520ca20' to be undefined. Fixit.`); }
    if (etlJob20SparkUiBucketFd07fbd8 == null) { throw new Error(`A combination of conditions caused 'etlJob20SparkUiBucketFd07fbd8' to be undefined. Fixit.`); }
    const etlJob20ServiceRoleDefaultPolicy37D28060 = new iam.CfnPolicy(this, 'EtlJob20ServiceRoleDefaultPolicy37D28060', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              etlJob20SparkUiBucketFd07fbd8.attrArn,
              [
                etlJob20SparkUiBucketFd07fbd8.attrArn,
                '/*',
              ].join(''),
            ],
          },
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
      policyName: 'EtlJob20ServiceRoleDefaultPolicy37D28060',
      roles: [
        etlJob20ServiceRoleD520ca20.ref,
      ],
    });

    if (etlJob30ServiceRole8E675579 == null) { throw new Error(`A combination of conditions caused 'etlJob30ServiceRole8E675579' to be undefined. Fixit.`); }
    if (etlJob30SparkUiBucket9D789346 == null) { throw new Error(`A combination of conditions caused 'etlJob30SparkUiBucket9D789346' to be undefined. Fixit.`); }
    const etlJob307A0f9470 = new glue.CfnJob(this, 'EtlJob307A0F9470', {
      command: {
        name: 'glueetl',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: etlJob30ServiceRole8E675579.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        '--enable-continuous-cloudwatch-log': 'true',
        '--enable-continuous-log-filter': 'true',
        '--continuous-log-logStreamPrefix': 'EtlJob',
        '--enable-spark-ui': 'true',
        '--spark-event-logs-path': [
          's3://',
          etlJob30SparkUiBucket9D789346.ref,
        ].join(''),
        arg1: 'value1',
        arg2: 'value2',
        '--conf': 'valueConf',
      },
      executionClass: 'STANDARD',
      executionProperty: {
        maxConcurrentRuns: 2,
      },
      glueVersion: '3.0',
      maxRetries: 2,
      name: 'EtlJob3.0',
      notificationProperty: {
        notifyDelayAfter: 1,
      },
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      timeout: 5,
      workerType: 'G.1X',
    });

    if (etlJob30ServiceRole8E675579 == null) { throw new Error(`A combination of conditions caused 'etlJob30ServiceRole8E675579' to be undefined. Fixit.`); }
    if (etlJob30SparkUiBucket9D789346 == null) { throw new Error(`A combination of conditions caused 'etlJob30SparkUiBucket9D789346' to be undefined. Fixit.`); }
    const etlJob30ServiceRoleDefaultPolicyE57add66 = new iam.CfnPolicy(this, 'EtlJob30ServiceRoleDefaultPolicyE57ADD66', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              etlJob30SparkUiBucket9D789346.attrArn,
              [
                etlJob30SparkUiBucket9D789346.attrArn,
                '/*',
              ].join(''),
            ],
          },
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
      policyName: 'EtlJob30ServiceRoleDefaultPolicyE57ADD66',
      roles: [
        etlJob30ServiceRole8E675579.ref,
      ],
    });

    if (etlJob40ServiceRoleBdd9998a == null) { throw new Error(`A combination of conditions caused 'etlJob40ServiceRoleBdd9998a' to be undefined. Fixit.`); }
    if (etlJob40SparkUiBucket02F50b0d == null) { throw new Error(`A combination of conditions caused 'etlJob40SparkUiBucket02F50b0d' to be undefined. Fixit.`); }
    const etlJob4046D61f0b = new glue.CfnJob(this, 'EtlJob4046D61F0B', {
      command: {
        name: 'glueetl',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: etlJob40ServiceRoleBdd9998a.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        '--enable-continuous-cloudwatch-log': 'true',
        '--enable-continuous-log-filter': 'true',
        '--continuous-log-logStreamPrefix': 'EtlJob',
        '--enable-spark-ui': 'true',
        '--spark-event-logs-path': [
          's3://',
          etlJob40SparkUiBucket02F50b0d.ref,
        ].join(''),
        arg1: 'value1',
        arg2: 'value2',
        '--conf': 'valueConf',
      },
      executionClass: 'STANDARD',
      executionProperty: {
        maxConcurrentRuns: 2,
      },
      glueVersion: '4.0',
      maxRetries: 2,
      name: 'EtlJob4.0',
      notificationProperty: {
        notifyDelayAfter: 1,
      },
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      timeout: 5,
      workerType: 'G.1X',
    });

    if (etlJob40ServiceRoleBdd9998a == null) { throw new Error(`A combination of conditions caused 'etlJob40ServiceRoleBdd9998a' to be undefined. Fixit.`); }
    if (etlJob40SparkUiBucket02F50b0d == null) { throw new Error(`A combination of conditions caused 'etlJob40SparkUiBucket02F50b0d' to be undefined. Fixit.`); }
    const etlJob40ServiceRoleDefaultPolicy369Bd98d = new iam.CfnPolicy(this, 'EtlJob40ServiceRoleDefaultPolicy369BD98D', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              etlJob40SparkUiBucket02F50b0d.attrArn,
              [
                etlJob40SparkUiBucket02F50b0d.attrArn,
                '/*',
              ].join(''),
            ],
          },
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
      policyName: 'EtlJob40ServiceRoleDefaultPolicy369BD98D',
      roles: [
        etlJob40ServiceRoleBdd9998a.ref,
      ],
    });

    if (etlJobWithFlexServiceRoleBa7c99a5 == null) { throw new Error(`A combination of conditions caused 'etlJobWithFlexServiceRoleBa7c99a5' to be undefined. Fixit.`); }
    const etlJobWithFlex928b4212 = new glue.CfnJob(this, 'EtlJobWithFLEX928B4212', {
      command: {
        name: 'glueetl',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: etlJobWithFlexServiceRoleBa7c99a5.attrArn,
      defaultArguments: {
        '--job-language': 'python',
      },
      executionClass: 'FLEX',
      glueVersion: '3.0',
      name: 'EtlJobWithFLEX',
      numberOfWorkers: 10,
      workerType: 'G.1X',
    });

    if (etlJobWithFlexServiceRoleBa7c99a5 == null) { throw new Error(`A combination of conditions caused 'etlJobWithFlexServiceRoleBa7c99a5' to be undefined. Fixit.`); }
    const etlJobWithFlexServiceRoleDefaultPolicyEa63c5fe = new iam.CfnPolicy(this, 'EtlJobWithFLEXServiceRoleDefaultPolicyEA63C5FE', {
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
      policyName: 'EtlJobWithFLEXServiceRoleDefaultPolicyEA63C5FE',
      roles: [
        etlJobWithFlexServiceRoleBa7c99a5.ref,
      ],
    });

    if (rayJobServiceRole51433C3d == null) { throw new Error(`A combination of conditions caused 'rayJobServiceRole51433C3d' to be undefined. Fixit.`); }
    const rayJob2F7864d9 = new glue.CfnJob(this, 'RayJob2F7864D9', {
      command: {
        name: 'glueray',
        pythonVersion: '3.9',
        runtime: 'Ray2.4',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: rayJobServiceRole51433C3d.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '4.0',
      name: 'RayJob',
      numberOfWorkers: 2,
      tags: {
        key: 'value',
      },
      workerType: 'Z.2X',
    });

    if (rayJobServiceRole51433C3d == null) { throw new Error(`A combination of conditions caused 'rayJobServiceRole51433C3d' to be undefined. Fixit.`); }
    const rayJobServiceRoleDefaultPolicyA615640d = new iam.CfnPolicy(this, 'RayJobServiceRoleDefaultPolicyA615640D', {
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
      policyName: 'RayJobServiceRoleDefaultPolicyA615640D',
      roles: [
        rayJobServiceRole51433C3d.ref,
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
      role: shellJob39ServiceRole2F6f3768.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '1.0',
      name: 'ShellJob39',
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
      role: shellJobServiceRoleCf97bc4b.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '1.0',
      name: 'ShellJob',
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

    if (streamingJob20ServiceRole491E0fff == null) { throw new Error(`A combination of conditions caused 'streamingJob20ServiceRole491E0fff' to be undefined. Fixit.`); }
    const streamingJob20355B58c7 = new glue.CfnJob(this, 'StreamingJob20355B58C7', {
      command: {
        name: 'gluestreaming',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: streamingJob20ServiceRole491E0fff.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '2.0',
      name: 'StreamingJob2.0',
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      workerType: 'G.1X',
    });

    if (streamingJob20ServiceRole491E0fff == null) { throw new Error(`A combination of conditions caused 'streamingJob20ServiceRole491E0fff' to be undefined. Fixit.`); }
    const streamingJob20ServiceRoleDefaultPolicy3Cf74b2d = new iam.CfnPolicy(this, 'StreamingJob20ServiceRoleDefaultPolicy3CF74B2D', {
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
      policyName: 'StreamingJob20ServiceRoleDefaultPolicy3CF74B2D',
      roles: [
        streamingJob20ServiceRole491E0fff.ref,
      ],
    });

    if (streamingJob30ServiceRole443B2fde == null) { throw new Error(`A combination of conditions caused 'streamingJob30ServiceRole443B2fde' to be undefined. Fixit.`); }
    const streamingJob30E005fbeb = new glue.CfnJob(this, 'StreamingJob30E005FBEB', {
      command: {
        name: 'gluestreaming',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: streamingJob30ServiceRole443B2fde.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '3.0',
      name: 'StreamingJob3.0',
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      workerType: 'G.025X',
    });

    if (streamingJob30ServiceRole443B2fde == null) { throw new Error(`A combination of conditions caused 'streamingJob30ServiceRole443B2fde' to be undefined. Fixit.`); }
    const streamingJob30ServiceRoleDefaultPolicy0C15d010 = new iam.CfnPolicy(this, 'StreamingJob30ServiceRoleDefaultPolicy0C15D010', {
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
      policyName: 'StreamingJob30ServiceRoleDefaultPolicy0C15D010',
      roles: [
        streamingJob30ServiceRole443B2fde.ref,
      ],
    });

    if (streamingJob40ServiceRole034Bdebd == null) { throw new Error(`A combination of conditions caused 'streamingJob40ServiceRole034Bdebd' to be undefined. Fixit.`); }
    const streamingJob40E284a782 = new glue.CfnJob(this, 'StreamingJob40E284A782', {
      command: {
        name: 'gluestreaming',
        pythonVersion: '3',
        scriptLocation: [
          's3://',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/432033e3218068a915d2532fa9be7858a12b228a2ae6e5c10faccd9097b1e855.py',
        ].join(''),
      },
      role: streamingJob40ServiceRole034Bdebd.attrArn,
      defaultArguments: {
        '--job-language': 'python',
        arg1: 'value1',
        arg2: 'value2',
      },
      glueVersion: '4.0',
      name: 'StreamingJob4.0',
      numberOfWorkers: 10,
      tags: {
        key: 'value',
      },
      workerType: 'G.025X',
    });

    if (streamingJob40ServiceRole034Bdebd == null) { throw new Error(`A combination of conditions caused 'streamingJob40ServiceRole034Bdebd' to be undefined. Fixit.`); }
    const streamingJob40ServiceRoleDefaultPolicy0667C434 = new iam.CfnPolicy(this, 'StreamingJob40ServiceRoleDefaultPolicy0667C434', {
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
      policyName: 'StreamingJob40ServiceRoleDefaultPolicy0667C434',
      roles: [
        streamingJob40ServiceRole034Bdebd.ref,
      ],
    });

    if (etlJob20134354Dc == null) { throw new Error(`A combination of conditions caused 'etlJob20134354Dc' to be undefined. Fixit.`); }
    const etlJob20SuccessMetricRule1759F889 = new events.CfnRule(this, 'EtlJob20SuccessMetricRule1759F889', {
      description: [
        'Rule triggered when Glue job ',
        etlJob20134354Dc.ref,
        ' is in SUCCEEDED state',
      ].join(''),
      eventPattern: {
        source: [
          'aws.glue',
        ],
        'detail-type': [
          'Glue Job State Change',
          'Glue Job Run Status',
        ],
        detail: {
          jobName: [
            etlJob20134354Dc.ref,
          ],
          state: [
            'SUCCEEDED',
          ],
        },
      },
      state: 'ENABLED',
    });

    if (etlJob307A0f9470 == null) { throw new Error(`A combination of conditions caused 'etlJob307A0f9470' to be undefined. Fixit.`); }
    const etlJob30SuccessMetricRuleF8870f8a = new events.CfnRule(this, 'EtlJob30SuccessMetricRuleF8870F8A', {
      description: [
        'Rule triggered when Glue job ',
        etlJob307A0f9470.ref,
        ' is in SUCCEEDED state',
      ].join(''),
      eventPattern: {
        source: [
          'aws.glue',
        ],
        'detail-type': [
          'Glue Job State Change',
          'Glue Job Run Status',
        ],
        detail: {
          jobName: [
            etlJob307A0f9470.ref,
          ],
          state: [
            'SUCCEEDED',
          ],
        },
      },
      state: 'ENABLED',
    });

    if (etlJob4046D61f0b == null) { throw new Error(`A combination of conditions caused 'etlJob4046D61f0b' to be undefined. Fixit.`); }
    const etlJob40SuccessMetricRule00D3ef34 = new events.CfnRule(this, 'EtlJob40SuccessMetricRule00D3EF34', {
      description: [
        'Rule triggered when Glue job ',
        etlJob4046D61f0b.ref,
        ' is in SUCCEEDED state',
      ].join(''),
      eventPattern: {
        source: [
          'aws.glue',
        ],
        'detail-type': [
          'Glue Job State Change',
          'Glue Job Run Status',
        ],
        detail: {
          jobName: [
            etlJob4046D61f0b.ref,
          ],
          state: [
            'SUCCEEDED',
          ],
        },
      },
      state: 'ENABLED',
    });
  }
}

