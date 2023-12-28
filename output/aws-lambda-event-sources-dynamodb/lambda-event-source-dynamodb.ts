import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface lambda-event-source-dynamodbProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class lambda-event-source-dynamodb extends cdk.Stack {
  public readonly outputEventSourceMappingArn;

  public constructor(scope: cdk.App, id: string, props: lambda-event-source-dynamodbProps = {}) {
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
    const fServiceRole3Ac82ee1 = new iam.CfnRole(this, 'FServiceRole3AC82EE1', {
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

    const td925bc7e = new dynamodb.CfnTable(this, 'TD925BC7E', {
      attributeDefinitions: [
        {
          attributeName: 'id',
          attributeType: 'S',
        },
      ],
      keySchema: [
        {
          attributeName: 'id',
          keyType: 'HASH',
        },
      ],
      provisionedThroughput: {
        readCapacityUnits: 5,
        writeCapacityUnits: 5,
      },
      streamSpecification: {
        streamViewType: 'NEW_IMAGE',
      },
    });
    td925bc7e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (td925bc7e == null) { throw new Error(`A combination of conditions caused 'td925bc7e' to be undefined. Fixit.`); }
    const fServiceRoleDefaultPolicy17A19bfa = new iam.CfnPolicy(this, 'FServiceRoleDefaultPolicy17A19BFA', {
      policyDocument: {
        Statement: [
          {
            Action: 'dynamodb:ListStreams',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'dynamodb:DescribeStream',
              'dynamodb:GetRecords',
              'dynamodb:GetShardIterator',
            ],
            Effect: 'Allow',
            Resource: td925bc7e.attrStreamArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'FServiceRoleDefaultPolicy17A19BFA',
      roles: [
        fServiceRole3Ac82ee1.ref,
      ],
    });

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (fServiceRoleDefaultPolicy17A19bfa == null) { throw new Error(`A combination of conditions caused 'fServiceRoleDefaultPolicy17A19bfa' to be undefined. Fixit.`); }
    const fc4345940 = new lambda.CfnFunction(this, 'FC4345940', {
      code: {
        zipFile: 'exports.handler = async function handler(event) {\n    console.log(\'event:\', JSON.stringify(event, undefined, 2));\n    return { event };\n}',
      },
      handler: 'index.handler',
      role: fServiceRole3Ac82ee1.attrArn,
      runtime: 'nodejs18.x',
    });
    fc4345940.addDependency(fServiceRoleDefaultPolicy17A19bfa);
    fc4345940.addDependency(fServiceRole3Ac82ee1);

    if (fc4345940 == null) { throw new Error(`A combination of conditions caused 'fc4345940' to be undefined. Fixit.`); }
    if (td925bc7e == null) { throw new Error(`A combination of conditions caused 'td925bc7e' to be undefined. Fixit.`); }
    const fDynamoDbEventSourcelambdaeventsourcedynamodbT7967476ae652da48 = new lambda.CfnEventSourceMapping(this, 'FDynamoDBEventSourcelambdaeventsourcedynamodbT7967476AE652DA48', {
      batchSize: 5,
      eventSourceArn: td925bc7e.attrStreamArn,
      functionName: fc4345940.ref,
      startingPosition: 'TRIM_HORIZON',
      tumblingWindowInSeconds: 60,
    });

    // Outputs
    this.outputEventSourceMappingArn = [
      'arn:',
      this.partition,
      ':lambda:',
      this.region,
      ':',
      this.account,
      ':event-source-mapping:',
      fDynamoDbEventSourcelambdaeventsourcedynamodbT7967476ae652da48.ref,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputOutputEventSourceMappingArn', {
      key: 'OutputEventSourceMappingArn',
      value: this.outputEventSourceMappingArn!.toString(),
    });
  }
}

