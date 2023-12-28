import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface Awscdkeksclusterwindowsngtestawscdkawsekskubectlproviderac962C42NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetoawscdkeksclusterwindowsngtestKubectlLayer31B52be6Ref: string;
  /**
   */
  readonly referencetoawscdkeksclusterwindowsngtestClusterKubectlHandlerRoleA205e29aArn: string;
  /**
   */
  readonly referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet1Subnet55633596Ref: string;
  /**
   */
  readonly referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet2Subnet8Bb8d3cbRef: string;
  /**
   */
  readonly referencetoawscdkeksclusterwindowsngtestCluster3F744d4aClusterSecurityGroupId: string;
}

export class Awscdkeksclusterwindowsngtestawscdkawsekskubectlproviderac962C42Nested extends cdk.Stack {
  public readonly awscdkeksclusterwindowsngtestawscdkawseksKubectlProviderframeworkonEventCec3aff7Arn;

  public constructor(scope: cdk.App, id: string, props: Awscdkeksclusterwindowsngtestawscdkawsekskubectlproviderac962C42NestedProps) {
    super(scope, id, props);

    // Resources
    const awsCliLayerF44aaf94 = new lambda.CfnLayerVersion(this, 'AwsCliLayerF44AAF94', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
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
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '0f19e51d1e47290d7a33e0b67405e4722942dee4b92b9d29425fccf0d99017c3.zip',
      },
      description: 'onEvent handler for EKS kubectl resource provider',
      handler: 'index.handler',
      layers: [
        awsCliLayerF44aaf94.ref,
        props.referencetoawscdkeksclusterwindowsngtestKubectlLayer31B52be6Ref!,
      ],
      memorySize: 1024,
      role: props.referencetoawscdkeksclusterwindowsngtestClusterKubectlHandlerRoleA205e29aArn!,
      runtime: 'python3.10',
      timeout: 900,
      vpcConfig: {
        securityGroupIds: [
          props.referencetoawscdkeksclusterwindowsngtestCluster3F744d4aClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet1Subnet55633596Ref!,
          props.referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet2Subnet8Bb8d3cbRef!,
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
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'd002370061965c69bc4caf15dddb5eccc9df318933ade6e4fa57cddb81c5abef.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (aws-cdk-eks-cluster-windows-ng-test/@aws-cdk--aws-eks.KubectlProvider/Provider)',
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
          props.referencetoawscdkeksclusterwindowsngtestCluster3F744d4aClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet1Subnet55633596Ref!,
          props.referencetoawscdkeksclusterwindowsngtestVpcPrivateSubnet2Subnet8Bb8d3cbRef!,
        ],
      },
    });
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRoleDefaultPolicy48Cd2133);
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRole9Ff04296);

    // Outputs
    this.awscdkeksclusterwindowsngtestawscdkawseksKubectlProviderframeworkonEventCec3aff7Arn = providerframeworkonEvent83C1d0a7.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawscdkeksclusterwindowsngtestawscdkawseksKubectlProviderframeworkonEventCEC3AFF7Arn', {
      key: 'awscdkeksclusterwindowsngtestawscdkawseksKubectlProviderframeworkonEventCEC3AFF7Arn',
      value: this.awscdkeksclusterwindowsngtestawscdkawseksKubectlProviderframeworkonEventCec3aff7Arn!.toString(),
    });
  }
}

