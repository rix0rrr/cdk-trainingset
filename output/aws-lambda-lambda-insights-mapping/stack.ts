import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const cloudwatchlambdainsightsversionMap: Record<string, Record<string, string>> = {
      'af-south-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:af-south-1:012438385374:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws:lambda:af-south-1:012438385374:layer:LambdaInsightsExtension:9',
      },
      'ap-east-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-east-1:519774774795:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-east-1:519774774795:layer:LambdaInsightsExtension:9',
      },
      'ap-northeast-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-northeast-1:580247275435:layer:LambdaInsightsExtension:23',
      },
      'ap-northeast-2': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-northeast-2:580247275435:layer:LambdaInsightsExtension:16',
      },
      'ap-south-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-south-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'ap-southeast-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-southeast-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'ap-southeast-2': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ap-southeast-2:580247275435:layer:LambdaInsightsExtension:16',
      },
      'ca-central-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:ca-central-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'cn-north-1': {
        '1x0x98x0xx86x64': 'arn:aws-cn:lambda:cn-north-1:488211338238:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws-cn:lambda:cn-north-1:488211338238:layer:LambdaInsightsExtension:9',
      },
      'cn-northwest-1': {
        '1x0x98x0xx86x64': 'arn:aws-cn:lambda:cn-northwest-1:488211338238:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws-cn:lambda:cn-northwest-1:488211338238:layer:LambdaInsightsExtension:9',
      },
      'eu-central-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-central-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'eu-north-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-north-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'eu-south-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-south-1:339249233099:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-south-1:339249233099:layer:LambdaInsightsExtension:9',
      },
      'eu-west-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'eu-west-2': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-west-2:580247275435:layer:LambdaInsightsExtension:16',
      },
      'eu-west-3': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:eu-west-3:580247275435:layer:LambdaInsightsExtension:16',
      },
      'me-south-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:me-south-1:285320876703:layer:LambdaInsightsExtension:8',
        '1x0x119x0xx86x64': 'arn:aws:lambda:me-south-1:285320876703:layer:LambdaInsightsExtension:9',
      },
      'sa-east-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:sa-east-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'us-east-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:us-east-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'us-east-2': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:us-east-2:580247275435:layer:LambdaInsightsExtension:16',
      },
      'us-west-1': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:us-west-1:580247275435:layer:LambdaInsightsExtension:16',
      },
      'us-west-2': {
        '1x0x98x0xx86x64': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:14',
        '1x0x119x0xx86x64': 'arn:aws:lambda:us-west-2:580247275435:layer:LambdaInsightsExtension:16',
      },
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
        ].join(''),
      ],
    });

    const myFunc6ServiceRoleCddbc2c6 = new iam.CfnRole(this, 'MyFunc6ServiceRoleCDDBC2C6', {
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
        ].join(''),
      ],
    });

    if (myFunc1ServiceRoleF96c5b5c == null) { throw new Error(`A combination of conditions caused 'myFunc1ServiceRoleF96c5b5c' to be undefined. Fixit.`); }
    const myFunc11Be70a62 = new lambda.CfnFunction(this, 'MyFunc11BE70A62', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':580247275435:layer:LambdaInsightsExtension:2',
        ].join(''),
      ],
      role: myFunc1ServiceRoleF96c5b5c.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc11Be70a62.addDependency(myFunc1ServiceRoleF96c5b5c);

    if (myFunc2ServiceRole68E50443 == null) { throw new Error(`A combination of conditions caused 'myFunc2ServiceRole68E50443' to be undefined. Fixit.`); }
    const myFunc242557A97 = new lambda.CfnFunction(this, 'MyFunc242557A97', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':580247275435:layer:LambdaInsightsExtension:11',
        ].join(''),
      ],
      role: myFunc2ServiceRole68E50443.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc242557A97.addDependency(myFunc2ServiceRole68E50443);

    if (myFunc3ServiceRoleA69795ed == null) { throw new Error(`A combination of conditions caused 'myFunc3ServiceRoleA69795ed' to be undefined. Fixit.`); }
    const myFunc3666B7a2f = new lambda.CfnFunction(this, 'MyFunc3666B7A2F', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':580247275435:layer:LambdaInsightsExtension:12',
        ].join(''),
      ],
      role: myFunc3ServiceRoleA69795ed.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc3666B7a2f.addDependency(myFunc3ServiceRoleA69795ed);

    if (myFunc4ServiceRole93C4deff == null) { throw new Error(`A combination of conditions caused 'myFunc4ServiceRole93C4deff' to be undefined. Fixit.`); }
    const myFunc4B88f85c6 = new lambda.CfnFunction(this, 'MyFunc4B88F85C6', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        cloudwatchlambdainsightsversionMap[this.region]['1x0x98x0xx86x64'],
      ],
      role: myFunc4ServiceRole93C4deff.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc4B88f85c6.addDependency(myFunc4ServiceRole93C4deff);

    if (myFunc5ServiceRoleFe4ce92b == null) { throw new Error(`A combination of conditions caused 'myFunc5ServiceRoleFe4ce92b' to be undefined. Fixit.`); }
    const myFunc586573B53 = new lambda.CfnFunction(this, 'MyFunc586573B53', {
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        cloudwatchlambdainsightsversionMap[this.region]['1x0x119x0xx86x64'],
      ],
      role: myFunc5ServiceRoleFe4ce92b.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc586573B53.addDependency(myFunc5ServiceRoleFe4ce92b);

    if (myFunc6ServiceRoleCddbc2c6 == null) { throw new Error(`A combination of conditions caused 'myFunc6ServiceRoleCddbc2c6' to be undefined. Fixit.`); }
    const myFunc60D944984 = new lambda.CfnFunction(this, 'MyFunc60D944984', {
      architectures: [
        'arm64',
      ],
      code: {
        zipFile: 'exports.handler = function handler(event, _context, callback) {\n    console.log(JSON.stringify(event, undefined, 2));\n    return callback();\n}',
      },
      handler: 'index.handler',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':580247275435:layer:LambdaInsightsExtension-Arm64:1',
        ].join(''),
      ],
      role: myFunc6ServiceRoleCddbc2c6.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunc60D944984.addDependency(myFunc6ServiceRoleCddbc2c6);
  }
}

