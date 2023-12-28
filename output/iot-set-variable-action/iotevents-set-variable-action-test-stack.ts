import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iotevents from 'aws-cdk-lib/aws-iotevents';

export interface iotevents-set-variable-action-test-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class iotevents-set-variable-action-test-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: iotevents-set-variable-action-test-stackProps = {}) {
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

    const myInput08947B23 = new iotevents.CfnInput(this, 'MyInput08947B23', {
      inputDefinition: {
        attributes: [
          {
            jsonPath: 'payload.deviceId',
          },
          {
            jsonPath: 'payload.temperature',
          },
        ],
      },
      inputName: 'test_input',
    });

    if (myDetectorModelDetectorModelRoleF2fb4d88 == null) { throw new Error(`A combination of conditions caused 'myDetectorModelDetectorModelRoleF2fb4d88' to be undefined. Fixit.`); }
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
                      setVariable: {
                        value: [
                          '$input.',
                          myInput08947B23.ref,
                          '.payload.temperature',
                        ].join(''),
                        variableName: 'MyVariable',
                      },
                    },
                  ],
                  condition: [
                    'currentInput(\"',
                    myInput08947B23.ref,
                    '\")',
                  ].join(''),
                  eventName: 'enter-event',
                },
              ],
            },
            stateName: 'MyState',
          },
        ],
      },
      roleArn: myDetectorModelDetectorModelRoleF2fb4d88.attrArn,
      key: 'payload.deviceId',
    });
  }
}

