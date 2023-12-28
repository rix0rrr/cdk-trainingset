import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface crossregionconsumerIntegNested815BEF8A.nestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetocrossregionconsumerExportsReader5D0359e7cdkexportscrossregionconsumercrossregionproduceruseast1FnGetAttIntegQueue3A18718aQueueName8D8d3c9b: string;
  /**
   */
  readonly referencetocrossregionconsumerExportsReader5D0359e7cdkexportscrossregionconsumercrossregionproduceruseast1FnGetAttIntegNestedNestedStackIntegNestedNestedStackResource168C5881OutputscrossregionproducerIntegNestedNestedIntegQueueD686db69QueueNameC1c9c99e: string;
}

export class crossregionconsumerIntegNested815BEF8A.nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: crossregionconsumerIntegNested815BEF8A.nestedProps) {
    super(scope, id, props);

    // Resources
    const integNestedParameter04B9b8a01 = new ssm.CfnParameter(this, 'IntegNestedParameter04B9B8A01', {
      name: 'integ-nested-parameter0',
      type: 'String',
      value: props.referencetocrossregionconsumerExportsReader5D0359e7cdkexportscrossregionconsumercrossregionproduceruseast1FnGetAttIntegQueue3A18718aQueueName8D8d3c9b!,
    });

    const integNestedParameter1De6274d4 = new ssm.CfnParameter(this, 'IntegNestedParameter1DE6274D4', {
      name: 'integ-nested-parameter1',
      type: 'String',
      value: props.referencetocrossregionconsumerExportsReader5D0359e7cdkexportscrossregionconsumercrossregionproduceruseast1FnGetAttIntegNestedNestedStackIntegNestedNestedStackResource168C5881OutputscrossregionproducerIntegNestedNestedIntegQueueD686db69QueueNameC1c9c99e!,
    });
  }
}

