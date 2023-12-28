import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface stackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps = {}) {
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
    const destinationEventBus776315F0 = new events.CfnEventBus(this, 'DestinationEventBus776315F0', {
      name: 'stackDestinationEventBus3059F22F',
    });

    const eventBridgeApi398Ae60d = new appsync.CfnGraphQLApi(this, 'EventBridgeApi398AE60D', {
      authenticationType: 'API_KEY',
      name: 'EventBridgeApi',
    });

    const eventBridgeApiEventBridgeDsServiceRoleF433388f = new iam.CfnRole(this, 'EventBridgeApiEventBridgeDsServiceRoleF433388F', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'appsync.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    if (destinationEventBus776315F0 == null) { throw new Error(`A combination of conditions caused 'destinationEventBus776315F0' to be undefined. Fixit.`); }
    if (eventBridgeApi398Ae60d == null) { throw new Error(`A combination of conditions caused 'eventBridgeApi398Ae60d' to be undefined. Fixit.`); }
    if (eventBridgeApiEventBridgeDsServiceRoleF433388f == null) { throw new Error(`A combination of conditions caused 'eventBridgeApiEventBridgeDsServiceRoleF433388f' to be undefined. Fixit.`); }
    const eventBridgeApiEventBridgeDs3E3bc289 = new appsync.CfnDataSource(this, 'EventBridgeApiEventBridgeDs3E3BC289', {
      apiId: eventBridgeApi398Ae60d.attrApiId,
      name: 'EventBridgeDs',
      type: 'AMAZON_EVENTBRIDGE',
      eventBridgeConfig: {
        eventBusArn: destinationEventBus776315F0.attrArn,
      },
      serviceRoleArn: eventBridgeApiEventBridgeDsServiceRoleF433388f.attrArn,
    });

    if (destinationEventBus776315F0 == null) { throw new Error(`A combination of conditions caused 'destinationEventBus776315F0' to be undefined. Fixit.`); }
    if (eventBridgeApiEventBridgeDsServiceRoleF433388f == null) { throw new Error(`A combination of conditions caused 'eventBridgeApiEventBridgeDsServiceRoleF433388f' to be undefined. Fixit.`); }
    const eventBridgeApiEventBridgeDsServiceRoleDefaultPolicyF1047c06 = new iam.CfnPolicy(this, 'EventBridgeApiEventBridgeDsServiceRoleDefaultPolicyF1047C06', {
      policyDocument: {
        Statement: [
          {
            Action: 'events:PutEvents',
            Effect: 'Allow',
            Resource: destinationEventBus776315F0.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EventBridgeApiEventBridgeDsServiceRoleDefaultPolicyF1047C06',
      roles: [
        eventBridgeApiEventBridgeDsServiceRoleF433388f.ref,
      ],
    });

    if (eventBridgeApi398Ae60d == null) { throw new Error(`A combination of conditions caused 'eventBridgeApi398Ae60d' to be undefined. Fixit.`); }
    const eventBridgeApiSchema535E9664 = new appsync.CfnGraphQLSchema(this, 'EventBridgeApiSchema535E9664', {
      apiId: eventBridgeApi398Ae60d.attrApiId,
      definition: 'schema {\n    query: Query\n    mutation: Mutation\n}\n\ntype Query {\n    event(id:ID!): Event\n}\n\ntype Mutation {\n    emitEvent(id: ID!, name: String): PutEventsResult!\n}\n\ntype Event {\n    id: ID!\n    name: String!\n}\n\ntype Entry {\n    ErrorCode: String\n    ErrorMessage: String\n    EventId: String\n}\n\ntype PutEventsResult {\n    Entries: [Entry!]\n    FailedEntry: Int\n}',
    });

    if (eventBridgeApi398Ae60d == null) { throw new Error(`A combination of conditions caused 'eventBridgeApi398Ae60d' to be undefined. Fixit.`); }
    if (eventBridgeApiSchema535E9664 == null) { throw new Error(`A combination of conditions caused 'eventBridgeApiSchema535E9664' to be undefined. Fixit.`); }
    const eventBridgeApiDefaultApiKeyC757e0ea = new appsync.CfnApiKey(this, 'EventBridgeApiDefaultApiKeyC757E0EA', {
      apiId: eventBridgeApi398Ae60d.attrApiId,
    });
    eventBridgeApiDefaultApiKeyC757e0ea.addDependency(eventBridgeApiSchema535E9664);

    if (eventBridgeApi398Ae60d == null) { throw new Error(`A combination of conditions caused 'eventBridgeApi398Ae60d' to be undefined. Fixit.`); }
    if (eventBridgeApiEventBridgeDs3E3bc289 == null) { throw new Error(`A combination of conditions caused 'eventBridgeApiEventBridgeDs3E3bc289' to be undefined. Fixit.`); }
    if (eventBridgeApiSchema535E9664 == null) { throw new Error(`A combination of conditions caused 'eventBridgeApiSchema535E9664' to be undefined. Fixit.`); }
    const eventBridgeApiEventResolverD968f6c6 = new appsync.CfnResolver(this, 'EventBridgeApiEventResolverD968F6C6', {
      apiId: eventBridgeApi398Ae60d.attrApiId,
      fieldName: 'emitEvent',
      typeName: 'Mutation',
      dataSourceName: 'EventBridgeDs',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\" : \"2018-05-29\", \"operation\": \"PutEvents\", \"events\" : [{ \"source\": \"integ.appsync.eventbridge\", \"detailType\": \"Mutation.emitEvent\", \"detail\": $util.toJson($context.arguments) }]}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    eventBridgeApiEventResolverD968f6c6.addDependency(eventBridgeApiEventBridgeDs3E3bc289);
    eventBridgeApiEventResolverD968f6c6.addDependency(eventBridgeApiSchema535E9664);
  }
}

