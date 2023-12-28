import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudformation from 'aws-cdk-lib/aws-cloudformation';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface integ-restapi-import-RootStackProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-restapi-import-RootStack extends cdk.Stack {
  public readonly petsUrl;
  public readonly booksUrl;

  public constructor(scope: cdk.App, id: string, props: integ-restapi-import-RootStackProps = {}) {
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
    const restApi0C43bf4b = new apigateway.CfnRestApi(this, 'RestApi0C43BF4B', {
      name: 'RestApi',
    });

    const restApiCloudWatchRoleE3ed6605 = new iam.CfnRole(this, 'RestApiCloudWatchRoleE3ED6605', {
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
    restApiCloudWatchRoleE3ed6605.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    const restApiAnya7c1dc94 = new apigateway.CfnMethod(this, 'RestApiANYA7C1DC94', {
      httpMethod: 'ANY',
      resourceId: restApi0C43bf4b.attrRootResourceId,
      restApiId: restApi0C43bf4b.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (restApiCloudWatchRoleE3ed6605 == null) { throw new Error(`A combination of conditions caused 'restApiCloudWatchRoleE3ed6605' to be undefined. Fixit.`); }
    const restApiAccount7C83cf5a = new apigateway.CfnAccount(this, 'RestApiAccount7C83CF5A', {
      cloudWatchRoleArn: restApiCloudWatchRoleE3ed6605.attrArn,
    });
    restApiAccount7C83cf5a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    restApiAccount7C83cf5a.addDependency(restApi0C43bf4b);

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    const integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2c9b = new cloudformation.CfnStack(this, 'integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2C9B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/480caddfb9aa669df64905982e75c672d967ce9d9ed261ee8c73f6bdcaf97141.json',
      ].join(''),
      parameters: {
        referencetointegrestapiimportRootStackRestApi2647DA4CRootResourceId: restApi0C43bf4b.attrRootResourceId,
        referencetointegrestapiimportRootStackRestApi2647DA4CRef: restApi0C43bf4b.ref,
      },
    });
    integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2c9b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    const integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898b = new cloudformation.CfnStack(this, 'integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898B', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/c6464ef3a9925cfe5c28d912ee7fc0952eb5135b281419c8d450a3aa8825e1ef.json',
      ].join(''),
      parameters: {
        referencetointegrestapiimportRootStackRestApi2647DA4CRootResourceId: restApi0C43bf4b.attrRootResourceId,
        referencetointegrestapiimportRootStackRestApi2647DA4CRef: restApi0C43bf4b.ref,
      },
    });
    integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898b.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;

    if (restApi0C43bf4b == null) { throw new Error(`A combination of conditions caused 'restApi0C43bf4b' to be undefined. Fixit.`); }
    if (integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2c9b == null) { throw new Error(`A combination of conditions caused 'integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2c9b' to be undefined. Fixit.`); }
    if (integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898b == null) { throw new Error(`A combination of conditions caused 'integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898b' to be undefined. Fixit.`); }
    const integrestapiimportDeployStackNestedStackintegrestapiimportDeployStackNestedStackResource0D0ee737 = new cloudformation.CfnStack(this, 'integrestapiimportDeployStackNestedStackintegrestapiimportDeployStackNestedStackResource0D0EE737', {
      templateUrl: [
        'https://s3.',
        this.region,
        '.',
        this.urlSuffix,
        '/',
        `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        '/04407a85c5bf6d4da110e25ee35b1f67903f760cd7835965518b0f7ad37e86ab.json',
      ].join(''),
      parameters: {
        referencetointegrestapiimportRootStackRestApi2647DA4CRef: restApi0C43bf4b.ref,
      },
    });
    integrestapiimportDeployStackNestedStackintegrestapiimportDeployStackNestedStackResource0D0ee737.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    integrestapiimportDeployStackNestedStackintegrestapiimportDeployStackNestedStackResource0D0ee737.addDependency(integrestapiimportBooksStackNestedStackintegrestapiimportBooksStackNestedStackResource395C2c9b);
    integrestapiimportDeployStackNestedStackintegrestapiimportDeployStackNestedStackResource0D0ee737.addDependency(integrestapiimportPetsStackNestedStackintegrestapiimportPetsStackNestedStackResource2B31898b);

    // Outputs
    this.petsUrl = [
      'https://',
      restApi0C43bf4b.ref,
      '.execute-api.',
      this.region,
      '.amazonaws.com/prod/pets',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputPetsURL', {
      key: 'PetsURL',
      value: this.petsUrl!.toString(),
    });
    this.booksUrl = [
      'https://',
      restApi0C43bf4b.ref,
      '.execute-api.',
      this.region,
      '.amazonaws.com/prod/books',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputBooksURL', {
      key: 'BooksURL',
      value: this.booksUrl!.toString(),
    });
  }
}

