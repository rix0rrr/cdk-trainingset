import * as cdk from 'aws-cdk-lib';
import * as appconfig from 'aws-cdk-lib/aws-appconfig';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsAppconfigApplicationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsAppconfigApplication extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsAppconfigApplicationProps = {}) {
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
    const myAppConfigB4b63e75 = new appconfig.CfnApplication(this, 'MyAppConfigB4B63E75', {
      description: 'This is my application for testing',
      name: 'awsappconfigapplication-MyAppConfig-5BFACBE9',
    });

    const myTaskDefTaskRole727F9d3b = new iam.CfnRole(this, 'MyTaskDefTaskRole727F9D3B', {
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

    if (myTaskDefTaskRole727F9d3b == null) { throw new Error(`A combination of conditions caused 'myTaskDefTaskRole727F9d3b' to be undefined. Fixit.`); }
    const myTaskDef01F0d39b = new ecs.CfnTaskDefinition(this, 'MyTaskDef01F0D39B', {
      containerDefinitions: [
        {
          essential: true,
          image: 'public.ecr.aws/aws-appconfig/aws-appconfig-agent:latest',
          name: 'AppConfigAgentContainer',
        },
      ],
      cpu: '256',
      family: 'awsappconfigapplicationMyTaskDef7372410D',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: myTaskDefTaskRole727F9d3b.attrArn,
    });
  }
}

