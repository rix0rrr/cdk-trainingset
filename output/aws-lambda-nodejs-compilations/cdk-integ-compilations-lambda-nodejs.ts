import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface cdk-integ-compilations-lambda-nodejsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-compilations-lambda-nodejs extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-compilations-lambda-nodejsProps = {}) {
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
    const tsdecoratorhandlerServiceRole61E9e52c = new iam.CfnRole(this, 'tsdecoratorhandlerServiceRole61E9E52C', {
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

    const tsdecoratorhandlertsconfigServiceRoleC4ae481e = new iam.CfnRole(this, 'tsdecoratorhandlertsconfigServiceRoleC4AE481E', {
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

    if (tsdecoratorhandlerServiceRole61E9e52c == null) { throw new Error(`A combination of conditions caused 'tsdecoratorhandlerServiceRole61E9e52c' to be undefined. Fixit.`); }
    const tsdecoratorhandlerC8e2f076 = new lambda.CfnFunction(this, 'tsdecoratorhandlerC8E2F076', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '2344c8450ec3c069ed98fedf1714f33c31b9f3c8e0d295ea361224732e1fef37.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tsdecoratorhandlerServiceRole61E9e52c.attrArn,
      runtime: 'nodejs18.x',
    });
    tsdecoratorhandlerC8e2f076.addDependency(tsdecoratorhandlerServiceRole61E9e52c);

    if (tsdecoratorhandlertsconfigServiceRoleC4ae481e == null) { throw new Error(`A combination of conditions caused 'tsdecoratorhandlertsconfigServiceRoleC4ae481e' to be undefined. Fixit.`); }
    const tsdecoratorhandlertsconfig68Ec191e = new lambda.CfnFunction(this, 'tsdecoratorhandlertsconfig68EC191E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '112c693f98d7e411850f8d441167216bdfe392567d99a11e03b6cd921e36398b.zip',
      },
      environment: {
        variables: {
          'AWS_NODEJS_CONNECTION_REUSE_ENABLED': '1',
        },
      },
      handler: 'index.handler',
      role: tsdecoratorhandlertsconfigServiceRoleC4ae481e.attrArn,
      runtime: 'nodejs18.x',
    });
    tsdecoratorhandlertsconfig68Ec191e.addDependency(tsdecoratorhandlertsconfigServiceRoleC4ae481e);
  }
}

