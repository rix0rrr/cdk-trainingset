import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface AwsCdkEc2ImportProps extends cdk.StackProps {
}

export class AwsCdkEc2Import extends cdk.Stack {
  public readonly publicSubnets;
  public readonly privateSubnets;
  public readonly publicRouteTables;

  public constructor(scope: cdk.App, id: string, props: AwsCdkEc2ImportProps = {}) {
    super(scope, id, props);

    // Resources
    const securityGroupDd263621 = new ec2.CfnSecurityGroup(this, 'SecurityGroupDD263621', {
      groupDescription: 'aws-cdk-ec2-import/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: 'vpc-60900905',
    });

    // Outputs
    this.publicSubnets = 'ids:subnet-e19455ca,subnet-e0c24797,subnet-ccd77395';
    new cdk.CfnOutput(this, 'CfnOutputPublicSubnets', {
      key: 'PublicSubnets',
      value: this.publicSubnets!.toString(),
    });
    this.privateSubnets = 'ids:';
    new cdk.CfnOutput(this, 'CfnOutputPrivateSubnets', {
      key: 'PrivateSubnets',
      value: this.privateSubnets!.toString(),
    });
    this.publicRouteTables = 'ids: rtb-e19455ca, rtb-e0c24797, rtb-ccd77395';
    new cdk.CfnOutput(this, 'CfnOutputPublicRouteTables', {
      key: 'PublicRouteTables',
      value: this.publicRouteTables!.toString(),
    });
  }
}

