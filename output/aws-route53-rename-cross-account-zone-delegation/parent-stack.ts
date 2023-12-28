import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface ParentStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class ParentStack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: ParentStackProps = {}) {
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
    const crossAccountRoleFace29d1 = new iam.CfnRole(this, 'CrossAccountRoleFACE29D1', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: 'arn:aws:iam::234567890123:root',
            },
          },
        ],
        Version: '2012-10-17',
      },
      roleName: 'MyUniqueDelegationRole',
    });

    const hostedZoneDb99f866 = new route53.CfnHostedZone(this, 'HostedZoneDB99F866', {
      name: 'uniqueexample.com.',
    });

    if (crossAccountRoleFace29d1 == null) { throw new Error(`A combination of conditions caused 'crossAccountRoleFace29d1' to be undefined. Fixit.`); }
    if (hostedZoneDb99f866 == null) { throw new Error(`A combination of conditions caused 'hostedZoneDb99f866' to be undefined. Fixit.`); }
    const crossAccountRoleDefaultPolicy212A317f = new iam.CfnPolicy(this, 'CrossAccountRoleDefaultPolicy212A317F', {
      policyDocument: {
        Statement: [
          {
            Action: 'route53:ChangeResourceRecordSets',
            Condition: {
              'ForAllValues:StringEquals': {
                'route53:ChangeResourceRecordSetsRecordTypes': [
                  'NS',
                ],
                'route53:ChangeResourceRecordSetsActions': [
                  'UPSERT',
                  'DELETE',
                ],
              },
            },
            Effect: 'Allow',
            Resource: [
              'arn:aws:route53:::hostedzone/',
              hostedZoneDb99f866.ref,
            ].join(''),
          },
          {
            Action: 'route53:ListHostedZonesByName',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'CrossAccountRoleDefaultPolicy212A317F',
      roles: [
        crossAccountRoleFace29d1.ref,
      ],
    });
  }
}

