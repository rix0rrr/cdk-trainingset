import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface SecondStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class SecondStack extends cdk.Stack {
  public readonly booksApiEndpointF2aa70a2;

  public constructor(scope: cdk.App, id: string, props: SecondStackProps = {}) {
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
    const booksApi60Ac975f = new apigateway.CfnRestApi(this, 'BooksApi60AC975F', {
      name: 'SecondRestAPI',
    });

    const booksApiCloudWatchRoleB120adba = new iam.CfnRole(this, 'BooksApiCloudWatchRoleB120ADBA', {
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
    booksApiCloudWatchRoleB120adba.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    const booksApiAny0c4eabe3 = new apigateway.CfnMethod(this, 'BooksApiANY0C4EABE3', {
      httpMethod: 'ANY',
      resourceId: booksApi60Ac975f.attrRootResourceId,
      restApiId: booksApi60Ac975f.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    if (booksApiCloudWatchRoleB120adba == null) { throw new Error(`A combination of conditions caused 'booksApiCloudWatchRoleB120adba' to be undefined. Fixit.`); }
    const booksApiAccount9C44af8e = new apigateway.CfnAccount(this, 'BooksApiAccount9C44AF8E', {
      cloudWatchRoleArn: booksApiCloudWatchRoleB120adba.attrArn,
    });
    booksApiAccount9C44af8e.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    booksApiAccount9C44af8e.addDependency(booksApi60Ac975f);

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    const booksApibooks1F745538 = new apigateway.CfnResource(this, 'BooksApibooks1F745538', {
      parentId: booksApi60Ac975f.attrRootResourceId,
      pathPart: 'books',
      restApiId: booksApi60Ac975f.ref,
    });

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    const booksApibooksGetApiPermissionTestSecondStackBooksApi2660Dec5geTbooks0B7ed39d = new lambda.CfnPermission(this, 'BooksApibooksGETApiPermissionTestSecondStackBooksApi2660DEC5GETbooks0B7ED39D', {
      action: 'lambda:InvokeFunction',
      functionName: cdk.Fn.importValue('FirstStack:ExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3'),
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksApi60Ac975f.ref,
        '/test-invoke-stage/GET/books',
      ].join(''),
    });

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    if (booksApibooks1F745538 == null) { throw new Error(`A combination of conditions caused 'booksApibooks1F745538' to be undefined. Fixit.`); }
    const booksApibooksGet6066bf7e = new apigateway.CfnMethod(this, 'BooksApibooksGET6066BF7E', {
      httpMethod: 'GET',
      resourceId: booksApibooks1F745538.ref,
      restApiId: booksApi60Ac975f.ref,
      authorizationType: 'NONE',
      integration: {
        integrationHttpMethod: 'POST',
        type: 'AWS_PROXY',
        uri: [
          'arn:',
          this.partition,
          ':apigateway:',
          this.region,
          ':lambda:path/2015-03-31/functions/',
          cdk.Fn.importValue('FirstStack:ExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3'),
          '/invocations',
        ].join(''),
      },
    });

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    if (booksApiAny0c4eabe3 == null) { throw new Error(`A combination of conditions caused 'booksApiAny0c4eabe3' to be undefined. Fixit.`); }
    if (booksApibooks1F745538 == null) { throw new Error(`A combination of conditions caused 'booksApibooks1F745538' to be undefined. Fixit.`); }
    if (booksApibooksGet6066bf7e == null) { throw new Error(`A combination of conditions caused 'booksApibooksGet6066bf7e' to be undefined. Fixit.`); }
    const booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be = new apigateway.CfnDeployment(this, 'BooksApiDeployment86CA39AF4ff82f86c127f53c9de94d266b1906be', {
      restApiId: booksApi60Ac975f.ref,
      description: 'Automatically created by the RestApi construct',
    });
    booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be.addDependency(booksApiAny0c4eabe3);
    booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be.addDependency(booksApibooksGet6066bf7e);
    booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be.addDependency(booksApibooks1F745538);

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    if (booksApiAccount9C44af8e == null) { throw new Error(`A combination of conditions caused 'booksApiAccount9C44af8e' to be undefined. Fixit.`); }
    if (booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be == null) { throw new Error(`A combination of conditions caused 'booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be' to be undefined. Fixit.`); }
    const booksApiDeploymentStageprod0693B760 = new apigateway.CfnStage(this, 'BooksApiDeploymentStageprod0693B760', {
      restApiId: booksApi60Ac975f.ref,
      deploymentId: booksApiDeployment86Ca39af4ff82f86c127f53c9de94d266b1906be.ref,
      stageName: 'prod',
    });
    booksApiDeploymentStageprod0693B760.addDependency(booksApiAccount9C44af8e);

    if (booksApi60Ac975f == null) { throw new Error(`A combination of conditions caused 'booksApi60Ac975f' to be undefined. Fixit.`); }
    if (booksApiDeploymentStageprod0693B760 == null) { throw new Error(`A combination of conditions caused 'booksApiDeploymentStageprod0693B760' to be undefined. Fixit.`); }
    const booksApibooksGetApiPermissionSecondStackBooksApi2660Dec5geTbooksE54b6e9b = new lambda.CfnPermission(this, 'BooksApibooksGETApiPermissionSecondStackBooksApi2660DEC5GETbooksE54B6E9B', {
      action: 'lambda:InvokeFunction',
      functionName: cdk.Fn.importValue('FirstStack:ExportsOutputFnGetAttfirstLambda395F9ADEArn1A9B3BC3'),
      principal: 'apigateway.amazonaws.com',
      sourceArn: [
        'arn:',
        this.partition,
        ':execute-api:',
        this.region,
        ':',
        this.account,
        ':',
        booksApi60Ac975f.ref,
        '/',
        booksApiDeploymentStageprod0693B760.ref,
        '/GET/books',
      ].join(''),
    });

    // Outputs
    this.booksApiEndpointF2aa70a2 = [
      'https://',
      booksApi60Ac975f.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      booksApiDeploymentStageprod0693B760.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputBooksApiEndpointF2AA70A2', {
      key: 'BooksApiEndpointF2AA70A2',
      value: this.booksApiEndpointF2aa70a2!.toString(),
    });
  }
}

