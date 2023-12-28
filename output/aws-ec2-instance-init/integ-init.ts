import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-initProps extends cdk.StackProps {
  /**
   * @default '/aws/service/ami-amazon-linux-latest/amzn-ami-hvm-x86_64-gp2'
   */
  readonly ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-init extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-initProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter: new cdk.CfnParameter(this, 'SsmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter', {
        type: 'AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>',
        default: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter?.toString() ?? '/aws/service/ami-amazon-linux-latest/amzn-ami-hvm-x86_64-gp2',
      }).valueAsString,
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const instance2InstanceRole03Dd7cb2 = new iam.CfnRole(this, 'Instance2InstanceRole03DD7CB2', {
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
      tags: [
        {
          key: 'Name',
          value: 'integ-init/Instance2',
        },
      ],
    });

    const integInitVpc0D4fccb3 = new ec2.CfnVPC(this, 'IntegInitVpc0D4FCCB3', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc',
        },
      ],
    });

    const integInitVpcIgwf019ac85 = new ec2.CfnInternetGateway(this, 'IntegInitVpcIGWF019AC85', {
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc',
        },
      ],
    });

    const integInitVpcPublicSubnet1Eip46fcc3d6 = new ec2.CfnEIP(this, 'IntegInitVpcPublicSubnet1EIP46FCC3D6', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet1',
        },
      ],
    });

    const integInitVpcPublicSubnet2Eip553b40dc = new ec2.CfnEIP(this, 'IntegInitVpcPublicSubnet2EIP553B40DC', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet2',
        },
      ],
    });

    if (instance2InstanceRole03Dd7cb2 == null) { throw new Error(`A combination of conditions caused 'instance2InstanceRole03Dd7cb2' to be undefined. Fixit.`); }
    const instance2InstanceProfile582F915c = new iam.CfnInstanceProfile(this, 'Instance2InstanceProfile582F915C', {
      roles: [
        instance2InstanceRole03Dd7cb2.ref,
      ],
    });

    if (instance2InstanceRole03Dd7cb2 == null) { throw new Error(`A combination of conditions caused 'instance2InstanceRole03Dd7cb2' to be undefined. Fixit.`); }
    const instance2InstanceRoleDefaultPolicy610B37cd = new iam.CfnPolicy(this, 'Instance2InstanceRoleDefaultPolicy610B37CD', {
      policyDocument: {
        Statement: [
          {
            Action: [
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
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
      policyName: 'Instance2InstanceRoleDefaultPolicy610B37CD',
      roles: [
        instance2InstanceRole03Dd7cb2.ref,
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const instance2InstanceSecurityGroupC6129b1d = new ec2.CfnSecurityGroup(this, 'Instance2InstanceSecurityGroupC6129B1D', {
      groupDescription: 'integ-init/Instance2/InstanceSecurityGroup',
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
          value: 'integ-init/Instance2',
        },
      ],
      vpcId: integInitVpc0D4fccb3.ref,
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet1RouteTableCb37994b = new ec2.CfnRouteTable(this, 'IntegInitVpcPrivateSubnet1RouteTableCB37994B', {
      vpcId: integInitVpc0D4fccb3.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PrivateSubnet1',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet1Subnet259B51c1 = new ec2.CfnSubnet(this, 'IntegInitVpcPrivateSubnet1Subnet259B51C1', {
      vpcId: integInitVpc0D4fccb3.ref,
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
          value: 'integ-init/IntegInitVpc/PrivateSubnet1',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet2RouteTable030Ec93b = new ec2.CfnRouteTable(this, 'IntegInitVpcPrivateSubnet2RouteTable030EC93B', {
      vpcId: integInitVpc0D4fccb3.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PrivateSubnet2',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet2Subnet1643B059 = new ec2.CfnSubnet(this, 'IntegInitVpcPrivateSubnet2Subnet1643B059', {
      vpcId: integInitVpc0D4fccb3.ref,
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
          value: 'integ-init/IntegInitVpc/PrivateSubnet2',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet1RouteTable837Cd5fb = new ec2.CfnRouteTable(this, 'IntegInitVpcPublicSubnet1RouteTable837CD5FB', {
      vpcId: integInitVpc0D4fccb3.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet1',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet1Subnet41A6f6d4 = new ec2.CfnSubnet(this, 'IntegInitVpcPublicSubnet1Subnet41A6F6D4', {
      vpcId: integInitVpc0D4fccb3.ref,
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
          value: 'integ-init/IntegInitVpc/PublicSubnet1',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet2RouteTableF7e8f920 = new ec2.CfnRouteTable(this, 'IntegInitVpcPublicSubnet2RouteTableF7E8F920', {
      vpcId: integInitVpc0D4fccb3.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet2',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet2Subnet9A384f16 = new ec2.CfnSubnet(this, 'IntegInitVpcPublicSubnet2Subnet9A384F16', {
      vpcId: integInitVpc0D4fccb3.ref,
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
          value: 'integ-init/IntegInitVpc/PublicSubnet2',
        },
      ],
    });

    if (integInitVpc0D4fccb3 == null) { throw new Error(`A combination of conditions caused 'integInitVpc0D4fccb3' to be undefined. Fixit.`); }
    if (integInitVpcIgwf019ac85 == null) { throw new Error(`A combination of conditions caused 'integInitVpcIgwf019ac85' to be undefined. Fixit.`); }
    const integInitVpcVpcgw85edc292 = new ec2.CfnVPCGatewayAttachment(this, 'IntegInitVpcVPCGW85EDC292', {
      vpcId: integInitVpc0D4fccb3.ref,
      internetGatewayId: integInitVpcIgwf019ac85.ref,
    });

    if (instance2InstanceProfile582F915c == null) { throw new Error(`A combination of conditions caused 'instance2InstanceProfile582F915c' to be undefined. Fixit.`); }
    if (instance2InstanceRole03Dd7cb2 == null) { throw new Error(`A combination of conditions caused 'instance2InstanceRole03Dd7cb2' to be undefined. Fixit.`); }
    if (instance2InstanceRoleDefaultPolicy610B37cd == null) { throw new Error(`A combination of conditions caused 'instance2InstanceRoleDefaultPolicy610B37cd' to be undefined. Fixit.`); }
    if (instance2InstanceSecurityGroupC6129b1d == null) { throw new Error(`A combination of conditions caused 'instance2InstanceSecurityGroupC6129b1d' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1Subnet41A6f6d4 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1Subnet41A6f6d4' to be undefined. Fixit.`); }
    const instance255F35265a0c5f577d761edb0 = new ec2.CfnInstance(this, 'Instance255F35265a0c5f577d761edb0', {
      availabilityZone: cdk.Fn.select(0, cdk.Fn.getAzs('')),
      iamInstanceProfile: instance2InstanceProfile582F915c.ref,
      imageId: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
      instanceType: 't2.micro',
      securityGroupIds: [
        instance2InstanceSecurityGroupC6129b1d.attrGroupId,
      ],
      subnetId: integInitVpcPublicSubnet1Subnet41A6f6d4.ref,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/Instance2',
        },
      ],
      userData: cdk.Fn.base64([
        '#!/bin/bash\n# fingerprint: 89cb2e09a1c3d4c8\n(\n  set +e\n  /opt/aws/bin/cfn-init -v --region ',
        this.region,
        ' --stack ',
        this.stackName,
        ' --resource Instance255F35265a0c5f577d761edb0 -c default\n  /opt/aws/bin/cfn-signal -e $? --region ',
        this.region,
        ' --stack ',
        this.stackName,
        ' --resource Instance255F35265a0c5f577d761edb0\n  cat /var/log/cfn-init.log >&2\n)',
      ].join('')),
    });
    instance255F35265a0c5f577d761edb0.cfnOptions.metadata = {
      AWS::CloudFormation::Init: {
        configSets: {
          default: [
            'yumPreinstall',
            'config',
          ],
        },
        yumPreinstall: {
          packages: {
            yum: {
              git: [
              ],
            },
          },
        },
        config: {
          groups: {
            group1: {
            },
            group2: {
              gid: 42,
            },
          },
          users: {
            sysuser1: {
              groups: [
                'group1',
                'group2',
              ],
              homeDir: '/home/sysuser1-custom',
            },
            sysuser2: {
            },
          },
          sources: {
            '/tmp/sourceDir': `https://s3.${this.region}.${this.urlSuffix}/cdk-hnb659fds-assets-${this.account}-${this.region}/f8a1af398dac2fad92eeea4fb7620be1c4f504e23e3bfcd859fbb5744187930b.zip`,
          },
          files: {
            '/tmp/file2.json': {
              content: {
                stackId: this.stackId,
                stackName: 'integ-init',
                region: this.region,
                intProperty: 18,
                boolProperty: true,
                numProperty: 58.23,
              },
              mode: '000644',
              owner: 'root',
              group: 'root',
            },
          },
        },
      },
      AWS::CloudFormation::Authentication: {
        S3AccessCreds: {
          type: 'S3',
          roleName: instance2InstanceRole03Dd7cb2.ref,
          buckets: [
            `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          ],
        },
      },
    };
    instance255F35265a0c5f577d761edb0.addDependency(instance2InstanceRoleDefaultPolicy610B37cd);
    instance255F35265a0c5f577d761edb0.addDependency(instance2InstanceRole03Dd7cb2);

    if (integInitVpcPrivateSubnet1RouteTableCb37994b == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet1RouteTableCb37994b' to be undefined. Fixit.`); }
    if (integInitVpcPrivateSubnet1Subnet259B51c1 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet1Subnet259B51c1' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet1RouteTableAssociation067Def9d = new ec2.CfnSubnetRouteTableAssociation(this, 'IntegInitVpcPrivateSubnet1RouteTableAssociation067DEF9D', {
      routeTableId: integInitVpcPrivateSubnet1RouteTableCb37994b.ref,
      subnetId: integInitVpcPrivateSubnet1Subnet259B51c1.ref,
    });

    if (integInitVpcPrivateSubnet2RouteTable030Ec93b == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet2RouteTable030Ec93b' to be undefined. Fixit.`); }
    if (integInitVpcPrivateSubnet2Subnet1643B059 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet2Subnet1643B059' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet2RouteTableAssociation6B52bd72 = new ec2.CfnSubnetRouteTableAssociation(this, 'IntegInitVpcPrivateSubnet2RouteTableAssociation6B52BD72', {
      routeTableId: integInitVpcPrivateSubnet2RouteTable030Ec93b.ref,
      subnetId: integInitVpcPrivateSubnet2Subnet1643B059.ref,
    });

    if (integInitVpcIgwf019ac85 == null) { throw new Error(`A combination of conditions caused 'integInitVpcIgwf019ac85' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1RouteTable837Cd5fb == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1RouteTable837Cd5fb' to be undefined. Fixit.`); }
    if (integInitVpcVpcgw85edc292 == null) { throw new Error(`A combination of conditions caused 'integInitVpcVpcgw85edc292' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet1DefaultRoute5Bb90e8c = new ec2.CfnRoute(this, 'IntegInitVpcPublicSubnet1DefaultRoute5BB90E8C', {
      routeTableId: integInitVpcPublicSubnet1RouteTable837Cd5fb.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: integInitVpcIgwf019ac85.ref,
    });
    integInitVpcPublicSubnet1DefaultRoute5Bb90e8c.addDependency(integInitVpcVpcgw85edc292);

    if (integInitVpcPublicSubnet1RouteTable837Cd5fb == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1RouteTable837Cd5fb' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1Subnet41A6f6d4 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1Subnet41A6f6d4' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet1RouteTableAssociation00D33741 = new ec2.CfnSubnetRouteTableAssociation(this, 'IntegInitVpcPublicSubnet1RouteTableAssociation00D33741', {
      routeTableId: integInitVpcPublicSubnet1RouteTable837Cd5fb.ref,
      subnetId: integInitVpcPublicSubnet1Subnet41A6f6d4.ref,
    });

    if (integInitVpcIgwf019ac85 == null) { throw new Error(`A combination of conditions caused 'integInitVpcIgwf019ac85' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2RouteTableF7e8f920 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2RouteTableF7e8f920' to be undefined. Fixit.`); }
    if (integInitVpcVpcgw85edc292 == null) { throw new Error(`A combination of conditions caused 'integInitVpcVpcgw85edc292' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet2DefaultRoute2393995F = new ec2.CfnRoute(this, 'IntegInitVpcPublicSubnet2DefaultRoute2393995F', {
      routeTableId: integInitVpcPublicSubnet2RouteTableF7e8f920.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: integInitVpcIgwf019ac85.ref,
    });
    integInitVpcPublicSubnet2DefaultRoute2393995F.addDependency(integInitVpcVpcgw85edc292);

    if (integInitVpcPublicSubnet2RouteTableF7e8f920 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2RouteTableF7e8f920' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2Subnet9A384f16 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2Subnet9A384f16' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet2RouteTableAssociationB816f9f3 = new ec2.CfnSubnetRouteTableAssociation(this, 'IntegInitVpcPublicSubnet2RouteTableAssociationB816F9F3', {
      routeTableId: integInitVpcPublicSubnet2RouteTableF7e8f920.ref,
      subnetId: integInitVpcPublicSubnet2Subnet9A384f16.ref,
    });

    if (integInitVpcPublicSubnet1DefaultRoute5Bb90e8c == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1DefaultRoute5Bb90e8c' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1Eip46fcc3d6 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1Eip46fcc3d6' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1RouteTableAssociation00D33741 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1RouteTableAssociation00D33741' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1Subnet41A6f6d4 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1Subnet41A6f6d4' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet1NatGateway46F32f7f = new ec2.CfnNatGateway(this, 'IntegInitVpcPublicSubnet1NATGateway46F32F7F', {
      subnetId: integInitVpcPublicSubnet1Subnet41A6f6d4.ref,
      allocationId: integInitVpcPublicSubnet1Eip46fcc3d6.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet1',
        },
      ],
    });
    integInitVpcPublicSubnet1NatGateway46F32f7f.addDependency(integInitVpcPublicSubnet1DefaultRoute5Bb90e8c);
    integInitVpcPublicSubnet1NatGateway46F32f7f.addDependency(integInitVpcPublicSubnet1RouteTableAssociation00D33741);

    if (integInitVpcPublicSubnet2DefaultRoute2393995F == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2DefaultRoute2393995F' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2Eip553b40dc == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2Eip553b40dc' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2RouteTableAssociationB816f9f3 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2RouteTableAssociationB816f9f3' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2Subnet9A384f16 == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2Subnet9A384f16' to be undefined. Fixit.`); }
    const integInitVpcPublicSubnet2NatGateway9Ccb4a9c = new ec2.CfnNatGateway(this, 'IntegInitVpcPublicSubnet2NATGateway9CCB4A9C', {
      subnetId: integInitVpcPublicSubnet2Subnet9A384f16.ref,
      allocationId: integInitVpcPublicSubnet2Eip553b40dc.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'integ-init/IntegInitVpc/PublicSubnet2',
        },
      ],
    });
    integInitVpcPublicSubnet2NatGateway9Ccb4a9c.addDependency(integInitVpcPublicSubnet2DefaultRoute2393995F);
    integInitVpcPublicSubnet2NatGateway9Ccb4a9c.addDependency(integInitVpcPublicSubnet2RouteTableAssociationB816f9f3);

    if (integInitVpcPrivateSubnet1RouteTableCb37994b == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet1RouteTableCb37994b' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet1NatGateway46F32f7f == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet1NatGateway46F32f7f' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet1DefaultRoute654Acecf = new ec2.CfnRoute(this, 'IntegInitVpcPrivateSubnet1DefaultRoute654ACECF', {
      routeTableId: integInitVpcPrivateSubnet1RouteTableCb37994b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: integInitVpcPublicSubnet1NatGateway46F32f7f.ref,
    });

    if (integInitVpcPrivateSubnet2RouteTable030Ec93b == null) { throw new Error(`A combination of conditions caused 'integInitVpcPrivateSubnet2RouteTable030Ec93b' to be undefined. Fixit.`); }
    if (integInitVpcPublicSubnet2NatGateway9Ccb4a9c == null) { throw new Error(`A combination of conditions caused 'integInitVpcPublicSubnet2NatGateway9Ccb4a9c' to be undefined. Fixit.`); }
    const integInitVpcPrivateSubnet2DefaultRoute6A10b6ea = new ec2.CfnRoute(this, 'IntegInitVpcPrivateSubnet2DefaultRoute6A10B6EA', {
      routeTableId: integInitVpcPrivateSubnet2RouteTable030Ec93b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: integInitVpcPublicSubnet2NatGateway9Ccb4a9c.ref,
    });
  }
}

