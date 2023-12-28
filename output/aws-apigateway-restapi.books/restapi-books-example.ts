import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface restapi-books-exampleProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class restapi-books-example extends cdk.Stack {
  public readonly booksapiEndpointE230e8d5;

  public constructor(scope: cdk.App, id: string, props: restapi-books-exampleProps = {}) {
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
    const bookHandlerServiceRole894768Ad = new iam.CfnRole(this, 'BookHandlerServiceRole894768AD', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const booksHandlerServiceRole5B6a8847 = new iam.CfnRole(this, 'BooksHandlerServiceRole5B6A8847', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const helloServiceRole1E55ea16 = new iam.CfnRole(this, 'HelloServiceRole1E55EA16', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        ].join(''),
      ],
    });

    const booksapiCloudWatchRole089Cb225 = new iam.CfnRole(this, 'booksapiCloudWatchRole089CB225', {
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
    booksapiCloudWatchRole089Cb225.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const booksapiE1885304 = new apigateway.CfnRestApi(this, 'booksapiE1885304', {
      name: 'books-api',
    });

    if (bookHandlerServiceRole894768Ad == null) { throw new Error(`A combination of conditions caused 'bookHandlerServiceRole894768Ad' to be undefined. Fixit.`); }
    const bookHandlerF9638a7a = new lambda.CfnFunction(this, 'BookHandlerF9638A7A', {
      code: {
        zipFile: 'exports.handler = function echoHandlerCode(event, _, callback) {\n    return callback(undefined, {\n        isBase64Encoded: false,\n        statusCode: 200,\n        headers: { \'content-type\': \'application/json\' },\n        body: JSON.stringify(event),\n    });\n}',
      },
      handler: 'index.handler',
      role: bookHandlerServiceRole894768Ad.attrArn,
      runtime: 'nodejs18.x',
    });
    bookHandlerF9638a7a.addDependency(bookHandlerServiceRole894768Ad);

    if (booksHandlerServiceRole5B6a8847 == null) { throw new Error(`A combination of conditions caused 'booksHandlerServiceRole5B6a8847' to be undefined. Fixit.`); }
    const booksHandler3Eb83358 = new lambda.CfnFunction(this, 'BooksHandler3EB83358', {
      code: {
        zipFile: 'exports.handler = function echoHandlerCode(event, _, callback) {\n    return callback(undefined, {\n        isBase64Encoded: false,\n        statusCode: 200,\n        headers: { \'content-type\': \'application/json\' },\n        body: JSON.stringify(event),\n    });\n}',
      },
      handler: 'index.handler',
      role: booksHandlerServiceRole5B6a8847.attrArn,
      runtime: 'nodejs18.x',
    });
    booksHandler3Eb83358.addDependency(booksHandlerServiceRole5B6a8847);

    if (helloServiceRole1E55ea16 == null) { throw new Error(`A combination of conditions caused 'helloServiceRole1E55ea16' to be undefined. Fixit.`); }
    const hello4A628bd4 = new lambda.CfnFunction(this, 'Hello4A628BD4', {
      code: {
        zipFile: 'exports.handler = function helloCode(_event, _context, callback) {\n    return callback(undefined, {\n        statusCode: 200,\n        body: \'hello, world!\',\n    });\n}',
      },
      handler: 'index.handler',
      role: helloServiceRole1E55ea16.attrArn,
      runtime: 'nodejs18.x',
    });
    hello4A628bd4.addDependency(helloServiceRole1E55ea16);

    if (booksapiCloudWatchRole089Cb225 == null) { throw new Error(`A combination of conditions caused 'booksapiCloudWatchRole089Cb225' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapiAccountDba98fb9 = new apigateway.CfnAccount(this, 'booksapiAccountDBA98FB9', {
      cloudWatchRoleArn: booksapiCloudWatchRole089Cb225.attrArn,
    });
    booksapiAccountDba98fb9.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    booksapiAccountDba98fb9.addDependency(booksapiE1885304);

    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooks97D84727 = new apigateway.CfnResource(this, 'booksapibooks97D84727', {
      parentId: booksapiE1885304.attrRootResourceId,
      pathPart: 'books',
      restApiId: booksapiE1885304.ref,
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapiAnyApiPermissionTestrestapibooksexamplebooksapi4538F335anyb0d7d8ac = new lambda.CfnPermission(this, 'booksapiANYApiPermissionTestrestapibooksexamplebooksapi4538F335ANYB0D7D8AC', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/test-invoke-stage/*/',
      ].join(''),
    });

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapiAnyf4f0cdeb = new apigateway.CfnMethod(this, 'booksapiANYF4F0CDEB', {
      authorizationType: 'NONE',
      httpMethod: 'ANY',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          hello4A628bd4.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: booksapiE1885304.attrRootResourceId,
      restApiId: booksapiE1885304.ref,
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooks97D84727 == null) { throw new Error(`A combination of conditions caused 'booksapibooks97D84727' to be undefined. Fixit.`); }
    const booksapibooksGeta776447a = new apigateway.CfnMethod(this, 'booksapibooksGETA776447A', {
      authorizationType: 'AWS_IAM',
      httpMethod: 'GET',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          booksHandler3Eb83358.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: booksapibooks97D84727.ref,
      restApiId: booksapiE1885304.ref,
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksGetApiPermissionTestrestapibooksexamplebooksapi4538F335geTbooks01Fb3d1b = new lambda.CfnPermission(this, 'booksapibooksGETApiPermissionTestrestapibooksexamplebooksapi4538F335GETbooks01FB3D1B', {
      action: 'lambda:InvokeFunction',
      functionName: booksHandler3Eb83358.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/test-invoke-stage/GET/books',
      ].join(''),
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksPostApiPermissionTestrestapibooksexamplebooksapi4538F335posTbooks1C6d24c8 = new lambda.CfnPermission(this, 'booksapibooksPOSTApiPermissionTestrestapibooksexamplebooksapi4538F335POSTbooks1C6D24C8', {
      action: 'lambda:InvokeFunction',
      functionName: booksHandler3Eb83358.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/test-invoke-stage/POST/books',
      ].join(''),
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooks97D84727 == null) { throw new Error(`A combination of conditions caused 'booksapibooks97D84727' to be undefined. Fixit.`); }
    const booksapibooksPostf6c6559d = new apigateway.CfnMethod(this, 'booksapibooksPOSTF6C6559D', {
      authorizationType: 'AWS_IAM',
      httpMethod: 'POST',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          booksHandler3Eb83358.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: booksapibooks97D84727.ref,
      restApiId: booksapiE1885304.ref,
    });

    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooks97D84727 == null) { throw new Error(`A combination of conditions caused 'booksapibooks97D84727' to be undefined. Fixit.`); }
    const booksapibooksbookid5264Bca2 = new apigateway.CfnResource(this, 'booksapibooksbookid5264BCA2', {
      parentId: booksapibooks97D84727.ref,
      pathPart: '{book_id}',
      restApiId: booksapiE1885304.ref,
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksbookidDeleteApiPermissionTestrestapibooksexamplebooksapi4538F335deletEbooksbookid09D6cb8a = new lambda.CfnPermission(this, 'booksapibooksbookidDELETEApiPermissionTestrestapibooksexamplebooksapi4538F335DELETEbooksbookid09D6CB8A', {
      action: 'lambda:InvokeFunction',
      functionName: bookHandlerF9638a7a.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/test-invoke-stage/DELETE/books/*',
      ].join(''),
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksbookidGetApiPermissionTestrestapibooksexamplebooksapi4538F335geTbooksbookidA0230b08 = new lambda.CfnPermission(this, 'booksapibooksbookidGETApiPermissionTestrestapibooksexamplebooksapi4538F335GETbooksbookidA0230B08', {
      action: 'lambda:InvokeFunction',
      functionName: bookHandlerF9638a7a.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/test-invoke-stage/GET/books/*',
      ].join(''),
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooksbookid5264Bca2 == null) { throw new Error(`A combination of conditions caused 'booksapibooksbookid5264Bca2' to be undefined. Fixit.`); }
    const booksapibooksbookidDelete214f4059 = new apigateway.CfnMethod(this, 'booksapibooksbookidDELETE214F4059', {
      authorizationType: 'AWS_IAM',
      httpMethod: 'DELETE',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          bookHandlerF9638a7a.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: booksapibooksbookid5264Bca2.ref,
      restApiId: booksapiE1885304.ref,
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooksbookid5264Bca2 == null) { throw new Error(`A combination of conditions caused 'booksapibooksbookid5264Bca2' to be undefined. Fixit.`); }
    const booksapibooksbookidGetcce21986 = new apigateway.CfnMethod(this, 'booksapibooksbookidGETCCE21986', {
      authorizationType: 'AWS_IAM',
      httpMethod: 'GET',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          bookHandlerF9638a7a.attrArn,
          '/invocations',
        ].join(''),
      },
      resourceId: booksapibooksbookid5264Bca2.ref,
      restApiId: booksapiE1885304.ref,
    });

    if (booksapiAnyf4f0cdeb == null) { throw new Error(`A combination of conditions caused 'booksapiAnyf4f0cdeb' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    if (booksapibooks97D84727 == null) { throw new Error(`A combination of conditions caused 'booksapibooks97D84727' to be undefined. Fixit.`); }
    if (booksapibooksGeta776447a == null) { throw new Error(`A combination of conditions caused 'booksapibooksGeta776447a' to be undefined. Fixit.`); }
    if (booksapibooksPostf6c6559d == null) { throw new Error(`A combination of conditions caused 'booksapibooksPostf6c6559d' to be undefined. Fixit.`); }
    if (booksapibooksbookid5264Bca2 == null) { throw new Error(`A combination of conditions caused 'booksapibooksbookid5264Bca2' to be undefined. Fixit.`); }
    if (booksapibooksbookidDelete214f4059 == null) { throw new Error(`A combination of conditions caused 'booksapibooksbookidDelete214f4059' to be undefined. Fixit.`); }
    if (booksapibooksbookidGetcce21986 == null) { throw new Error(`A combination of conditions caused 'booksapibooksbookidGetcce21986' to be undefined. Fixit.`); }
    const booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5 = new apigateway.CfnDeployment(this, 'booksapiDeployment308B08F132cc25cf8168bd5e99b9e6d4915866b5', {
      description: 'Automatically created by the RestApi construct',
      restApiId: booksapiE1885304.ref,
    });
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapiAnyf4f0cdeb);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooksbookidDelete214f4059);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooksbookidGetcce21986);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooksbookid5264Bca2);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooksGeta776447a);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooksPostf6c6559d);
    booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.addDependency(booksapibooks97D84727);

    if (booksapiAccountDba98fb9 == null) { throw new Error(`A combination of conditions caused 'booksapiAccountDba98fb9' to be undefined. Fixit.`); }
    if (booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5 == null) { throw new Error(`A combination of conditions caused 'booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapiDeploymentStageprod55D8e03e = new apigateway.CfnStage(this, 'booksapiDeploymentStageprod55D8E03E', {
      deploymentId: booksapiDeployment308B08f132cc25cf8168bd5e99b9e6d4915866b5.ref,
      restApiId: booksapiE1885304.ref,
      stageName: 'prod',
    });
    booksapiDeploymentStageprod55D8e03e.addDependency(booksapiAccountDba98fb9);

    if (hello4A628bd4 == null) { throw new Error(`A combination of conditions caused 'hello4A628bd4' to be undefined. Fixit.`); }
    if (booksapiDeploymentStageprod55D8e03e == null) { throw new Error(`A combination of conditions caused 'booksapiDeploymentStageprod55D8e03e' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapiAnyApiPermissionrestapibooksexamplebooksapi4538F335any73b3cddc = new lambda.CfnPermission(this, 'booksapiANYApiPermissionrestapibooksexamplebooksapi4538F335ANY73B3CDDC', {
      action: 'lambda:InvokeFunction',
      functionName: hello4A628bd4.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/',
        booksapiDeploymentStageprod55D8e03e.ref,
        '/*/',
      ].join(''),
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiDeploymentStageprod55D8e03e == null) { throw new Error(`A combination of conditions caused 'booksapiDeploymentStageprod55D8e03e' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksGetApiPermissionrestapibooksexamplebooksapi4538F335geTbooks391776D8 = new lambda.CfnPermission(this, 'booksapibooksGETApiPermissionrestapibooksexamplebooksapi4538F335GETbooks391776D8', {
      action: 'lambda:InvokeFunction',
      functionName: booksHandler3Eb83358.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/',
        booksapiDeploymentStageprod55D8e03e.ref,
        '/GET/books',
      ].join(''),
    });

    if (booksHandler3Eb83358 == null) { throw new Error(`A combination of conditions caused 'booksHandler3Eb83358' to be undefined. Fixit.`); }
    if (booksapiDeploymentStageprod55D8e03e == null) { throw new Error(`A combination of conditions caused 'booksapiDeploymentStageprod55D8e03e' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksPostApiPermissionrestapibooksexamplebooksapi4538F335posTbooksDfec643f = new lambda.CfnPermission(this, 'booksapibooksPOSTApiPermissionrestapibooksexamplebooksapi4538F335POSTbooksDFEC643F', {
      action: 'lambda:InvokeFunction',
      functionName: booksHandler3Eb83358.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/',
        booksapiDeploymentStageprod55D8e03e.ref,
        '/POST/books',
      ].join(''),
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiDeploymentStageprod55D8e03e == null) { throw new Error(`A combination of conditions caused 'booksapiDeploymentStageprod55D8e03e' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksbookidDeleteApiPermissionrestapibooksexamplebooksapi4538F335deletEbooksbookid76C1c947 = new lambda.CfnPermission(this, 'booksapibooksbookidDELETEApiPermissionrestapibooksexamplebooksapi4538F335DELETEbooksbookid76C1C947', {
      action: 'lambda:InvokeFunction',
      functionName: bookHandlerF9638a7a.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/',
        booksapiDeploymentStageprod55D8e03e.ref,
        '/DELETE/books/*',
      ].join(''),
    });

    if (bookHandlerF9638a7a == null) { throw new Error(`A combination of conditions caused 'bookHandlerF9638a7a' to be undefined. Fixit.`); }
    if (booksapiDeploymentStageprod55D8e03e == null) { throw new Error(`A combination of conditions caused 'booksapiDeploymentStageprod55D8e03e' to be undefined. Fixit.`); }
    if (booksapiE1885304 == null) { throw new Error(`A combination of conditions caused 'booksapiE1885304' to be undefined. Fixit.`); }
    const booksapibooksbookidGetApiPermissionrestapibooksexamplebooksapi4538F335geTbooksbookidBb91dfbd = new lambda.CfnPermission(this, 'booksapibooksbookidGETApiPermissionrestapibooksexamplebooksapi4538F335GETbooksbookidBB91DFBD', {
      action: 'lambda:InvokeFunction',
      functionName: bookHandlerF9638a7a.attrArn,
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksapiE1885304.ref,
        '/',
        booksapiDeploymentStageprod55D8e03e.ref,
        '/GET/books/*',
      ].join(''),
    });

    // Outputs
    this.booksapiEndpointE230e8d5 = [
      'https://',
      booksapiE1885304.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      booksapiDeploymentStageprod55D8e03e.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputbooksapiEndpointE230E8D5', {
      key: 'booksapiEndpointE230E8D5',
      value: this.booksapiEndpointE230e8d5!.toString(),
    });
  }
}

