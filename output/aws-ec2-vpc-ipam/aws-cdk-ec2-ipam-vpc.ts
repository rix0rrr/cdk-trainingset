import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface AwsCdkEc2IpamVpcProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkEc2IpamVpc extends cdk.Stack {
  public readonly exportsOutputFnGetAttAwsIpamVpcD3a1daeeVpcId808Cc597;

  public constructor(scope: cdk.App, id: string, props: AwsCdkEc2IpamVpcProps = {}) {
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
    const ipam = new ec2.CfnIPAM(this, 'IPAM', {
      operatingRegions: [
        {
          regionName: this.region,
        },
      ],
      tags: [
        {
          key: 'stack',
          value: this.stackId,
        },
      ],
    });
    ipam.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (ipam == null) { throw new Error(`A combination of conditions caused 'ipam' to be undefined. Fixit.`); }
    const pool = new ec2.CfnIPAMPool(this, 'Pool', {
      addressFamily: 'ipv4',
      ipamScopeId: ipam.attrPrivateDefaultScopeId,
      autoImport: false,
      description: 'Testing pool',
      locale: this.region,
      provisionedCidrs: [
        {
          cidr: '100.100.0.0/16',
        },
      ],
    });
    pool.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (pool == null) { throw new Error(`A combination of conditions caused 'pool' to be undefined. Fixit.`); }
    const awsIpamVpcD3a1daee = new ec2.CfnVPC(this, 'AwsIpamVpcD3A1DAEE', {
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      ipv4IpamPoolId: pool.ref,
      ipv4NetmaskLength: 18,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-ipam-vpc/AwsIpamVpc',
        },
      ],
    });

    if (awsIpamVpcD3a1daee == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcD3a1daee' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet1RouteTable2A97e440 = new ec2.CfnRouteTable(this, 'AwsIpamVpcprivateSubnet1RouteTable2A97E440', {
      vpcId: awsIpamVpcD3a1daee.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-ipam-vpc/AwsIpamVpc/privateSubnet1',
        },
      ],
    });

    if (awsIpamVpcD3a1daee == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcD3a1daee' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet1Subnet0Ac8649f = new ec2.CfnSubnet(this, 'AwsIpamVpcprivateSubnet1Subnet0AC8649F', {
      vpcId: awsIpamVpcD3a1daee.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: cdk.Fn.select(0, cdk.Fn.cidr(awsIpamVpcD3a1daee.attrCidrBlock, 64, String('8'))),
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-cdk-ec2-ipam-vpc/AwsIpamVpc/privateSubnet1',
        },
      ],
    });

    if (awsIpamVpcD3a1daee == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcD3a1daee' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet2RouteTableDde2d1bf = new ec2.CfnRouteTable(this, 'AwsIpamVpcprivateSubnet2RouteTableDDE2D1BF', {
      vpcId: awsIpamVpcD3a1daee.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-ec2-ipam-vpc/AwsIpamVpc/privateSubnet2',
        },
      ],
    });

    if (awsIpamVpcD3a1daee == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcD3a1daee' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet2Subnet577660De = new ec2.CfnSubnet(this, 'AwsIpamVpcprivateSubnet2Subnet577660DE', {
      vpcId: awsIpamVpcD3a1daee.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: cdk.Fn.select(1, cdk.Fn.cidr(awsIpamVpcD3a1daee.attrCidrBlock, 64, String('8'))),
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'aws-cdk-ec2-ipam-vpc/AwsIpamVpc/privateSubnet2',
        },
      ],
    });

    if (awsIpamVpcprivateSubnet1RouteTable2A97e440 == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcprivateSubnet1RouteTable2A97e440' to be undefined. Fixit.`); }
    if (awsIpamVpcprivateSubnet1Subnet0Ac8649f == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcprivateSubnet1Subnet0Ac8649f' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet1RouteTableAssociationE7d2e570 = new ec2.CfnSubnetRouteTableAssociation(this, 'AwsIpamVpcprivateSubnet1RouteTableAssociationE7D2E570', {
      routeTableId: awsIpamVpcprivateSubnet1RouteTable2A97e440.ref,
      subnetId: awsIpamVpcprivateSubnet1Subnet0Ac8649f.ref,
    });

    if (awsIpamVpcprivateSubnet2RouteTableDde2d1bf == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcprivateSubnet2RouteTableDde2d1bf' to be undefined. Fixit.`); }
    if (awsIpamVpcprivateSubnet2Subnet577660De == null) { throw new Error(`A combination of conditions caused 'awsIpamVpcprivateSubnet2Subnet577660De' to be undefined. Fixit.`); }
    const awsIpamVpcprivateSubnet2RouteTableAssociation52A3c85a = new ec2.CfnSubnetRouteTableAssociation(this, 'AwsIpamVpcprivateSubnet2RouteTableAssociation52A3C85A', {
      routeTableId: awsIpamVpcprivateSubnet2RouteTableDde2d1bf.ref,
      subnetId: awsIpamVpcprivateSubnet2Subnet577660De.ref,
    });

    // Outputs
    this.exportsOutputFnGetAttAwsIpamVpcD3a1daeeVpcId808Cc597 = awsIpamVpcD3a1daee.attrVpcId;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttAwsIpamVpcD3A1DAEEVpcId808CC597', {
      key: 'ExportsOutputFnGetAttAwsIpamVpcD3A1DAEEVpcId808CC597',
      exportName: 'aws-cdk-ec2-ipam-vpc:ExportsOutputFnGetAttAwsIpamVpcD3A1DAEEVpcId808CC597',
      value: this.exportsOutputFnGetAttAwsIpamVpcD3a1daeeVpcId808Cc597!.toString(),
    });
  }
}

