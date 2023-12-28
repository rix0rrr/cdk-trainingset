import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface s3-bucket-routingProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class s3-bucket-routing extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: s3-bucket-routingProps = {}) {
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

