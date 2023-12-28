import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface AwsCdkLayerVersion1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkLayerVersion1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkLayerVersion1Props = {}) {
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
    const myLayer38944Fa5 = new lambda.CfnLayerVersion(this, 'MyLayer38944FA5', {
      compatibleRuntimes: [
        'nodejs18.x',
      ],
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8811a2632ac5564a08fd269e159298f7e497f259578b0dc5e927a1f48ab24d34.zip',
      },
      description: 'A layer to test the L2 construct',
      licenseInfo: 'Apache-2.0',
    });

    const myLayeredLambdaServiceRole1A7dc118 = new iam.CfnRole(this, 'MyLayeredLambdaServiceRole1A7DC118', {
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

    if (myLayer38944Fa5 == null) { throw new Error(`A combination of conditions caused 'myLayer38944Fa5' to be undefined. Fixit.`); }
    if (myLayeredLambdaServiceRole1A7dc118 == null) { throw new Error(`A combination of conditions caused 'myLayeredLambdaServiceRole1A7dc118' to be undefined. Fixit.`); }
    const myLayeredLambda9A3008d1 = new lambda.CfnFunction(this, 'MyLayeredLambda9A3008D1', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      layers: [
        myLayer38944Fa5.ref,
      ],
      role: myLayeredLambdaServiceRole1A7dc118.attrArn,
      runtime: 'nodejs18.x',
    });
    myLayeredLambda9A3008d1.addDependency(myLayeredLambdaServiceRole1A7dc118);

    if (myLayer38944Fa5 == null) { throw new Error(`A combination of conditions caused 'myLayer38944Fa5' to be undefined. Fixit.`); }
    const myLayerremoteaccountgrant715E5d21 = new lambda.CfnLayerVersionPermission(this, 'MyLayerremoteaccountgrant715E5D21', {
      action: 'lambda:GetLayerVersion',
      layerVersionArn: myLayer38944Fa5.ref,
      principal: this.account,
    });
  }
}

