import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ram from 'aws-cdk-lib/aws-ram';
import * as servicecatalogappregistry from 'aws-cdk-lib/aws-servicecatalogappregistry';

export interface integ-servicecatalogappregistry-applicationProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class integ-servicecatalogappregistry-application extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: integ-servicecatalogappregistry-applicationProps = {}) {
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

    const testApplication2Fbc585f = new servicecatalogappregistry.CfnApplication(this, 'TestApplication2FBC585F', {
      name: 'TestApplication',
      description: 'My application description',
    });

    const testApplicationmyAnotherAttributeGroup375F79db = new servicecatalogappregistry.CfnAttributeGroup(this, 'TestApplicationmyAnotherAttributeGroup375F79DB', {
      attributes: {
        stage: 'alpha',
        teamMembers: [
          'markI',
          'markII',
          'markIII',
        ],
        public: false,
        publishYear: 2021,
        plannedRoadMap: {
          alpha: 'some time',
          beta: 'another time',
          gamma: 'penultimate time',
          release: 'go time',
        },
      },
      name: 'myAnotherAttributeGroup',
      description: 'my another attribute group description',
    });

    const testAttributeGroupB1cb284f = new servicecatalogappregistry.CfnAttributeGroup(this, 'TestAttributeGroupB1CB284F', {
      attributes: {
        stage: 'alpha',
        teamMembers: [
          'markI',
          'markII',
          'markIII',
        ],
        public: false,
        publishYear: 2021,
        plannedRoadMap: {
          alpha: 'some time',
          beta: 'another time',
          gamma: 'penultimate time',
          release: 'go time',
        },
      },
      name: 'myAttributeGroup',
      description: 'my attribute group description',
    });

    if (testApplication2Fbc585f == null) { throw new Error(`A combination of conditions caused 'testApplication2Fbc585f' to be undefined. Fixit.`); }
    if (testAttributeGroupB1cb284f == null) { throw new Error(`A combination of conditions caused 'testAttributeGroupB1cb284f' to be undefined. Fixit.`); }
    const testApplicationAttributeGroupAssociation4ba7f5842818B8ee1c6f = new servicecatalogappregistry.CfnAttributeGroupAssociation(this, 'TestApplicationAttributeGroupAssociation4ba7f5842818B8EE1C6F', {
      application: testApplication2Fbc585f.attrId,
      attributeGroup: testAttributeGroupB1cb284f.attrId,
    });

    if (testApplication2Fbc585f == null) { throw new Error(`A combination of conditions caused 'testApplication2Fbc585f' to be undefined. Fixit.`); }
    if (testApplicationmyAnotherAttributeGroup375F79db == null) { throw new Error(`A combination of conditions caused 'testApplicationmyAnotherAttributeGroup375F79db' to be undefined. Fixit.`); }
    const testApplicationAttributeGroupAssociationb6f47e836a8c4Fcac29e = new servicecatalogappregistry.CfnAttributeGroupAssociation(this, 'TestApplicationAttributeGroupAssociationb6f47e836a8c4FCAC29E', {
      application: testApplication2Fbc585f.attrId,
      attributeGroup: testApplicationmyAnotherAttributeGroup375F79db.attrId,
    });

    if (myRoleF48ffe04 == null) { throw new Error(`A combination of conditions caused 'myRoleF48ffe04' to be undefined. Fixit.`); }
    if (testApplication2Fbc585f == null) { throw new Error(`A combination of conditions caused 'testApplication2Fbc585f' to be undefined. Fixit.`); }
    const testApplicationMyShareIdE1044482 = new ram.CfnResourceShare(this, 'TestApplicationMyShareIdE1044482', {
      name: 'MyShare',
      allowExternalPrincipals: false,
      permissionArns: [
        [
          'arn:',
          this.partition,
          ':ram::aws:permission/AWSRAMPermissionServiceCatalogAppRegistryApplicationReadOnly',
        ].join(''),
      ],
      principals: [
        myRoleF48ffe04.attrArn,
      ],
      resourceArns: [
        testApplication2Fbc585f.attrArn,
      ],
    });

    if (testApplication2Fbc585f == null) { throw new Error(`A combination of conditions caused 'testApplication2Fbc585f' to be undefined. Fixit.`); }
    const testApplicationResourceAssociationd232b63e52a8414E905d = new servicecatalogappregistry.CfnResourceAssociation(this, 'TestApplicationResourceAssociationd232b63e52a8414E905D', {
      application: testApplication2Fbc585f.attrId,
      resource: this.stackId,
      resourceType: 'CFN_STACK',
    });
  }
}

