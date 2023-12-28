import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface StackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: StackProps = {}) {
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
    const placementGroupOnlyPartitionE64d552b = new ec2.CfnPlacementGroup(this, 'PlacementGroupOnlyPartitionE64D552B', {
      partitionCount: 5,
      strategy: 'partition',
    });

    const placementGroupOnlySpreadLevel485Bbc0a = new ec2.CfnPlacementGroup(this, 'PlacementGroupOnlySpreadLevel485BBC0A', {
      spreadLevel: 'host',
      strategy: 'spread',
    });

    const placementGroupOnlyStrategyCluster0992Dd47 = new ec2.CfnPlacementGroup(this, 'PlacementGroupOnlyStrategyCluster0992DD47', {
      strategy: 'cluster',
    });

    const placementGroupOnlyStrategyPartition580333B9 = new ec2.CfnPlacementGroup(this, 'PlacementGroupOnlyStrategyPartition580333B9', {
      strategy: 'partition',
    });

    const placementSpreadHostAfe1cb82 = new ec2.CfnPlacementGroup(this, 'PlacementSpreadHostAFE1CB82', {
      spreadLevel: 'host',
      strategy: 'spread',
    });

    const placementSpreadOnlyBe12475d = new ec2.CfnPlacementGroup(this, 'PlacementSpreadOnlyBE12475D', {
      strategy: 'spread',
    });

    const placementSpreadRackAabf96d4 = new ec2.CfnPlacementGroup(this, 'PlacementSpreadRackAABF96D4', {
      spreadLevel: 'rack',
      strategy: 'spread',
    });

    const placementGroupNoProps90C69a95 = new ec2.CfnPlacementGroup(this, 'placementGroupNoProps90C69A95', {
    });
  }
}

