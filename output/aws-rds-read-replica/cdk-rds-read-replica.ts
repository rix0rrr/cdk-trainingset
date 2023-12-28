import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface cdk-rds-read-replicaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-rds-read-replica extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-rds-read-replicaProps = {}) {
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
    const mysqlSourceSecretB727c3f2 = new secretsmanager.CfnSecret(this, 'MysqlSourceSecretB727C3F2', {
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
    mysqlSourceSecretB727c3f2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const postgresSourceSecret0A09a7ad = new secretsmanager.CfnSecret(this, 'PostgresSourceSecret0A09A7AD', {
      description: [
        'Generated by the CDK for stack: ',
        this.stackName,
      ].join(''),
      generateSecretString: {
        excludeCharacters: ' %+~`#$&*()|[]{}:;<>?!\'/@\"\\',
        generateStringKey: 'password',
        passwordLength: 30,
        secretStringTemplate: '{\"username\":\"postgres\"}',
      },
    });
    postgresSourceSecret0A09a7ad.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const replicaParameterGroup4Be5ee70 = new rds.CfnDBParameterGroup(this, 'ReplicaParameterGroup4BE5EE70', {
      description: 'Parameter group for mysql8.0',
      family: 'mysql8.0',
      parameters: {
        'wait_timeout': '86400',
      },
    });

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'cdk-rds-read-replica/Vpc',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const mysqlReplicaSecurityGroup169Fafaa = new ec2.CfnSecurityGroup(this, 'MysqlReplicaSecurityGroup169FAFAA', {
      groupDescription: 'Security group for MysqlReplica database',
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
    const mysqlSourceSecurityGroupC691e169 = new ec2.CfnSecurityGroup(this, 'MysqlSourceSecurityGroupC691E169', {
      groupDescription: 'Security group for MysqlSource database',
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
    const postgresReplicaSecurityGroup5385C4c2 = new ec2.CfnSecurityGroup(this, 'PostgresReplicaSecurityGroup5385C4C2', {
      groupDescription: 'Security group for PostgresReplica database',
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
    const postgresSourceSecurityGroup69289E68 = new ec2.CfnSecurityGroup(this, 'PostgresSourceSecurityGroup69289E68', {
      groupDescription: 'Security group for PostgresSource database',
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
    const vpcisolatedSubnet1RouteTableE442650b = new ec2.CfnRouteTable(this, 'VpcisolatedSubnet1RouteTableE442650B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-rds-read-replica/Vpc/isolatedSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcisolatedSubnet1SubnetE62b1b9b = new ec2.CfnSubnet(this, 'VpcisolatedSubnet1SubnetE62B1B9B', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.0.0/17',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'cdk-rds-read-replica/Vpc/isolatedSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcisolatedSubnet2RouteTable334F9764 = new ec2.CfnRouteTable(this, 'VpcisolatedSubnet2RouteTable334F9764', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'cdk-rds-read-replica/Vpc/isolatedSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcisolatedSubnet2Subnet39217055 = new ec2.CfnSubnet(this, 'VpcisolatedSubnet2Subnet39217055', {
      vpcId: vpc8378Eb38.ref,
      availabilityZone: cdk.Fn.select(1, cdk.Fn.getAzs('')),
      cidrBlock: '10.0.128.0/17',
      mapPublicIpOnLaunch: false,
      tags: [
        {
          key: 'aws-cdk:subnet-name',
          value: 'isolated',
        },
        {
          key: 'aws-cdk:subnet-type',
          value: 'Isolated',
        },
        {
          key: 'Name',
          value: 'cdk-rds-read-replica/Vpc/isolatedSubnet2',
        },
      ],
    });

    if (vpcisolatedSubnet1SubnetE62b1b9b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1SubnetE62b1b9b' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet2Subnet39217055 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2Subnet39217055' to be undefined. Fixit.`); }
    const mysqlReplicaSubnetGroup79E1f72a = new rds.CfnDBSubnetGroup(this, 'MysqlReplicaSubnetGroup79E1F72A', {
      dbSubnetGroupDescription: 'Subnet group for MysqlReplica database',
      subnetIds: [
        vpcisolatedSubnet1SubnetE62b1b9b.ref,
        vpcisolatedSubnet2Subnet39217055.ref,
      ],
    });

    if (vpcisolatedSubnet1SubnetE62b1b9b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1SubnetE62b1b9b' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet2Subnet39217055 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2Subnet39217055' to be undefined. Fixit.`); }
    const mysqlSourceSubnetGroup213E979b = new rds.CfnDBSubnetGroup(this, 'MysqlSourceSubnetGroup213E979B', {
      dbSubnetGroupDescription: 'Subnet group for MysqlSource database',
      subnetIds: [
        vpcisolatedSubnet1SubnetE62b1b9b.ref,
        vpcisolatedSubnet2Subnet39217055.ref,
      ],
    });

    if (vpcisolatedSubnet1SubnetE62b1b9b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1SubnetE62b1b9b' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet2Subnet39217055 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2Subnet39217055' to be undefined. Fixit.`); }
    const postgresReplicaSubnetGroup301B59da = new rds.CfnDBSubnetGroup(this, 'PostgresReplicaSubnetGroup301B59DA', {
      dbSubnetGroupDescription: 'Subnet group for PostgresReplica database',
      subnetIds: [
        vpcisolatedSubnet1SubnetE62b1b9b.ref,
        vpcisolatedSubnet2Subnet39217055.ref,
      ],
    });

    if (vpcisolatedSubnet1SubnetE62b1b9b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1SubnetE62b1b9b' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet2Subnet39217055 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2Subnet39217055' to be undefined. Fixit.`); }
    const postgresSourceSubnetGroupBeeb1740 = new rds.CfnDBSubnetGroup(this, 'PostgresSourceSubnetGroupBEEB1740', {
      dbSubnetGroupDescription: 'Subnet group for PostgresSource database',
      subnetIds: [
        vpcisolatedSubnet1SubnetE62b1b9b.ref,
        vpcisolatedSubnet2Subnet39217055.ref,
      ],
    });

    if (vpcisolatedSubnet1RouteTableE442650b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1RouteTableE442650b' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet1SubnetE62b1b9b == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet1SubnetE62b1b9b' to be undefined. Fixit.`); }
    const vpcisolatedSubnet1RouteTableAssociationD259e31a = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcisolatedSubnet1RouteTableAssociationD259E31A', {
      routeTableId: vpcisolatedSubnet1RouteTableE442650b.ref,
      subnetId: vpcisolatedSubnet1SubnetE62b1b9b.ref,
    });

    if (vpcisolatedSubnet2RouteTable334F9764 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2RouteTable334F9764' to be undefined. Fixit.`); }
    if (vpcisolatedSubnet2Subnet39217055 == null) { throw new Error(`A combination of conditions caused 'vpcisolatedSubnet2Subnet39217055' to be undefined. Fixit.`); }
    const vpcisolatedSubnet2RouteTableAssociation25A4716f = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcisolatedSubnet2RouteTableAssociation25A4716F', {
      routeTableId: vpcisolatedSubnet2RouteTable334F9764.ref,
      subnetId: vpcisolatedSubnet2Subnet39217055.ref,
    });

    if (mysqlSourceSecretB727c3f2 == null) { throw new Error(`A combination of conditions caused 'mysqlSourceSecretB727c3f2' to be undefined. Fixit.`); }
    if (mysqlSourceSecurityGroupC691e169 == null) { throw new Error(`A combination of conditions caused 'mysqlSourceSecurityGroupC691e169' to be undefined. Fixit.`); }
    if (mysqlSourceSubnetGroup213E979b == null) { throw new Error(`A combination of conditions caused 'mysqlSourceSubnetGroup213E979b' to be undefined. Fixit.`); }
    const mysqlSource9A10350c = new rds.CfnDBInstance(this, 'MysqlSource9A10350C', {
      allocatedStorage: '100',
      backupRetentionPeriod: 5,
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: mysqlSourceSubnetGroup213E979b.ref,
      engine: 'mysql',
      engineVersion: '8.0',
      masterUsername: [
        '{{resolve:secretsmanager:',
        mysqlSourceSecretB727c3f2.ref,
        ':SecretString:username::}}',
      ].join(''),
      masterUserPassword: [
        '{{resolve:secretsmanager:',
        mysqlSourceSecretB727c3f2.ref,
        ':SecretString:password::}}',
      ].join(''),
      publiclyAccessible: false,
      storageType: 'gp2',
      vpcSecurityGroups: [
        mysqlSourceSecurityGroupC691e169.attrGroupId,
      ],
    });
    mysqlSource9A10350c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.SNAPSHOT;

    if (postgresSourceSecret0A09a7ad == null) { throw new Error(`A combination of conditions caused 'postgresSourceSecret0A09a7ad' to be undefined. Fixit.`); }
    if (postgresSourceSecurityGroup69289E68 == null) { throw new Error(`A combination of conditions caused 'postgresSourceSecurityGroup69289E68' to be undefined. Fixit.`); }
    if (postgresSourceSubnetGroupBeeb1740 == null) { throw new Error(`A combination of conditions caused 'postgresSourceSubnetGroupBeeb1740' to be undefined. Fixit.`); }
    const postgresSourceEb66bfc9 = new rds.CfnDBInstance(this, 'PostgresSourceEB66BFC9', {
      allocatedStorage: '100',
      backupRetentionPeriod: 5,
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: postgresSourceSubnetGroupBeeb1740.ref,
      engine: 'postgres',
      engineVersion: '15.2',
      masterUsername: [
        '{{resolve:secretsmanager:',
        postgresSourceSecret0A09a7ad.ref,
        ':SecretString:username::}}',
      ].join(''),
      masterUserPassword: [
        '{{resolve:secretsmanager:',
        postgresSourceSecret0A09a7ad.ref,
        ':SecretString:password::}}',
      ].join(''),
      publiclyAccessible: false,
      storageType: 'gp2',
      vpcSecurityGroups: [
        postgresSourceSecurityGroup69289E68.attrGroupId,
      ],
    });
    postgresSourceEb66bfc9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.SNAPSHOT;

    if (mysqlReplicaSecurityGroup169Fafaa == null) { throw new Error(`A combination of conditions caused 'mysqlReplicaSecurityGroup169Fafaa' to be undefined. Fixit.`); }
    if (mysqlReplicaSubnetGroup79E1f72a == null) { throw new Error(`A combination of conditions caused 'mysqlReplicaSubnetGroup79E1f72a' to be undefined. Fixit.`); }
    if (mysqlSource9A10350c == null) { throw new Error(`A combination of conditions caused 'mysqlSource9A10350c' to be undefined. Fixit.`); }
    if (replicaParameterGroup4Be5ee70 == null) { throw new Error(`A combination of conditions caused 'replicaParameterGroup4Be5ee70' to be undefined. Fixit.`); }
    const mysqlReplica87D29f78 = new rds.CfnDBInstance(this, 'MysqlReplica87D29F78', {
      backupRetentionPeriod: 3,
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.small',
      dbParameterGroupName: replicaParameterGroup4Be5ee70.ref,
      dbSubnetGroupName: mysqlReplicaSubnetGroup79E1f72a.ref,
      publiclyAccessible: false,
      sourceDbInstanceIdentifier: [
        'arn:',
        this.partition,
        ':rds:',
        this.region,
        ':',
        this.account,
        ':db:',
        mysqlSource9A10350c.ref,
      ].join(''),
      storageType: 'gp2',
      vpcSecurityGroups: [
        mysqlReplicaSecurityGroup169Fafaa.attrGroupId,
      ],
    });
    mysqlReplica87D29f78.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.SNAPSHOT;

    if (mysqlSource9A10350c == null) { throw new Error(`A combination of conditions caused 'mysqlSource9A10350c' to be undefined. Fixit.`); }
    if (mysqlSourceSecretB727c3f2 == null) { throw new Error(`A combination of conditions caused 'mysqlSourceSecretB727c3f2' to be undefined. Fixit.`); }
    const mysqlSourceSecretAttachment5E4edf73 = new secretsmanager.CfnSecretTargetAttachment(this, 'MysqlSourceSecretAttachment5E4EDF73', {
      secretId: mysqlSourceSecretB727c3f2.ref,
      targetId: mysqlSource9A10350c.ref,
      targetType: 'AWS::RDS::DBInstance',
    });

    if (postgresReplicaSecurityGroup5385C4c2 == null) { throw new Error(`A combination of conditions caused 'postgresReplicaSecurityGroup5385C4c2' to be undefined. Fixit.`); }
    if (postgresReplicaSubnetGroup301B59da == null) { throw new Error(`A combination of conditions caused 'postgresReplicaSubnetGroup301B59da' to be undefined. Fixit.`); }
    if (postgresSourceEb66bfc9 == null) { throw new Error(`A combination of conditions caused 'postgresSourceEb66bfc9' to be undefined. Fixit.`); }
    const postgresReplica23A3c738 = new rds.CfnDBInstance(this, 'PostgresReplica23A3C738', {
      copyTagsToSnapshot: true,
      dbInstanceClass: 'db.t3.small',
      dbSubnetGroupName: postgresReplicaSubnetGroup301B59da.ref,
      publiclyAccessible: false,
      sourceDbInstanceIdentifier: [
        'arn:',
        this.partition,
        ':rds:',
        this.region,
        ':',
        this.account,
        ':db:',
        postgresSourceEb66bfc9.ref,
      ].join(''),
      storageType: 'gp2',
      vpcSecurityGroups: [
        postgresReplicaSecurityGroup5385C4c2.attrGroupId,
      ],
    });
    postgresReplica23A3c738.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.SNAPSHOT;

    if (postgresSourceEb66bfc9 == null) { throw new Error(`A combination of conditions caused 'postgresSourceEb66bfc9' to be undefined. Fixit.`); }
    if (postgresSourceSecret0A09a7ad == null) { throw new Error(`A combination of conditions caused 'postgresSourceSecret0A09a7ad' to be undefined. Fixit.`); }
    const postgresSourceSecretAttachmentE3c3b705 = new secretsmanager.CfnSecretTargetAttachment(this, 'PostgresSourceSecretAttachmentE3C3B705', {
      secretId: postgresSourceSecret0A09a7ad.ref,
      targetId: postgresSourceEb66bfc9.ref,
      targetType: 'AWS::RDS::DBInstance',
    });
  }
}

