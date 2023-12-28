import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface aws-cdk-aws-api-target-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-aws-api-target-integ extends cdk.Stack {
  public readonly exportsOutputRefTestParameter95Dd6e25d868fba1;
  public readonly exportsOutputRefEncryptionKey1B843e66d737bcfc;

  public constructor(scope: cdk.App, id: string, props: aws-cdk-aws-api-target-integProps = {}) {
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
    const awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50 = new iam.CfnRole(this, 'AWSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9FFE9C50', {
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

    const encryptionKey1B843e66 = new kms.CfnKey(this, 'EncryptionKey1B843E66', {
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
    encryptionKey1B843e66.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const testParameter95Dd6e25 = new ssm.CfnParameter(this, 'TestParameter95DD6E25', {
      name: '/cdk-integ/aws-event-targets/aws-api-target/default-param',
      type: 'String',
      value: 'default-value',
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50' to be undefined. Fixit.`); }
    const awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43a7c1 = new iam.CfnPolicy(this, 'AWSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43A7C1', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'ecs:UpdateService',
              'kms:Encrypt',
              'rds:StopDBInstance',
              'ssm:PutParameter',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'AWSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43A7C1',
      roles: [
        awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50.ref,
      ],
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50' to be undefined. Fixit.`); }
    if (awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43a7c1 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43a7c1' to be undefined. Fixit.`); }
    const awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 = new lambda.CfnFunction(this, 'AWSb4cf1abd4e4f4bc699441af7ccd9ec371511E620', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '582949af1835c40c50e00a38187ee273df77f397293349e1e55dca63f063f8e8.zip',
      },
      handler: 'index.handler',
      memorySize: 256,
      role: awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50.attrArn,
      runtime: 'nodejs18.x',
      timeout: 60,
    });
    awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.addDependency(awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRoleDefaultPolicy4D43a7c1);
    awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.addDependency(awSb4cf1abd4e4f4bc699441af7ccd9ec37ServiceRole9Ffe9c50);

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (encryptionKey1B843e66 == null) { throw new Error(`A combination of conditions caused 'encryptionKey1B843e66' to be undefined. Fixit.`); }
    const encryptDataRule79774425 = new events.CfnRule(this, 'EncryptDataRule79774425', {
      eventPattern: {
        source: [
          'cdk.integ',
        ],
        'detail-type': [
          'EncryptData',
        ],
        detail: {
          KeyId: [
            encryptionKey1B843e66.ref,
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
          id: 'Target0',
          inputTransformer: {
            inputPathsMap: {
              'detail-KeyId': '$.detail.KeyId',
              'detail-Plaintext': '$.detail.Plaintext',
            },
            inputTemplate: '{\"service\":\"KMS\",\"action\":\"encrypt\",\"parameters\":{\"KeyId\":<detail-KeyId>,\"Plaintext\":<detail-Plaintext>}}',
          },
        },
      ],
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    const scheduleRuleDa5bd877 = new events.CfnRule(this, 'ScheduleRuleDA5BD877', {
      scheduleExpression: 'cron(0 0 * * ? *)',
      state: 'ENABLED',
      targets: [
        {
          arn: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
          id: 'Target0',
          input: '{\"service\":\"ECS\",\"action\":\"updateService\",\"parameters\":{\"service\":\"cool-service\",\"forceNewDeployment\":true}}',
        },
        {
          arn: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
          id: 'Target1',
          input: '{\"service\":\"RDS\",\"action\":\"stopDBInstance\",\"parameters\":{\"DBInstanceIdentifier\":\"dev-instance\"}}',
        },
      ],
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (testParameter95Dd6e25 == null) { throw new Error(`A combination of conditions caused 'testParameter95Dd6e25' to be undefined. Fixit.`); }
    const updateSsmRule6532685F = new events.CfnRule(this, 'UpdateSSMRule6532685F', {
      eventPattern: {
        source: [
          'cdk.integ',
        ],
        'detail-type': [
          'SSMUpdateParameter',
        ],
        detail: {
          Name: [
            testParameter95Dd6e25.ref,
          ],
        },
      },
      state: 'ENABLED',
      targets: [
        {
          arn: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
          id: 'Target0',
          inputTransformer: {
            inputPathsMap: {
              'detail-Name': '$.detail.Name',
              'detail-Value': '$.detail.Value',
            },
            inputTemplate: '{\"service\":\"SSM\",\"action\":\"putParameter\",\"parameters\":{\"Name\":<detail-Name>,\"Value\":<detail-Value>,\"Overwrite\":true}}',
          },
        },
      ],
    });
    updateSsmRule6532685F.addDependency(testParameter95Dd6e25);

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (encryptDataRule79774425 == null) { throw new Error(`A combination of conditions caused 'encryptDataRule79774425' to be undefined. Fixit.`); }
    const encryptDataRuleAllowEventRuleawscdkawsapitargetintegEncryptDataRuleEncryptDataRuleTarget0HandlerC3017ed86520046e = new lambda.CfnPermission(this, 'EncryptDataRuleAllowEventRuleawscdkawsapitargetintegEncryptDataRuleEncryptDataRuleTarget0HandlerC3017ED86520046E', {
      action: 'lambda:InvokeFunction',
      functionName: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: encryptDataRule79774425.attrArn,
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (scheduleRuleDa5bd877 == null) { throw new Error(`A combination of conditions caused 'scheduleRuleDa5bd877' to be undefined. Fixit.`); }
    const scheduleRuleAllowEventRuleawscdkawsapitargetintegScheduleRuleScheduleRuleTarget0HandlerF2c0c898874a4805 = new lambda.CfnPermission(this, 'ScheduleRuleAllowEventRuleawscdkawsapitargetintegScheduleRuleScheduleRuleTarget0HandlerF2C0C898874A4805', {
      action: 'lambda:InvokeFunction',
      functionName: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: scheduleRuleDa5bd877.attrArn,
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (scheduleRuleDa5bd877 == null) { throw new Error(`A combination of conditions caused 'scheduleRuleDa5bd877' to be undefined. Fixit.`); }
    const scheduleRuleAllowEventRuleawscdkawsapitargetintegScheduleRuleScheduleRuleTarget1Handler4688817C0179f894 = new lambda.CfnPermission(this, 'ScheduleRuleAllowEventRuleawscdkawsapitargetintegScheduleRuleScheduleRuleTarget1Handler4688817C0179F894', {
      action: 'lambda:InvokeFunction',
      functionName: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: scheduleRuleDa5bd877.attrArn,
    });

    if (awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620 == null) { throw new Error(`A combination of conditions caused 'awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620' to be undefined. Fixit.`); }
    if (testParameter95Dd6e25 == null) { throw new Error(`A combination of conditions caused 'testParameter95Dd6e25' to be undefined. Fixit.`); }
    if (updateSsmRule6532685F == null) { throw new Error(`A combination of conditions caused 'updateSsmRule6532685F' to be undefined. Fixit.`); }
    const updateSsmRuleAllowEventRuleawscdkawsapitargetintegUpdateSsmRuleUpdateSsmRuleTarget0Handler573B788b9acee6b4 = new lambda.CfnPermission(this, 'UpdateSSMRuleAllowEventRuleawscdkawsapitargetintegUpdateSSMRuleUpdateSSMRuleTarget0Handler573B788B9ACEE6B4', {
      action: 'lambda:InvokeFunction',
      functionName: awSb4cf1abd4e4f4bc699441af7ccd9ec371511E620.attrArn,
      principal: 'events.amazonaws.com',
      sourceArn: updateSsmRule6532685F.attrArn,
    });
    updateSsmRuleAllowEventRuleawscdkawsapitargetintegUpdateSsmRuleUpdateSsmRuleTarget0Handler573B788b9acee6b4.addDependency(testParameter95Dd6e25);

    // Outputs
    this.exportsOutputRefTestParameter95Dd6e25d868fba1 = testParameter95Dd6e25.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefTestParameter95DD6E25D868FBA1', {
      key: 'ExportsOutputRefTestParameter95DD6E25D868FBA1',
      exportName: 'aws-cdk-aws-api-target-integ:ExportsOutputRefTestParameter95DD6E25D868FBA1',
      value: this.exportsOutputRefTestParameter95Dd6e25d868fba1!.toString(),
    });
    this.exportsOutputRefEncryptionKey1B843e66d737bcfc = encryptionKey1B843e66.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefEncryptionKey1B843E66D737BCFC', {
      key: 'ExportsOutputRefEncryptionKey1B843E66D737BCFC',
      exportName: 'aws-cdk-aws-api-target-integ:ExportsOutputRefEncryptionKey1B843E66D737BCFC',
      value: this.exportsOutputRefEncryptionKey1B843e66d737bcfc!.toString(),
    });
  }
}

