import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface Awscdkeksclusteripv6Testawscdkawsekskubectlprovider3E7Ced93NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetoawscdkeksclusteripv6testKubectlLayer6Bccecb5Ref: string;
  /**
   */
  readonly referencetoawscdkeksclusteripv6testClusterKubectlHandlerRoleCdf70f2cArn: string;
  /**
   */
  readonly referencetoawscdkeksclusteripv6testVpcPrivateSubnet1Subnet8169B811Ref: string;
  /**
   */
  readonly referencetoawscdkeksclusteripv6testVpcPrivateSubnet2Subnet21732C40Ref: string;
  /**
   */
  readonly referencetoawscdkeksclusteripv6testCluster1C21f8edClusterSecurityGroupId: string;
}

export class Awscdkeksclusteripv6Testawscdkawsekskubectlprovider3E7Ced93Nested extends cdk.Stack {
  public readonly awscdkeksclusteripv6testawscdkawseksKubectlProviderframeworkonEvent383976A6Arn;

  public constructor(scope: cdk.App, id: string, props: Awscdkeksclusteripv6Testawscdkawsekskubectlprovider3E7Ced93NestedProps) {
    super(scope, id, props);

    // Resources
    const awsCliLayerF44aaf94 = new lambda.CfnLayerVersion(this, 'AwsCliLayerF44AAF94', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-us-east-1`,
        s3Key: 'e2277687077a2abf9ae1af1cc9565e6715e2ebb62f79ec53aa75a1af9298f642.zip',
      },
      description: '/opt/awscli/aws',
    });

    const providerframeworkonEventServiceRole9Ff04296 = new iam.CfnRole(this, 'ProviderframeworkonEventServiceRole9FF04296', {
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

    if (awsCliLayerF44aaf94 == null) { throw new Error(`A combination of conditions caused 'awsCliLayerF44aaf94' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-us-east-1`,
        s3Key: '0f19e51d1e47290d7a33e0b67405e4722942dee4b92b9d29425fccf0d99017c3.zip',
      },
      description: 'onEvent handler for EKS kubectl resource provider',
      handler: 'index.handler',
      layers: [
        awsCliLayerF44aaf94.ref,
        props.referencetoawscdkeksclusteripv6testKubectlLayer6Bccecb5Ref!,
      ],
      memorySize: 1024,
      role: props.referencetoawscdkeksclusteripv6testClusterKubectlHandlerRoleCdf70f2cArn!,
      runtime: 'python3.10',
      timeout: 900,
      vpcConfig: {
        securityGroupIds: [
          props.referencetoawscdkeksclusteripv6testCluster1C21f8edClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawscdkeksclusteripv6testVpcPrivateSubnet1Subnet8169B811Ref!,
          props.referencetoawscdkeksclusteripv6testVpcPrivateSubnet2Subnet21732C40Ref!,
        ],
      },
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRole9Ff04296 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRole9Ff04296' to be undefined. Fixit.`); }
    const providerframeworkonEventServiceRoleDefaultPolicy48Cd2133 = new iam.CfnPolicy(this, 'ProviderframeworkonEventServiceRoleDefaultPolicy48CD2133', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              handler886Cb40b.attrArn,
              [
                handler886Cb40b.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderframeworkonEventServiceRoleDefaultPolicy48CD2133',
      roles: [
        providerframeworkonEventServiceRole9Ff04296.ref,
      ],
    });

    if (handler886Cb40b == null) { throw new Error(`A combination of conditions caused 'handler886Cb40b' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRole9Ff04296 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRole9Ff04296' to be undefined. Fixit.`); }
    if (providerframeworkonEventServiceRoleDefaultPolicy48Cd2133 == null) { throw new Error(`A combination of conditions caused 'providerframeworkonEventServiceRoleDefaultPolicy48Cd2133' to be undefined. Fixit.`); }
    const providerframeworkonEvent83C1d0a7 = new lambda.CfnFunction(this, 'ProviderframeworkonEvent83C1D0A7', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-us-east-1`,
        s3Key: 'd002370061965c69bc4caf15dddb5eccc9df318933ade6e4fa57cddb81c5abef.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (aws-cdk-eks-cluster-ipv6-test/@aws-cdk--aws-eks.KubectlProvider/Provider)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': handler886Cb40b.attrArn,
        },
      },
      handler: 'framework.onEvent',
      role: providerframeworkonEventServiceRole9Ff04296.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
      vpcConfig: {
        securityGroupIds: [
          props.referencetoawscdkeksclusteripv6testCluster1C21f8edClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawscdkeksclusteripv6testVpcPrivateSubnet1Subnet8169B811Ref!,
          props.referencetoawscdkeksclusteripv6testVpcPrivateSubnet2Subnet21732C40Ref!,
        ],
      },
    });
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRoleDefaultPolicy48Cd2133);
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRole9Ff04296);

    // Outputs
    this.awscdkeksclusteripv6testawscdkawseksKubectlProviderframeworkonEvent383976A6Arn = providerframeworkonEvent83C1d0a7.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawscdkeksclusteripv6testawscdkawseksKubectlProviderframeworkonEvent383976A6Arn', {
      key: 'awscdkeksclusteripv6testawscdkawseksKubectlProviderframeworkonEvent383976A6Arn',
      value: this.awscdkeksclusteripv6testawscdkawseksKubectlProviderframeworkonEvent383976A6Arn!.toString(),
    });
  }
}

