import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaLayerAwscliIntegStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaLayerAwscliIntegStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaLayerAwscliIntegStackProps = {}) {
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
    const awsCliLayerF44aaf94 = new lambda.CfnLayerVersion(this, 'AwsCliLayerF44AAF94', {
      content: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '3fb6287214999ddeafa7cd0e3e58bc5144c8678bb720f3b5e45e8fd32f333eb3.zip',
      },
      description: '/opt/awscli/aws',
    });

    const lambdapython37ServiceRoleB5a704d4 = new iam.CfnRole(this, 'Lambdapython37ServiceRoleB5A704D4', {
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

    const lambdapython39ServiceRoleE2cfed77 = new iam.CfnRole(this, 'Lambdapython39ServiceRoleE2CFED77', {
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

    const providerpython37frameworkonEventServiceRole9Ea6b2b0 = new iam.CfnRole(this, 'Providerpython37frameworkonEventServiceRole9EA6B2B0', {
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

    const providerpython39frameworkonEventServiceRoleA299f5c1 = new iam.CfnRole(this, 'Providerpython39frameworkonEventServiceRoleA299F5C1', {
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

    if (awsCliLayerF44aaf94 == null) { throw new Error(`A combination of conditions caused 'awsCliLayerF44aaf94' to be undefined. Fixit.`); }
    if (lambdapython37ServiceRoleB5a704d4 == null) { throw new Error(`A combination of conditions caused 'lambdapython37ServiceRoleB5a704d4' to be undefined. Fixit.`); }
    const lambdapython3780349E0a = new lambda.CfnFunction(this, 'Lambdapython3780349E0A', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5dff6208ccd5fb196bb0354fd6e47faa8431a789e6125d20386586fef761ed48.zip',
      },
      handler: 'index.handler',
      layers: [
        awsCliLayerF44aaf94.ref,
      ],
      memorySize: 512,
      role: lambdapython37ServiceRoleB5a704d4.attrArn,
      runtime: 'python3.7',
      timeout: 30,
    });
    lambdapython3780349E0a.addDependency(lambdapython37ServiceRoleB5a704d4);

    if (awsCliLayerF44aaf94 == null) { throw new Error(`A combination of conditions caused 'awsCliLayerF44aaf94' to be undefined. Fixit.`); }
    if (lambdapython39ServiceRoleE2cfed77 == null) { throw new Error(`A combination of conditions caused 'lambdapython39ServiceRoleE2cfed77' to be undefined. Fixit.`); }
    const lambdapython39426A0480 = new lambda.CfnFunction(this, 'Lambdapython39426A0480', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '5dff6208ccd5fb196bb0354fd6e47faa8431a789e6125d20386586fef761ed48.zip',
      },
      handler: 'index.handler',
      layers: [
        awsCliLayerF44aaf94.ref,
      ],
      memorySize: 512,
      role: lambdapython39ServiceRoleE2cfed77.attrArn,
      runtime: 'python3.9',
      timeout: 30,
    });
    lambdapython39426A0480.addDependency(lambdapython39ServiceRoleE2cfed77);

    if (lambdapython3780349E0a == null) { throw new Error(`A combination of conditions caused 'lambdapython3780349E0a' to be undefined. Fixit.`); }
    if (providerpython37frameworkonEventServiceRole9Ea6b2b0 == null) { throw new Error(`A combination of conditions caused 'providerpython37frameworkonEventServiceRole9Ea6b2b0' to be undefined. Fixit.`); }
    const providerpython37frameworkonEventServiceRoleDefaultPolicyA9099dc2 = new iam.CfnPolicy(this, 'Providerpython37frameworkonEventServiceRoleDefaultPolicyA9099DC2', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              lambdapython3780349E0a.attrArn,
              [
                lambdapython3780349E0a.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Providerpython37frameworkonEventServiceRoleDefaultPolicyA9099DC2',
      roles: [
        providerpython37frameworkonEventServiceRole9Ea6b2b0.ref,
      ],
    });

    if (lambdapython39426A0480 == null) { throw new Error(`A combination of conditions caused 'lambdapython39426A0480' to be undefined. Fixit.`); }
    if (providerpython39frameworkonEventServiceRoleA299f5c1 == null) { throw new Error(`A combination of conditions caused 'providerpython39frameworkonEventServiceRoleA299f5c1' to be undefined. Fixit.`); }
    const providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767c = new iam.CfnPolicy(this, 'Providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767C', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              lambdapython39426A0480.attrArn,
              [
                lambdapython39426A0480.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767C',
      roles: [
        providerpython39frameworkonEventServiceRoleA299f5c1.ref,
      ],
    });

    if (lambdapython3780349E0a == null) { throw new Error(`A combination of conditions caused 'lambdapython3780349E0a' to be undefined. Fixit.`); }
    if (providerpython37frameworkonEventServiceRole9Ea6b2b0 == null) { throw new Error(`A combination of conditions caused 'providerpython37frameworkonEventServiceRole9Ea6b2b0' to be undefined. Fixit.`); }
    if (providerpython37frameworkonEventServiceRoleDefaultPolicyA9099dc2 == null) { throw new Error(`A combination of conditions caused 'providerpython37frameworkonEventServiceRoleDefaultPolicyA9099dc2' to be undefined. Fixit.`); }
    const providerpython37frameworkonEvent3Aa4f69e = new lambda.CfnFunction(this, 'Providerpython37frameworkonEvent3AA4F69E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (lambda-layer-awscli-integ-stack/Providerpython3.7)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': lambdapython3780349E0a.attrArn,
        },
      },
      handler: 'framework.onEvent',
      role: providerpython37frameworkonEventServiceRole9Ea6b2b0.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerpython37frameworkonEvent3Aa4f69e.addDependency(providerpython37frameworkonEventServiceRoleDefaultPolicyA9099dc2);
    providerpython37frameworkonEvent3Aa4f69e.addDependency(providerpython37frameworkonEventServiceRole9Ea6b2b0);

    if (lambdapython39426A0480 == null) { throw new Error(`A combination of conditions caused 'lambdapython39426A0480' to be undefined. Fixit.`); }
    if (providerpython39frameworkonEventServiceRoleA299f5c1 == null) { throw new Error(`A combination of conditions caused 'providerpython39frameworkonEventServiceRoleA299f5c1' to be undefined. Fixit.`); }
    if (providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767c == null) { throw new Error(`A combination of conditions caused 'providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767c' to be undefined. Fixit.`); }
    const providerpython39frameworkonEvent00Afa742 = new lambda.CfnFunction(this, 'Providerpython39frameworkonEvent00AFA742', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8e06cc8057c9c50dcd656ff09f233c37bb22f550f4bef763c9f9916df0e62484.zip',
      },
      description: 'AWS CDK resource provider framework - onEvent (lambda-layer-awscli-integ-stack/Providerpython3.9)',
      environment: {
        variables: {
          'USER_ON_EVENT_FUNCTION_ARN': lambdapython39426A0480.attrArn,
        },
      },
      handler: 'framework.onEvent',
      role: providerpython39frameworkonEventServiceRoleA299f5c1.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    providerpython39frameworkonEvent00Afa742.addDependency(providerpython39frameworkonEventServiceRoleDefaultPolicy16A4767c);
    providerpython39frameworkonEvent00Afa742.addDependency(providerpython39frameworkonEventServiceRoleA299f5c1);

    if (providerpython37frameworkonEvent3Aa4f69e == null) { throw new Error(`A combination of conditions caused 'providerpython37frameworkonEvent3Aa4f69e' to be undefined. Fixit.`); }
    const customResourcepython37 = new cloudformation.CfnCustomResource(this, 'CustomResourcepython37', {
      serviceToken: providerpython37frameworkonEvent3Aa4f69e.attrArn,
    });
    customResourcepython37.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (providerpython39frameworkonEvent00Afa742 == null) { throw new Error(`A combination of conditions caused 'providerpython39frameworkonEvent00Afa742' to be undefined. Fixit.`); }
    const customResourcepython39 = new cloudformation.CfnCustomResource(this, 'CustomResourcepython39', {
      serviceToken: providerpython39frameworkonEvent00Afa742.attrArn,
    });
    customResourcepython39.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
  }
}

