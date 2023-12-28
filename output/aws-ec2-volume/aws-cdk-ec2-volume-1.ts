import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface AwsCdkEc2Volume1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkEc2Volume1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkEc2Volume1Props = {}) {
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
    const testVolume24F725a4 = new ec2.CfnVolume(this, 'TestVolume24F725A4', {
      availabilityZone: 'us-east-1a',
      multiAttachEnabled: false,
      size: 1,
      throughput: 200,
      volumeType: 'gp3',
    });
    testVolume24F725a4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
  }
}

