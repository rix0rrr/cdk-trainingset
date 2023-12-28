import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as servicediscovery from 'aws-cdk-lib/aws-servicediscovery';

export interface AwsEcsServiceConnectProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsEcsServiceConnect extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsEcsServiceConnectProps = {}) {
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
    const ecsClusterVpc779914Ab = new ec2.CfnVPC(this, 'EcsClusterVpc779914AB', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc',
        },
      ],
    });

    const ecsClusterVpcIgw3663b083 = new ec2.CfnInternetGateway(this, 'EcsClusterVpcIGW3663B083', {
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc',
        },
      ],
    });

    const ecsClusterVpcPublicSubnet1Eip2d3759a3 = new ec2.CfnEIP(this, 'EcsClusterVpcPublicSubnet1EIP2D3759A3', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    const ecsClusterVpcPublicSubnet2Eip26e3eeef = new ec2.CfnEIP(this, 'EcsClusterVpcPublicSubnet2EIP26E3EEEF', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    const taskDefExecutionRoleB4775c97 = new iam.CfnRole(this, 'TaskDefExecutionRoleB4775C97', {
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

    const taskDefTaskRole1Edb4a67 = new iam.CfnRole(this, 'TaskDefTaskRole1EDB4A67', {
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

    const taskDefcontainerLogGroupAb21cbaf = new logs.CfnLogGroup(this, 'TaskDefcontainerLogGroupAB21CBAF', {
    });
    taskDefcontainerLogGroupAb21cbaf.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const ns7Aad7a1a = new servicediscovery.CfnHttpNamespace(this, 'ns7AAD7A1A', {
      name: 'whistler.com',
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterDefaultServiceDiscoveryNamespaceB0971b2f = new servicediscovery.CfnPrivateDnsNamespace(this, 'EcsClusterDefaultServiceDiscoveryNamespaceB0971B2F', {
      name: 'scorekeep.com',
      vpc: ecsClusterVpc779914Ab.ref,
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee = new ec2.CfnRouteTable(this, 'EcsClusterVpcPrivateSubnet1RouteTable2EA148EE', {
      vpcId: ecsClusterVpc779914Ab.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet1SubnetFab0e487 = new ec2.CfnSubnet(this, 'EcsClusterVpcPrivateSubnet1SubnetFAB0E487', {
      vpcId: ecsClusterVpc779914Ab.ref,
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
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PrivateSubnet1',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet2RouteTable1D430e45 = new ec2.CfnRouteTable(this, 'EcsClusterVpcPrivateSubnet2RouteTable1D430E45', {
      vpcId: ecsClusterVpc779914Ab.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba = new ec2.CfnSubnet(this, 'EcsClusterVpcPrivateSubnet2SubnetC2B7B1BA', {
      vpcId: ecsClusterVpc779914Ab.ref,
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
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PrivateSubnet2',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet1RouteTable4Ae3113d = new ec2.CfnRouteTable(this, 'EcsClusterVpcPublicSubnet1RouteTable4AE3113D', {
      vpcId: ecsClusterVpc779914Ab.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet1Subnet4Ac37b0f = new ec2.CfnSubnet(this, 'EcsClusterVpcPublicSubnet1Subnet4AC37B0F', {
      vpcId: ecsClusterVpc779914Ab.ref,
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
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet1',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet2RouteTable89A2f6c5 = new ec2.CfnRouteTable(this, 'EcsClusterVpcPublicSubnet2RouteTable89A2F6C5', {
      vpcId: ecsClusterVpc779914Ab.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet2Subnet4A959a4c = new ec2.CfnSubnet(this, 'EcsClusterVpcPublicSubnet2Subnet4A959A4C', {
      vpcId: ecsClusterVpc779914Ab.ref,
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
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    if (ecsClusterVpcIgw3663b083 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcIgw3663b083' to be undefined. Fixit.`); }
    const ecsClusterVpcVpcgw944296c0 = new ec2.CfnVPCGatewayAttachment(this, 'EcsClusterVpcVPCGW944296C0', {
      vpcId: ecsClusterVpc779914Ab.ref,
      internetGatewayId: ecsClusterVpcIgw3663b083.ref,
    });

    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (taskDefcontainerLogGroupAb21cbaf == null) { throw new Error(`A combination of conditions caused 'taskDefcontainerLogGroupAb21cbaf' to be undefined. Fixit.`); }
    const taskDef54694570 = new ecs.CfnTaskDefinition(this, 'TaskDef54694570', {
      containerDefinitions: [
        {
          essential: true,
          image: 'amazon/amazon-ecs-sample',
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': taskDefcontainerLogGroupAb21cbaf.ref,
              'awslogs-stream-prefix': 'web',
              'awslogs-region': this.region,
            },
          },
          name: 'web',
          portMappings: [
            {
              appProtocol: 'http2',
              containerPort: 80,
              name: 'api',
              protocol: 'tcp',
            },
          ],
        },
      ],
      cpu: '1024',
      executionRoleArn: taskDefExecutionRoleB4775c97.attrArn,
      family: 'awsecsserviceconnectTaskDefEE77A948',
      memory: '2048',
      networkMode: 'awsvpc',
      requiresCompatibilities: [
        'FARGATE',
      ],
      taskRoleArn: taskDefTaskRole1Edb4a67.attrArn,
    });

    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const svcLogGroup25Caf347 = new logs.CfnLogGroup(this, 'svcLogGroup25CAF347', {
    });
    svcLogGroup25Caf347.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    svcLogGroup25Caf347.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    const svcSecurityGroup205Cc2da = new ec2.CfnSecurityGroup(this, 'svcSecurityGroup205CC2DA', {
      groupDescription: 'aws-ecs-service-connect/svc/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: ecsClusterVpc779914Ab.ref,
    });
    svcSecurityGroup205Cc2da.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsClusterVpc779914Ab == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpc779914Ab' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (ns7Aad7a1a == null) { throw new Error(`A combination of conditions caused 'ns7Aad7a1a' to be undefined. Fixit.`); }
    const svctwoSecurityGroup7B696927 = new ec2.CfnSecurityGroup(this, 'svctwoSecurityGroup7B696927', {
      groupDescription: 'aws-ecs-service-connect/svc-two/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: ecsClusterVpc779914Ab.ref,
    });
    svctwoSecurityGroup7B696927.addDependency(ns7Aad7a1a);
    svctwoSecurityGroup7B696927.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsClusterDefaultServiceDiscoveryNamespaceB0971b2f == null) { throw new Error(`A combination of conditions caused 'ecsClusterDefaultServiceDiscoveryNamespaceB0971b2f' to be undefined. Fixit.`); }
    const ecsCluster97242B84 = new ecs.CfnCluster(this, 'EcsCluster97242B84', {
      serviceConnectDefaults: {
        namespace: ecsClusterDefaultServiceDiscoveryNamespaceB0971b2f.attrArn,
      },
    });

    if (ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet1SubnetFab0e487 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet1SubnetFab0e487' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet1RouteTableAssociationF4e8acd7 = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsClusterVpcPrivateSubnet1RouteTableAssociationF4E8ACD7', {
      routeTableId: ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee.ref,
      subnetId: ecsClusterVpcPrivateSubnet1SubnetFab0e487.ref,
    });

    if (ecsClusterVpcPrivateSubnet2RouteTable1D430e45 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet2RouteTable1D430e45' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet2RouteTableAssociation329A2412 = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsClusterVpcPrivateSubnet2RouteTableAssociation329A2412', {
      routeTableId: ecsClusterVpcPrivateSubnet2RouteTable1D430e45.ref,
      subnetId: ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba.ref,
    });

    if (ecsClusterVpcIgw3663b083 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcIgw3663b083' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1RouteTable4Ae3113d == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1RouteTable4Ae3113d' to be undefined. Fixit.`); }
    if (ecsClusterVpcVpcgw944296c0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcVpcgw944296c0' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet1DefaultRoute8C7efc96 = new ec2.CfnRoute(this, 'EcsClusterVpcPublicSubnet1DefaultRoute8C7EFC96', {
      routeTableId: ecsClusterVpcPublicSubnet1RouteTable4Ae3113d.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ecsClusterVpcIgw3663b083.ref,
    });
    ecsClusterVpcPublicSubnet1DefaultRoute8C7efc96.addDependency(ecsClusterVpcVpcgw944296c0);

    if (ecsClusterVpcPublicSubnet1RouteTable4Ae3113d == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1RouteTable4Ae3113d' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1Subnet4Ac37b0f == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1Subnet4Ac37b0f' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet1RouteTableAssociation49C4cdbb = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsClusterVpcPublicSubnet1RouteTableAssociation49C4CDBB', {
      routeTableId: ecsClusterVpcPublicSubnet1RouteTable4Ae3113d.ref,
      subnetId: ecsClusterVpcPublicSubnet1Subnet4Ac37b0f.ref,
    });

    if (ecsClusterVpcIgw3663b083 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcIgw3663b083' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2RouteTable89A2f6c5 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2RouteTable89A2f6c5' to be undefined. Fixit.`); }
    if (ecsClusterVpcVpcgw944296c0 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcVpcgw944296c0' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet2DefaultRoute048730F7 = new ec2.CfnRoute(this, 'EcsClusterVpcPublicSubnet2DefaultRoute048730F7', {
      routeTableId: ecsClusterVpcPublicSubnet2RouteTable89A2f6c5.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: ecsClusterVpcIgw3663b083.ref,
    });
    ecsClusterVpcPublicSubnet2DefaultRoute048730F7.addDependency(ecsClusterVpcVpcgw944296c0);

    if (ecsClusterVpcPublicSubnet2RouteTable89A2f6c5 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2RouteTable89A2f6c5' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2Subnet4A959a4c == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2Subnet4A959a4c' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet2RouteTableAssociationE4d42fc1 = new ec2.CfnSubnetRouteTableAssociation(this, 'EcsClusterVpcPublicSubnet2RouteTableAssociationE4D42FC1', {
      routeTableId: ecsClusterVpcPublicSubnet2RouteTable89A2f6c5.ref,
      subnetId: ecsClusterVpcPublicSubnet2Subnet4A959a4c.ref,
    });

    if (taskDefExecutionRoleB4775c97 == null) { throw new Error(`A combination of conditions caused 'taskDefExecutionRoleB4775c97' to be undefined. Fixit.`); }
    if (taskDefcontainerLogGroupAb21cbaf == null) { throw new Error(`A combination of conditions caused 'taskDefcontainerLogGroupAb21cbaf' to be undefined. Fixit.`); }
    if (svcLogGroup25Caf347 == null) { throw new Error(`A combination of conditions caused 'svcLogGroup25Caf347' to be undefined. Fixit.`); }
    const taskDefExecutionRoleDefaultPolicy0Dbb737a = new iam.CfnPolicy(this, 'TaskDefExecutionRoleDefaultPolicy0DBB737A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'logs:CreateLogStream',
              'logs:PutLogEvents',
            ],
            Effect: 'Allow',
            Resource: [
              taskDefcontainerLogGroupAb21cbaf.attrArn,
              svcLogGroup25Caf347.attrArn,
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'TaskDefExecutionRoleDefaultPolicy0DBB737A',
      roles: [
        taskDefExecutionRoleB4775c97.ref,
      ],
    });

    if (ecsClusterVpcPublicSubnet1DefaultRoute8C7efc96 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1DefaultRoute8C7efc96' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1Eip2d3759a3 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1Eip2d3759a3' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1RouteTableAssociation49C4cdbb == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1RouteTableAssociation49C4cdbb' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1Subnet4Ac37b0f == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1Subnet4Ac37b0f' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet1NatGateway2F1e7764 = new ec2.CfnNatGateway(this, 'EcsClusterVpcPublicSubnet1NATGateway2F1E7764', {
      subnetId: ecsClusterVpcPublicSubnet1Subnet4Ac37b0f.ref,
      allocationId: ecsClusterVpcPublicSubnet1Eip2d3759a3.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet1',
        },
      ],
    });
    ecsClusterVpcPublicSubnet1NatGateway2F1e7764.addDependency(ecsClusterVpcPublicSubnet1DefaultRoute8C7efc96);
    ecsClusterVpcPublicSubnet1NatGateway2F1e7764.addDependency(ecsClusterVpcPublicSubnet1RouteTableAssociation49C4cdbb);

    if (ecsClusterVpcPublicSubnet2DefaultRoute048730F7 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2DefaultRoute048730F7' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2Eip26e3eeef == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2Eip26e3eeef' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2RouteTableAssociationE4d42fc1 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2RouteTableAssociationE4d42fc1' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2Subnet4A959a4c == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2Subnet4A959a4c' to be undefined. Fixit.`); }
    const ecsClusterVpcPublicSubnet2NatGatewayBd015416 = new ec2.CfnNatGateway(this, 'EcsClusterVpcPublicSubnet2NATGatewayBD015416', {
      subnetId: ecsClusterVpcPublicSubnet2Subnet4A959a4c.ref,
      allocationId: ecsClusterVpcPublicSubnet2Eip26e3eeef.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-ecs-service-connect/EcsCluster/Vpc/PublicSubnet2',
        },
      ],
    });
    ecsClusterVpcPublicSubnet2NatGatewayBd015416.addDependency(ecsClusterVpcPublicSubnet2DefaultRoute048730F7);
    ecsClusterVpcPublicSubnet2NatGatewayBd015416.addDependency(ecsClusterVpcPublicSubnet2RouteTableAssociationE4d42fc1);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet1SubnetFab0e487 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet1SubnetFab0e487' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (svcLogGroup25Caf347 == null) { throw new Error(`A combination of conditions caused 'svcLogGroup25Caf347' to be undefined. Fixit.`); }
    if (svcSecurityGroup205Cc2da == null) { throw new Error(`A combination of conditions caused 'svcSecurityGroup205Cc2da' to be undefined. Fixit.`); }
    const svcService376F2d22 = new ecs.CfnService(this, 'svcService376F2D22', {
      cluster: ecsCluster97242B84.ref,
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
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            svcSecurityGroup205Cc2da.attrGroupId,
          ],
          subnets: [
            ecsClusterVpcPrivateSubnet1SubnetFab0e487.ref,
            ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba.ref,
          ],
        },
      },
      serviceConnectConfiguration: {
        enabled: true,
        logConfiguration: {
          logDriver: 'awslogs',
          options: {
            'awslogs-group': svcLogGroup25Caf347.ref,
            'awslogs-stream-prefix': 'sc',
            'awslogs-region': this.region,
          },
        },
        namespace: 'scorekeep.com',
        services: [
          {
            clientAliases: [
              {
                dnsName: 'api',
                port: 80,
              },
            ],
            portName: 'api',
          },
        ],
      },
      taskDefinition: taskDef54694570.ref,
    });
    svcService376F2d22.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsCluster97242B84 == null) { throw new Error(`A combination of conditions caused 'ecsCluster97242B84' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet1SubnetFab0e487 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet1SubnetFab0e487' to be undefined. Fixit.`); }
    if (ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba' to be undefined. Fixit.`); }
    if (taskDef54694570 == null) { throw new Error(`A combination of conditions caused 'taskDef54694570' to be undefined. Fixit.`); }
    if (taskDefTaskRole1Edb4a67 == null) { throw new Error(`A combination of conditions caused 'taskDefTaskRole1Edb4a67' to be undefined. Fixit.`); }
    if (ns7Aad7a1a == null) { throw new Error(`A combination of conditions caused 'ns7Aad7a1a' to be undefined. Fixit.`); }
    if (svctwoSecurityGroup7B696927 == null) { throw new Error(`A combination of conditions caused 'svctwoSecurityGroup7B696927' to be undefined. Fixit.`); }
    const svctwoService5892185E = new ecs.CfnService(this, 'svctwoService5892185E', {
      cluster: ecsCluster97242B84.ref,
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
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'DISABLED',
          securityGroups: [
            svctwoSecurityGroup7B696927.attrGroupId,
          ],
          subnets: [
            ecsClusterVpcPrivateSubnet1SubnetFab0e487.ref,
            ecsClusterVpcPrivateSubnet2SubnetC2b7b1ba.ref,
          ],
        },
      },
      serviceConnectConfiguration: {
        enabled: true,
        namespace: ns7Aad7a1a.attrArn,
        services: [
          {
            clientAliases: [
              {
                dnsName: 'api',
                port: 80,
              },
            ],
            portName: 'api',
          },
        ],
      },
      taskDefinition: taskDef54694570.ref,
    });
    svctwoService5892185E.addDependency(ns7Aad7a1a);
    svctwoService5892185E.addDependency(taskDefTaskRole1Edb4a67);

    if (ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet1NatGateway2F1e7764 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet1NatGateway2F1e7764' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet1DefaultRoute0239F5d0 = new ec2.CfnRoute(this, 'EcsClusterVpcPrivateSubnet1DefaultRoute0239F5D0', {
      routeTableId: ecsClusterVpcPrivateSubnet1RouteTable2Ea148ee.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ecsClusterVpcPublicSubnet1NatGateway2F1e7764.ref,
    });

    if (ecsClusterVpcPrivateSubnet2RouteTable1D430e45 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPrivateSubnet2RouteTable1D430e45' to be undefined. Fixit.`); }
    if (ecsClusterVpcPublicSubnet2NatGatewayBd015416 == null) { throw new Error(`A combination of conditions caused 'ecsClusterVpcPublicSubnet2NatGatewayBd015416' to be undefined. Fixit.`); }
    const ecsClusterVpcPrivateSubnet2DefaultRoute27221D27 = new ec2.CfnRoute(this, 'EcsClusterVpcPrivateSubnet2DefaultRoute27221D27', {
      routeTableId: ecsClusterVpcPrivateSubnet2RouteTable1D430e45.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: ecsClusterVpcPublicSubnet2NatGatewayBd015416.ref,
    });
  }
}

