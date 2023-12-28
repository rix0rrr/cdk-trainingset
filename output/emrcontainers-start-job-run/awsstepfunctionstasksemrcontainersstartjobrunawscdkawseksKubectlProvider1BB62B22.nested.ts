import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProvider1BB62B22.nestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterKubectlHandlerRole965Aea8dArn: string;
  /**
   */
  readonly referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet1SubnetFe45eeebRef: string;
  /**
   */
  readonly referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet2Subnet5042E9f4Ref: string;
  /**
   */
  readonly referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtestekscluster59B73e28ClusterSecurityGroupId: string;
}

export class awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProvider1BB62B22.nested extends cdk.Stack {
  public readonly awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProviderframeworkonEventB25eddaeArn;

  public constructor(scope: cdk.App, id: string, props: awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProvider1BB62B22.nestedProps) {
    super(scope, id, props);

    // Resources
    const awsCliLayerF44aaf94 = new lambda.CfnLayerVersion(this, 'AwsCliLayerF44AAF94', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3fb6287214999ddeafa7cd0e3e58bc5144c8678bb720f3b5e45e8fd32f333eb3.zip',
      },
      description: '/opt/awscli/aws',
    });

    const kubectlLayer600207B5 = new lambda.CfnLayerVersion(this, 'KubectlLayer600207B5', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '7e5f48d1e79c915595d938c932b6f0101715a162780d01a55845367e014fbcda.zip',
      },
      description: '/opt/kubectl/kubectl and /opt/helm/helm',
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
    if (kubectlLayer600207B5 == null) { throw new Error(`A combination of conditions caused 'kubectlLayer600207B5' to be undefined. Fixit.`); }
    const handler886Cb40b = new lambda.CfnFunction(this, 'Handler886CB40B', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '096b0b696556ba7cc2ef5b5aedafc3b30654d446f5fc1a0258831f858b87adaf.zip',
      },
      description: 'onEvent handler for EKS kubectl resource provider',
      handler: 'index.handler',
      layers: [
        awsCliLayerF44aaf94.ref,
        kubectlLayer600207B5.ref,
      ],
      memorySize: 1024,
      role: props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterKubectlHandlerRole965Aea8dArn!,
      runtime: 'python3.10',
      timeout: 900,
      vpcConfig: {
        securityGroupIds: [
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtestekscluster59B73e28ClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet1SubnetFe45eeebRef!,
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet2Subnet5042E9f4Ref!,
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
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (aws-stepfunctions-tasks-emr-containers-start-job-run/@aws-cdk--aws-eks.KubectlProvider/Provider)',
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
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtestekscluster59B73e28ClusterSecurityGroupId!,
        ],
        subnetIds: [
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet1SubnetFe45eeebRef!,
          props.referencetoawsstepfunctionstasksemrcontainersstartjobrunintegrationtesteksclusterDefaultVpcPrivateSubnet2Subnet5042E9f4Ref!,
        ],
      },
    });
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRoleDefaultPolicy48Cd2133);
    providerframeworkonEvent83C1d0a7.addDependency(providerframeworkonEventServiceRole9Ff04296);

    // Outputs
    this.awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProviderframeworkonEventB25eddaeArn = providerframeworkonEvent83C1d0a7.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputawsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProviderframeworkonEventB25EDDAEArn', {
      key: 'awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProviderframeworkonEventB25EDDAEArn',
      value: this.awsstepfunctionstasksemrcontainersstartjobrunawscdkawseksKubectlProviderframeworkonEventB25eddaeArn!.toString(),
    });
  }
}

