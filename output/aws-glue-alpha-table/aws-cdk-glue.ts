import * as cdk from 'aws-cdk-lib';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface AwsCdkGlueProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkGlue extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkGlueProps = {}) {
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
    const anotherUser254B09e3 = new iam.CfnUser(this, 'AnotherUser254B09E3', {
    });

    const dataBucketE3889a50 = new s3.CfnBucket(this, 'DataBucketE3889A50', {
    });
    dataBucketE3889a50.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myDatabase1E2517db = new glue.CfnDatabase(this, 'MyDatabase1E2517DB', {
      catalogId: this.account,
      databaseInput: {
        name: 'my_database',
      },
    });

    const myKey6Ab29fa6 = new kms.CfnKey(this, 'MyKey6AB29FA6', {
      keyPolicy: {
        Statement: [
          {
            Action: 'kms:*',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    myKey6Ab29fa6.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const avroTable58646Abf = new glue.CfnTable(this, 'AVROTable58646ABF', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'avro_table generated by CDK',
        name: 'avro_table',
        parameters: {
          classification: 'avro',
          'has_encrypted_data': true,
        },
        partitionKeys: [
          {
            name: 'year',
            type: 'smallint',
          },
        ],
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.hive.ql.io.avro.AvroContainerInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.avro.AvroContainerOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.apache.hadoop.hive.serde2.avro.AvroSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const csvTableE499caba = new glue.CfnTable(this, 'CSVTableE499CABA', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'csv_table generated by CDK',
        name: 'csv_table',
        parameters: {
          classification: 'csv',
          'has_encrypted_data': true,
        },
        partitionKeys: [
          {
            name: 'year',
            type: 'smallint',
          },
        ],
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.apache.hadoop.hive.serde2.OpenCSVSerde',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const jsonTable00348F1d = new glue.CfnTable(this, 'JSONTable00348F1D', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'json_table generated by CDK',
        name: 'json_table',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
        },
        partitionKeys: [
          {
            name: 'year',
            type: 'smallint',
          },
        ],
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const myDeprecatedTableAa0364fd = new glue.CfnTable(this, 'MyDeprecatedTableAA0364FD', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'deprecated_table generated by CDK',
        name: 'deprecated_table',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
        },
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (myKey6Ab29fa6 == null) { throw new Error(`A combination of conditions caused 'myKey6Ab29fa6' to be undefined. Fixit.`); }
    const myEncryptedTableBucket7B28486d = new s3.CfnBucket(this, 'MyEncryptedTableBucket7B28486D', {
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: myKey6Ab29fa6.attrArn,
              sseAlgorithm: 'aws:kms',
            },
          },
        ],
      },
    });
    myEncryptedTableBucket7B28486d.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const myPartitionFilteredTable324Ba27a = new glue.CfnTable(this, 'MyPartitionFilteredTable324BA27A', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'partition_filtered_table generated by CDK',
        name: 'partition_filtered_table',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
          'partition_filtering.enabled': true,
        },
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const myTableWithConnectionTable4Bca8495 = new glue.CfnTable(this, 'MyTableWithConnectionTable4BCA8495', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'connection_table generated by CDK',
        name: 'connection_table',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
        },
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const myTableWithParametersTable39568Ab8 = new glue.CfnTable(this, 'MyTableWithParametersTable39568AB8', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'table_with_parameters generated by CDK',
        name: 'table_with_parameters',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
          key1: 'val1',
          key2: 'val2',
        },
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const myTableWithStorageDescriptorParametersTable1A347345 = new glue.CfnTable(this, 'MyTableWithStorageDescriptorParametersTable1A347345', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'table_with_storage_descriptor_parameters generated by CDK',
        name: 'table_with_storage_descriptor_parameters',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
        },
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          parameters: {
            'skip.header.line.count': '1',
            'compression_type': 'gzip',
            foo: 'bar',
            separatorChar: ',',
            'write.parallel': 'off',
          },
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    const parquetTableE84e985f = new glue.CfnTable(this, 'ParquetTableE84E985F', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'parquet_table generated by CDK',
        name: 'parquet_table',
        parameters: {
          classification: 'parquet',
          'has_encrypted_data': true,
        },
        partitionKeys: [
          {
            name: 'year',
            type: 'smallint',
          },
        ],
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat',
          location: [
            's3://',
            dataBucketE3889a50.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (avroTable58646Abf == null) { throw new Error(`A combination of conditions caused 'avroTable58646Abf' to be undefined. Fixit.`); }
    if (anotherUser254B09e3 == null) { throw new Error(`A combination of conditions caused 'anotherUser254B09e3' to be undefined. Fixit.`); }
    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (jsonTable00348F1d == null) { throw new Error(`A combination of conditions caused 'jsonTable00348F1d' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    if (parquetTableE84e985f == null) { throw new Error(`A combination of conditions caused 'parquetTableE84e985f' to be undefined. Fixit.`); }
    const anotherUserDefaultPolicyDbdb9923 = new iam.CfnPolicy(this, 'AnotherUserDefaultPolicyDBDB9923', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'glue:BatchCreatePartition',
              'glue:BatchDeletePartition',
              'glue:BatchGetPartition',
              'glue:CreatePartition',
              'glue:DeletePartition',
              'glue:GetPartition',
              'glue:GetPartitions',
              'glue:GetTable',
              'glue:GetTableVersion',
              'glue:GetTableVersions',
              'glue:GetTables',
              'glue:UpdatePartition',
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
                ':table/',
                myDatabase1E2517db.ref,
                '/',
                avroTable58646Abf.ref,
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':table/',
                myDatabase1E2517db.ref,
                '/',
                jsonTable00348F1d.ref,
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':table/',
                myDatabase1E2517db.ref,
                '/',
                parquetTableE84e985f.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              dataBucketE3889a50.attrArn,
              [
                dataBucketE3889a50.attrArn,
                '/*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AnotherUserDefaultPolicyDBDB9923',
      users: [
        anotherUser254B09e3.ref,
      ],
    });

    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    if (myEncryptedTableBucket7B28486d == null) { throw new Error(`A combination of conditions caused 'myEncryptedTableBucket7B28486d' to be undefined. Fixit.`); }
    const myEncryptedTable981A88c6 = new glue.CfnTable(this, 'MyEncryptedTable981A88C6', {
      catalogId: this.account,
      databaseName: myDatabase1E2517db.ref,
      tableInput: {
        description: 'my_encrypted_table generated by CDK',
        name: 'my_encrypted_table',
        parameters: {
          classification: 'json',
          'has_encrypted_data': true,
        },
        partitionKeys: [
          {
            name: 'year',
            type: 'smallint',
          },
        ],
        storageDescriptor: {
          columns: [
            {
              name: 'col1',
              type: 'string',
            },
            {
              comment: 'col2 comment',
              name: 'col2',
              type: 'string',
            },
            {
              name: 'col3',
              type: 'array<string>',
            },
            {
              name: 'col4',
              type: 'map<string,string>',
            },
            {
              name: 'col5',
              type: 'struct<col1:string>',
            },
          ],
          compressed: false,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          location: [
            's3://',
            myEncryptedTableBucket7B28486d.ref,
            '/',
          ].join(''),
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.openx.data.jsonserde.JsonSerDe',
          },
          storedAsSubDirectories: false,
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });

    if (csvTableE499caba == null) { throw new Error(`A combination of conditions caused 'csvTableE499caba' to be undefined. Fixit.`); }
    if (dataBucketE3889a50 == null) { throw new Error(`A combination of conditions caused 'dataBucketE3889a50' to be undefined. Fixit.`); }
    if (myDatabase1E2517db == null) { throw new Error(`A combination of conditions caused 'myDatabase1E2517db' to be undefined. Fixit.`); }
    if (myEncryptedTable981A88c6 == null) { throw new Error(`A combination of conditions caused 'myEncryptedTable981A88c6' to be undefined. Fixit.`); }
    if (myEncryptedTableBucket7B28486d == null) { throw new Error(`A combination of conditions caused 'myEncryptedTableBucket7B28486d' to be undefined. Fixit.`); }
    if (myKey6Ab29fa6 == null) { throw new Error(`A combination of conditions caused 'myKey6Ab29fa6' to be undefined. Fixit.`); }
    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    const myUserDefaultPolicy7B897426 = new iam.CfnPolicy(this, 'MyUserDefaultPolicy7B897426', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'glue:BatchCreatePartition',
              'glue:BatchDeletePartition',
              'glue:BatchGetPartition',
              'glue:CreatePartition',
              'glue:DeletePartition',
              'glue:GetPartition',
              'glue:GetPartitions',
              'glue:GetTable',
              'glue:GetTableVersion',
              'glue:GetTableVersions',
              'glue:GetTables',
              'glue:UpdatePartition',
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
                ':table/',
                myDatabase1E2517db.ref,
                '/',
                csvTableE499caba.ref,
              ].join(''),
              [
                'arn:',
                this.partition,
                ':glue:',
                this.region,
                ':',
                this.account,
                ':table/',
                myDatabase1E2517db.ref,
                '/',
                myEncryptedTable981A88c6.ref,
              ].join(''),
            ],
          },
          {
            Action: [
              's3:Abort*',
              's3:DeleteObject*',
              's3:GetBucket*',
              's3:GetObject*',
              's3:List*',
              's3:PutObject',
              's3:PutObjectLegalHold',
              's3:PutObjectRetention',
              's3:PutObjectTagging',
              's3:PutObjectVersionTagging',
            ],
            Effect: 'Allow',
            Resource: [
              dataBucketE3889a50.attrArn,
              myEncryptedTableBucket7B28486d.attrArn,
              [
                dataBucketE3889a50.attrArn,
                '/*',
              ].join(''),
              [
                myEncryptedTableBucket7B28486d.attrArn,
                '/*',
              ].join(''),
            ],
          },
          {
            Action: [
              'kms:Decrypt',
              'kms:DescribeKey',
              'kms:Encrypt',
              'kms:GenerateDataKey*',
              'kms:ReEncrypt*',
            ],
            Effect: 'Allow',
            Resource: myKey6Ab29fa6.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyUserDefaultPolicy7B897426',
      users: [
        myUserDc45028b.ref,
      ],
    });
  }
}

