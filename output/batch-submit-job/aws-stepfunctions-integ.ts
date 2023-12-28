import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsInteg extends cdk.Stack {
  public readonly jobQueueArn;
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsIntegProps = {}) {
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
    const computeEnvInstanceProfileRole7000C8a9 = new iam.CfnRole(this, 'ComputeEnvInstanceProfileRole7000C8A9', {
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
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
        ].join(''),
      ],
    });

    const containerExecutionRole65F36cd2 = new iam.CfnRole(this, 'ContainerExecutionRole65F36CD2', {
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

    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip9b3743b1 = new ec2.CfnEIP(this, 'vpcPublicSubnet2EIP9B3743B1', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet2',
        },
      ],
    });

    if (computeEnvInstanceProfileRole7000C8a9 == null) { throw new Error(`A combination of conditions caused 'computeEnvInstanceProfileRole7000C8a9' to be undefined. Fixit.`); }
    const computeEnvInstanceProfileB98cef4c = new iam.CfnInstanceProfile(this, 'ComputeEnvInstanceProfileB98CEF4C', {
      roles: [
        computeEnvInstanceProfileRole7000C8a9.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const computeEnvSecurityGroup1946Afcc = new ec2.CfnSecurityGroup(this, 'ComputeEnvSecurityGroup1946AFCC', {
      groupDescription: 'aws-stepfunctions-integ/ComputeEnv/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (containerExecutionRole65F36cd2 == null) { throw new Error(`A combination of conditions caused 'containerExecutionRole65F36cd2' to be undefined. Fixit.`); }
    const containerExecutionRoleDefaultPolicy13E3b4c3 = new iam.CfnPolicy(this, 'ContainerExecutionRoleDefaultPolicy13E3B4C3', {
      policyDocument: {
        Statement: [
          {
            Action: [
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
              ':log-group:/aws/batch/job:*',
            ].join(''),
          },
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
        ],
        Version: '2012-10-17',
      },
      policyName: 'ContainerExecutionRoleDefaultPolicy13E3B4C3',
      roles: [
        containerExecutionRole65F36cd2.ref,
      ],
    });

    if (containerExecutionRole65F36cd2 == null) { throw new Error(`A combination of conditions caused 'containerExecutionRole65F36cd2' to be undefined. Fixit.`); }
    const jobDefinition24Ffe3ed = new batch.CfnJobDefinition(this, 'JobDefinition24FFE3ED', {
      containerProperties: {
        environment: [
        ],
        executionRoleArn: containerExecutionRole65F36cd2.attrArn,
        image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:8b518243ecbfcfd08b4734069e7e74ff97b7889dfde0a60d16e7bdc96e6c593b`,
        readonlyRootFilesystem: false,
        resourceRequirements: [
          {
            type: 'MEMORY',
            value: '2048',
          },
          {
            type: 'VCPU',
            value: '256',
          },
        ],
      },
      platformCapabilities: [
        'EC2',
      ],
      retryStrategy: {
      },
      timeout: {
      },
      type: 'container',
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet934893E8 = new ec2.CfnSubnet(this, 'vpcPrivateSubnet1Subnet934893E8', {
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
          value: 'aws-stepfunctions-integ/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2Subnet7031C2ba = new ec2.CfnSubnet(this, 'vpcPrivateSubnet2Subnet7031C2BA', {
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
          value: 'aws-stepfunctions-integ/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1Subnet2E65531e = new ec2.CfnSubnet(this, 'vpcPublicSubnet1Subnet2E65531E', {
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
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet009B674f = new ec2.CfnSubnet(this, 'vpcPublicSubnet2Subnet009B674F', {
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
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    const vpcVpcgw7984c166 = new ec2.CfnVPCGatewayAttachment(this, 'vpcVPCGW7984C166', {
      internetGatewayId: vpcIgwe57cbdca.ref,
      vpcId: vpcA2121c38.ref,
    });

    if (computeEnvInstanceProfileB98cef4c == null) { throw new Error(`A combination of conditions caused 'computeEnvInstanceProfileB98cef4c' to be undefined. Fixit.`); }
    if (computeEnvSecurityGroup1946Afcc == null) { throw new Error(`A combination of conditions caused 'computeEnvSecurityGroup1946Afcc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const computeEnv2C40acc2 = new batch.CfnComputeEnvironment(this, 'ComputeEnv2C40ACC2', {
      computeResources: {
        allocationStrategy: 'BEST_FIT_PROGRESSIVE',
        instanceRole: computeEnvInstanceProfileB98cef4c.attrArn,
        instanceTypes: [
          'optimal',
        ],
        maxvCpus: 256,
        minvCpus: 0,
        securityGroupIds: [
          computeEnvSecurityGroup1946Afcc.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet934893E8.ref,
          vpcPrivateSubnet2Subnet7031C2ba.ref,
        ],
        type: 'EC2',
      },
      replaceComputeEnvironment: false,
      state: 'ENABLED',
      type: 'managed',
      updatePolicy: {
      },
    });

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation67945127 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet1RouteTableAssociation67945127', {
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
      subnetId: vpcPrivateSubnet1Subnet934893E8.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation007E94d3 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPrivateSubnet2RouteTableAssociation007E94D3', {
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
      subnetId: vpcPrivateSubnet2Subnet7031C2ba.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute10708846 = new ec2.CfnRoute(this, 'vpcPublicSubnet1DefaultRoute10708846', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
    });
    vpcPublicSubnet1DefaultRoute10708846.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet1RouteTable48A2df9b == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTable48A2df9b' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation5D3f4579 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet1RouteTableAssociation5D3F4579', {
      routeTableId: vpcPublicSubnet1RouteTable48A2df9b.ref,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
    });

    if (vpcIgwe57cbdca == null) { throw new Error(`A combination of conditions caused 'vpcIgwe57cbdca' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcVpcgw7984c166 == null) { throw new Error(`A combination of conditions caused 'vpcVpcgw7984c166' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteA1ec0f60 = new ec2.CfnRoute(this, 'vpcPublicSubnet2DefaultRouteA1EC0F60', {
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcIgwe57cbdca.ref,
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
    });
    vpcPublicSubnet2DefaultRouteA1ec0f60.addDependency(vpcVpcgw7984c166);

    if (vpcPublicSubnet2RouteTableEb40d4cb == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableEb40d4cb' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation21F81b59 = new ec2.CfnSubnetRouteTableAssociation(this, 'vpcPublicSubnet2RouteTableAssociation21F81B59', {
      routeTableId: vpcPublicSubnet2RouteTableEb40d4cb.ref,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
    });

    if (computeEnv2C40acc2 == null) { throw new Error(`A combination of conditions caused 'computeEnv2C40acc2' to be undefined. Fixit.`); }
    const jobQueueEe3ad499 = new batch.CfnJobQueue(this, 'JobQueueEE3AD499', {
      computeEnvironmentOrder: [
        {
          computeEnvironment: computeEnv2C40acc2.attrComputeEnvironmentArn,
          order: 1,
        },
      ],
      priority: 1,
      state: 'ENABLED',
    });

    if (vpcPublicSubnet1DefaultRoute10708846 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute10708846' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eipda49dcbe == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eipda49dcbe' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation5D3f4579 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation5D3f4579' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet2E65531e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet2E65531e' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGateway9C16659e = new ec2.CfnNatGateway(this, 'vpcPublicSubnet1NATGateway9C16659E', {
      allocationId: vpcPublicSubnet1Eipda49dcbe.attrAllocationId,
      subnetId: vpcPublicSubnet1Subnet2E65531e.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1DefaultRoute10708846);
    vpcPublicSubnet1NatGateway9C16659e.addDependency(vpcPublicSubnet1RouteTableAssociation5D3f4579);

    if (vpcPublicSubnet2DefaultRouteA1ec0f60 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteA1ec0f60' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip9b3743b1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip9b3743b1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation21F81b59 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation21F81b59' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet009B674f == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet009B674f' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway9B8ae11a = new ec2.CfnNatGateway(this, 'vpcPublicSubnet2NATGateway9B8AE11A', {
      allocationId: vpcPublicSubnet2Eip9b3743b1.attrAllocationId,
      subnetId: vpcPublicSubnet2Subnet009B674f.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-stepfunctions-integ/vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2DefaultRouteA1ec0f60);
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2RouteTableAssociation21F81b59);

    if (jobQueueEe3ad499 == null) { throw new Error(`A combination of conditions caused 'jobQueueEe3ad499' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: 'batch:SubmitJob',
            Effect: 'Allow',
            Resource: [
              jobQueueEe3ad499.attrJobQueueArn,
              [
                'arn:',
                this.partition,
                ':batch:',
                this.region,
                ':',
                this.account,
                ':job-definition/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'events:DescribeRule',
              'events:PutRule',
              'events:PutTargets',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':rule/StepFunctionsGetEventsForBatchJobsRule',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (vpcPrivateSubnet1RouteTableB41a48cc == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableB41a48cc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGateway9C16659e == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGateway9C16659e' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRoute1Aa8e2e5 = new ec2.CfnRoute(this, 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGateway9C16659e.ref,
      routeTableId: vpcPrivateSubnet1RouteTableB41a48cc.ref,
    });

    if (vpcPrivateSubnet2RouteTable7280F23e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable7280F23e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway9B8ae11a == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway9B8ae11a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteB0e07f99 = new ec2.CfnRoute(this, 'vpcPrivateSubnet2DefaultRouteB0E07F99', {
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway9B8ae11a.ref,
      routeTableId: vpcPrivateSubnet2RouteTable7280F23e.ref,
    });

    if (jobDefinition24Ffe3ed == null) { throw new Error(`A combination of conditions caused 'jobDefinition24Ffe3ed' to be undefined. Fixit.`); }
    if (jobQueueEe3ad499 == null) { throw new Error(`A combination of conditions caused 'jobQueueEe3ad499' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"Start\",\"States\":{\"Start\":{\"Type\":\"Pass\",\"Result\":{\"bar\":\"SomeValue\"},\"Next\":\"Submit Job\"},\"Submit Job\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::batch:submitJob.sync\",\"Parameters\":{\"JobDefinition\":\"',
        jobDefinition24Ffe3ed.ref,
        '\",\"JobName\":\"MyJob\",\"JobQueue\":\"',
        jobQueueEe3ad499.attrJobQueueArn,
        '\",\"Parameters\":{\"foo.$\":\"$.bar\"},\"ContainerOverrides\":{\"Environment\":[{\"Name\":\"key\",\"Value\":\"value\"}],\"ResourceRequirements\":[{\"Type\":\"MEMORY\",\"Value\":\"256\"},{\"Type\":\"VCPU\",\"Value\":\"1\"}]},\"RetryStrategy\":{\"Attempts\":3},\"Tags\":{\"key\":\"value\"},\"Timeout\":{\"AttemptDurationSeconds\":60}}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.jobQueueArn = jobQueueEe3ad499.attrJobQueueArn;
    new cdk.CfnOutput(this, 'CfnOutputJobQueueArn', {
      key: 'JobQueueArn',
      value: this.jobQueueArn!.toString(),
    });
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputStateMachineArn', {
      key: 'StateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

