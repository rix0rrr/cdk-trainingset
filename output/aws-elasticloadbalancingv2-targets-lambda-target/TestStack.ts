import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface TeststackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Teststack extends cdk.Stack {
  public readonly exportsOutputFnGetAttLb8a12904cdnsName5Efd7323;

  public constructor(scope: cdk.App, id: string, props: TeststackProps = {}) {
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
    const funServiceRole3Cc876d7 = new iam.CfnRole(this, 'FunServiceRole3CC876D7', {
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

    const stack8A423254 = new ec2.CfnVPC(this, 'Stack8A423254', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack',
        },
      ],
    });

    const stackIgw2f0a1126 = new ec2.CfnInternetGateway(this, 'StackIGW2F0A1126', {
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack',
        },
      ],
    });

    const stackPublicSubnet1Eipbdaab2a5 = new ec2.CfnEIP(this, 'StackPublicSubnet1EIPBDAAB2A5', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PublicSubnet1',
        },
      ],
    });

    if (funServiceRole3Cc876d7 == null) { throw new Error(`A combination of conditions caused 'funServiceRole3Cc876d7' to be undefined. Fixit.`); }
    const funA2cced21 = new lambda.CfnFunction(this, 'FunA2CCED21', {
      code: {
        zipFile: '\nimport json\ndef handler(event, context):\n  return {\n    \"isBase64Encoded\": False,\n    \"statusCode\": 200,\n    \"statusDescription\": \"200 OK\",\n    \"headers\": {\n        \"Set-cookie\": \"cookies\",\n        \"Content-Type\": \"application/json\"\n    },\n    \"body\": json.dumps({ \"message\": \"Hello from Lambda\" })\n  }\n      ',
      },
      role: funServiceRole3Cc876d7.attrArn,
      handler: 'index.handler',
      runtime: 'python3.9',
    });
    funA2cced21.addDependency(funServiceRole3Cc876d7);

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const lbSecurityGroup8A41ea2b = new ec2.CfnSecurityGroup(this, 'LBSecurityGroup8A41EA2B', {
      groupDescription: 'Automatically created Security Group for ELB TestStackLBC7C3DDBD',
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
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: stack8A423254.ref,
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet1RouteTable8Ada6a0c = new ec2.CfnRouteTable(this, 'StackPrivateSubnet1RouteTable8ADA6A0C', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PrivateSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet1Subnet47Ac2bc7 = new ec2.CfnSubnet(this, 'StackPrivateSubnet1Subnet47AC2BC7', {
      vpcId: stack8A423254.ref,
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
          value: 'TestStack/Stack/PrivateSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet2RouteTableA5546697 = new ec2.CfnRouteTable(this, 'StackPrivateSubnet2RouteTableA5546697', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PrivateSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPrivateSubnet2SubnetA2f8edd8 = new ec2.CfnSubnet(this, 'StackPrivateSubnet2SubnetA2F8EDD8', {
      vpcId: stack8A423254.ref,
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
          value: 'TestStack/Stack/PrivateSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet1RouteTable5057189D = new ec2.CfnRouteTable(this, 'StackPublicSubnet1RouteTable5057189D', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PublicSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet1Subnet0Ad81d22 = new ec2.CfnSubnet(this, 'StackPublicSubnet1Subnet0AD81D22', {
      vpcId: stack8A423254.ref,
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
          value: 'TestStack/Stack/PublicSubnet1',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet2RouteTableCd306445 = new ec2.CfnRouteTable(this, 'StackPublicSubnet2RouteTableCD306445', {
      vpcId: stack8A423254.ref,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PublicSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    const stackPublicSubnet2Subnet3C7d2288 = new ec2.CfnSubnet(this, 'StackPublicSubnet2Subnet3C7D2288', {
      vpcId: stack8A423254.ref,
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
          value: 'TestStack/Stack/PublicSubnet2',
        },
      ],
    });

    if (stack8A423254 == null) { throw new Error(`A combination of conditions caused 'stack8A423254' to be undefined. Fixit.`); }
    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    const stackVpcgwffcb6290 = new ec2.CfnVPCGatewayAttachment(this, 'StackVPCGWFFCB6290', {
      vpcId: stack8A423254.ref,
      internetGatewayId: stackIgw2f0a1126.ref,
    });

    if (funA2cced21 == null) { throw new Error(`A combination of conditions caused 'funA2cced21' to be undefined. Fixit.`); }
    const funInvoke2UtWxhlfyqbT5fTn5jvgbLgjFfJwzswGk55Du1hy1ca1aafb = new lambda.CfnPermission(this, 'FunInvoke2UTWxhlfyqbT5FTn5jvgbLgjFfJwzswGk55DU1HY1CA1AAFB', {
      action: 'lambda:InvokeFunction',
      functionName: funA2cced21.attrArn,
      principal: 'elasticloadbalancing.amazonaws.com',
    });

    if (stackPrivateSubnet1RouteTable8Ada6a0c == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1RouteTable8Ada6a0c' to be undefined. Fixit.`); }
    if (stackPrivateSubnet1Subnet47Ac2bc7 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1Subnet47Ac2bc7' to be undefined. Fixit.`); }
    const stackPrivateSubnet1RouteTableAssociationFfe38495 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPrivateSubnet1RouteTableAssociationFFE38495', {
      routeTableId: stackPrivateSubnet1RouteTable8Ada6a0c.ref,
      subnetId: stackPrivateSubnet1Subnet47Ac2bc7.ref,
    });

    if (stackPrivateSubnet2RouteTableA5546697 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2RouteTableA5546697' to be undefined. Fixit.`); }
    if (stackPrivateSubnet2SubnetA2f8edd8 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2SubnetA2f8edd8' to be undefined. Fixit.`); }
    const stackPrivateSubnet2RouteTableAssociation68Acb8c1 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPrivateSubnet2RouteTableAssociation68ACB8C1', {
      routeTableId: stackPrivateSubnet2RouteTableA5546697.ref,
      subnetId: stackPrivateSubnet2SubnetA2f8edd8.ref,
    });

    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    if (stackPublicSubnet1RouteTable5057189D == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTable5057189D' to be undefined. Fixit.`); }
    if (stackVpcgwffcb6290 == null) { throw new Error(`A combination of conditions caused 'stackVpcgwffcb6290' to be undefined. Fixit.`); }
    const stackPublicSubnet1DefaultRoute16154E3d = new ec2.CfnRoute(this, 'StackPublicSubnet1DefaultRoute16154E3D', {
      routeTableId: stackPublicSubnet1RouteTable5057189D.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: stackIgw2f0a1126.ref,
    });
    stackPublicSubnet1DefaultRoute16154E3d.addDependency(stackVpcgwffcb6290);

    if (stackPublicSubnet1RouteTable5057189D == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTable5057189D' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Subnet0Ad81d22 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Subnet0Ad81d22' to be undefined. Fixit.`); }
    const stackPublicSubnet1RouteTableAssociation74F1c1b6 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPublicSubnet1RouteTableAssociation74F1C1B6', {
      routeTableId: stackPublicSubnet1RouteTable5057189D.ref,
      subnetId: stackPublicSubnet1Subnet0Ad81d22.ref,
    });

    if (stackIgw2f0a1126 == null) { throw new Error(`A combination of conditions caused 'stackIgw2f0a1126' to be undefined. Fixit.`); }
    if (stackPublicSubnet2RouteTableCd306445 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableCd306445' to be undefined. Fixit.`); }
    if (stackVpcgwffcb6290 == null) { throw new Error(`A combination of conditions caused 'stackVpcgwffcb6290' to be undefined. Fixit.`); }
    const stackPublicSubnet2DefaultRoute0319539B = new ec2.CfnRoute(this, 'StackPublicSubnet2DefaultRoute0319539B', {
      routeTableId: stackPublicSubnet2RouteTableCd306445.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: stackIgw2f0a1126.ref,
    });
    stackPublicSubnet2DefaultRoute0319539B.addDependency(stackVpcgwffcb6290);

    if (stackPublicSubnet2RouteTableCd306445 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableCd306445' to be undefined. Fixit.`); }
    if (stackPublicSubnet2Subnet3C7d2288 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2Subnet3C7d2288' to be undefined. Fixit.`); }
    const stackPublicSubnet2RouteTableAssociation5E8f73f1 = new ec2.CfnSubnetRouteTableAssociation(this, 'StackPublicSubnet2RouteTableAssociation5E8F73F1', {
      routeTableId: stackPublicSubnet2RouteTableCd306445.ref,
      subnetId: stackPublicSubnet2Subnet3C7d2288.ref,
    });

    if (lbSecurityGroup8A41ea2b == null) { throw new Error(`A combination of conditions caused 'lbSecurityGroup8A41ea2b' to be undefined. Fixit.`); }
    if (stackPublicSubnet1DefaultRoute16154E3d == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1DefaultRoute16154E3d' to be undefined. Fixit.`); }
    if (stackPublicSubnet1RouteTableAssociation74F1c1b6 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTableAssociation74F1c1b6' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Subnet0Ad81d22 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Subnet0Ad81d22' to be undefined. Fixit.`); }
    if (stackPublicSubnet2DefaultRoute0319539B == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2DefaultRoute0319539B' to be undefined. Fixit.`); }
    if (stackPublicSubnet2RouteTableAssociation5E8f73f1 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2RouteTableAssociation5E8f73f1' to be undefined. Fixit.`); }
    if (stackPublicSubnet2Subnet3C7d2288 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet2Subnet3C7d2288' to be undefined. Fixit.`); }
    const lb8a12904c = new elasticloadbalancingv2.CfnLoadBalancer(this, 'LB8A12904C', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        lbSecurityGroup8A41ea2b.attrGroupId,
      ],
      subnets: [
        stackPublicSubnet1Subnet0Ad81d22.ref,
        stackPublicSubnet2Subnet3C7d2288.ref,
      ],
      type: 'application',
    });
    lb8a12904c.addDependency(stackPublicSubnet1DefaultRoute16154E3d);
    lb8a12904c.addDependency(stackPublicSubnet1RouteTableAssociation74F1c1b6);
    lb8a12904c.addDependency(stackPublicSubnet2DefaultRoute0319539B);
    lb8a12904c.addDependency(stackPublicSubnet2RouteTableAssociation5E8f73f1);

    if (funA2cced21 == null) { throw new Error(`A combination of conditions caused 'funA2cced21' to be undefined. Fixit.`); }
    if (funInvoke2UtWxhlfyqbT5fTn5jvgbLgjFfJwzswGk55Du1hy1ca1aafb == null) { throw new Error(`A combination of conditions caused 'funInvoke2UtWxhlfyqbT5fTn5jvgbLgjFfJwzswGk55Du1hy1ca1aafb' to be undefined. Fixit.`); }
    const lbListenerTargetsGroup76Ef81e8 = new elasticloadbalancingv2.CfnTargetGroup(this, 'LBListenerTargetsGroup76EF81E8', {
      targets: [
        {
          id: funA2cced21.attrArn,
        },
      ],
      targetType: 'lambda',
    });
    lbListenerTargetsGroup76Ef81e8.addDependency(funInvoke2UtWxhlfyqbT5fTn5jvgbLgjFfJwzswGk55Du1hy1ca1aafb);

    if (stackPublicSubnet1DefaultRoute16154E3d == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1DefaultRoute16154E3d' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Eipbdaab2a5 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Eipbdaab2a5' to be undefined. Fixit.`); }
    if (stackPublicSubnet1RouteTableAssociation74F1c1b6 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1RouteTableAssociation74F1c1b6' to be undefined. Fixit.`); }
    if (stackPublicSubnet1Subnet0Ad81d22 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1Subnet0Ad81d22' to be undefined. Fixit.`); }
    const stackPublicSubnet1NatGatewayD2e1abf7 = new ec2.CfnNatGateway(this, 'StackPublicSubnet1NATGatewayD2E1ABF7', {
      subnetId: stackPublicSubnet1Subnet0Ad81d22.ref,
      allocationId: stackPublicSubnet1Eipbdaab2a5.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'TestStack/Stack/PublicSubnet1',
        },
      ],
    });
    stackPublicSubnet1NatGatewayD2e1abf7.addDependency(stackPublicSubnet1DefaultRoute16154E3d);
    stackPublicSubnet1NatGatewayD2e1abf7.addDependency(stackPublicSubnet1RouteTableAssociation74F1c1b6);

    if (lb8a12904c == null) { throw new Error(`A combination of conditions caused 'lb8a12904c' to be undefined. Fixit.`); }
    if (lbListenerTargetsGroup76Ef81e8 == null) { throw new Error(`A combination of conditions caused 'lbListenerTargetsGroup76Ef81e8' to be undefined. Fixit.`); }
    const lbListener49E825b4 = new elasticloadbalancingv2.CfnListener(this, 'LBListener49E825B4', {
      defaultActions: [
        {
          targetGroupArn: lbListenerTargetsGroup76Ef81e8.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: lb8a12904c.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (stackPrivateSubnet1RouteTable8Ada6a0c == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet1RouteTable8Ada6a0c' to be undefined. Fixit.`); }
    if (stackPublicSubnet1NatGatewayD2e1abf7 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1NatGatewayD2e1abf7' to be undefined. Fixit.`); }
    const stackPrivateSubnet1DefaultRouteFbf81ba5 = new ec2.CfnRoute(this, 'StackPrivateSubnet1DefaultRouteFBF81BA5', {
      routeTableId: stackPrivateSubnet1RouteTable8Ada6a0c.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: stackPublicSubnet1NatGatewayD2e1abf7.ref,
    });

    if (stackPrivateSubnet2RouteTableA5546697 == null) { throw new Error(`A combination of conditions caused 'stackPrivateSubnet2RouteTableA5546697' to be undefined. Fixit.`); }
    if (stackPublicSubnet1NatGatewayD2e1abf7 == null) { throw new Error(`A combination of conditions caused 'stackPublicSubnet1NatGatewayD2e1abf7' to be undefined. Fixit.`); }
    const stackPrivateSubnet2DefaultRoute22004492 = new ec2.CfnRoute(this, 'StackPrivateSubnet2DefaultRoute22004492', {
      routeTableId: stackPrivateSubnet2RouteTableA5546697.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: stackPublicSubnet1NatGatewayD2e1abf7.ref,
    });

    // Outputs
    this.exportsOutputFnGetAttLb8a12904cdnsName5Efd7323 = lb8a12904c.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputFnGetAttLB8A12904CDNSName5EFD7323', {
      key: 'ExportsOutputFnGetAttLB8A12904CDNSName5EFD7323',
      exportName: 'TestStack:ExportsOutputFnGetAttLB8A12904CDNSName5EFD7323',
      value: this.exportsOutputFnGetAttLb8a12904cdnsName5Efd7323!.toString(),
    });
  }
}

