import * as cdk from 'aws-cdk-lib';
import * as batch from 'aws-cdk-lib/aws-batch';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as efs from 'aws-cdk-lib/aws-efs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const ecsDockerContainerExecutionRole7Aa53a24 = new iam.CfnRole(this, 'EcsDockerContainerExecutionRole7AA53A24', {
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

    const anotherSecret11974229 = new secretsmanager.CfnSecret(this, 'anotherSecret11974229', {
      generateSecretString: {
      },
    });
    anotherSecret11974229.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myContainerExecutionRoleEbacf86c = new iam.CfnRole(this, 'myContainerExecutionRoleEBACF86C', {
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

    const myFargateContainerExecutionRoleB9eb79ea = new iam.CfnRole(this, 'myFargateContainerExecutionRoleB9EB79EA', {
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

    const myFileSystem1Daa6862 = new efs.CfnFileSystem(this, 'myFileSystem1DAA6862', {
      encrypted: true,
      fileSystemPolicy: {
        Statement: [
          {
            Action: [
              'elasticfilesystem:ClientRootAccess',
              'elasticfilesystem:ClientWrite',
            ],
            Condition: {
              Bool: {
                'elasticfilesystem:AccessedViaMountTarget': 'true',
              },
            },
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
          },
        ],
        Version: '2012-10-17',
      },
      fileSystemTags: [
        {
          key: 'Name',
          value: 'stack/myFileSystem',
        },
      ],
    });
    myFileSystem1Daa6862.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const mySecretE4d0a59c = new secretsmanager.CfnSecret(this, 'mySecretE4D0A59C', {
      generateSecretString: {
      },
    });
    mySecretE4d0a59c.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const ssm85049941 = new ssm.CfnParameter(this, 'ssm85049941', {
      type: 'String',
      value: 'myString',
    });

    const vpcA2121c38 = new ec2.CfnVPC(this, 'vpcA2121C38', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc',
        },
      ],
    });

    const vpcIgwe57cbdca = new ec2.CfnInternetGateway(this, 'vpcIGWE57CBDCA', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc',
        },
      ],
    });

    const vpcPublicSubnet1Eipda49dcbe = new ec2.CfnEIP(this, 'vpcPublicSubnet1EIPDA49DCBE', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip9b3743b1 = new ec2.CfnEIP(this, 'vpcPublicSubnet2EIP9B3743B1', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
    });

    if (ecsDockerContainerExecutionRole7Aa53a24 == null) { throw new Error(`A combination of conditions caused 'ecsDockerContainerExecutionRole7Aa53a24' to be undefined. Fixit.`); }
    const ecsDockerJobDefnF388cfcf = new batch.CfnJobDefinition(this, 'ECSDockerJobDefnF388CFCF', {
      containerProperties: {
        environment: [
        ],
        executionRoleArn: ecsDockerContainerExecutionRole7Aa53a24.attrArn,
        image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:8b518243ecbfcfd08b4734069e7e74ff97b7889dfde0a60d16e7bdc96e6c593b`,
        readonlyRootFilesystem: false,
        resourceRequirements: [
          {
            type: 'MEMORY',
            value: '32768',
          },
          {
            type: 'VCPU',
            value: '16',
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

    if (myFargateContainerExecutionRoleB9eb79ea == null) { throw new Error(`A combination of conditions caused 'myFargateContainerExecutionRoleB9eb79ea' to be undefined. Fixit.`); }
    const ecsFargateJobDefn327Be725 = new batch.CfnJobDefinition(this, 'ECSFargateJobDefn327BE725', {
      containerProperties: {
        environment: [
        ],
        ephemeralStorage: {
          sizeInGiB: 100,
        },
        executionRoleArn: myFargateContainerExecutionRoleB9eb79ea.attrArn,
        fargatePlatformConfiguration: {
          platformVersion: 'LATEST',
        },
        image: 'amazon/amazon-ecs-sample',
        networkConfiguration: {
          assignPublicIp: 'DISABLED',
        },
        readonlyRootFilesystem: false,
        resourceRequirements: [
          {
            type: 'MEMORY',
            value: '32768',
          },
          {
            type: 'VCPU',
            value: '16',
          },
        ],
      },
      jobDefinitionName: 'foofoo',
      parameters: {
        foo: 'bar',
      },
      platformCapabilities: [
        'FARGATE',
      ],
      propagateTags: true,
      retryStrategy: {
        attempts: 5,
        evaluateOnExit: [
          {
            action: 'EXIT',
            onReason: 'CannotPullContainerError:*',
          },
          {
            action: 'RETRY',
            onExitCode: '*',
          },
          {
            action: 'EXIT',
            onExitCode: '40*',
            onReason: 'reason',
            onStatusReason: 'statusreason',
          },
        ],
      },
      schedulingPriority: 10,
      timeout: {
        attemptDurationSeconds: 600,
      },
      type: 'container',
    });

    if (anotherSecret11974229 == null) { throw new Error(`A combination of conditions caused 'anotherSecret11974229' to be undefined. Fixit.`); }
    if (myContainerExecutionRoleEbacf86c == null) { throw new Error(`A combination of conditions caused 'myContainerExecutionRoleEbacf86c' to be undefined. Fixit.`); }
    if (myFileSystem1Daa6862 == null) { throw new Error(`A combination of conditions caused 'myFileSystem1Daa6862' to be undefined. Fixit.`); }
    if (mySecretE4d0a59c == null) { throw new Error(`A combination of conditions caused 'mySecretE4d0a59c' to be undefined. Fixit.`); }
    if (ssm85049941 == null) { throw new Error(`A combination of conditions caused 'ssm85049941' to be undefined. Fixit.`); }
    const ecsJobDefn48425E25 = new batch.CfnJobDefinition(this, 'ECSJobDefn48425E25', {
      containerProperties: {
        environment: [
          {
            name: 'foo',
            value: 'bar',
          },
        ],
        executionRoleArn: myContainerExecutionRoleEbacf86c.attrArn,
        image: 'amazon/amazon-ecs-sample',
        mountPoints: [
          {
            containerPath: 'ahhh',
            sourceVolume: 'volumeName',
          },
          {
            containerPath: '/my/path',
            sourceVolume: 'efsVolume',
          },
        ],
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
          {
            type: 'GPU',
            value: '12',
          },
        ],
        secrets: [
          {
            name: 'MY_SECRET_ENV_VAR',
            valueFrom: mySecretE4d0a59c.ref,
          },
          {
            name: 'ANOTHER_ONE',
            valueFrom: [
              anotherSecret11974229.ref,
              '::bar:foo',
            ].join(''),
          },
          {
            name: 'SSM_TIME',
            valueFrom: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/',
              ssm85049941.ref,
            ].join(''),
          },
        ],
        ulimits: [
          {
            hardLimit: 50,
            name: 'core',
            softLimit: 10,
          },
        ],
        volumes: [
          {
            host: {
              sourcePath: '/foo/bar',
            },
            name: 'volumeName',
          },
          {
            efsVolumeConfiguration: {
              fileSystemId: myFileSystem1Daa6862.ref,
            },
            name: 'efsVolume',
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

    if (ecsDockerContainerExecutionRole7Aa53a24 == null) { throw new Error(`A combination of conditions caused 'ecsDockerContainerExecutionRole7Aa53a24' to be undefined. Fixit.`); }
    const ecsDockerContainerExecutionRoleDefaultPolicyF58c2301 = new iam.CfnPolicy(this, 'EcsDockerContainerExecutionRoleDefaultPolicyF58C2301', {
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
      policyName: 'EcsDockerContainerExecutionRoleDefaultPolicyF58C2301',
      roles: [
        ecsDockerContainerExecutionRole7Aa53a24.ref,
      ],
    });

    if (anotherSecret11974229 == null) { throw new Error(`A combination of conditions caused 'anotherSecret11974229' to be undefined. Fixit.`); }
    if (myContainerExecutionRoleEbacf86c == null) { throw new Error(`A combination of conditions caused 'myContainerExecutionRoleEbacf86c' to be undefined. Fixit.`); }
    if (mySecretE4d0a59c == null) { throw new Error(`A combination of conditions caused 'mySecretE4d0a59c' to be undefined. Fixit.`); }
    if (ssm85049941 == null) { throw new Error(`A combination of conditions caused 'ssm85049941' to be undefined. Fixit.`); }
    const myContainerExecutionRoleDefaultPolicy42Da929e = new iam.CfnPolicy(this, 'myContainerExecutionRoleDefaultPolicy42DA929E', {
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
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: [
              anotherSecret11974229.ref,
              mySecretE4d0a59c.ref,
            ],
          },
          {
            Action: [
              'ssm:DescribeParameters',
              'ssm:GetParameter',
              'ssm:GetParameterHistory',
              'ssm:GetParameters',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ssm:',
              this.region,
              ':',
              this.account,
              ':parameter/',
              ssm85049941.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'myContainerExecutionRoleDefaultPolicy42DA929E',
      roles: [
        myContainerExecutionRoleEbacf86c.ref,
      ],
    });

    if (myFargateContainerExecutionRoleB9eb79ea == null) { throw new Error(`A combination of conditions caused 'myFargateContainerExecutionRoleB9eb79ea' to be undefined. Fixit.`); }
    const myFargateContainerExecutionRoleDefaultPolicy4Ff431bf = new iam.CfnPolicy(this, 'myFargateContainerExecutionRoleDefaultPolicy4FF431BF', {
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
        ],
        Version: '2012-10-17',
      },
      policyName: 'myFargateContainerExecutionRoleDefaultPolicy4FF431BF',
      roles: [
        myFargateContainerExecutionRoleB9eb79ea.ref,
      ],
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const myFileSystemEfsSecurityGroup5809542D = new ec2.CfnSecurityGroup(this, 'myFileSystemEfsSecurityGroup5809542D', {
      groupDescription: 'stack/myFileSystem/EfsSecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      tags: [
        {
          key: 'Name',
          value: 'stack/myFileSystem',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableB41a48cc = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet1RouteTableB41A48CC', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PrivateSubnet1',
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
          value: 'stack/vpc/PrivateSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable7280F23e = new ec2.CfnRouteTable(this, 'vpcPrivateSubnet2RouteTable7280F23E', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PrivateSubnet2',
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
          value: 'stack/vpc/PrivateSubnet2',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTable48A2df9b = new ec2.CfnRouteTable(this, 'vpcPublicSubnet1RouteTable48A2DF9B', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet1',
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
          value: 'stack/vpc/PublicSubnet1',
        },
      ],
      vpcId: vpcA2121c38.ref,
    });

    if (vpcA2121c38 == null) { throw new Error(`A combination of conditions caused 'vpcA2121c38' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableEb40d4cb = new ec2.CfnRouteTable(this, 'vpcPublicSubnet2RouteTableEB40D4CB', {
      tags: [
        {
          key: 'Name',
          value: 'stack/vpc/PublicSubnet2',
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
          value: 'stack/vpc/PublicSubnet2',
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

    if (myFileSystem1Daa6862 == null) { throw new Error(`A combination of conditions caused 'myFileSystem1Daa6862' to be undefined. Fixit.`); }
    if (myFileSystemEfsSecurityGroup5809542D == null) { throw new Error(`A combination of conditions caused 'myFileSystemEfsSecurityGroup5809542D' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet934893E8 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet934893E8' to be undefined. Fixit.`); }
    const myFileSystemEfsMountTargetPrivateSubnet1752908A7 = new efs.CfnMountTarget(this, 'myFileSystemEfsMountTargetPrivateSubnet1752908A7', {
      fileSystemId: myFileSystem1Daa6862.ref,
      securityGroups: [
        myFileSystemEfsSecurityGroup5809542D.attrGroupId,
      ],
      subnetId: vpcPrivateSubnet1Subnet934893E8.ref,
    });

    if (myFileSystem1Daa6862 == null) { throw new Error(`A combination of conditions caused 'myFileSystem1Daa6862' to be undefined. Fixit.`); }
    if (myFileSystemEfsSecurityGroup5809542D == null) { throw new Error(`A combination of conditions caused 'myFileSystemEfsSecurityGroup5809542D' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2Subnet7031C2ba == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2Subnet7031C2ba' to be undefined. Fixit.`); }
    const myFileSystemEfsMountTargetPrivateSubnet245A93748 = new efs.CfnMountTarget(this, 'myFileSystemEfsMountTargetPrivateSubnet245A93748', {
      fileSystemId: myFileSystem1Daa6862.ref,
      securityGroups: [
        myFileSystemEfsSecurityGroup5809542D.attrGroupId,
      ],
      subnetId: vpcPrivateSubnet2Subnet7031C2ba.ref,
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
          value: 'stack/vpc/PublicSubnet1',
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
          value: 'stack/vpc/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2DefaultRouteA1ec0f60);
    vpcPublicSubnet2NatGateway9B8ae11a.addDependency(vpcPublicSubnet2RouteTableAssociation21F81b59);

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
  }
}

