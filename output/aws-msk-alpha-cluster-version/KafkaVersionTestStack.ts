import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as msk from 'aws-cdk-lib/aws-msk';

export interface KafkaversionteststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Kafkaversionteststack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: KafkaversionteststackProps = {}) {
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
    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const clusterVersion221SecurityGroup7D79a634 = new ec2.CfnSecurityGroup(this, 'ClusterVersion221SecurityGroup7D79A634', {
      groupDescription: 'MSK security group',
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
    const clusterVersion231SecurityGroup9Cc906f6 = new ec2.CfnSecurityGroup(this, 'ClusterVersion231SecurityGroup9CC906F6', {
      groupDescription: 'MSK security group',
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
    const clusterVersion2411SecurityGroup1C6605a8 = new ec2.CfnSecurityGroup(this, 'ClusterVersion2411SecurityGroup1C6605A8', {
      groupDescription: 'MSK security group',
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
    const clusterVersion251SecurityGroup54D25418 = new ec2.CfnSecurityGroup(this, 'ClusterVersion251SecurityGroup54D25418', {
      groupDescription: 'MSK security group',
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
    const clusterVersion260SecurityGroup7Ee4c4b9 = new ec2.CfnSecurityGroup(this, 'ClusterVersion260SecurityGroup7EE4C4B9', {
      groupDescription: 'MSK security group',
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
    const clusterVersion261SecurityGroupA9cf6b0f = new ec2.CfnSecurityGroup(this, 'ClusterVersion261SecurityGroupA9CF6B0F', {
      groupDescription: 'MSK security group',
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
    const clusterVersion262SecurityGroup1F74c57d = new ec2.CfnSecurityGroup(this, 'ClusterVersion262SecurityGroup1F74C57D', {
      groupDescription: 'MSK security group',
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
    const clusterVersion263SecurityGroupE3faa85b = new ec2.CfnSecurityGroup(this, 'ClusterVersion263SecurityGroupE3FAA85B', {
      groupDescription: 'MSK security group',
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
    const clusterVersion270SecurityGroupC310bf35 = new ec2.CfnSecurityGroup(this, 'ClusterVersion270SecurityGroupC310BF35', {
      groupDescription: 'MSK security group',
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
    const clusterVersion271SecurityGroup1487C17c = new ec2.CfnSecurityGroup(this, 'ClusterVersion271SecurityGroup1487C17C', {
      groupDescription: 'MSK security group',
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
    const clusterVersion272SecurityGroupB8ae57f0 = new ec2.CfnSecurityGroup(this, 'ClusterVersion272SecurityGroupB8AE57F0', {
      groupDescription: 'MSK security group',
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
    const clusterVersion280SecurityGroup7A071e33 = new ec2.CfnSecurityGroup(this, 'ClusterVersion280SecurityGroup7A071E33', {
      groupDescription: 'MSK security group',
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
    const clusterVersion281SecurityGroup58456B77 = new ec2.CfnSecurityGroup(this, 'ClusterVersion281SecurityGroup58456B77', {
      groupDescription: 'MSK security group',
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
    const clusterVersion282tieredSecurityGroup3Fa6200d = new ec2.CfnSecurityGroup(this, 'ClusterVersion282tieredSecurityGroup3FA6200D', {
      groupDescription: 'MSK security group',
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
    const clusterVersion311SecurityGroupFfd16098 = new ec2.CfnSecurityGroup(this, 'ClusterVersion311SecurityGroupFFD16098', {
      groupDescription: 'MSK security group',
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
    const clusterVersion320SecurityGroupF51f054b = new ec2.CfnSecurityGroup(this, 'ClusterVersion320SecurityGroupF51F054B', {
      groupDescription: 'MSK security group',
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
    const clusterVersion331SecurityGroupE349b3d7 = new ec2.CfnSecurityGroup(this, 'ClusterVersion331SecurityGroupE349B3D7', {
      groupDescription: 'MSK security group',
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
    const clusterVersion332SecurityGroup75E967c6 = new ec2.CfnSecurityGroup(this, 'ClusterVersion332SecurityGroup75E967C6', {
      groupDescription: 'MSK security group',
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
    const clusterVersion340SecurityGroupBcdec51b = new ec2.CfnSecurityGroup(this, 'ClusterVersion340SecurityGroupBCDEC51B', {
      groupDescription: 'MSK security group',
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
    const clusterVersion351SecurityGroup866E7223 = new ec2.CfnSecurityGroup(this, 'ClusterVersion351SecurityGroup866E7223', {
      groupDescription: 'MSK security group',
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
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
      availabilityZone: 'test-region-1a',
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
          value: 'KafkaVersionTestStack/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
      availabilityZone: 'test-region-1b',
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
          value: 'KafkaVersionTestStack/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
      availabilityZone: 'test-region-1a',
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
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
      availabilityZone: 'test-region-1b',
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
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      internetGatewayId: vpcIgwd7ba715c.ref,
      vpcId: vpc8378Eb38.ref,
    });

    if (clusterVersion221SecurityGroup7D79a634 == null) { throw new Error(`A combination of conditions caused 'clusterVersion221SecurityGroup7D79a634' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion2216E958bdb = new msk.CfnCluster(this, 'ClusterVersion2216E958BDB', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion221SecurityGroup7D79a634.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-2-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.2.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion2216E958bdb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion231SecurityGroup9Cc906f6 == null) { throw new Error(`A combination of conditions caused 'clusterVersion231SecurityGroup9Cc906f6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion231Eca150b0 = new msk.CfnCluster(this, 'ClusterVersion231ECA150B0', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion231SecurityGroup9Cc906f6.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-3-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.3.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion231Eca150b0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion2411SecurityGroup1C6605a8 == null) { throw new Error(`A combination of conditions caused 'clusterVersion2411SecurityGroup1C6605a8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion2411B601f534 = new msk.CfnCluster(this, 'ClusterVersion2411B601F534', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion2411SecurityGroup1C6605a8.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-4-1-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.4.1.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion2411B601f534.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion251SecurityGroup54D25418 == null) { throw new Error(`A combination of conditions caused 'clusterVersion251SecurityGroup54D25418' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion251B0616fde = new msk.CfnCluster(this, 'ClusterVersion251B0616FDE', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion251SecurityGroup54D25418.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-5-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.5.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion251B0616fde.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion260SecurityGroup7Ee4c4b9 == null) { throw new Error(`A combination of conditions caused 'clusterVersion260SecurityGroup7Ee4c4b9' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion260Fb26aa6a = new msk.CfnCluster(this, 'ClusterVersion260FB26AA6A', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion260SecurityGroup7Ee4c4b9.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-6-0',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.6.0',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion260Fb26aa6a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion261SecurityGroupA9cf6b0f == null) { throw new Error(`A combination of conditions caused 'clusterVersion261SecurityGroupA9cf6b0f' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion261D43b824f = new msk.CfnCluster(this, 'ClusterVersion261D43B824F', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion261SecurityGroupA9cf6b0f.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-6-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.6.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion261D43b824f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion262SecurityGroup1F74c57d == null) { throw new Error(`A combination of conditions caused 'clusterVersion262SecurityGroup1F74c57d' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion2622894Bf48 = new msk.CfnCluster(this, 'ClusterVersion2622894BF48', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion262SecurityGroup1F74c57d.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-6-2',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.6.2',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion2622894Bf48.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion263SecurityGroupE3faa85b == null) { throw new Error(`A combination of conditions caused 'clusterVersion263SecurityGroupE3faa85b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion263Dc77d2ed = new msk.CfnCluster(this, 'ClusterVersion263DC77D2ED', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion263SecurityGroupE3faa85b.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-6-3',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.6.3',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion263Dc77d2ed.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion270SecurityGroupC310bf35 == null) { throw new Error(`A combination of conditions caused 'clusterVersion270SecurityGroupC310bf35' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion27010Cb5fbf = new msk.CfnCluster(this, 'ClusterVersion27010CB5FBF', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion270SecurityGroupC310bf35.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-7-0',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.7.0',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion27010Cb5fbf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion271SecurityGroup1487C17c == null) { throw new Error(`A combination of conditions caused 'clusterVersion271SecurityGroup1487C17c' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion271Aa1304b7 = new msk.CfnCluster(this, 'ClusterVersion271AA1304B7', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion271SecurityGroup1487C17c.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-7-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.7.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion271Aa1304b7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion272SecurityGroupB8ae57f0 == null) { throw new Error(`A combination of conditions caused 'clusterVersion272SecurityGroupB8ae57f0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion272Bee37aa9 = new msk.CfnCluster(this, 'ClusterVersion272BEE37AA9', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion272SecurityGroupB8ae57f0.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-7-2',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.7.2',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion272Bee37aa9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion280SecurityGroup7A071e33 == null) { throw new Error(`A combination of conditions caused 'clusterVersion280SecurityGroup7A071e33' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion280A292f8ba = new msk.CfnCluster(this, 'ClusterVersion280A292F8BA', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion280SecurityGroup7A071e33.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-8-0',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.8.0',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion280A292f8ba.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion281SecurityGroup58456B77 == null) { throw new Error(`A combination of conditions caused 'clusterVersion281SecurityGroup58456B77' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion281E912f3b9 = new msk.CfnCluster(this, 'ClusterVersion281E912F3B9', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion281SecurityGroup58456B77.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-8-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.8.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion281E912f3b9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion282tieredSecurityGroup3Fa6200d == null) { throw new Error(`A combination of conditions caused 'clusterVersion282tieredSecurityGroup3Fa6200d' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion282tiered485A19be = new msk.CfnCluster(this, 'ClusterVersion282tiered485A19BE', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion282tieredSecurityGroup3Fa6200d.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v2-8-2-tiered',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '2.8.2.tiered',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion282tiered485A19be.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion311SecurityGroupFfd16098 == null) { throw new Error(`A combination of conditions caused 'clusterVersion311SecurityGroupFfd16098' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion311273A2535 = new msk.CfnCluster(this, 'ClusterVersion311273A2535', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion311SecurityGroupFfd16098.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-1-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.1.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion311273A2535.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion320SecurityGroupF51f054b == null) { throw new Error(`A combination of conditions caused 'clusterVersion320SecurityGroupF51f054b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion3202Aa95f49 = new msk.CfnCluster(this, 'ClusterVersion3202AA95F49', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion320SecurityGroupF51f054b.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-2-0',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.2.0',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion3202Aa95f49.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion331SecurityGroupE349b3d7 == null) { throw new Error(`A combination of conditions caused 'clusterVersion331SecurityGroupE349b3d7' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion331008Ac95f = new msk.CfnCluster(this, 'ClusterVersion331008AC95F', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion331SecurityGroupE349b3d7.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-3-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.3.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion331008Ac95f.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion332SecurityGroup75E967c6 == null) { throw new Error(`A combination of conditions caused 'clusterVersion332SecurityGroup75E967c6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion332A4ab4092 = new msk.CfnCluster(this, 'ClusterVersion332A4AB4092', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion332SecurityGroup75E967c6.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-3-2',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.3.2',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion332A4ab4092.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion340SecurityGroupBcdec51b == null) { throw new Error(`A combination of conditions caused 'clusterVersion340SecurityGroupBcdec51b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion340D193688a = new msk.CfnCluster(this, 'ClusterVersion340D193688A', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion340SecurityGroupBcdec51b.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-4-0',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.4.0',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion340D193688a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (clusterVersion351SecurityGroup866E7223 == null) { throw new Error(`A combination of conditions caused 'clusterVersion351SecurityGroup866E7223' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const clusterVersion3515E181c3e = new msk.CfnCluster(this, 'ClusterVersion3515E181C3E', {
      brokerNodeGroupInfo: {
        clientSubnets: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
        instanceType: 'kafka.m5.large',
        securityGroups: [
          clusterVersion351SecurityGroup866E7223.attrGroupId,
        ],
        storageInfo: {
          ebsStorageInfo: {
            volumeSize: 1000,
          },
        },
      },
      clusterName: 'cluster-v3-5-1',
      encryptionInfo: {
        encryptionInTransit: {
          clientBroker: 'TLS',
          inCluster: true,
        },
      },
      kafkaVersion: '3.5.1',
      loggingInfo: {
        brokerLogs: {
          cloudWatchLogs: {
            enabled: false,
          },
          firehose: {
            enabled: false,
          },
          s3: {
            enabled: false,
          },
        },
      },
      numberOfBrokerNodes: 2,
    });
    clusterVersion3515E181c3e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
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
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipd7e02669 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipd7e02669' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway4D7517aa = new ec2.CfnNatGateway(this, 'VpcPublicSubnet1NATGateway4D7517AA', {
      allocationId: vpcPublicSubnet1Eipd7e02669.attrAllocationId,
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet1',
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
      allocationId: vpcPublicSubnet2Eip3c605a87.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
      tags: [
        {
          key: 'Name',
          value: 'KafkaVersionTestStack/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
    });
  }
}

