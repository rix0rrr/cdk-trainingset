import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface lambda-layer-node-proxy-agent-integ-stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class lambda-layer-node-proxy-agent-integ-stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: lambda-layer-node-proxy-agent-integ-stackProps = {}) {
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
    const lambdaNodeServiceRole22807D7a = new iam.CfnRole(this, 'LambdaNodeServiceRole22807D7A', {
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
      ],
    });

    const nodeProxyAgentLayer924C1971 = new lambda.CfnLayerVersion(this, 'NodeProxyAgentLayer924C1971', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '9202bb21d52e07810fc1da0f6acf2dcb75a40a43a9a2efbcfc9ae39535c6260c.zip',
      },
      description: '/opt/nodejs/node_modules/proxy-agent',
    });

    const providerNodeframeworkonEventServiceRoleA4e95d5e = new iam.CfnRole(this, 'ProviderNodeframeworkonEventServiceRoleA4E95D5E', {
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
      ],
    });

    if (lambdaNodeServiceRole22807D7a == null) { throw new Error(`A combination of conditions caused 'lambdaNodeServiceRole22807D7a' to be undefined. Fixit.`); }
    if (nodeProxyAgentLayer924C1971 == null) { throw new Error(`A combination of conditions caused 'nodeProxyAgentLayer924C1971' to be undefined. Fixit.`); }
    const lambdaNode19Afa38e = new lambda.CfnFunction(this, 'LambdaNode19AFA38E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '345594d759614f5236f4ca12814574d91bda79debb65252f6a19d8d9a316690b.zip',
      },
      handler: 'index.handler',
      layers: [
        nodeProxyAgentLayer924C1971.ref,
      ],
      memorySize: 512,
      role: lambdaNodeServiceRole22807D7a.attrArn,
      runtime: 'nodejs18.x',
      timeout: 30,
    });
    lambdaNode19Afa38e.addDependency(lambdaNodeServiceRole22807D7a);

    if (lambdaNode19Afa38e == null) { throw new Error(`A combination of conditions caused 'lambdaNode19Afa38e' to be undefined. Fixit.`); }
    if (providerNodeframeworkonEventServiceRoleA4e95d5e == null) { throw new Error(`A combination of conditions caused 'providerNodeframeworkonEventServiceRoleA4e95d5e' to be undefined. Fixit.`); }
    const providerNodeframeworkonEventServiceRoleDefaultPolicy87D91d05 = new iam.CfnPolicy(this, 'ProviderNodeframeworkonEventServiceRoleDefaultPolicy87D91D05', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              lambdaNode19Afa38e.attrArn,
              [
                lambdaNode19Afa38e.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'ProviderNodeframeworkonEventServiceRoleDefaultPolicy87D91D05',
      roles: [
        providerNodeframeworkonEventServiceRoleA4e95d5e.ref,
      ],
    });

    if (lambdaNode19Afa38e == null) { throw new Error(`A combination of conditions caused 'lambdaNode19Afa38e' to be undefined. Fixit.`); }
    if (providerNodeframeworkonEventServiceRoleA4e95d5e == null) { throw new Error(`A combination of conditions caused 'providerNodeframeworkonEventServiceRoleA4e95d5e' to be undefined. Fixit.`); }
    if (providerNodeframeworkonEventServiceRoleDefaultPolicy87D91d05 == null) { throw new Error(`A combination of conditions caused 'providerNodeframeworkonEventServiceRoleDefaultPolicy87D91d05' to be undefined. Fixit.`); }
    const providerNodeframeworkonEvent51Eae46a = new lambda.CfnFunction(this, 'ProviderNodeframeworkonEvent51EAE46A', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'd002370061965c69bc4caf15dddb5eccc9df318933ade6e4fa57cddb81c5abef.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (lambda-layer-node-proxy-agent-integ-stack/ProviderNode)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': lambdaNode19Afa38e.attrArn,
        },
      },
      handler: 'framework.onEvent',
      role: providerNodeframeworkonEventServiceRoleA4e95d5e.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerNodeframeworkonEvent51Eae46a.addDependency(providerNodeframeworkonEventServiceRoleDefaultPolicy87D91d05);
    providerNodeframeworkonEvent51Eae46a.addDependency(providerNodeframeworkonEventServiceRoleA4e95d5e);

    if (providerNodeframeworkonEvent51Eae46a == null) { throw new Error(`A combination of conditions caused 'providerNodeframeworkonEvent51Eae46a' to be undefined. Fixit.`); }
    const customResourceNode = new cloudformation.CfnCustomResource(this, 'CustomResourceNode', {
      serviceToken: providerNodeframeworkonEvent51Eae46a.attrArn,
    });
    customResourceNode.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

