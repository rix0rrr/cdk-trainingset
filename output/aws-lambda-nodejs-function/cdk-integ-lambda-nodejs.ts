import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-lambda-nodejsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-lambda-nodejs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-lambda-nodejsProps = {}) {
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
          value: 'cdk-integ-lambda-nodejs/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet2',
        },
      ],
    });

    const jshandlerServiceRole781Af366 = new iam.CfnRole(this, 'jshandlerServiceRole781AF366', {
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
      ],
    });

    const tshandlerServiceRole8876B8e7 = new iam.CfnRole(this, 'tshandlerServiceRole8876B8E7', {
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
      ],
    });

    const tshandlercustomhandlerdotsServiceRole0575D3cb = new iam.CfnRole(this, 'tshandlercustomhandlerdotsServiceRole0575D3CB', {
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
      ],
    });

    const tshandlercustomhandlernodotsServiceRole1775E15e = new iam.CfnRole(this, 'tshandlercustomhandlernodotsServiceRole1775E15E', {
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
      ],
    });

    const tshandlerloglevelServiceRole8512Bc45 = new iam.CfnRole(this, 'tshandlerloglevelServiceRole8512BC45', {
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
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PrivateSubnet1',
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
          value: 'cdk-integ-lambda-nodejs/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PrivateSubnet2',
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
          value: 'cdk-integ-lambda-nodejs/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet1',
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
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'Name',
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet2',
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
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet2',
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

    if (jshandlerServiceRole781Af366 == null) { throw new Error(`A combination of conditions caused 'jshandlerServiceRole781Af366' to be undefined. Fixit.`); }
    const jshandlerD8909241 = new lambda.CfnFunction(this, 'jshandlerD8909241', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '6c52cc5df44f0d18474ce4399377d62ee08c9b9cb11855fb95070dcd83a5a6ea.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: jshandlerServiceRole781Af366.attrArn,
      runtime: 'nodejs18.x',
    });
    jshandlerD8909241.addDependency(jshandlerServiceRole781Af366);

    if (tshandlerServiceRole8876B8e7 == null) { throw new Error(`A combination of conditions caused 'tshandlerServiceRole8876B8e7' to be undefined. Fixit.`); }
    const tshandler4E1c6929 = new lambda.CfnFunction(this, 'tshandler4E1C6929', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5017e4b2e278e32bc634202d075b7ed8961b0d784f75450f7918a6a4f6f7df4a.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tshandlerServiceRole8876B8e7.attrArn,
      runtime: 'nodejs18.x',
    });
    tshandler4E1c6929.addDependency(tshandlerServiceRole8876B8e7);

    if (tshandlercustomhandlerdotsServiceRole0575D3cb == null) { throw new Error(`A combination of conditions caused 'tshandlercustomhandlerdotsServiceRole0575D3cb' to be undefined. Fixit.`); }
    const tshandlercustomhandlerdots2695F653 = new lambda.CfnFunction(this, 'tshandlercustomhandlerdots2695F653', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'e13d2f4e26b1586fe7e2b9f1ce013083dfee5fffc377061fa1489449fd8b0cc8.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'ts-web.run.sh',
      layers: [
        [
          'arn:aws:lambda:',
          this.region,
          ':753240598075:layer:LambdaAdapterLayerX86:13',
        ].join(''),
      ],
      role: tshandlercustomhandlerdotsServiceRole0575D3cb.attrArn,
      runtime: 'nodejs18.x',
    });
    tshandlercustomhandlerdots2695F653.addDependency(tshandlercustomhandlerdotsServiceRole0575D3cb);

    if (tshandlercustomhandlernodotsServiceRole1775E15e == null) { throw new Error(`A combination of conditions caused 'tshandlercustomhandlernodotsServiceRole1775E15e' to be undefined. Fixit.`); }
    const tshandlercustomhandlernodots381F62ee = new lambda.CfnFunction(this, 'tshandlercustomhandlernodots381F62EE', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5017e4b2e278e32bc634202d075b7ed8961b0d784f75450f7918a6a4f6f7df4a.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tshandlercustomhandlernodotsServiceRole1775E15e.attrArn,
      runtime: 'nodejs18.x',
    });
    tshandlercustomhandlernodots381F62ee.addDependency(tshandlercustomhandlernodotsServiceRole1775E15e);

    if (tshandlerloglevelServiceRole8512Bc45 == null) { throw new Error(`A combination of conditions caused 'tshandlerloglevelServiceRole8512Bc45' to be undefined. Fixit.`); }
    const tshandlerloglevel0D4e12a5 = new lambda.CfnFunction(this, 'tshandlerloglevel0D4E12A5', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5017e4b2e278e32bc634202d075b7ed8961b0d784f75450f7918a6a4f6f7df4a.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tshandlerloglevelServiceRole8512Bc45.attrArn,
      runtime: 'nodejs18.x',
    });
    tshandlerloglevel0D4e12a5.addDependency(tshandlerloglevelServiceRole8512Bc45);

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
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet1',
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
          value: 'cdk-integ-lambda-nodejs/Vpc/PublicSubnet2',
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

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const tshandlervpcSecurityGroup587Cc215 = new ec2.CfnSecurityGroup(this, 'tshandlervpcSecurityGroup587CC215', {
      groupDescription: 'Automatic security group for Lambda Function cdkinteglambdanodejstshandlervpcAAE6104A',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    tshandlervpcSecurityGroup587Cc215.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    tshandlervpcSecurityGroup587Cc215.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    tshandlervpcSecurityGroup587Cc215.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    tshandlervpcSecurityGroup587Cc215.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    const tshandlervpcServiceRoleF6d326a3 = new iam.CfnRole(this, 'tshandlervpcServiceRoleF6D326A3', {
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
    tshandlervpcServiceRoleF6d326a3.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    tshandlervpcServiceRoleF6d326a3.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    tshandlervpcServiceRoleF6d326a3.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    tshandlervpcServiceRoleF6d326a3.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);

    if (vpcPrivateSubnet1DefaultRouteBe02a9ed == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1DefaultRouteBe02a9ed' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1RouteTableAssociation70C59fa6 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableAssociation70C59fa6' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2DefaultRoute060D2087 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2DefaultRoute060D2087' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2RouteTableAssociationA89cad56 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableAssociationA89cad56' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    if (tshandlervpcSecurityGroup587Cc215 == null) { throw new Error(`A combination of conditions caused 'tshandlervpcSecurityGroup587Cc215' to be undefined. Fixit.`); }
    if (tshandlervpcServiceRoleF6d326a3 == null) { throw new Error(`A combination of conditions caused 'tshandlervpcServiceRoleF6d326a3' to be undefined. Fixit.`); }
    const tshandlervpcA502e26a = new lambda.CfnFunction(this, 'tshandlervpcA502E26A', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5fd5332ac0f100f1845842d79d110a7cf0957bd31419a7aabaedf8d3043ddf09.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tshandlervpcServiceRoleF6d326a3.attrArn,
      runtime: 'nodejs18.x',
      vpcConfig: {
        securityGroupIds: [
          tshandlervpcSecurityGroup587Cc215.attrGroupId,
        ],
        subnetIds: [
          vpcPrivateSubnet1Subnet536B997a.ref,
          vpcPrivateSubnet2Subnet3788Aaa1.ref,
        ],
      },
    });
    tshandlervpcA502e26a.addDependency(tshandlervpcServiceRoleF6d326a3);
    tshandlervpcA502e26a.addDependency(vpcPrivateSubnet1DefaultRouteBe02a9ed);
    tshandlervpcA502e26a.addDependency(vpcPrivateSubnet1RouteTableAssociation70C59fa6);
    tshandlervpcA502e26a.addDependency(vpcPrivateSubnet2DefaultRoute060D2087);
    tshandlervpcA502e26a.addDependency(vpcPrivateSubnet2RouteTableAssociationA89cad56);
  }
}

