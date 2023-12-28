import * as cdk from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface IntegApprunnerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegApprunner extends cdk.Stack {
  public readonly url3;
  public readonly url2;

  public constructor(scope: cdk.App, id: string, props: IntegApprunnerProps = {}) {
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
    const service2AccessRole759Ca73d = new iam.CfnRole(this, 'Service2AccessRole759CA73D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'build.apprunner.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const service2InstanceRole3F57f2aa = new iam.CfnRole(this, 'Service2InstanceRole3F57F2AA', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'tasks.apprunner.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const service3AccessRole3Acbaaa0 = new iam.CfnRole(this, 'Service3AccessRole3ACBAAA0', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'build.apprunner.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const service3InstanceRoleD40bee82 = new iam.CfnRole(this, 'Service3InstanceRoleD40BEE82', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'tasks.apprunner.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (service2AccessRole759Ca73d == null) { throw new Error(`A combination of conditions caused 'service2AccessRole759Ca73d' to be undefined. Fixit.`); }
    if (service2InstanceRole3F57f2aa == null) { throw new Error(`A combination of conditions caused 'service2InstanceRole3F57f2aa' to be undefined. Fixit.`); }
    const service2Ab4d14d8 = new apprunner.CfnService(this, 'Service2AB4D14D8', {
      sourceConfiguration: {
        authenticationConfiguration: {
          accessRoleArn: service2AccessRole759Ca73d.attrArn,
        },
        imageRepository: {
          imageConfiguration: {
            port: '80',
          },
          imageIdentifier: [
            this.account,
            '.dkr.ecr.',
            this.region,
            '.',
            this.urlSuffix,
            '/',
            `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ':77284835684772d19c95f4f5a37e7618d5f9efc40db9321d44ac039db457b967',
          ].join(''),
          imageRepositoryType: 'ECR',
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service2InstanceRole3F57f2aa.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    if (service2AccessRole759Ca73d == null) { throw new Error(`A combination of conditions caused 'service2AccessRole759Ca73d' to be undefined. Fixit.`); }
    const service2AccessRoleDefaultPolicy08C28479 = new iam.CfnPolicy(this, 'Service2AccessRoleDefaultPolicy08C28479', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Service2AccessRoleDefaultPolicy08C28479',
      roles: [
        service2AccessRole759Ca73d.ref,
      ],
    });

    if (service3AccessRole3Acbaaa0 == null) { throw new Error(`A combination of conditions caused 'service3AccessRole3Acbaaa0' to be undefined. Fixit.`); }
    if (service3InstanceRoleD40bee82 == null) { throw new Error(`A combination of conditions caused 'service3InstanceRoleD40bee82' to be undefined. Fixit.`); }
    const service342D067f2 = new apprunner.CfnService(this, 'Service342D067F2', {
      sourceConfiguration: {
        authenticationConfiguration: {
          accessRoleArn: service3AccessRole3Acbaaa0.attrArn,
        },
        autoDeploymentsEnabled: true,
        imageRepository: {
          imageConfiguration: {
            port: '8000',
          },
          imageIdentifier: `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:77284835684772d19c95f4f5a37e7618d5f9efc40db9321d44ac039db457b967`,
          imageRepositoryType: 'ECR',
        },
      },
      instanceConfiguration: {
        instanceRoleArn: service3InstanceRoleD40bee82.attrArn,
      },
      networkConfiguration: {
        egressConfiguration: {
          egressType: 'DEFAULT',
        },
      },
    });

    if (service3AccessRole3Acbaaa0 == null) { throw new Error(`A combination of conditions caused 'service3AccessRole3Acbaaa0' to be undefined. Fixit.`); }
    const service3AccessRoleDefaultPolicy57B9744e = new iam.CfnPolicy(this, 'Service3AccessRoleDefaultPolicy57B9744E', {
      policyDocument: {
        Statement: [
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: [
              'ecr:BatchCheckLayerAvailability',
              'ecr:BatchGetImage',
              'ecr:GetDownloadUrlForLayer',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':ecr:',
              this.region,
              ':',
              this.account,
              ':repository/',
              `cdk-hnb659fds-container-assets-${this.account}-${this.region}`,
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'Service3AccessRoleDefaultPolicy57B9744E',
      roles: [
        service3AccessRole3Acbaaa0.ref,
      ],
    });

    // Outputs
    this.url3 = [
      'https://',
      service342D067f2.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL3', {
      key: 'URL3',
      value: this.url3!.toString(),
    });
    this.url2 = [
      'https://',
      service2Ab4d14d8.attrServiceUrl,
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputURL2', {
      key: 'URL2',
      value: this.url2!.toString(),
    });
  }
}

