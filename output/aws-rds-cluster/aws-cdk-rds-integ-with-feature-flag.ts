import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as rds from 'aws-cdk-lib/aws-rds';

export interface AwsCdkRdsIntegWithFeatureFlagProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkRdsIntegWithFeatureFlag extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkRdsIntegWithFeatureFlagProps = {}) {
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
    const clusterIamAccess93Ac3df3 = new iam.CfnRole(this, 'ClusterIamAccess93AC3DF3', {
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

    const databaseInstance2WrapperInstanceParameterGroup61Fbd67b = new rds.CfnDBParameterGroup(this, 'DatabaseInstance2WrapperInstanceParameterGroup61FBD67B', {
      description: 'Parameter group for aurora-mysql8.0',
      family: 'aurora-mysql8.0',
      parameters: {
      },
    });

    const databaseInstance3WrapperInstanceParameterGroup00Cb9db5 = new rds.CfnDBParameterGroup(this, 'DatabaseInstance3WrapperInstanceParameterGroup00CB9DB5', {
      description: 'Parameter group for aurora-mysql8.0',
      family: 'aurora-mysql8.0',
      parameters: {
      },
    });

    const dbSecurity381C2c15 = new kms.CfnKey(this, 'DbSecurity381C2C15', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    dbSecurity381C2c15.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const paramsA8366201 = new rds.CfnDBClusterParameterGroup(this, 'ParamsA8366201', {
      description: 'A nice parameter group',
      family: 'aurora-mysql8.0',
      parameters: {
        'character_set_database': 'utf8mb4',
      },
    });

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const databaseSecurityGroup5C91fdcb = new ec2.CfnSecurityGroup(this, 'DatabaseSecurityGroup5C91FDCB', {
      groupDescription: 'RDS security group',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
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
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2SubnetCfcdaa7a = new ec2.CfnSubnet(this, 'VPCPrivateSubnet2SubnetCFCDAA7A', {
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
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
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
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
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
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet2',
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

    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const databaseSubnets56F17b9a = new rds.CfnDBSubnetGroup(this, 'DatabaseSubnets56F17B9A', {
      dbSubnetGroupDescription: 'Subnets for Database database',
      subnetIds: [
        vpcPublicSubnet1SubnetB4246d30.ref,
        vpcPublicSubnet2Subnet74179F39.ref,
      ],
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation347902D1 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet1RouteTableAssociation347902D1', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation0C73d413 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet2RouteTableAssociation0C73D413', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      subnetId: vpcPrivateSubnet2SubnetCfcdaa7a.ref,
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

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteB7481bba = new ec2.CfnRoute(this, 'VPCPublicSubnet2DefaultRouteB7481BBA', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
    });
    vpcPublicSubnet2DefaultRouteB7481bba.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation5A808732 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet2RouteTableAssociation5A808732', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
    });

    if (databaseSecurityGroup5C91fdcb == null) { throw new Error(`A combination of conditions caused 'databaseSecurityGroup5C91fdcb' to be undefined. Fixit.`); }
    if (databaseSubnets56F17b9a == null) { throw new Error(`A combination of conditions caused 'databaseSubnets56F17b9a' to be undefined. Fixit.`); }
    if (dbSecurity381C2c15 == null) { throw new Error(`A combination of conditions caused 'dbSecurity381C2c15' to be undefined. Fixit.`); }
    if (paramsA8366201 == null) { throw new Error(`A combination of conditions caused 'paramsA8366201' to be undefined. Fixit.`); }
    const databaseB269d8bb = new rds.CfnDBCluster(this, 'DatabaseB269D8BB', {
      copyTagsToSnapshot: true,
      dbClusterParameterGroupName: paramsA8366201.ref,
      dbSubnetGroupName: databaseSubnets56F17b9a.ref,
      engine: 'aurora-mysql',
      engineVersion: '8.0.mysql_aurora.3.03.0',
      kmsKeyId: dbSecurity381C2c15.attrArn,
      masterUserPassword: '7959866cacc02c2d243ecfe177464fe6',
      masterUsername: 'admin',
      storageEncrypted: true,
      vpcSecurityGroupIds: [
        databaseSecurityGroup5C91fdcb.attrGroupId,
      ],
    });
    databaseB269d8bb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.SNAPSHOT;

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
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip4947bc00 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip4947bc00' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway3C070193 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet2NATGateway3C070193', {
      allocationId: vpcPublicSubnet2Eip4947bc00.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-rds-integ-with-feature-flag/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (clusterIamAccess93Ac3df3 == null) { throw new Error(`A combination of conditions caused 'clusterIamAccess93Ac3df3' to be undefined. Fixit.`); }
    if (databaseB269d8bb == null) { throw new Error(`A combination of conditions caused 'databaseB269d8bb' to be undefined. Fixit.`); }
    const clusterIamAccessDefaultPolicyA088e4da = new iam.CfnPolicy(this, 'ClusterIamAccessDefaultPolicyA088E4DA', {
      policyDocument: {
        Statement: [
          {
            Action: 'rds-db:connect',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':rds-db:',
              this.region,
              ':',
              this.account,
              ':dbuser:',
              databaseB269d8bb.attrDbClusterResourceId,
              '/db_user',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ClusterIamAccessDefaultPolicyA088E4DA',
      roles: [
        clusterIamAccess93Ac3df3.ref,
      ],
    });

    if (databaseB269d8bb == null) { throw new Error(`A combination of conditions caused 'databaseB269d8bb' to be undefined. Fixit.`); }
    if (databaseSubnets56F17b9a == null) { throw new Error(`A combination of conditions caused 'databaseSubnets56F17b9a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    const databaseInstance1844F58fd = new rds.CfnDBInstance(this, 'DatabaseInstance1844F58FD', {
      dbClusterIdentifier: databaseB269d8bb.ref,
      dbInstanceClass: 'db.t3.medium',
      dbSubnetGroupName: databaseSubnets56F17b9a.ref,
      engine: 'aurora-mysql',
      publiclyAccessible: true,
    });
    databaseInstance1844F58fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseInstance1844F58fd.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    databaseInstance1844F58fd.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);
    databaseInstance1844F58fd.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    databaseInstance1844F58fd.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (databaseB269d8bb == null) { throw new Error(`A combination of conditions caused 'databaseB269d8bb' to be undefined. Fixit.`); }
    if (databaseInstance2WrapperInstanceParameterGroup61Fbd67b == null) { throw new Error(`A combination of conditions caused 'databaseInstance2WrapperInstanceParameterGroup61Fbd67b' to be undefined. Fixit.`); }
    if (databaseSubnets56F17b9a == null) { throw new Error(`A combination of conditions caused 'databaseSubnets56F17b9a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    const databaseInstance2Aa380dee = new rds.CfnDBInstance(this, 'DatabaseInstance2AA380DEE', {
      dbClusterIdentifier: databaseB269d8bb.ref,
      dbInstanceClass: 'db.t3.medium',
      dbParameterGroupName: databaseInstance2WrapperInstanceParameterGroup61Fbd67b.ref,
      dbSubnetGroupName: databaseSubnets56F17b9a.ref,
      engine: 'aurora-mysql',
      publiclyAccessible: true,
    });
    databaseInstance2Aa380dee.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseInstance2Aa380dee.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    databaseInstance2Aa380dee.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);
    databaseInstance2Aa380dee.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    databaseInstance2Aa380dee.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (databaseB269d8bb == null) { throw new Error(`A combination of conditions caused 'databaseB269d8bb' to be undefined. Fixit.`); }
    if (databaseInstance3WrapperInstanceParameterGroup00Cb9db5 == null) { throw new Error(`A combination of conditions caused 'databaseInstance3WrapperInstanceParameterGroup00Cb9db5' to be undefined. Fixit.`); }
    if (databaseSubnets56F17b9a == null) { throw new Error(`A combination of conditions caused 'databaseSubnets56F17b9a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    const databaseInstance32Fcba185 = new rds.CfnDBInstance(this, 'DatabaseInstance32FCBA185', {
      dbClusterIdentifier: databaseB269d8bb.ref,
      dbInstanceClass: 'db.t3.medium',
      dbParameterGroupName: databaseInstance3WrapperInstanceParameterGroup00Cb9db5.ref,
      dbSubnetGroupName: databaseSubnets56F17b9a.ref,
      engine: 'aurora-mysql',
      publiclyAccessible: true,
    });
    databaseInstance32Fcba185.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseInstance32Fcba185.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    databaseInstance32Fcba185.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);
    databaseInstance32Fcba185.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    databaseInstance32Fcba185.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (databaseB269d8bb == null) { throw new Error(`A combination of conditions caused 'databaseB269d8bb' to be undefined. Fixit.`); }
    if (databaseSecurityGroup5C91fdcb == null) { throw new Error(`A combination of conditions caused 'databaseSecurityGroup5C91fdcb' to be undefined. Fixit.`); }
    const databaseSecurityGroupfrom00000IndirectPortF24f2e03 = new ec2.CfnSecurityGroupIngress(this, 'DatabaseSecurityGroupfrom00000IndirectPortF24F2E03', {
      cidrIp: '0.0.0.0/0',
      description: 'Open to the world',
      fromPort: databaseB269d8bb.attrEndpointPort,
      groupId: databaseSecurityGroup5C91fdcb.attrGroupId,
      ipProtocol: 'tcp',
      toPort: databaseB269d8bb.attrEndpointPort,
    });

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway3C070193 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway3C070193' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteF4f5cfd2 = new ec2.CfnRoute(this, 'VPCPrivateSubnet2DefaultRouteF4F5CFD2', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway3C070193.ref,
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
    });
  }
}

