import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sagemaker from 'aws-cdk-lib/aws-sagemaker';

export interface AwsCdkSagemakerModelProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSagemakerModel extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSagemakerModelProps = {}) {
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

    // Mappings
    const dlcRepositoryAccountMap: Record<string, Record<string, string>> = {
      'ap-east-1': {
        'value': '871362719292',
      },
      'ap-northeast-1': {
        'value': '763104351884',
      },
      'ap-northeast-2': {
        'value': '763104351884',
      },
      'ap-south-1': {
        'value': '763104351884',
      },
      'ap-southeast-1': {
        'value': '763104351884',
      },
      'ap-southeast-2': {
        'value': '763104351884',
      },
      'ca-central-1': {
        'value': '763104351884',
      },
      'cn-north-1': {
        'value': '727897471807',
      },
      'cn-northwest-1': {
        'value': '727897471807',
      },
      'eu-central-1': {
        'value': '763104351884',
      },
      'eu-north-1': {
        'value': '763104351884',
      },
      'eu-west-1': {
        'value': '763104351884',
      },
      'eu-west-2': {
        'value': '763104351884',
      },
      'eu-west-3': {
        'value': '763104351884',
      },
      'me-south-1': {
        'value': '217643126080',
      },
      'sa-east-1': {
        'value': '763104351884',
      },
      'us-east-1': {
        'value': '763104351884',
      },
      'us-east-2': {
        'value': '763104351884',
      },
      'us-west-1': {
        'value': '763104351884',
      },
      'us-west-2': {
        'value': '763104351884',
      },
    };

