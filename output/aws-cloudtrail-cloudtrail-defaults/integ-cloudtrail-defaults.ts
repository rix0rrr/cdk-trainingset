import * as cdk from 'aws-cdk-lib';
import * as cloudtrail from 'aws-cdk-lib/aws-cloudtrail';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface integ-cloudtrail-defaultsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-cloudtrail-defaults extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-cloudtrail-defaultsProps = {}) {
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
    const trailS30071f172 = new s3.CfnBucket(this, 'TrailS30071F172', {
    });
    trailS30071f172.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (trailS30071f172 == null) { throw new Error(`A combination of conditions caused 'trailS30071f172' to be undefined. Fixit.`); }
    const trailS3PolicyE42170fe = new s3.CfnBucketPolicy(this, 'TrailS3PolicyE42170FE', {
      bucket: trailS30071f172.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:*',
            Condition: {
              Bool: {
                'aws:SecureTransport': 'false',
              },
            },
            Effect: 'Deny',
            Principal: {
              AWS: '*',
            },
            Resource: [
              trailS30071f172.attrArn,
              [
                trailS30071f172.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: 's3:GetBucketAcl',
            Effect: 'Allow',
            Principal: {
              Service: 'cloudtrail.amazonaws.com',
            },
            Resource: trailS30071f172.attrArn,
          },
          {
            Action: 's3:PutObject',
            Condition: {
              StringEquals: {
                's3:x-amz-acl': 'bucket-owner-full-control',
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'cloudtrail.amazonaws.com',
            },
            Resource: [
              trailS30071f172.attrArn,
              '/AWSLogs/',
              this.account,
              '/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (trailS30071f172 == null) { throw new Error(`A combination of conditions caused 'trailS30071f172' to be undefined. Fixit.`); }
    if (trailS3PolicyE42170fe == null) { throw new Error(`A combination of conditions caused 'trailS3PolicyE42170fe' to be undefined. Fixit.`); }
    const trail022F0cf2 = new cloudtrail.CfnTrail(this, 'Trail022F0CF2', {
      isLogging: true,
      s3BucketName: trailS30071f172.ref,
      enableLogFileValidation: true,
      eventSelectors: [
      ],
      includeGlobalServiceEvents: true,
      isMultiRegionTrail: true,
    });
    trail022F0cf2.addDependency(trailS3PolicyE42170fe);
  }
}

