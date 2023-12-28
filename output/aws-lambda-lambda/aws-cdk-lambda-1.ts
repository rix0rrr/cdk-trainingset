import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface aws-cdk-lambda-1Props extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-lambda-1 extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-lambda-1Props = {}) {
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
    const myLambdaServiceRole4539Ecb6 = new iam.CfnRole(this, 'MyLambdaServiceRole4539ECB6', {
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

    const mySnapStartLambdaServiceRoleE0f04324 = new iam.CfnRole(this, 'MySnapStartLambdaServiceRoleE0F04324', {
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

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaServiceRoleDefaultPolicy5Bbc6f68 = new iam.CfnPolicy(this, 'MyLambdaServiceRoleDefaultPolicy5BBC6F68', {
      policyDocument: {
        Statement: [
          {
            Action: '*',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyLambdaServiceRoleDefaultPolicy5BBC6F68',
      roles: [
        myLambdaServiceRole4539Ecb6.ref,
      ],
    });

    if (mySnapStartLambdaServiceRoleE0f04324 == null) { throw new Error(`A combination of conditions caused 'mySnapStartLambdaServiceRoleE0f04324' to be undefined. Fixit.`); }
    const mySnapStartLambda8F562e6e = new lambda.CfnFunction(this, 'MySnapStartLambda8F562E6E', {
      code: {
        s3Bucket: `cdk-hnb659fds-assets-${this.account}-${this.region}`,
        s3Key: 'a37d3ef54c18e7738fe5dc008504591bd3b1f14c6a09ee91eac6d55f7ca5ba5f.zip',
      },
      description: 'version-hash:cb4acf3f2fee0dc7ef3d57cc9e3c231f',
      handler: 'example.Handler::handleRequest',
      role: mySnapStartLambdaServiceRoleE0f04324.attrArn,
      runtime: 'java11',
      snapStart: {
        applyOn: 'PublishedVersions',
      },
    });
    mySnapStartLambda8F562e6e.addDependency(mySnapStartLambdaServiceRoleE0f04324);

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    if (myLambdaServiceRoleDefaultPolicy5Bbc6f68 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRoleDefaultPolicy5Bbc6f68' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        zipFile: 'foo',
      },
      description: 'version-hash:328ef84696e962e6a3e0f3c7b7e62c5d',
      handler: 'index.handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRoleDefaultPolicy5Bbc6f68);
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaCurrentVersionE7a382cc9ce8e408346691aecad19aa25bc70350 = new lambda.CfnVersion(this, 'MyLambdaCurrentVersionE7A382CC9ce8e408346691aecad19aa25bc70350', {
      functionName: myLambdaCce802fb.ref,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaFunctionUrlC2055677 = new lambda.CfnUrl(this, 'MyLambdaFunctionUrlC2055677', {
      authType: 'AWS_IAM',
      targetFunctionArn: myLambdaCce802fb.attrArn,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myLambdaCurrentVersionE7a382cc9ce8e408346691aecad19aa25bc70350 == null) { throw new Error(`A combination of conditions caused 'myLambdaCurrentVersionE7a382cc9ce8e408346691aecad19aa25bc70350' to be undefined. Fixit.`); }
    const alias325C5727 = new lambda.CfnAlias(this, 'Alias325C5727', {
      functionName: myLambdaCce802fb.ref,
      functionVersion: myLambdaCurrentVersionE7a382cc9ce8e408346691aecad19aa25bc70350.attrVersion,
      name: 'prod',
    });

    if (alias325C5727 == null) { throw new Error(`A combination of conditions caused 'alias325C5727' to be undefined. Fixit.`); }
    const aliasAliasPermissionAf30f9e8 = new lambda.CfnPermission(this, 'AliasAliasPermissionAF30F9E8', {
      action: 'lambda:InvokeFunction',
      functionName: alias325C5727.ref,
      principal: 'cloudformation.amazonaws.com',
    });

    if (alias325C5727 == null) { throw new Error(`A combination of conditions caused 'alias325C5727' to be undefined. Fixit.`); }
    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const aliasFunctionUrlDc6ec566 = new lambda.CfnUrl(this, 'AliasFunctionUrlDC6EC566', {
      authType: 'NONE',
      qualifier: 'prod',
      targetFunctionArn: myLambdaCce802fb.attrArn,
    });
    aliasFunctionUrlDc6ec566.addDependency(alias325C5727);

    if (alias325C5727 == null) { throw new Error(`A combination of conditions caused 'alias325C5727' to be undefined. Fixit.`); }
    const aliasinvokefunctionurl4Ca9917b = new lambda.CfnPermission(this, 'Aliasinvokefunctionurl4CA9917B', {
      action: 'lambda:InvokeFunctionUrl',
      functionName: alias325C5727.ref,
      functionUrlAuthType: 'NONE',
      principal: '*',
    });
  }
}

