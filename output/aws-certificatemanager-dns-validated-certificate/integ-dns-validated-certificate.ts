import * as cdk from 'aws-cdk-lib';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface integ-dns-validated-certificateProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-dns-validated-certificate extends cdk.Stack {
  public readonly certificateArn;

  public constructor(scope: cdk.App, id: string, props: integ-dns-validated-certificateProps = {}) {
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
    const certificateCertificateRequestorFunctionServiceRoleC04c13da = new iam.CfnRole(this, 'CertificateCertificateRequestorFunctionServiceRoleC04C13DA', {
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

    if (certificateCertificateRequestorFunctionServiceRoleC04c13da == null) { throw new Error(`A combination of conditions caused 'certificateCertificateRequestorFunctionServiceRoleC04c13da' to be undefined. Fixit.`); }
    const certificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845bc = new iam.CfnPolicy(this, 'CertificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845BC', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'acm:AddTagsToCertificate',
              'acm:DeleteCertificate',
              'acm:DescribeCertificate',
              'acm:RequestCertificate',
              'route53:GetChange',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'route53:changeResourceRecordSets',
            Condition: {
              'ForAllValues:StringEquals': {
                'route53:ChangeResourceRecordSetsRecordTypes': [
                  'CNAME',
                ],
                'route53:ChangeResourceRecordSetsActions': [
                  'UPSERT',
                ],
              },
              'ForAllValues:StringLike': {
                'route53:ChangeResourceRecordSetsNormalizedRecordNames': [
                  '*.example.com',
                ],
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':route53:::hostedzone/Z23ABC4XYZL05B',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CertificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845BC',
      roles: [
        certificateCertificateRequestorFunctionServiceRoleC04c13da.ref,
      ],
    });

    if (certificateCertificateRequestorFunctionServiceRoleC04c13da == null) { throw new Error(`A combination of conditions caused 'certificateCertificateRequestorFunctionServiceRoleC04c13da' to be undefined. Fixit.`); }
    if (certificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845bc == null) { throw new Error(`A combination of conditions caused 'certificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845bc' to be undefined. Fixit.`); }
    const certificateCertificateRequestorFunction5E845413 = new lambda.CfnFunction(this, 'CertificateCertificateRequestorFunction5E845413', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: '8dd3f997ac74aa13ef09bc8bed060ecdbe3111898c6bbc0eb4f2130c9c53233b.zip',
      },
      handler: 'index.certificateRequestHandler',
      role: certificateCertificateRequestorFunctionServiceRoleC04c13da.attrArn,
      runtime: 'nodejs18.x',
      timeout: 900,
    });
    certificateCertificateRequestorFunction5E845413.addDependency(certificateCertificateRequestorFunctionServiceRoleDefaultPolicy3C8845bc);
    certificateCertificateRequestorFunction5E845413.addDependency(certificateCertificateRequestorFunctionServiceRoleC04c13da);

    if (certificateCertificateRequestorFunction5E845413 == null) { throw new Error(`A combination of conditions caused 'certificateCertificateRequestorFunction5E845413' to be undefined. Fixit.`); }
    const certificateCertificateRequestorResource2890C6b7 = new cloudformation.CfnCustomResource(this, 'CertificateCertificateRequestorResource2890C6B7', {
      serviceToken: certificateCertificateRequestorFunction5E845413.attrArn,
      domainName: '*.example.com',
      hostedZoneId: 'Z23ABC4XYZL05B',
      removalPolicy: 'retain',
    });
    certificateCertificateRequestorResource2890C6b7.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    // Outputs
    this.certificateArn = [
      'https://',
      this.region,
      '.console.aws.amazon.com/acm/home?region=',
      this.region,
      '#/certificates/',
      cdk.Fn.select(1, cdk.Fn.split('/', certificateCertificateRequestorResource2890C6b7.attrArn)),
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputCertificateArn', {
      key: 'CertificateArn',
      value: this.certificateArn!.toString(),
    });
  }
}

