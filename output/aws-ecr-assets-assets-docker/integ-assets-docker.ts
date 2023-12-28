import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-assets-dockerProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-assets-docker extends cdk.Stack {
  public readonly imageUri;
  public readonly imageUri2;
  public readonly imageUri3;
  public readonly imageUri4;
  public readonly imageUri5;
  public readonly imageUri6;
  public readonly imageUri7;
  public readonly imageUri8;

  public constructor(scope: cdk.App, id: string, props: integ-assets-dockerProps = {}) {
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
    const myUserDc45028b = new iam.CfnUser(this, 'MyUserDC45028B', {
    });

    if (myUserDc45028b == null) { throw new Error(`A combination of conditions caused 'myUserDc45028b' to be undefined. Fixit.`); }
    const myUserDefaultPolicy7B897426 = new iam.CfnPolicy(this, 'MyUserDefaultPolicy7B897426', {
      policyDocument: {
        Statement: [
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
          {
            Action: 'ecr:GetAuthorizationToken',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyUserDefaultPolicy7B897426',
      users: [
        myUserDc45028b.ref,
      ],
    });

    // Outputs
    this.imageUri = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri', {
      key: 'ImageUri',
      value: this.imageUri!.toString(),
    });
    this.imageUri2 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri2', {
      key: 'ImageUri2',
      value: this.imageUri2!.toString(),
    });
    this.imageUri3 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:394b24fcdc153a83b1fc400bf2e812ee67e3a5ffafdf977d531cfe2187d95f38`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri3', {
      key: 'ImageUri3',
      value: this.imageUri3!.toString(),
    });
    this.imageUri4 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:fa08370824fa0a7eab2c59a4f371fe7631019044d6c906b4268193120dc213b4`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri4', {
      key: 'ImageUri4',
      value: this.imageUri4!.toString(),
    });
    this.imageUri5 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:60dea2e16e94d1977b92fe03fa7085fea446233f1fe499702b69593438baa59f`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri5', {
      key: 'ImageUri5',
      value: this.imageUri5!.toString(),
    });
    this.imageUri6 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri6', {
      key: 'ImageUri6',
      value: this.imageUri6!.toString(),
    });
    this.imageUri7 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:615e365307bd4811880256cf541a7d05b5d4a752ee76ac03863a0a39631607a6`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri7', {
      key: 'ImageUri7',
      value: this.imageUri7!.toString(),
    });
    this.imageUri8 = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`;
    new cdk.CfnOutput(this, 'CfnOutputImageUri8', {
      key: 'ImageUri8',
      value: this.imageUri8!.toString(),
    });
  }
}

