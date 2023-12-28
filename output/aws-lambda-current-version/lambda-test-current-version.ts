import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaTestCurrentVersionProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaTestCurrentVersion extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaTestCurrentVersionProps = {}) {
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
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8811a2632ac5564a08fd269e159298f7e497f259578b0dc5e927a1f48ab24d34.zip',
      },
      role: myLambdaServiceRole4539Ecb6.attrArn,
      description: 'version-hash:729d0f94105773f32ab290a92db57227',
      handler: 'index.main',
      runtime: 'python3.8',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d = new lambda.CfnVersion(this, 'MyLambdaCurrentVersionE7A382CC2ea27ea57e328c1e5be4991bd1bd072d', {
      functionName: myLambdaCce802fb.ref,
    });
    myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d == null) { throw new Error(`A combination of conditions caused 'myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d' to be undefined. Fixit.`); }
    const myLambdaCurrentVersionAliaslive9151E913 = new lambda.CfnAlias(this, 'MyLambdaCurrentVersionAliaslive9151E913', {
      functionName: myLambdaCce802fb.ref,
      functionVersion: myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d.attrVersion,
      name: 'live',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d == null) { throw new Error(`A combination of conditions caused 'myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d' to be undefined. Fixit.`); }
    const myLambdaCurrentVersionEventInvokeConfigD120dc68 = new lambda.CfnEventInvokeConfig(this, 'MyLambdaCurrentVersionEventInvokeConfigD120DC68', {
      functionName: myLambdaCce802fb.ref,
      qualifier: myLambdaCurrentVersionE7a382cc2ea27ea57e328c1e5be4991bd1bd072d.attrVersion,
      maximumRetryAttempts: 1,
    });
  }
}

