import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as servicecatalog from 'aws-cdk-lib/aws-servicecatalog';

export interface IntegServicecatalogPortfolioProps extends cdk.StackProps {
  /**
   * Version of the CDK Bootstrap resources in this environment, automatically retrieved from SSM Parameter Store. [cdk:skip]
   * @default '/cdk-bootstrap/hnb659fds/version'
   */
  readonly bootstrapVersion?: string;
}

export class IntegServicecatalogPortfolio extends cdk.Stack {
  public constructor(scope: cdk.App, id: string, props: IntegServicecatalogPortfolioProps = {}) {
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
    const adminRole38563C57 = new iam.CfnRole(this, 'AdminRole38563C57', {
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

    const launchRole2Cfb2e44 = new iam.CfnRole(this, 'LaunchRole2CFB2E44', {
      assumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'servicecatalog.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });

    const secondTestPortfolio96C8f4ba = new servicecatalog.CfnPortfolio(this, 'SecondTestPortfolio96C8F4BA', {
      displayName: 'SecondTestPortfolio',
      providerName: 'TestProvider',
    });

    const tagOptions5f31c54ba705F110f743 = new servicecatalog.CfnTagOption(this, 'TagOptions5f31c54ba705F110F743', {
      key: 'key1',
      value: 'value1',
      active: true,
    });

    const tagOptions8d263919cebb6764Ac10 = new servicecatalog.CfnTagOption(this, 'TagOptions8d263919cebb6764AC10', {
      key: 'key1',
      value: 'value2',
      active: true,
    });

    const tagOptionsa260cbbd99c416C40f73 = new servicecatalog.CfnTagOption(this, 'TagOptionsa260cbbd99c416C40F73', {
      key: 'key2',
      value: 'value1',
      active: true,
    });

    const testGroupAf88660e = new iam.CfnGroup(this, 'TestGroupAF88660E', {
    });

    const testPortfolio4Ac794eb = new servicecatalog.CfnPortfolio(this, 'TestPortfolio4AC794EB', {
      displayName: 'TestPortfolio',
      providerName: 'TestProvider',
      acceptLanguage: 'en',
      description: 'This is our Service Catalog Portfolio',
    });

    const testProduct7606930B = new servicecatalog.CfnCloudFormationProduct(this, 'TestProduct7606930B', {
      name: 'testProduct',
      owner: 'testOwner',
      provisioningArtifactParameters: [
        {
          disableTemplateValidation: true,
          info: {
            LoadTemplateFromURL: 'https://awsdocs.s3.amazonaws.com/servicecatalog/development-environment.template',
          },
        },
      ],
    });

    const testRole6C9272df = new iam.CfnRole(this, 'TestRole6C9272DF', {
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

    const topic198E71b3e = new sns.CfnTopic(this, 'Topic198E71B3E', {
    });

    const specialTopic7664De4c = new sns.CfnTopic(this, 'specialTopic7664DE4C', {
    });

    if (secondTestPortfolio96C8f4ba == null) { throw new Error(`A combination of conditions caused 'secondTestPortfolio96C8f4ba' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const secondTestPortfolioPortfolioProductAssociationcda67a671c209Fe862f2 = new servicecatalog.CfnPortfolioProductAssociation(this, 'SecondTestPortfolioPortfolioProductAssociationcda67a671c209FE862F2', {
      portfolioId: secondTestPortfolio96C8f4ba.ref,
      productId: testProduct7606930B.ref,
    });

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 = new servicecatalog.CfnPortfolioProductAssociation(this, 'TestPortfolioPortfolioProductAssociationa0185761d231B0D998A7', {
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
    });

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    const testPortfolioPortfolioSharebf5b82f042508F035880 = new servicecatalog.CfnPortfolioShare(this, 'TestPortfolioPortfolioSharebf5b82f042508F035880', {
      accountId: '123456789012',
      portfolioId: testPortfolio4Ac794eb.ref,
    });

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testRole6C9272df == null) { throw new Error(`A combination of conditions caused 'testRole6C9272df' to be undefined. Fixit.`); }
    const testPortfolioPortolioPrincipalAssociation20e1afa20ac27E1a060d = new servicecatalog.CfnPortfolioPrincipalAssociation(this, 'TestPortfolioPortolioPrincipalAssociation20e1afa20ac27E1A060D', {
      portfolioId: testPortfolio4Ac794eb.ref,
      principalArn: testRole6C9272df.attrArn,
      principalType: 'IAM',
    });

    if (testGroupAf88660e == null) { throw new Error(`A combination of conditions caused 'testGroupAf88660e' to be undefined. Fixit.`); }
    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    const testPortfolioPortolioPrincipalAssociation44a1ca1c23384D6e460b = new servicecatalog.CfnPortfolioPrincipalAssociation(this, 'TestPortfolioPortolioPrincipalAssociation44a1ca1c23384D6E460B', {
      portfolioId: testPortfolio4Ac794eb.ref,
      principalArn: testGroupAf88660e.attrArn,
      principalType: 'IAM',
    });

    if (tagOptions5f31c54ba705F110f743 == null) { throw new Error(`A combination of conditions caused 'tagOptions5f31c54ba705F110f743' to be undefined. Fixit.`); }
    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    const testPortfolioTagOptionAssociation517ba9dbaf19Ea8252f0 = new servicecatalog.CfnTagOptionAssociation(this, 'TestPortfolioTagOptionAssociation517ba9dbaf19EA8252F0', {
      resourceId: testPortfolio4Ac794eb.ref,
      tagOptionId: tagOptions5f31c54ba705F110f743.ref,
    });

    if (tagOptions8d263919cebb6764Ac10 == null) { throw new Error(`A combination of conditions caused 'tagOptions8d263919cebb6764Ac10' to be undefined. Fixit.`); }
    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    const testPortfolioTagOptionAssociationb38e9aae7f1bD3708991 = new servicecatalog.CfnTagOptionAssociation(this, 'TestPortfolioTagOptionAssociationb38e9aae7f1bD3708991', {
      resourceId: testPortfolio4Ac794eb.ref,
      tagOptionId: tagOptions8d263919cebb6764Ac10.ref,
    });

    if (tagOptionsa260cbbd99c416C40f73 == null) { throw new Error(`A combination of conditions caused 'tagOptionsa260cbbd99c416C40f73' to be undefined. Fixit.`); }
    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    const testPortfolioTagOptionAssociationeeabbf0db0e3Adbf0a6d = new servicecatalog.CfnTagOptionAssociation(this, 'TestPortfolioTagOptionAssociationeeabbf0db0e3ADBF0A6D', {
      resourceId: testPortfolio4Ac794eb.ref,
      tagOptionId: tagOptionsa260cbbd99c416C40f73.ref,
    });

    if (tagOptionsa260cbbd99c416C40f73 == null) { throw new Error(`A combination of conditions caused 'tagOptionsa260cbbd99c416C40f73' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testProductTagOptionAssociation259ba31b62cc63D068f9 = new servicecatalog.CfnTagOptionAssociation(this, 'TestProductTagOptionAssociation259ba31b62cc63D068F9', {
      resourceId: testProduct7606930B.ref,
      tagOptionId: tagOptionsa260cbbd99c416C40f73.ref,
    });

    if (tagOptions5f31c54ba705F110f743 == null) { throw new Error(`A combination of conditions caused 'tagOptions5f31c54ba705F110f743' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testProductTagOptionAssociation667d45e6d8a1F30303d6 = new servicecatalog.CfnTagOptionAssociation(this, 'TestProductTagOptionAssociation667d45e6d8a1F30303D6', {
      resourceId: testProduct7606930B.ref,
      tagOptionId: tagOptions5f31c54ba705F110f743.ref,
    });

    if (tagOptions8d263919cebb6764Ac10 == null) { throw new Error(`A combination of conditions caused 'tagOptions8d263919cebb6764Ac10' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testProductTagOptionAssociationec68fcd0154fF6dad979 = new servicecatalog.CfnTagOptionAssociation(this, 'TestProductTagOptionAssociationec68fcd0154fF6DAD979', {
      resourceId: testProduct7606930B.ref,
      tagOptionId: tagOptions8d263919cebb6764Ac10.ref,
    });

    if (adminRole38563C57 == null) { throw new Error(`A combination of conditions caused 'adminRole38563C57' to be undefined. Fixit.`); }
    if (secondTestPortfolio96C8f4ba == null) { throw new Error(`A combination of conditions caused 'secondTestPortfolio96C8f4ba' to be undefined. Fixit.`); }
    if (secondTestPortfolioPortfolioProductAssociationcda67a671c209Fe862f2 == null) { throw new Error(`A combination of conditions caused 'secondTestPortfolioPortfolioProductAssociationcda67a671c209Fe862f2' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const secondTestPortfolioStackSetConstraintcda67a671c20A02367a6 = new servicecatalog.CfnStackSetConstraint(this, 'SecondTestPortfolioStackSetConstraintcda67a671c20A02367A6', {
      accountList: [
        '000000000000',
        '111111111111',
        '222222222222',
      ],
      adminRole: adminRole38563C57.attrArn,
      description: '',
      executionRole: 'StackSetExecutionRole',
      portfolioId: secondTestPortfolio96C8f4ba.ref,
      productId: testProduct7606930B.ref,
      regionList: [
        'us-east-1',
        'us-west-2',
        'eu-west-1',
      ],
      stackInstanceControl: 'ALLOWED',
    });
    secondTestPortfolioStackSetConstraintcda67a671c20A02367a6.addDependency(secondTestPortfolioPortfolioProductAssociationcda67a671c209Fe862f2);

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 == null) { throw new Error(`A combination of conditions caused 'testPortfolioPortfolioProductAssociationa0185761d231B0d998a7' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    if (specialTopic7664De4c == null) { throw new Error(`A combination of conditions caused 'specialTopic7664De4c' to be undefined. Fixit.`); }
    const testPortfolioLaunchNotificationConstrainta9675fc4d6aa995Bf1b9 = new servicecatalog.CfnLaunchNotificationConstraint(this, 'TestPortfolioLaunchNotificationConstrainta9675fc4d6aa995BF1B9', {
      notificationArns: [
        specialTopic7664De4c.ref,
      ],
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
      acceptLanguage: 'en',
      description: 'special topic description',
    });
    testPortfolioLaunchNotificationConstrainta9675fc4d6aa995Bf1b9.addDependency(testPortfolioPortfolioProductAssociationa0185761d231B0d998a7);

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 == null) { throw new Error(`A combination of conditions caused 'testPortfolioPortfolioProductAssociationa0185761d231B0d998a7' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    if (topic198E71b3e == null) { throw new Error(`A combination of conditions caused 'topic198E71b3e' to be undefined. Fixit.`); }
    const testPortfolioLaunchNotificationConstraintf2572fdcecadB6dd8541 = new servicecatalog.CfnLaunchNotificationConstraint(this, 'TestPortfolioLaunchNotificationConstraintf2572fdcecadB6DD8541', {
      notificationArns: [
        topic198E71b3e.ref,
      ],
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
    });
    testPortfolioLaunchNotificationConstraintf2572fdcecadB6dd8541.addDependency(testPortfolioPortfolioProductAssociationa0185761d231B0d998a7);

    if (launchRole2Cfb2e44 == null) { throw new Error(`A combination of conditions caused 'launchRole2Cfb2e44' to be undefined. Fixit.`); }
    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 == null) { throw new Error(`A combination of conditions caused 'testPortfolioPortfolioProductAssociationa0185761d231B0d998a7' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testPortfolioLaunchRoleConstrainta0185761d2312183162C = new servicecatalog.CfnLaunchRoleConstraint(this, 'TestPortfolioLaunchRoleConstrainta0185761d2312183162C', {
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
      roleArn: launchRole2Cfb2e44.attrArn,
    });
    testPortfolioLaunchRoleConstrainta0185761d2312183162C.addDependency(testPortfolioPortfolioProductAssociationa0185761d231B0d998a7);

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 == null) { throw new Error(`A combination of conditions caused 'testPortfolioPortfolioProductAssociationa0185761d231B0d998a7' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testPortfolioLaunchTemplateConstraintfac7b49c426e599F9fff = new servicecatalog.CfnLaunchTemplateConstraint(this, 'TestPortfolioLaunchTemplateConstraintfac7b49c426e599F9FFF', {
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
      rules: '{\"SubnetsinVPC\":{\"Assertions\":[{\"Assert\":{\"Fn::EachMemberIn\":[{\"Fn::ValueOfAll\":[\"AWs::EC2::Subnet::Id\",\"VpcId\"]},{\"Fn::RefAll\":\"AWS::EC2::VPC::Id\"}]},\"AssertDescription\":\"test description\"}]}}',
    });
    testPortfolioLaunchTemplateConstraintfac7b49c426e599F9fff.addDependency(testPortfolioPortfolioProductAssociationa0185761d231B0d998a7);

    if (testPortfolio4Ac794eb == null) { throw new Error(`A combination of conditions caused 'testPortfolio4Ac794eb' to be undefined. Fixit.`); }
    if (testPortfolioPortfolioProductAssociationa0185761d231B0d998a7 == null) { throw new Error(`A combination of conditions caused 'testPortfolioPortfolioProductAssociationa0185761d231B0d998a7' to be undefined. Fixit.`); }
    if (testProduct7606930B == null) { throw new Error(`A combination of conditions caused 'testProduct7606930B' to be undefined. Fixit.`); }
    const testPortfolioResourceUpdateConstrainta0185761d231Ab0eaae0 = new servicecatalog.CfnResourceUpdateConstraint(this, 'TestPortfolioResourceUpdateConstrainta0185761d231AB0EAAE0', {
      portfolioId: testPortfolio4Ac794eb.ref,
      productId: testProduct7606930B.ref,
      tagUpdateOnProvisionedProduct: 'ALLOWED',
    });
    testPortfolioResourceUpdateConstrainta0185761d231Ab0eaae0.addDependency(testPortfolioPortfolioProductAssociationa0185761d231B0d998a7);
  }
}

