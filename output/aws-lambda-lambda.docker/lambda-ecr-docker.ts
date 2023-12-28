import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaEcrDockerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaEcrDocker extends cdk.Stack {
  public readonly exportsOutputRefMyLambdaCce802fbb974561c;

  public constructor(scope: cdk.App, id: string, props: LambdaEcrDockerProps = {}) {
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
        imageUri: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:768d7b6c1d41b85135f498fe0cca69fea410be3c3322c69cf08690aaad29a610`,
      },
      role: myLambdaServiceRole4539Ecb6.attrArn,
      packageType: 'Image',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    // Outputs
    this.exportsOutputRefMyLambdaCce802fbb974561c = myLambdaCce802fb.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefMyLambdaCCE802FBB974561C', {
      key: 'ExportsOutputRefMyLambdaCCE802FBB974561C',
      exportName: 'lambda-ecr-docker:ExportsOutputRefMyLambdaCCE802FBB974561C',
      value: this.exportsOutputRefMyLambdaCce802fbb974561c!.toString(),
    });
  }
}

