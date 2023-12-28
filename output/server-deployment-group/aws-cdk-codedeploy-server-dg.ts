import * as cdk from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticloadbalancing from 'aws-cdk-lib/aws-elasticloadbalancing';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkCodedeployServerDgProps extends cdk.StackProps {
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

export class AwsCdkCodedeployServerDg extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkCodedeployServerDgProps = {}) {
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
    const asgInstanceRoleE263a41b = new iam.CfnRole(this, 'ASGInstanceRoleE263A41B', {
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
          value: 'aws-cdk-codedeploy-server-dg/ASG',
        },
      ],
    });

    const alarm1F9009d71 = new cloudwatch.CfnAlarm(this, 'Alarm1F9009D71', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      metricName: 'Errors',
      namespace: 'my.namespace',
      period: 300,
      statistic: 'Average',
      threshold: 1,
    });

    const codeDeployGroupApplication13Efbda6 = new codedeploy.CfnApplication(this, 'CodeDeployGroupApplication13EFBDA6', {
      computePlatform: 'Server',
    });

    const codeDeployGroupRole1D304f7a = new iam.CfnRole(this, 'CodeDeployGroupRole1D304F7A', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codedeploy.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSCodeDeployRole',
        ].join(''),
      ],
    });

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet2',
        },
      ],
    });

    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    const asgInstanceProfile0A2834d7 = new iam.CfnInstanceProfile(this, 'ASGInstanceProfile0A2834D7', {
      roles: [
        asgInstanceRoleE263a41b.ref,
      ],
    });

    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    const asgInstanceRoleDefaultPolicy7636D8bf = new iam.CfnPolicy(this, 'ASGInstanceRoleDefaultPolicy7636D8BF', {
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
                ':s3:::aws-codedeploy-',
                this.region,
                '/latest/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::aws-codedeploy-',
                this.region,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ASGInstanceRoleDefaultPolicy7636D8BF',
      roles: [
        asgInstanceRoleE263a41b.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const asgInstanceSecurityGroup0525485D = new ec2.CfnSecurityGroup(this, 'ASGInstanceSecurityGroup0525485D', {
      groupDescription: 'aws-cdk-codedeploy-server-dg/ASG/InstanceSecurityGroup',
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
          value: 'aws-cdk-codedeploy-server-dg/ASG',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const elbSecurityGroupF148fd2e = new ec2.CfnSecurityGroup(this, 'ELBSecurityGroupF148FD2E', {
      groupDescription: 'aws-cdk-codedeploy-server-dg/ELB/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '255.255.255.255/32',
          description: 'Disallow all traffic',
          fromPort: 252,
          ipProtocol: 'icmp',
          toPort: 86,
        },
      ],
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
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PrivateSubnet1',
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PrivateSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PrivateSubnet2',
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PrivateSubnet2',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet1',
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet2',
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet2',
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

    if (asgInstanceProfile0A2834d7 == null) { throw new Error(`A combination of conditions caused 'asgInstanceProfile0A2834d7' to be undefined. Fixit.`); }
    if (asgInstanceRoleDefaultPolicy7636D8bf == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleDefaultPolicy7636D8bf' to be undefined. Fixit.`); }
    if (asgInstanceRoleE263a41b == null) { throw new Error(`A combination of conditions caused 'asgInstanceRoleE263a41b' to be undefined. Fixit.`); }
    if (asgInstanceSecurityGroup0525485D == null) { throw new Error(`A combination of conditions caused 'asgInstanceSecurityGroup0525485D' to be undefined. Fixit.`); }
    const asgLaunchTemplate0Ca92847 = new ec2.CfnLaunchTemplate(this, 'ASGLaunchTemplate0CA92847', {
      launchTemplateData: {
        iamInstanceProfile: {
          arn: asgInstanceProfile0A2834d7.attrArn,
        },
        imageId: props.ssmParameterValueawsserviceamiamazonlinuxlatestamznamihvmx8664gp2C96584b6f00a464ead1953aff4b05118Parameter!,
        instanceType: 'm5.large',
        monitoring: {
          enabled: false,
        },
        securityGroupIds: [
          asgInstanceSecurityGroup0525485D.attrGroupId,
        ],
        tagSpecifications: [
          {
            resourceType: 'instance',
            tags: [
              {
                key: 'Name',
                value: 'aws-cdk-codedeploy-server-dg/ASG/LaunchTemplate',
              },
            ],
          },
          {
            resourceType: 'volume',
            tags: [
              {
                key: 'Name',
                value: 'aws-cdk-codedeploy-server-dg/ASG/LaunchTemplate',
              },
            ],
          },
        ],
        userData: cdk.Fn.base64([
          '#!/bin/bash\nset +e\nPKG_CMD=`which yum 2>/dev/null`\nset -e\nif [ -z \"$PKG_CMD\" ]; then\nPKG_CMD=apt-get\nelse\nPKG_CMD=yum\nfi\n$PKG_CMD update -y\nset +e\n$PKG_CMD install -y ruby2.0\nRUBY2_INSTALL=$?\nset -e\nif [ $RUBY2_INSTALL -ne 0 ]; then\n$PKG_CMD install -y ruby\nfi\nAWS_CLI_PACKAGE_NAME=awscli\nif [ \"$PKG_CMD\" = \"yum\" ]; then\nAWS_CLI_PACKAGE_NAME=aws-cli\nfi\n$PKG_CMD install -y $AWS_CLI_PACKAGE_NAME\nTMP_DIR=`mktemp -d`\ncd $TMP_DIR\naws s3 cp s3://aws-codedeploy-',
          this.region,
          '/latest/install . --region ',
          this.region,
          '\nchmod +x ./install\n./install auto\nrm -fr $TMP_DIR',
        ].join('')),
      },
      tagSpecifications: [
        {
          resourceType: 'launch-template',
          tags: [
            {
              key: 'Name',
              value: 'aws-cdk-codedeploy-server-dg/ASG/LaunchTemplate',
            },
          ],
        },
      ],
    });
    asgLaunchTemplate0Ca92847.addDependency(asgInstanceRoleDefaultPolicy7636D8bf);
    asgLaunchTemplate0Ca92847.addDependency(asgInstanceRoleE263a41b);

    if (elbSecurityGroupF148fd2e == null) { throw new Error(`A combination of conditions caused 'elbSecurityGroupF148fd2e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const elbf276b85d = new elasticloadbalancing.CfnLoadBalancer(this, 'ELBF276B85D', {
      crossZone: true,
      listeners: [
        {
          instancePort: '80',
          instanceProtocol: 'http',
          loadBalancerPort: '80',
          protocol: 'http',
        },
      ],
      scheme: 'internal',
      securityGroups: [
        elbSecurityGroupF148fd2e.attrGroupId,
      ],
      subnets: [
        vpcPrivateSubnet1Subnet8Bca10e0.ref,
        vpcPrivateSubnet2SubnetCfcdaa7a.ref,
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

    if (asgLaunchTemplate0Ca92847 == null) { throw new Error(`A combination of conditions caused 'asgLaunchTemplate0Ca92847' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const asg46ed3070 = new autoscaling.CfnAutoScalingGroup(this, 'ASG46ED3070', {
      launchTemplate: {
        launchTemplateId: asgLaunchTemplate0Ca92847.ref,
        version: asgLaunchTemplate0Ca92847.attrLatestVersionNumber,
      },
      maxSize: '1',
      minSize: '1',
      tags: [
        {
          key: 'Name',
          propagateAtLaunch: true,
          value: 'aws-cdk-codedeploy-server-dg/ASG',
        },
      ],
      vpcZoneIdentifier: [
        vpcPrivateSubnet1Subnet8Bca10e0.ref,
        vpcPrivateSubnet2SubnetCfcdaa7a.ref,
      ],
    });
    asg46ed3070.cfnOptions.updatePolicy = {
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: true,
      },
    };
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet1',
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
          value: 'aws-cdk-codedeploy-server-dg/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (asg46ed3070 == null) { throw new Error(`A combination of conditions caused 'asg46ed3070' to be undefined. Fixit.`); }
    if (alarm1F9009d71 == null) { throw new Error(`A combination of conditions caused 'alarm1F9009d71' to be undefined. Fixit.`); }
    if (codeDeployGroupApplication13Efbda6 == null) { throw new Error(`A combination of conditions caused 'codeDeployGroupApplication13Efbda6' to be undefined. Fixit.`); }
    if (codeDeployGroupRole1D304f7a == null) { throw new Error(`A combination of conditions caused 'codeDeployGroupRole1D304f7a' to be undefined. Fixit.`); }
    if (elbf276b85d == null) { throw new Error(`A combination of conditions caused 'elbf276b85d' to be undefined. Fixit.`); }
    const codeDeployGroup58220Fc8 = new codedeploy.CfnDeploymentGroup(this, 'CodeDeployGroup58220FC8', {
      alarmConfiguration: {
        alarms: [
          {
            name: alarm1F9009d71.ref,
          },
        ],
        enabled: true,
      },
      applicationName: codeDeployGroupApplication13Efbda6.ref,
      autoRollbackConfiguration: {
        enabled: false,
      },
      autoScalingGroups: [
        asg46ed3070.ref,
      ],
      deploymentConfigName: 'CodeDeployDefault.AllAtOnce',
      deploymentStyle: {
        deploymentOption: 'WITH_TRAFFIC_CONTROL',
      },
      loadBalancerInfo: {
        elbInfoList: [
          {
            name: elbf276b85d.ref,
          },
        ],
      },
      serviceRoleArn: codeDeployGroupRole1D304f7a.attrArn,
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

