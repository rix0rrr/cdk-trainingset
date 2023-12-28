import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iotevents from 'aws-cdk-lib/aws-iotevents';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaInvokeActionTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaInvokeActionTestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaInvokeActionTestStackProps = {}) {
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
    const myDetectorModelDetectorModelRoleF2fb4d88 = new iam.CfnRole(this, 'MyDetectorModelDetectorModelRoleF2FB4D88', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'iotevents.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myFunctionServiceRole3C357ff2 = new iam.CfnRole(this, 'MyFunctionServiceRole3C357FF2', {
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

    const myInput08947B23 = new iotevents.CfnInput(this, 'MyInput08947B23', {
      inputDefinition: {
        attributes: [
          {
            jsonPath: 'payload.deviceId',
          },
        ],
      },
      inputName: 'test_input',
    });

    if (myFunctionServiceRole3C357ff2 == null) { throw new Error(`A combination of conditions caused 'myFunctionServiceRole3C357ff2' to be undefined. Fixit.`); }
    const myFunction3Baa72d1 = new lambda.CfnFunction(this, 'MyFunction3BAA72D1', {
      code: {
        zipFile: '\n        exports.handler = (event) => {\n          console.log(\"It is test for lambda action of AWS IoT Rule.\", event);\n        };',
      },
      handler: 'index.handler',
      role: myFunctionServiceRole3C357ff2.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunction3Baa72d1.addDependency(myFunctionServiceRole3C357ff2);

    if (myDetectorModelDetectorModelRoleF2fb4d88 == null) { throw new Error(`A combination of conditions caused 'myDetectorModelDetectorModelRoleF2fb4d88' to be undefined. Fixit.`); }
    if (myFunction3Baa72d1 == null) { throw new Error(`A combination of conditions caused 'myFunction3Baa72d1' to be undefined. Fixit.`); }
    if (myInput08947B23 == null) { throw new Error(`A combination of conditions caused 'myInput08947B23' to be undefined. Fixit.`); }
    const myDetectorModel559C0b0e = new iotevents.CfnDetectorModel(this, 'MyDetectorModel559C0B0E', {
      detectorModelDefinition: {
        initialStateName: 'MyState',
        states: [
          {
            onEnter: {
              events: [
                {
                  actions: [
                    {
                      lambda: {
                        functionArn: myFunction3Baa72d1.attrArn,
                      },
                    },
                  ],
                  condition: [
                    'currentInput(\"',
                    myInput08947B23.ref,
                    '\")',
                  ].join(''),
                  eventName: 'test-event',
                },
              ],
            },
            stateName: 'MyState',
          },
        ],
      },
      key: 'payload.deviceId',
      roleArn: myDetectorModelDetectorModelRoleF2fb4d88.attrArn,
    });

    if (myDetectorModelDetectorModelRoleF2fb4d88 == null) { throw new Error(`A combination of conditions caused 'myDetectorModelDetectorModelRoleF2fb4d88' to be undefined. Fixit.`); }
    if (myFunction3Baa72d1 == null) { throw new Error(`A combination of conditions caused 'myFunction3Baa72d1' to be undefined. Fixit.`); }
    const myDetectorModelDetectorModelRoleDefaultPolicy82887422 = new iam.CfnPolicy(this, 'MyDetectorModelDetectorModelRoleDefaultPolicy82887422', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              myFunction3Baa72d1.attrArn,
              [
                myFunction3Baa72d1.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyDetectorModelDetectorModelRoleDefaultPolicy82887422',
      roles: [
        myDetectorModelDetectorModelRoleF2fb4d88.ref,
      ],
    });
  }
}

