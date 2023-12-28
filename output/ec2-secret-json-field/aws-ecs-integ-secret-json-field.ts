import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface aws-ecs-integ-secret-json-fieldProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-secret-json-field extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-secret-json-fieldProps = {}) {
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
    const secretA720ef05 = new secretsmanager.CfnSecret(this, 'SecretA720EF05', {
      generateSecretString: {
        generateStringKey: 'password',
        secretStringTemplate: '{\"username\":\"user\"}',
      },
    });
    secretA720ef05.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const taskDefExecutionRoleB4775c97 = new iam.CfnRole(this, 'TaskDefExecutionRoleB4775C97', {
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

    const taskDefTaskRole1Edb4a67 = new iam.CfnRole(this, 'TaskDefTaskRole1EDB4A67', {
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

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          memory: 256,
          name: 'web',
          secrets: [
            {
              name: 'PASSWORD',
              valueFrom: [
                secretA720ef05.ref,
                ':password::',
              ].join(''),
            },
            {
              name: 'APIKEY',
              valueFrom: [
                secretA720ef05.ref,
                ':apikey::',
              ].join(''),
            },
          ],
        },
      ],
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awsecsintegsecretjsonfieldTaskDef1C2EE990',
      networkMode: 'bridge',
      requiresCompatibilities: [
        'EC2',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (secretA720ef05 == null) { throw new Error(`A combination of conditions caused 'secretA720ef05' to be undefined. Fixit.`); }
    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    const taskDefExecutionRoleDefaultPolicy0Dbb737a = new iam.CfnPolicy(this, 'TaskDefExecutionRoleDefaultPolicy0DBB737A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: secretA720ef05.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefExecutionRoleDefaultPolicy0DBB737A',
      roles: [
        taskDefExecutionRoleB4775c97.ref,
      ],
    });
  }
}

