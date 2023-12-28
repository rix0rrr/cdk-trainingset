import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export interface Crossregionconsumer2Integnested80Dba5D8NestedProps extends cdk.StackProps {
  /**
   */
  readonly referencetocrossregionconsumer2ExportsReader29C6f905cdkexportscrossregionconsumer2crossregionproduceruseast1FnGetAttIntegQueue3A18718aQueueName8D8d3c9b: string;
  /**
   */
  readonly referencetocrossregionconsumer2ExportsReader29C6f905cdkexportscrossregionconsumer2crossregionproduceruseast1FnGetAttIntegNestedNestedStackIntegNestedNestedStackResource168C5881OutputscrossregionproducerIntegNestedNestedIntegQueueD686db69QueueNameC1c9c99e: string;
}

export class Crossregionconsumer2Integnested80Dba5D8Nested extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: Crossregionconsumer2Integnested80Dba5D8NestedProps) {
    super(scope, id, props);

    // Resources
    const integNestedParameter04B9b8a01 = new ssm.CfnParameter(this, 'IntegNestedParameter04B9B8A01', {
      name: 'integ-nested-parameter0',
      type: 'String',
      value: props.referencetocrossregionconsumer2ExportsReader29C6f905cdkexportscrossregionconsumer2crossregionproduceruseast1FnGetAttIntegQueue3A18718aQueueName8D8d3c9b!,
    });

    const integNestedParameter1De6274d4 = new ssm.CfnParameter(this, 'IntegNestedParameter1DE6274D4', {
      name: 'integ-nested-parameter1',
      type: 'String',
      value: props.referencetocrossregionconsumer2ExportsReader29C6f905cdkexportscrossregionconsumer2crossregionproduceruseast1FnGetAttIntegNestedNestedStackIntegNestedNestedStackResource168C5881OutputscrossregionproducerIntegNestedNestedIntegQueueD686db69QueueNameC1c9c99e!,
    });
  }
}

