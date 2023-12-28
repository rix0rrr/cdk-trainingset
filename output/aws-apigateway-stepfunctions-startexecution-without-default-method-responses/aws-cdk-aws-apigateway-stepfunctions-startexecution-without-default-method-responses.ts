import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsCdkAwsApigatewayStepfunctionsStartexecutionWithoutDefaultMethodResponsesProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsCdkAwsApigatewayStepfunctionsStartexecutionWithoutDefaultMethodResponses extends cdk.Stack {
  public readonly myrestapiEndpoint0De8a5de;

  public constructor(scope: cdk.App, id: string, props: AwsCdkAwsApigatewayStepfunctionsStartexecutionWithoutDefaultMethodResponsesProps = {}) {
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

    const myrestapiBac2bf45 = new apigateway.CfnRestApi(this, 'myrestapiBAC2BF45', {
      name: 'my-rest-api',
    });

    const myrestapiGetStartSyncExecutionRoleC284c05b = new iam.CfnRole(this, 'myrestapiGETStartSyncExecutionRoleC284C05B', {
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: '{\"StartAt\":\"passTask\",\"States\":{\"passTask\":{\"Type\":\"Pass\",\"InputPath\":\"$.somekey\",\"End\":true}}}',
      roleArn: stateMachineRoleB840431d.attrArn,
      stateMachineType: 'EXPRESS',
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (myrestapiBac2bf45 == null) { throw new Error(`A combination of conditions caused 'myrestapiBac2bf45' to be undefined. Fixit.`); }
    if (myrestapiGetStartSyncExecutionRoleC284c05b == null) { throw new Error(`A combination of conditions caused 'myrestapiGetStartSyncExecutionRoleC284c05b' to be undefined. Fixit.`); }
    const myrestapiGet3a49a218 = new apigateway.CfnMethod(this, 'myrestapiGET3A49A218', {
      authorizationType: 'NONE',
      httpMethod: 'GET',
      integration: {
        credentials: myrestapiGetStartSyncExecutionRoleC284c05b.attrArn,
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
      methodResponses: [
        {
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
          statusCode: '200',
        },
      ],
      resourceId: myrestapiBac2bf45.attrRootResourceId,
      restApiId: myrestapiBac2bf45.ref,
    });

    if (stateMachine2E01a3a5 == null) { throw new Error(`A combination of conditions caused 'stateMachine2E01a3a5' to be undefined. Fixit.`); }
    if (myrestapiGetStartSyncExecutionRoleC284c05b == null) { throw new Error(`A combination of conditions caused 'myrestapiGetStartSyncExecutionRoleC284c05b' to be undefined. Fixit.`); }
    const myrestapiGetStartSyncExecutionRoleDefaultPolicy8B2f6adf = new iam.CfnPolicy(this, 'myrestapiGETStartSyncExecutionRoleDefaultPolicy8B2F6ADF', {
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
      policyName: 'myrestapiGETStartSyncExecutionRoleDefaultPolicy8B2F6ADF',
      roles: [
        myrestapiGetStartSyncExecutionRoleC284c05b.ref,
      ],
    });

    if (myrestapiBac2bf45 == null) { throw new Error(`A combination of conditions caused 'myrestapiBac2bf45' to be undefined. Fixit.`); }
    if (myrestapiGet3a49a218 == null) { throw new Error(`A combination of conditions caused 'myrestapiGet3a49a218' to be undefined. Fixit.`); }
    const myrestapiDeployment010A9d4f284640fa221c0b7931c23aed241b95fc = new apigateway.CfnDeployment(this, 'myrestapiDeployment010A9D4F284640fa221c0b7931c23aed241b95fc', {
      description: 'Automatically created by the RestApi construct',
      restApiId: myrestapiBac2bf45.ref,
    });
    myrestapiDeployment010A9d4f284640fa221c0b7931c23aed241b95fc.addDependency(myrestapiGet3a49a218);

    if (myrestapiBac2bf45 == null) { throw new Error(`A combination of conditions caused 'myrestapiBac2bf45' to be undefined. Fixit.`); }
    if (myrestapiDeployment010A9d4f284640fa221c0b7931c23aed241b95fc == null) { throw new Error(`A combination of conditions caused 'myrestapiDeployment010A9d4f284640fa221c0b7931c23aed241b95fc' to be undefined. Fixit.`); }
    const myrestapiDeploymentStageprod3140E1be = new apigateway.CfnStage(this, 'myrestapiDeploymentStageprod3140E1BE', {
      deploymentId: myrestapiDeployment010A9d4f284640fa221c0b7931c23aed241b95fc.ref,
      restApiId: myrestapiBac2bf45.ref,
      stageName: 'prod',
    });

    // Outputs
    this.myrestapiEndpoint0De8a5de = [
      'https://',
      myrestapiBac2bf45.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      myrestapiDeploymentStageprod3140E1be.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputmyrestapiEndpoint0DE8A5DE', {
      key: 'myrestapiEndpoint0DE8A5DE',
      value: this.myrestapiEndpoint0De8a5de!.toString(),
    });
  }
}

