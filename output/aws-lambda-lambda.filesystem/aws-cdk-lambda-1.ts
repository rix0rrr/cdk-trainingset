import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as efs from 'aws-cdk-lib/aws-efs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface aws-cdk-lambda-1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-lambda-1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-lambda-1Props = {}) {
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
    const efs9E8bf36b = new efs.CfnFileSystem(this, 'Efs9E8BF36B', {
      encrypted: true,
      fileSystemPolicy: {
        Statement: [
          {
            Action: [
              'elasticfilesystem:ClientRootAccess',
              'elasticfilesystem:ClientWrite',
            ],
            Condition: {
              Bool: {
                'elasticfilesystem:AccessedViaMountTarget': 'true',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
          },
        ],
        Version: '2012-10-17',
      },
      fileSystemTags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Efs',
        },
      ],
    });
    efs9E8bf36b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet1',
        },
      ],
    });

    if (efs9E8bf36b == null) { throw new Error(`A combination of conditions caused 'efs9E8bf36b' to be undefined. Fixit.`); }
    const efsAccessPointE419fed9 = new efs.CfnAccessPoint(this, 'EfsAccessPointE419FED9', {
      accessPointTags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Efs/AccessPoint',
        },
      ],
      fileSystemId: efs9E8bf36b.ref,
      posixUser: {
        gid: '1001',
        uid: '1001',
      },
      rootDirectory: {
        creationInfo: {
          ownerGid: '1001',
          ownerUid: '1001',
          permissions: '750',
        },
        path: '/export/lambda',
      },
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const efsEfsSecurityGroup6F40ea3b = new ec2.CfnSecurityGroup(this, 'EfsEfsSecurityGroup6F40EA3B', {
      groupDescription: 'aws-cdk-lambda-1/Efs/EfsSecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Efs',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
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
          value: 'aws-cdk-lambda-1/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
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
          value: 'aws-cdk-lambda-1/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
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
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
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
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet2',
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

    if (efs9E8bf36b == null) { throw new Error(`A combination of conditions caused 'efs9E8bf36b' to be undefined. Fixit.`); }
    if (efsEfsSecurityGroup6F40ea3b == null) { throw new Error(`A combination of conditions caused 'efsEfsSecurityGroup6F40ea3b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    const efsEfsMountTargetPrivateSubnet19658885C = new efs.CfnMountTarget(this, 'EfsEfsMountTargetPrivateSubnet19658885C', {
      fileSystemId: efs9E8bf36b.ref,
      securityGroups: [
        efsEfsSecurityGroup6F40ea3b.attrGroupId,
      ],
      subnetId: vpcPrivateSubnet1Subnet536B997a.ref,
    });

    if (efs9E8bf36b == null) { throw new Error(`A combination of conditions caused 'efs9E8bf36b' to be undefined. Fixit.`); }
    if (efsEfsSecurityGroup6F40ea3b == null) { throw new Error(`A combination of conditions caused 'efsEfsSecurityGroup6F40ea3b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const efsEfsMountTargetPrivateSubnet29C850a6f = new efs.CfnMountTarget(this, 'EfsEfsMountTargetPrivateSubnet29C850A6F', {
      fileSystemId: efs9E8bf36b.ref,
      securityGroups: [
        efsEfsSecurityGroup6F40ea3b.attrGroupId,
      ],
      subnetId: vpcPrivateSubnet2Subnet3788Aaa1.ref,
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
          value: 'aws-cdk-lambda-1/Vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    vpcPublicSubnet1NatGateway4D7517aa.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
    });

    if (efsEfsMountTargetPrivateSubnet19658885C == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet19658885C' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet29C850a6f == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet29C850a6f' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambdaSecurityGroup1E71a818 = new ec2.CfnSecurityGroup(this, 'MyLambdaSecurityGroup1E71A818', {
      groupDescription: 'Automatic security group for Lambda Function awscdklambda1MyLambda82056696',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    myLambdaSecurityGroup1E71a818.addDependency(efsEfsMountTargetPrivateSubnet19658885C);
    myLambdaSecurityGroup1E71a818.addDependency(efsEfsMountTargetPrivateSubnet29C850a6f);
    myLambdaSecurityGroup1E71a818.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambdaSecurityGroup1E71a818.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambdaSecurityGroup1E71a818.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambdaSecurityGroup1E71a818.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (efsEfsMountTargetPrivateSubnet19658885C == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet19658885C' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet29C850a6f == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet29C850a6f' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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
    myLambdaServiceRole4539Ecb6.addDependency(efsEfsMountTargetPrivateSubnet19658885C);
    myLambdaServiceRole4539Ecb6.addDependency(efsEfsMountTargetPrivateSubnet29C850a6f);
    myLambdaServiceRole4539Ecb6.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambdaServiceRole4539Ecb6.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambdaServiceRole4539Ecb6.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambdaServiceRole4539Ecb6.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (efsEfsSecurityGroup6F40ea3b == null) { throw new Error(`A combination of conditions caused 'efsEfsSecurityGroup6F40ea3b' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    const efsEfsSecurityGroupfromawscdklambda1MyLambdaSecurityGroup86B085ee20490d9864a8 = new ec2.CfnSecurityGroupIngress(this, 'EfsEfsSecurityGroupfromawscdklambda1MyLambdaSecurityGroup86B085EE20490D9864A8', {
      description: 'from awscdklambda1MyLambdaSecurityGroup86B085EE:2049',
      fromPort: 2049,
      groupId: efsEfsSecurityGroup6F40ea3b.attrGroupId,
      ipProtocol: 'tcp',
      sourceSecurityGroupId: myLambdaSecurityGroup1E71a818.attrGroupId,
      toPort: 2049,
    });

    if (efs9E8bf36b == null) { throw new Error(`A combination of conditions caused 'efs9E8bf36b' to be undefined. Fixit.`); }
    if (efsAccessPointE419fed9 == null) { throw new Error(`A combination of conditions caused 'efsAccessPointE419fed9' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet19658885C == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet19658885C' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet29C850a6f == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet29C850a6f' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambdaServiceRoleDefaultPolicy5Bbc6f68 = new iam.CfnPolicy(this, 'MyLambdaServiceRoleDefaultPolicy5BBC6F68', {
      policyDocument: {
        Statement: [
          {
            Action: 'elasticfilesystem:ClientMount',
            Condition: {
              StringEquals: {
                'elasticfilesystem:AccessPointArn': [
                  'arn:',
                  this.partition,
                  ':elasticfilesystem:',
                  this.region,
                  ':',
                  this.account,
                  ':access-point/',
                  efsAccessPointE419fed9.ref,
                ].join(''),
              },
            },
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'elasticfilesystem:ClientWrite',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':elasticfilesystem:',
              this.region,
              ':',
              this.account,
              ':file-system/',
              efs9E8bf36b.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambdaServiceRoleDefaultPolicy5BBC6F68',
      roles: [
        myLambdaServiceRole4539Ecb6.ref,
      ],
    });
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(efsEfsMountTargetPrivateSubnet19658885C);
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(efsEfsMountTargetPrivateSubnet29C850a6f);
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambdaServiceRoleDefaultPolicy5Bbc6f68.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (efsAccessPointE419fed9 == null) { throw new Error(`A combination of conditions caused 'efsAccessPointE419fed9' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet19658885C == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet19658885C' to be undefined. Fixit.`); }
    if (efsEfsMountTargetPrivateSubnet29C850a6f == null) { throw new Error(`A combination of conditions caused 'efsEfsMountTargetPrivateSubnet29C850a6f' to be undefined. Fixit.`); }
    if (efsEfsSecurityGroupfromawscdklambda1MyLambdaSecurityGroup86B085ee20490d9864a8 == null) { throw new Error(`A combination of conditions caused 'efsEfsSecurityGroupfromawscdklambda1MyLambdaSecurityGroup86B085ee20490d9864a8' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        zipFile: '\nimport json\nimport os\nimport string\nimport random\nimport datetime\n\nMSG_FILE_PATH = \'/mnt/msg/content\'\n\ndef randomString(stringLength=10):\n  letters = string.ascii_lowercase\n  return \'\'.join(random.choice(letters) for i in range(stringLength))\n\ndef lambda_handler(event, context):\n  with open(MSG_FILE_PATH, \'a\') as f:\n      f.write(f\"{datetime.datetime.utcnow():%Y-%m-%d-%H:%M:%S} \" + randomString(5) + \' \')\n\n  file = open(MSG_FILE_PATH, \"r\")\n  file_content = file.read()\n  file.close()\n\n  return {\n    \'statusCode\': 200,\n    \'body\': str(file_content)\n  }\n',
      },
      fileSystemConfigs: [
        {
          arn: [
            'arn:',
            this.partition,
            ':elasticfilesystem:',
            this.region,
            ':',
            this.account,
            ':access-point/',
            efsAccessPointE419fed9.ref,
          ].join(''),
          localMountPath: '/mnt/msg',
        },
      ],
      handler: 'index.lambda_handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'python3.7',
      vpcConfig: {
        securityGroupIds: [
          myLambdaSecurityGroup1E71a818.attrGroupId,
        ],
        subnetIds: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
      },
    });
    myLambdaCce802fb.addDependency(efsEfsMountTargetPrivateSubnet19658885C);
    myLambdaCce802fb.addDependency(efsEfsMountTargetPrivateSubnet29C850a6f);
    myLambdaCce802fb.addDependency(efsEfsSecurityGroupfromawscdklambda1MyLambdaSecurityGroup86B085ee20490d9864a8);
    myLambdaCce802fb.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);
    myLambdaCce802fb.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambdaCce802fb.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambdaCce802fb.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambdaCce802fb.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambda2SecurityGroup3C507954 = new ec2.CfnSecurityGroup(this, 'MyLambda2SecurityGroup3C507954', {
      groupDescription: 'Automatic security group for Lambda Function awscdklambda1MyLambda232FB7CD2',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    myLambda2SecurityGroup3C507954.addDependency(myLambdaCce802fb);
    myLambda2SecurityGroup3C507954.addDependency(myLambdaSecurityGroup1E71a818);
    myLambda2SecurityGroup3C507954.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambda2SecurityGroup3C507954.addDependency(myLambdaServiceRole4539Ecb6);
    myLambda2SecurityGroup3C507954.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambda2SecurityGroup3C507954.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambda2SecurityGroup3C507954.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambda2SecurityGroup3C507954.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambda2ServiceRoleD09b370c = new iam.CfnRole(this, 'MyLambda2ServiceRoleD09B370C', {
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
    myLambda2ServiceRoleD09b370c.addDependency(myLambdaCce802fb);
    myLambda2ServiceRoleD09b370c.addDependency(myLambdaSecurityGroup1E71a818);
    myLambda2ServiceRoleD09b370c.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambda2ServiceRoleD09b370c.addDependency(myLambdaServiceRole4539Ecb6);
    myLambda2ServiceRoleD09b370c.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambda2ServiceRoleD09b370c.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambda2ServiceRoleD09b370c.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambda2ServiceRoleD09b370c.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (efs9E8bf36b == null) { throw new Error(`A combination of conditions caused 'efs9E8bf36b' to be undefined. Fixit.`); }
    if (efsAccessPointE419fed9 == null) { throw new Error(`A combination of conditions caused 'efsAccessPointE419fed9' to be undefined. Fixit.`); }
    if (myLambda2ServiceRoleD09b370c == null) { throw new Error(`A combination of conditions caused 'myLambda2ServiceRoleD09b370c' to be undefined. Fixit.`); }
    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const myLambda2ServiceRoleDefaultPolicy2Bece79d = new iam.CfnPolicy(this, 'MyLambda2ServiceRoleDefaultPolicy2BECE79D', {
      policyDocument: {
        Statement: [
          {
            Action: 'elasticfilesystem:ClientMount',
            Condition: {
              StringEquals: {
                'elasticfilesystem:AccessPointArn': [
                  'arn:',
                  this.partition,
                  ':elasticfilesystem:',
                  this.region,
                  ':',
                  this.account,
                  ':access-point/',
                  efsAccessPointE419fed9.ref,
                ].join(''),
              },
            },
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'elasticfilesystem:ClientWrite',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':elasticfilesystem:',
              this.region,
              ':',
              this.account,
              ':file-system/',
              efs9E8bf36b.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambda2ServiceRoleDefaultPolicy2BECE79D',
      roles: [
        myLambda2ServiceRoleD09b370c.ref,
      ],
    });
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(myLambdaCce802fb);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(myLambdaSecurityGroup1E71a818);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(myLambdaServiceRole4539Ecb6);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambda2ServiceRoleDefaultPolicy2Bece79d.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (efsEfsSecurityGroup6F40ea3b == null) { throw new Error(`A combination of conditions caused 'efsEfsSecurityGroup6F40ea3b' to be undefined. Fixit.`); }
    if (myLambda2SecurityGroup3C507954 == null) { throw new Error(`A combination of conditions caused 'myLambda2SecurityGroup3C507954' to be undefined. Fixit.`); }
    const securityGroupfromawscdklambda1MyLambda2SecurityGroup7492F70d20498301d9d2 = new ec2.CfnSecurityGroupIngress(this, 'securityGroupfromawscdklambda1MyLambda2SecurityGroup7492F70D20498301D9D2', {
      description: 'from awscdklambda1MyLambda2SecurityGroup7492F70D:2049',
      fromPort: 2049,
      groupId: efsEfsSecurityGroup6F40ea3b.attrGroupId,
      ipProtocol: 'tcp',
      sourceSecurityGroupId: myLambda2SecurityGroup3C507954.attrGroupId,
      toPort: 2049,
    });

    if (efsAccessPointE419fed9 == null) { throw new Error(`A combination of conditions caused 'efsAccessPointE419fed9' to be undefined. Fixit.`); }
    if (myLambda2SecurityGroup3C507954 == null) { throw new Error(`A combination of conditions caused 'myLambda2SecurityGroup3C507954' to be undefined. Fixit.`); }
    if (myLambda2ServiceRoleD09b370c == null) { throw new Error(`A combination of conditions caused 'myLambda2ServiceRoleD09b370c' to be undefined. Fixit.`); }
    if (myLambda2ServiceRoleDefaultPolicy2Bece79d == null) { throw new Error(`A combination of conditions caused 'myLambda2ServiceRoleDefaultPolicy2Bece79d' to be undefined. Fixit.`); }
    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaSecurityGroup1E71a818 == null) { throw new Error(`A combination of conditions caused 'myLambdaSecurityGroup1E71a818' to be undefined. Fixit.`); }
    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    if (securityGroupfromawscdklambda1MyLambda2SecurityGroup7492F70d20498301d9d2 == null) { throw new Error(`A combination of conditions caused 'securityGroupfromawscdklambda1MyLambda2SecurityGroup7492F70d20498301d9d2' to be undefined. Fixit.`); }
    const myLambda2254B54d5 = new lambda.CfnFunction(this, 'MyLambda2254B54D5', {
      code: {
        zipFile: '\nimport json\nimport os\nimport string\nimport random\nimport datetime\n\nMSG_FILE_PATH = \'/mnt/msg/content\'\n\ndef randomString(stringLength=10):\n  letters = string.ascii_lowercase\n  return \'\'.join(random.choice(letters) for i in range(stringLength))\n\ndef lambda_handler(event, context):\n  with open(MSG_FILE_PATH, \'a\') as f:\n      f.write(f\"{datetime.datetime.utcnow():%Y-%m-%d-%H:%M:%S} \" + randomString(5) + \' \')\n\n  file = open(MSG_FILE_PATH, \"r\")\n  file_content = file.read()\n  file.close()\n\n  return {\n    \'statusCode\': 200,\n    \'body\': str(file_content)\n  }\n',
      },
      fileSystemConfigs: [
        {
          arn: [
            'arn:',
            this.partition,
            ':elasticfilesystem:',
            this.region,
            ':',
            this.account,
            ':access-point/',
            efsAccessPointE419fed9.ref,
          ].join(''),
          localMountPath: '/mnt/msg',
        },
      ],
      handler: 'index.lambda_handler',
      role: myLambda2ServiceRoleD09b370c.attrArn,
      runtime: 'python3.7',
      vpcConfig: {
        securityGroupIds: [
          myLambda2SecurityGroup3C507954.attrGroupId,
        ],
        subnetIds: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
      },
    });
    myLambda2254B54d5.addDependency(myLambdaCce802fb);
    myLambda2254B54d5.addDependency(myLambdaSecurityGroup1E71a818);
    myLambda2254B54d5.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambda2254B54d5.addDependency(myLambdaServiceRole4539Ecb6);
    myLambda2254B54d5.addDependency(myLambda2ServiceRoleDefaultPolicy2Bece79d);
    myLambda2254B54d5.addDependency(myLambda2ServiceRoleD09b370c);
    myLambda2254B54d5.addDependency(securityGroupfromawscdklambda1MyLambda2SecurityGroup7492F70d20498301d9d2);
    myLambda2254B54d5.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    myLambda2254B54d5.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    myLambda2254B54d5.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    myLambda2254B54d5.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);
  }
}

