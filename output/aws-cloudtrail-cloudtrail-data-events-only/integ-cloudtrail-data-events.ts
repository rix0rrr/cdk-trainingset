import * as cdk from 'aws-cdk-lib';
import * as cloudtrail from 'aws-cdk-lib/aws-cloudtrail';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface integ-cloudtrail-data-eventsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-cloudtrail-data-events extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-cloudtrail-data-eventsProps = {}) {
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
    const bucket83908E77 = new s3.CfnBucket(this, 'Bucket83908E77', {
    });
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const lambdaFunctionServiceRoleC555a460 = new iam.CfnRole(this, 'LambdaFunctionServiceRoleC555A460', {
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

    const trailS30071f172 = new s3.CfnBucket(this, 'TrailS30071F172', {
    });
    trailS30071f172.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (lambdaFunctionServiceRoleC555a460 == null) { throw new Error(`A combination of conditions caused 'lambdaFunctionServiceRoleC555a460' to be undefined. Fixit.`); }
    const lambdaFunctionBf21e41f = new lambda.CfnFunction(this, 'LambdaFunctionBF21E41F', {
      code: {
        zipFile: 'exports.handler = {}',
      },
      role: lambdaFunctionServiceRoleC555a460.attrArn,
      handler: 'hello.handler',
      runtime: 'nodejs18.x',
    });
    lambdaFunctionBf21e41f.addDependency(lambdaFunctionServiceRoleC555a460);

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

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (lambdaFunctionBf21e41f == null) { throw new Error(`A combination of conditions caused 'lambdaFunctionBf21e41f' to be undefined. Fixit.`); }
    if (trailS30071f172 == null) { throw new Error(`A combination of conditions caused 'trailS30071f172' to be undefined. Fixit.`); }
    if (trailS3PolicyE42170fe == null) { throw new Error(`A combination of conditions caused 'trailS3PolicyE42170fe' to be undefined. Fixit.`); }
    const trail022F0cf2 = new cloudtrail.CfnTrail(this, 'Trail022F0CF2', {
      isLogging: true,
      s3BucketName: trailS30071f172.ref,
      enableLogFileValidation: true,
      eventSelectors: [
        {
          dataResources: [
            {
              type: 'AWS::Lambda::Function',
              values: [
                lambdaFunctionBf21e41f.attrArn,
              ],
            },
          ],
          includeManagementEvents: false,
        },
        {
          dataResources: [
            {
              type: 'AWS::S3::Object',
              values: [
                [
                  bucket83908E77.attrArn,
                  '/',
                ].join(''),
              ],
            },
          ],
          includeManagementEvents: false,
        },
      ],
      includeGlobalServiceEvents: true,
      isMultiRegionTrail: true,
    });
    trail022F0cf2.addDependency(trailS3PolicyE42170fe);
  }
}

