import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as emr from 'aws-cdk-lib/aws-emr';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsCdkEmrAddStepRuntimeRoleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkEmrAddStepRuntimeRole extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkEmrAddStepRuntimeRoleProps = {}) {
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
    const emrCreateClusterInstanceRoleC80466f5 = new iam.CfnRole(this, 'EmrCreateClusterInstanceRoleC80466F5', {
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
    });

    const emrCreateClusterServiceRole5251910D = new iam.CfnRole(this, 'EmrCreateClusterServiceRole5251910D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'elasticmapreduce.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEMRServicePolicy_v2',
        ].join(''),
      ],
    });

    const emrSecurityConfiguration = new emr.CfnSecurityConfiguration(this, 'EmrSecurityConfiguration', {
      name: 'AddStepRuntimeRoleSecConfig',
      securityConfiguration: {
        AuthorizationConfiguration: {
          IAMConfiguration: {
            EnableApplicationScopedIAMRole: true,
            ApplicationScopedIAMRoleConfiguration: {
              PropagateSourceIdentity: true,
            },
          },
          LakeFormationConfiguration: {
            AuthorizedSessionTagValue: 'Amazon EMR',
          },
        },
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

    const vpc8378Eb38 = new ec2.CfnVPC(this, 'Vpc8378EB38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc',
        },
      ],
    });

    const vpcIgwd7ba715c = new ec2.CfnInternetGateway(this, 'VpcIGWD7BA715C', {
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipd7e02669 = new ec2.CfnEIP(this, 'VpcPublicSubnet1EIPD7E02669', {
      domain: 'vpc',
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip3c605a87 = new ec2.CfnEIP(this, 'VpcPublicSubnet2EIP3C605A87', {
      domain: 'vpc',
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet2',
        },
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    const emrCreateClusterInstanceProfileC1729180 = new iam.CfnInstanceProfile(this, 'EmrCreateClusterInstanceProfileC1729180', {
      instanceProfileName: emrCreateClusterInstanceRoleC80466f5.ref,
      roles: [
        emrCreateClusterInstanceRoleC80466f5.ref,
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    const emrCreateClusterServiceRoleDefaultPolicyA8b4fa32 = new iam.CfnPolicy(this, 'EmrCreateClusterServiceRoleDefaultPolicyA8B4FA32', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: emrCreateClusterInstanceRoleC80466f5.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EmrCreateClusterServiceRoleDefaultPolicyA8B4FA32',
      roles: [
        emrCreateClusterServiceRole5251910D.ref,
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    const emrExecutionRoleF584820f = new iam.CfnRole(this, 'EmrExecutionRoleF584820F', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: emrCreateClusterInstanceRoleC80466f5.attrArn,
            },
          },
          {
            Action: 'sts:SetSourceIdentity',
            Effect: 'Allow',
            Principal: {
              AWS: emrCreateClusterInstanceRoleC80466f5.attrArn,
            },
          },
          {
            Action: 'sts:TagSession',
            Condition: {
              StringEquals: {
                'aws:RequestTag/LakeFormationAuthorizedCaller': 'Amazon EMR',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: emrCreateClusterInstanceRoleC80466f5.attrArn,
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'elasticmapreduce:AddTags',
              'elasticmapreduce:DescribeCluster',
              'elasticmapreduce:RunJobFlow',
              'elasticmapreduce:TerminateJobFlows',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: [
              emrCreateClusterInstanceRoleC80466f5.attrArn,
              emrCreateClusterServiceRole5251910D.attrArn,
            ],
          },
          {
            Action: [
              'elasticmapreduce:AddJobFlowSteps',
              'elasticmapreduce:AddTags',
              'elasticmapreduce:CancelSteps',
              'elasticmapreduce:DescribeCluster',
              'elasticmapreduce:DescribeStep',
              'elasticmapreduce:TerminateJobFlows',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':elasticmapreduce:',
              this.region,
              ':',
              this.account,
              ':cluster/*',
            ].join(''),
          },
          {
            Action: [
              'events:DescribeRule',
              'events:PutRule',
              'events:PutTargets',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':events:',
                this.region,
                ':',
                this.account,
                ':rule/StepFunctionsGetEventForEMRAddJobFlowStepsRule',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':events:',
                this.region,
                ':',
                this.account,
                ':rule/StepFunctionsGetEventForEMRRunJobFlowRule',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':events:',
                this.region,
                ':',
                this.account,
                ':rule/StepFunctionsGetEventForEMRTerminateJobFlowsRule',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB2c5b500 = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet1RouteTableB2C5B500', {
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PrivateSubnet1',
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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableA678073b = new ec2.CfnRouteTable(this, 'VpcPrivateSubnet2RouteTableA678073B', {
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PrivateSubnet2',
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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable6C95e38e = new ec2.CfnRouteTable(this, 'VpcPublicSubnet1RouteTable6C95E38E', {
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet1',
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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet1',
        },
      ],
      vpcId: vpc8378Eb38.ref,
    });

    if (vpc8378Eb38 == null) { throw new Error(`A combination of conditions caused 'vpc8378Eb38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable94F7e489 = new ec2.CfnRouteTable(this, 'VpcPublicSubnet2RouteTable94F7E489', {
      tags: [
        {
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet2',
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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet2',
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

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    if (emrExecutionRoleF584820f == null) { throw new Error(`A combination of conditions caused 'emrExecutionRoleF584820f' to be undefined. Fixit.`); }
    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Subnet5C2d37c4 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Subnet5C2d37c4' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"EmrCreateCluster\",\"States\":{\"EmrCreateCluster\":{\"Next\":\"EmrAddStep\",\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::elasticmapreduce:createCluster.sync\",\"Parameters\":{\"Instances\":{\"Ec2SubnetId\":\"',
        vpcPublicSubnet1Subnet5C2d37c4.ref,
        '\",\"InstanceFleets\":[{\"InstanceFleetType\":\"MASTER\",\"InstanceTypeConfigs\":[{\"InstanceType\":\"m5.xlarge\"}],\"TargetOnDemandCapacity\":1}],\"KeepJobFlowAliveWhenNoSteps\":true},\"JobFlowRole\":\"',
        emrCreateClusterInstanceRoleC80466f5.ref,
        '\",\"Name\":\"Cluster\",\"ServiceRole\":\"',
        emrCreateClusterServiceRole5251910D.ref,
        '\",\"Applications\":[{\"Name\":\"Spark\"}],\"ReleaseLabel\":\"emr-6.13.0\",\"SecurityConfiguration\":\"AddStepRuntimeRoleSecConfig\",\"Tags\":[{\"Key\":\"Key\",\"Value\":\"Value\"},{\"Key\":\"for-use-with-amazon-emr-managed-policies\",\"Value\":\"true\"}],\"VisibleToAllUsers\":true}},\"EmrAddStep\":{\"Next\":\"EmrTerminateCluster\",\"Type\":\"Task\",\"ResultPath\":null,\"Resource\":\"arn:',
        this.partition,
        ':states:::elasticmapreduce:addStep.sync\",\"Parameters\":{\"ClusterId.$\":\"$.Cluster.Id\",\"ExecutionRoleArn\":\"',
        emrExecutionRoleF584820f.attrArn,
        '\",\"Step\":{\"Name\":\"AddStepRuntimeRoleIntTest\",\"ActionOnFailure\":\"TERMINATE_CLUSTER\",\"HadoopJarStep\":{\"Jar\":\"command-runner.jar\",\"Args\":[\"spark-example\",\"SparkPi\",\"1\"]}}}},\"EmrTerminateCluster\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::elasticmapreduce:terminateCluster.sync\",\"Parameters\":{\"ClusterId.$\":\"$.Cluster.Id\"}}}}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet1',
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
          key: 'for-use-with-amazon-emr-managed-policies',
          value: 'true',
        },
        {
          key: 'Name',
          value: 'aws-cdk-emr-add-step-runtime-role/Vpc/PublicSubnet2',
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
  }
}

