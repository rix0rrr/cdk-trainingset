import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface AwsEcsIntegLbFargateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsIntegLbFargate extends cdk.Stack {
  public readonly albFargateServiceLoadBalancerDnsafb2eddb;
  public readonly albFargateServiceServiceUrl4a19cf25;
  public readonly nlbFargateServiceLoadBalancerDnsc2b2922f;

  public constructor(scope: cdk.App, id: string, props: AwsEcsIntegLbFargateProps = {}) {
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
    const albFargateServiceTaskDefExecutionRole9E885e7b = new iam.CfnRole(this, 'ALBFargateServiceTaskDefExecutionRole9E885E7B', {
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

    const albFargateServiceTaskDefTaskRole11408723 = new iam.CfnRole(this, 'ALBFargateServiceTaskDefTaskRole11408723', {
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

    const albFargateServiceTaskDefwebLogGroup7073A41d = new logs.CfnLogGroup(this, 'ALBFargateServiceTaskDefwebLogGroup7073A41D', {
    });
    albFargateServiceTaskDefwebLogGroup7073A41d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const fargateCluster7Ccd5f93 = new ecs.CfnCluster(this, 'FargateCluster7CCD5F93', {
    });

    const nlbFargateServiceTaskDefExecutionRoleF6d642d5 = new iam.CfnRole(this, 'NLBFargateServiceTaskDefExecutionRoleF6D642D5', {
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

    const nlbFargateServiceTaskDefTaskRole6C88f40b = new iam.CfnRole(this, 'NLBFargateServiceTaskDefTaskRole6C88F40B', {
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

    const nlbFargateServiceTaskDefwebLogGroupC4a42fe2 = new logs.CfnLogGroup(this, 'NLBFargateServiceTaskDefwebLogGroupC4A42FE2', {
    });
    nlbFargateServiceTaskDefwebLogGroupC4a42fe2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albFargateServiceLbPublicListenerEcsGroup6871Fb8c = new elasticloadbalancingv2.CfnTargetGroup(this, 'ALBFargateServiceLBPublicListenerECSGroup6871FB8C', {
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
    const albFargateServiceLbSecurityGroup5Dc3060e = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceLBSecurityGroup5DC3060E', {
      groupDescription: 'Automatically created Security Group for ELB awsecsinteglbfargateALBFargateServiceLBF93E98F2',
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

    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const albFargateServiceSecurityGroup82F7a67e = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceSecurityGroup82F7A67E', {
      groupDescription: 'aws-ecs-integ-lb-fargate/ALBFargateService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    albFargateServiceSecurityGroup82F7a67e.addDependency(albFargateServiceTaskDefTaskRole11408723);

    if (albFargateServiceTaskDefExecutionRole9E885e7b == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefExecutionRole9E885e7b' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefwebLogGroup7073A41d == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefwebLogGroup7073A41d' to be undefined. Fixit.`); }
    const albFargateServiceTaskDefExecutionRoleDefaultPolicy574B9ead = new iam.CfnPolicy(this, 'ALBFargateServiceTaskDefExecutionRoleDefaultPolicy574B9EAD', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: albFargateServiceTaskDefwebLogGroup7073A41d.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ALBFargateServiceTaskDefExecutionRoleDefaultPolicy574B9EAD',
      roles: [
        albFargateServiceTaskDefExecutionRole9E885e7b.ref,
      ],
    });

    if (albFargateServiceTaskDefExecutionRole9E885e7b == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefExecutionRole9E885e7b' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefwebLogGroup7073A41d == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefwebLogGroup7073A41d' to be undefined. Fixit.`); }
    const albFargateServiceTaskDefF69f17d6 = new ecs.CfnTaskDefinition(this, 'ALBFargateServiceTaskDefF69F17D6', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': albFargateServiceTaskDefwebLogGroup7073A41d.ref,
              'awslogs-stream-prefix': 'ALBFargateService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '512',
      executionRoleArn: albFargateServiceTaskDefExecutionRole9E885e7b.attrArn,
      family: 'awsecsinteglbfargateALBFargateServiceTaskDef26FE75C0',
      memory: '1024',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: albFargateServiceTaskDefTaskRole11408723.attrArn,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const nlbFargateServiceLbPublicListenerEcsGroupC469caa2 = new elasticloadbalancingv2.CfnTargetGroup(this, 'NLBFargateServiceLBPublicListenerECSGroupC469CAA2', {
      port: 80,
      protocol: 'TCP',
      targetType: 'ip',
      vpcId: vpc8378Eb38.ref,
    });

    if (nlbFargateServiceTaskDefTaskRole6C88f40b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefTaskRole6C88f40b' to be undefined. Fixit.`); }
    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const nlbFargateServiceSecurityGroup9D81388b = new ec2.CfnSecurityGroup(this, 'NLBFargateServiceSecurityGroup9D81388B', {
      groupDescription: 'aws-ecs-integ-lb-fargate/NLBFargateService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });
    nlbFargateServiceSecurityGroup9D81388b.addDependency(nlbFargateServiceTaskDefTaskRole6C88f40b);

    if (nlbFargateServiceTaskDefExecutionRoleF6d642d5 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefExecutionRoleF6d642d5' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefTaskRole6C88f40b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefTaskRole6C88f40b' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefwebLogGroupC4a42fe2 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefwebLogGroupC4a42fe2' to be undefined. Fixit.`); }
    const nlbFargateServiceTaskDefB836fa89 = new ecs.CfnTaskDefinition(this, 'NLBFargateServiceTaskDefB836FA89', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': nlbFargateServiceTaskDefwebLogGroupC4a42fe2.ref,
              'awslogs-stream-prefix': 'NLBFargateService',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              containerPort: 80,
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '512',
      executionRoleArn: nlbFargateServiceTaskDefExecutionRoleF6d642d5.attrArn,
      family: 'awsecsinteglbfargateNLBFargateServiceTaskDef1265FF34',
      memory: '1024',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: nlbFargateServiceTaskDefTaskRole6C88f40b.attrArn,
    });

    if (nlbFargateServiceTaskDefExecutionRoleF6d642d5 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefExecutionRoleF6d642d5' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefwebLogGroupC4a42fe2 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefwebLogGroupC4a42fe2' to be undefined. Fixit.`); }
    const nlbFargateServiceTaskDefExecutionRoleDefaultPolicy90080805 = new iam.CfnPolicy(this, 'NLBFargateServiceTaskDefExecutionRoleDefaultPolicy90080805', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: nlbFargateServiceTaskDefwebLogGroupC4a42fe2.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'NLBFargateServiceTaskDefExecutionRoleDefaultPolicy90080805',
      roles: [
        nlbFargateServiceTaskDefExecutionRoleF6d642d5.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PrivateSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PrivateSubnet2',
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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet1',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      vpcId: vpc8378Eb38.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet2',
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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet2',
        },
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    if (vpcIgwd7ba715c == null) { throw new Error(`A combination of conditions caused 'vpcIgwd7ba715c' to be undefined. Fixit.`); }
    const vpcVpcgwbf912b6e = new ec2.CfnVPCGatewayAttachment(this, 'VpcVPCGWBF912B6E', {
      vpcId: vpc8378Eb38.ref,
      internetGatewayId: vpcIgwd7ba715c.ref,
    });

    if (albFargateServiceLbSecurityGroup5Dc3060e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbSecurityGroup5Dc3060e' to be undefined. Fixit.`); }
    if (albFargateServiceSecurityGroup82F7a67e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceSecurityGroup82F7a67e' to be undefined. Fixit.`); }
    const albFargateServiceLbSecurityGrouptoawsecsinteglbfargateAlbFargateServiceSecurityGroup0D9b5aeb80c5cfce6c = new ec2.CfnSecurityGroupEgress(this, 'ALBFargateServiceLBSecurityGrouptoawsecsinteglbfargateALBFargateServiceSecurityGroup0D9B5AEB80C5CFCE6C', {
      groupId: albFargateServiceLbSecurityGroup5Dc3060e.attrGroupId,
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      destinationSecurityGroupId: albFargateServiceSecurityGroup82F7a67e.attrGroupId,
      fromPort: 80,
      toPort: 80,
    });

    if (albFargateServiceLbSecurityGroup5Dc3060e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbSecurityGroup5Dc3060e' to be undefined. Fixit.`); }
    if (albFargateServiceSecurityGroup82F7a67e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceSecurityGroup82F7a67e' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    const albFargateServiceSecurityGroupfromawsecsinteglbfargateAlbFargateServiceLbSecurityGroupCd911d2880462ecc11 = new ec2.CfnSecurityGroupIngress(this, 'ALBFargateServiceSecurityGroupfromawsecsinteglbfargateALBFargateServiceLBSecurityGroupCD911D2880462ECC11', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: albFargateServiceSecurityGroup82F7a67e.attrGroupId,
      sourceSecurityGroupId: albFargateServiceLbSecurityGroup5Dc3060e.attrGroupId,
      toPort: 80,
    });
    albFargateServiceSecurityGroupfromawsecsinteglbfargateAlbFargateServiceLbSecurityGroupCd911d2880462ecc11.addDependency(albFargateServiceTaskDefTaskRole11408723);

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

    if (albFargateServiceLbSecurityGroup5Dc3060e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbSecurityGroup5Dc3060e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const albFargateServiceLb64a0074e = new elasticloadbalancingv2.CfnLoadBalancer(this, 'ALBFargateServiceLB64A0074E', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      securityGroups: [
        albFargateServiceLbSecurityGroup5Dc3060e.attrGroupId,
      ],
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'application',
    });
    albFargateServiceLb64a0074e.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    albFargateServiceLb64a0074e.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    albFargateServiceLb64a0074e.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    albFargateServiceLb64a0074e.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (vpcPublicSubnet1DefaultRoute3Da9e72a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute3Da9e72a' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation97140677 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation97140677' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2DefaultRoute97F91067 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRoute97F91067' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociationDd5762d8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociationDd5762d8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet691E08a3 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet691E08a3' to be undefined. Fixit.`); }
    const nlbFargateServiceLb659ec17c = new elasticloadbalancingv2.CfnLoadBalancer(this, 'NLBFargateServiceLB659EC17C', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      subnets: [
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        vpcPublicSubnet2Subnet691E08a3.ref,
      ],
      type: 'network',
    });
    nlbFargateServiceLb659ec17c.addDependency(vpcPublicSubnet1DefaultRoute3Da9e72a);
    nlbFargateServiceLb659ec17c.addDependency(vpcPublicSubnet1RouteTableAssociation97140677);
    nlbFargateServiceLb659ec17c.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    nlbFargateServiceLb659ec17c.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet1',
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
          value: 'aws-ecs-integ-lb-fargate/Vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2DefaultRoute97F91067);
    vpcPublicSubnet2NatGateway9182C01d.addDependency(vpcPublicSubnet2RouteTableAssociationDd5762d8);

    if (albFargateServiceLb64a0074e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLb64a0074e' to be undefined. Fixit.`); }
    if (albFargateServiceLbPublicListenerEcsGroup6871Fb8c == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbPublicListenerEcsGroup6871Fb8c' to be undefined. Fixit.`); }
    const albFargateServiceLbPublicListener3489002A = new elasticloadbalancingv2.CfnListener(this, 'ALBFargateServiceLBPublicListener3489002A', {
      defaultActions: [
        {
          targetGroupArn: albFargateServiceLbPublicListenerEcsGroup6871Fb8c.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: albFargateServiceLb64a0074e.ref,
      port: 80,
      protocol: 'HTTP',
    });

    if (nlbFargateServiceLb659ec17c == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLb659ec17c' to be undefined. Fixit.`); }
    if (nlbFargateServiceLbPublicListenerEcsGroupC469caa2 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLbPublicListenerEcsGroupC469caa2' to be undefined. Fixit.`); }
    const nlbFargateServiceLbPublicListenerB0dca73c = new elasticloadbalancingv2.CfnListener(this, 'NLBFargateServiceLBPublicListenerB0DCA73C', {
      defaultActions: [
        {
          targetGroupArn: nlbFargateServiceLbPublicListenerEcsGroupC469caa2.ref,
          type: 'forward',
        },
      ],
      loadBalancerArn: nlbFargateServiceLb659ec17c.ref,
      port: 80,
      protocol: 'TCP',
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

    if (albFargateServiceLbPublicListener3489002A == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbPublicListener3489002A' to be undefined. Fixit.`); }
    if (albFargateServiceLbPublicListenerEcsGroup6871Fb8c == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbPublicListenerEcsGroup6871Fb8c' to be undefined. Fixit.`); }
    if (albFargateServiceSecurityGroup82F7a67e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceSecurityGroup82F7a67e' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefF69f17d6 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefF69f17d6' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const albFargateService90Fdce10 = new ecs.CfnService(this, 'ALBFargateService90FDCE10', {
      cluster: fargateCluster7Ccd5f93.ref,
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
          containerPort: 80,
          targetGroupArn: albFargateServiceLbPublicListenerEcsGroup6871Fb8c.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            albFargateServiceSecurityGroup82F7a67e.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: albFargateServiceTaskDefF69f17d6.ref,
    });
    albFargateService90Fdce10.addDependency(albFargateServiceLbPublicListenerEcsGroup6871Fb8c);
    albFargateService90Fdce10.addDependency(albFargateServiceLbPublicListener3489002A);
    albFargateService90Fdce10.addDependency(albFargateServiceTaskDefTaskRole11408723);

    if (fargateCluster7Ccd5f93 == null) { throw new Error(`A combination of conditions caused 'fargateCluster7Ccd5f93' to be undefined. Fixit.`); }
    if (nlbFargateServiceLbPublicListenerB0dca73c == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLbPublicListenerB0dca73c' to be undefined. Fixit.`); }
    if (nlbFargateServiceLbPublicListenerEcsGroupC469caa2 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLbPublicListenerEcsGroupC469caa2' to be undefined. Fixit.`); }
    if (nlbFargateServiceSecurityGroup9D81388b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceSecurityGroup9D81388b' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefB836fa89 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefB836fa89' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefTaskRole6C88f40b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefTaskRole6C88f40b' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet536B997a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet536B997a' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet3788Aaa1 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet3788Aaa1' to be undefined. Fixit.`); }
    const nlbFargateServiceB92ac095 = new ecs.CfnService(this, 'NLBFargateServiceB92AC095', {
      cluster: fargateCluster7Ccd5f93.ref,
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
          containerPort: 80,
          targetGroupArn: nlbFargateServiceLbPublicListenerEcsGroupC469caa2.ref,
        },
      ],
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            nlbFargateServiceSecurityGroup9D81388b.attrGroupId,
          ],
          subnets: [
            vpcPrivateSubnet1Subnet536B997a.ref,
            vpcPrivateSubnet2Subnet3788Aaa1.ref,
          ],
        },
      },
      taskDefinition: nlbFargateServiceTaskDefB836fa89.ref,
    });
    nlbFargateServiceB92ac095.addDependency(nlbFargateServiceLbPublicListenerEcsGroupC469caa2);
    nlbFargateServiceB92ac095.addDependency(nlbFargateServiceLbPublicListenerB0dca73c);
    nlbFargateServiceB92ac095.addDependency(nlbFargateServiceTaskDefTaskRole6C88f40b);

    // Outputs
    this.albFargateServiceLoadBalancerDnsafb2eddb = albFargateServiceLb64a0074e.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputALBFargateServiceLoadBalancerDNSAFB2EDDB', {
      key: 'ALBFargateServiceLoadBalancerDNSAFB2EDDB',
      value: this.albFargateServiceLoadBalancerDnsafb2eddb!.toString(),
    });
    this.albFargateServiceServiceUrl4a19cf25 = [
      'http://',
      albFargateServiceLb64a0074e.attrDnsName,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputALBFargateServiceServiceURL4A19CF25', {
      key: 'ALBFargateServiceServiceURL4A19CF25',
      value: this.albFargateServiceServiceUrl4a19cf25!.toString(),
    });
    this.nlbFargateServiceLoadBalancerDnsc2b2922f = nlbFargateServiceLb659ec17c.attrDnsName;
    new cdk.CfnOutput(this, 'CfnOutputNLBFargateServiceLoadBalancerDNSC2B2922F', {
      key: 'NLBFargateServiceLoadBalancerDNSC2B2922F',
      value: this.nlbFargateServiceLoadBalancerDnsc2b2922f!.toString(),
    });
  }
}

