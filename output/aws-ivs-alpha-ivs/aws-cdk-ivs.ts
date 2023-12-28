import * as cdk from 'aws-cdk-lib';
import * as ivs from 'aws-cdk-lib/aws-ivs';

export interface AwsCdkIvsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkIvs extends cdk.Stack {
  public readonly allPropertiesPlaybackKeyPairArn9C29d23b;
  public readonly allPropertiesChannelArn97A102c5;
  public readonly allPropertiesStreamKeyArnB62c0761;

  public constructor(scope: cdk.App, id: string, props: AwsCdkIvsProps = {}) {
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
    const allPropertiesChannel737C871d = new ivs.CfnChannel(this, 'AllPropertiesChannel737C871D', {
      authorized: true,
      latencyMode: 'NORMAL',
      name: 'IVSIntegrationTestChannel',
      type: 'BASIC',
    });

    const allPropertiesPlaybackKeyPair96291E97 = new ivs.CfnPlaybackKeyPair(this, 'AllPropertiesPlaybackKeyPair96291E97', {
      name: 'IVSIntegrationTestPlaybackKeyPair',
      publicKeyMaterial: '-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEs6k8Xf6WyFq3yZXoup8G/gH6DntSATqD\nYfo83eX0GJCKxJ8fr09h9LP9HDGof8/bo66P+SGHeAARGF/O9WPAQVUgSlm/KMFX\nEPtPtOm1s0GR9k1ydU5hkI++f9CoZ5lM\n-----END PUBLIC KEY-----',
    });

    const defaultPropertiesChannelaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa201Fbd46 = new ivs.CfnChannel(this, 'DefaultPropertiesChannelaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa201FBD46', {
      name: 'aws-cdk-ivsDefaultPropertiesChannel-_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaEDEAEDA9',
    });

    const defaultPropertiesPlaybackKeyPairaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaB5d4be27 = new ivs.CfnPlaybackKeyPair(this, 'DefaultPropertiesPlaybackKeyPairaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaB5D4BE27', {
      publicKeyMaterial: '-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEHBm/D9UFf1z4czcAFuM7w+tstxxzoLVo\nfa1OT0gQjRYsy/YTcrKI5FS7ur3NZIcmiwqerr7dP0wSZjfEMNe82W1zWdkxHJ6Y\n73g9gZDxwGdjowZjEOIvAeH2Of6NeDOo\n-----END PUBLIC KEY-----',
    });

    if (allPropertiesChannel737C871d == null) { throw new Error(`A combination of conditions caused 'allPropertiesChannel737C871d' to be undefined. Fixit.`); }
    const allPropertiesStreamKey2A169ffe = new ivs.CfnStreamKey(this, 'AllPropertiesStreamKey2A169FFE', {
      channelArn: allPropertiesChannel737C871d.attrArn,
    });

    // Outputs
    this.allPropertiesPlaybackKeyPairArn9C29d23b = allPropertiesPlaybackKeyPair96291E97.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputAllPropertiesPlaybackKeyPairArn9C29D23B', {
      key: 'AllPropertiesPlaybackKeyPairArn9C29D23B',
      value: this.allPropertiesPlaybackKeyPairArn9C29d23b!.toString(),
    });
    this.allPropertiesChannelArn97A102c5 = allPropertiesChannel737C871d.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputAllPropertiesChannelArn97A102C5', {
      key: 'AllPropertiesChannelArn97A102C5',
      value: this.allPropertiesChannelArn97A102c5!.toString(),
    });
    this.allPropertiesStreamKeyArnB62c0761 = allPropertiesStreamKey2A169ffe.attrArn;
    new cdk.CfnOutput(this, 'CfnOutputAllPropertiesStreamKeyArnB62C0761', {
      key: 'AllPropertiesStreamKeyArnB62C0761',
      value: this.allPropertiesStreamKeyArnB62c0761!.toString(),
    });
  }
}

