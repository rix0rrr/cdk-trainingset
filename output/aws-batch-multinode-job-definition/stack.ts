import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as iam from 'aws-cdk-lib/aws-iam';

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

    // Resources
    const multiContainerExecutionRole317Ded72 = new iam.CfnRole(this, 'multiContainerExecutionRole317DED72', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const multinodecontainerExecutionRoleAb7aa30a = new iam.CfnRole(this, 'multinodecontainerExecutionRoleAB7AA30A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myContainerExecutionRoleEbacf86c = new iam.CfnRole(this, 'myContainerExecutionRoleEBACF86C', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (multiContainerExecutionRole317Ded72 == null) { throw new Error(`A combination of conditions caused 'multiContainerExecutionRole317Ded72' to be undefined. Fixit.`); }
    if (multinodecontainerExecutionRoleAb7aa30a == null) { throw new Error(`A combination of conditions caused 'multinodecontainerExecutionRoleAb7aa30a' to be undefined. Fixit.`); }
    const multiContainerMultiNodeJobBa8ed368 = new batch.CfnJobDefinition(this, 'MultiContainerMultiNodeJobBA8ED368', {
      nodeProperties: {
        mainNode: 0,
        nodeRangeProperties: [
          {
            container: {
              environment: [
              ],
              executionRoleArn: multinodecontainerExecutionRoleAb7aa30a.attrArn,
              image: 'amazon/amazon-ecs-sample',
              instanceType: 'r4.large',
              readonlyRootFilesystem: false,
              resourceRequirements: [
                {
                  type: 'MEMORY',
                  value: '2048',
                },
                {
                  type: 'VCPU',
                  value: '256',
                },
              ],
            },
            targetNodes: '0:10',
          },
          {
            container: {
              environment: [
              ],
              executionRoleArn: multiContainerExecutionRole317Ded72.attrArn,
              image: 'amazon/amazon-ecs-sample',
              instanceType: 'r4.large',
              readonlyRootFilesystem: false,
              resourceRequirements: [
                {
                  type: 'MEMORY',
                  value: '2048',
                },
                {
                  type: 'VCPU',
                  value: '256',
                },
              ],
            },
            targetNodes: '11:20',
          },
        ],
        numNodes: 21,
      },
      platformCapabilities: [
        'EC2',
      ],
      retryStrategy: {
      },
      timeout: {
      },
      type: 'multinode',
    });

    if (myContainerExecutionRoleEbacf86c == null) { throw new Error(`A combination of conditions caused 'myContainerExecutionRoleEbacf86c' to be undefined. Fixit.`); }
    const singleContainerMultiNodeJob1118Ac82 = new batch.CfnJobDefinition(this, 'SingleContainerMultiNodeJob1118AC82', {
      nodeProperties: {
        mainNode: 0,
        nodeRangeProperties: [
          {
            container: {
              environment: [
              ],
              executionRoleArn: myContainerExecutionRoleEbacf86c.attrArn,
              image: 'amazon/amazon-ecs-sample',
              readonlyRootFilesystem: false,
              resourceRequirements: [
                {
                  type: 'MEMORY',
                  value: '2048',
                },
                {
                  type: 'VCPU',
                  value: '256',
                },
              ],
            },
            targetNodes: '0:10',
          },
        ],
        numNodes: 11,
      },
      platformCapabilities: [
        'EC2',
      ],
      propagateTags: true,
      retryStrategy: {
      },
      timeout: {
      },
      type: 'multinode',
    });

    if (multiContainerExecutionRole317Ded72 == null) { throw new Error(`A combination of conditions caused 'multiContainerExecutionRole317Ded72' to be undefined. Fixit.`); }
    const multiContainerExecutionRoleDefaultPolicyE3e7d32c = new iam.CfnPolicy(this, 'multiContainerExecutionRoleDefaultPolicyE3E7D32C', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:/aws/batch/job:*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'multiContainerExecutionRoleDefaultPolicyE3E7D32C',
      roles: [
        multiContainerExecutionRole317Ded72.ref,
      ],
    });

    if (multinodecontainerExecutionRoleAb7aa30a == null) { throw new Error(`A combination of conditions caused 'multinodecontainerExecutionRoleAb7aa30a' to be undefined. Fixit.`); }
    const multinodecontainerExecutionRoleDefaultPolicy2Aab071a = new iam.CfnPolicy(this, 'multinodecontainerExecutionRoleDefaultPolicy2AAB071A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:/aws/batch/job:*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'multinodecontainerExecutionRoleDefaultPolicy2AAB071A',
      roles: [
        multinodecontainerExecutionRoleAb7aa30a.ref,
      ],
    });

    if (myContainerExecutionRoleEbacf86c == null) { throw new Error(`A combination of conditions caused 'myContainerExecutionRoleEbacf86c' to be undefined. Fixit.`); }
    const myContainerExecutionRoleDefaultPolicy42Da929e = new iam.CfnPolicy(this, 'myContainerExecutionRoleDefaultPolicy42DA929E', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':logs:',
              this.region,
              ':',
              this.account,
              ':log-group:/aws/batch/job:*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myContainerExecutionRoleDefaultPolicy42DA929E',
      roles: [
        myContainerExecutionRoleEbacf86c.ref,
      ],
    });
  }
}

