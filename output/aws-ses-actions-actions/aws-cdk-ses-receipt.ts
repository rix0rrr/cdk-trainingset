import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ses from 'aws-cdk-lib/aws-ses';
import * as sns from 'aws-cdk-lib/aws-sns';

export interface AwsCdkSesReceiptProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkSesReceipt extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: AwsCdkSesReceiptProps = {}) {
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
    bucket83908E77.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

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

    const key961B73fd = new kms.CfnKey(this, 'Key961B73FD', {
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
          {
            Action: [
              'kms:Encrypt',
              'kms:GenerateDataKey',
            ],
            Condition: {
              Null: {
                'kms:EncryptionContext:aws:ses:rule-name': 'false',
                'kms:EncryptionContext:aws:ses:message-id': 'false',
              },
              StringEquals: {
                'kms:EncryptionContext:aws:ses:source-account': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'ses.amazonaws.com',
            },
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
    });
    key961B73fd.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const ruleSetE30c6c48 = new ses.CfnReceiptRuleSet(this, 'RuleSetE30C6C48', {
    });

    const singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4 = new iam.CfnRole(this, 'SingletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5B4', {
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

    const topicBfc7af6e = new sns.CfnTopic(this, 'TopicBFC7AF6E', {
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    const bucketPolicyE9a3008a = new s3.CfnBucketPolicy(this, 'BucketPolicyE9A3008A', {
      bucket: bucket83908E77.ref,
      policyDocument: {
        Statement: [
          {
            Action: 's3:PutObject',
            Condition: {
              StringEquals: {
                'aws:Referer': this.account,
              },
            },
            Effect: 'Allow',
            Principal: {
              Service: 'ses.amazonaws.com',
            },
            Resource: [
              bucket83908E77.attrArn,
              '/emails/*',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (functionServiceRole675Bb04a == null) { throw new Error(`A combination of conditions caused 'functionServiceRole675Bb04a' to be undefined. Fixit.`); }
    const function76856677 = new lambda.CfnFunction(this, 'Function76856677', {
      code: {
        zipFile: 'exports.handler = async (event) => event;',
      },
      handler: 'index.handler',
      role: functionServiceRole675Bb04a.attrArn,
      runtime: 'nodejs18.x',
    });
    function76856677.addDependency(functionServiceRole675Bb04a);

    if (singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4 == null) { throw new Error(`A combination of conditions caused 'singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4' to be undefined. Fixit.`); }
    const singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15 = new lambda.CfnFunction(this, 'SingletonLambda224e77f9a32e4b4dac32983477abba164533EA15', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '96d0b6be9a64ae309bf89a86f5515453f0fa1d07b4f6b37198051cc98e251f34.zip',
      },
      handler: 'index.handler',
      role: singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4.attrArn,
      runtime: 'nodejs18.x',
    });
    singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15.addDependency(singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4);

    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    const functionAllowSes1829904A = new lambda.CfnPermission(this, 'FunctionAllowSes1829904A', {
      action: 'lambda:InvokeFunction',
      functionName: function76856677.attrArn,
      principal: 'ses.amazonaws.com',
      sourceAccount: this.account,
    });

    if (ruleSetE30c6c48 == null) { throw new Error(`A combination of conditions caused 'ruleSetE30c6c48' to be undefined. Fixit.`); }
    if (singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15 == null) { throw new Error(`A combination of conditions caused 'singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15' to be undefined. Fixit.`); }
    const ruleSetDropSpamRule5809F51b = new ses.CfnReceiptRule(this, 'RuleSetDropSpamRule5809F51B', {
      rule: {
        actions: [
          {
            lambdaAction: {
              functionArn: singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15.attrArn,
              invocationType: 'RequestResponse',
            },
          },
        ],
        enabled: true,
        scanEnabled: true,
      },
      ruleSetName: ruleSetE30c6c48.ref,
    });

    if (singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15 == null) { throw new Error(`A combination of conditions caused 'singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15' to be undefined. Fixit.`); }
    const singletonLambda224e77f9a32e4b4dac32983477abba16AllowSesB42df904 = new lambda.CfnPermission(this, 'SingletonLambda224e77f9a32e4b4dac32983477abba16AllowSesB42DF904', {
      action: 'lambda:InvokeFunction',
      functionName: singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15.attrArn,
      principal: 'ses.amazonaws.com',
      sourceAccount: this.account,
    });

    if (bucket83908E77 == null) { throw new Error(`A combination of conditions caused 'bucket83908E77' to be undefined. Fixit.`); }
    if (bucketPolicyE9a3008a == null) { throw new Error(`A combination of conditions caused 'bucketPolicyE9a3008a' to be undefined. Fixit.`); }
    if (function76856677 == null) { throw new Error(`A combination of conditions caused 'function76856677' to be undefined. Fixit.`); }
    if (functionAllowSes1829904A == null) { throw new Error(`A combination of conditions caused 'functionAllowSes1829904A' to be undefined. Fixit.`); }
    if (key961B73fd == null) { throw new Error(`A combination of conditions caused 'key961B73fd' to be undefined. Fixit.`); }
    if (ruleSetDropSpamRule5809F51b == null) { throw new Error(`A combination of conditions caused 'ruleSetDropSpamRule5809F51b' to be undefined. Fixit.`); }
    if (ruleSetE30c6c48 == null) { throw new Error(`A combination of conditions caused 'ruleSetE30c6c48' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const ruleSetFirstRule0A27c8cc = new ses.CfnReceiptRule(this, 'RuleSetFirstRule0A27C8CC', {
      after: ruleSetDropSpamRule5809F51b.ref,
      rule: {
        actions: [
          {
            addHeaderAction: {
              headerName: 'X-My-Header',
              headerValue: 'value',
            },
          },
          {
            lambdaAction: {
              functionArn: function76856677.attrArn,
              invocationType: 'RequestResponse',
              topicArn: topicBfc7af6e.ref,
            },
          },
          {
            s3Action: {
              bucketName: bucket83908E77.ref,
              kmsKeyArn: key961B73fd.attrArn,
              objectKeyPrefix: 'emails/',
              topicArn: topicBfc7af6e.ref,
            },
          },
          {
            snsAction: {
              encoding: 'Base64',
              topicArn: topicBfc7af6e.ref,
            },
          },
          {
            bounceAction: {
              message: 'Message content rejected',
              sender: 'cdk-ses-receipt-test@yopmail.com',
              smtpReplyCode: '500',
              statusCode: '5.6.1',
              topicArn: topicBfc7af6e.ref,
            },
          },
        ],
        enabled: true,
        name: 'FirstRule',
        recipients: [
          'cdk-ses-receipt-test@yopmail.com',
        ],
        scanEnabled: true,
        tlsPolicy: 'Require',
      },
      ruleSetName: ruleSetE30c6c48.ref,
    });
    ruleSetFirstRule0A27c8cc.addDependency(bucketPolicyE9a3008a);
    ruleSetFirstRule0A27c8cc.addDependency(functionAllowSes1829904A);

    if (ruleSetE30c6c48 == null) { throw new Error(`A combination of conditions caused 'ruleSetE30c6c48' to be undefined. Fixit.`); }
    if (ruleSetFirstRule0A27c8cc == null) { throw new Error(`A combination of conditions caused 'ruleSetFirstRule0A27c8cc' to be undefined. Fixit.`); }
    if (topicBfc7af6e == null) { throw new Error(`A combination of conditions caused 'topicBfc7af6e' to be undefined. Fixit.`); }
    const ruleSetSecondRule03178Ad4 = new ses.CfnReceiptRule(this, 'RuleSetSecondRule03178AD4', {
      after: ruleSetFirstRule0A27c8cc.ref,
      rule: {
        actions: [
          {
            stopAction: {
              scope: 'RuleSet',
              topicArn: topicBfc7af6e.ref,
            },
          },
        ],
        enabled: true,
      },
      ruleSetName: ruleSetE30c6c48.ref,
    });
  }
}

