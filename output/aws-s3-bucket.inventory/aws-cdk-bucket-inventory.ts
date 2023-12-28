import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkBucketInventoryProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkBucketInventory extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkBucketInventoryProps = {}) {
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
    const inventoryBucketA869b8cb = new s3.CfnBucket(this, 'InventoryBucketA869B8CB', {
    });
    inventoryBucketA869b8cb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (inventoryBucketA869b8cb == null) { throw new Error(`A combination of conditions caused 'inventoryBucketA869b8cb' to be undefined. Fixit.`); }
    const aVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525Af55d = new s3.CfnBucket(this, 'AVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525AF55D', {
      inventoryConfigurations: [
        {
          destination: {
            bucketArn: inventoryBucketA869b8cb.attrArn,
            format: 'CSV',
          },
          enabled: true,
          id: 'VeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdNameInventory0',
          includedObjectVersions: 'All',
          scheduleFrequency: 'Weekly',
        },
      ],
    });
    aVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525Af55d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (aVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525Af55d == null) { throw new Error(`A combination of conditions caused 'aVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525Af55d' to be undefined. Fixit.`); }
    if (inventoryBucketA869b8cb == null) { throw new Error(`A combination of conditions caused 'inventoryBucketA869b8cb' to be undefined. Fixit.`); }
    const inventoryBucketPolicyEdf94353 = new s3.CfnBucketPolicy(this, 'InventoryBucketPolicyEDF94353', {
      bucket: inventoryBucketA869b8cb.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:PutObject',
            Condition: {
              ArnLike: {
                'aws:SourceArn': aVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongNodeIdName525Af55d.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 's3.amazonaws.com',
            },
            Resource: [
              inventoryBucketA869b8cb.attrArn,
              [
                inventoryBucketA869b8cb.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });
  }
}

