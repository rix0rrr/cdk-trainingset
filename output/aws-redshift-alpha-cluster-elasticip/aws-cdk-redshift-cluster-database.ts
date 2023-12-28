import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as redshift from 'aws-cdk-lib/aws-redshift';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface AwsCdkRedshiftClusterDatabaseProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkRedshiftClusterDatabase extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkRedshiftClusterDatabaseProps = {}) {
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
    const clusterSecret6368Bd0f = new secretsmanager.CfnSecret(this, 'ClusterSecret6368BD0F', {
      generateSecretString: {
        excludeCharacters: '\"@/\\ \'',
        generateStringKey: 'password',
        passwordLength: 30,
        secretStringTemplate: '{\"username\":\"admin\"}',
      },
    });
    clusterSecret6368Bd0f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const elasticIpAddress = new ec2.CfnEIP(this, 'ElasticIPAddress', {
    });
    elasticIpAddress.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc',
        },
      ],
    });
    vpc8378Eb38.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc',
        },
      ],
    });
    vpcIgwd7ba715c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1Eipd7e02669.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2Eip3c605a87.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const clusterSecurityGroup0921994B = new ec2.CfnSecurityGroup(this, 'ClusterSecurityGroup0921994B', {
      groupDescription: 'Redshift security group',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    clusterSecurityGroup0921994B.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PrivateSubnet1',
        },
      ],
    });
    vpcPrivateSubnet1RouteTableB2c5b500.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-cdk-redshift-cluster-database/Vpc/PrivateSubnet1',
        },
      ],
    });
    vpcPrivateSubnet1Subnet536B997a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PrivateSubnet2',
        },
      ],
    });
    vpcPrivateSubnet2RouteTableA678073b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-cdk-redshift-cluster-database/Vpc/PrivateSubnet2',
        },
      ],
    });
    vpcPrivateSubnet2Subnet3788Aaa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1RouteTable6C95e38e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1Subnet5C2d37c4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2RouteTable94F7e489.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2Subnet691E08a3.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });
    vpcVpcgwbf912b6e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const clusterSubnetsDcfa5cb7 = new redshift.CfnClusterSubnetGroup(this, 'ClusterSubnetsDCFA5CB7', {
      description: 'Subnets for Cluster Redshift cluster',
      subnetIds: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
    });
    clusterSubnetsDcfa5cb7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation70C59fa6 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet1RouteTableAssociation70C59FA6', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      subnetId: vpcPrivateSubnet1Subnet536B997a.ref,
    });
    vpcPrivateSubnet1RouteTableAssociation70C59fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociationA89cad56 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet2RouteTableAssociationA89CAD56', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      subnetId: vpcPrivateSubnet2Subnet3788Aaa1.ref,
    });
    vpcPrivateSubnet2RouteTableAssociationA89cad56.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute3Da9e72a = new ec2.CfnRoute(this, 'VpcPublicSubnet1DefaultRoute3DA9E72A', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet1DefaultRoute3Da9e72a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    vpcPublicSubnet1DefaultRoute3Da9e72a.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation97140677 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet1RouteTableAssociation97140677', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
    });
    vpcPublicSubnet1RouteTableAssociation97140677.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRoute97F91067 = new ec2.CfnRoute(this, 'VpcPublicSubnet2DefaultRoute97F91067', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });
    vpcPublicSubnet2RouteTableAssociationDd5762d8.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterSecret6368Bd0f == null) { throw new Error(`A combination of conditions caused 'clusterSecret6368Bd0f' to be undefined. Fixit.`); }
    if (clusterSecurityGroup0921994B == null) { throw new Error(`A combination of conditions caused 'clusterSecurityGroup0921994B' to be undefined. Fixit.`); }
    if (clusterSubnetsDcfa5cb7 == null) { throw new Error(`A combination of conditions caused 'clusterSubnetsDcfa5cb7' to be undefined. Fixit.`); }
    if (elasticIpAddress == null) { throw new Error(`A combination of conditions caused 'elasticIpAddress' to be undefined. Fixit.`); }
    const clusterEb0386a7 = new redshift.CfnCluster(this, 'ClusterEB0386A7', {
      clusterType: 'multi-node',
      dbName: 'default_db',
      masterUsername: [
        '{{resolve:secretsmanager:',
        clusterSecret6368Bd0f.ref,
        ':SecretString:username::}}',
      ].join(''),
      masterUserPassword: [
        '{{resolve:secretsmanager:',
        clusterSecret6368Bd0f.ref,
        ':SecretString:password::}}',
      ].join(''),
      nodeType: 'dc2.large',
      allowVersionUpgrade: true,
      automatedSnapshotRetentionPeriod: 1,
      clusterSubnetGroupName: clusterSubnetsDcfa5cb7.ref,
      elasticIp: elasticIpAddress.ref,
      encrypted: true,
      numberOfNodes: 2,
      publiclyAccessible: true,
      vpcSecurityGroupIds: [
        clusterSecurityGroup0921994B.attrGroupId,
      ],
    });
    clusterEb0386a7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipd7e02669 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipd7e02669' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway4D7517aa = new ec2.CfnNatGateway(this, 'VpcPublicSubnet1NATGateway4D7517AA', {
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
      allocationId: vpcPublicSubnet1Eipd7e02669.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip3c605a87 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip3c605a87' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9182C01d = new ec2.CfnNatGateway(this, 'VpcPublicSubnet2NATGateway9182C01D', {
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
      allocationId: vpcPublicSubnet2Eip3c605a87.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-redshift-cluster-database/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (clusterSecret6368Bd0f == null) { throw new Error(`A combination of conditions caused 'clusterSecret6368Bd0f' to be undefined. Fixit.`); }
    const clusterSecretAttachment769E6258 = new secretsmanager.CfnSecretTargetAttachment(this, 'ClusterSecretAttachment769E6258', {
      secretId: clusterSecret6368Bd0f.ref,
      targetId: clusterEb0386a7.ref,
      targetType: 'AWS::Redshift::Cluster',
    });
    clusterSecretAttachment769E6258.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });
    vpcPrivateSubnet1DefaultRouteBe02a9ed.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
    });
    vpcPrivateSubnet2DefaultRoute060D2087.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

