import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as iotevents from 'aws-cdk-lib/aws-iotevents';

export interface iotevents-timer-actions-test-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class iotevents-timer-actions-test-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: iotevents-timer-actions-test-stackProps = {}) {
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
        ],
      },
      inputName: 'test_input',
    });

    if (myDetectorModelDetectorModelRoleF2fb4d88 == null) { throw new Error(`A combination of conditions caused 'myDetectorModelDetectorModelRoleF2fb4d88' to be undefined. Fixit.`); }
    if (myInput08947B23 == null) { throw new Error(`A combination of conditions caused 'myInput08947B23' to be undefined. Fixit.`); }
    const myDetectorModel559C0b0e = new iotevents.CfnDetectorModel(this, 'MyDetectorModel559C0B0E', {
      detectorModelDefinition: {
        initialStateName: 'Online',
        states: [
          {
            onEnter: {
              events: [
                {
                  actions: [
                    {
                      setTimer: {
                        durationExpression: '60',
                        timerName: 'MyTimer',
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
            onExit: {
              events: [
                {
                  actions: [
                    {
                      clearTimer: {
                        timerName: 'MyTimer',
                      },
                    },
                  ],
                  eventName: 'exit-event',
                },
              ],
            },
            onInput: {
              events: [
                {
                  actions: [
                    {
                      resetTimer: {
                        timerName: 'MyTimer',
                      },
                    },
                  ],
                  condition: [
                    'currentInput(\"',
                    myInput08947B23.ref,
                    '\")',
                  ].join(''),
                  eventName: 'input-event',
                },
              ],
              transitionEvents: [
                {
                  condition: 'timeout(\"MyTimer\")',
                  eventName: 'Online_to_Offline',
                  nextState: 'Offline',
                },
              ],
            },
            stateName: 'Online',
          },
          {
            onInput: {
              transitionEvents: [
                {
                  condition: [
                    'currentInput(\"',
                    myInput08947B23.ref,
                    '\")',
                  ].join(''),
                  eventName: 'Offline_to_Online',
                  nextState: 'Online',
                },
              ],
            },
            stateName: 'Offline',
          },
        ],
      },
      roleArn: myDetectorModelDetectorModelRoleF2fb4d88.attrArn,
      key: 'payload.deviceId',
    });
  }
}

