import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as ses from 'aws-cdk-lib/aws-ses';

export interface cdk-ses-email-identity-integProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-ses-email-identity-integ extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-ses-email-identity-integProps = {}) {
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
    const emailIdentity7187767D = new ses.CfnEmailIdentity(this, 'EmailIdentity7187767D', {
      emailIdentity: 'cdk.dev',
      mailFromAttributes: {
        mailFromDomain: 'mail.cdk.dev',
      },
    });

    const hostedZoneDb99f866 = new route53.CfnHostedZone(this, 'HostedZoneDB99F866', {
      name: 'cdk.dev.',
    });

    if (emailIdentity7187767D == null) { throw new Error(`A combination of conditions caused 'emailIdentity7187767D' to be undefined. Fixit.`); }
    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const emailIdentityDkimDnsToken1Ba32acb3 = new route53.CfnRecordSet(this, 'EmailIdentityDkimDnsToken1BA32ACB3', {
      name: emailIdentity7187767D.attrDkimDnsTokenName1,
      type: 'CNAME',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        emailIdentity7187767D.attrDkimDnsTokenValue1,
      ],
      ttl: '1800',
    });

    if (emailIdentity7187767D == null) { throw new Error(`A combination of conditions caused 'emailIdentity7187767D' to be undefined. Fixit.`); }
    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const emailIdentityDkimDnsToken2Bbebb8ec = new route53.CfnRecordSet(this, 'EmailIdentityDkimDnsToken2BBEBB8EC', {
      name: emailIdentity7187767D.attrDkimDnsTokenName2,
      type: 'CNAME',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        emailIdentity7187767D.attrDkimDnsTokenValue2,
      ],
      ttl: '1800',
    });

    if (emailIdentity7187767D == null) { throw new Error(`A combination of conditions caused 'emailIdentity7187767D' to be undefined. Fixit.`); }
    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const emailIdentityDkimDnsToken3Bb5e8a49 = new route53.CfnRecordSet(this, 'EmailIdentityDkimDnsToken3BB5E8A49', {
      name: emailIdentity7187767D.attrDkimDnsTokenName3,
      type: 'CNAME',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        emailIdentity7187767D.attrDkimDnsTokenValue3,
      ],
      ttl: '1800',
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const emailIdentityMailFromMxRecordCeaaecd0 = new route53.CfnRecordSet(this, 'EmailIdentityMailFromMxRecordCEAAECD0', {
      name: 'mail.cdk.dev.',
      type: 'MX',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        [
          '10 feedback-smtp.',
          this.region,
          '.amazonses.com',
        ].join(''),
      ],
      ttl: '1800',
    });

    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const emailIdentityMailFromTxtRecordE6b5e5d0 = new route53.CfnRecordSet(this, 'EmailIdentityMailFromTxtRecordE6B5E5D0', {
      name: 'mail.cdk.dev.',
      type: 'TXT',
      hostedZoneId: hostedZoneDb99f866.ref,
      resourceRecords: [
        '\"v=spf1 include:amazonses.com ~all\"',
      ],
      ttl: '1800',
    });
  }
}

