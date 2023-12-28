import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface RollingUpdateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class RollingUpdate extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: RollingUpdateProps = {}) {
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
    const databaseClusterSecret3F333a5b = new secretsmanager.CfnSecret(this, 'DatabaseClusterSecret3F333A5B', {
      description: [
        'Generated by the CDK for stack: ',
        this.stackName,
      ].join(''),
      generateSecretString: {
        excludeCharacters: ' %+~`#$&*()|[]{}:;<>?!\'/@\"\\',
        generateStringKey: 'password',
        passwordLength: 30,
        secretStringTemplate: '{\"username\":\"admin\"}',
      },
    });
    databaseClusterSecret3F333a5b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const databaseClusterSecurityGroupCbe34284 = new ec2.CfnSecurityGroup(this, 'DatabaseClusterSecurityGroupCBE34284', {
      groupDescription: 'RDS security group',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PrivateSubnet1',
        },
      ],
    });

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
          value: 'RollingUpdate/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PrivateSubnet2',
        },
      ],
    });

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
          value: 'RollingUpdate/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PublicSubnet1',
        },
      ],
    });

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
          value: 'RollingUpdate/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'RollingUpdate/Vpc/PublicSubnet2',
        },
      ],
    });

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
          value: 'RollingUpdate/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const databaseClusterSubnets7Fae1846 = new rds.CfnDBSubnetGroup(this, 'DatabaseClusterSubnets7FAE1846', {
      dbSubnetGroupDescription: 'Subnets for DatabaseCluster database',
      subnetIds: [
        vpcPrivateSubnet1Subnet536B997a.ref,
        vpcPrivateSubnet2Subnet3788Aaa1.ref,
      ],
    });

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation70C59fa6 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet1RouteTableAssociation70C59FA6', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      subnetId: vpcPrivateSubnet1Subnet536B997a.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociationA89cad56 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPrivateSubnet2RouteTableAssociationA89CAD56', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      subnetId: vpcPrivateSubnet2Subnet3788Aaa1.ref,
    });

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute3Da9e72a = new ec2.CfnRoute(this, 'VpcPublicSubnet1DefaultRoute3DA9E72A', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet1DefaultRoute3Da9e72a.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet1RouteTable6C95e38e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable6C95e38e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation97140677 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet1RouteTableAssociation97140677', {
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
    });

    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcVpcgwbf912b6e == null) { throw new Error(`A combination of conditions caused 'vpcVpcgwbf912b6e' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRoute97F91067 = new ec2.CfnRoute(this, 'VpcPublicSubnet2DefaultRoute97F91067', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });

    if (databaseClusterSecret3F333a5b == null) { throw new Error(`A combination of conditions caused 'databaseClusterSecret3F333a5b' to be undefined. Fixit.`); }
    if (databaseClusterSecurityGroupCbe34284 == null) { throw new Error(`A combination of conditions caused 'databaseClusterSecurityGroupCbe34284' to be undefined. Fixit.`); }
    if (databaseClusterSubnets7Fae1846 == null) { throw new Error(`A combination of conditions caused 'databaseClusterSubnets7Fae1846' to be undefined. Fixit.`); }
    const databaseCluster68Fc2945 = new rds.CfnDBCluster(this, 'DatabaseCluster68FC2945', {
      engine: 'aurora',
      copyTagsToSnapshot: true,
      dbSubnetGroupName: databaseClusterSubnets7Fae1846.ref,
      masterUsername: [
        '{{resolve:secretsmanager:',
        databaseClusterSecret3F333a5b.ref,
        ':SecretString:username::}}',
      ].join(''),
      masterUserPassword: [
        '{{resolve:secretsmanager:',
        databaseClusterSecret3F333a5b.ref,
        ':SecretString:password::}}',
      ].join(''),
      vpcSecurityGroupIds: [
        databaseClusterSecurityGroupCbe34284.attrGroupId,
      ],
    });
    databaseCluster68Fc2945.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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
          value: 'RollingUpdate/Vpc/PublicSubnet1',
        },
      ],
    });
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
          value: 'RollingUpdate/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (databaseCluster68Fc2945 == null) { throw new Error(`A combination of conditions caused 'databaseCluster68Fc2945' to be undefined. Fixit.`); }
    if (databaseClusterSecret3F333a5b == null) { throw new Error(`A combination of conditions caused 'databaseClusterSecret3F333a5b' to be undefined. Fixit.`); }
    const databaseClusterSecretAttachmentB8bf2f7b = new secretsmanager.CfnSecretTargetAttachment(this, 'DatabaseClusterSecretAttachmentB8BF2F7B', {
      secretId: databaseClusterSecret3F333a5b.ref,
      targetId: databaseCluster68Fc2945.ref,
      targetType: 'AWS::RDS::DBCluster',
    });

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
    });

    if (databaseCluster68Fc2945 == null) { throw new Error(`A combination of conditions caused 'databaseCluster68Fc2945' to be undefined. Fixit.`); }
    if (databaseClusterSubnets7Fae1846 == null) { throw new Error(`A combination of conditions caused 'databaseClusterSubnets7Fae1846' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const databaseClusterInstance1C566869d = new rds.CfnDBInstance(this, 'DatabaseClusterInstance1C566869D', {
      dbClusterIdentifier: databaseCluster68Fc2945.ref,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: databaseClusterSubnets7Fae1846.ref,
      engine: 'aurora',
    });
    databaseClusterInstance1C566869d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseClusterInstance1C566869d.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    databaseClusterInstance1C566869d.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    databaseClusterInstance1C566869d.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    databaseClusterInstance1C566869d.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (databaseCluster68Fc2945 == null) { throw new Error(`A combination of conditions caused 'databaseCluster68Fc2945' to be undefined. Fixit.`); }
    if (databaseClusterInstance1C566869d == null) { throw new Error(`A combination of conditions caused 'databaseClusterInstance1C566869d' to be undefined. Fixit.`); }
    if (databaseClusterSubnets7Fae1846 == null) { throw new Error(`A combination of conditions caused 'databaseClusterSubnets7Fae1846' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const databaseClusterInstance252Bb9a46 = new rds.CfnDBInstance(this, 'DatabaseClusterInstance252BB9A46', {
      dbClusterIdentifier: databaseCluster68Fc2945.ref,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: databaseClusterSubnets7Fae1846.ref,
      engine: 'aurora',
    });
    databaseClusterInstance252Bb9a46.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseClusterInstance252Bb9a46.addDependency(databaseClusterInstance1C566869d);
    databaseClusterInstance252Bb9a46.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    databaseClusterInstance252Bb9a46.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    databaseClusterInstance252Bb9a46.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    databaseClusterInstance252Bb9a46.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (databaseCluster68Fc2945 == null) { throw new Error(`A combination of conditions caused 'databaseCluster68Fc2945' to be undefined. Fixit.`); }
    if (databaseClusterInstance252Bb9a46 == null) { throw new Error(`A combination of conditions caused 'databaseClusterInstance252Bb9a46' to be undefined. Fixit.`); }
    if (databaseClusterSubnets7Fae1846 == null) { throw new Error(`A combination of conditions caused 'databaseClusterSubnets7Fae1846' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const databaseClusterInstance3Ea629143 = new rds.CfnDBInstance(this, 'DatabaseClusterInstance3EA629143', {
      dbClusterIdentifier: databaseCluster68Fc2945.ref,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: databaseClusterSubnets7Fae1846.ref,
      engine: 'aurora',
    });
    databaseClusterInstance3Ea629143.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    databaseClusterInstance3Ea629143.addDependency(databaseClusterInstance252Bb9a46);
    databaseClusterInstance3Ea629143.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    databaseClusterInstance3Ea629143.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    databaseClusterInstance3Ea629143.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    databaseClusterInstance3Ea629143.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);
  }
}
