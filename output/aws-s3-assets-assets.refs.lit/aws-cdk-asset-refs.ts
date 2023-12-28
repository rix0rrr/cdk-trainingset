import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface aws-cdk-asset-refsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-asset-refs extends cdk.Stack {
  public readonly s3BucketName;
  public readonly s3ObjectKey;
  public readonly s3HttpUrl;
  public readonly s3ObjectUrl;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-asset-refsProps = {}) {
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
    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    const myUserDefaultPolicy7B897426 = new iam.CfnPolicy(this, 'MyUserDefaultPolicy7B897426', {
      policyDocument: {
        Statement: [
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
      policyName: 'MyUserDefaultPolicy7B897426',
      users: [
        myUserDc45028b.ref,
      ],
    });

    // Outputs
    this.s3BucketName = `cdk-hnb659fds-assets-${this.account}-${this.region}`;
    new cdk.CfnOutput(this, 'CfnOutputS3BucketName', {
      key: 'S3BucketName',
      value: this.s3BucketName!.toString(),
    });
    this.s3ObjectKey = '6b84b87243a4a01c592d78e1fd3855c4bfef39328cd0a450cc97e81717fea2a2.zip';
    new cdk.CfnOutput(this, 'CfnOutputS3ObjectKey', {
      key: 'S3ObjectKey',
      value: this.s3ObjectKey!.toString(),
    });
    this.s3HttpUrl = `https://s3.${this.region}.${this.urlSuffix}/cdk-hnb659fds-assets-${this.account}-${this.region}/6b84b87243a4a01c592d78e1fd3855c4bfef39328cd0a450cc97e81717fea2a2.zip`;
    new cdk.CfnOutput(this, 'CfnOutputS3HttpURL', {
      key: 'S3HttpURL',
      value: this.s3HttpUrl!.toString(),
    });
    this.s3ObjectUrl = `s3://cdk-hnb659fds-assets-${this.account}-${this.region}/6b84b87243a4a01c592d78e1fd3855c4bfef39328cd0a450cc97e81717fea2a2.zip`;
    new cdk.CfnOutput(this, 'CfnOutputS3ObjectURL', {
      key: 'S3ObjectURL',
      value: this.s3ObjectUrl!.toString(),
    });
  }
}

