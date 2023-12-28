import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-stepfunctions-tasks-athena-start-query-execution-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-stepfunctions-tasks-athena-start-query-execution-integ extends cdk.Stack {
  public readonly stateMachineArn;

  public constructor(scope: cdk.App, id: string, props: aws-stepfunctions-tasks-athena-start-query-execution-integProps = {}) {
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
    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachineRoleDefaultPolicyDf1e6607 = new iam.CfnPolicy(this, 'StateMachineRoleDefaultPolicyDF1E6607', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'athena:getDataCatalog',
              'athena:getQueryExecution',
              'athena:startQueryExecution',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':athena:',
                this.region,
                ':',
                this.account,
                ':datacatalog/AwsDataCatalog',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':athena:',
                this.region,
                ':',
                this.account,
                ':workgroup/primary',
              ].join(''),
            ],
          },
          {
            Action: [
              'lakeformation:GetDataAccess',
              's3:CreateBucket',
              's3:GetBucketLocation',
              's3:GetObject',
              's3:ListBucket',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              's3:AbortMultipartUpload',
              's3:ListBucketMultipartUploads',
              's3:ListMultipartUploadParts',
              's3:PutObject',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':s3:::query-results-bucket/folder/*',
            ].join(''),
          },
          {
            Action: [
              'glue:BatchCreatePartition',
              'glue:BatchDeletePartition',
              'glue:BatchDeleteTable',
              'glue:BatchGetPartition',
              'glue:CreateDatabase',
              'glue:CreatePartition',
              'glue:CreateTable',
              'glue:DeleteDatabase',
              'glue:DeletePartition',
              'glue:DeleteTable',
              'glue:GetDatabase',
              'glue:GetDatabases',
              'glue:GetPartition',
              'glue:GetPartitions',
              'glue:GetTable',
              'glue:GetTables',
              'glue:UpdateDatabase',
              'glue:UpdatePartition',
              'glue:UpdateTable',
            ],
            Effect: 'Allow',
            Resource: [
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':catalog',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':database/mydatabase',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':table/mydatabase/*',
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':userDefinedFunction/mydatabase/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StateMachineRoleDefaultPolicyDF1E6607',
      roles: [
        stateMachineRoleB840431d.ref,
      ],
    });

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    if (stateMachineRoleDefaultPolicyDf1e6607 == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleDefaultPolicyDf1e6607' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: [
        '{\"StartAt\":\"Start Athena Query\",\"States\":{\"Start Athena Query\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::athena:startQueryExecution\",\"Parameters\":{\"QueryString.$\":\"$.queryString\",\"QueryExecutionContext\":{\"Database\":\"mydatabase\"},\"ResultConfiguration\":{\"EncryptionConfiguration\":{\"EncryptionOption\":\"SSE_S3\"},\"OutputLocation\":\"s3://query-results-bucket/folder/\"},\"ExecutionParameters\":[\"param1\",\"param2\"]}}},\"TimeoutSeconds\":30}',
      ].join(''),
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleDefaultPolicyDf1e6607);
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.stateMachineArn = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputstateMachineArn', {
      key: 'stateMachineArn',
      value: this.stateMachineArn!.toString(),
    });
  }
}

