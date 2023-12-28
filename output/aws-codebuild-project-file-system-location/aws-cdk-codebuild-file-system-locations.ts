import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-codebuild-file-system-locationsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-codebuild-file-system-locations extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-codebuild-file-system-locationsProps = {}) {
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
    const myProjectRole9Bbe5233 = new iam.CfnRole(this, 'MyProjectRole9BBE5233', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'codebuild.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const myVpcafb07a31 = new ec2.CfnVPC(this, 'MyVPCAFB07A31', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC',
        },
      ],
    });

    const myVpcigw30ab6dd6 = new ec2.CfnInternetGateway(this, 'MyVPCIGW30AB6DD6', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC',
        },
      ],
    });

    const myVpcPublicSubnet1Eip5eb6147d = new ec2.CfnEIP(this, 'MyVPCPublicSubnet1EIP5EB6147D', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PublicSubnet1',
        },
      ],
    });

    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    const myProjectPolicyDocument646Ee0f2 = new iam.CfnPolicy(this, 'MyProjectPolicyDocument646EE0F2', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ec2:CreateNetworkInterface',
              'ec2:DeleteNetworkInterface',
              'ec2:DescribeDhcpOptions',
              'ec2:DescribeNetworkInterfaces',
              'ec2:DescribeSecurityGroups',
              'ec2:DescribeSubnets',
              'ec2:DescribeVpcs',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyProjectPolicyDocument646EE0F2',
      roles: [
        myProjectRole9Bbe5233.ref,
      ],
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTable133Bd901 = new ec2.CfnRouteTable(this, 'MyVPCPrivateSubnet1RouteTable133BD901', {
      vpcId: myVpcafb07a31.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PrivateSubnet1',
        },
      ],
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1Subnet641543F4 = new ec2.CfnSubnet(this, 'MyVPCPrivateSubnet1Subnet641543F4', {
      vpcId: myVpcafb07a31.ref,
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
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PrivateSubnet1',
        },
      ],
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTable538A9511 = new ec2.CfnRouteTable(this, 'MyVPCPublicSubnet1RouteTable538A9511', {
      vpcId: myVpcafb07a31.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PublicSubnet1',
        },
      ],
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1Subnet0C75866a = new ec2.CfnSubnet(this, 'MyVPCPublicSubnet1Subnet0C75866A', {
      vpcId: myVpcafb07a31.ref,
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
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PublicSubnet1',
        },
      ],
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    if (myVpcigw30ab6dd6 == null) { throw new Error(`A combination of conditions caused 'myVpcigw30ab6dd6' to be undefined. Fixit.`); }
    const myVpcvpcgwe6f260e1 = new ec2.CfnVPCGatewayAttachment(this, 'MyVPCVPCGWE6F260E1', {
      vpcId: myVpcafb07a31.ref,
      internetGatewayId: myVpcigw30ab6dd6.ref,
    });

    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    const securityGroup1F554b36f = new ec2.CfnSecurityGroup(this, 'SecurityGroup1F554B36F', {
      groupDescription: 'Example',
      groupName: 'Jane',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: myVpcafb07a31.ref,
    });

    if (myProjectPolicyDocument646Ee0f2 == null) { throw new Error(`A combination of conditions caused 'myProjectPolicyDocument646Ee0f2' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (myVpcafb07a31 == null) { throw new Error(`A combination of conditions caused 'myVpcafb07a31' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet641543F4 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet641543F4' to be undefined. Fixit.`); }
    if (securityGroup1F554b36f == null) { throw new Error(`A combination of conditions caused 'securityGroup1F554b36f' to be undefined. Fixit.`); }
    const myProject39F7b0ae = new codebuild.CfnProject(this, 'MyProject39F7B0AE', {
      artifacts: {
        type: 'NO_ARTIFACTS',
      },
      environment: {
        computeType: 'BUILD_GENERAL1_SMALL',
        image: 'aws/codebuild/standard:1.0',
        imagePullCredentialsType: 'CODEBUILD',
        privilegedMode: true,
        type: 'LINUX_CONTAINER',
      },
      serviceRole: myProjectRole9Bbe5233.attrArn,
      source: {
        buildSpec: '{\n  \"version\": \"0.2\"\n}',
        type: 'NO_SOURCE',
      },
      cache: {
        type: 'NO_CACHE',
      },
      encryptionKey: 'alias/aws/s3',
      fileSystemLocations: [
        {
          identifier: 'myidentifier',
          location: [
            'fs-c8d04839.efs.',
            this.region,
            '.amazonaws.com:/mnt',
          ].join(''),
          mountOptions: 'nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2',
          mountPoint: '/media',
          type: 'EFS',
        },
      ],
      vpcConfig: {
        securityGroupIds: [
          securityGroup1F554b36f.attrGroupId,
        ],
        subnets: [
          myVpcPrivateSubnet1Subnet641543F4.ref,
        ],
        vpcId: myVpcafb07a31.ref,
      },
    });
    myProject39F7b0ae.addDependency(myProjectPolicyDocument646Ee0f2);

    if (myVpcPrivateSubnet1RouteTable133Bd901 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable133Bd901' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet641543F4 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet641543F4' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTableAssociation85Dfbfbb = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVPCPrivateSubnet1RouteTableAssociation85DFBFBB', {
      routeTableId: myVpcPrivateSubnet1RouteTable133Bd901.ref,
      subnetId: myVpcPrivateSubnet1Subnet641543F4.ref,
    });

    if (myVpcigw30ab6dd6 == null) { throw new Error(`A combination of conditions caused 'myVpcigw30ab6dd6' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTable538A9511 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTable538A9511' to be undefined. Fixit.`); }
    if (myVpcvpcgwe6f260e1 == null) { throw new Error(`A combination of conditions caused 'myVpcvpcgwe6f260e1' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1DefaultRouteAf81aa9b = new ec2.CfnRoute(this, 'MyVPCPublicSubnet1DefaultRouteAF81AA9B', {
      routeTableId: myVpcPublicSubnet1RouteTable538A9511.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcigw30ab6dd6.ref,
    });
    myVpcPublicSubnet1DefaultRouteAf81aa9b.addDependency(myVpcvpcgwe6f260e1);

    if (myVpcPublicSubnet1RouteTable538A9511 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTable538A9511' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1Subnet0C75866a == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1Subnet0C75866a' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableAssociation8A950d8e = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVPCPublicSubnet1RouteTableAssociation8A950D8E', {
      routeTableId: myVpcPublicSubnet1RouteTable538A9511.ref,
      subnetId: myVpcPublicSubnet1Subnet0C75866a.ref,
    });

    if (myProject39F7b0ae == null) { throw new Error(`A combination of conditions caused 'myProject39F7b0ae' to be undefined. Fixit.`); }
    if (myProjectRole9Bbe5233 == null) { throw new Error(`A combination of conditions caused 'myProjectRole9Bbe5233' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet641543F4 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet641543F4' to be undefined. Fixit.`); }
    const myProjectRoleDefaultPolicyB19b7c29 = new iam.CfnPolicy(this, 'MyProjectRoleDefaultPolicyB19B7C29', {
      policyDocument: {
        Statement: [
          {
            Action: 'ec2:CreateNetworkInterfacePermission',
            Condition: {
              StringEquals: {
                'ec2:Subnet': [
                  [
                    'arn:',
                    this.partition,
                    ':ec2:',
                    this.region,
                    ':',
                    this.account,
                    ':subnet/',
                    myVpcPrivateSubnet1Subnet641543F4.ref,
                  ].join(''),
                ],
                'ec2:AuthorizedService': 'codebuild.amazonaws.com',
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ec2:',
              this.region,
              ':',
              this.account,
              ':network-interface/*',
            ].join(''),
          },
          {
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                myProject39F7b0ae.ref,
                ':*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':logs:',
                this.region,
                ':',
                this.account,
                ':log-group:/aws/codebuild/',
                myProject39F7b0ae.ref,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyProjectRoleDefaultPolicyB19B7C29',
      roles: [
        myProjectRole9Bbe5233.ref,
      ],
    });

    if (myVpcPublicSubnet1DefaultRouteAf81aa9b == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1DefaultRouteAf81aa9b' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1Eip5eb6147d == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1Eip5eb6147d' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTableAssociation8A950d8e == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableAssociation8A950d8e' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1Subnet0C75866a == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1Subnet0C75866a' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1NatGateway838228A5 = new ec2.CfnNatGateway(this, 'MyVPCPublicSubnet1NATGateway838228A5', {
      subnetId: myVpcPublicSubnet1Subnet0C75866a.ref,
      allocationId: myVpcPublicSubnet1Eip5eb6147d.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-codebuild-file-system-locations/MyVPC/PublicSubnet1',
        },
      ],
    });
    myVpcPublicSubnet1NatGateway838228A5.addDependency(myVpcPublicSubnet1DefaultRouteAf81aa9b);
    myVpcPublicSubnet1NatGateway838228A5.addDependency(myVpcPublicSubnet1RouteTableAssociation8A950d8e);

    if (myVpcPrivateSubnet1RouteTable133Bd901 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable133Bd901' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1NatGateway838228A5 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1NatGateway838228A5' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1DefaultRouteA8ee6636 = new ec2.CfnRoute(this, 'MyVPCPrivateSubnet1DefaultRouteA8EE6636', {
      routeTableId: myVpcPrivateSubnet1RouteTable133Bd901.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet1NatGateway838228A5.ref,
    });
  }
}

