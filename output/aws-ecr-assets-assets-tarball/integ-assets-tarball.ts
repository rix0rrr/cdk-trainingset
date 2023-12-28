import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegAssetsTarballProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegAssetsTarball extends cdk.Stack {
  public readonly imageUri;
  public readonly imageUri2;

  public constructor(scope: cdk.App, id: string, props: IntegAssetsTarballProps = {}) {
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
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
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
    this.imageUri = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:b69dca74eab1d3c881feed06dec897337bffa8e1065e96edd71e0568c444e7b8`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri', {
      key: 'ImageUri',
      value: this.imageUri!.toString(),
    });
    this.imageUri2 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:b69dca74eab1d3c881feed06dec897337bffa8e1065e96edd71e0568c444e7b8`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri2', {
      key: 'ImageUri2',
      value: this.imageUri2!.toString(),
    });
  }
}

