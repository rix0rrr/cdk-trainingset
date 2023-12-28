import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const fairshare8585948E = new batch.CfnSchedulingPolicy(this, 'fairshare8585948E', {
      fairsharePolicy: {
        computeReservation: 75,
        shareDecaySeconds: 3600,
        shareDistribution: [
          {
            shareIdentifier: 'shareA',
            weightFactor: 0.5,
          },
          {
            shareIdentifier: 'shareB',
            weightFactor: 7,
          },
        ],
      },
      name: 'joBBQFairsharePolicy',
    });

    const managedEc2CeInstanceProfileRole58A9b8c3 = new iam.CfnRole(this, 'managedEc2CEInstanceProfileRole58A9B8C3', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const newManagedEc2CeInstanceProfileRoleE4da6e77 = new iam.CfnRole(this, 'newManagedEc2CEInstanceProfileRoleE4DA6E77', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip9b3743b1 = new ec2.CfnEIP(this, 'vpcPublicSubnet2EIP9B3743B1', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
    });

    if (managedEc2CeInstanceProfileRole58A9b8c3 == null) { throw new Error(`A combination of conditions caused 'managedEc2CeInstanceProfileRole58A9b8c3' to be undefined. Fixit.`); }
    const managedEc2CeInstanceProfile720729B7 = new iam.CfnInstanceProfile(this, 'managedEc2CEInstanceProfile720729B7', {
      roles: [
        managedEc2CeInstanceProfileRole58A9b8c3.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const managedEc2CeSecurityGroup7Eb1d710 = new ec2.CfnSecurityGroup(this, 'managedEc2CESecurityGroup7EB1D710', {
      groupDescription: 'stack/managedEc2CE/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (newManagedEc2CeInstanceProfileRoleE4da6e77 == null) { throw new Error(`A combination of conditions caused 'newManagedEc2CeInstanceProfileRoleE4da6e77' to be undefined. Fixit.`); }
    const newManagedEc2CeInstanceProfile9101Ed44 = new iam.CfnInstanceProfile(this, 'newManagedEc2CEInstanceProfile9101ED44', {
      roles: [
        newManagedEc2CeInstanceProfileRoleE4da6e77.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const newManagedEc2CeSecurityGroup5147Efe5 = new ec2.CfnSecurityGroup(this, 'newManagedEc2CESecurityGroup5147EFE5', {
      groupDescription: 'stack/newManagedEc2CE/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet934893E8 = new ec2.CfnSubnet(this, 'vpcPrivateSubnet1Subnet934893E8', {
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
          value: 'stack/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet7031C2ba = new ec2.CfnSubnet(this, 'vpcPrivateSubnet2Subnet7031C2BA', {
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
          value: 'stack/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet2E65531e = new ec2.CfnSubnet(this, 'vpcPublicSubnet1Subnet2E65531E', {
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
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet009B674f = new ec2.CfnSubnet(this, 'vpcPublicSubnet2Subnet009B674F', {
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
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    const vpcVpcgw7984c166 = new ec2.CfnVPCGatewayAttachment(this, 'vpcVPCGW7984C166', {
      internetGatewayId: vpcIgwe57cbdca.ref,
      vpcId: vpcA2121c38.ref,
    });

    if (managedEc2CeInstanceProfile720729B7 == null) { throw new Error(`A combination of conditions caused 'managedEc2CeInstanceProfile720729B7' to be undefined. Fixit.`); }
    if (managedEc2CeSecurityGroup7Eb1d710 == null) { throw new Error(`A combination of conditions caused 'managedEc2CeSecurityGroup7Eb1d710' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const managedEc2Ce195a935f = new batch.CfnComputeEnvironment(this, 'managedEc2CE195A935F', {
      computeResources: {
        allocationStrategy: 'BEST_FIT_PROGRESSIVE',
        instanceRole: managedEc2CeInstanceProfile720729B7.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          managedEc2CeSecurityGroup7Eb1d710.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'EC2',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (newManagedEc2CeInstanceProfile9101Ed44 == null) { throw new Error(`A combination of conditions caused 'newManagedEc2CeInstanceProfile9101Ed44' to be undefined. Fixit.`); }
    if (newManagedEc2CeSecurityGroup5147Efe5 == null) { throw new Error(`A combination of conditions caused 'newManagedEc2CeSecurityGroup5147Efe5' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const newManagedEc2Cecbffda3e = new batch.CfnComputeEnvironment(this, 'newManagedEc2CECBFFDA3E', {
      computeResources: {
        allocationStrategy: 'BEST_FIT_PROGRESSIVE',
        instanceRole: newManagedEc2CeInstanceProfile9101Ed44.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          newManagedEc2CeSecurityGroup5147Efe5.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'EC2',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation67945127 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet1RouteTableAssociation67945127', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      subnetId: vpcPrivateSubnet1Subnet934893E8.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation007E94d3 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet2RouteTableAssociation007E94D3', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      subnetId: vpcPrivateSubnet2Subnet7031C2ba.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute10708846 = new ec2.CfnRoute(this, 'vpcPublicSubnet1DefaultRoute10708846', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
    });
    vpcPublicSubnet1DefaultRoute10708846.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation5D3f4579 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet1RouteTableAssociation5D3F4579', {
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteA1ec0f60 = new ec2.CfnRoute(this, 'vpcPublicSubnet2DefaultRouteA1EC0F60', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
    });
    vpcPublicSubnet2DefaultRouteA1ec0f60.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation21F81b59 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet2RouteTableAssociation21F81B59', {
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
    });

    if (fairshare8585948E == null) { throw new Error(`A combination of conditions caused 'fairshare8585948E' to be undefined. Fixit.`); }
    if (managedEc2Ce195a935f == null) { throw new Error(`A combination of conditions caused 'managedEc2Ce195a935f' to be undefined. Fixit.`); }
    if (newManagedEc2Cecbffda3e == null) { throw new Error(`A combination of conditions caused 'newManagedEc2Cecbffda3e' to be undefined. Fixit.`); }
    const joBbq9fd52daf = new batch.CfnJobQueue(this, 'joBBQ9FD52DAF', {
      computeEnvironmentOrder: [
        {
          computeEnvironment: managedEc2Ce195a935f.attrComputeEnvironmentArn,
          order: 1,
        },
        {
          computeEnvironment: newManagedEc2Cecbffda3e.attrComputeEnvironmentArn,
          order: 2,
        },
      ],
      priority: 10,
      schedulingPolicyArn: fairshare8585948E.attrArn,
      state: 'ENABLED',
    });

    if (vpcPublicSubnet1DefaultRoute10708846 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute10708846' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipda49dcbe == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipda49dcbe' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation5D3f4579 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation5D3f4579' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway9C16659e = new ec2.CfnNatGateway(this, 'vpcPublicSubnet1NATGateway9C16659E', {
      allocationId: vpcPublicSubnet1Eipda49dcbe.attrAllocationId,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1DefaultRoute10708846);
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1RouteTableAssociation5D3f4579);

    if (vpcPublicSubnet2DefaultRouteA1ec0f60 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteA1ec0f60' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip9b3743b1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip9b3743b1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation21F81b59 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation21F81b59' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9B8ae11a = new ec2.CfnNatGateway(this, 'vpcPublicSubnet2NATGateway9B8AE11A', {
      allocationId: vpcPublicSubnet2Eip9b3743b1.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2DefaultRouteA1ec0f60);
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2RouteTableAssociation21F81b59);

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRoute1Aa8e2e5 = new ec2.CfnRoute(this, 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9B8ae11a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9B8ae11a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteB0e07f99 = new ec2.CfnRoute(this, 'vpcPrivateSubnet2DefaultRouteB0E07F99', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9B8ae11a.ref,
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
    });
  }
}

