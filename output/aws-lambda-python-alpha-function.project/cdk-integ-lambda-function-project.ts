import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface CdkIntegLambdaFunctionProjectProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLambdaFunctionProject extends cdk.Stack {
  public readonly exportsOutputRefmyhandlerD202fa8e369e8804;

  public constructor(scope: cdk.App, id: string, props: CdkIntegLambdaFunctionProjectProps = {}) {
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
    const sharedDacc02aa = new lambda.CfnLayerVersion(this, 'SharedDACC02AA', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '33674c5088a855fbd87f051a085794b3bd1bd41823d88091874d5f4f1b8ad884.zip',
      },
      compatibleRuntimes: [
        'python3.9',
      ],
    });

    const myhandlerServiceRole77891068 = new iam.CfnRole(this, 'myhandlerServiceRole77891068', {
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

    if (sharedDacc02aa == null) { throw new Error(`A combination of conditions caused 'sharedDacc02aa' to be undefined. Fixit.`); }
    if (myhandlerServiceRole77891068 == null) { throw new Error(`A combination of conditions caused 'myhandlerServiceRole77891068' to be undefined. Fixit.`); }
    const myhandlerD202fa8e = new lambda.CfnFunction(this, 'myhandlerD202FA8E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '708ad240e424cc18dd8b85017f9e1173ac983ddd3b387b9f4df3577ea60e4a65.zip',
      },
      role: myhandlerServiceRole77891068.attrArn,
      handler: 'index.handler',
      layers: [
        sharedDacc02aa.ref,
      ],
      runtime: 'python3.9',
    });
    myhandlerD202fa8e.addDependency(myhandlerServiceRole77891068);

    // Outputs
    this.exportsOutputRefmyhandlerD202fa8e369e8804 = myhandlerD202fa8e.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyhandlerD202FA8E369E8804', {
      key: 'ExportsOutputRefmyhandlerD202FA8E369E8804',
      exportName: 'cdk-integ-lambda-function-project:ExportsOutputRefmyhandlerD202FA8E369E8804',
      value: this.exportsOutputRefmyhandlerD202fa8e369e8804!.toString(),
    });
  }
}

