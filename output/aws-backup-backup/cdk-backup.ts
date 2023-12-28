import * as cdk from 'aws-cdk-lib';
import * as backup from 'aws-cdk-lib/aws-backup';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as efs from 'aws-cdk-lib/aws-efs';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface CdkBackupProps extends cdk.StackProps {
  /**
   * Env
   * @default 'test'
   */
  readonly env?: string;
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkBackup extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkBackupProps = {}) {
    super(scope, id, props);

    // Applying default props
    props = {
      ...props,
      env: props.env ?? 'test',
      bootstrapVersion: new cdk.CfnParameter(this, 'BootstrapVersion', {
        type: 'AWS::SSM::Parameter::Value<String>',
        default: props.bootstrapVersion?.toString() ?? '/cdk-bootstrap/hnb659fds/version',
        description: 'Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]',
      }).valueAsString,
    };

    // Resources
    const fileSystem = new efs.CfnFileSystem(this, 'FileSystem', {
    });
    fileSystem.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const planSelectionRole6D10f4b7 = new iam.CfnRole(this, 'PlanSelectionRole6D10F4B7', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'backup.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSBackupServiceRolePolicyForBackup',
        ].join(''),
      ],
    });

    const secondaryVault67665B5e = new backup.CfnBackupVault(this, 'SecondaryVault67665B5E', {
      backupVaultName: 'cdkbackupSecondaryVaultA01C2A0E',
      lockConfiguration: {
        minRetentionDays: 5,
      },
    });
    secondaryVault67665B5e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const tableCd117fa1 = new dynamodb.CfnTable(this, 'TableCD117FA1', {
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
    });
    tableCd117fa1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const thirdVault3441C01e = new backup.CfnBackupVault(this, 'ThirdVault3441C01E', {
      backupVaultName: [
        'backupVault-',
        props.env!,
      ].join(''),
      lockConfiguration: {
        minRetentionDays: 5,
      },
    });
    thirdVault3441C01e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const vault23237E5b = new backup.CfnBackupVault(this, 'Vault23237E5B', {
      backupVaultName: 'cdkbackupVaultC2A6D3CB',
      lockConfiguration: {
        minRetentionDays: 5,
      },
    });
    vault23237E5b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (secondaryVault67665B5e == null) { throw new Error(`A combination of conditions caused 'secondaryVault67665B5e' to be undefined. Fixit.`); }
    if (vault23237E5b == null) { throw new Error(`A combination of conditions caused 'vault23237E5b' to be undefined. Fixit.`); }
    const planDaf4e53a = new backup.CfnBackupPlan(this, 'PlanDAF4E53A', {
      backupPlan: {
        backupPlanName: 'Plan',
        backupPlanRule: [
          {
            lifecycle: {
              deleteAfterDays: 35,
            },
            ruleName: 'Daily',
            scheduleExpression: 'cron(0 5 * * ? *)',
            targetBackupVault: vault23237E5b.attrBackupVaultName,
          },
          {
            lifecycle: {
              deleteAfterDays: 90,
            },
            ruleName: 'Weekly',
            scheduleExpression: 'cron(0 5 ? * SAT *)',
            targetBackupVault: vault23237E5b.attrBackupVaultName,
          },
          {
            lifecycle: {
              deleteAfterDays: 1825,
              moveToColdStorageAfterDays: 90,
            },
            ruleName: 'Monthly5Year',
            scheduleExpression: 'cron(0 5 1 * ? *)',
            targetBackupVault: vault23237E5b.attrBackupVaultName,
          },
          {
            copyActions: [
              {
                destinationBackupVaultArn: secondaryVault67665B5e.attrBackupVaultArn,
                lifecycle: {
                  deleteAfterDays: 120,
                  moveToColdStorageAfterDays: 30,
                },
              },
            ],
            recoveryPointTags: {
              stage: 'prod',
            },
            ruleName: 'PlanRule3',
            targetBackupVault: vault23237E5b.attrBackupVaultName,
          },
        ],
      },
    });

    if (fileSystem == null) { throw new Error(`A combination of conditions caused 'fileSystem' to be undefined. Fixit.`); }
    if (planDaf4e53a == null) { throw new Error(`A combination of conditions caused 'planDaf4e53a' to be undefined. Fixit.`); }
    if (planSelectionRole6D10f4b7 == null) { throw new Error(`A combination of conditions caused 'planSelectionRole6D10f4b7' to be undefined. Fixit.`); }
    if (tableCd117fa1 == null) { throw new Error(`A combination of conditions caused 'tableCd117fa1' to be undefined. Fixit.`); }
    const planSelectionF88cbc04 = new backup.CfnBackupSelection(this, 'PlanSelectionF88CBC04', {
      backupPlanId: planDaf4e53a.attrBackupPlanId,
      backupSelection: {
        iamRoleArn: planSelectionRole6D10f4b7.attrArn,
        listOfTags: [
          {
            conditionKey: 'stage',
            conditionType: 'STRINGEQUALS',
            conditionValue: 'prod',
          },
        ],
        resources: [
          [
            'arn:',
            this.partition,
            ':dynamodb:',
            this.region,
            ':',
            this.account,
            ':table/',
            tableCd117fa1.ref,
          ].join(''),
          [
            'arn:',
            this.partition,
            ':elasticfilesystem:',
            this.region,
            ':',
            this.account,
            ':file-system/',
            fileSystem.ref,
          ].join(''),
        ],
        selectionName: 'Selection',
      },
    });
  }
}

