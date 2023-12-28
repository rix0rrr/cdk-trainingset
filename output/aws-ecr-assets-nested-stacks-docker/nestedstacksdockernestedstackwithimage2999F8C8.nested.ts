import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface Nestedstacksdockernestedstackwithimage2999F8C8NestedProps extends cdk.StackProps {
}

export class Nestedstacksdockernestedstackwithimage2999F8C8Nested extends cdk.Stack {
  public readonly output;

  public constructor(scope: cdk.App, id: string, props: Nestedstacksdockernestedstackwithimage2999F8C8NestedProps = {}) {
    super(scope, id, props);

    // Resources
    const user00B015a1 = new iam.CfnUser(this, 'User00B015A1', {
    });

    if (user00B015a1 == null) { throw new Error(`A combination of conditions caused 'user00B015a1' to be undefined. Fixit.`); }
    const userDefaultPolicy1F97781e = new iam.CfnPolicy(this, 'UserDefaultPolicy1F97781E', {
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
      policyName: 'UserDefaultPolicy1F97781E',
      users: [
        user00B015a1.ref,
      ],
    });

    // Outputs
    this.output = `${this.account}.dkr.ecr.${this.region}.${this.urlSuffix}/cdk-hnb659fds-container-assets-${this.account}-${this.region}:0a3355be12051c9984bf2b0b2bba4e6ea535968e5b6e7396449701732fe5ed14`;
    new cdk.CfnOutput(this, 'CfnOutputoutput', {
      key: 'output',
      value: this.output!.toString(),
    });
  }
}

