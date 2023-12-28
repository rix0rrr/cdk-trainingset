import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaPythonVpcProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaPythonVpc extends cdk.Stack {
  public readonly exportsOutputRefmyhandlerD202fa8e369e8804;

  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaPythonVpcProps = {}) {
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
    const myvpc9455A260 = new ec2.CfnVPC(this, 'myvpc9455A260', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc',
        },
      ],
    });

    const myvpcIgw24c0bbae = new ec2.CfnInternetGateway(this, 'myvpcIGW24C0BBAE', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc',
        },
      ],
    });

    const myvpcPublicSubnet1Eip88d18203 = new ec2.CfnEIP(this, 'myvpcPublicSubnet1EIP88D18203', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet1',
        },
      ],
    });

    const myvpcPublicSubnet2Eipa3af827d = new ec2.CfnEIP(this, 'myvpcPublicSubnet2EIPA3AF827D', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet2',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet1RouteTable991B69a9 = new ec2.CfnRouteTable(this, 'myvpcPrivateSubnet1RouteTable991B69A9', {
      vpcId: myvpc9455A260.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PrivateSubnet1',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet1SubnetAe3decee = new ec2.CfnSubnet(this, 'myvpcPrivateSubnet1SubnetAE3DECEE', {
      vpcId: myvpc9455A260.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/18',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Private',
        },
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PrivateSubnet1',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet2RouteTableF2b44bf5 = new ec2.CfnRouteTable(this, 'myvpcPrivateSubnet2RouteTableF2B44BF5', {
      vpcId: myvpc9455A260.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PrivateSubnet2',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet2SubnetE09939fb = new ec2.CfnSubnet(this, 'myvpcPrivateSubnet2SubnetE09939FB', {
      vpcId: myvpc9455A260.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.192.0/18',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Private',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Private',
        },
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PrivateSubnet2',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPublicSubnet1RouteTableF7e8d7f1 = new ec2.CfnRouteTable(this, 'myvpcPublicSubnet1RouteTableF7E8D7F1', {
      vpcId: myvpc9455A260.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet1',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPublicSubnet1Subnet6Bd75c12 = new ec2.CfnSubnet(this, 'myvpcPublicSubnet1Subnet6BD75C12', {
      vpcId: myvpc9455A260.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Public',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet1',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPublicSubnet2RouteTable9A4ca50c = new ec2.CfnRouteTable(this, 'myvpcPublicSubnet2RouteTable9A4CA50C', {
      vpcId: myvpc9455A260.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet2',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    const myvpcPublicSubnet2Subnet844B7f05 = new ec2.CfnSubnet(this, 'myvpcPublicSubnet2Subnet844B7F05', {
      vpcId: myvpc9455A260.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.64.0/18',
      mapPublicIpOnLaunch: true,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'Public',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Public',
        },
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet2',
        },
      ],
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    if (myvpcIgw24c0bbae == null) { throw new Error(`A combination of conditions caused 'myvpcIgw24c0bbae' to be undefined. Fixit.`); }
    const myvpcVpcgwd483db64 = new ec2.CfnVPCGatewayAttachment(this, 'myvpcVPCGWD483DB64', {
      vpcId: myvpc9455A260.ref,
      internetGatewayId: myvpcIgw24c0bbae.ref,
    });

    if (myvpcPrivateSubnet1RouteTable991B69a9 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1RouteTable991B69a9' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1SubnetAe3decee == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1SubnetAe3decee' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet1RouteTableAssociation91351Dde = new ec2.CfnSubnetRouteTableAssociation(this, 'myvpcPrivateSubnet1RouteTableAssociation91351DDE', {
      routeTableId: myvpcPrivateSubnet1RouteTable991B69a9.ref,
      subnetId: myvpcPrivateSubnet1SubnetAe3decee.ref,
    });

    if (myvpcPrivateSubnet2RouteTableF2b44bf5 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2RouteTableF2b44bf5' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2SubnetE09939fb == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2SubnetE09939fb' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet2RouteTableAssociation071745F0 = new ec2.CfnSubnetRouteTableAssociation(this, 'myvpcPrivateSubnet2RouteTableAssociation071745F0', {
      routeTableId: myvpcPrivateSubnet2RouteTableF2b44bf5.ref,
      subnetId: myvpcPrivateSubnet2SubnetE09939fb.ref,
    });

    if (myvpcIgw24c0bbae == null) { throw new Error(`A combination of conditions caused 'myvpcIgw24c0bbae' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1RouteTableF7e8d7f1 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1RouteTableF7e8d7f1' to be undefined. Fixit.`); }
    if (myvpcVpcgwd483db64 == null) { throw new Error(`A combination of conditions caused 'myvpcVpcgwd483db64' to be undefined. Fixit.`); }
    const myvpcPublicSubnet1DefaultRouteBe259807 = new ec2.CfnRoute(this, 'myvpcPublicSubnet1DefaultRouteBE259807', {
      routeTableId: myvpcPublicSubnet1RouteTableF7e8d7f1.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myvpcIgw24c0bbae.ref,
    });
    myvpcPublicSubnet1DefaultRouteBe259807.addDependency(myvpcVpcgwd483db64);

    if (myvpcPublicSubnet1RouteTableF7e8d7f1 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1RouteTableF7e8d7f1' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1Subnet6Bd75c12 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1Subnet6Bd75c12' to be undefined. Fixit.`); }
    const myvpcPublicSubnet1RouteTableAssociationC697fa56 = new ec2.CfnSubnetRouteTableAssociation(this, 'myvpcPublicSubnet1RouteTableAssociationC697FA56', {
      routeTableId: myvpcPublicSubnet1RouteTableF7e8d7f1.ref,
      subnetId: myvpcPublicSubnet1Subnet6Bd75c12.ref,
    });

    if (myvpcIgw24c0bbae == null) { throw new Error(`A combination of conditions caused 'myvpcIgw24c0bbae' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2RouteTable9A4ca50c == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2RouteTable9A4ca50c' to be undefined. Fixit.`); }
    if (myvpcVpcgwd483db64 == null) { throw new Error(`A combination of conditions caused 'myvpcVpcgwd483db64' to be undefined. Fixit.`); }
    const myvpcPublicSubnet2DefaultRoute22D543ba = new ec2.CfnRoute(this, 'myvpcPublicSubnet2DefaultRoute22D543BA', {
      routeTableId: myvpcPublicSubnet2RouteTable9A4ca50c.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myvpcIgw24c0bbae.ref,
    });
    myvpcPublicSubnet2DefaultRoute22D543ba.addDependency(myvpcVpcgwd483db64);

    if (myvpcPublicSubnet2RouteTable9A4ca50c == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2RouteTable9A4ca50c' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2Subnet844B7f05 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2Subnet844B7f05' to be undefined. Fixit.`); }
    const myvpcPublicSubnet2RouteTableAssociation28F6dd6f = new ec2.CfnSubnetRouteTableAssociation(this, 'myvpcPublicSubnet2RouteTableAssociation28F6DD6F', {
      routeTableId: myvpcPublicSubnet2RouteTable9A4ca50c.ref,
      subnetId: myvpcPublicSubnet2Subnet844B7f05.ref,
    });

    if (myvpcPublicSubnet1DefaultRouteBe259807 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1DefaultRouteBe259807' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1Eip88d18203 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1Eip88d18203' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1RouteTableAssociationC697fa56 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1RouteTableAssociationC697fa56' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1Subnet6Bd75c12 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1Subnet6Bd75c12' to be undefined. Fixit.`); }
    const myvpcPublicSubnet1NatGatewayD3dc5b8d = new ec2.CfnNatGateway(this, 'myvpcPublicSubnet1NATGatewayD3DC5B8D', {
      subnetId: myvpcPublicSubnet1Subnet6Bd75c12.ref,
      allocationId: myvpcPublicSubnet1Eip88d18203.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet1',
        },
      ],
    });
    myvpcPublicSubnet1NatGatewayD3dc5b8d.addDependency(myvpcPublicSubnet1DefaultRouteBe259807);
    myvpcPublicSubnet1NatGatewayD3dc5b8d.addDependency(myvpcPublicSubnet1RouteTableAssociationC697fa56);

    if (myvpcPublicSubnet2DefaultRoute22D543ba == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2DefaultRoute22D543ba' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2Eipa3af827d == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2Eipa3af827d' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2RouteTableAssociation28F6dd6f == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2RouteTableAssociation28F6dd6f' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2Subnet844B7f05 == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2Subnet844B7f05' to be undefined. Fixit.`); }
    const myvpcPublicSubnet2NatGateway45472Ccd = new ec2.CfnNatGateway(this, 'myvpcPublicSubnet2NATGateway45472CCD', {
      subnetId: myvpcPublicSubnet2Subnet844B7f05.ref,
      allocationId: myvpcPublicSubnet2Eipa3af827d.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-python-vpc/my_vpc/PublicSubnet2',
        },
      ],
    });
    myvpcPublicSubnet2NatGateway45472Ccd.addDependency(myvpcPublicSubnet2DefaultRoute22D543ba);
    myvpcPublicSubnet2NatGateway45472Ccd.addDependency(myvpcPublicSubnet2RouteTableAssociation28F6dd6f);

    if (myvpcPrivateSubnet1RouteTable991B69a9 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1RouteTable991B69a9' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet1NatGatewayD3dc5b8d == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet1NatGatewayD3dc5b8d' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet1DefaultRouteA1815bf3 = new ec2.CfnRoute(this, 'myvpcPrivateSubnet1DefaultRouteA1815BF3', {
      routeTableId: myvpcPrivateSubnet1RouteTable991B69a9.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myvpcPublicSubnet1NatGatewayD3dc5b8d.ref,
    });

    if (myvpcPrivateSubnet2RouteTableF2b44bf5 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2RouteTableF2b44bf5' to be undefined. Fixit.`); }
    if (myvpcPublicSubnet2NatGateway45472Ccd == null) { throw new Error(`A combination of conditions caused 'myvpcPublicSubnet2NatGateway45472Ccd' to be undefined. Fixit.`); }
    const myvpcPrivateSubnet2DefaultRouteB54e314a = new ec2.CfnRoute(this, 'myvpcPrivateSubnet2DefaultRouteB54E314A', {
      routeTableId: myvpcPrivateSubnet2RouteTableF2b44bf5.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myvpcPublicSubnet2NatGateway45472Ccd.ref,
    });

    if (myvpc9455A260 == null) { throw new Error(`A combination of conditions caused 'myvpc9455A260' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1DefaultRouteA1815bf3 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1DefaultRouteA1815bf3' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1RouteTableAssociation91351Dde == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1RouteTableAssociation91351Dde' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2DefaultRouteB54e314a == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2DefaultRouteB54e314a' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2RouteTableAssociation071745F0 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2RouteTableAssociation071745F0' to be undefined. Fixit.`); }
    const myhandlerSecurityGroupF566a239 = new ec2.CfnSecurityGroup(this, 'myhandlerSecurityGroupF566A239', {
      groupDescription: 'Automatic security group for Lambda Function cdkinteglambdapythonvpcmyhandlerCA7DB4EE',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: myvpc9455A260.ref,
    });
    myhandlerSecurityGroupF566a239.addDependency(myvpcPrivateSubnet1DefaultRouteA1815bf3);
    myhandlerSecurityGroupF566a239.addDependency(myvpcPrivateSubnet1RouteTableAssociation91351Dde);
    myhandlerSecurityGroupF566a239.addDependency(myvpcPrivateSubnet2DefaultRouteB54e314a);
    myhandlerSecurityGroupF566a239.addDependency(myvpcPrivateSubnet2RouteTableAssociation071745F0);

    if (myvpcPrivateSubnet1DefaultRouteA1815bf3 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1DefaultRouteA1815bf3' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1RouteTableAssociation91351Dde == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1RouteTableAssociation91351Dde' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2DefaultRouteB54e314a == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2DefaultRouteB54e314a' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2RouteTableAssociation071745F0 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2RouteTableAssociation071745F0' to be undefined. Fixit.`); }
    const myhandlerServiceRole77891068 = new iam.CfnRole(this, 'myhandlerServiceRole77891068', {
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
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole',
        ].join(''),
      ],
    });
    myhandlerServiceRole77891068.addDependency(myvpcPrivateSubnet1DefaultRouteA1815bf3);
    myhandlerServiceRole77891068.addDependency(myvpcPrivateSubnet1RouteTableAssociation91351Dde);
    myhandlerServiceRole77891068.addDependency(myvpcPrivateSubnet2DefaultRouteB54e314a);
    myhandlerServiceRole77891068.addDependency(myvpcPrivateSubnet2RouteTableAssociation071745F0);

    if (myhandlerSecurityGroupF566a239 == null) { throw new Error(`A combination of conditions caused 'myhandlerSecurityGroupF566a239' to be undefined. Fixit.`); }
    if (myhandlerServiceRole77891068 == null) { throw new Error(`A combination of conditions caused 'myhandlerServiceRole77891068' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1DefaultRouteA1815bf3 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1DefaultRouteA1815bf3' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1RouteTableAssociation91351Dde == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1RouteTableAssociation91351Dde' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet1SubnetAe3decee == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet1SubnetAe3decee' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2DefaultRouteB54e314a == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2DefaultRouteB54e314a' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2RouteTableAssociation071745F0 == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2RouteTableAssociation071745F0' to be undefined. Fixit.`); }
    if (myvpcPrivateSubnet2SubnetE09939fb == null) { throw new Error(`A combination of conditions caused 'myvpcPrivateSubnet2SubnetE09939fb' to be undefined. Fixit.`); }
    const myhandlerD202fa8e = new lambda.CfnFunction(this, 'myhandlerD202FA8E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3b4e770c8242272e96f6faafd45d2446549a060a25dcce2d246445447e356ca9.zip',
      },
      role: myhandlerServiceRole77891068.attrArn,
      handler: 'index.handler',
      runtime: 'python3.9',
      vpcConfig: {
        securityGroupIds: [
          myhandlerSecurityGroupF566a239.attrGroupId,
        ],
        subnetIds: [
          myvpcPrivateSubnet1SubnetAe3decee.ref,
          myvpcPrivateSubnet2SubnetE09939fb.ref,
        ],
      },
    });
    myhandlerD202fa8e.addDependency(myhandlerServiceRole77891068);
    myhandlerD202fa8e.addDependency(myvpcPrivateSubnet1DefaultRouteA1815bf3);
    myhandlerD202fa8e.addDependency(myvpcPrivateSubnet1RouteTableAssociation91351Dde);
    myhandlerD202fa8e.addDependency(myvpcPrivateSubnet2DefaultRouteB54e314a);
    myhandlerD202fa8e.addDependency(myvpcPrivateSubnet2RouteTableAssociation071745F0);

    // Outputs
    this.exportsOutputRefmyhandlerD202fa8e369e8804 = myhandlerD202fa8e.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerD202FA8E369E8804', {
      key: 'ExportsOutputRefmyhandlerD202FA8E369E8804',
      exportName: 'cdk-integ-lambda-python-vpc:ExportsOutputRefmyhandlerD202FA8E369E8804',
      value: this.exportsOutputRefmyhandlerD202fa8e369e8804!.toString(),
    });
  }
}

