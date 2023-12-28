import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface S3BucketRoutingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class S3BucketRouting extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: S3BucketRoutingProps = {}) {
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
    const myBucketWithRoutingRulesC6e1caa2 = new s3.CfnBucket(this, 'MyBucketWithRoutingRulesC6E1CAA2', {
      websiteConfiguration: {
        indexDocument: 'index.html',
        routingRules: [
          {
            redirectRule: {
              hostName: 'example.com',
              protocol: 'https',
              replaceKeyWith: '/',
            },
            routingRuleCondition: {
              keyPrefixEquals: '',
            },
          },
        ],
      },
    });
    myBucketWithRoutingRulesC6e1caa2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

