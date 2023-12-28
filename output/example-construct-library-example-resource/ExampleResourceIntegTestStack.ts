import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface ExampleResourceIntegTestStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ExampleResourceIntegTestStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ExampleResourceIntegTestStackProps = {}) {
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
    const exampleResourceRole0533653E = new iam.CfnRole(this, 'ExampleResourceRole0533653E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudformation.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const exampleResourceWaitConditionHandle9C53a8d3 = new cloudformation.CfnWaitConditionHandle(this, 'ExampleResourceWaitConditionHandle9C53A8D3', {
    });

    if (exampleResourceWaitConditionHandle9C53a8d3 == null) { throw new Error(`A combination of conditions caused 'exampleResourceWaitConditionHandle9C53a8d3' to be undefined. Fixit.`); }
    const exampleResourceAc53f4ae = new cloudformation.CfnWaitCondition(this, 'ExampleResourceAC53F4AE', {
      count: 0,
      handle: exampleResourceWaitConditionHandle9C53a8d3.ref,
      timeout: '10',
    });
    exampleResourceAc53f4ae.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

