import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface LambdaEventSourceKafkaSelfManagedProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaEventSourceKafkaSelfManaged extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaEventSourceKafkaSelfManagedProps = {}) {
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

    const s509448a1 = new secretsmanager.CfnSecret(this, 'S509448A1', {
      secretString: '{\"certificate\":\"-----BEGIN CERTIFICATE-----\\nMIIE5DCCAsygAwIBAgIRAPJdwaFaNRrytHBto0j5BA0wDQYJKoZIhvcNAQELBQAw\\ncmUuiAii9R0=\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\nMIIFgjCCA2qgAwIBAgIQdjNZd6uFf9hbNC5RdfmHrzANBgkqhkiG9w0BAQsFADBb\\nc8PH3PSoAaRwMMgOSA2ALJvbRz8mpg==\\n-----END CERTIFICATE-----\\\"\\n\"}',
    });
    s509448a1.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    const sc0855c491 = new secretsmanager.CfnSecret(this, 'SC0855C491', {
      secretString: '{\"certificate\":\"-----BEGIN CERTIFICATE-----\\nMIIE5DCCAsygAwIBAgIRAPJdwaFaNRrytHBto0j5BA0wDQYJKoZIhvcNAQELBQAw\\ncmUuiAii9R0=\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\nMIIFgjCCA2qgAwIBAgIQdjNZd6uFf9hbNC5RdfmHrzANBgkqhkiG9w0BAQsFADBb\\nc8PH3PSoAaRwMMgOSA2ALJvbRz8mpg==\\n-----END CERTIFICATE-----\\\"\\n\",\"privateKey\":\"-----BEGIN ENCRYPTED PRIVATE KEY-----\\nzp2mwJn2NYB7AZ7+imp0azDZb+8YG2aUCiyqb6PnnA==\\n-----END ENCRYPTED PRIVATE KEY-----\"}',
    });
    sc0855c491.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (fServiceRole3Ac82ee1 == null) { throw new Error(`A combination of conditions caused 'fServiceRole3Ac82ee1' to be undefined. Fixit.`); }
    if (s509448a1 == null) { throw new Error(`A combination of conditions caused 's509448a1' to be undefined. Fixit.`); }
    if (sc0855c491 == null) { throw new Error(`A combination of conditions caused 'sc0855c491' to be undefined. Fixit.`); }
    const fServiceRoleDefaultPolicy17A19bfa = new iam.CfnPolicy(this, 'FServiceRoleDefaultPolicy17A19BFA', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'secretsmanager:DescribeSecret',
              'secretsmanager:GetSecretValue',
            ],
            Effect: 'Allow',
            Resource: [
              s509448a1.ref,
              sc0855c491.ref,
            ],
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
    if (s509448a1 == null) { throw new Error(`A combination of conditions caused 's509448a1' to be undefined. Fixit.`); }
    if (sc0855c491 == null) { throw new Error(`A combination of conditions caused 'sc0855c491' to be undefined. Fixit.`); }
    const fKafkaEventSource838c4d5ff3c99c1a617120adfca83e5bmytesttopic1E7a7798 = new lambda.CfnEventSourceMapping(this, 'FKafkaEventSource838c4d5ff3c99c1a617120adfca83e5bmytesttopic1E7A7798', {
      batchSize: 100,
      filterCriteria: {
        filters: [
          {
            pattern: '{\"numericEquals\":[{\"numeric\":[\"=\",1]}]}',
          },
        ],
      },
      functionName: fc4345940.ref,
      selfManagedEventSource: {
        endpoints: {
          kafkaBootstrapServers: [
            'my-self-hosted-kafka-broker-1:9092',
            'my-self-hosted-kafka-broker-2:9092',
            'my-self-hosted-kafka-broker-3:9092',
          ],
        },
      },
      selfManagedKafkaEventSourceConfig: {
        consumerGroupId: 'myTestConsumerGroup',
      },
      sourceAccessConfigurations: [
        {
          type: 'CLIENT_CERTIFICATE_TLS_AUTH',
          uri: sc0855c491.ref,
        },
        {
          type: 'SERVER_ROOT_CA_CERTIFICATE',
          uri: s509448a1.ref,
        },
      ],
      startingPosition: 'TRIM_HORIZON',
      topics: [
        'my-test-topic',
      ],
    });
  }
}

