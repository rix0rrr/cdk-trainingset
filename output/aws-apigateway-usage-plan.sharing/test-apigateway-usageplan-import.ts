import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface TestApigatewayUsageplanImportProps extends cdk.StackProps {
}

export class TestApigatewayUsageplanImport extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: TestApigatewayUsageplanImportProps = {}) {
    super(scope, id, props);

    // Resources
    const myapikey5C116c09 = new apigateway.CfnApiKey(this, 'myapikey5C116C09', {
      enabled: true,
    });

    if (myapikey5C116c09 == null) { throw new Error(`A combination of conditions caused 'myapikey5C116c09' to be undefined. Fixit.`); }
    const myusageplanUsagePlanKeyResourcetestapigatewayusageplanimportmyapikey14Cf31667ccb4183 = new apigateway.CfnUsagePlanKey(this, 'myusageplanUsagePlanKeyResourcetestapigatewayusageplanimportmyapikey14CF31667CCB4183', {
      keyId: myapikey5C116c09.ref,
      keyType: 'API_KEY',
      usagePlanId: cdk.Fn.importValue('test-apigateway-usageplan-create:ExportsOutputRefmyusageplan4B391740F6B819BA'),
    });
  }
}

