import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface AwsCdkRoute53IntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkRoute53Integ extends cdk.Stack {
  public readonly privateZoneId;
  public readonly publicZoneId;

  public constructor(scope: cdk.App, id: string, props: AwsCdkRoute53IntegProps = {}) {
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
    const publicSubZoneDbd26a0a = new route53.CfnHostedZone(this, 'PublicSubZoneDBD26A0A', {
      name: 'sub.cdk.test.',
    });

    const publicZone2E1c4e34 = new route53.CfnHostedZone(this, 'PublicZone2E1C4E34', {
      name: 'cdk.test.',
    });

    const publicZoneWithDotAe1455dd = new route53.CfnHostedZone(this, 'PublicZoneWithDotAE1455DD', {
      name: 'cdk.test',
    });

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (publicZone2E1c4e34 == null) { throw new Error(`A combination of conditions caused 'publicZone2E1c4e34' to be undefined. Fixit.`); }
    const caaAmazon40Df725f = new route53.CfnRecordSet(this, 'CaaAmazon40DF725F', {
      hostedZoneId: publicZone2E1c4e34.ref,
      name: 'cdk.test.',
      resourceRecords: [
        '0 issue \"amazon.com\"',
      ],
      ttl: '1800',
      type: 'CAA',
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const privateZone27242E85 = new route53.CfnHostedZone(this, 'PrivateZone27242E85', {
      name: 'cdk.local.',
      vpcs: [
        {
          vpcId: vpcb9e5f0b4.ref,
          vpcRegion: this.region,
        },
      ],
    });

    if (publicSubZoneDbd26a0a == null) { throw new Error(`A combination of conditions caused 'publicSubZoneDbd26a0a' to be undefined. Fixit.`); }
    if (publicZone2E1c4e34 == null) { throw new Error(`A combination of conditions caused 'publicZone2E1c4e34' to be undefined. Fixit.`); }
    const publicZonecdktestsubcdktest83558650 = new route53.CfnRecordSet(this, 'PublicZonecdktestsubcdktest83558650', {
      hostedZoneId: publicZone2E1c4e34.ref,
      name: 'sub.cdk.test.',
      resourceRecords: publicSubZoneDbd26a0a.attrNameServers,
      ttl: '172800',
      type: 'NS',
    });

    if (publicZone2E1c4e34 == null) { throw new Error(`A combination of conditions caused 'publicZone2E1c4e34' to be undefined. Fixit.`); }
    const txt0d5c5acf = new route53.CfnRecordSet(this, 'TXT0D5C5ACF', {
      hostedZoneId: publicZone2E1c4e34.ref,
      name: 'cdk.test.',
      resourceRecords: [
        '\"this is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long stringthis is a very long s\"\"tring\"',
      ],
      ttl: '1800',
      type: 'TXT',
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/17',
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
          value: 'aws-cdk-route53-integ/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/17',
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
          value: 'aws-cdk-route53-integ/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      internetGatewayId: vpcigwb7e252d3.ref,
      vpcId: vpcb9e5f0b4.ref,
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const accc8acd5 = new route53.CfnRecordSet(this, 'ACCC8ACD5', {
      hostedZoneId: privateZone27242E85.ref,
      name: 'test.cdk.local.',
      resourceRecords: [
        '1.2.3.4',
        '5.6.7.8',
      ],
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const cnamec70a2d52 = new route53.CfnRecordSet(this, 'CNAMEC70A2D52', {
      hostedZoneId: privateZone27242E85.ref,
      name: 'www.cdk.local.',
      resourceRecords: [
        'server',
      ],
      ttl: '1800',
      type: 'CNAME',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const geoLocationContinentAea331ed = new route53.CfnRecordSet(this, 'GeoLocationContinentAEA331ED', {
      geoLocation: {
        continentCode: 'EU',
      },
      hostedZoneId: privateZone27242E85.ref,
      name: 'geolocation.cdk.local.',
      resourceRecords: [
        '1.2.3.0',
        '5.6.7.0',
      ],
      setIdentifier: 'GEO_CONTINENT_EU',
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const geoLocationCountry523431F6 = new route53.CfnRecordSet(this, 'GeoLocationCountry523431F6', {
      geoLocation: {
        countryCode: 'DE',
      },
      hostedZoneId: privateZone27242E85.ref,
      name: 'geolocation.cdk.local.',
      resourceRecords: [
        '1.2.3.1',
        '5.6.7.1',
      ],
      setIdentifier: 'GEO_COUNTRY_DE',
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const geoLocationDefaultF2de9058 = new route53.CfnRecordSet(this, 'GeoLocationDefaultF2DE9058', {
      geoLocation: {
        countryCode: '*',
      },
      hostedZoneId: privateZone27242E85.ref,
      name: 'geolocation.cdk.local.',
      resourceRecords: [
        '1.2.3.3',
        '5.6.7.3',
      ],
      setIdentifier: 'GEO_COUNTRY_*',
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const geoLocationSubDividion2Cb12cfc = new route53.CfnRecordSet(this, 'GeoLocationSubDividion2CB12CFC', {
      geoLocation: {
        countryCode: 'US',
        subdivisionCode: 'WA',
      },
      hostedZoneId: privateZone27242E85.ref,
      name: 'geolocation.cdk.local.',
      resourceRecords: [
        '1.2.3.2',
        '5.6.7.2',
      ],
      setIdentifier: 'GEO_COUNTRY_US_SUBDIVISION_WA',
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const geoLocationSubDividionUa778564b1 = new route53.CfnRecordSet(this, 'GeoLocationSubDividionUA778564B1', {
      geoLocation: {
        countryCode: 'UA',
        subdivisionCode: '30',
      },
      hostedZoneId: privateZone27242E85.ref,
      name: 'cdk.local.',
      resourceRecords: [
        '1.2.3.4',
        '5.6.7.4',
      ],
      setIdentifier: 'GEO_COUNTRY_UA_SUBDIVISION_30',
      ttl: '1800',
      type: 'A',
    });

    if (privateZone27242E85 == null) { throw new Error(`A combination of conditions caused 'privateZone27242E85' to be undefined. Fixit.`); }
    const privateZoneTxt83bb83ce = new route53.CfnRecordSet(this, 'PrivateZoneTXT83BB83CE', {
      hostedZoneId: privateZone27242E85.ref,
      name: '_foo.cdk.local.',
      resourceRecords: [
        '\"Bar!\"',
        '\"Baz?\"',
      ],
      ttl: '60',
      type: 'TXT',
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation347902D1 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet1RouteTableAssociation347902D1', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute91Cef279 = new ec2.CfnRoute(this, 'VPCPublicSubnet1DefaultRoute91CEF279', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
    });
    vpcPublicSubnet1DefaultRoute91Cef279.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation0B0896dc = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet1RouteTableAssociation0B0896DC', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
    });

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-route53-integ/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
    });

    // Outputs
    this.privateZoneId = privateZone27242E85.ref;
    new cdk.CfnOutput(this, 'CfnOutputPrivateZoneId', {
      key: 'PrivateZoneId',
      value: this.privateZoneId!.toString(),
    });
    this.publicZoneId = publicZone2E1c4e34.ref;
    new cdk.CfnOutput(this, 'CfnOutputPublicZoneId', {
      key: 'PublicZoneId',
      value: this.publicZoneId!.toString(),
    });
  }
}

