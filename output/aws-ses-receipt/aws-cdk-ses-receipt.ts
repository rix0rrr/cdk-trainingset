import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ses from 'aws-cdk-lib/aws-ses';

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
    const allowlistAllow1000016E9465a18 = new ses.CfnReceiptFilter(this, 'AllowlistAllow1000016E9465A18', {
      filter: {
        ipFilter: {
          cidr: '10.0.0.0/16',
          policy: 'Allow',
        },
      },
    });

    const allowlistBlockAll7E0a7f11 = new ses.CfnReceiptFilter(this, 'AllowlistBlockAll7E0A7F11', {
      filter: {
        ipFilter: {
          cidr: '0.0.0.0/0',
          policy: 'Block',
        },
      },
    });

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

    if (singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4 == null) { throw new Error(`A combination of conditions caused 'singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4' to be undefined. Fixit.`); }
    const singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15 = new lambda.CfnFunction(this, 'SingletonLambda224e77f9a32e4b4dac32983477abba164533EA15', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '19044c50ec489a0413f51a8e60d6272e5746e9b5a0356ed15c12de97c3ca93ec.zip',
      },
      handler: 'index.handler',
      role: singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4.attrArn,
      runtime: 'nodejs18.x',
    });
    singletonLambda224e77f9a32e4b4dac32983477abba164533Ea15.addDependency(singletonLambda224e77f9a32e4b4dac32983477abba16ServiceRole3037F5b4);

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

    if (ruleSetDropSpamRule5809F51b == null) { throw new Error(`A combination of conditions caused 'ruleSetDropSpamRule5809F51b' to be undefined. Fixit.`); }
    if (ruleSetE30c6c48 == null) { throw new Error(`A combination of conditions caused 'ruleSetE30c6c48' to be undefined. Fixit.`); }
    const ruleSetFirstRule0A27c8cc = new ses.CfnReceiptRule(this, 'RuleSetFirstRule0A27C8CC', {
      after: ruleSetDropSpamRule5809F51b.ref,
      rule: {
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

    if (ruleSetE30c6c48 == null) { throw new Error(`A combination of conditions caused 'ruleSetE30c6c48' to be undefined. Fixit.`); }
    if (ruleSetFirstRule0A27c8cc == null) { throw new Error(`A combination of conditions caused 'ruleSetFirstRule0A27c8cc' to be undefined. Fixit.`); }
    const ruleSetSecondRule03178Ad4 = new ses.CfnReceiptRule(this, 'RuleSetSecondRule03178AD4', {
      after: ruleSetFirstRule0A27c8cc.ref,
      rule: {
        enabled: true,
      },
      ruleSetName: ruleSetE30c6c48.ref,
    });
  }
}