    // Resources
    const huggingFaceModelRoleDa17da00 = new iam.CfnRole(this, 'HuggingFaceModelRoleDA17DA00', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSageMakerFullAccess',
        ].join(''),
      ],
    });

    const inferencePipelineModelRole6A99c5b3 = new iam.CfnRole(this, 'InferencePipelineModelRole6A99C5B3', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSageMakerFullAccess',
        ].join(''),
      ],
    });

    const primaryContainerModelRole8762F8b9 = new iam.CfnRole(this, 'PrimaryContainerModelRole8762F8B9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'sagemaker.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/AmazonSageMakerFullAccess',
        ].join(''),
      ],
    });

    const vpcb9e5f0b4 = new ec2.CfnVPC(this, 'VPCB9E5F0B4', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      instanceTenancy: 'default',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC',
        },
      ],
    });

    const vpcigwb7e252d3 = new ec2.CfnInternetGateway(this, 'VPCIGWB7E252D3', {
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC',
        },
      ],
    });

    const vpcPublicSubnet1Eip6ad938e8 = new ec2.CfnEIP(this, 'VPCPublicSubnet1EIP6AD938E8', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet1',
        },
      ],
    });

    const vpcPublicSubnet2Eip4947bc00 = new ec2.CfnEIP(this, 'VPCPublicSubnet2EIP4947BC00', {
      domain: 'vpc',
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet2',
        },
      ],
    });

    if (huggingFaceModelRoleDa17da00 == null) { throw new Error(`A combination of conditions caused 'huggingFaceModelRoleDa17da00' to be undefined. Fixit.`); }
    const huggingFaceModelRoleDefaultPolicy50587D35 = new iam.CfnPolicy(this, 'HuggingFaceModelRoleDefaultPolicy50587D35', {
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
              dlcRepositoryAccountMap[this.region]['value'],
              ':repository/huggingface-pytorch-training',
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
      policyName: 'HuggingFaceModelRoleDefaultPolicy50587D35',
      roles: [
        huggingFaceModelRoleDa17da00.ref,
      ],
    });

    if (inferencePipelineModelRole6A99c5b3 == null) { throw new Error(`A combination of conditions caused 'inferencePipelineModelRole6A99c5b3' to be undefined. Fixit.`); }
    const inferencePipelineModelRoleDefaultPolicy2Af0cdcf = new iam.CfnPolicy(this, 'InferencePipelineModelRoleDefaultPolicy2AF0CDCF', {
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
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'InferencePipelineModelRoleDefaultPolicy2AF0CDCF',
      roles: [
        inferencePipelineModelRole6A99c5b3.ref,
      ],
    });

    if (primaryContainerModelRole8762F8b9 == null) { throw new Error(`A combination of conditions caused 'primaryContainerModelRole8762F8b9' to be undefined. Fixit.`); }
    const primaryContainerModelRoleDefaultPolicy56D1c738 = new iam.CfnPolicy(this, 'PrimaryContainerModelRoleDefaultPolicy56D1C738', {
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
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
                '/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':s3:::',
                `cdk-hnb659fds-assets-${this.account}-${this.region}`,
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'PrimaryContainerModelRoleDefaultPolicy56D1C738',
      roles: [
        primaryContainerModelRole8762F8b9.ref,
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const primaryContainerModelSecurityGroup06F42014 = new ec2.CfnSecurityGroup(this, 'PrimaryContainerModelSecurityGroup06F42014', {
      groupDescription: 'aws-cdk-sagemaker-model/PrimaryContainerModel/SecurityGroup',
      securityGroupEgress: [
        {
          cidrIp: '0.0.0.0/0',
          description: 'Allow all outbound traffic by default',
          ipProtocol: '-1',
        },
      ],
      vpcId: vpcb9e5f0b4.ref,
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableBe8a6027 = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet1RouteTableBE8A6027', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1Subnet8Bca10e0 = new ec2.CfnSubnet(this, 'VPCPrivateSubnet1Subnet8BCA10E0', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-sagemaker-model/VPC/PrivateSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTable0A19e10e = new ec2.CfnRouteTable(this, 'VPCPrivateSubnet2RouteTable0A19E10E', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2SubnetCfcdaa7a = new ec2.CfnSubnet(this, 'VPCPrivateSubnet2SubnetCFCDAA7A', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-sagemaker-model/VPC/PrivateSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableFee4b781 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet1RouteTableFEE4B781', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet1SubnetB4246d30 = new ec2.CfnSubnet(this, 'VPCPublicSubnet1SubnetB4246D30', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet1',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTable6F1a15f1 = new ec2.CfnRouteTable(this, 'VPCPublicSubnet2RouteTable6F1A15F1', {
      vpcId: vpcb9e5f0b4.ref,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    const vpcPublicSubnet2Subnet74179F39 = new ec2.CfnSubnet(this, 'VPCPublicSubnet2Subnet74179F39', {
      vpcId: vpcb9e5f0b4.ref,
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
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet2',
        },
      ],
    });

    if (vpcb9e5f0b4 == null) { throw new Error(`A combination of conditions caused 'vpcb9e5f0b4' to be undefined. Fixit.`); }
    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    const vpcvpcgw99b986dc = new ec2.CfnVPCGatewayAttachment(this, 'VPCVPCGW99B986DC', {
      vpcId: vpcb9e5f0b4.ref,
      internetGatewayId: vpcigwb7e252d3.ref,
    });

    if (huggingFaceModelRoleDa17da00 == null) { throw new Error(`A combination of conditions caused 'huggingFaceModelRoleDa17da00' to be undefined. Fixit.`); }
    if (huggingFaceModelRoleDefaultPolicy50587D35 == null) { throw new Error(`A combination of conditions caused 'huggingFaceModelRoleDefaultPolicy50587D35' to be undefined. Fixit.`); }
    const huggingFaceModel8E13daa5 = new sagemaker.CfnModel(this, 'HuggingFaceModel8E13DAA5', {
      executionRoleArn: huggingFaceModelRoleDa17da00.attrArn,
      primaryContainer: {
        image: [
          dlcRepositoryAccountMap[this.region]['value'],
          '.dkr.ecr.',
          this.region,
          '.',
          this.urlSuffix,
          '/huggingface-pytorch-training:1.13.1-transformers4.26.0-gpu-py39-cu117-ubuntu20.04',
        ].join(''),
      },
    });
    huggingFaceModel8E13daa5.addDependency(huggingFaceModelRoleDefaultPolicy50587D35);
    huggingFaceModel8E13daa5.addDependency(huggingFaceModelRoleDa17da00);

    if (inferencePipelineModelRole6A99c5b3 == null) { throw new Error(`A combination of conditions caused 'inferencePipelineModelRole6A99c5b3' to be undefined. Fixit.`); }
    if (inferencePipelineModelRoleDefaultPolicy2Af0cdcf == null) { throw new Error(`A combination of conditions caused 'inferencePipelineModelRoleDefaultPolicy2Af0cdcf' to be undefined. Fixit.`); }
    const inferencePipelineModel3564F141 = new sagemaker.CfnModel(this, 'InferencePipelineModel3564F141', {
      executionRoleArn: inferencePipelineModelRole6A99c5b3.attrArn,
      containers: [
        {
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a`,
        },
        {
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a`,
          modelDataUrl: `https://s3.${this.region}.${this.urlSuffix}/cdk-hnb659fds-assets-${this.account}-${this.region}/126d48fa0e32fbef5078b9d88658b35ad29d4291eb86675a64c75fa4f1338916.gz`,
        },
        {
          image: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a`,
          modelDataUrl: `https://s3.${this.region}.${this.urlSuffix}/cdk-hnb659fds-assets-${this.account}-${this.region}/126d48fa0e32fbef5078b9d88658b35ad29d4291eb86675a64c75fa4f1338916.gz`,
        },
      ],
    });
    inferencePipelineModel3564F141.addDependency(inferencePipelineModelRoleDefaultPolicy2Af0cdcf);
    inferencePipelineModel3564F141.addDependency(inferencePipelineModelRole6A99c5b3);

    if (primaryContainerModelRole8762F8b9 == null) { throw new Error(`A combination of conditions caused 'primaryContainerModelRole8762F8b9' to be undefined. Fixit.`); }
    if (primaryContainerModelRoleDefaultPolicy56D1c738 == null) { throw new Error(`A combination of conditions caused 'primaryContainerModelRoleDefaultPolicy56D1c738' to be undefined. Fixit.`); }
    if (primaryContainerModelSecurityGroup06F42014 == null) { throw new Error(`A combination of conditions caused 'primaryContainerModelSecurityGroup06F42014' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const primaryContainerModel389512Be = new sagemaker.CfnModel(this, 'PrimaryContainerModel389512BE', {
      executionRoleArn: primaryContainerModelRole8762F8b9.attrArn,
      primaryContainer: {
        image: [
          this.account,
          '.dkr.ecr.',
          this.region,
          '.',
          this.urlSuffix,
          '/',
          `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
          ':442a71de95281cb26bd41da567c79060206108b97bdde93cb4ce5f213f50013a',
        ].join(''),
        modelDataUrl: [
          'https://s3.',
          this.region,
          '.',
          this.urlSuffix,
          '/',
          `cdk-hnb659fds-assets-${this.account}-${this.region}`,
          '/126d48fa0e32fbef5078b9d88658b35ad29d4291eb86675a64c75fa4f1338916.gz',
        ].join(''),
      },
      vpcConfig: {
        securityGroupIds: [
          primaryContainerModelSecurityGroup06F42014.attrGroupId,
        ],
        subnets: [
          vpcPrivateSubnet1Subnet8Bca10e0.ref,
          vpcPrivateSubnet2SubnetCfcdaa7a.ref,
        ],
      },
    });
    primaryContainerModel389512Be.addDependency(primaryContainerModelRoleDefaultPolicy56D1c738);
    primaryContainerModel389512Be.addDependency(primaryContainerModelRole8762F8b9);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet1Subnet8Bca10e0 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1Subnet8Bca10e0' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1RouteTableAssociation347902D1 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet1RouteTableAssociation347902D1', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      subnetId: vpcPrivateSubnet1Subnet8Bca10e0.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPrivateSubnet2SubnetCfcdaa7a == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2SubnetCfcdaa7a' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2RouteTableAssociation0C73d413 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPrivateSubnet2RouteTableAssociation0C73D413', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      subnetId: vpcPrivateSubnet2SubnetCfcdaa7a.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet1DefaultRoute91Cef279 = new ec2.CfnRoute(this, 'VPCPublicSubnet1DefaultRoute91CEF279', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet1DefaultRoute91Cef279.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet1RouteTableFee4b781 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableFee4b781' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1RouteTableAssociation0B0896dc = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet1RouteTableAssociation0B0896DC', {
      routeTableId: vpcPublicSubnet1RouteTableFee4b781.ref,
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
    });

    if (vpcigwb7e252d3 == null) { throw new Error(`A combination of conditions caused 'vpcigwb7e252d3' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcvpcgw99b986dc == null) { throw new Error(`A combination of conditions caused 'vpcvpcgw99b986dc' to be undefined. Fixit.`); }
    const vpcPublicSubnet2DefaultRouteB7481bba = new ec2.CfnRoute(this, 'VPCPublicSubnet2DefaultRouteB7481BBA', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      destinationCidrBlock: '0.0.0.0/0',
      gatewayId: vpcigwb7e252d3.ref,
    });
    vpcPublicSubnet2DefaultRouteB7481bba.addDependency(vpcvpcgw99b986dc);

    if (vpcPublicSubnet2RouteTable6F1a15f1 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTable6F1a15f1' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2RouteTableAssociation5A808732 = new ec2.CfnSubnetRouteTableAssociation(this, 'VPCPublicSubnet2RouteTableAssociation5A808732', {
      routeTableId: vpcPublicSubnet2RouteTable6F1a15f1.ref,
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
    });

    if (vpcPublicSubnet1DefaultRoute91Cef279 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1DefaultRoute91Cef279' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1Eip6ad938e8 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1Eip6ad938e8' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1RouteTableAssociation0B0896dc == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1RouteTableAssociation0B0896dc' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1SubnetB4246d30 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1SubnetB4246d30' to be undefined. Fixit.`); }
    const vpcPublicSubnet1NatGatewayE0556630 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet1NATGatewayE0556630', {
      subnetId: vpcPublicSubnet1SubnetB4246d30.ref,
      allocationId: vpcPublicSubnet1Eip6ad938e8.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet1',
        },
      ],
    });
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1DefaultRoute91Cef279);
    vpcPublicSubnet1NatGatewayE0556630.addDependency(vpcPublicSubnet1RouteTableAssociation0B0896dc);

    if (vpcPublicSubnet2DefaultRouteB7481bba == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2DefaultRouteB7481bba' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Eip4947bc00 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Eip4947bc00' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2RouteTableAssociation5A808732 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2RouteTableAssociation5A808732' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2Subnet74179F39 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2Subnet74179F39' to be undefined. Fixit.`); }
    const vpcPublicSubnet2NatGateway3C070193 = new ec2.CfnNatGateway(this, 'VPCPublicSubnet2NATGateway3C070193', {
      subnetId: vpcPublicSubnet2Subnet74179F39.ref,
      allocationId: vpcPublicSubnet2Eip4947bc00.attrAllocationId,
      tags: [
        {
          key: 'Name',
          value: 'aws-cdk-sagemaker-model/VPC/PublicSubnet2',
        },
      ],
    });
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2DefaultRouteB7481bba);
    vpcPublicSubnet2NatGateway3C070193.addDependency(vpcPublicSubnet2RouteTableAssociation5A808732);

    if (vpcPrivateSubnet1RouteTableBe8a6027 == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet1RouteTableBe8a6027' to be undefined. Fixit.`); }
    if (vpcPublicSubnet1NatGatewayE0556630 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet1NatGatewayE0556630' to be undefined. Fixit.`); }
    const vpcPrivateSubnet1DefaultRouteAe1d6490 = new ec2.CfnRoute(this, 'VPCPrivateSubnet1DefaultRouteAE1D6490', {
      routeTableId: vpcPrivateSubnet1RouteTableBe8a6027.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet1NatGatewayE0556630.ref,
    });

    if (vpcPrivateSubnet2RouteTable0A19e10e == null) { throw new Error(`A combination of conditions caused 'vpcPrivateSubnet2RouteTable0A19e10e' to be undefined. Fixit.`); }
    if (vpcPublicSubnet2NatGateway3C070193 == null) { throw new Error(`A combination of conditions caused 'vpcPublicSubnet2NatGateway3C070193' to be undefined. Fixit.`); }
    const vpcPrivateSubnet2DefaultRouteF4f5cfd2 = new ec2.CfnRoute(this, 'VPCPrivateSubnet2DefaultRouteF4F5CFD2', {
      routeTableId: vpcPrivateSubnet2RouteTable0A19e10e.ref,
      destinationCidrBlock: '0.0.0.0/0',
      natGatewayId: vpcPublicSubnet2NatGateway3C070193.ref,
    });
  }
}

