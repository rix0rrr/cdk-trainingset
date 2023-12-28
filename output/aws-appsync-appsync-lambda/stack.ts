import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface stackProps extends cdk.StackProps {
  /**
   * S3 bucket for asset "8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73"
   */
  readonly assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73S3Bucket096530A6: string;
  /**
   * S3 key for asset version "8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73"
   */
  readonly assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73S3VersionKeyCf8c25d4: string;
  /**
   * Artifact hash for asset "8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73"
   */
  readonly assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73ArtifactHash60312028: string;
}

export class stack extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: stackProps) {
    super(scope, id, props);

    // Resources
    const lambdaApid6a5a92b = new appsync.CfnGraphQLApi(this, 'LambdaAPID6A5A92B', {
      authenticationType: 'API_KEY',
      name: 'LambdaAPI',
    });

    const lambdaApiLambdaDsServiceRole21Cacdf8 = new iam.CfnRole(this, 'LambdaAPILambdaDSServiceRole21CACDF8', {
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

    const funcServiceRoleA96ccb44 = new iam.CfnRole(this, 'funcServiceRoleA96CCB44', {
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

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    const lambdaApiSchemaCc5ca3d2 = new appsync.CfnGraphQLSchema(this, 'LambdaAPISchemaCC5CA3D2', {
      apiId: lambdaApid6a5a92b.attrApiId,
      definition: 'schema {\n    query: Query\n    mutation: Mutation\n}\n\ntype Query {\n    getPost(id:ID!): Post\n    allPosts: [Post]\n}\n\ntype Mutation {\n    addPost(id: ID!, author: String!, title: String, content: String, url: String): Post!\n}\n\ntype Post {\n    id: ID!\n    author: String!\n    title: String\n    content: String\n    url: String\n    ups: Int\n    downs: Int\n    relatedPosts: [Post]\n}',
    });

    if (funcServiceRoleA96ccb44 == null) { throw new Error(`A combination of conditions caused 'funcServiceRoleA96ccb44' to be undefined. Fixit.`); }
    const funcC3a0c2e2 = new lambda.CfnFunction(this, 'funcC3A0C2E2', {
      code: {
        s3Bucket: props.assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73S3Bucket096530A6!,
        s3Key: [
          cdk.Fn.select(0, cdk.Fn.split('||', props.assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73S3VersionKeyCf8c25d4!)),
          cdk.Fn.select(1, cdk.Fn.split('||', props.assetParameters8deae95d7935a4885bfc15a9af9fa85591ad93f3353790f242fca60881a6ec73S3VersionKeyCf8c25d4!)),
        ].join(''),
      },
      role: funcServiceRoleA96ccb44.attrArn,
      handler: 'lambda-tutorial.handler',
      runtime: 'nodejs14.x',
    });
    funcC3a0c2e2.addDependency(funcServiceRoleA96ccb44);

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiSchemaCc5ca3d2 == null) { throw new Error(`A combination of conditions caused 'lambdaApiSchemaCc5ca3d2' to be undefined. Fixit.`); }
    const lambdaApiDefaultApiKey15F6897d = new appsync.CfnApiKey(this, 'LambdaAPIDefaultApiKey15F6897D', {
      apiId: lambdaApid6a5a92b.attrApiId,
    });
    lambdaApiDefaultApiKey15F6897d.addDependency(lambdaApiSchemaCc5ca3d2);

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiLambdaDsServiceRole21Cacdf8 == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsServiceRole21Cacdf8' to be undefined. Fixit.`); }
    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsfd6df39b = new appsync.CfnDataSource(this, 'LambdaAPILambdaDSFD6DF39B', {
      apiId: lambdaApid6a5a92b.attrApiId,
      name: 'LambdaDS',
      type: 'AWS_LAMBDA',
      lambdaConfig: {
        lambdaFunctionArn: funcC3a0c2e2.attrArn,
      },
      serviceRoleArn: lambdaApiLambdaDsServiceRole21Cacdf8.attrArn,
    });

    if (lambdaApiLambdaDsServiceRole21Cacdf8 == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsServiceRole21Cacdf8' to be undefined. Fixit.`); }
    if (funcC3a0c2e2 == null) { throw new Error(`A combination of conditions caused 'funcC3a0c2e2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsServiceRoleDefaultPolicyFb1b9ce8 = new iam.CfnPolicy(this, 'LambdaAPILambdaDSServiceRoleDefaultPolicyFB1B9CE8', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunction',
            Effect: 'Allow',
            Resource: [
              funcC3a0c2e2.attrArn,
              [
                funcC3a0c2e2.attrArn,
                ':*',
              ].join(''),
            ],
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'LambdaAPILambdaDSServiceRoleDefaultPolicyFB1B9CE8',
      roles: [
        lambdaApiLambdaDsServiceRole21Cacdf8.ref,
      ],
    });

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiLambdaDsfd6df39b == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsfd6df39b' to be undefined. Fixit.`); }
    if (lambdaApiSchemaCc5ca3d2 == null) { throw new Error(`A combination of conditions caused 'lambdaApiSchemaCc5ca3d2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsMutationaddPostResolverDacb9777 = new appsync.CfnResolver(this, 'LambdaAPILambdaDSMutationaddPostResolverDACB9777', {
      apiId: lambdaApid6a5a92b.attrApiId,
      fieldName: 'addPost',
      typeName: 'Mutation',
      dataSourceName: 'LambdaDS',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"Invoke\", \"payload\": { \"field\": \"addPost\", \"arguments\": $utils.toJson($context.arguments)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    lambdaApiLambdaDsMutationaddPostResolverDacb9777.addDependency(lambdaApiLambdaDsfd6df39b);
    lambdaApiLambdaDsMutationaddPostResolverDacb9777.addDependency(lambdaApiSchemaCc5ca3d2);

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiLambdaDsfd6df39b == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsfd6df39b' to be undefined. Fixit.`); }
    if (lambdaApiSchemaCc5ca3d2 == null) { throw new Error(`A combination of conditions caused 'lambdaApiSchemaCc5ca3d2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsPostrelatedPostsResolverDe1b941a = new appsync.CfnResolver(this, 'LambdaAPILambdaDSPostrelatedPostsResolverDE1B941A', {
      apiId: lambdaApid6a5a92b.attrApiId,
      fieldName: 'relatedPosts',
      typeName: 'Post',
      dataSourceName: 'LambdaDS',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"BatchInvoke\", \"payload\": { \"field\": \"relatedPosts\", \"source\": $utils.toJson($context.source)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    lambdaApiLambdaDsPostrelatedPostsResolverDe1b941a.addDependency(lambdaApiLambdaDsfd6df39b);
    lambdaApiLambdaDsPostrelatedPostsResolverDe1b941a.addDependency(lambdaApiSchemaCc5ca3d2);

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiLambdaDsfd6df39b == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsfd6df39b' to be undefined. Fixit.`); }
    if (lambdaApiSchemaCc5ca3d2 == null) { throw new Error(`A combination of conditions caused 'lambdaApiSchemaCc5ca3d2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsQueryallPostsResolver8247596A = new appsync.CfnResolver(this, 'LambdaAPILambdaDSQueryallPostsResolver8247596A', {
      apiId: lambdaApid6a5a92b.attrApiId,
      fieldName: 'allPosts',
      typeName: 'Query',
      dataSourceName: 'LambdaDS',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"Invoke\", \"payload\": { \"field\": \"allPosts\"}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    lambdaApiLambdaDsQueryallPostsResolver8247596A.addDependency(lambdaApiLambdaDsfd6df39b);
    lambdaApiLambdaDsQueryallPostsResolver8247596A.addDependency(lambdaApiSchemaCc5ca3d2);

    if (lambdaApid6a5a92b == null) { throw new Error(`A combination of conditions caused 'lambdaApid6a5a92b' to be undefined. Fixit.`); }
    if (lambdaApiLambdaDsfd6df39b == null) { throw new Error(`A combination of conditions caused 'lambdaApiLambdaDsfd6df39b' to be undefined. Fixit.`); }
    if (lambdaApiSchemaCc5ca3d2 == null) { throw new Error(`A combination of conditions caused 'lambdaApiSchemaCc5ca3d2' to be undefined. Fixit.`); }
    const lambdaApiLambdaDsQuerygetPostResolver12F6ec71 = new appsync.CfnResolver(this, 'LambdaAPILambdaDSQuerygetPostResolver12F6EC71', {
      apiId: lambdaApid6a5a92b.attrApiId,
      fieldName: 'getPost',
      typeName: 'Query',
      dataSourceName: 'LambdaDS',
      kind: 'UNIT',
      requestMappingTemplate: '{\"version\": \"2017-02-28\", \"operation\": \"Invoke\", \"payload\": { \"field\": \"getPost\", \"arguments\": $utils.toJson($context.arguments)}}',
      responseMappingTemplate: '$util.toJson($ctx.result)',
    });
    lambdaApiLambdaDsQuerygetPostResolver12F6ec71.addDependency(lambdaApiLambdaDsfd6df39b);
    lambdaApiLambdaDsQuerygetPostResolver12F6ec71.addDependency(lambdaApiSchemaCc5ca3d2);
  }
}

