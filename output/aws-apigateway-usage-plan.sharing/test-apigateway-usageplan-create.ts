import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export interface TestApigatewayUsageplanCreateProps extends cdk.StackProps {
}

export class TestApigatewayUsageplanCreate extends cdk.Stack {
  public readonly exportsOutputRefmyusageplan4B391740f6b819ba;

  public constructor(scope: cdk.App, id: string, props: TestApigatewayUsageplanCreateProps = {}) {
    super(scope, id, props);

    // Resources
    const myusageplan4B391740 = new apigateway.CfnUsagePlan(this, 'myusageplan4B391740', {
    });

    // Outputs
    this.exportsOutputRefmyusageplan4B391740f6b819ba = myusageplan4B391740.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefmyusageplan4B391740F6B819BA', {
      key: 'ExportsOutputRefmyusageplan4B391740F6B819BA',
      exportName: 'test-apigateway-usageplan-create:ExportsOutputRefmyusageplan4B391740F6B819BA',
      value: this.exportsOutputRefmyusageplan4B391740f6b819ba!.toString(),
    });
  }
}

