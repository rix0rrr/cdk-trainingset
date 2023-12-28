import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface BarstackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Barstack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: BarstackProps = {}) {
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
    const functionServiceRole675Bb04a = new iam.CfnRole(this, 'FunctionServiceRole675BB04A', {
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

    const globalTable89F068b2 = new dynamodb.CfnGlobalTable(this, 'GlobalTable89F068B2', {
      attributeDefinitions: [
        {
          attributeName: 'pk',
          attributeType: 'S',
        },
      ],
      billingMode: 'PAY_PER_REQUEST',
      keySchema: [
        {
          attributeName: 'pk',
          keyType: 'HASH',
        },
      ],
      replicas: [
        {
          region: 'us-west-1',
        },
        {
          region: 'us-east-2',
        },
        {
          region: 'us-east-1',
        },
      ],
      streamSpecification: {
        streamViewType: 'NEW_AND_OLD_IMAGES',
      },
      tableName: 'global-table',
    });
    globalTable89F068b2.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (functionServiceRole675Bb04a == null) { throw new Error(`A combination of conditions caused 'functionServiceRole675Bb04a' to be undefined. Fixit.`); }
    if (globalTable89F068b2 == null) { throw new Error(`A combination of conditions caused 'globalTable89F068b2' to be undefined. Fixit.`); }
    const functionServiceRoleDefaultPolicy2F49994a = new iam.CfnPolicy(this, 'FunctionServiceRoleDefaultPolicy2F49994A', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'dynamodb:BatchWriteItem',
              'dynamodb:DeleteItem',
              'dynamodb:DescribeTable',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:aws:dynamodb:us-west-1:',
              this.account,
              ':table/',
              globalTable89F068b2.ref,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FunctionServiceRoleDefaultPolicy2F49994A',
      roles: [
        functionServiceRole675Bb04a.ref,
      ],
    });

    if (functionServiceRole675Bb04a == null) { throw new Error(`A combination of conditions caused 'functionServiceRole675Bb04a' to be undefined. Fixit.`); }
    if (functionServiceRoleDefaultPolicy2F49994a == null) { throw new Error(`A combination of conditions caused 'functionServiceRoleDefaultPolicy2F49994a' to be undefined. Fixit.`); }
    const function76856677 = new lambda.CfnFunction(this, 'Function76856677', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-us-east-1`,
        s3Key: '7605c78d81246ac4a63b646e0f39ae3e697626ced7d652a031ea3f9dba4c613e.zip',
      },
      functionName: 'global-table-lambda',
      handler: 'index.handler',
      role: functionServiceRole675Bb04a.attrArn,
      runtime: 'python3.11',
    });
    function76856677.addDependency(functionServiceRoleDefaultPolicy2F49994a);
    function76856677.addDependency(functionServiceRole675Bb04a);
  }
}

