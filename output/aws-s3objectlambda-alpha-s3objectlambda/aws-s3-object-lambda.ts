import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3objectlambda from 'aws-cdk-lib/aws-s3objectlambda';

export interface AwsS3ObjectLambdaProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsS3ObjectLambda extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsS3ObjectLambdaProps = {}) {
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
    const myBucketF68f3ff0 = new s3.CfnBucket(this, 'MyBucketF68F3FF0', {
    });
    myBucketF68f3ff0.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const myFunction1ServiceRole9852B06b = new iam.CfnRole(this, 'MyFunction1ServiceRole9852B06B', {
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

    const myFunction2ServiceRole07E5be0e = new iam.CfnRole(this, 'MyFunction2ServiceRole07E5BE0E', {
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

    if (myFunction1ServiceRole9852B06b == null) { throw new Error(`A combination of conditions caused 'myFunction1ServiceRole9852B06b' to be undefined. Fixit.`); }
    const myFunction1ServiceRoleDefaultPolicy39556460 = new iam.CfnPolicy(this, 'MyFunction1ServiceRoleDefaultPolicy39556460', {
      policyDocument: {
        Statement: [
          {
            Action: 's3-object-lambda:WriteGetObjectResponse',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunction1ServiceRoleDefaultPolicy39556460',
      roles: [
        myFunction1ServiceRole9852B06b.ref,
      ],
    });

    if (myFunction2ServiceRole07E5be0e == null) { throw new Error(`A combination of conditions caused 'myFunction2ServiceRole07E5be0e' to be undefined. Fixit.`); }
    const myFunction2ServiceRoleDefaultPolicyA79c693e = new iam.CfnPolicy(this, 'MyFunction2ServiceRoleDefaultPolicyA79C693E', {
      policyDocument: {
        Statement: [
          {
            Action: 's3-object-lambda:WriteGetObjectResponse',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyFunction2ServiceRoleDefaultPolicyA79C693E',
      roles: [
        myFunction2ServiceRole07E5be0e.ref,
      ],
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const myObjectLambda1SupportingAccessPoint223B719b = new s3.CfnAccessPoint(this, 'MyObjectLambda1SupportingAccessPoint223B719B', {
      bucket: myBucketF68f3ff0.ref,
    });

    if (myBucketF68f3ff0 == null) { throw new Error(`A combination of conditions caused 'myBucketF68f3ff0' to be undefined. Fixit.`); }
    const myObjectLambda2SupportingAccessPoint6C54778f = new s3.CfnAccessPoint(this, 'MyObjectLambda2SupportingAccessPoint6C54778F', {
      bucket: myBucketF68f3ff0.ref,
    });

    if (myFunction1ServiceRole9852B06b == null) { throw new Error(`A combination of conditions caused 'myFunction1ServiceRole9852B06b' to be undefined. Fixit.`); }
    if (myFunction1ServiceRoleDefaultPolicy39556460 == null) { throw new Error(`A combination of conditions caused 'myFunction1ServiceRoleDefaultPolicy39556460' to be undefined. Fixit.`); }
    const myFunction12A744c2e = new lambda.CfnFunction(this, 'MyFunction12A744C2E', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: myFunction1ServiceRole9852B06b.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunction12A744c2e.addDependency(myFunction1ServiceRoleDefaultPolicy39556460);
    myFunction12A744c2e.addDependency(myFunction1ServiceRole9852B06b);

    if (myFunction2ServiceRole07E5be0e == null) { throw new Error(`A combination of conditions caused 'myFunction2ServiceRole07E5be0e' to be undefined. Fixit.`); }
    if (myFunction2ServiceRoleDefaultPolicyA79c693e == null) { throw new Error(`A combination of conditions caused 'myFunction2ServiceRoleDefaultPolicyA79c693e' to be undefined. Fixit.`); }
    const myFunction2F2a964ca = new lambda.CfnFunction(this, 'MyFunction2F2A964CA', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: myFunction2ServiceRole07E5be0e.attrArn,
      runtime: 'nodejs18.x',
    });
    myFunction2F2a964ca.addDependency(myFunction2ServiceRoleDefaultPolicyA79c693e);
    myFunction2F2a964ca.addDependency(myFunction2ServiceRole07E5be0e);

    if (myFunction12A744c2e == null) { throw new Error(`A combination of conditions caused 'myFunction12A744c2e' to be undefined. Fixit.`); }
    if (myObjectLambda1SupportingAccessPoint223B719b == null) { throw new Error(`A combination of conditions caused 'myObjectLambda1SupportingAccessPoint223B719b' to be undefined. Fixit.`); }
    const myObjectLambda17554Fef4 = new s3objectlambda.CfnAccessPoint(this, 'MyObjectLambda17554FEF4', {
      objectLambdaConfiguration: {
        allowedFeatures: [
          'GetObject-PartNumber',
        ],
        cloudWatchMetricsEnabled: true,
        supportingAccessPoint: myObjectLambda1SupportingAccessPoint223B719b.attrArn,
        transformationConfigurations: [
          {
            actions: [
              'GetObject',
            ],
            contentTransformation: {
              awsLambda: {
                functionArn: myFunction12A744c2e.attrArn,
              },
            },
          },
        ],
      },
    });

    if (myFunction2F2a964ca == null) { throw new Error(`A combination of conditions caused 'myFunction2F2a964ca' to be undefined. Fixit.`); }
    if (myObjectLambda2SupportingAccessPoint6C54778f == null) { throw new Error(`A combination of conditions caused 'myObjectLambda2SupportingAccessPoint6C54778f' to be undefined. Fixit.`); }
    const myObjectLambda2Ccbcaaf7 = new s3objectlambda.CfnAccessPoint(this, 'MyObjectLambda2CCBCAAF7', {
      objectLambdaConfiguration: {
        allowedFeatures: [
          'GetObject-Range',
        ],
        supportingAccessPoint: myObjectLambda2SupportingAccessPoint6C54778f.attrArn,
        transformationConfigurations: [
          {
            actions: [
              'GetObject',
            ],
            contentTransformation: {
              awsLambda: {
                functionArn: myFunction2F2a964ca.attrArn,
                functionPayload: '{\"foo\":10}',
              },
            },
          },
        ],
      },
    });
  }
}

