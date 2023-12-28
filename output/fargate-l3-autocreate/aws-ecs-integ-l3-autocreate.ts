import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as elasticloadbalancingv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface aws-ecs-integ-l3-autocreateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-ecs-integ-l3-autocreate extends cdk.Stack {
  public readonly albFargateServiceLoadBalancerDnsafb2eddb;
  public readonly albFargateServiceServiceUrl4a19cf25;
  public readonly nlbFargateServiceLoadBalancerDnsc2b2922f;

  public constructor(scope: cdk.App, id: string, props: aws-ecs-integ-l3-autocreateProps = {}) {
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

    const ecsDefaultClusterMnL3mNnyn926a5246 = new ecs.CfnCluster(this, 'EcsDefaultClusterMnL3mNNYN926A5246', {
    });

    const ecsDefaultClusterMnL3mNnynVpc7788A521 = new ec2.CfnVPC(this, 'EcsDefaultClusterMnL3mNNYNVpc7788A521', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc',
        },
      ],
    });

    const ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f = new ec2.CfnInternetGateway(this, 'EcsDefaultClusterMnL3mNNYNVpcIGW9C2C2B8F', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc',
        },
      ],
    });

    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Eip8704db2f = new ec2.CfnEIP(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1EIP8704DB2F', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet1',
        },
      ],
    });

    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Eipf0764873 = new ec2.CfnEIP(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2EIPF0764873', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet2',
        },
      ],
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

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
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
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const albFargateServiceLbSecurityGroup5Dc3060e = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceLBSecurityGroup5DC3060E', {
      groupDescription: 'Automatically created Security Group for ELB awsecsintegl3autocreateALBFargateServiceLB31EA4AB6',
      securityGroupIngress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow from anyone on port 80',
          fromPort: 80,
          ipProtocol: 'tcp',
          toPort: 80,
        },
      ],
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
    });

    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const albFargateServiceSecurityGroup82F7a67e = new ec2.CfnSecurityGroup(this, 'ALBFargateServiceSecurityGroup82F7A67E', {
      groupDescription: 'aws-ecs-integ-l3-autocreate/ALBFargateService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
      family: 'awsecsintegl3autocreateALBFargateServiceTaskDefDA905826',
      memory: '1024',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: albFargateServiceTaskDefTaskRole11408723.attrArn,
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36 = new ec2.CfnRouteTable(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet1RouteTable4F1D2E36', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c = new ec2.CfnSubnet(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet1Subnet075EFF4C', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591 = new ec2.CfnRouteTable(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet2RouteTableDCE46591', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73 = new ec2.CfnSubnet(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet2SubnetE4CEDF73', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc = new ec2.CfnRouteTable(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1RouteTableA1FD6ACC', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99 = new ec2.CfnSubnet(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1Subnet3C273B99', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5 = new ec2.CfnRouteTable(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2RouteTable263DEAA5', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a = new ec2.CfnSubnet(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2Subnet95FF715A', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e = new ec2.CfnVPCGatewayAttachment(this, 'EcsDefaultClusterMnL3mNNYNVpcVPCGW2447264E', {
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
      internetGatewayId: ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    const nlbFargateServiceLbPublicListenerEcsGroupC469caa2 = new elasticloadbalancingv2.CfnTargetGroup(this, 'NLBFargateServiceLBPublicListenerECSGroupC469CAA2', {
      port: 80,
      protocol: 'TCP',
      targetType: 'ip',
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpc7788A521 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpc7788A521' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefTaskRole6C88f40b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefTaskRole6C88f40b' to be undefined. Fixit.`); }
    const nlbFargateServiceSecurityGroup9D81388b = new ec2.CfnSecurityGroup(this, 'NLBFargateServiceSecurityGroup9D81388B', {
      groupDescription: 'aws-ecs-integ-l3-autocreate/NLBFargateService/Service/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: ecsDefaultClusterMnL3mNnynVpc7788A521.ref,
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
      family: 'awsecsintegl3autocreateNLBFargateServiceTaskDef7AC6C114',
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

    if (albFargateServiceLbSecurityGroup5Dc3060e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbSecurityGroup5Dc3060e' to be undefined. Fixit.`); }
    if (albFargateServiceSecurityGroup82F7a67e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceSecurityGroup82F7a67e' to be undefined. Fixit.`); }
    const albFargateServiceLbSecurityGrouptoawsecsintegl3autocreateAlbFargateServiceSecurityGroup6F9400b580770a6c60 = new ec2.CfnSecurityGroupEgress(this, 'ALBFargateServiceLBSecurityGrouptoawsecsintegl3autocreateALBFargateServiceSecurityGroup6F9400B580770A6C60', {
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
    const albFargateServiceSecurityGroupfromawsecsintegl3autocreateAlbFargateServiceLbSecurityGroupD565e0bf802e7b8344 = new ec2.CfnSecurityGroupIngress(this, 'ALBFargateServiceSecurityGroupfromawsecsintegl3autocreateALBFargateServiceLBSecurityGroupD565E0BF802E7B8344', {
      ipProtocol: 'tcp',
      description: 'Load balancer to target',
      fromPort: 80,
      groupId: albFargateServiceSecurityGroup82F7a67e.attrGroupId,
      sourceSecurityGroupId: albFargateServiceLbSecurityGroup5Dc3060e.attrGroupId,
      toPort: 80,
    });
    albFargateServiceSecurityGroupfromawsecsintegl3autocreateAlbFargateServiceLbSecurityGroupD565e0bf802e7b8344.addDependency(albFargateServiceTaskDefTaskRole11408723);

    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTableAssociation34B92275 = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet1RouteTableAssociation34B92275', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36.ref,
      subnetId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableAssociation111C622f = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet2RouteTableAssociation111C622F', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591.ref,
      subnetId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178 = new ec2.CfnRoute(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1DefaultRouteFF4E2178', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f.ref,
    });
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178.addDependency(ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e);

    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17 = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1RouteTableAssociation8B583A17', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableA1fd6acc.ref,
      subnetId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520 = new ec2.CfnRoute(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2DefaultRouteB1375520', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ecsDefaultClusterMnL3mNnynVpcIgw9c2c2b8f.ref,
    });
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520.addDependency(ecsDefaultClusterMnL3mNnynVpcVpcgw2447264e);

    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2RouteTableAssociation43E5803C', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTable263Deaa5.ref,
      subnetId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a.ref,
    });

    if (albFargateServiceLbSecurityGroup5Dc3060e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbSecurityGroup5Dc3060e' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a' to be undefined. Fixit.`); }
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
        ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99.ref,
        ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a.ref,
      ],
      type: 'application',
    });
    albFargateServiceLb64a0074e.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178);
    albFargateServiceLb64a0074e.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17);
    albFargateServiceLb64a0074e.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520);
    albFargateServiceLb64a0074e.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c);

    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Eip8704db2f == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Eip8704db2f' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1 = new ec2.CfnNatGateway(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet1NATGateway5E3732C1', {
      subnetId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99.ref,
      allocationId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Eip8704db2f.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet1',
        },
      ],
    });
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178);
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17);

    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Eipf0764873 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Eipf0764873' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00 = new ec2.CfnNatGateway(this, 'EcsDefaultClusterMnL3mNNYNVpcPublicSubnet2NATGateway4C855E00', {
      subnetId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a.ref,
      allocationId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Eipf0764873.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-integ-l3-autocreate/EcsDefaultClusterMnL3mNNYN/Vpc/PublicSubnet2',
        },
      ],
    });
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520);
    ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c);

    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a' to be undefined. Fixit.`); }
    const nlbFargateServiceLb659ec17c = new elasticloadbalancingv2.CfnLoadBalancer(this, 'NLBFargateServiceLB659EC17C', {
      loadBalancerAttributes: [
        {
          key: 'deletion_protection.enabled',
          value: 'false',
        },
      ],
      scheme: 'internet-facing',
      subnets: [
        ecsDefaultClusterMnL3mNnynVpcPublicSubnet1Subnet3C273b99.ref,
        ecsDefaultClusterMnL3mNnynVpcPublicSubnet2Subnet95Ff715a.ref,
      ],
      type: 'network',
    });
    nlbFargateServiceLb659ec17c.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1DefaultRouteFf4e2178);
    nlbFargateServiceLb659ec17c.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet1RouteTableAssociation8B583a17);
    nlbFargateServiceLb659ec17c.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2DefaultRouteB1375520);
    nlbFargateServiceLb659ec17c.addDependency(ecsDefaultClusterMnL3mNnynVpcPublicSubnet2RouteTableAssociation43E5803c);

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

    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1DefaultRouteA5adf694 = new ec2.CfnRoute(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet1DefaultRouteA5ADF694', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1RouteTable4F1d2e36.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet1NatGateway5E3732c1.ref,
    });

    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00' to be undefined. Fixit.`); }
    const ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2DefaultRoute20Ce2d89 = new ec2.CfnRoute(this, 'EcsDefaultClusterMnL3mNNYNVpcPrivateSubnet2DefaultRoute20CE2D89', {
      routeTableId: ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2RouteTableDce46591.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ecsDefaultClusterMnL3mNnynVpcPublicSubnet2NatGateway4C855e00.ref,
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

    if (albFargateServiceLbPublicListener3489002A == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbPublicListener3489002A' to be undefined. Fixit.`); }
    if (albFargateServiceLbPublicListenerEcsGroup6871Fb8c == null) { throw new Error(`A combination of conditions caused 'albFargateServiceLbPublicListenerEcsGroup6871Fb8c' to be undefined. Fixit.`); }
    if (albFargateServiceSecurityGroup82F7a67e == null) { throw new Error(`A combination of conditions caused 'albFargateServiceSecurityGroup82F7a67e' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefF69f17d6 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefF69f17d6' to be undefined. Fixit.`); }
    if (albFargateServiceTaskDefTaskRole11408723 == null) { throw new Error(`A combination of conditions caused 'albFargateServiceTaskDefTaskRole11408723' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnyn926a5246 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnyn926a5246' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73' to be undefined. Fixit.`); }
    const albFargateService90Fdce10 = new ecs.CfnService(this, 'ALBFargateService90FDCE10', {
      cluster: ecsDefaultClusterMnL3mNnyn926a5246.ref,
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
            ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c.ref,
            ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73.ref,
          ],
        },
      },
      taskDefinition: albFargateServiceTaskDefF69f17d6.ref,
    });
    albFargateService90Fdce10.addDependency(albFargateServiceLbPublicListenerEcsGroup6871Fb8c);
    albFargateService90Fdce10.addDependency(albFargateServiceLbPublicListener3489002A);
    albFargateService90Fdce10.addDependency(albFargateServiceTaskDefTaskRole11408723);

    if (ecsDefaultClusterMnL3mNnyn926a5246 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnyn926a5246' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c' to be undefined. Fixit.`); }
    if (ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73 == null) { throw new Error(`A combination of conditions caused 'ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73' to be undefined. Fixit.`); }
    if (nlbFargateServiceLbPublicListenerB0dca73c == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLbPublicListenerB0dca73c' to be undefined. Fixit.`); }
    if (nlbFargateServiceLbPublicListenerEcsGroupC469caa2 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceLbPublicListenerEcsGroupC469caa2' to be undefined. Fixit.`); }
    if (nlbFargateServiceSecurityGroup9D81388b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceSecurityGroup9D81388b' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefB836fa89 == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefB836fa89' to be undefined. Fixit.`); }
    if (nlbFargateServiceTaskDefTaskRole6C88f40b == null) { throw new Error(`A combination of conditions caused 'nlbFargateServiceTaskDefTaskRole6C88f40b' to be undefined. Fixit.`); }
    const nlbFargateServiceB92ac095 = new ecs.CfnService(this, 'NLBFargateServiceB92AC095', {
      cluster: ecsDefaultClusterMnL3mNnyn926a5246.ref,
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
            ecsDefaultClusterMnL3mNnynVpcPrivateSubnet1Subnet075Eff4c.ref,
            ecsDefaultClusterMnL3mNnynVpcPrivateSubnet2SubnetE4cedf73.ref,
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

