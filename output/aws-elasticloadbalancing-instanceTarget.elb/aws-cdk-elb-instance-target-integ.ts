import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticloadbalancing from 'aws-cdk-lib/aws-elasticloadbalancing';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkElbInstanceTargetIntegProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2'
   */
  readonly ssmParameterValueawsserviceamiamazonlinuxlatestamzn2amihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkElbInstanceTargetInteg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkElbInstanceTargetIntegProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsserviceamiamazonlinuxlatestamzn2amihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsserviceamiamazonlinuxlatestamzn2amihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsserviceamiamazonlinuxlatestamzn2amihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC/PublicSubnet1',
        },
      ],
    });

    const targetInstanceInstanceRole3F8ec526 = new iam.CfnRole(this, 'targetInstanceInstanceRole3F8EC526', {
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
          ':iam::aws:policy/AmazonSSMManagedInstanceCore',
        ].join(''),
      ],
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/targetInstance',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const lbSecurityGroup8A41ea2b = new ec2.CfnSecurityGroup(this, 'LBSecurityGroup8A41EA2B', {
      groupDescription: 'aws-cdk-elb-instance-target-integ/LB/SecurityGroup',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Default rule allow on 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-elb-instance-target-integ/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-elb-instance-target-integ/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (targetInstanceInstanceRole3F8ec526 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceRole3F8ec526' to be undefined. Fixit.`); }
    const targetInstanceInstanceProfile0A012423 = new iam.CfnInstanceProfile(this, 'targetInstanceInstanceProfile0A012423', {
      roles: [
        targetInstanceInstanceRole3F8ec526.ref,
      ],
    });

    if (targetInstanceInstanceRole3F8ec526 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceRole3F8ec526' to be undefined. Fixit.`); }
    const targetInstanceInstanceRoleDefaultPolicy1E71262f = new iam.CfnPolicy(this, 'targetInstanceInstanceRoleDefaultPolicy1E71262F', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'cloudformation:DescribeStackResource',
              'cloudformation:SignalResource',
            ],
            Effect: 'Allow',
            Resource: this.stackId,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'targetInstanceInstanceRoleDefaultPolicy1E71262F',
      roles: [
        targetInstanceInstanceRole3F8ec526.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const targetInstanceInstanceSecurityGroupF268bd07 = new ec2.CfnSecurityGroup(this, 'targetInstanceInstanceSecurityGroupF268BD07', {
      groupDescription: 'aws-cdk-elb-instance-target-integ/targetInstance/InstanceSecurityGroup',
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
          value: 'aws-cdk-elb-instance-target-integ/targetInstance',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (lbSecurityGroup8A41ea2b == null) { throw new Error(`A combination of conditions caused 'lbSecurityGroup8A41ea2b' to be undefined. Fixit.`); }
    if (targetInstanceInstanceSecurityGroupF268bd07 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceSecurityGroupF268bd07' to be undefined. Fixit.`); }
    const lbSecurityGrouptoawscdkelbinstancetargetintegtargetInstanceInstanceSecurityGroup4B82664e8080e1991644 = new ec2.CfnSecurityGroupEgress(this, 'LBSecurityGrouptoawscdkelbinstancetargetintegtargetInstanceInstanceSecurityGroup4B82664E8080E1991644', {
      groupId: lbSecurityGroup8A41ea2b.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Port 8080 LB to fleet',
      destinationSecurityGroupId: targetInstanceInstanceSecurityGroupF268bd07.attrGroupId,
      fromPort: 8080,
      toPort: 8080,
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
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet1DefaultRoute91Cef279.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation0B0896dc = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet1RouteTableAssociation0B0896DC', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
    });

    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (targetInstanceInstanceProfile0A012423 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceProfile0A012423' to be undefined. Fixit.`); }
    if (targetInstanceInstanceRole3F8ec526 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceRole3F8ec526' to be undefined. Fixit.`); }
    if (targetInstanceInstanceRoleDefaultPolicy1E71262f == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceRoleDefaultPolicy1E71262f' to be undefined. Fixit.`); }
    if (targetInstanceInstanceSecurityGroupF268bd07 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceSecurityGroupF268bd07' to be undefined. Fixit.`); }
    const targetInstance603C5817b329f03eca862331 = new ec2.CfnInstance(this, 'targetInstance603C5817b329f03eca862331', {
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      iamInstanceProfile: targetInstanceInstanceProfile0A012423.ref,
      imageId: props.ssmParameterValueawsserviceamiamazonlinuxlatestamzn2amihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
      instanceType: 't3.micro',
      securityGroupIds: [
        targetInstanceInstanceSecurityGroupF268bd07.attrGroupId,
      ],
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/targetInstance',
        },
      ],
      userData: cdk.Fn.base64([
        '#!/bin/bash\n# fingerprint: e15d4219bb1dd06a\n(\n  set +e\n  /opt/aws/bin/cfn-init -v --region ',
        this.region,
        ' --stack ',
        this.stackName,
        ' --resource targetInstance603C5817b329f03eca862331 -c default\n  /opt/aws/bin/cfn-signal -e $? --region ',
        this.region,
        ' --stack ',
        this.stackName,
        ' --resource targetInstance603C5817b329f03eca862331\n  cat /var/log/cfn-init.log >&2\n)',
      ].join('')),
    });
    targetInstance603C5817b329f03eca862331.cfnOptions.metadata = {
      AWS::CloudFormation::Init: {
        configSets: {
          default: [
            'config',
          ],
        },
        config: {
          files: {
            '/etc/systemd/system/pythonweb.service': {
              content: '[Unit]\nAfter=network.target\n[Service]\nExecStart=/usr/bin/python3 -m http.server 8080\nWorkingDirectory=/var/www/html\nRestart=always\n[Install]\nWantedBy=multi-user.target',
              encoding: 'plain',
              mode: '000644',
              owner: 'root',
              group: 'root',
            },
            '/var/www/html/index.html': {
              content: 'Hello! You can see me!',
              encoding: 'plain',
              mode: '000644',
              owner: 'root',
              group: 'root',
            },
          },
          services: {
            systemd: {
              pythonweb: {
                enabled: true,
                ensureRunning: true,
              },
            },
          },
        },
      },
    };
    targetInstance603C5817b329f03eca862331.addDependency(targetInstanceInstanceRoleDefaultPolicy1E71262f);
    targetInstance603C5817b329f03eca862331.addDependency(targetInstanceInstanceRole3F8ec526);

    if (lbSecurityGroup8A41ea2b == null) { throw new Error(`A combination of conditions caused 'lbSecurityGroup8A41ea2b' to be undefined. Fixit.`); }
    if (targetInstanceInstanceSecurityGroupF268bd07 == null) { throw new Error(`A combination of conditions caused 'targetInstanceInstanceSecurityGroupF268bd07' to be undefined. Fixit.`); }
    const targetInstanceInstanceSecurityGroupfromawscdkelbinstancetargetintegLbSecurityGroup395870Cc8080df6c0658 = new ec2.CfnSecurityGroupIngress(this, 'targetInstanceInstanceSecurityGroupfromawscdkelbinstancetargetintegLBSecurityGroup395870CC8080DF6C0658', {
      ipProtocol: 'tcp',
      description: 'Port 8080 LB to fleet',
      fromPort: 8080,
      groupId: targetInstanceInstanceSecurityGroupF268bd07.attrGroupId,
      sourceSecurityGroupId: lbSecurityGroup8A41ea2b.attrGroupId,
      toPort: 8080,
    });

    if (lbSecurityGroup8A41ea2b == null) { throw new Error(`A combination of conditions caused 'lbSecurityGroup8A41ea2b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    if (targetInstance603C5817b329f03eca862331 == null) { throw new Error(`A combination of conditions caused 'targetInstance603C5817b329f03eca862331' to be undefined. Fixit.`); }
    const lb8a12904c = new elasticloadbalancing.CfnLoadBalancer(this, 'LB8A12904C', {
      listeners: [
        {
          instancePort: '8080',
          instanceProtocol: 'http',
          loadBalancerPort: '80',
          protocol: 'http',
        },
      ],
      crossZone: true,
      instances: [
        targetInstance603C5817b329f03eca862331.ref,
      ],
      scheme: 'internet-facing',
      securityGroups: [
        lbSecurityGroup8A41ea2b.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1SubnetB4246d30.ref,
      ],
    });
    lb8a12904c.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    lb8a12904c.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-elb-instance-target-integ/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
    });
  }
}

