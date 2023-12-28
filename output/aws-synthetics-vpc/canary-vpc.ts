import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as synthetics from 'aws-cdk-lib/aws-synthetics';

export interface canary-vpcProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class canary-vpc extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: canary-vpcProps = {}) {
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
    const myVpcCanaryArtifactsBucketDc69853c = new s3.CfnBucket(this, 'MyVpcCanaryArtifactsBucketDC69853C', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    myVpcCanaryArtifactsBucketDc69853c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myVpcF9f0ca6f = new ec2.CfnVPC(this, 'MyVpcF9F0CA6F', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc',
        },
      ],
    });

    const myVpcIgw5c4a4f63 = new ec2.CfnInternetGateway(this, 'MyVpcIGW5C4A4F63', {
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc',
        },
      ],
    });

    const myVpcPublicSubnet1Eip096967cb = new ec2.CfnEIP(this, 'MyVpcPublicSubnet1EIP096967CB', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet1',
        },
      ],
    });

    const myVpcPublicSubnet2Eip8ccba239 = new ec2.CfnEIP(this, 'MyVpcPublicSubnet2EIP8CCBA239', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet2',
        },
      ],
    });

    if (myVpcCanaryArtifactsBucketDc69853c == null) { throw new Error(`A combination of conditions caused 'myVpcCanaryArtifactsBucketDc69853c' to be undefined. Fixit.`); }
    const myVpcCanaryArtifactsBucketPolicy27806F2c = new s3.CfnBucketPolicy(this, 'MyVpcCanaryArtifactsBucketPolicy27806F2C', {
      bucket: myVpcCanaryArtifactsBucketDc69853c.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:*',
            Condition: {
              Bool: {
                'aws:SecureTransport': 'false',
              },
            },
            Effect: 'Deny',
            Principal: {
              AWS: '*',
            },
            Resource: [
              myVpcCanaryArtifactsBucketDc69853c.attrArn,
              [
                myVpcCanaryArtifactsBucketDc69853c.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcCanarySecurityGroupEa9564aa = new ec2.CfnSecurityGroup(this, 'MyVpcCanarySecurityGroupEA9564AA', {
      groupDescription: 'Automatic security group for Canary canaryvpcMyVpcCanaryDEF63B1A',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcCanaryArtifactsBucketDc69853c == null) { throw new Error(`A combination of conditions caused 'myVpcCanaryArtifactsBucketDc69853c' to be undefined. Fixit.`); }
    const myVpcCanaryServiceRole2B1bbde8 = new iam.CfnRole(this, 'MyVpcCanaryServiceRole2B1BBDE8', {
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
          ':iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole',
        ].join(''),
      ],
      policies: [
        {
          policyDocument: {
            Statement: [
              {
                Action: 's3:ListAllMyBuckets',
                Effect: 'Allow',
                Resource: '*',
              },
              {
                Action: 's3:GetBucketLocation',
                Effect: 'Allow',
                Resource: myVpcCanaryArtifactsBucketDc69853c.attrArn,
              },
              {
                Action: 's3:PutObject',
                Effect: 'Allow',
                Resource: [
                  myVpcCanaryArtifactsBucketDc69853c.attrArn,
                  '/*',
                ].join(''),
              },
              {
                Action: 'cloudwatch:PutMetricData',
                Condition: {
                  StringEquals: {
                    'cloudwatch:namespace': 'CloudWatchSynthetics',
                  },
                },
                Effect: 'Allow',
                Resource: '*',
              },
              {
                Action: [
                  'logs:CreateLogGroup',
                  'logs:CreateLogStream',
                  'logs:PutLogEvents',
                ],
                Effect: 'Allow',
                Resource: [
                  'arn:',
                  this.partition,
                  ':logs:',
                  this.region,
                  ':',
                  this.account,
                  ':log-group:/aws/lambda/cwsyn-*',
                ].join(''),
              },
            ],
            Version: '2012-10-17',
          },
          policyName: 'canaryPolicy',
        },
      ],
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTable8819E6e2 = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet1RouteTable8819E6E2', {
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PrivateSubnet1',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1Subnet5057Cf7e = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet1Subnet5057CF7E', {
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
          value: 'canary-vpc/MyVpc/PrivateSubnet1',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2RouteTableCedceece = new ec2.CfnRouteTable(this, 'MyVpcPrivateSubnet2RouteTableCEDCEECE', {
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PrivateSubnet2',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2Subnet0040C983 = new ec2.CfnSubnet(this, 'MyVpcPrivateSubnet2Subnet0040C983', {
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
          value: 'canary-vpc/MyVpc/PrivateSubnet2',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableC46ab2f4 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet1RouteTableC46AB2F4', {
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet1',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1SubnetF6608456 = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet1SubnetF6608456', {
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
          value: 'canary-vpc/MyVpc/PublicSubnet1',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2RouteTable1Df17386 = new ec2.CfnRouteTable(this, 'MyVpcPublicSubnet2RouteTable1DF17386', {
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet2',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2Subnet492B6bfb = new ec2.CfnSubnet(this, 'MyVpcPublicSubnet2Subnet492B6BFB', {
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
          value: 'canary-vpc/MyVpc/PublicSubnet2',
        },
      ],
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    const myVpcVpcgw488ace0d = new ec2.CfnVPCGatewayAttachment(this, 'MyVpcVPCGW488ACE0D', {
      internetGatewayId: myVpcIgw5c4a4f63.ref,
      vpcId: myVpcF9f0ca6f.ref,
    });

    if (myVpcCanaryArtifactsBucketDc69853c == null) { throw new Error(`A combination of conditions caused 'myVpcCanaryArtifactsBucketDc69853c' to be undefined. Fixit.`); }
    if (myVpcCanarySecurityGroupEa9564aa == null) { throw new Error(`A combination of conditions caused 'myVpcCanarySecurityGroupEa9564aa' to be undefined. Fixit.`); }
    if (myVpcCanaryServiceRole2B1bbde8 == null) { throw new Error(`A combination of conditions caused 'myVpcCanaryServiceRole2B1bbde8' to be undefined. Fixit.`); }
    if (myVpcF9f0ca6f == null) { throw new Error(`A combination of conditions caused 'myVpcF9f0ca6f' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet5057Cf7e == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet5057Cf7e' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet2Subnet0040C983 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2Subnet0040C983' to be undefined. Fixit.`); }
    const myVpcCanary8C70c179 = new synthetics.CfnCanary(this, 'MyVpcCanary8C70C179', {
      artifactS3Location: [
        's3://',
        myVpcCanaryArtifactsBucketDc69853c.ref,
      ].join(''),
      code: {
        handler: 'canary.handler',
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'b1b777dcb79a2fa2790059927207d10bf5f4747d6dd1516e2780726d9d6fa820.zip',
      },
      executionRoleArn: myVpcCanaryServiceRole2B1bbde8.attrArn,
      name: 'canary-vpc',
      runtimeVersion: 'syn-nodejs-puppeteer-3.8',
      schedule: {
        durationInSeconds: '0',
        expression: 'rate(5 minutes)',
      },
      startCanaryAfterCreation: true,
      vpcConfig: {
        securityGroupIds: [
          myVpcCanarySecurityGroupEa9564aa.attrGroupId,
        ],
        subnetIds: [
          myVpcPrivateSubnet1Subnet5057Cf7e.ref,
          myVpcPrivateSubnet2Subnet0040C983.ref,
        ],
        vpcId: myVpcF9f0ca6f.ref,
      },
    });

    if (myVpcPrivateSubnet1RouteTable8819E6e2 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable8819E6e2' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet1Subnet5057Cf7e == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1Subnet5057Cf7e' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1RouteTableAssociation56D38c7e = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPrivateSubnet1RouteTableAssociation56D38C7E', {
      routeTableId: myVpcPrivateSubnet1RouteTable8819E6e2.ref,
      subnetId: myVpcPrivateSubnet1Subnet5057Cf7e.ref,
    });

    if (myVpcPrivateSubnet2RouteTableCedceece == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2RouteTableCedceece' to be undefined. Fixit.`); }
    if (myVpcPrivateSubnet2Subnet0040C983 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2Subnet0040C983' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2RouteTableAssociation86A610da = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPrivateSubnet2RouteTableAssociation86A610DA', {
      routeTableId: myVpcPrivateSubnet2RouteTableCedceece.ref,
      subnetId: myVpcPrivateSubnet2Subnet0040C983.ref,
    });

    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTableC46ab2f4 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableC46ab2f4' to be undefined. Fixit.`); }
    if (myVpcVpcgw488ace0d == null) { throw new Error(`A combination of conditions caused 'myVpcVpcgw488ace0d' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1DefaultRoute95Fdf9eb = new ec2.CfnRoute(this, 'MyVpcPublicSubnet1DefaultRoute95FDF9EB', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcIgw5c4a4f63.ref,
      routeTableId: myVpcPublicSubnet1RouteTableC46ab2f4.ref,
    });
    myVpcPublicSubnet1DefaultRoute95Fdf9eb.addDependency(myVpcVpcgw488ace0d);

    if (myVpcPublicSubnet1RouteTableC46ab2f4 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableC46ab2f4' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1SubnetF6608456 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1SubnetF6608456' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1RouteTableAssociation2Ecee1cb = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPublicSubnet1RouteTableAssociation2ECEE1CB', {
      routeTableId: myVpcPublicSubnet1RouteTableC46ab2f4.ref,
      subnetId: myVpcPublicSubnet1SubnetF6608456.ref,
    });

    if (myVpcIgw5c4a4f63 == null) { throw new Error(`A combination of conditions caused 'myVpcIgw5c4a4f63' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2RouteTable1Df17386 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTable1Df17386' to be undefined. Fixit.`); }
    if (myVpcVpcgw488ace0d == null) { throw new Error(`A combination of conditions caused 'myVpcVpcgw488ace0d' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2DefaultRoute052936F6 = new ec2.CfnRoute(this, 'MyVpcPublicSubnet2DefaultRoute052936F6', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: myVpcIgw5c4a4f63.ref,
      routeTableId: myVpcPublicSubnet2RouteTable1Df17386.ref,
    });
    myVpcPublicSubnet2DefaultRoute052936F6.addDependency(myVpcVpcgw488ace0d);

    if (myVpcPublicSubnet2RouteTable1Df17386 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTable1Df17386' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Subnet492B6bfb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Subnet492B6bfb' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2RouteTableAssociation227De78d = new ec2.CfnSubnetRouteTableAssociation(this, 'MyVpcPublicSubnet2RouteTableAssociation227DE78D', {
      routeTableId: myVpcPublicSubnet2RouteTable1Df17386.ref,
      subnetId: myVpcPublicSubnet2Subnet492B6bfb.ref,
    });

    if (myVpcPublicSubnet1DefaultRoute95Fdf9eb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1DefaultRoute95Fdf9eb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1Eip096967cb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1Eip096967cb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1RouteTableAssociation2Ecee1cb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1RouteTableAssociation2Ecee1cb' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1SubnetF6608456 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1SubnetF6608456' to be undefined. Fixit.`); }
    const myVpcPublicSubnet1NatGatewayAd3400c1 = new ec2.CfnNatGateway(this, 'MyVpcPublicSubnet1NATGatewayAD3400C1', {
      allocationId: myVpcPublicSubnet1Eip096967cb.attrAllocationId,
      subnetId: myVpcPublicSubnet1SubnetF6608456.ref,
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet1',
        },
      ],
    });
    myVpcPublicSubnet1NatGatewayAd3400c1.addDependency(myVpcPublicSubnet1DefaultRoute95Fdf9eb);
    myVpcPublicSubnet1NatGatewayAd3400c1.addDependency(myVpcPublicSubnet1RouteTableAssociation2Ecee1cb);

    if (myVpcPublicSubnet2DefaultRoute052936F6 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2DefaultRoute052936F6' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Eip8ccba239 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Eip8ccba239' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2RouteTableAssociation227De78d == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2RouteTableAssociation227De78d' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2Subnet492B6bfb == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2Subnet492B6bfb' to be undefined. Fixit.`); }
    const myVpcPublicSubnet2NatGateway91Bfbec9 = new ec2.CfnNatGateway(this, 'MyVpcPublicSubnet2NATGateway91BFBEC9', {
      allocationId: myVpcPublicSubnet2Eip8ccba239.attrAllocationId,
      subnetId: myVpcPublicSubnet2Subnet492B6bfb.ref,
      tags: [
        {
          key: 'Name',
          value: 'canary-vpc/MyVpc/PublicSubnet2',
        },
      ],
    });
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2DefaultRoute052936F6);
    myVpcPublicSubnet2NatGateway91Bfbec9.addDependency(myVpcPublicSubnet2RouteTableAssociation227De78d);

    if (myVpcPrivateSubnet1RouteTable8819E6e2 == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet1RouteTable8819E6e2' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet1NatGatewayAd3400c1 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet1NatGatewayAd3400c1' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet1DefaultRouteA8cde2fa = new ec2.CfnRoute(this, 'MyVpcPrivateSubnet1DefaultRouteA8CDE2FA', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet1NatGatewayAd3400c1.ref,
      routeTableId: myVpcPrivateSubnet1RouteTable8819E6e2.ref,
    });

    if (myVpcPrivateSubnet2RouteTableCedceece == null) { throw new Error(`A combination of conditions caused 'myVpcPrivateSubnet2RouteTableCedceece' to be undefined. Fixit.`); }
    if (myVpcPublicSubnet2NatGateway91Bfbec9 == null) { throw new Error(`A combination of conditions caused 'myVpcPublicSubnet2NatGateway91Bfbec9' to be undefined. Fixit.`); }
    const myVpcPrivateSubnet2DefaultRoute9Ce96294 = new ec2.CfnRoute(this, 'MyVpcPrivateSubnet2DefaultRoute9CE96294', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: myVpcPublicSubnet2NatGateway91Bfbec9.ref,
      routeTableId: myVpcPrivateSubnet2RouteTableCedceece.ref,
    });
  }
}

