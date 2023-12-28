import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ram from 'aws-cdk-lib/aws-ram';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface IntegServicecatalogappregistryAttributeGroupProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegServicecatalogappregistryAttributeGroup extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegServicecatalogappregistryAttributeGroupProps = {}) {
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
    const myRoleF48ffe04 = new iam.CfnRole(this, 'MyRoleF48FFE04', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const mySecondRoleB9f57405 = new iam.CfnRole(this, 'MySecondRoleB9F57405', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              AWS: [
                'arn:',
                this.partition,
                ':iam::',
                this.account,
                ':root',
              ].join(''),
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const testApplication2Fbc585f = new servicecatalogappregistry.CfnApplication(this, 'TestApplication2FBC585F', {
      name: 'TestApplication',
      description: 'My application description',
    });

    const testAttributeGroupB1cb284f = new servicecatalogappregistry.CfnAttributeGroup(this, 'TestAttributeGroupB1CB284F', {
      attributes: {
        stage: 'alpha',
        teamMembers: [
          'markI',
          'markII',
          'markIII',
        ],
        plannedRoadMap: {
          alpha: 'time1',
          beta: 'time2',
        },
      },
      name: 'myFirstAttributeGroup',
      description: 'test attribute group description',
    });

    if (testApplication2Fbc585f == null) { throw new Error(`A combination of conditions caused 'testApplication2Fbc585f' to be undefined. Fixit.`); }
    if (testAttributeGroupB1cb284f == null) { throw new Error(`A combination of conditions caused 'testAttributeGroupB1cb284f' to be undefined. Fixit.`); }
    const testAttributeGroupApplicationAttributeGroupAssociation73d834483ae31Bb2ba9a = new servicecatalogappregistry.CfnAttributeGroupAssociation(this, 'TestAttributeGroupApplicationAttributeGroupAssociation73d834483ae31BB2BA9A', {
      application: testApplication2Fbc585f.attrId,
      attributeGroup: testAttributeGroupB1cb284f.attrId,
    });

    if (myRoleF48ffe04 == null) { throw new Error(`A combination of conditions caused 'myRoleF48ffe04' to be undefined. Fixit.`); }
    if (mySecondRoleB9f57405 == null) { throw new Error(`A combination of conditions caused 'mySecondRoleB9f57405' to be undefined. Fixit.`); }
    if (testAttributeGroupB1cb284f == null) { throw new Error(`A combination of conditions caused 'testAttributeGroupB1cb284f' to be undefined. Fixit.`); }
    const testAttributeGroupMyShareIdBaa9e628 = new ram.CfnResourceShare(this, 'TestAttributeGroupMyShareIdBAA9E628', {
      name: 'MyShare',
      allowExternalPrincipals: false,
      permissionArns: [
        [
          'arn:',
          this.partition,
          ':ram::aws:permission/AWSRAMPermissionServiceCatalogAppRegistryAttributeGroupReadOnly',
        ].join(''),
      ],
      principals: [
        myRoleF48ffe04.attrArn,
        mySecondRoleB9f57405.attrArn,
      ],
      resourceArns: [
        testAttributeGroupB1cb284f.attrArn,
      ],
    });
  }
}

