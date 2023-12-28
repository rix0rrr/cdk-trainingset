import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface AwsStepfunctionsIntrinsicsIntegProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class AwsStepfunctionsIntrinsicsInteg extends cdk.Stack {
  public readonly exportsOutputRefStateMachine2E01a3a5ba46f753;

  public constructor(scope: cdk.App, id: string, props: AwsStepfunctionsIntrinsicsIntegProps = {}) {
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

    if (stateMachineRoleB840431d == null) { throw new Error(`A combination of conditions caused 'stateMachineRoleB840431d' to be undefined. Fixit.`); }
    const stateMachine2E01a3a5 = new stepfunctions.CfnStateMachine(this, 'StateMachine2E01A3A5', {
      definitionString: '{\"StartAt\":\"pass\",\"States\":{\"pass\":{\"Type\":\"Pass\",\"Parameters\":{\"array1.$\":\"States.Array(\'asdf\', $.Id)\",\"arrayPartition1.$\":\"States.ArrayPartition($.inputArray, 4)\",\"arrayPartition2.$\":\"States.ArrayPartition($.inputArray, $.chunkSize)\",\"arrayContains1.$\":\"States.ArrayContains($.inputArray, 5)\",\"arrayContains2.$\":\"States.ArrayContains($.inputArray, \'a\')\",\"arrayContains3.$\":\"States.ArrayContains($.inputArray, $.lookingFor)\",\"arrayRange1.$\":\"States.ArrayRange(1, 9, 2)\",\"arrayRange2.$\":\"States.ArrayRange($.start, $.end, $.step)\",\"arrayGetItem1.$\":\"States.ArrayGetItem($.inputArray, 5)\",\"arrayGetItem2.$\":\"States.ArrayGetItem($.inputArray, $.index)\",\"arrayLength1.$\":\"States.ArrayLength($.inputArray)\",\"arrayUnique1.$\":\"States.ArrayUnique($.inputArray)\",\"base64Encode1.$\":\"States.Base64Encode(\'Data to encode\')\",\"base64Encode2.$\":\"States.Base64Encode($.input)\",\"base64Decode1.$\":\"States.Base64Decode(\'RGF0YSB0byBlbmNvZGU=\')\",\"base64Decode2.$\":\"States.Base64Decode($.base64)\",\"hash1.$\":\"States.Hash(\'Input data\', \'SHA-1\')\",\"hash2.$\":\"States.Hash($.Data, $.Algorithm)\",\"jsonMerge1.$\":\"States.JsonMerge($.Obj1, $.Obj2, false)\",\"mathRandom1.$\":\"States.MathRandom(1, 999)\",\"mathRandom2.$\":\"States.MathRandom($.start, $.end)\",\"mathAdd1.$\":\"States.MathAdd(1, 999)\",\"mathAdd2.$\":\"States.MathAdd($.value1, $.step)\",\"stringSplit1.$\":\"States.StringSplit(\'1,2,3,4,5\', \',\')\",\"stringSplit2.$\":\"States.StringSplit($.inputString, $.splitter)\",\"stringSplit3.$\":\"States.StringSplit(\'1\\\\\\\\2\\\\\\\\3\\\\\\\\4\\\\\\\\5\', \'\\\\\\\\\')\",\"uuid.$\":\"States.UUID()\",\"format1.$\":\"States.Format(\'Hi my name is {}.\', $.Name)\",\"format2.$\":\"States.Format($.Format, $.Name)\",\"format3.$\":\"States.Format(\'Hello\\n{}\', $.Name)\",\"stringToJson1.$\":\"States.StringToJson($.Str)\",\"jsonToString1.$\":\"States.JsonToString($.Obj)\"},\"End\":true}}}',
      roleArn: stateMachineRoleB840431d.attrArn,
    });
    stateMachine2E01a3a5.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    stateMachine2E01a3a5.addDependency(stateMachineRoleB840431d);

    // Outputs
    this.exportsOutputRefStateMachine2E01a3a5ba46f753 = stateMachine2E01a3a5.ref;
    new cdk.CfnOutput(this, 'CfnOutputExportsOutputRefStateMachine2E01A3A5BA46F753', {
      key: 'ExportsOutputRefStateMachine2E01A3A5BA46F753',
      exportName: 'aws-stepfunctions-intrinsics-integ:ExportsOutputRefStateMachine2E01A3A5BA46F753',
      value: this.exportsOutputRefStateMachine2E01a3a5ba46f753!.toString(),
    });
  }
}

