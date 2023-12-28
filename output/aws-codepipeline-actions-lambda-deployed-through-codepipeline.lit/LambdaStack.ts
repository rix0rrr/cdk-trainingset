import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdastackProps extends cdk.StackProps {
  /**
   */
  readonly lambdaLambdaSourceBucketNameParameter159473Fc: string;
  /**
   */
  readonly lambdaLambdaSourceObjectKeyParameter06573F1d: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Lambdastack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdastackProps) {
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
    const lambdaServiceRoleA8ed4d3b = new iam.CfnRole(this, 'LambdaServiceRoleA8ED4D3B', {
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

    if (lambdaServiceRoleA8ed4d3b == null) { throw new Error(`A combination of conditions caused 'lambdaServiceRoleA8ed4d3b' to be undefined. Fixit.`); }
    const lambdaD247545b = new lambda.CfnFunction(this, 'LambdaD247545B', {
      code: {
        s3Bucket: props.lambdaLambdaSourceBucketNameParameter159473Fc!,
        s3Key: props.lambdaLambdaSourceObjectKeyParameter06573F1d!,
      },
      handler: 'index.handler',
      role: lambdaServiceRoleA8ed4d3b.attrArn,
      runtime: 'nodejs18.x',
    });
    lambdaD247545b.addDependency(lambdaServiceRoleA8ed4d3b);
  }
}

