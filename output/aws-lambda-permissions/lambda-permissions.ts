import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaPermissionsProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class LambdaPermissions extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: LambdaPermissionsProps = {}) {
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

    const myRoleF48ffe04 = new iam.CfnRole(this, 'MyRoleF48FFE04', {
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
    });

    if (myLambdaServiceRole4539Ecb6 == null) { throw new Error(`A combination of conditions caused 'myLambdaServiceRole4539Ecb6' to be undefined. Fixit.`); }
    const myLambdaCce802fb = new lambda.CfnFunction(this, 'MyLambdaCCE802FB', {
      code: {
        zipFile: 'foo',
      },
      handler: 'index.handler',
      role: myLambdaServiceRole4539Ecb6.attrArn,
      runtime: 'nodejs18.x',
    });
    myLambdaCce802fb.addDependency(myLambdaServiceRole4539Ecb6);

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaFunctionUrlC2055677 = new lambda.CfnUrl(this, 'MyLambdaFunctionUrlC2055677', {
      authType: 'AWS_IAM',
      targetFunctionArn: myLambdaCce802fb.attrArn,
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaInvoke138Af9iJcZoRjZnkckShZmMuVQwCnUkbFqMoQf5of0C1f7dfd8 = new lambda.CfnPermission(this, 'MyLambdaInvoke138AF9IJcZORjZNKCKShZMMuVQwCnUkbFqMoQf5of0C1F7DFD8', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: '*',
      principalOrgId: 'o-xxxxxxxxxx',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaInvokeFcyXbrx02eWa52GlFecQiCzDt0fdRuDi4mo4foC5aU41318f58 = new lambda.CfnPermission(this, 'MyLambdaInvokeFcyXBRX02EWa52GlFECQiCzDt0fdRUDi4mo4foC5aU41318F58', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: 'apigateway.amazonaws.com',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaInvokeSz2P2c4jOiX4AmIs1AnCq2qfq8PhgVeKtRaVyAkFmM7c8be4b5 = new lambda.CfnPermission(this, 'MyLambdaInvokeSz2P2C4jOiX4AmIs1ANCq2qfq8PhgVeKtRAVyAkFmM7C8BE4B5', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: '*',
      principalOrgId: 'o-mmmmmmmmmm',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    const myLambdaInvokehlab6Vr41INt1IuxIhhCesB4gzNedP5iurkNgciwD9d5eabd = new lambda.CfnPermission(this, 'MyLambdaInvokehlab6Vr41INt1IUXIhhCesB4gzNedP5IURKNgciwD9D5EABD', {
      action: 'lambda:InvokeFunction',
      functionName: myLambdaCce802fb.attrArn,
      principal: '*',
      principalOrgId: 'o-yyyyyyyyyy',
    });

    if (myLambdaCce802fb == null) { throw new Error(`A combination of conditions caused 'myLambdaCce802fb' to be undefined. Fixit.`); }
    if (myRoleF48ffe04 == null) { throw new Error(`A combination of conditions caused 'myRoleF48ffe04' to be undefined. Fixit.`); }
    const myRoleDefaultPolicyA36be1dd = new iam.CfnPolicy(this, 'MyRoleDefaultPolicyA36BE1DD', {
      policyDocument: {
        Statement: [
          {
            Action: 'lambda:InvokeFunctionUrl',
            Effect: 'Allow',
            Resource: myLambdaCce802fb.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'MyRoleDefaultPolicyA36BE1DD',
      roles: [
        myRoleF48ffe04.ref,
      ],
    });
  }
}

