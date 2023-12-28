import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface IntegEc2PrefixListTestProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegEc2PrefixListTest extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegEc2PrefixListTestProps = {}) {
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
    const prefixList469Fcc0b = new ec2.CfnPrefixList(this, 'PrefixList469FCC0B', {
      addressFamily: 'IPv4',
      maxEntries: 2,
      prefixListName: 'integec2prefixlisttestPrefixList498BBB96',
      entries: [
        {
          cidr: '10.0.0.1/32',
        },
        {
          cidr: '10.0.0.2/32',
          description: 'sample1',
        },
      ],
    });
  }
}

