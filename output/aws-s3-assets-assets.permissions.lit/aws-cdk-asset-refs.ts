import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface AwsCdkAssetRefsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkAssetRefs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkAssetRefsProps = {}) {
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
    const myUserGroupDa7a39b2 = new iam.CfnGroup(this, 'MyUserGroupDA7A39B2', {
    });

    if (myUserGroupDa7a39b2 == null) { throw new Error(`A combination of conditions caused 'myUserGroupDa7a39b2' to be undefined. Fixit.`); }
    const myUserGroupDefaultPolicy50C5d742 = new iam.CfnPolicy(this, 'MyUserGroupDefaultPolicy50C5D742', {
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
      policyName: 'MyUserGroupDefaultPolicy50C5D742',
      groups: [
        myUserGroupDa7a39b2.ref,
      ],
    });
  }
}

