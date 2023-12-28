import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface SfnrestapiwithoutdefaultmethodresponsesProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class Sfnrestapiwithoutdefaultmethodresponses extends cdk.Stack {
  public readonly stepFunctionsRestApiEndpoint0Dd66fcb;
  public readonly apiEndpoint;

  public constructor(scope: cdk.App, id: string, props: SfnrestapiwithoutdefaultmethodresponsesProps = {}) {
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: '{\"StartAt\":\"PassTask\",\"States\":{\"PassTask\":{\"Type\":\"Pass\",\"Result\":\"Hello\",\"End\":true}}}',
      roleArn: stateMachineRoleB840431d.attrArn,
      stateMachineType: 'EXPRESS',
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiAnyStartSyncExecutionRole425C03bb' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    const stepFunctionsRestApiAny7699ca92 = new apigateway.CfnMethod(this, 'StepFunctionsRestApiANY7699CA92', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
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
            '## Velocity Template used for API Gateway request mapping template\n##\n## This template forwards the request body, header, path, and querystring\n## to the execution input of the state machine.\n##\n## \"@@\" is used here as a placeholder for \'\"\' to avoid using escape characters.\n\n#set($inputString = \'\')\n#set($includeHeaders = false)\n#set($includeQueryString = true)\n#set($includePath = true)\n#set($includeAuthorizer = false)\n#set($allParams = $input.params())\n{\n    \"stateMachineArn\": \"',
            stateMachine2E01a3a5.ref,
            '\",\n\n    #set($inputString = \"$inputString,@@body@@: $input.body\")\n\n    #if ($includeHeaders)\n        #set($inputString = \"$inputString, @@header@@:{\")\n        #foreach($paramName in $allParams.header.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.header.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n        \n    #end\n\n    #if ($includeQueryString)\n        #set($inputString = \"$inputString, @@querystring@@:{\")\n        #foreach($paramName in $allParams.querystring.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.querystring.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n\n    #if ($includePath)\n        #set($inputString = \"$inputString, @@path@@:{\")\n        #foreach($paramName in $allParams.path.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($allParams.path.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n    \n    #if ($includeAuthorizer)\n        #set($inputString = \"$inputString, @@authorizer@@:{\")\n        #foreach($paramName in $context.authorizer.keySet())\n            #set($inputString = \"$inputString @@$paramName@@: @@$util.escapeJavaScript($context.authorizer.get($paramName))@@\")\n            #if($foreach.hasNext)\n                #set($inputString = \"$inputString,\")\n            #end\n        #end\n        #set($inputString = \"$inputString }\")\n    #end\n\n    #set($requestContext = \"\")\n    ## Check if the request context should be included as part of the execution input\n    #if($requestContext && !$requestContext.empty)\n        #set($inputString = \"$inputString,\")\n        #set($inputString = \"$inputString @@requestContext@@: $requestContext\")\n    #end\n\n    #set($inputString = \"$inputString}\")\n    #set($inputString = $inputString.replaceAll(\"@@\",\'\"\'))\n    #set($len = $inputString.length() - 1)\n    \"input\": \"{$util.escapeJavaScript($inputString.substring(1,$len)).replaceAll(\"\\\\\'\",\"\'\")}\"\n}\n',
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
      resourceId: stepFunctionsRestApiC6e3e883.attrRootResourceId,
      restApiId: stepFunctionsRestApiC6e3e883.ref,
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
    const stepFunctionsRestApiDeployment8Ff8d52a481e2c6fad35132b46721c49969398fb = new apigateway.CfnDeployment(this, 'StepFunctionsRestApiDeployment8FF8D52A481e2c6fad35132b46721c49969398fb', {
      description: 'Automatically created by the RestApi construct',
      restApiId: stepFunctionsRestApiC6e3e883.ref,
    });
    stepFunctionsRestApiDeployment8Ff8d52a481e2c6fad35132b46721c49969398fb.addDependency(stepFunctionsRestApiAny7699ca92);

    if (stepFunctionsRestApiC6e3e883 == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiC6e3e883' to be undefined. Fixit.`); }
    if (stepFunctionsRestApiDeployment8Ff8d52a481e2c6fad35132b46721c49969398fb == null) { throw new Error(`A combination of conditions caused 'stepFunctionsRestApiDeployment8Ff8d52a481e2c6fad35132b46721c49969398fb' to be undefined. Fixit.`); }
    const stepFunctionsRestApiDeploymentStageprodE1e3545e = new apigateway.CfnStage(this, 'StepFunctionsRestApiDeploymentStageprodE1E3545E', {
      deploymentId: stepFunctionsRestApiDeployment8Ff8d52a481e2c6fad35132b46721c49969398fb.ref,
      restApiId: stepFunctionsRestApiC6e3e883.ref,
      stageName: 'prod',
    });

    // Outputs
    this.stepFunctionsRestApiEndpoint0Dd66fcb = [
      'https://',
      stepFunctionsRestApiC6e3e883.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      stepFunctionsRestApiDeploymentStageprodE1e3545e.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputStepFunctionsRestApiEndpoint0DD66FCB', {
      key: 'StepFunctionsRestApiEndpoint0DD66FCB',
      value: this.stepFunctionsRestApiEndpoint0Dd66fcb!.toString(),
    });
    this.apiEndpoint = [
      'https://',
      stepFunctionsRestApiC6e3e883.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      stepFunctionsRestApiDeploymentStageprodE1e3545e.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputApiEndpoint', {
      key: 'ApiEndpoint',
      value: this.apiEndpoint!.toString(),
    });
  }
}

