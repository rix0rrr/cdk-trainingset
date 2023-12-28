import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface restapi-metricsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class restapi-metrics extends cdk.Stack {
  public readonly apiEndpoint4F160690;

  public constructor(scope: cdk.App, id: string, props: restapi-metricsProps = {}) {
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
    const apiCloudWatchRole73Ec6fc4 = new iam.CfnRole(this, 'ApiCloudWatchRole73EC6FC4', {
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
    apiCloudWatchRole73Ec6fc4.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;

    const apiF70053cd = new apigateway.CfnRestApi(this, 'ApiF70053CD', {
      name: 'Api',
    });

    const restApiAlarm9B915321 = new cloudwatch.CfnAlarm(this, 'RestApiAlarm9B915321', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'ApiName',
          value: 'Api',
        },
      ],
      metricName: '4XXError',
      namespace: 'AWS/ApiGateway',
      period: 300,
      statistic: 'Sum',
      threshold: 1,
    });

    if (apiCloudWatchRole73Ec6fc4 == null) { throw new Error(`A combination of conditions caused 'apiCloudWatchRole73Ec6fc4' to be undefined. Fixit.`); }
    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiAccountA18c9b29 = new apigateway.CfnAccount(this, 'ApiAccountA18C9B29', {
      cloudWatchRoleArn: apiCloudWatchRole73Ec6fc4.attrArn,
    });
    apiAccountA18c9b29.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.RETAIN;
    apiAccountA18c9b29.addDependency(apiF70053cd);

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiGet9257b917 = new apigateway.CfnMethod(this, 'ApiGET9257B917', {
      httpMethod: 'GET',
      resourceId: apiF70053cd.attrRootResourceId,
      restApiId: apiF70053cd.ref,
      authorizationType: 'NONE',
      integration: {
        type: 'MOCK',
      },
    });

    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    if (apiGet9257b917 == null) { throw new Error(`A combination of conditions caused 'apiGet9257b917' to be undefined. Fixit.`); }
    const apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73 = new apigateway.CfnDeployment(this, 'ApiDeploymentB17BE62Df672ad8455f9678e4a3db5854bdb8d73', {
      restApiId: apiF70053cd.ref,
      description: 'Automatically created by the RestApi construct',
    });
    apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73.addDependency(apiGet9257b917);

    if (apiAccountA18c9b29 == null) { throw new Error(`A combination of conditions caused 'apiAccountA18c9b29' to be undefined. Fixit.`); }
    if (apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73 == null) { throw new Error(`A combination of conditions caused 'apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73' to be undefined. Fixit.`); }
    if (apiF70053cd == null) { throw new Error(`A combination of conditions caused 'apiF70053cd' to be undefined. Fixit.`); }
    const apiDeploymentStageprod3Eb9684e = new apigateway.CfnStage(this, 'ApiDeploymentStageprod3EB9684E', {
      restApiId: apiF70053cd.ref,
      deploymentId: apiDeploymentB17be62Df672ad8455f9678e4a3db5854bdb8d73.ref,
      stageName: 'prod',
    });
    apiDeploymentStageprod3Eb9684e.addDependency(apiAccountA18c9b29);

    if (apiDeploymentStageprod3Eb9684e == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod3Eb9684e' to be undefined. Fixit.`); }
    const methodAlarm14370C32 = new cloudwatch.CfnAlarm(this, 'MethodAlarm14370C32', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'ApiName',
          value: 'Api',
        },
        {
          name: 'Method',
          value: 'GET',
        },
        {
          name: 'Resource',
          value: '/',
        },
        {
          name: 'Stage',
          value: apiDeploymentStageprod3Eb9684e.ref,
        },
      ],
      metricName: '5XXError',
      namespace: 'AWS/ApiGateway',
      period: 300,
      statistic: 'Sum',
      threshold: 1,
    });

    if (apiDeploymentStageprod3Eb9684e == null) { throw new Error(`A combination of conditions caused 'apiDeploymentStageprod3Eb9684e' to be undefined. Fixit.`); }
    const stageAlarm5Db1ce5b = new cloudwatch.CfnAlarm(this, 'StageAlarm5DB1CE5B', {
      comparisonOperator: 'GreaterThanOrEqualToThreshold',
      evaluationPeriods: 1,
      dimensions: [
        {
          name: 'ApiName',
          value: 'Api',
        },
        {
          name: 'Stage',
          value: apiDeploymentStageprod3Eb9684e.ref,
        },
      ],
      metricName: 'Count',
      namespace: 'AWS/ApiGateway',
      period: 300,
      statistic: 'SampleCount',
      threshold: 1,
    });

    // Outputs
    this.apiEndpoint4F160690 = [
      'https://',
      apiF70053cd.ref,
      '.execute-api.',
      this.region,
      '.',
      this.urlSuffix,
      '/',
      apiDeploymentStageprod3Eb9684e.ref,
      '/',
    ].join('');
    new cdk.CfnOutput(this, 'CfnOutputApiEndpoint4F160690', {
      key: 'ApiEndpoint4F160690',
      value: this.apiEndpoint4F160690!.toString(),
    });
  }
}

