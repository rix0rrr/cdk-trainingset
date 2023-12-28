import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface StepfunctionsrestapideploymentstackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Stepfunctionsrestapideploymentstack extends cdk.Stack {
  public readonly apiEndpoint;

  public constructor(scope: cdk.App, id: string, props: StepfunctionsrestapideploymentstackProps = {}) {
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
    const stateMachineRoleB840431d = new iam.CfnRole(this, 'StateMachineRoleB840431D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'states.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb = new iam.CfnRole(this, 'StepFunctionsRestApiANYStartSyncExecutionRole425C03BB', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const stepFunctionsRestApiC6e3e883 = new apigateway.CfnRestApi(this, 'StepFunctionsRestApiC6E3E883', {
      name: 'StepFunctionsRestApi',
    });

    const stepFunctionsRestApiCloudWatchRoleB06acdb9 = new iam.CfnRole(this, 'StepFunctionsRestApiCloudWatchRoleB06ACDB9', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'apigateway.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ].join(''),
      ],
    });
    stepFunctionsRestApiCloudWatchRoleB06acdb9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      roleArn: stateMachineRoleB840431d.attrArn,
      definitionString: '{\"StartAt\":\"PassTask\",\"States\":{\"PassTask\":{\"Type\":\"Pass\",\"Result\":\"Hello\",\"End\":true}}}',
      stateMachineType: 'EXPRESS',
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiCloudWatchRoleB06acdb9 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiCloudWatchRoleB06acdb9' to be undefined. Fixit.`); }
    const stepFunctionsRestApiAccountBd0ccc0e = new apigateway.CfnAccount(this, 'StepFunctionsRestApiAccountBD0CCC0E', {
      cloudWatchRoleArn: stepFunctionsRestApiCloudWatchRoleB06acdb9.attrArn,
    });
    stepFunctionsRestApiAccountBd0ccc0e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    stepFunctionsRestApiAccountBd0ccc0e.addDependency(stepFunctionsRestApiC6e3e883);

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    const stepFunctionsRestApiAny7699ca92 = new apigateway.CfnMethod(this, 'StepFunctionsRestApiANY7699CA92', {
      httpMethod: 'ANY',
      resourceId: stepFunctionsRestApiC6e3e883.attrRootResourceId,
      restApiId: stepFunctionsRestApiC6e3e883.ref,
      authorizationType: 'NONE',
      integration: {
        credentials: stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb.attrArn,
        integrationHttpMethod: 'POST',
        integrationResponses: [
          {
            responseTemplates: {
              'application/json': '#set($inputRoot = $input.path(\'$\'))\n#if($input.path(\'$.status\').toString().equals(\"FAILED\"))\n#set($context.responseOverride.status = 500)\n{\n\"error\": \"$input.path(\'$.error\')\",\n\"cause\": \"$input.path(\'$.cause\')\"\n}\n#else\n$input.path(\'$.output\')\n#end',
            },
            statusCode: '200',
          },
          {
            responseTemplates: {
              'application/json': '{\n            \"error\": \"Bad request!\"\n          }',
            },
            selectionPattern: '4\\d{2}',
            statusCode: '400',
          },
          {
            responseTemplates: {
              'application/json': '\"error\": $input.path(\'$.error\')',
            },
            selectionPattern: '5\\d{2}',
            statusCode: '500',
          },
        ],
        passthroughBehavior: 'NEVER',
        requestTemplates: {
          'application/json': [
            '## Velocity Template used for API Gateway request mapping template\n##\n## This template forwards the request body, header, path, and querystring\n## to the execution input of the state machine.\n##\n## \"@@\" is used here as a placeholder for \'\"\' to avoid using escape characters.\n\n#set($inputString = \'\')\n#set($includeHeaders = true)\n#set($includeQueryString = false)\n#set($includePath = false)\n#set($includeAuthorizer = false)\n#set($allParams = $input.params())\n{\n    \"stateMachineArn\": \"',
            stateMachine2E01a3a5.ref,
            '\",\n\n    #set($inputString = \"$inputString,@@body@@: $input.body\")\n\n    #if ($includeHeaders)\n        #set($inputString = \"$inputString, @@header@@:{\")\n        #foreach($paramName in $allParams.header.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.header.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n        \n    #end\n\n    #if ($includeQueryString)\n        #set($inputString = \"$inputString, @@querystring@@:{\")\n        #foreach($paramName in $allParams.querystring.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.querystring.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n\n    #if ($includePath)\n        #set($inputString = \"$inputString, @@path@@:{\")\n        #foreach($paramName in $allParams.path.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.path.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n    \n    #if ($includeAuthorizer)\n        #set($inputString = \"$inputString, @@authorizer@@:{\")\n        #foreach($paramName in $context.authorizer.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($context.authorizer.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n\n    #set($requestContext = \"{@@accountId@@:@@$context.identity.accountId@@,@@userArn@@:@@$context.identity.userArn@@}\")\n    ## Check if the request context should be included as part of the execution input\n    #if($requestContext && !$requestContext.empty)\n        #set($inputString = \"$inputString,\")\n        #set($inputString = \"$inputString @@requestContext@@: $requestContext\")\n    #end\n\n    #set($inputString = \"$inputString}\")\n    #set($inputString = $inputString.replaceAll(\"@@\",\'\"\'))\n    #set($len = $inputString.length() - 1)\n    \"input\": \"{$util.escapeJavaScript($inputString.substring(1,$len)).replaceAll(\"\\\\\'\",\"\'\")}\"\n}\n',
          ].join(''),
        },
        type: 'AWS',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':states:action/StartSyncExecution',
        ].join(''),
      },
      methodResponses: [
        {
          responseModels: {
            'application/json': 'Empty',
          },
          statusCode: '200',
        },
        {
          responseModels: {
            'application/json': 'Error',
          },
          statusCode: '400',
        },
        {
          responseModels: {
            'application/json': 'Error',
          },
          statusCode: '500',
        },
      ],
    });

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb' to be undefined. Fixit.`); }
    const stepFunctionsRestApiAnyStartSyncExecutionRoleDefaultPolicy7B6d0ced = new iam.CfnPolicy(this, 'StepFunctionsRestApiANYStartSyncExecutionRoleDefaultPolicy7B6D0CED', {
      policyDocument: {
        Statement: [
          {
            Action: 'states:StartSyncExecution',
            Effect: 'Allow',
            Resource: stateMachine2E01a3a5.ref,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'StepFunctionsRestApiANYStartSyncExecutionRoleDefaultPolicy7B6D0CED',
      roles: [
        stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb.ref,
      ],
    });

    if (stepFunctionsRestApiAny7699ca92 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiAny7699ca92' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    const deployment33381975b5dafda9a97138f301ea25da405640e8 = new apigateway.CfnDeployment(this, 'deployment33381975b5dafda9a97138f301ea25da405640e8', {
      restApiId: stepFunctionsRestApiC6e3e883.ref,
    });
    deployment33381975b5dafda9a97138f301ea25da405640e8.addDependency(stepFunctionsRestApiAny7699ca92);

    if (stepFunctionsRestApiAccountBd0ccc0e == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiAccountBd0ccc0e' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    if (deployment33381975b5dafda9a97138f301ea25da405640e8 == null) { throw new Error(`A combination of conditions caused 'deployment33381975b5dafda9a97138f301ea25da405640e8' to be undefined. Fixit.`); }
    const stage0661E4ac = new apigateway.CfnStage(this, 'stage0661E4AC', {
      restApiId: stepFunctionsRestApiC6e3e883.ref,
      deploymentId: deployment33381975b5dafda9a97138f301ea25da405640e8.ref,
      stageName: 'prod',
    });
    stage0661E4ac.addDependency(stepFunctionsRestApiAccountBd0ccc0e);

    // Outputs
    this.apiEndpoint = [
      'https://',
      stepFunctionsRestApiC6e3e883.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      stage0661E4ac.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputApiEndpoint', {
      key: 'ApiEndpoint',
      value: this.apiEndpoint!.toString(),
    });
  }
}

