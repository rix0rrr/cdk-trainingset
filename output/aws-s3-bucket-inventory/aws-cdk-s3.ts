import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface aws-cdk-s3Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-s3 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-s3Props = {}) {
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
    inventoryBucketA869b8cb.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const secondBucketAc350874 = new s3.CfnBucket(this, 'SecondBucketAC350874', {
    });
    secondBucketAc350874.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (inventoryBucketA869b8cb == null) { throw new Error(`A combination of conditions caused 'inventoryBucketA869b8cb' to be undefined. Fixit.`); }
    if (secondBucketAc350874 == null) { throw new Error(`A combination of conditions caused 'secondBucketAc350874' to be undefined. Fixit.`); }
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
      inventoryConfigurations: [
        {
          destination: {
            bucketArn: inventoryBucketA869b8cb.attrArn,
            format: 'Parquet',
            prefix: 'reports',
          },
          enabled: true,
          id: 'MyBucketInventory0',
          includedObjectVersions: 'All',
          scheduleFrequency: 'Daily',
        },
        {
          destination: {
            bucketArn: secondBucketAc350874.attrArn,
            format: 'CSV',
          },
          enabled: true,
          id: 'MyBucketInventory1',
          includedObjectVersions: 'All',
          scheduleFrequency: 'Weekly',
        },
      ],
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (inventoryBucketA869b8cb == null) { throw new Error(`A combination of conditions caused 'inventoryBucketA869b8cb' to be undefined. Fixit.`); }
    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const inventoryBucketPolicyEdf94353 = new s3.CfnBucketPolicy(this, 'InventoryBucketPolicyEDF94353', {
      bucket: inventoryBucketA869b8cb.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:PutObject',
            Condition: {
              ArnLike: {
                'aws:SourceArn': myBucketF68f3ff0.attrArn,
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
                '/reports*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    if (secondBucketAc350874 == null) { throw new Error(`A combination of conditions caused 'secondBucketAc350874' to be undefined. Fixit.`); }
    const secondBucketPolicy844C4343 = new s3.CfnBucketPolicy(this, 'SecondBucketPolicy844C4343', {
      bucket: secondBucketAc350874.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:PutObject',
            Condition: {
              ArnLike: {
                'aws:SourceArn': myBucketF68f3ff0.attrArn,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 's3.amazonaws.com',
            },
            Resource: [
              secondBucketAc350874.attrArn,
              [
                secondBucketAc350874.attrArn,
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

