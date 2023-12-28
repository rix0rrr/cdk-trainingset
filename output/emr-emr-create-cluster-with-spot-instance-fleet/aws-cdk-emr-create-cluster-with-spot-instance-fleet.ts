import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';

export interface aws-cdk-emr-create-cluster-with-spot-instance-fleetProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class aws-cdk-emr-create-cluster-with-spot-instance-fleet extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: aws-cdk-emr-create-cluster-with-spot-instance-fleetProps = {}) {
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
    const emrCreateClusterInstanceRoleC80466f5 = new iam.CfnRole(this, 'EmrCreateClusterInstanceRoleC80466F5', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const emrCreateClusterServiceRole5251910D = new iam.CfnRole(this, 'EmrCreateClusterServiceRole5251910D', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'elasticmapreduce.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      managedPolicyArns: [
        [
          'arn:',
          this.partition,
          ':iam::aws:policy/service-role/AmazonEMRServicePolicy_v2',
        ].join(''),
      ],
    });

    const smRole49C19c48 = new iam.CfnRole(this, 'SMRole49C19C48', {
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

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    const emrCreateClusterInstanceProfileC1729180 = new iam.CfnInstanceProfile(this, 'EmrCreateClusterInstanceProfileC1729180', {
      instanceProfileName: emrCreateClusterInstanceRoleC80466f5.ref,
      roles: [
        emrCreateClusterInstanceRoleC80466f5.ref,
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    const emrCreateClusterServiceRoleDefaultPolicyA8b4fa32 = new iam.CfnPolicy(this, 'EmrCreateClusterServiceRoleDefaultPolicyA8B4FA32', {
      policyDocument: {
        Statement: [
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: emrCreateClusterInstanceRoleC80466f5.attrArn,
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'EmrCreateClusterServiceRoleDefaultPolicyA8B4FA32',
      roles: [
        emrCreateClusterServiceRole5251910D.ref,
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    if (smRole49C19c48 == null) { throw new Error(`A combination of conditions caused 'smRole49C19c48' to be undefined. Fixit.`); }
    const smRoleDefaultPolicy34Ca15c7 = new iam.CfnPolicy(this, 'SMRoleDefaultPolicy34CA15C7', {
      policyDocument: {
        Statement: [
          {
            Action: [
              'elasticmapreduce:AddTags',
              'elasticmapreduce:DescribeCluster',
              'elasticmapreduce:RunJobFlow',
              'elasticmapreduce:TerminateJobFlows',
            ],
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'iam:PassRole',
            Effect: 'Allow',
            Resource: [
              emrCreateClusterInstanceRoleC80466f5.attrArn,
              emrCreateClusterServiceRole5251910D.attrArn,
            ],
          },
          {
            Action: 'elasticmapreduce:AddTags',
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':elasticmapreduce:',
              this.region,
              ':',
              this.account,
              ':cluster/*',
            ].join(''),
          },
          {
            Action: [
              'events:DescribeRule',
              'events:PutRule',
              'events:PutTargets',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:',
              this.partition,
              ':events:',
              this.region,
              ':',
              this.account,
              ':rule/StepFunctionsGetEventForEMRRunJobFlowRule',
            ].join(''),
          },
        ],
        Version: '2012-10-17',
      },
      policyName: 'SMRoleDefaultPolicy34CA15C7',
      roles: [
        smRole49C19c48.ref,
      ],
    });

    if (emrCreateClusterInstanceRoleC80466f5 == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterInstanceRoleC80466f5' to be undefined. Fixit.`); }
    if (emrCreateClusterServiceRole5251910D == null) { throw new Error(`A combination of conditions caused 'emrCreateClusterServiceRole5251910D' to be undefined. Fixit.`); }
    if (smRole49C19c48 == null) { throw new Error(`A combination of conditions caused 'smRole49C19c48' to be undefined. Fixit.`); }
    if (smRoleDefaultPolicy34Ca15c7 == null) { throw new Error(`A combination of conditions caused 'smRoleDefaultPolicy34Ca15c7' to be undefined. Fixit.`); }
    const sm934e715a = new stepfunctions.CfnStateMachine(this, 'SM934E715A', {
      definitionString: [
        '{\"StartAt\":\"EmrCreateCluster\",\"States\":{\"EmrCreateCluster\":{\"End\":true,\"Type\":\"Task\",\"Resource\":\"arn:',
        this.partition,
        ':states:::elasticmapreduce:createCluster.sync\",\"Parameters\":{\"Instances\":{\"InstanceFleets\":[{\"InstanceFleetType\":\"MASTER\",\"InstanceTypeConfigs\":[{\"InstanceType\":\"m5.xlarge\",\"WeightedCapacity\":1}],\"LaunchSpecifications\":{\"SpotSpecification\":{\"AllocationStrategy\":\"capacity-optimized\",\"TimeoutAction\":\"TERMINATE_CLUSTER\",\"TimeoutDurationMinutes\":60}},\"Name\":\"Master\",\"TargetSpotCapacity\":1}],\"KeepJobFlowAliveWhenNoSteps\":true},\"JobFlowRole\":\"',
        emrCreateClusterInstanceRoleC80466f5.ref,
        '\",\"Name\":\"Cluster\",\"ServiceRole\":\"',
        emrCreateClusterServiceRole5251910D.ref,
        '\",\"ReleaseLabel\":\"emr-5.36.1\",\"Tags\":[{\"Key\":\"Key\",\"Value\":\"Value\"},{\"Key\":\"for-use-with-amazon-emr-managed-policies\",\"Value\":\"true\"}],\"VisibleToAllUsers\":true}}}}',
      ].join(''),
      roleArn: smRole49C19c48.attrArn,
    });
    sm934e715a.cfnOptions.deletionPolicy = cdk.CfnDeletionPolicy.DELETE;
    sm934e715a.addDependency(smRoleDefaultPolicy34Ca15c7);
    sm934e715a.addDependency(smRole49C19c48);
  }
}

