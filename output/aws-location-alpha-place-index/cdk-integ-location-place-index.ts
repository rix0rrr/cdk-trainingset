import * as cdk from 'aws-cdk-lib';
import * as location from 'aws-cdk-lib/aws-location';

export interface CdkIntegLocationPlaceIndexProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class CdkIntegLocationPlaceIndex extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: CdkIntegLocationPlaceIndexProps = {}) {
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
    const placeIndex21B3574e = new location.CfnPlaceIndex(this, 'PlaceIndex21B3574E', {
      dataSource: 'Esri',
      indexName: 'cdkinteglocationplaceindexPlaceIndex21A03EAC',
    });
  }
}

