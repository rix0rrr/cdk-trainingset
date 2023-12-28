import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface Stack2Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack2 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Stack2Props = {}) {
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
    const myFunc1ServiceRoleF96c5b5c = new iam.CfnRole(this, 'MyFunc1ServiceRoleF96C5B5C', {
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

    const myFunc2ServiceRole68E50443 = new iam.CfnRole(this, 'MyFunc2ServiceRole68E50443', {
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

    const myFunc3ServiceRoleA69795ed = new iam.CfnRole(this, 'MyFunc3ServiceRoleA69795ED', {
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

    const myFunc4ServiceRole93C4deff = new iam.CfnRole(this, 'MyFunc4ServiceRole93C4DEFF', {
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

    const myFunc5ServiceRoleFe4ce92b = new iam.CfnRole(this, 'MyFunc5ServiceRoleFE4CE92B', {
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

    if (myFunc1ServiceRoleF96c5b5c == null) { throw new Error(`A combination of conditions caused 'myFunc1ServiceRoleF96c5b5c' to be undefined. Fixit.`); }
    const myFunc1ServiceRoleDefaultPolicy3C5e9573 = new iam.CfnPolicy(this, 'MyFunc1ServiceRoleDefaultPolicy3C5E9573', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'xray:PutTelemetryRecords',
              'xray:PutTraceSegments',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunc1ServiceRoleDefaultPolicy3C5E9573',
      roles: [
        myFunc1ServiceRoleF96c5b5c.ref,
      ],
    });

    if (myFunc2ServiceRole68E50443 == null) { throw new Error(`A combination of conditions caused 'myFunc2ServiceRole68E50443' to be undefined. Fixit.`); }
    const myFunc2ServiceRoleDefaultPolicyEf3319f6 = new iam.CfnPolicy(this, 'MyFunc2ServiceRoleDefaultPolicyEF3319F6', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'xray:PutTelemetryRecords',
              'xray:PutTraceSegments',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunc2ServiceRoleDefaultPolicyEF3319F6',
      roles: [
        myFunc2ServiceRole68E50443.ref,
      ],
    });

    if (myFunc3ServiceRoleA69795ed == null) { throw new Error(`A combination of conditions caused 'myFunc3ServiceRoleA69795ed' to be undefined. Fixit.`); }
    const myFunc3ServiceRoleDefaultPolicy449C4cba = new iam.CfnPolicy(this, 'MyFunc3ServiceRoleDefaultPolicy449C4CBA', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'xray:PutTelemetryRecords',
              'xray:PutTraceSegments',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunc3ServiceRoleDefaultPolicy449C4CBA',
      roles: [
        myFunc3ServiceRoleA69795ed.ref,
      ],
    });

    if (myFunc4ServiceRole93C4deff == null) { throw new Error(`A combination of conditions caused 'myFunc4ServiceRole93C4deff' to be undefined. Fixit.`); }
    const myFunc4ServiceRoleDefaultPolicy68C57cb2 = new iam.CfnPolicy(this, 'MyFunc4ServiceRoleDefaultPolicy68C57CB2', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'xray:PutTelemetryRecords',
              'xray:PutTraceSegments',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunc4ServiceRoleDefaultPolicy68C57CB2',
      roles: [
        myFunc4ServiceRole93C4deff.ref,
      ],
    });

    if (myFunc5ServiceRoleFe4ce92b == null) { throw new Error(`A combination of conditions caused 'myFunc5ServiceRoleFe4ce92b' to be undefined. Fixit.`); }
    const myFunc5ServiceRoleDefaultPolicy96Abea66 = new iam.CfnPolicy(this, 'MyFunc5ServiceRoleDefaultPolicy96ABEA66', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'xray:PutTelemetryRecords',
              'xray:PutTraceSegments',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunc5ServiceRoleDefaultPolicy96ABEA66',
      roles: [
        myFunc5ServiceRoleFe4ce92b.ref,
      ],
    });

    if (myFunc1ServiceRoleDefaultPolicy3C5e9573 == null) { throw new Error(`A combination of conditions caused 'myFunc1ServiceRoleDefaultPolicy3C5e9573' to be undefined. Fixit.`); }
    if (myFunc1ServiceRoleF96c5b5c == null) { throw new Error(`A combination of conditions caused 'myFunc1ServiceRoleF96c5b5c' to be undefined. Fixit.`); }
    const myFunc11Be70a62 = new lambda.CfnFunction(this, 'MyFunc11BE70A62', {
      architectures: [
        'x86_64',
      ],
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      environment: {
        variables: {
          'AWS_LAMBDA_EXEC_WRAPPER': '/opt/otel-handler',
        },
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':901920570463:layer:aws-otel-nodejs-amd64-ver-1-17-1:1',
        ].join(''),
      ],
      role: myFunc1ServiceRoleF96c5b5c.attrArn,
      runtime: 'nodejs18.x',
      tracingConfig: {
        mode: 'Active',
      },
    });
    myFunc11Be70a62.addDependency(myFunc1ServiceRoleDefaultPolicy3C5e9573);
    myFunc11Be70a62.addDependency(myFunc1ServiceRoleF96c5b5c);

    if (myFunc2ServiceRole68E50443 == null) { throw new Error(`A combination of conditions caused 'myFunc2ServiceRole68E50443' to be undefined. Fixit.`); }
    if (myFunc2ServiceRoleDefaultPolicyEf3319f6 == null) { throw new Error(`A combination of conditions caused 'myFunc2ServiceRoleDefaultPolicyEf3319f6' to be undefined. Fixit.`); }
    const myFunc242557A97 = new lambda.CfnFunction(this, 'MyFunc242557A97', {
      code: {
        zipFile: 'def handler(event, context): pass',
      },
      environment: {
        variables: {
          'AWS_LAMBDA_EXEC_WRAPPER': '/opt/otel-instrument',
        },
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':901920570463:layer:aws-otel-python-amd64-ver-1-20-0:3',
        ].join(''),
      ],
      role: myFunc2ServiceRole68E50443.attrArn,
      runtime: 'python3.9',
      tracingConfig: {
        mode: 'Active',
      },
    });
    myFunc242557A97.addDependency(myFunc2ServiceRoleDefaultPolicyEf3319f6);
    myFunc242557A97.addDependency(myFunc2ServiceRole68E50443);

    if (myFunc3ServiceRoleA69795ed == null) { throw new Error(`A combination of conditions caused 'myFunc3ServiceRoleA69795ed' to be undefined. Fixit.`); }
    if (myFunc3ServiceRoleDefaultPolicy449C4cba == null) { throw new Error(`A combination of conditions caused 'myFunc3ServiceRoleDefaultPolicy449C4cba' to be undefined. Fixit.`); }
    const myFunc3666B7a2f = new lambda.CfnFunction(this, 'MyFunc3666B7A2F', {
      code: {
        zipFile: 'def handler(event, context): pass',
      },
      environment: {
        variables: {
          'AWS_LAMBDA_EXEC_WRAPPER': '/opt/otel-instrument',
        },
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':901920570463:layer:aws-otel-java-wrapper-amd64-ver-1-31-0:1',
        ].join(''),
      ],
      role: myFunc3ServiceRoleA69795ed.attrArn,
      runtime: 'python3.9',
      tracingConfig: {
        mode: 'Active',
      },
    });
    myFunc3666B7a2f.addDependency(myFunc3ServiceRoleDefaultPolicy449C4cba);
    myFunc3666B7a2f.addDependency(myFunc3ServiceRoleA69795ed);

    if (myFunc4ServiceRole93C4deff == null) { throw new Error(`A combination of conditions caused 'myFunc4ServiceRole93C4deff' to be undefined. Fixit.`); }
    if (myFunc4ServiceRoleDefaultPolicy68C57cb2 == null) { throw new Error(`A combination of conditions caused 'myFunc4ServiceRoleDefaultPolicy68C57cb2' to be undefined. Fixit.`); }
    const myFunc4B88f85c6 = new lambda.CfnFunction(this, 'MyFunc4B88F85C6', {
      code: {
        zipFile: 'def handler(event, context): pass',
      },
      environment: {
        variables: {
          'AWS_LAMBDA_EXEC_WRAPPER': '/opt/otel-instrument',
        },
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':901920570463:layer:aws-otel-java-agent-amd64-ver-1-31-0:1',
        ].join(''),
      ],
      role: myFunc4ServiceRole93C4deff.attrArn,
      runtime: 'python3.9',
      tracingConfig: {
        mode: 'Active',
      },
    });
    myFunc4B88f85c6.addDependency(myFunc4ServiceRoleDefaultPolicy68C57cb2);
    myFunc4B88f85c6.addDependency(myFunc4ServiceRole93C4deff);

    if (myFunc5ServiceRoleDefaultPolicy96Abea66 == null) { throw new Error(`A combination of conditions caused 'myFunc5ServiceRoleDefaultPolicy96Abea66' to be undefined. Fixit.`); }
    if (myFunc5ServiceRoleFe4ce92b == null) { throw new Error(`A combination of conditions caused 'myFunc5ServiceRoleFe4ce92b' to be undefined. Fixit.`); }
    const myFunc586573B53 = new lambda.CfnFunction(this, 'MyFunc586573B53', {
      code: {
        zipFile: 'def handler(event, context): pass',
      },
      environment: {
        variables: {
          'AWS_LAMBDA_EXEC_WRAPPER': '/opt/otel-instrument',
        },
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':901920570463:layer:aws-otel-collector-amd64-ver-0-88-0:1',
        ].join(''),
      ],
      role: myFunc5ServiceRoleFe4ce92b.attrArn,
      runtime: 'python3.9',
      tracingConfig: {
        mode: 'Active',
      },
    });
    myFunc586573B53.addDependency(myFunc5ServiceRoleDefaultPolicy96Abea66);
    myFunc586573B53.addDependency(myFunc5ServiceRoleFe4ce92b);
  }
}

