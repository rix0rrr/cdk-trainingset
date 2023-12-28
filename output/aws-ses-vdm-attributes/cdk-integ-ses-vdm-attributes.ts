import * as cdk from 'aws-cdk-lib';
import * as ses from 'aws-cdk-lib/aws-ses';

export interface cdk-integ-ses-vdm-attributesProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class cdk-integ-ses-vdm-attributes extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: cdk-integ-ses-vdm-attributesProps = {}) {
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
    const vdmD343523e = new ses.CfnVdmAttributes(this, 'VdmD343523E', {
      dashboardAttributes: {
        engagementMetrics: 'ENABLED',
      },
      guardianAttributes: {
        optimizedSharedDelivery: 'ENABLED',
      },
    });
  }
}

