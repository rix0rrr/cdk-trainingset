import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-iam-role-1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-iam-role-1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-iam-role-1Props = {}) {
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
    const myGroupCba54b1b = new iam.CfnGroup(this, 'MyGroupCBA54B1B', {
    });

    const yourGroup1005140B = new iam.CfnGroup(this, 'YourGroup1005140B', {
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const myPolicy39D66cf6 = new iam.CfnPolicy(this, 'MyPolicy39D66CF6', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:*',
            Effect: 'Allow',
            Resource: yourGroup1005140B.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyPolicy39D66CF6',
      groups: [
        myGroupCba54b1b.ref,
      ],
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const user1E278a736 = new iam.CfnUser(this, 'User1E278A736', {
      groups: [
        myGroupCba54b1b.ref,
        yourGroup1005140B.ref,
      ],
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const user21F1486d1 = new iam.CfnUser(this, 'User21F1486D1', {
      groups: [
        myGroupCba54b1b.ref,
        yourGroup1005140B.ref,
      ],
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const user3493Ec043 = new iam.CfnUser(this, 'User3493EC043', {
      groups: [
        myGroupCba54b1b.ref,
        yourGroup1005140B.ref,
      ],
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const user4Bbba4836 = new iam.CfnUser(this, 'User4BBBA4836', {
      groups: [
        myGroupCba54b1b.ref,
        yourGroup1005140B.ref,
      ],
    });

    if (myGroupCba54b1b == null) { throw new Error(`A combination of conditions caused 'myGroupCba54b1b' to be undefined. Fixit.`); }
    if (yourGroup1005140B == null) { throw new Error(`A combination of conditions caused 'yourGroup1005140B' to be undefined. Fixit.`); }
    const user5F9e592fe = new iam.CfnUser(this, 'User5F9E592FE', {
      groups: [
        myGroupCba54b1b.ref,
        yourGroup1005140B.ref,
      ],
    });
  }
}

