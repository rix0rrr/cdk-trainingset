import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsEcsIntegFargateImageProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegFargateImage extends cdk.Stack {
  public readonly fargateServiceLoadBalancerDns9433d5f6;
  public readonly fargateServiceServiceUrl47701f45;
  public readonly loadBalancerDns;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegFargateImageProps = {}) {
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
    const clusterEb0386a7 = new ecs.CfnCluster(this, 'ClusterEB0386A7', {
    });

    const fargateServiceTaskDefExecutionRole9194820E = new iam.CfnRole(this, 'FargateServiceTaskDefExecutionRole9194820E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const fargateServiceTaskDefTaskRole8Cdcf85e = new iam.CfnRole(this, 'FargateServiceTaskDefTaskRole8CDCF85E', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ecs-tasks.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const fargateServiceTaskDefwebLogGroup71Faf541 = new logs.CfnLogGroup(this, 'FargateServiceTaskDefwebLogGroup71FAF541', {
    });
    fargateServiceTaskDefwebLogGroup71Faf541.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateServiceLbPublicListenerEcsGroupBe57e081 = new elasticloadbalancingv2.CfnTargetGroup(this, 'FargateServiceLBPublicListenerECSGroupBE57E081', {
      port: 80,
      protocol: 'HTTP',
      targetGroupAttributes: [
        {
          key: 'stickiness.enabled',
          value: 'false',
        },
      ],
      targetType: 'ip',
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateServiceLbSecurityGroup5F444c78 = new ec2.CfnSecurityGroup(this, 'FargateServiceLBSecurityGroup5F444C78', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegfargateimageFargateServiceLBE8C7647A',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (fargateServiceTaskDefTaskRole8Cdcf85e == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefTaskRole8Cdcf85e' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const fargateServiceSecurityGroup262B61dd = new ec2.CfnSecurityGroup(this, 'FargateServiceSecurityGroup262B61DD', {
      groupDescription: 'aws-ecs-integ-fargate-image/FargateService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    fargateServiceSecurityGroup262B61dd.addDependency(fargateServiceTaskDefTaskRole8Cdcf85e);

    if (fargateServiceTaskDefExecutionRole9194820E == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefExecutionRole9194820E' to be undefined. Fixit.`); }
    if (fargateServiceTaskDefTaskRole8Cdcf85e == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefTaskRole8Cdcf85e' to be undefined. Fixit.`); }
    if (fargateServiceTaskDefwebLogGroup71Faf541 == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefwebLogGroup71Faf541' to be undefined. Fixit.`); }
    const fargateServiceTaskDef940E3a80 = new ecs.CfnTaskDefinition(this, 'FargateServiceTaskDef940E3A80', {
      containerDefinitions: [
        {
          essential: true,
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`,
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': fargateServiceTaskDefwebLogGroup71Faf541.ref,
              'awslogs-stream-prefix': 'FargateService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 8000,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '256',
      executionRoleArn: fargateServiceTaskDefExecutionRole9194820E.attrArn,
      family: 'awsecsintegfargateimageFargateServiceTaskDefB7B5FCF7',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: fargateServiceTaskDefTaskRole8Cdcf85e.attrArn,
    });

    if (fargateServiceTaskDefExecutionRole9194820E == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefExecutionRole9194820E' to be undefined. Fixit.`); }
    if (fargateServiceTaskDefwebLogGroup71Faf541 == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefwebLogGroup71Faf541' to be undefined. Fixit.`); }
    const fargateServiceTaskDefExecutionRoleDefaultPolicy827E7ca2 = new iam.CfnPolicy(this, 'FargateServiceTaskDefExecutionRoleDefaultPolicy827E7CA2', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: fargateServiceTaskDefwebLogGroup71Faf541.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FargateServiceTaskDefExecutionRoleDefaultPolicy827E7CA2',
      roles: [
        fargateServiceTaskDefExecutionRole9194820E.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet536B997a = new ec2.CfnSubnet(this, 'VpcPrivateSubnet1Subnet536B997A', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-ecs-integ-fargate-image/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet3788Aaa1 = new ec2.CfnSubnet(this, 'VpcPrivateSubnet2Subnet3788AAA1', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-ecs-integ-fargate-image/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet5C2d37c4 = new ec2.CfnSubnet(this, 'VpcPublicSubnet1Subnet5C2D37C4', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet691E08a3 = new ec2.CfnSubnet(this, 'VpcPublicSubnet2Subnet691E08A3', {
      vpcId: vpc8378Eb38.ref,
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
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (fargateServiceLbSecurityGroup5F444c78 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbSecurityGroup5F444c78' to be undefined. Fixit.`); }
    if (fargateServiceSecurityGroup262B61dd == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup262B61dd' to be undefined. Fixit.`); }
    const fargateServiceLbSecurityGrouptoawsecsintegfargateimageFargateServiceSecurityGroup6Feaf7f28000ea343f30 = new ec2.CfnSecurityGroupEgress(this, 'FargateServiceLBSecurityGrouptoawsecsintegfargateimageFargateServiceSecurityGroup6FEAF7F28000EA343F30', {
      groupId: fargateServiceLbSecurityGroup5F444c78.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: fargateServiceSecurityGroup262B61dd.attrGroupId,
      fromPort: 8000,
      toPort: 8000,
    });

    if (fargateServiceLbSecurityGroup5F444c78 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbSecurityGroup5F444c78' to be undefined. Fixit.`); }
    if (fargateServiceSecurityGroup262B61dd == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup262B61dd' to be undefined. Fixit.`); }
    if (fargateServiceTaskDefTaskRole8Cdcf85e == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefTaskRole8Cdcf85e' to be undefined. Fixit.`); }
    const fargateServiceSecurityGroupfromawsecsintegfargateimageFargateServiceLbSecurityGroup04156A428000d3e717f0 = new ec2.CfnSecurityGroupIngress(this, 'FargateServiceSecurityGroupfromawsecsintegfargateimageFargateServiceLBSecurityGroup04156A428000D3E717F0', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 8000,
      groupId: fargateServiceSecurityGroup262B61dd.attrGroupId,
      sourceSecurityGroupId: fargateServiceLbSecurityGroup5F444c78.attrGroupId,
      toPort: 8000,
    });
    fargateServiceSecurityGroupfromawsecsintegfargateimageFargateServiceLbSecurityGroup04156A428000d3e717f0.addDependency(fargateServiceTaskDefTaskRole8Cdcf85e);

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
      routeTableId: vpcPublicSubnet1RouteTable6C95e38e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
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
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwd7ba715c.ref,
    });
    vpcPublicSubnet2DefaultRoute97F91067.addDependency(vpcVpcgwbf912b6e);

    if (vpcPublicSubnet2RouteTable94F7e489 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable94F7e489' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociationDd5762d8 = new ec2.CfnSubnetRouteTableAssociation(this, 'VpcPublicSubnet2RouteTableAssociationDD5762D8', {
      routeTableId: vpcPublicSubnet2RouteTable94F7e489.ref,
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
    });

    if (fargateServiceLbSecurityGroup5F444c78 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbSecurityGroup5F444c78' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const fargateServiceLbb353e155 = new elasticloadbalancingv2.CfnLoadBalancer(this, 'FargateServiceLBB353E155', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        fargateServiceLbSecurityGroup5F444c78.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    fargateServiceLbb353e155.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    fargateServiceLbb353e155.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    fargateServiceLbb353e155.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    fargateServiceLbb353e155.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipd7e02669 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipd7e02669' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway4D7517aa = new ec2.CfnNatGateway(this, 'VpcPublicSubnet1NATGateway4D7517AA', {
      subnetId: vpcPublicSubnet1Subnet5C2d37c4.ref,
      allocationId: vpcPublicSubnet1Eipd7e02669.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet1',
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
      subnetId: vpcPublicSubnet2Subnet691E08a3.ref,
      allocationId: vpcPublicSubnet2Eip3c605a87.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-fargate-image/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (fargateServiceLbb353e155 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbb353e155' to be undefined. Fixit.`); }
    if (fargateServiceLbPublicListenerEcsGroupBe57e081 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbPublicListenerEcsGroupBe57e081' to be undefined. Fixit.`); }
    const fargateServiceLbPublicListener4B4929ca = new elasticloadbalancingv2.CfnListener(this, 'FargateServiceLBPublicListener4B4929CA', {
      defaultActions: [
        {
          targetGroupArn: fargateServiceLbPublicListenerEcsGroupBe57e081.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: fargateServiceLbb353e155.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (vpcPrivateSubnet1RouteTableB2c5b500 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB2c5b500' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway4D7517aa == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway4D7517aa' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteBe02a9ed = new ec2.CfnRoute(this, 'VpcPrivateSubnet1DefaultRouteBE02A9ED', {
      routeTableId: vpcPrivateSubnet1RouteTableB2c5b500.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway4D7517aa.ref,
    });

    if (vpcPrivateSubnet2RouteTableA678073b == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTableA678073b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9182C01d == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9182C01d' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRoute060D2087 = new ec2.CfnRoute(this, 'VpcPrivateSubnet2DefaultRoute060D2087', {
      routeTableId: vpcPrivateSubnet2RouteTableA678073b.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9182C01d.ref,
    });

    if (clusterEb0386a7 == null) { throw new Error(`A combination of conditions caused 'clusterEb0386a7' to be undefined. Fixit.`); }
    if (fargateServiceLbPublicListener4B4929ca == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbPublicListener4B4929ca' to be undefined. Fixit.`); }
    if (fargateServiceLbPublicListenerEcsGroupBe57e081 == null) { throw new Error(`A combination of conditions caused 'fargateServiceLbPublicListenerEcsGroupBe57e081' to be undefined. Fixit.`); }
    if (fargateServiceSecurityGroup262B61dd == null) { throw new Error(`A combination of conditions caused 'fargateServiceSecurityGroup262B61dd' to be undefined. Fixit.`); }
    if (fargateServiceTaskDef940E3a80 == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDef940E3a80' to be undefined. Fixit.`); }
    if (fargateServiceTaskDefTaskRole8Cdcf85e == null) { throw new Error(`A combination of conditions caused 'fargateServiceTaskDefTaskRole8Cdcf85e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const fargateServiceEcc8084d = new ecs.CfnService(this, 'FargateServiceECC8084D', {
      cluster: clusterEb0386a7.ref,
      deploymentConfiguration: {
        alarms: {
          alarmNames: [
          ],
          enable: false,
          rollback: false,
        },
        maximumPercent: 200,
        minimumHealthyPercent: 50,
      },
      enableEcsManagedTags: false,
      healthCheckGracePeriodSeconds: 60,
      launchType: 'FARGATE',
      loadBalancers: [
        {
          containerName: 'web',
          containerPort: 8000,
          targetGroupArn: fargateServiceLbPublicListenerEcsGroupBe57e081.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            fargateServiceSecurityGroup262B61dd.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: fargateServiceTaskDef940E3a80.ref,
    });
    fargateServiceEcc8084d.addDependency(fargateServiceLbPublicListenerEcsGroupBe57e081);
    fargateServiceEcc8084d.addDependency(fargateServiceLbPublicListener4B4929ca);
    fargateServiceEcc8084d.addDependency(fargateServiceTaskDefTaskRole8Cdcf85e);

    // Outputs
    this.fargateServiceLoadBalancerDns9433d5f6 = fargateServiceLbb353e155.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputFargateServiceLoadBalancerDNS9433D5F6', {
      key: 'FargateServiceLoadBalancerDNS9433D5F6',
      value: this.fargateServiceLoadBalancerDns9433d5f6!.toString(),
    });
    this.fargateServiceServiceUrl47701f45 = [
      'http://',
      fargateServiceLbb353e155.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputFargateServiceServiceURL47701F45', {
      key: 'FargateServiceServiceURL47701F45',
      value: this.fargateServiceServiceUrl47701f45!.toString(),
    });
    this.loadBalancerDns = fargateServiceLbb353e155.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputLoadBalancerDNS', {
      key: 'LoadBalancerDNS',
      value: this.loadBalancerDns!.toString(),
    });
  }
}

