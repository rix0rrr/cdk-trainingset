import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkLambdaChainProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLambdaChain extends cdk.Stack {
  public readonly firstFunctionName;
  public readonly thirdFunctionName;
  public readonly errorFunctionName;
  public readonly exportsOutputRefFirst8D4707f1b3e37fdf;
  public readonly exportsOutputRefThird1125870Ff05390b4;

  public constructor(scope: cdk.App, id: string, props: AwsCdkLambdaChainProps = {}) {
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
    const errorServiceRoleCe484966 = new iam.CfnRole(this, 'ErrorServiceRoleCE484966', {
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

    const firstServiceRole097Db3a5 = new iam.CfnRole(this, 'FirstServiceRole097DB3A5', {
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

    const secondServiceRole55940A31 = new iam.CfnRole(this, 'SecondServiceRole55940A31', {
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

    const thirdServiceRole42701801 = new iam.CfnRole(this, 'ThirdServiceRole42701801', {
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

    if (errorServiceRoleCe484966 == null) { throw new Error(`A combination of conditions caused 'errorServiceRoleCe484966' to be undefined. Fixit.`); }
    const errorD9f0b79d = new lambda.CfnFunction(this, 'ErrorD9F0B79D', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        console.log(\'Event: %j\', event);\n        if (event.status === \'error\') throw new Error(\'UnkownError\');\n        return event;\n      };',
      },
      handler: 'index.handler',
      role: errorServiceRoleCe484966.attrArn,
      runtime: 'nodejs18.x',
    });
    errorD9f0b79d.addDependency(errorServiceRoleCe484966);

    if (firstServiceRole097Db3a5 == null) { throw new Error(`A combination of conditions caused 'firstServiceRole097Db3a5' to be undefined. Fixit.`); }
    const firstServiceRoleDefaultPolicyB5ef41c4 = new iam.CfnPolicy(this, 'FirstServiceRoleDefaultPolicyB5EF41C4', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':event-bus/default',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FirstServiceRoleDefaultPolicyB5EF41C4',
      roles: [
        firstServiceRole097Db3a5.ref,
      ],
    });

    if (secondServiceRole55940A31 == null) { throw new Error(`A combination of conditions caused 'secondServiceRole55940A31' to be undefined. Fixit.`); }
    const secondServiceRoleDefaultPolicyB593e14a = new iam.CfnPolicy(this, 'SecondServiceRoleDefaultPolicyB593E14A', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':event-bus/default',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SecondServiceRoleDefaultPolicyB593E14A',
      roles: [
        secondServiceRole55940A31.ref,
      ],
    });

    if (thirdServiceRole42701801 == null) { throw new Error(`A combination of conditions caused 'thirdServiceRole42701801' to be undefined. Fixit.`); }
    const third1125870F = new lambda.CfnFunction(this, 'Third1125870F', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        console.log(\'Event: %j\', event);\n        if (event.status === \'error\') throw new Error(\'UnkownError\');\n        return event;\n      };',
      },
      handler: 'index.handler',
      role: thirdServiceRole42701801.attrArn,
      runtime: 'nodejs18.x',
    });
    third1125870F.addDependency(thirdServiceRole42701801);

    if (firstServiceRole097Db3a5 == null) { throw new Error(`A combination of conditions caused 'firstServiceRole097Db3a5' to be undefined. Fixit.`); }
    if (firstServiceRoleDefaultPolicyB5ef41c4 == null) { throw new Error(`A combination of conditions caused 'firstServiceRoleDefaultPolicyB5ef41c4' to be undefined. Fixit.`); }
    const first8D4707f1 = new lambda.CfnFunction(this, 'First8D4707F1', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        console.log(\'Event: %j\', event);\n        if (event.status === \'error\') throw new Error(\'UnkownError\');\n        return event;\n      };',
      },
      handler: 'index.handler',
      role: firstServiceRole097Db3a5.attrArn,
      runtime: 'nodejs18.x',
    });
    first8D4707f1.addDependency(firstServiceRoleDefaultPolicyB5ef41c4);
    first8D4707f1.addDependency(firstServiceRole097Db3a5);

    if (secondServiceRole55940A31 == null) { throw new Error(`A combination of conditions caused 'secondServiceRole55940A31' to be undefined. Fixit.`); }
    if (secondServiceRoleDefaultPolicyB593e14a == null) { throw new Error(`A combination of conditions caused 'secondServiceRoleDefaultPolicyB593e14a' to be undefined. Fixit.`); }
    const second394350F9 = new lambda.CfnFunction(this, 'Second394350F9', {
      code: {
        zipFile: 'exports.handler = async (event) => {\n        console.log(\'Event: %j\', event);\n        if (event.status === \'error\') throw new Error(\'UnkownError\');\n        return event;\n      };',
      },
      handler: 'index.handler',
      role: secondServiceRole55940A31.attrArn,
      runtime: 'nodejs18.x',
    });
    second394350F9.addDependency(secondServiceRoleDefaultPolicyB593e14a);
    second394350F9.addDependency(secondServiceRole55940A31);

    if (first8D4707f1 == null) { throw new Error(`A combination of conditions caused 'first8D4707f1' to be undefined. Fixit.`); }
    const firstEventInvokeConfig7De6209e = new lambda.CfnEventInvokeConfig(this, 'FirstEventInvokeConfig7DE6209E', {
      destinationConfig: {
        onFailure: {
          destination: [
            'arn:',
            this.partition,
            ':events:',
            this.region,
            ':',
            this.account,
            ':event-bus/default',
          ].join(''),
        },
        onSuccess: {
          destination: [
            'arn:',
            this.partition,
            ':events:',
            this.region,
            ':',
            this.account,
            ':event-bus/default',
          ].join(''),
        },
      },
      functionName: first8D4707f1.ref,
      maximumRetryAttempts: 0,
      qualifier: '$LATEST',
    });

    if (errorD9f0b79d == null) { throw new Error(`A combination of conditions caused 'errorD9f0b79d' to be undefined. Fixit.`); }
    if (first8D4707f1 == null) { throw new Error(`A combination of conditions caused 'first8D4707f1' to be undefined. Fixit.`); }
    const firstEventInvokeConfigFailureA1e005bc = new events.CfnRule(this, 'FirstEventInvokeConfigFailureA1E005BC', {
      eventPattern: {
        'detail-type': [
          'Lambda Function Invocation Result - Failure',
        ],
        resources: [
          [
            first8D4707f1.attrArn,
            ':$LATEST',
          ].join(''),
        ],
        source: [
          'lambda',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: errorD9f0b79d.attrArn,
          id: 'Target0',
          inputPath: '$.detail.responsePayload',
        },
      ],
    });

    if (first8D4707f1 == null) { throw new Error(`A combination of conditions caused 'first8D4707f1' to be undefined. Fixit.`); }
    if (second394350F9 == null) { throw new Error(`A combination of conditions caused 'second394350F9' to be undefined. Fixit.`); }
    const firstEventInvokeConfigSuccess865Ff6ff = new events.CfnRule(this, 'FirstEventInvokeConfigSuccess865FF6FF', {
      eventPattern: {
        'detail-type': [
          'Lambda Function Invocation Result - Success',
        ],
        resources: [
          [
            first8D4707f1.attrArn,
            ':$LATEST',
          ].join(''),
        ],
        source: [
          'lambda',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: second394350F9.attrArn,
          id: 'Target0',
          inputPath: '$.detail.responsePayload',
        },
      ],
    });

    if (second394350F9 == null) { throw new Error(`A combination of conditions caused 'second394350F9' to be undefined. Fixit.`); }
    const secondEventInvokeConfig3F9de36c = new lambda.CfnEventInvokeConfig(this, 'SecondEventInvokeConfig3F9DE36C', {
      destinationConfig: {
        onSuccess: {
          destination: [
            'arn:',
            this.partition,
            ':events:',
            this.region,
            ':',
            this.account,
            ':event-bus/default',
          ].join(''),
        },
      },
      functionName: second394350F9.ref,
      qualifier: '$LATEST',
    });

    if (second394350F9 == null) { throw new Error(`A combination of conditions caused 'second394350F9' to be undefined. Fixit.`); }
    if (third1125870F == null) { throw new Error(`A combination of conditions caused 'third1125870F' to be undefined. Fixit.`); }
    const secondEventInvokeConfigSuccess53614893 = new events.CfnRule(this, 'SecondEventInvokeConfigSuccess53614893', {
      eventPattern: {
        'detail-type': [
          'Lambda Function Invocation Result - Success',
        ],
        resources: [
          [
            second394350F9.attrArn,
            ':$LATEST',
          ].join(''),
        ],
        source: [
          'lambda',
        ],
      },
      state: 'ENABLED',
      targets: [
        {
          arn: third1125870F.attrArn,
          id: 'Target0',
          inputPath: '$.detail.responsePayload',
        },
      ],
    });

    if (errorD9f0b79d == null) { throw new Error(`A combination of conditions caused 'errorD9f0b79d' to be undefined. Fixit.`); }
    if (firstEventInvokeConfigFailureA1e005bc == null) { throw new Error(`A combination of conditions caused 'firstEventInvokeConfigFailureA1e005bc' to be undefined. Fixit.`); }
    const firstEventInvokeConfigFailureAllowEventRuleawscdklambdachainErrorC073cd8dcad68018 = new lambda.CfnPermission(this, 'FirstEventInvokeConfigFailureAllowEventRuleawscdklambdachainErrorC073CD8DCAD68018', {
      action: 'lambda:InvokeFunction',
      functionName: errorD9f0b79d.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: firstEventInvokeConfigFailureA1e005bc.attrArn,
    });

    if (firstEventInvokeConfigSuccess865Ff6ff == null) { throw new Error(`A combination of conditions caused 'firstEventInvokeConfigSuccess865Ff6ff' to be undefined. Fixit.`); }
    if (second394350F9 == null) { throw new Error(`A combination of conditions caused 'second394350F9' to be undefined. Fixit.`); }
    const firstEventInvokeConfigSuccessAllowEventRuleawscdklambdachainSecond178F48f8a8de2790 = new lambda.CfnPermission(this, 'FirstEventInvokeConfigSuccessAllowEventRuleawscdklambdachainSecond178F48F8A8DE2790', {
      action: 'lambda:InvokeFunction',
      functionName: second394350F9.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: firstEventInvokeConfigSuccess865Ff6ff.attrArn,
    });

    if (secondEventInvokeConfigSuccess53614893 == null) { throw new Error(`A combination of conditions caused 'secondEventInvokeConfigSuccess53614893' to be undefined. Fixit.`); }
    if (third1125870F == null) { throw new Error(`A combination of conditions caused 'third1125870F' to be undefined. Fixit.`); }
    const secondEventInvokeConfigSuccessAllowEventRuleawscdklambdachainThird031C7ff6aba1c15a = new lambda.CfnPermission(this, 'SecondEventInvokeConfigSuccessAllowEventRuleawscdklambdachainThird031C7FF6ABA1C15A', {
      action: 'lambda:InvokeFunction',
      functionName: third1125870F.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: secondEventInvokeConfigSuccess53614893.attrArn,
    });

    // Outputs
    this.firstFunctionName = first8D4707f1.ref;
    new cdk.CfnOutput(this, 'CfnOutputFirstFunctionName', {
      key: 'FirstFunctionName',
      value: this.firstFunctionName!.toString(),
    });
    this.thirdFunctionName = third1125870F.ref;
    new cdk.CfnOutput(this, 'CfnOutputThirdFunctionName', {
      key: 'ThirdFunctionName',
      value: this.thirdFunctionName!.toString(),
    });
    this.errorFunctionName = errorD9f0b79d.ref;
    new cdk.CfnOutput(this, 'CfnOutputErrorFunctionName', {
      key: 'ErrorFunctionName',
      value: this.errorFunctionName!.toString(),
    });
    this.exportsOutputRefFirst8D4707f1b3e37fdf = first8D4707f1.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefFirst8D4707F1B3E37FDF', {
      key: 'ExportsOutputRefFirst8D4707F1B3E37FDF',
      exportName: 'aws-cdk-lambda-chain:ExportsOutputRefFirst8D4707F1B3E37FDF',
      value: this.exportsOutputRefFirst8D4707f1b3e37fdf!.toString(),
    });
    this.exportsOutputRefThird1125870Ff05390b4 = third1125870F.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefThird1125870FF05390B4', {
      key: 'ExportsOutputRefThird1125870FF05390B4',
      exportName: 'aws-cdk-lambda-chain:ExportsOutputRefThird1125870FF05390B4',
      value: this.exportsOutputRefThird1125870Ff05390b4!.toString(),
    });
  }
}

