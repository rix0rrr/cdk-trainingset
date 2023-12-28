import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface test-apigateway-usageplan-multikeyProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class test-apigateway-usageplan-multikey extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: test-apigateway-usageplan-multikeyProps = {}) {
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
    const myapikey18B056ace = new apigateway.CfnApiKey(this, 'myapikey18B056ACE', {
      enabled: true,
    });

    const myapikey250C8f11b = new apigateway.CfnApiKey(this, 'myapikey250C8F11B', {
      enabled: true,
    });

    const myusageplan4B391740 = new apigateway.CfnUsagePlan(this, 'myusageplan4B391740', {
    });

    if (myapikey18B056ace == null) { throw new Error(`A combination of conditions caused 'myapikey18B056ace' to be undefined. Fixit.`); }
    if (myusageplan4B391740 == null) { throw new Error(`A combination of conditions caused 'myusageplan4B391740' to be undefined. Fixit.`); }
    const myusageplanUsagePlanKeyResourcetestapigatewayusageplanmultikeymyapikey1Ddabc389a2809a73 = new apigateway.CfnUsagePlanKey(this, 'myusageplanUsagePlanKeyResourcetestapigatewayusageplanmultikeymyapikey1DDABC389A2809A73', {
      keyId: myapikey18B056ace.ref,
      keyType: 'API_KEY',
      usagePlanId: myusageplan4B391740.ref,
    });

    if (myapikey250C8f11b == null) { throw new Error(`A combination of conditions caused 'myapikey250C8f11b' to be undefined. Fixit.`); }
    if (myusageplan4B391740 == null) { throw new Error(`A combination of conditions caused 'myusageplan4B391740' to be undefined. Fixit.`); }
    const myusageplanUsagePlanKeyResourcetestapigatewayusageplanmultikeymyapikey29D6460c6ae8de59d = new apigateway.CfnUsagePlanKey(this, 'myusageplanUsagePlanKeyResourcetestapigatewayusageplanmultikeymyapikey29D6460C6AE8DE59D', {
      keyId: myapikey250C8f11b.ref,
      keyType: 'API_KEY',
      usagePlanId: myusageplan4B391740.ref,
    });
  }
}

